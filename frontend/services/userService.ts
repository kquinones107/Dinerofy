import { db } from "../config/firebaseConfig";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";

export const getUserData = async (uid: string) =>  {
    try {
        const userDoc = await getDoc(doc(db, "users", uid));
        if (userDoc.exists()) {
            return userDoc.data();
        } else {
            throw new Error("Usuario no encontrado");
        }
    } catch (error) {
        throw error;
    }
};