"use client";

import { motion, Variants } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

const skillGroups = [
  {
    category: "Languages",
    items: ["C++", "Python", "TypeScript", "JavaScript", "Java"],
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    category: "Data Science",
    items: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn", "Power BI", "EDA"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "REST APIs", "FastAPI", "Flask", "Java", "Spring Boot"],
  },
  {
    category: "Database",
    items: ["MongoDB", "SQL", "Redis"],
  },
  {
    category: "Gen-AI",
    items: ["RAG", "LangChain", "Vector DB", "Agentic AI"],
  },
  {
    category: "DevOps & Cloud",
    items: ["AWS (EC2, S3)", "Vercel", "CI/CD", "Docker"],
  },
  {
    category: "Tools & Others",
    items: ["Git & GitHub", "Postman / Thunder Client", "JWT Authentication", "Machine Learning"],
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Skills() {
  return (
    <SectionWrapper id="skills" subtitle="Skills" title="What I Use">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        {skillGroups.map((group) => (
          <motion.div
            key={group.category}
            variants={cardVariants}
            whileHover={{ y: -5, scale: 1.02 }}
            className="border border-slate-200 dark:border-slate-700 rounded-xl bg-white dark:bg-[var(--card)] shadow-sm hover:shadow-lg transition-all p-5"
          >
            <h3 className="font-semibold text-sm text-slate-800 dark:text-slate-200">
              {group.category}
            </h3>

            <ul className="mt-4 text-sm text-slate-600 dark:text-slate-400 space-y-2">
              {group.items.map((skill) => (
                <li key={skill} className="flex items-center gap-2 group">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-400 group-hover:scale-150 transition-transform" />
                  <span className="group-hover:text-black dark:group-hover:text-white transition-colors">
                    {skill}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}