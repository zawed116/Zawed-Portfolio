"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function AnimatedBoy() {
  const x = useMotionValue(-200);
  const y = useMotionValue(-200);

  const smoothX = useSpring(x, { stiffness: 120, damping: 18 });
  const smoothY = useSpring(y, { stiffness: 120, damping: 18 });

  const lastPos = useRef({ x: 0, y: 0 });
  const lastTime = useRef(Date.now());

  const [visible, setVisible] = useState(false);
  const [speed, setSpeed] = useState<"idle" | "walk" | "run">("idle");

  useEffect(() => {
    const move = (e: MouseEvent) => {
      const now = Date.now();
      const dx = e.clientX - lastPos.current.x;
      const dy = e.clientY - lastPos.current.y;
      const dt = now - lastTime.current || 1;

      const velocity = Math.sqrt(dx * dx + dy * dy) / dt;

      setSpeed(velocity > 1.2 ? "run" : "walk");

      lastPos.current = { x: e.clientX, y: e.clientY };
      lastTime.current = now;

      x.set(e.clientX - 25);
      y.set(e.clientY - 50);

      setVisible(true);

      clearTimeout((move as any).t);
      (move as any).t = setTimeout(() => {
        setVisible(false);
        setSpeed("idle");
      }, 800);
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  if (!visible) return null;

  return (
    <motion.div
      style={{ x: smoothX, y: smoothY }}
      className="fixed top-0 left-0 z-30 pointer-events-none"
    >
      {/* BODY */}
      <div className="relative flex flex-col items-center">

        {/* HEAD */}
        <div className="w-3 h-3 rounded-full bg-yellow-300 border border-yellow-500" />

        {/* TORSO */}
        <div className="w-2 h-4 bg-blue-500 rounded-md mt-1" />

        {/* ARMS */}
        <motion.div
          className="absolute left-1.5 top-8 w-0.5 h-3 bg-blue-400 rounded"
          animate={{
            rotate: speed === "run" ? [30, -30] : [15, -15],
          }}
          transition={{
            repeat: Infinity,
            duration: speed === "run" ? 0.2 : 0.5,
          }}
        />
        <motion.div
          className="absolute right-1.5 top-8 w-0.5 h-3 bg-blue-400 rounded"
          animate={{
            rotate: speed === "run" ? [-30, 30] : [-15, 15],
          }}
          transition={{
            repeat: Infinity,
            duration: speed === "run" ? 0.2 : 0.5,
          }}
        />

        {/* LEGS */}
        <div className="flex gap-1 mt-1">
          <motion.div
            className="w-0.5 h-3 bg-gray-800 rounded"
            animate={{
              rotate: speed === "run" ? [25, -25] : [10, -10],
            }}
            transition={{
              repeat: Infinity,
              duration: speed === "run" ? 0.2 : 0.5,
            }}
          />
          <motion.div
            className="w-0.5 h-3 bg-gray-800 rounded"
            animate={{
              rotate: speed === "run" ? [-25, 25] : [-10, 10],
            }}
            transition={{
              repeat: Infinity,
              duration: speed === "run" ? 0.2 : 0.5,
            }}
          />
        </div>
      </div>
    </motion.div>
  );
}
