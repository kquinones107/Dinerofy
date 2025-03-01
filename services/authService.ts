import { auth, db } from "../config/firebaseConfig";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import axios from 'axios';
// Función para registrar usuarios
export const registerUser = async (email: string, password: string, fullName: string, phone: number) => {
  return axios.post('http://192.168.1.4:5000/api/auth/register', {
    email,
    password,
    fullName,
    phone
  });
};

// Función para iniciar sesión
export const loginUser = async (email: string, password: string) => {
  return axios.post('http://192.168.1.4:5000/api/auth/login', {
    email,
    password
  });
};

// Función para cerrar sesión
export const logoutUser = async () => {
  return axios.post('http://192.168.1.4:5000/api/auth/logout');
};
