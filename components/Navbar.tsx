"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
   { href: "#resume", label: "Resume" }

];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 bg-white/80 backdrop-blur border-b border-slate-200 z-30">
      <nav className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">
        <Link href="#hero" className="text-lg font-semibold">
          Amit Kumar
        </Link>

        <div className="hidden md:flex gap-6 text-sm text-slate-600">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="relative hover:text-black after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-black hover:after:w-full after:transition-all after:duration-300">
              {link.label}
            </a>
          ))}
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden border p-2 rounded-lg">
          ☰
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className="bg-white border-b md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block px-4 py-2 text-sm"
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
