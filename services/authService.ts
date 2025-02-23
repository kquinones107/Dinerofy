import { auth } from "../config/firebaseConfig";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

// Función para registrar usuarios
export const registerUser = async (email: string, password: string) => {
  if (!email || !password) {
    throw new Error("El correo y la contraseña son obligatorios");
  }
  if (!email.includes("@")) {
    throw new Error("El formato del correo es inválido");
  }
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return userCredential.user;
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
