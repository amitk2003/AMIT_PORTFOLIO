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
    live: "https://docs.google.com/document/d/1nnrOl-mWqAMjIQC1AL_mrch-0DrHK1OM/edit?usp=sharing&ouid=117885701390504352452&rtpof=true&sd=true", // no live deployment
  },
  {
    role: "Full-Stack Developer — Social Impact Project",
    company: "Rajasthan Government School",
    duration: "Aug 2025 – Sept 2025",
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
      <ol className="relative border-l border-slate-400 dark:border-slate-700 space-y-10 ml-3">
        {experienceData.map((exp, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative ml-4"
          >
            {/* Timeline dot */}
            <span className="absolute -left-3 w-3 h-3 rounded-full bg-slate-600 dark:bg-slate-300"></span>

            {/* CARD */}
            <div className="
                
                border border-slate-300 dark:border-slate-700
                rounded-xl shadow-md p-6
              " style={{ backgroundColor: "var(--card)" }}>
              <div className="flex flex-col md:flex-row justify-between gap-2">
                <h3 className="font-semibold  text-lg" style={{ color: "var(--foreground)" }}
>
                  {exp.role}
                </h3>

                <span className="text-sm text-slate-600 dark:text-slate-300">
                  {exp.duration}
                </span>
              </div>

              <p className="text-sm mt-1 text-slate-700 dark:text-slate-300 font-medium">
                {exp.company} ・ {exp.location}
              </p>

              <ul className="mt-4 text-sm text-slate-700 dark:text-slate-300 space-y-2">
                {exp.bullets.map((point, i) => (
                  <li key={i} className="leading-relaxed flex gap-2">
                    <span className="text-slate-500 dark:text-slate-400">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {/* LINK SECTION */}
              <div className="mt-4 flex gap-4 text-sm items-center">
                {exp.github ? (
                  <a
                    href={exp.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-slate-700 dark:text-slate-200 hover:text-black dark:hover:text-white"
                  >
                    <FiGithub /> GitHub
                  </a>
                ) : null}

                {exp.live ? (
                  <a
                    href={exp.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                  >
                    <FiExternalLink /> Live Demo
                  </a>
                ) : null}

                {!exp.github && !exp.live && (
                  <span className="flex items-center gap-1 text-slate-500 dark:text-slate-400 text-xs italic">
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
