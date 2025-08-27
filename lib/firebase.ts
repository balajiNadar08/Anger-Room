import { initializeApp, getApps, FirebaseApp } from "firebase/app";
import { getFirestore, Firestore } from "firebase/firestore";
import { getAuth, Auth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyBfLuo75BUWrLxelpxh1EYUDwDsk32bYRk",
  authDomain: "angerroom-chat.firebaseapp.com",
  projectId: "angerroom-chat",
  storageBucket: "angerroom-chat.firebasestorage.app",
  messagingSenderId: "877334705998",
  appId: "1:877334705998:web:81f742d83a745472c8101f",
  measurementId: "G-TBQZDZLPMP"
};

let app: FirebaseApp;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0]!;
}

export const db: Firestore = getFirestore(app);
export const auth: Auth = getAuth(app);

// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);