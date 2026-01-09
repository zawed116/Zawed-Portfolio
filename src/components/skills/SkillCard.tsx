"use client";

import { motion } from "framer-motion";
import { SkillGroup } from "@/types/skill";

type Props = SkillGroup;

const variants = {
  left: { hidden: { x: -80, opacity: 0 }, show: { x: 0, opacity: 1 } },
  right: { hidden: { x: 80, opacity: 0 }, show: { x: 0, opacity: 1 } },
  bottom: { hidden: { y: 80, opacity: 0 }, show: { y: 0, opacity: 1 } },
};

export default function SkillCard({
  title,
  color,
  direction,
  items,
}: Props) {
  return (
    <motion.div
      variants={variants[direction]}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="
        relative rounded-2xl border border-border
        bg-background p-6
        hover:shadow-xl transition
      "
    >
      <h3
        className={`text-xl font-semibold mb-6 bg-linear-to-r ${color} bg-clip-text text-transparent`}
      >
        {title}
      </h3>

      <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
        {items.map((item) => (
          <motion.div
            key={item.name}
            whileHover={{ scale: 1.1 }}
            className="flex flex-col items-center gap-2"
          >
            <img
              src={`https://skillicons.dev/icons?i=${item.icon}`}
              alt={item.name}
              className="w-12 h-12"
            />
            <span className="text-xs text-muted text-center">
              {item.name}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
