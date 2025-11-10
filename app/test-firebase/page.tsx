"use client";

import { useEffect, useState, useRef } from "react";
import { db } from "@/lib/firebase";
import { SendHorizontal, Trash2 } from "lucide-react";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  DocumentData,
  QueryDocumentSnapshot,
  onSnapshot,
  serverTimestamp,
  query,
  orderBy,
} from "firebase/firestore";
import { getAnonymousUser } from "@/lib/user";

interface Message {
  text: string;
  createdAt: Date;
  userId: string;
  username: string;
  avatar?: string;
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [user, setUser] = useState<any>(null);
  const userInputRef = useRef<HTMLInputElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("anon_user");
    if (!storedUser) {
      alert("Please set up your profile first.");
      window.location.href = "/profile-setup";
      return;
    }
    setUser(JSON.parse(storedUser));
  }, []);

  useEffect(() => {
    const q = query(
      collection(db, "messages"),
      orderBy("createdAt", "asc"),
      orderBy("__name__", "asc")
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data: Message[] = snapshot.docs.map(
        (doc: QueryDocumentSnapshot<DocumentData>) => {
          const d = doc.data();
          return {
            text: d.text as string,
            createdAt: d.createdAt?.toDate?.() ?? new Date(),
            userId: d.userId as string,
            username: d.username as string,
            avatar: d.avatar as string,
          };
        }
      );
      setMessages(data);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const addMessage = async () => {
    const inputEl = userInputRef.current;
    if (!inputEl) return;
    const value = inputEl.value.trim();
    if (!value) return;

    const user = getAnonymousUser();

    await addDoc(collection(db, "messages"), {
      text: value,
      createdAt: serverTimestamp(),
      uid: user.id,
    });

    inputEl.value = "";
  };

  const handleRemoveAll = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "messages"));
      const deletePromises = querySnapshot.docs.map((document) =>
        deleteDoc(doc(db, "messages", document.id))
      );
      await Promise.all(deletePromises);
    } catch (error) {
      console.error("❌ Error deleting messages:", error);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") addMessage();
  };

  return (
    <div className="h-screen flex flex-col relative pt-[4rem]">
      <div className="fixed inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute w-full h-full bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.08)_0%,transparent_30%)]"></div>
          <div className="absolute w-full h-full bg-[radial-gradient(circle_at_80%_70%,rgba(0,161,156,0.2)_0%,transparent_40%)] blur-2xl"></div>
        </div>
      </div>

      <div className="relative z-10 h-full max-w-5xl mx-auto w-full flex flex-col px-4">
        <div
          className="flex-1 overflow-y-auto py-4 mb-[4rem]"
          style={{
            scrollbarWidth: "thin",
            scrollbarColor: "rgba(255,255,255,0.3) transparent",
          }}
        >
          <style jsx>{`
            div::-webkit-scrollbar {
              width: 6px;
            }
            div::-webkit-scrollbar-track {
              background: transparent;
            }
            div::-webkit-scrollbar-thumb {
              background-color: rgba(255, 255, 255, 0.3);
              border-radius: 3px;
            }
            div::-webkit-scrollbar-thumb:hover {
              background-color: rgba(255, 255, 255, 0.5);
            }
          `}</style>

          {messages.length === 0 ? (
            <div className="flex items-center justify-center h-full">
              <p className="text-white/60 text-lg">
                No messages yet. Start the conversation! 🔥
              </p>
            </div>
          ) : (
            <div className="space-y-2 flex flex-col min-h-full justify-end">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`flex w-full ${
                    m.userId === user?.id ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`px-4 py-2 rounded-lg max-w-xs break-words flex items-center gap-2 ${
                      m.userId === user?.id
                        ? "bg-[#02e1da] text-black rounded-br-none ml-auto"
                        : "bg-white/5 border border-white/20 text-white rounded-bl-none mr-auto"
                    }`}
                  >
                    {m.avatar && (
                      <img
                        src={m.avatar}
                        alt="avatar"
                        className="w-6 h-6 rounded-full"
                      />
                    )}
                    <div>
                      <p className="text-xs opacity-70">{m.username}</p>
                      <p>{m.text}</p>
                    </div>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
          )}
        </div>

        <div className="py-4 fixed bottom-0 left-0 w-full">
          <div className="max-w-5xl mx-auto px-4">
            <div className="flex items-center gap-2 w-full">
              <input
                ref={userInputRef}
                type="text"
                placeholder="Say something..."
                className="flex-1 min-w-0 px-4 py-2 outline-none text-black bg-white rounded"
                onKeyDown={handleKeyDown}
              />
              <button
                onClick={addMessage}
                className="px-4 py-2 bg-blue-600 text-white rounded cursor-pointer active:scale-105 transition-transform"
              >
                <SendHorizontal />
              </button>
              <button
                onClick={handleRemoveAll}
                className="px-4 py-2 bg-red-600 text-white rounded cursor-pointer active:scale-105 transition-transform"
              >
                <Trash2 />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
