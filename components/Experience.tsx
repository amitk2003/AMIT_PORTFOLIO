"use client";

import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink, FiLock } from "react-icons/fi";

interface ExperienceItem {
  role: string;
  company: string;
  duration: string;
  location: string;
  bullets: string[];
  github?: string;
  live?: string;
}

const experienceData: ExperienceItem[] = [
 
  {
    role: "AI/ML Research Intern",
    company: "NSTL — DRDO",
    duration: "May 2025 – Jul 2025",
    location: "Visakhapatnam, India",
    bullets: [
      "Developed deep learning–based underwater object detection models using YOLOv8, YOLOv11, and Faster-RCNN trained on 8,000+ sonar images.",
      "Implemented automated preprocessing, augmentation, and dataset conversion pipelines (YOLO → COCO), improving workflow efficiency by 40%.",
      "Evaluated models with Precision, Recall, mAP, and F1-score metrics and optimized inference for potential deployment in maritime security systems.",
      "Followed modular software engineering practices including unit testing, version control, logging, and reproducible architecture.",
    ],
    github: "https://github.com/amitk2003/DRDO_INTERNSHIP_CODE",
    live: "https://docs.google.com/document/d/1nnrOl-mWqAMjIQC1AL_mrch-0DrHK1OM/edit?usp=sharing&ouid=117885701390504352452&rtpof=true&sd=true",
  },
  {
    role: "Full-Stack Developer — Social Impact Project",
    company: "Rajasthan Government School",
    duration: "Aug 2025 - Sept 2025",
    location: "Rajasthan, India",
    bullets: [
      "Developed a full-stack school portal supporting and promoting free education access for underserved rural students.",
      "Built responsive UI using React, Tailwind CSS, and Framer Motion, with backend powered by Node.js, Express, MongoDB, and Multer.",
      "Designed modules including Admissions, Faculty, Gallery, Achievements, and Toppers, supporting 100+ new student enrollments.",
      "Deployed using CI/CD workflows with secure file uploads, responsive performance, and scalable architecture.",
    ],
    github: "https://github.com/amitk2003/Rajasthan-government-school",
    live: "https://rajasthan-government-school.vercel.app/",
  },
];

export default function Experience() {
  return (
    <SectionWrapper
      id="experience"
      subtitle="Experience"
      title="Where I've Worked"
    >
      <ol className="relative border-l border-slate-300 dark:border-slate-700 space-y-10 ml-3">
        {experienceData.map((exp, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="relative ml-6 group"
          >
            {/* Timeline dot */}
            <span className="absolute -left-[33px] w-4 h-4 rounded-full bg-slate-300 dark:bg-slate-600 border-4 border-white dark:border-[var(--background)] group-hover:bg-blue-500 transition-colors duration-300 z-10" />

            {/* CARD */}
            <div className="
                border border-slate-200 dark:border-slate-700
                rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-6 bg-white dark:bg-[var(--card)]
              "
            >
              <div className="flex flex-col md:flex-row justify-between gap-2">
                <h3 className="font-bold text-xl text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {exp.role}
                </h3>
                <span className="text-sm font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full w-fit">
                  {exp.duration}
                </span>
              </div>

              <p className="text-sm mt-2 text-slate-700 dark:text-slate-300 font-semibold tracking-wide uppercase">
                {exp.company} <span className="text-slate-400">・</span> {exp.location}
              </p>

              <ul className="mt-5 text-sm text-slate-600 dark:text-slate-300 space-y-3">
                {exp.bullets.map((point, i) => (
                  <li key={i} className="leading-relaxed flex gap-3 items-start">
                    <span className="text-blue-500 dark:text-blue-400 mt-1 flex-shrink-0">✦</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {/* LINK SECTION */}
              <div className="mt-6 flex flex-wrap gap-4 text-sm items-center">
                {exp.github && (
                  <a
                    href={exp.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 hover:text-black dark:hover:text-white transition-colors font-medium"
                  >
                    <FiGithub /> GitHub
                  </a>
                )}

                {exp.live && (
                  <a
                    href={exp.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors font-medium"
                  >
                    <FiExternalLink /> Live Demo
                  </a>
                )}

                {!exp.github && !exp.live && (
                  <span className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-500 dark:text-slate-400 text-xs italic font-medium">
                    <FiLock /> Work Not Public
                  </span>
                )}
              </div>
            </div>
          </motion.li>
        ))}
      </ol>
    </SectionWrapper>
  );
}
