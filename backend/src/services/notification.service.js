import { db } from "../config/firebase.js";
import { getDocs, collection, query, where } from "firebase/firestore";


export const getNotifications = async (senderId) => {
    try {
        const notificationsCollection = collection(db, "notifications");
        const q = query(notificationsCollection, where("senderId", "==", senderId));
        const querySnapshot = await getDocs(q);

        if (querySnapshot.empty) {
            return [];
        }

        return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
        throw error;
    }
};