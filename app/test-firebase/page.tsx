"use client";
import { useEffect, useState, useRef } from "react";
import { db } from "@/lib/firebase";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  DocumentData,
  QueryDocumentSnapshot,
  onSnapshot,
} from "firebase/firestore";

interface Message {
  text: string;
  createdAt: Date;
}

export default function TestFirebasePage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const userInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "messages"), (snapshot) => {
      const data: Message[] = snapshot.docs.map(
        (doc: QueryDocumentSnapshot<DocumentData>) => {
          const d = doc.data();
          return {
            text: d.text,
            createdAt: d.createdAt?.toDate?.() ?? new Date(),
          };
        }
      );
      setMessages(data);
    });

    return () => unsubscribe();
  }, []);

  const addMessage = async () => {
    await addDoc(collection(db, "messages"), {
      text: userInputRef.current?.value,
      createdAt: new Date(),
    });
  };

  const handleRemoveAll = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "messages"));
      const deletePromises = querySnapshot.docs.map((document) => {
        deleteDoc(doc(db, "messages", document.id));
      });
      await Promise.all(deletePromises);
    } catch (error) {
      console.error("❌ Error deleting messages:", error);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Firebase Test</h1>
      <input
        ref={userInputRef}
        type="text"
        placeholder="Rant 🔥🔥🔥..."
        className="px-4 py-2 outline-none text-black bg-white rounded"
      />
      <button
        onClick={addMessage}
        className="px-4 py-2 mx-3 bg-blue-600 text-white rounded cursor-pointer active:scale-105"
      >
        Add Message
      </button>
      <button
        onClick={handleRemoveAll}
        className="px-4 py-2 bg-red-600 text-white rounded cursor-pointer active:scale-105"
      >
        Remove All
      </button>

      <ul className="mt-4 space-y-2">
        {messages.map((m, i) => (
          <li key={i} className="px-4 py-4 border rounded-2xl">
            {m.text} <br />
            <span className="text-gray-500 text-sm">
              ({m.createdAt.toString()})
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
