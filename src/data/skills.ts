import { SkillGroup } from "@/types/skill";

export const skills: SkillGroup[] = [
  {
    title: "Full Stack Web Development",
    color: "from-indigo-500 to-cyan-500",
    direction: "left",
    items: [
      { name: "Next.js", icon: "nextjs" },
      { name: "React", icon: "react" },
      { name: "TypeScript", icon: "ts" },
      { name: "Node.js", icon: "nodejs" },
      { name: "Express", icon: "express" },
      { name: "MongoDB", icon: "mongodb" },
      { name: "PostgreSQL", icon: "postgresql" },
      {name: "Javascript", icon: "javascript" },
    ],
  },
  {
    title: "DevOps & Cloud",
    color: "from-emerald-500 to-teal-500",
    direction: "right",
    items: [
      { name: "Docker", icon: "docker" },
      { name: "AWS", icon: "aws" },
      { name: "Linux", icon: "linux" },
      { name: "CI/CD", icon: "githubactions" },
      { name: "Kubernetes", icon: "kubernetes" },
      { name: "SonarQube", icon: "sonarqube" },
      { name: "Graphana", icon: "grafana" },
      { name: "Prometheus", icon: "prometheus" },
      { name: "Terraform", icon: "terraform" }
    ],
  },
  {
    title: "Frontend UI & Styling",
    color: "from-pink-500 to-rose-500",
    direction: "bottom",
    items: [
      { name: "Tailwind CSS", icon: "tailwind" },
      { name: "HTML", icon: "html" },
      { name: "CSS", icon: "css" },
      { name: "Framer Motion", icon: "framer" },
      { name: "Chakra UI", icon: "chakraui" },
      { name: "Material UI", icon: "materialui" },
      { name: "sadcn/ui", icon: "sadcn" },
    ],
  },
];
