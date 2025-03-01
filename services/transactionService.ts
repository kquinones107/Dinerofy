import { db } from "../config/firebaseConfig";
import { query, where, doc, getDoc, setDoc, updateDoc, collection, addDoc, serverTimestamp, getDocs } from "firebase/firestore";

export const sendMoney = async (senderId: string, receiverEmail: string, amount: number) => {
    try {
        const senderRef = doc(db, "users", senderId);
        const senderSnap = await getDoc(senderRef);

        if (!senderSnap.exists()) throw new Error("Cuenta de origen no encontrada");

        const senderData = senderSnap.data();
        if (senderData.balance < amount) throw new Error("Fondos insuficientes");

        // Buscar destinatario por email
        const usersCollection = collection(db, "users");
        const q = query(usersCollection, where("email", "==", receiverEmail));
        const usersSnap = await getDocs(q);

        if (usersSnap.empty) throw new Error("Cuenta de destino no encontrada");

        const receiverDoc = usersSnap.docs[0];  // Tomar el primer resultado
        const receiverRef = doc(db, "users", receiverDoc.id);
        const receiverData = receiverDoc.data();

        // Actualizar saldo de ambos usuarios
        await updateDoc(senderRef, { balance: senderData.balance - amount });
        await updateDoc(receiverRef, { balance: receiverData.balance + amount });

        // Registrar transacción
        await addDoc(collection(db, "transactions"), {
            senderId: senderId,
            receiverId: receiverDoc.id,
            amount: amount,
            timestamp: serverTimestamp(),
            status: "Success",
        });
        return "Transferencia exitosa";
    } catch (error) {
        throw error;
    }

};