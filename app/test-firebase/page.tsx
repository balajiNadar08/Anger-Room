"use client";
import { useEffect, useState, useRef } from "react";
import { db } from "@/lib/firebase";
import { SendHorizontal } from 'lucide-react';
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
    <div className="min-h-screen flex flex-col justify-end relative overflow-hidden">
      <div className="fixed inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute w-full h-full bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.08)_0%,transparent_30%)]"></div>
          <div className="absolute w-full h-full bg-[radial-gradient(circle_at_80%_70%,rgba(0,161,156,0.2)_0%,transparent_40%)] blur-2xl"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto w-full flex flex-col gap-[2rem] px-4 py-8">
        <ul className="space-y-2 flex-1 flex flex-col items-start">
          {messages.map((m, i) => (
            <li key={i} className="inline-block px-4 py-4 border border-white/20 rounded-2xl backdrop-blur-sm bg-white/5">
              <span className="text-white">{m.text}</span>
              {/* <br />
              <span className="text-gray-400 text-sm">
                ({m.createdAt.toString()})
              </span> */}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          <input
            ref={userInputRef}
            type="text"
            placeholder="Rant 🔥🔥🔥..."
            className="flex-1 min-w-0 px-4 py-2 outline-none text-black bg-white rounded"
            // onKeyPress={handleKeyPress}
          />
          <button
            onClick={addMessage}
            className="px-4 py-2 bg-blue-600 text-white rounded cursor-pointer active:scale-105 transition-transform"
          >
            {/* Add Message */}
            <SendHorizontal />
          </button>
          <button
            onClick={handleRemoveAll}
            className="hidden px-4 py-2 bg-red-600 text-white rounded cursor-pointer active:scale-105 transition-transform"
          >
            Remove All
          </button>
        </div>
      </div>
    </div>
  );
}
