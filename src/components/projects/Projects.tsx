"use client";

import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section id="projects" className="py-14 bg-background scroll-mt-28">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-6"
      >
        <motion.h2
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-20"
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
