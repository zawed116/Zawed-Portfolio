"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function MouseAvatar() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const x = useSpring(mouseX, { stiffness: 120, damping: 20 });
  const y = useSpring(mouseY, { stiffness: 120, damping: 20 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX - 35);
      mouseY.set(e.clientY - 60);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      style={{ x, y }}
      className="fixed top-0 left-0 z-20 pointer-events-none"
    >
      {/* Head */}
      <div className="relative w-16 h-16 rounded-full bg-surface border border-border flex items-center justify-center shadow-lg">
        
        {/* Eyes */}
        <motion.div
          className="absolute left-4 top-6 w-2 h-2 bg-foreground rounded-full"
          animate={{ x: [0, 2, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        />
        <motion.div
          className="absolute right-4 top-6 w-2 h-2 bg-foreground rounded-full"
          animate={{ x: [0, -2, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        />

        {/* Smile */}
        <div className="absolute bottom-4 w-6 h-3 border-b-2 border-foreground rounded-b-full" />
      </div>

      {/* Body */}
      <div className="mx-auto w-8 h-10 bg-primary rounded-b-xl mt-1" />
    </motion.div>
  );
}
