"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { X, Menu } from "lucide-react";

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
    { label: "Chat", href: "/chat" },
    { label: "About DEV", href: "/about-dev" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <div className="shadow-lg">
      <div className="flex items-center justify-between px-6 py-3">
        <Link href="/">
          <h1 className="text-3xl font-bold">AngerChat</h1>
        </Link>

        <div className="hidden md:flex gap-8">
          {navItems.map((item, index) => (
            <div key={index} className="relative">
              <Link
                href={item.href}
                className={`text-[1.2rem] ${
                  pathname === item.href &&
                  "before:absolute before:h-2.5 before:w-2.5 before:rounded-2xl before:-top-1 before:-right-2 before:bg-[#333]"
                }`}
              >
                {item.label}
              </Link>
            </div>
          ))}
        </div>

        <div className="flex items-center">
          {!signedUp && (
            <button className="hidden md:block border-2 rounded-md text-[1.1rem] px-4 py-1.5 cursor-pointer hover:bg-black hover:text-white transition-all">
              Sign up
            </button>
          )}

          <button
            className="md:hidden cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="flex flex-col px-6 py-3 space-y-3 md:hidden bg-white border-t">
          {navItems.map((item, index) => (
            <Link key={index} href={item.href} className="text-[1.2rem]">
              {item.label}
            </Link>
          ))}

          {!signedUp && (
            <button className="block md:hidden border-2 rounded-md text-[1.1rem] px-4 py-1.5 hover:bg-black hover:text-white transition-all">
              Sign up
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
