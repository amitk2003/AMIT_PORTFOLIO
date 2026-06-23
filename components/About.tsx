"use client";

import { motion, Variants } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

const textVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export default function About() {
  return (
    <SectionWrapper id="about" subtitle="About Me" title="Who I Am">
      <div className="space-y-6 text-base leading-relaxed text-slate-700 dark:text-slate-300">
        <motion.p
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
        >
          I'm{" "}
          <span className="font-semibold text-black dark:text-white">
            Amit Kumar
          </span>{" "}
          — a developer focused on building intelligent, scalable, and meaningful
          digital products. My work spans full-stack engineering, real-time systems,
          and applied machine learning with practical use-cases in fintech,
          education, security, and automation.
        </motion.p>

        <motion.p
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
        >
          I've contributed to{" "}
          <span className="font-semibold text-blue-600 dark:text-blue-400">
            AI/ML research at DRDO
          </span>
          , strengthened backend architectures during my time as an SDE intern at{" "}
          <span className="font-semibold text-blue-600 dark:text-blue-400">
            Bluestock Fintech
          </span>{" "}
          and built real-world solutions including a government school portal
          designed to enable access to free education for underserved communities.
        </motion.p>

        <motion.p
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
        >
          I enjoy solving hard problems, translating ideas into working systems,
          and continuously learning emerging technologies — whether it’s
          optimizing ML pipelines, designing scalable APIs, or building smooth
          product experiences.
        </motion.p>

        <motion.p
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
        >
          Outside of work, I like exploring research papers, improving my
          problem-solving skills, and contributing to personal projects that make
          real-world impact.
        </motion.p>
      </div>
    </SectionWrapper>
  );
}