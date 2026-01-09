import { SkillItem } from "@/types/skill";

export type ExperienceItem = {
  role: string;
  company: string;
  duration: string;
  description: string;
  points: string[];
  tech: SkillItem[];
};

export const experience: ExperienceItem[] = [
  {
    role: "Full Stack Web Developer",
    company: "Personal & Academic Projects",
    duration: "2024 – Present",
    description:
      "Built end-to-end scalable web applications with modern frontend and backend technologies.",
    points: [
      "Developed full-stack applications using Next.js, React and Node.js",
      "Designed REST APIs with authentication & authorization",
      "Optimized performance, SEO and accessibility",
    ],
    tech: [
      { name: "Next.js", icon: "nextjs" },
      { name: "React", icon: "react" },
      { name: "TypeScript", icon: "ts" },
      { name: "Node.js", icon: "nodejs" },
      { name: "MongoDB", icon: "mongodb" },
    ],
  },
  {
    role: "DevOps & Cloud Engineer (Learning)",
    company: "Self-Driven",
    duration: "2025 – Present",
    description:
      "Focused on deployment, automation and cloud infrastructure.",
    points: [
      "Containerized applications using Docker",
      "Configured CI/CD pipelines with GitHub Actions",
      "Deployed apps on AWS with Linux servers",
    ],
    tech: [
      { name: "Docker", icon: "docker" },
      { name: "AWS", icon: "aws" },
      { name: "Linux", icon: "linux" },
      { name: "GitHub Actions", icon: "githubactions" },
    ],
  },
];
