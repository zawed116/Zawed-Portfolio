"use client";

import { motion } from "framer-motion";
import { ExperienceItem } from "@/data/experience";

export default function ExperienceCard({
  role,
  company,
  duration,
  description,
  points,
  tech,
}: ExperienceItem) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 140, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      whileHover={{
        scale: 1.02,
      }}
      className="
        group relative overflow-hidden
        rounded-3xl p-8
        border border-border
        bg-background
        transition-all duration-500
        hover:border-primary
        hover:shadow-[0_20px_60px_rgba(99,102,241,0.25)]
      "
    >
      {/* Hover Gradient Overlay */}
      <div
        className="
          pointer-events-none absolute inset-0 opacity-0
          bg-linear-to-br from-primary/20 via-secondary/10 to-transparent
          group-hover:opacity-100 transition-opacity duration-500
        "
      />

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h3
              className="
                text-2xl font-bold
                text-foreground
                group-hover:text-primary
                transition-colors duration-300
                text-amber-500
              "
            >
              {role}
            </h3>

            <p
              className="
                text-muted mt-1
                group-hover:text-foreground
                transition-colors duration-300
              "
            >
              {company}
            </p>
          </div>

          <span
            className="
              text-sm px-4 py-1 rounded-full
              border border-border
              text-muted
              group-hover:border-primary
              group-hover:text-primary
              transition-all duration-300
            "
          >
            {duration}
          </span>
        </div>

        {/* Description */}
        <p
          className="
            mt-4 leading-relaxed
            text-muted
            group-hover:text-foreground
            transition-colors duration-300
          "
        >
          {description}
        </p>

        {/* Points */}
        <ul className="mt-6 space-y-2">
          {points.map((point, i) => (
            <li
              key={i}
              className="
                text-muted
                group-hover:text-foreground
                transition-colors duration-300
              "
            >
              • {point}
            </li>
          ))}
        </ul>

        {/* Tech Stack */}
        <div className="mt-8">
          <p
            className="
              text-sm font-medium mb-4
              text-muted
              group-hover:text-foreground
              transition-colors duration-300
            "
          >
            Tech Stack
          </p>

          <div className="flex flex-wrap gap-4">
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
                    w-10 h-10
                    grayscale opacity-80
                    group-hover:grayscale-0
                    group-hover:opacity-100
                    transition-all duration-300
                  "
                />
                <span
                  className="
                    text-xs text-muted
                    group-hover:text-foreground
                    transition-colors duration-300
                  "
                >
                  {t.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
