import { initializeApp, getApps, FirebaseApp } from "firebase/app";
import { getFirestore, Firestore } from "firebase/firestore";
import { getAuth, Auth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use

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
export const auth: Auth = getAuth(app);
export const storage = getStorage(app);