import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";  // ✅ Usamos getAuth
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyCvurzQeoEoPVl0yV2cUGAUAibTwuuPGII",
    authDomain: "dinerofy-343f1.firebaseapp.com",
    projectId: "dinerofy-343f1",
    storageBucket: "dinerofy-343f1.firebasestorage.app",
    messagingSenderId: "228663727385",
    appId: "1:228663727385:web:8ef6466b67eed0ce3b6188"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);  // ✅ Corrección aquí
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };