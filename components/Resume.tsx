"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { FiDownload, FiExternalLink } from "react-icons/fi";

export default function Resume() {
  return (
    <SectionWrapper id="resume" subtitle="Resume" title="My Resume">
      <div className="flex flex-col gap-6 items-center">

        {/* Buttons Row */}
        <div className="flex gap-4">
          <motion.a
            href="/resume.pdf"
            download
            whileHover={{ scale: 1.06 }}
            transition={{ duration: 0.2 }}
            className="px-6 py-2 bg-black text-white text-sm rounded-full flex items-center gap-2 hover:bg-slate-800"
          >
            <FiDownload /> Download Resume
          </motion.a>

          <motion.a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.06 }}
            transition={{ duration: 0.2 }}
            className="px-6 py-2 border border-black text-sm rounded-full flex items-center gap-2 hover:bg-black hover:text-white"
          >
            <FiExternalLink /> View in New Tab
          </motion.a>
        </div>

        {/* Resume Preview */}
        <motion.iframe
          src="/resume.pdf"
          className="w-full h-[600px] border rounded-xl shadow-md"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        />
      </div>
    </SectionWrapper>
  );
}
