import { initializeApp, getApps, FirebaseApp } from "firebase/app";
import { getFirestore, Firestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: "angerroom-chat.firebaseapp.com",
  projectId: "angerroom-chat",
  storageBucket: "angerroom-chat.firebasestorage.app",
  messagingSenderId: "877334705998",
  appId: process.env.NEXT_PUBLIC_APP_ID,
  measurementId: "G-TBQZDZLPMP"
};

export let app: FirebaseApp;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0]!;
}

export const db: Firestore = getFirestore(app);
export const storage = getStorage(app);
