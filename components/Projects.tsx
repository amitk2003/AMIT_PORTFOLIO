"use client";

import { useState } from "react";
import SectionWrapper from "./SectionWrapper";
import { motion, AnimatePresence } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";

type Category = "Full Stack" | "Gen AI" | "Data Science";

interface Project {
  title: string;
  tech: string[];
  description: string;
  github?: string;
  live?: string;
  category: Category;
}

const projects: Project[] = [
  {
    title: "Books Unbound — Full-Stack E-Commerce Platform",
    tech: ["Designing Schema","system Design","React", "Node.js","Tailwind CSS", "MongoDB", "JWT", "Stripe"],
    description:
      "Books Unbound is a modern, full-stack MERN (MongoDB, Express, React, Node.js) e-commerce application designed to deliver a seamless online bookstore experience. The platform features a responsive, animated frontend built with React and Tailwind CSS, and a robust backend utilizing secure JWT/Google OAuth authentication and Stripe for online payments. It supports two primary roles: Users, who can browse catalogs, manage their cart and favorites, leave reviews, and track orders securely via an OTP delivery system; and Admins, who have specialized access to manage book inventory, update pricing, and oversee the complete order fulfillment lifecycle.",
    github: "https://github.com/amitk2003/books-unbound",
    live:"https://books-unbound.vercel.app/",
    category: "Full Stack"
  },
  {  
    title: "AI Interview Helper Bot",
    tech: ["WebRTC", "OpenAI", "Express", "MongoDB","React Js"],
    description:
      "AI-powered interview system generating adaptive questions and analyzing speech with LLM scoring.",
    github: "https://github.com/amitk2003/AI-INTERVIEW-HELPER",
    category: "Gen AI"
  },
  {  
    title: "Scalable AI Finance Automation Platform",
    tech: ["python", "Websockets", "Langchain", "Postgres SQL","React","Fastapi","Gemini","Redis","Docker"],
    description:
      "Developed an AI-powered financial workflow automation platform to reduce the manual burden on finance and accounting teams. The system automated data ingestion, transaction reconciliation, and report generation through FastAPI-based services, eliminating repetitive financial operations and improving accuracy. By integrating LangChain and OpenAI-powered workflows, the platform generated intelligent financial summaries and reports, reducing manual effort by 80% and enabling accountants to focus on higher-value analysis. Dockerized deployment ensured scalable and reliable operation across environments",
    github: "https://github.com/amitk2003/Multimodal-Agentic-ai",
    live:"https://drive.google.com/file/d/1oyxCJGskhjM4etTQ2QkBE2Hqky-Je6KP/view?usp=sharing",
    category: "Gen AI"
  },
  {  
    title: "Flowtalk: Real Time Messaging Plattform",
    tech: ["Node js", "Websockets", "Express", "Postgres SQL","Next js","NEON","ORM","Typescript"],
    description:
      "FlowTalk is a secure, real-time messaging platform inspired by WhatsApp. It enables private chat rooms, message persistence, delivery/read receipts, AI-assisted conversations, and real-time communication using modern web technologies.",
    github: "https://github.com/amitk2003/flowtalk",
    category: "Full Stack"
  },
  {
    title: "Language Identification Model + Research",
    tech: ["Machine Learning", "TF-IDF", "Random Forest", "SVM"],
    description:
      "Multilingual text classifier achieving up to 96% accuracy across 17 languages with feature engineering.",
    github: "https://github.com/Mahesh-git888/Language_Classification_Model",
    live: "https://drive.google.com",
    category: "Data Science"
  },
  {
    title: "Meal Monkey — Food Delivery Platform",
    tech: ["React", "Node.js","Data Modelling","System Design", "MongoDB","Tailwind css", "JWT","Express","Redis","docker","Artilerry"],
    description:
      "Developed a full-stack food delivery platform with dedicated user and admin dashboards, enabling seamless order management from checkout to delivery tracking. Built scalable REST APIs using Node.js and optimized application performance through Redis caching, reducing response latency by 20%. Implemented secure JWT-based authentication, role-based access control (RBAC), and Dockerized deployment to ensure reliability and scalability.",
    github: "http://github.com/amitk2003/Meal-Monkey",
    live: "https://meal-monkey-pi.vercel.app/",
    category: "Full Stack"
  },
  {
    title:"AI Powered HR Analytics Dashboard (GenAI + Data Science )",
    tech: ["Python", "FastApi", "Postgres SQL", "scikit-learn","HTML","CSS","Java script"],
    description:"Developed an AI-powered HR Analytics system that transformed raw workforce data into actionable insights through automated ETL pipelines and advanced SQL analytics.",
    github:"https://github.com/amitk2003/AI-Powered-HR-Analytics-Dashboard",
    live:"",
    category: "Data Science"
  },
  {
    title:"Customer Churn Prediction (Credit Risk style classification)",
    tech:["python","Exploratory Data Analysis","Feature Engineering","Machine Learning","XGBoost"],
    description:"Analyzed a dataset of 7,000+ customers containing demographic, usage, and billing attributes to identify key drivers of customer churn, analogous to credit behavioral risk analysis. The project was implemented using Python, leveraging Pandas and NumPy for data processing, Matplotlib and Seaborn for exploratory data analysis and visualization, and scikit-learn for preprocessing, feature engineering, and model evaluation. Class imbalance was handled using SMOTE from the imbalanced-learn library. Built and compared Logistic Regression, XGBoost, and CatBoost models using precision, recall, and F1-score as evaluation metrics. Finally, generated actionable customer risk segments (High, Medium, Low) and deployed the results through an interactive Streamlit dashboard to support stakeholder decision-making.",
    github:"https://github.com/amitk2003/customer_churn_prediction",
    live:"https://customerchurnprediction-ypeeneexjhihnu8fjks7z4.streamlit.app/",
    category: "Data Science"
  },
  {
    title:"Customer shopping Behaviour Analysis",
    tech: ["Python", "Postgres SQL", "PowerBi","Reporting Automation"],
    description:"Developed an end-to-end data analytics solution that transformed raw customer data into structured, analysis-ready datasets through automated ETL pipelines. Leveraged Python (Pandas, NumPy) for data cleaning and transformation and wrote optimized SQL queries using joins, window functions, and aggregations to uncover insights into revenue trends, discount effectiveness, and customer behavior. Built interactive Power BI dashboards and business reports to track key performance indicators, monitor business performance, support governance reviews, and enable data-driven strategic decision-making",
    github:"https://github.com/amitk2003/AI-Powered-HR-Analytics-Dashboard",
    live:"",
    category: "Data Science"
  },
  {
    title:"Campus Connect- A smart campus platform",
    tech: ["Product Thinking","Python", "React js", "Postgres SQL","Flask","Open CV","Stripe"],
    description:"Developed a campus-focused marketplace platform to facilitate trusted peer-to-peer buying and selling. Defined monetization and product growth strategies, including a 5% transaction fee model and user engagement analysis, while using AI-assisted tools to streamline development, improve code quality, and accelerate feature delivery",
    github:"https://github.com/amitk2003/Campus-Connect",
    live:"https://campus-connect-coral-tau.vercel.app/",
    category: "Full Stack"
  },
  {
    title:"Mintrello: A project management tool",
    tech:["java","springboot","maven","spring data JPA","H2","SQL","React js"],
    description:"MiniTrello is a full-stack task management application featuring a modern React frontend with a premium glassmorphism UI and a robust Java Spring Boot REST API. It supports complete CRUD operations for Kanban boards and tasks, real-time search filtering, and activity auditing, all backed by Spring Data JPA and a relational database.",
    github:"https://github.com/amitk2003/Mini-trello",
    category: "Full Stack"
  },
  {
    title: "Intrusion Detection System (Real-Time Computer Vision)",
    tech: ["YOLOv8", "OpenCV", "Python", "Twilio API"],
    description:
      "Developed a real-time intrusion detection system with YOLO, face recognition, multi-person tracking, and automated WhatsApp + email alerts.",
    github: "https://github.com/amitk2003/Intrusion_detection_icps_project",
    category: "Gen AI"
  },
];

