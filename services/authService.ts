import { auth, db } from "../config/firebaseConfig";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";

// Función para registrar usuarios
export const registerUser = async (email: string, password: string, fullName: string, phone: number) => {
  if (!email || !password) {
    throw new Error("El correo y la contraseña son obligatorios");
  }
  if (!email.includes("@")) {
    throw new Error("El formato del correo es inválido");
  }
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Crear el documento del usuario en la colección "users"
    await setDoc(doc(db, "users", user.uid), {
      email,  
      fullName,
      phone,
      balance: 5000,
      createdAt: serverTimestamp(),
    });

    return user;

  } catch (error) {
    throw error;
  }
};

// Función para iniciar sesión
export const loginUser = async (email: string, password: string) => {

  if (!email || !password) {
    throw new Error("El correo y la contraseña son obligatorios");
  }
  if (!email.includes("@")) {
    throw new Error("El formato del correo es inválido");
  }
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    throw error;
  }
};

// Función para cerrar sesión
export const logoutUser = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    throw error;
  }
};
