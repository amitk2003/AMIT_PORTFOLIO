"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.18 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const buttonHover: Variants = {
  rest: { scale: 1 },
  hover: { scale: 1.05 },
};

// Floating + hover animation for image
const imageMotion: Variants = {
  initial: { opacity: 0, y: 20, scale: 0.9 },
  animate: {
    opacity: 1,
    y: [0, -10, 0], // floating motion
    scale: 1,
    transition: {
      duration: 4,
      repeat: Infinity,
      repeatType: "mirror",
      ease: "easeInOut",
    },
  },
  hover: {
    scale: 1.08,
    rotate: 2,
    transition: { duration: 0.25 },
  },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="max-w-6xl px-5 mx-auto py-20 flex flex-col md:flex-row items-center gap-12"
    >
      {/* LEFT SIDE CONTENT */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="flex-1"
      >
        <motion.h1
          variants={fadeUp}
          className="text-4xl md:text-6xl font-bold leading-tight tracking-tight"
        >
          Building Intelligent Software that Scales.
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mt-5 text-lg text-slate-600 leading-relaxed"
        >
          Hi, I’m <span className="font-bold text-grey-900">Amit Kumar</span> —
          a Full-Stack Developer ,Data scientist and Machine Learning Engineer focused on
          scalable architectures and AI-powered experiences.
        </motion.p>

        <motion.p variants={fadeUp} className="mt-2 text-slate-600 text-md">
          I've worked across AI automation, ML applied research, backend
          engineering, and real-world product deployment.
        </motion.p>

        <motion.div variants={fadeUp} className="mt-6 flex gap-4">
          <motion.a
            href="#projects"
            variants={buttonHover}
            initial="rest"
            whileHover="hover"
            className="px-6 py-2 bg-black text-white rounded-full text-sm hover:bg-slate-800 transition"
          >
            View Projects
          </motion.a>

          <motion.a
            href="#contact"
            variants={buttonHover}
            initial="rest"
            whileHover="hover"
            className="px-6 py-2 border border-black rounded-full text-sm hover:bg-black hover:text-white transition"
          >
            Contact Me
          </motion.a>
        </motion.div>
      </motion.div>

      {/* IMAGE BLOCK */}
      <motion.div
        variants={imageMotion}
        initial="initial"
        animate="animate"
        whileHover="hover"
        className="
          relative 
          rounded-3xl 
          shadow-xl 
          overflow-hidden 
          cursor-pointer
          w-60 h-60 md:w-80 md:h-80
          bg-gradient-to-br from-slate-200 to-slate-50
        "
      >
        <Image
          src="/amit_latest.jpg"
          alt="Amit Kumar"
          fill
          className="object-cover transition-all duration-500"
        />
      </motion.div>
    </section>
  );
}
