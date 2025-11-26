"use client";

import { motion } from "framer-motion";
import React from "react";

interface SectionProps {
  id: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
}

export default function SectionWrapper({ id, title, subtitle, children }: SectionProps) {
  return (
    <section id={id} className="w-full max-w-5xl mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        {(title || subtitle) && (
          <header className="mb-8">
            {subtitle && (
              <p className="text-sm tracking-wide text-slate-300 uppercase">
                {subtitle}
              </p>
            )}
            {title && (
              <h2 className="text-3xl font-semibold tracking-tight">
                {title}
              </h2>
            )}
          </header>
        )}
        {children}
      </motion.div>
    </section>
  );
}
