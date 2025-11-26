"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { FiExternalLink } from "react-icons/fi";
import { 
  SiLeetcode, 
  SiGithub, 
  SiGeeksforgeeks, 
  SiHackerrank, 
  SiKaggle, 
  SiCodeforces 
} from "react-icons/si";

interface ProfileItem {
  label: string;
  url: string;
  icon: React.ReactNode;
}

// 👉 You can update links anytime — UI automatically updates
const profiles: ProfileItem[] = [
  {
    label: "GitHub",
    url: "https://github.com/amitk2003",
    icon: <SiGithub className="text-xl text-gray-900" />,
  },
  {
    label: "LeetCode",
    url: "https://leetcode.com/u/amiit_kumar/",
    icon: <SiLeetcode className="text-xl text-orange-500" />,
  },
//   {
//     label: "GeeksforGeeks",
//     url: "https://auth.geeksforgeeks.org/user/amitk2003",
//     icon: <SiGeeksforgeeks className="text-xl text-green-600" />,
//   },
  {
    label: "HackerRank",
    url: "https://www.hackerrank.com/profile/amit_k22",
    icon: <SiHackerrank className="text-xl text-green-500" />,
  },
  {
    label: "Codeforces",
    url: "https://codeforces.com/profile/amiit_kumar",
    icon: <SiCodeforces className="text-xl text-indigo-600" />,
  },
  {
    label: "Kaggle",
    url: "https://www.kaggle.com/amitk23",
    icon: <SiKaggle className="text-xl text-blue-500" />,
  },
];

export default function CodingProfiles() {
  return (
    <SectionWrapper id="coding" subtitle="Profiles" title="Coding Footprint">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {profiles.map((profile, index) => (
          <motion.a
            key={profile.label}
            href={profile.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.07 }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-3 border rounded-xl p-4 shadow-sm hover:shadow-lg cursor-pointer bg-white hover:bg-slate-50"
          >
            {profile.icon}
            <span className="text-sm font-medium text-slate-800">
              {profile.label}
            </span>
            <FiExternalLink className="ml-auto text-slate-500" />
          </motion.a>
        ))}
      </div>
    </SectionWrapper>
  );
}
