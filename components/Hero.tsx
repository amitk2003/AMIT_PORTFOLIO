"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const buttonHover = {
  rest: { scale: 1 },
  hover: { scale: 1.05 },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="max-w-5xl px-4 mx-auto py-20 flex flex-col md:flex-row items-center gap-12"
    >
      {/* TEXT SIDE */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="flex-1"
      >
        <motion.h1
          variants={fadeUp}
          className="text-4xl md:text-5xl font-bold leading-tight"
        >
          Building Intelligent Software that Scales.
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mt-4 text-lg text-slate-600 leading-relaxed"
        >
          Hi, I’m <span className="font-semibold text-black-900">Amit Kumar</span> —  
          a Full-Stack Developer and Machine Learning Engineer focused on 
          designing scalable systems and meaningful digital experiences.
        </motion.p>

        <motion.p variants={fadeUp} className="mt-3 text-slate-600">
          I've worked across AI automation, ML research at DRDO, fintech backend 
          engineering, and product development through real-world internships and 
          deployed applications.
        </motion.p>

        {/* Buttons */}
        <motion.div variants={fadeUp} className="mt-6 flex gap-4">
          <motion.a
            href="#projects"
            initial="rest"
            whileHover="hover"
            animate="rest"
            variants={buttonHover}
            className="px-6 py-2 bg-black text-white rounded-full text-sm hover:bg-slate-800 transition"
          >
            View Projects
          </motion.a>

          <motion.a
            href="#contact"
            initial="rest"
            whileHover="hover"
            animate="rest"
            variants={buttonHover}
            className="px-6 py-2 border border-black rounded-full text-sm hover:bg-black hover:text-white transition"
          >
            Contact Me
          </motion.a>
        </motion.div>
      </motion.div>

      {/* IMAGE SIDE */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="w-52 h-52 overflow-hidden rounded-2xl shadow-md"
      >
        <Image
          src="/amit_latest.jpg"
          alt="Amit Kumar"
          width={700}
          height={700}
          className="object-cover w-full h-full"
        />
      </motion.div>
    </section>
  );
}