const categories = ["All", "Full Stack", "Gen AI", "Data Science"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = projects.filter(
    (project) => activeCategory === "All" || project.category === activeCategory
  );

  return (
    <SectionWrapper id="projects" subtitle="Projects" title="Things I've Built">
      
      {/* CATEGORY TABS */}
      <div className="flex flex-wrap justify-center gap-2 mb-10 px-3">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`
              px-5 py-2 rounded-full text-sm font-medium transition-all duration-300
              ${
                activeCategory === cat
                  ? "bg-black text-white shadow-md dark:bg-white dark:text-black scale-105"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700"
              }
            `}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="space-y-6 px-3 sm:px-0">
        <AnimatePresence>
          {filteredProjects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              style={{ pointerEvents: "auto" }}
              className="
                rounded-xl border border-slate-300 dark:border-slate-700 
                shadow-md p-6 bg-[var(--card)]
                hover:shadow-xl hover:scale-[1.02] transition duration-300
              "
            >
              <div className="flex flex-col md:flex-row justify-between gap-4">

                {/* LEFT BLOCK */}
                <div>
                  <h3
                    className="text-lg font-semibold flex items-center gap-2"
                    style={{ color: "var(--foreground)" }}
                  >
                    {project.title}
                    <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                      {project.category}
                    </span>
                  </h3>

                  <p
                    className="mt-2 text-sm leading-relaxed"
                    style={{ color: "var(--foreground)", opacity: 0.8 }}
                  >
                    {project.description}
                  </p>

                  {/* TECH TAGS */}
                  <div className="mt-3 flex flex-wrap gap-2 text-xs">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="
                          px-2 py-1 rounded-full border
                          border-slate-300 dark:border-slate-600
                          text-slate-700 dark:text-slate-100
                          bg-white/60 dark:bg-black/21
                        "
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* RIGHT BLOCK - LINKS */}
                <div className="flex flex-col gap-2 text-sm items-start shrink-0">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        flex items-center gap-1 text-blue-600 dark:text-blue-400
                        hover:text-blue-800 dark:hover:text-blue-300 transition
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
                        hover:text-black dark:hover:text-white transition
                      "
                    >
                      <FiGithub /> GitHub Repo
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </div>
    </SectionWrapper>
  );
}
