"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-30% 0px -50% 0px" }
    );

    navLinks.forEach((link) => {
      const id = link.href;
      if (id !== "#resume") { // Resume might just be a download link or another page
        const el = document.querySelector(id);
        if (el) observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50 px-4 py-3">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3 rounded-full border border-slate-200/50 dark:border-slate-700/50 bg-white/70 dark:bg-black/60 backdrop-blur-xl shadow-sm">
        
        {/* LOGO */}
        <Link href="#hero" className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
          Amit<span className="text-blue-500">.</span>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-1 items-center">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setActiveSection(link.href)}
                className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  isActive ? "text-blue-600 dark:text-white" : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="navbar-active"
                    className="absolute inset-0 bg-blue-50 dark:bg-white/10 rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                {link.label}
              </a>
            );
          })}
        </div>



        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 -mr-2 text-slate-600 dark:text-slate-300 hover:text-black dark:hover:text-white transition-colors"
          aria-label="Toggle Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-20 inset-x-4 p-4 rounded-2xl border border-slate-200/50 dark:border-slate-700/50 bg-white/95 dark:bg-[#0a0a0a]/95 backdrop-blur-2xl shadow-xl md:hidden flex flex-col gap-2"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => {
                    setOpen(false);
                    setActiveSection(link.href);
                  }}
                  className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                    isActive ? "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400" : "text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}

          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
