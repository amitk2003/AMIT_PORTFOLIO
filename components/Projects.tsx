"use client";

import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";

interface Project {
  title: string;
  tech: string[];
  description: string;
  github?: string;
  live?: string;
}

const projects: Project[] = [
  {
    title: "Intrusion Detection System (Real-Time Computer Vision)",
    tech: ["YOLOv8", "OpenCV", "Python", "Twilio API"],
    description:
      "Developed a real-time intrusion detection system using YOLO with robust face recognition, multi-person tracking, and environment resilience. Implemented alert automation with WhatsApp + email notifications, tested across low-light, occlusion, and motion-blur scenarios.",
    github: "https://github.com/amitk2003/Intrusion_detection_icps_project",
    live: "",
  },
  {
    title: "Books Unbound — Full-Stack E-Commerce Platform",
    tech: ["React", "Node.js", "MongoDB", "JWT", "Stripe", "Tailwind CSS"],
    description:
      "Built a secure bookstore platform with Google OAuth + JWT auth, user dashboards, favorites, purchase history, and live Stripe-based checkout. Implemented role-based access control with dedicated admin workflows and optimized DB queries for scalable performance.",
    github: "https://github.com/amitk2003/books-unbound",
    live: "",
  },
  {
    title: "AI Interview Helper Bot",
    tech: ["WebRTC", "Grok API", "OpenAI", "Express", "MongoDB"],
    description:
      "Designed an AI-driven platform that generates adaptive interview questions, records candidate responses using WebRTC, and evaluates speech using real-time transcription and LLM-based scoring insights for automated assessments.",
    github: "https://github.com/amitk2003/AI-INTERVIEW-HELPER",
    live: "",
  },
  {
    title: "Language Identification Model + Research",
    tech: ["Machine Learning", "TF-IDF", "Random Forest", "SVM"],
    description:
      "Built a multilingual classification model using TF-IDF, FFT-based linguistic feature extraction, and ML classification techniques. Achieved up to 96% accuracy across 17 languages, benchmarked across multiple ML models.",
    github: "https://github.com/Mahesh-git888/Language_Classification_Model",
    live: "https://drive.google.com/file/d/1111ezucZdf91crW3u2w-zjE-eJWvvjbW/view?usp=drive_link",
  },
  {
    title: "Tasty Track — Full-Stack Food Delivery Platform",
    tech: ["React", "Node.js", "MongoDB", "JWT", "Tailwind CSS"],
    description:
      "Developed a food delivery platform enabling users to explore dishes, authenticate securely, and maintain personalized order history. Implemented JWT authentication, role management, and a seamless UI for ordering workflows.",
    github: "https://github.com/amitk2003/Tasty_Track",
    live: "https://tasty-track-six.vercel.app/",
  },
  {
    title: "Government School Portal — Social Impact Project",
    tech: ["React", "Express", "MongoDB", "Tailwind CSS", "Multer"],
    description:
      "Built a school portal for Rajasthan government to support free education programs. Designed modules like Admissions, Faculty, Toppers, Gallery, and file uploads — enabling 100+ digital enrollments.",
    github: "https://github.com/amitk2003/Rajasthan-government-school",
    live: "https://rajasthan-government-school.vercel.app/",
  },
  {
    title: "Event Management Platform",
    tech: ["Django", "SQLite", "JavaScript", "Bootstrap", "jQuery"],
    description:
      "Developed a complete event planning system with authentication, CRUD operations, reward workflows, and overlay-based UI — improving event planning efficiency by ~40%.",
    github: "https://github.com/amitk2003/amit_innovators",
    live: "",
  },
];
const fadeUp = {
  hidden: { opacity: 0, y: 15 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Projects() {
  return (
    <SectionWrapper id="projects" subtitle="Projects" title="Things I've Built">
      <div className="space-y-6">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            style={{ pointerEvents: "auto",background:" bg-[var(--card)]" }}
            className="
              rounded-xl border
              border-slate-300 dark:border-slate-700
              shadow-md p-6
              hover:shadow-lg hover:-translate-y-1
              transition
            " 
          >
            <div className="flex flex-col md:flex-row justify-between gap-4">

              {/* LEFT BLOCK */}
              <div>
                <h3
                  className="text-lg font-semibold"
                  style={{ color: "var(--foreground)" }}
                >
                  {project.title}
                </h3>

                <p
                  className="mt-2 text-sm leading-relaxed"
                  style={{ color: "var(--foreground)", opacity: 0.8 }}
                >
                  {project.description}
                </p>

                <div className="mt-3 flex flex-wrap gap-2 text-xs">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="
                        px-2 py-1 rounded-full border
                        border-slate-300 dark:border-slate-600
                        text-slate-700 dark:text-slate-300
                        bg-white/60 dark:bg-black/20
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* RIGHT BLOCK - LINKS */}
              <div className="flex flex-col gap-2 text-sm items-start">

                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex items-center gap-1
                      text-blue-600 dark:text-blue-400
                      hover:text-blue-800 dark:hover:text-blue-300
                    "
                  >
                    <FiExternalLink /> Live Demo
                  </a>
                )}

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex items-center gap-1
                      text-slate-700 dark:text-slate-300
                      hover:text-black dark:hover:text-white
                    "
                  >
                    <FiGithub /> GitHub Repo
                  </a>
                )}
              </div>
            </div>
          </motion.article> 
        ))}
      </div>
    </SectionWrapper>
  );
}
