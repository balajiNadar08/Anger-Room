"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { X, Menu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavItem {
  label: string;
  href: string;
}

const Navbar = () => {
  const [signedUp, setSignedUp] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems: NavItem[] = [
    { label: "Home", href: "/" },
    { label: "Chat", href: "/test-firebase" },
    // { label: "Chat", href: "/chat" },
    { label: "About DEV", href: "/about-dev" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <div className="fixed top-0 left-0 w-full bg-white/5 backdrop-blur-md border border-white/10 z-20 shadow-lg ">
      <div className="flex items-center justify-between px-6 py-3">
        <Link href="/">
          <h1 className="text-3xl text-[#FFF] font-bold">AngerChat</h1>
        </Link>

        <div className="hidden md:flex gap-8">
          {navItems.map((item, index) => (
            <div key={index} className="relative">
              <Link
                href={item.href}
                className={`text-[1.2rem] text-[#FFF] hover:before:absolute hover:before:h-2.5 hover:before:w-2.5 hover:before:rounded-2xl 
                  hover:before:-top-1 hover:before:-right-2 hover:before:bg-[#00A19C] transition-all ${
                    pathname === item.href &&
                    "before:absolute before:h-2.5 before:w-2.5 before:rounded-2xl before:-top-1 before:-right-2 before:bg-[white]"
                  }`}
              >
                {item.label}
              </Link>
            </div>
          ))}
        </div>

        <div className="flex items-center">
          {!signedUp && (
            <Link href={"/login"}>
              <button
                className="hidden md:block bg-gradient-to-r from-white to-[#00A19C] text-black font-bold border-2 rounded-md text-[1.1rem] 
              px-5 py-1.5 cursor-pointer shadow-md shadow-white/10 hover:opacity-90 hover:shadow-lg transition-all"
              >
                Sign Up
              </button>
            </Link>
          )}

          <button
            className="md:hidden cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X size={28} className="text-[#FFF]" />
            ) : (
              <Menu size={28} className="text-[#FFF]" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="flex flex-col px-6 py-3 space-y-3 md:hidden bg-white/5 backdrop-blur-md border border-white/10"
          >
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="text-[1.2rem] text-[#FFF]"
              >
                {item.label}
              </Link>
            ))}

            {!signedUp && (
              <button
                className="block md:hidden bg-gradient-to-r from-white to-[#00A19C] text-black font-bold border-2 rounded-md 
              text-[1.1rem] px-4 py-1.5 cursor-pointer shadow-md shadow-white/10 hover:opacity-90 hover:shadow-lg transition-all"
              >
                Sign up
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
