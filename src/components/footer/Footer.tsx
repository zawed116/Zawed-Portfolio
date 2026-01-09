"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="
        border-t border-border
        bg-background
        py-8 text-center text-sm text-muted
      "
    >
      © {new Date().getFullYear()} Zawed Akhter. All rights reserved.
    </motion.footer>
  );
}
