"use client";

import { Mail, Github, Linkedin, Send } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <SectionWrapper id="contact" subtitle="Contact" title="Let's Connect">
      <div className="grid md:grid-cols-2 gap-12 items-start mt-4">
        {/* TEXT + SOCIALS */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-base space-y-8 text-slate-600 dark:text-slate-300"
        >
          <p className="leading-relaxed text-lg">
            I'm currently available for full time role, part time internship, freelancing work across Software Development,Full stack development,AI Engineering,Data Science related roles.
          </p>

          <div className="space-y-6">
            <div>
              <p className="text-sm font-bold tracking-wider uppercase text-slate-400 mb-2">Email Me</p>
              <a
                href="mailto:amitk200703@gmail.com"
                className="inline-flex items-center gap-2 font-medium text-lg text-slate-900 dark:text-slate-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
              >
                <Mail size={20} className="group-hover:scale-110 transition-transform" />
                amitk200703@gmail.com
              </a>
            </div>

            <div>
              <p className="text-sm font-bold tracking-wider uppercase text-slate-400 mb-3">Socials</p>
              <div className="flex gap-4">
                <a
                  href="https://github.com/amitk2003"
                  className="p-3 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 hover:text-black dark:hover:text-white transition-all hover:scale-110 shadow-sm"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>

                <a
                  href="https://www.linkedin.com/in/amit-kumar-a5059624b/"
                  className="p-3 rounded-full bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/40 text-blue-600 dark:text-blue-400 transition-all hover:scale-110 shadow-sm"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* FORM CARD */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <form className="space-y-5 p-8 rounded-3xl shadow-xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-[var(--card)]/80 backdrop-blur-xl relative overflow-hidden">
            {/* Background glowing blob */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/10 rounded-full blur-3xl -z-10" />

            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Send me a message</h3>

            <div className="space-y-1 text-left">
              <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Your Name</label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full border border-slate-300 dark:border-slate-700 rounded-xl px-4 py-3 text-sm bg-slate-50 dark:bg-black/40 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all focus:scale-[1.01]"
              />
            </div>

            <div className="space-y-1 text-left">
              <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Email Address</label>
              <input
                type="email"
                placeholder="john@example.com"
                className="w-full border border-slate-300 dark:border-slate-700 rounded-xl px-4 py-3 text-sm bg-slate-50 dark:bg-black/40 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all focus:scale-[1.01]"
              />
            </div>

            <div className="space-y-1 text-left">
              <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Message</label>
              <textarea
                placeholder="What's on your mind?"
                rows={4}
                className="w-full border border-slate-300 dark:border-slate-700 rounded-xl px-4 py-3 text-sm bg-slate-50 dark:bg-black/40 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all focus:scale-[1.01] resize-y"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-bold tracking-wide bg-slate-900 dark:bg-white text-white dark:text-black hover:bg-slate-800 dark:hover:bg-slate-200 transition-colors shadow-lg"
            >
              <Send size={16} /> Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
