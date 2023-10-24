import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDzQUQBTM1pnjsUM3CKjmv7RQC9YG5ZL8Q",
  authDomain: "chat-28056.firebaseapp.com",
  projectId: "chat-28056",
  storageBucket: "chat-28056.appspot.com",
  messagingSenderId: "870314202590",
  appId: "1:870314202590:web:c4a426d319fa376931b94f"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()