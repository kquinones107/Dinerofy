import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";


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

const auth = getAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };