"use client";
import { useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import {
  collection,
  addDoc,
  getDocs,
  DocumentData,
  QueryDocumentSnapshot,
} from "firebase/firestore";

interface Message {
  text: string;
  createdAt: Date;
}

export default function TestFirebasePage() {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "messages"));
      const data: Message[] = querySnapshot.docs.map(
        (doc: QueryDocumentSnapshot<DocumentData>) => {
          const d = doc.data();
          return {
            text: d.text,
            createdAt: d.createdAt?.toDate?.() ?? new Date(),
          };
        }
      );
      setMessages(data);
    };

    fetchData();
  }, []);

  const addMessage = async () => {
    await addDoc(collection(db, "messages"), {
      text: "Hello from AngerRoom!",
      createdAt: new Date(),
    });
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Firebase Test</h1>
      <button
        onClick={addMessage}
        className="px-4 py-2 bg-blue-600 text-white rounded cursor-pointer active:scale-105"
      >
        Add Message
      </button>
      <ul className="mt-4 space-y-2">
        {messages.map((m, i) => (
          <li key={i} className="px-4 py-4 border rounded-2xl">
            {m.text} <br /><span className="text-gray-500 text-sm">({m.createdAt.toString()})</span>
          </li>
        ))}
      </ul>
    </div>
  );
}