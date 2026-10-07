import {
  Code,
  Smartphone,
  Brain,
  Users,
  TrendingUp,
  Blocks,
} from "lucide-react";

export type Program = {
  title: string;
  description: string;
  icon: typeof Code;
  duration: string;
  projects: string;
  skills: string[];
  category: "tech" | "non-tech";
};

export const programs: Program[] = [
  {
    title: "Web Development",
    description:
      "Master frontend and backend technologies including React, Node.js, and modern frameworks.",
    icon: Code,
    duration: "3 months",
    projects: "5+ Real Projects",
    skills: ["React", "Node.js", "MongoDB", "Express"],
    category: "tech",
  },
  {
    title: "App Development",
    description:
      "Build native and cross-platform mobile applications using React Native and Flutter.",
    icon: Smartphone,
    duration: "3 months",
    projects: "4+ Mobile Apps",
    skills: ["React Native", "Flutter", "Firebase", "API Integration"],
    category: "tech",
  },
  {
    title: "AI / ML",
    description:
      "Dive into artificial intelligence and machine learning with Python, TensorFlow, and real datasets.",
    icon: Brain,
    duration: "4 months",
    projects: "3+ ML Models",
    skills: ["Python", "TensorFlow", "Scikit-learn", "Deep Learning"],
    category: "tech",
  },
  {
    title: "Blockchain",
    description:
      "Explore decentralized technologies, smart contracts, and cryptocurrency development.",
    icon: Blocks,
    duration: "3 months",
    projects: "2+ DApps",
    skills: ["Solidity", "Web3.js", "Ethereum", "Smart Contracts"],
    category: "tech",
  },
  {
    title: "Human Resources",
    description:
      "Learn modern HR practices, talent acquisition, and employee engagement strategies.",
    icon: Users,
    duration: "2 months",
    projects: "3+ HR Projects",
    skills: ["Recruitment", "Performance Mgmt", "HR Analytics", "Relations"],
    category: "non-tech",
  },
  {
    title: "Digital Marketing",
    description:
      "Master SEO, social media marketing, content strategy, and digital advertising.",
    icon: TrendingUp,
    duration: "2 months",
    projects: "4+ Campaigns",
    skills: ["SEO", "Social Media", "Google Ads", "Analytics"],
    category: "non-tech",
  },
];
