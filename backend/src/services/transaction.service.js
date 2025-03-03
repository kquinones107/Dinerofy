import { db } from "../config/firebase.js";
import { doc, getDoc, serverTimestamp, updateDoc, addDoc, getDocs, collection, query, where } from "firebase/firestore";

export const send = async (senderEmail, receiverEmail, amount, note) => {
    console.log({
        senderEmail,
        receiverEmail,
        amount,
        note
    })
    try {
        if (amount <= 0) throw new Error("El monto debe ser mayor a cero");
        const usersCollection = collection(db, "users");
        const fromUser = query(usersCollection, where("email", "==", senderEmail));
        const fromUserSnap = await getDocs(fromUser);
        if (fromUserSnap.empty) throw new Error("Cuenta de origen no encontrada");

        const senderDoc = fromUserSnap.docs[0];
        const senderRef = doc(db, "users", senderDoc.id);
        const senderData = senderDoc.data();

        if (senderData.balance < amount) throw new Error("Fondos insuficientes");

        // Buscar destinatario por email
        const q = query(usersCollection, where("email", "==", receiverEmail));
        const usersSnap = await getDocs(q);
        if (usersSnap.empty) throw new Error("Cuenta de destino no encontrada");

        const receiverDoc = usersSnap.docs[0];
        const receiverRef = doc(db, "users", receiverDoc.id);
        const receiverData = receiverDoc.data();

        // Actualizar saldos
        await updateDoc(senderRef, { balance: senderData.balance - amount });
        await updateDoc(receiverRef, { balance: receiverData.balance + amount });

        // Registrar transacción
        await addDoc(collection(db, "transactions"), {
            senderId: senderDoc.id,
            receiverId: receiverDoc.id,
            amount,
            timestamp: serverTimestamp(),
        });


        // Crear notificación
        await addDoc(collection(db, "notifications"), {
            senderId: senderDoc.id,
            receiverId: receiverDoc.id,
            message: note ? note : `Transferencia recibida por ${amount} USD`,
            createdAt: serverTimestamp(),
        });

        return { message: "Transferencia realizada con éxito" };
    } catch (error) {
        console.log(error)
        throw error;
    }
};

export const getTransactions = async (senderId) => {
    try {
        const transactionsCollection = collection(db, "transactions");
        const q = query(transactionsCollection, where("senderId", "==", senderId));
        const querySnapshot = await getDocs(q);

        if (querySnapshot.empty) {
            return [];
        }

        const transactions = await Promise.all(querySnapshot.docs.map(async (data) => {
            const transaction = data.data();
            
            // Obtener email del receiverId
            const receiverRef = doc(db, "users", transaction.receiverId);
            const receiverSnap = await getDoc(receiverRef);
            const receiverEmail = receiverSnap.exists() ? receiverSnap.data().email : "Desconocido";
            
            return {
                id: data.id,
                senderId: transaction.senderId,
                receiverEmail,
                amount: transaction.amount,
                timestamp: transaction.timestamp
            };
        }));

        return transactions;
    } catch (error) {
        throw error;
    }
};