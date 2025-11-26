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
    <header className="
      sticky top-0 z-30
      backdrop-blur-lg border-b
      
      border-slate-300 dark:border-slate-700
    " style={{background:"bg-[var(--card)]/80"}}>
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        
        {/* LOGO */}
        <Link href="#hero" className="text-lg font-semibold "style={{ color: "var(--foreground)" }}>
          Amit Kumar
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-6 text-sm " style={{ color: "var(--foreground)" }}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative hover:text-blue-500 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-blue-500 hover:after:w-full after:transition-all after:duration-300" 
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden border border-slate-400 dark:border-slate-600 p-2 rounded-lg " style={{ color: "var(--foreground)" }}
        >
          ☰
        </button>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className=" border-b border-slate-300 dark:border-slate-700 md:hidden"
          style={{backgroundColor: "var(--card)",color:"dark" }}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block px-4 py-3 text-sm  hover:bg-slate-100 dark:hover:bg-slate-800 transition" style={{ color: "var(--foreground)" }}
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
