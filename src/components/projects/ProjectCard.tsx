"use client";

import { motion } from "framer-motion";
import { Project } from "@/data/projects";

export default function ProjectCard({
  title,
  description,
  impact,
  tech,
  github,
  live,
}: Project) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 120 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      whileHover={{ scale: 1.02 }}
      className="
        group relative rounded-3xl overflow-hidden
        border border-border bg-background
        p-8 transition-all
        hover:shadow-[0_25px_80px_rgba(99,102,241,0.25)]
      "
    >
      {/* Hover background */}
      <div className="
        absolute inset-0 opacity-0 group-hover:opacity-100
        bg-linear-to-br from-primary/20 via-secondary/10 to-transparent
        transition-opacity duration-500
      " />

      <div className="relative z-10">
        <h3
          className="
            text-2xl font-bold
            group-hover:text-primary transition-colors text-amber-500
          "
        >
          {title}
        </h3>

        <p className="mt-3 text-muted group-hover:text-foreground transition">
          {description}
        </p>

        <p className="mt-3 text-sm text-primary font-medium">
          {impact}
        </p>

        {/* Tech stack */}
        <div className="mt-6 flex flex-wrap gap-4">
          {tech.map((t) => (
            <motion.div
              key={t.name}
              whileHover={{ scale: 1.15 }}
              className="flex flex-col items-center gap-1"
            >
              <img
                src={`https://skillicons.dev/icons?i=${t.icon}`}
                alt={t.name}
                className="
                  w-10 h-10 grayscale opacity-80
                  group-hover:grayscale-0 group-hover:opacity-100
                  transition-all
                "
              />
              <span className="text-xs text-muted">
                {t.name}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Links */}
        <div className="mt-8 flex gap-6 text-sm">
          {github && (
            <a
              href={github}
              className="text-primary hover:underline"
            >
              GitHub →
            </a>
          )}
          {live && (
            <a
              href={live}
              className="text-primary hover:underline"
            >
              Live Demo →
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
