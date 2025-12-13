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
      "Developed a real-time intrusion detection system with YOLO, face recognition, multi-person tracking, and automated WhatsApp + email alerts.",
    github: "https://github.com/amitk2003/Intrusion_detection_icps_project",
  },
  {
    title: "Books Unbound — Full-Stack E-Commerce Platform",
    tech: ["React", "Node.js", "MongoDB", "JWT", "Stripe"],
    description:
      "Secure bookstore with Google OAuth, real payments (Stripe), admin panel, and full authentication system.",
    github: "https://github.com/amitk2003/books-unbound",
  },
  {
    title: "AI Interview Helper Bot",
    tech: ["WebRTC", "OpenAI", "Express", "MongoDB","React Js"],
    description:
      "AI-powered interview system generating adaptive questions and analyzing speech with LLM scoring.",
    github: "https://github.com/amitk2003/AI-INTERVIEW-HELPER",
  },
  {
    title: "Language Identification Model + Research",
    tech: ["Machine Learning", "TF-IDF", "Random Forest", "SVM"],
    description:
      "Multilingual text classifier achieving up to 96% accuracy across 17 languages with feature engineering.",
    github: "https://github.com/Mahesh-git888/Language_Classification_Model",
    live: "https://drive.google.com",
  },
  {
    title: "Tasty Track — Food Delivery Platform",
    tech: ["React", "Node.js", "MongoDB", "JWT","Express"],
    description:
      "Food ordering platform with authentication, menu filtering, role-based UI, and secure routes.",
    github: "https://github.com/amitk2003/Tasty_Track",
    live: "https://tasty-track-six.vercel.app/",
  },
  {
    title: "Government School Portal — Social Impact Project",
    tech: ["React", "Express", "MongoDB", "Multer"],
    description:
      "School portal for Rajasthan government with admissions, gallery, and teacher dashboards.",
    github: "https://github.com/amitk2003/Rajasthan-government-school",
    live: "https://rajasthan-government-school.vercel.app/",
  },
  {
    title:"Portfolio risk management system (Data Science )",
    tech: ["Python", "Pandas", "NumPy", "Matplotlib","Scikit-learn","Catboost"],
    description:"Analyzed five years of financial time-series data to examine volatility patterns, risk-adjusted returns, and inter-asset correlation structures, providing insights into investment risk and asset behavior. The analysis was conducted using Python, with Pandas and NumPy for time-series data manipulation, Matplotlib and Seaborn for statistical visualization, and financial/statistical techniques for risk assessment and trend analysis. Key metrics and insights were made accessible to non-technical stakeholders by building and deploying an interactive Streamlit dashboard, enabling intuitive exploration of risk measures, temporal trends, and comparative asset performance.",
    github:"https://github.com/amitk2003/portfolio_risk_management",
    live:"https://portfolioriskmanagement-8k73cses2fp5rhct4dgmym.streamlit.app/"
  },
  {
    title:"Customer Churn Prediction (Credit Risk style classification)",
    tech:["python","Exploratory Data Analysis","Feature Engineering","Machine Learning","XGBoost"],
    description:"Analyzed a dataset of 7,000+ customers containing demographic, usage, and billing attributes to identify key drivers of customer churn, analogous to credit behavioral risk analysis. The project was implemented using Python, leveraging Pandas and NumPy for data processing, Matplotlib and Seaborn for exploratory data analysis and visualization, and scikit-learn for preprocessing, feature engineering, and model evaluation. Class imbalance was handled using SMOTE from the imbalanced-learn library. Built and compared Logistic Regression, XGBoost, and CatBoost models using precision, recall, and F1-score as evaluation metrics. Finally, generated actionable customer risk segments (High, Medium, Low) and deployed the results through an interactive Streamlit dashboard to support stakeholder decision-making.",
    github:"https://github.com/amitk2003/customer_churn_prediction",
    live:"https://customerchurnprediction-ypeeneexjhihnu8fjks7z4.streamlit.app/",
  }
];

export default function Projects() {
  return (
    <SectionWrapper id="projects" subtitle="Projects" title="Things I've Built">
      <div className="space-y-6 px-3 sm:px-0">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
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

                {/* TECH TAGS */}
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
      </div>
    </SectionWrapper>
  );
}
