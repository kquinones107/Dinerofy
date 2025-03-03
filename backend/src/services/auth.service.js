import { auth, db } from "../config/firebase.js";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";

export const registerUser = async (email, password, fullName, phone) => {
    if (!email || !password) throw new Error("Correo y contraseña son obligatorios");
    if (!email.includes("@")) throw new Error("Formato de correo inválido");
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      await setDoc(doc(db, "users", user.uid), {
        email, fullName, phone, balance: 5000, createdAt: serverTimestamp(),
      });
      return user;
    } catch (error) {
      throw error;
    }
  };
  
export const loginUser = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return userCredential.user;
    } catch (error) {
        throw error;
    }
};

export const logoutUser = async () => {
    try {
        await signOut(auth);
        return { message: "Sesión cerrada correctamente" };
    } catch (error) {
        throw error;
    }
};
