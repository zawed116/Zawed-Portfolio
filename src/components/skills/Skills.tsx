"use client";

import SkillCard from "./SkillCard";
import { skills } from "@/data/skills";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <section id="skills" data-bg="#020617" className="py-14 bg-surface scroll-mt-28">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-20"
        >
          Skills & Tech Stack
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {skills.map((skill) => (
            <SkillCard key={skill.title} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
}
