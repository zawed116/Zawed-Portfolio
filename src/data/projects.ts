import { SkillItem } from "@/types/skill";

export type Project = {
  title: string;
  description: string;
  impact: string;
  tech: SkillItem[];
  github?: string;
  live?: string;
};

export const projects: Project[] = [
  {
    title: "DevOps CI/CD Pipeline",
    description:
      "Automated build, test and deployment pipeline using Docker and GitHub Actions.",
    impact: "Reduced deployment time from minutes to seconds",
    tech: [
      { name: "Docker", icon: "docker" },
      { name: "GitHub Actions", icon: "githubactions" },
      { name: "AWS", icon: "aws" },
      { name: "Linux", icon: "linux" },
    ],
    github: "#",
  },
  {
    title: "StudyNotion – EdTech Platform",
    description:
      "A MERN-based EdTech platform enabling course creation, enrollment, progress tracking, and secure user authentication.",
    impact:
      "Improved learning experience with role-based access and optimized media handling",
    tech: [
      { name: "React", icon: "react" },
      { name: "Node.js", icon: "nodejs" },
      { name: "Express.js", icon: "express" },
      { name: "MongoDB", icon: "mongodb" },
      { name: "Cloudinary", icon: "cloudinary" },
     
    ],
    github: "https://github.com/zawed116/",
    live: "https://vercel.com/zawed-akhters-projects",
  },

  {
    title: "TravelBlog – Mountain Exploration",
    description:
      "A travel blog website showcasing beautiful mountain destinations with engaging visuals, travel stories, and a clean, user-friendly interface.",
    impact:
      "Provides an immersive travel experience and helps users discover popular mountain destinations with inspiration and practical insights.",
    tech: [
      { name: "Next.js", icon: "nextjs" },
      { name: "TypeScript", icon: "ts" },
      { name: "Tailwind CSS", icon: "tailwind" },
      { name: "Framer Motion", icon: "framer" },
    ],
    github: "https://github.com/zawed116/Project",
    live: "https://project-lilac-theta-72.vercel.app/",
  }
,  

  
    {
      title: "Al Majd Construction & Services",
      description:
        "A professional construction company website showcasing services, expertise, and projects with a clean, modern UI for business credibility.",
      impact:
        "Improved online presence and service visibility for a construction company.",
      tech: [
        { name: "React.js", icon: "reactjs" },
        { name: "Javascript", icon: "Js" },
        { name: "Tailwind CSS", icon: "tailwind" },
        { name: "Framer Motion", icon: "framer" },
        { name: "Node.js", icon: "nodejs" },

      ],
      github: "https://github.com/zawed116/AlMajd",
      live: "https://vercel.com/zawed-akhters-projects/al-majd",
    }
    
  
];
