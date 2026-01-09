"use client";

import { experience } from "@/data/experience";
import ExperienceCard from "./ExperienceCard";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section id="experience" className="py-14 bg-surface scroll-mt-28">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-20"
        >
          Experience
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10">
          {experience.map((item) => (
            <ExperienceCard key={item.role} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
