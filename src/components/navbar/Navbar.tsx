"use client";

import { useEffect, useState } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => setMounted(true), []);

  /* 🔹 Shrink navbar on scroll */
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* 🔹 Active section detection */
  useEffect(() => {
    const onScroll = () => {
      links.forEach((link) => {
        const section = document.querySelector(link.href);
        if (!section) return;

        const rect = section.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          setActive(link.href.replace("#", ""));
        }
      });
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!mounted) return null;

  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (!el) return;

    setOpen(false);

    setTimeout(() => {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 200);
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`
        fixed top-0 w-full z-50
        backdrop-blur
        bg-background/80
        border-b border-border
        transition-all duration-300
        ${scrolled ? "py-2 shadow-md" : "py-4"}
      `}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <span className="font-bold text-xl tracking-tight text-amber-700">
          Zawed<span className="text-primary">.dev</span>
        </span>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = active === id;

            return (
              <button
                key={link.name}
                onClick={() => handleScroll(link.href)}
                className="relative text-sm font-medium transition"
              >
                <span
                  className={`
                    transition-colors
                    ${isActive ? "text-primary" : "text-muted hover:text-foreground"}
                  `}
                >
                  {link.name}
                </span>

                {/* Animated underline */}
                <motion.span
                  layoutId="nav-underline"
                  className="absolute -bottom-1 left-0 h-0.5 bg-primary"
                  animate={{ width: isActive ? "100%" : "0%" }}
                  transition={{ duration: 0.3 }}
                />
              </button>
            );
          })}

          {/* Theme Toggle */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-lg border border-border hover:bg-surface transition"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-surface transition"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* 🔹 Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background border-t border-border px-6 py-6"
          >
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  transition: { staggerChildren: 0.08 },
                },
              }}
              className="space-y-4"
            >
              {links.map((link) => (
                <motion.button
                  key={link.name}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  onClick={() => handleScroll(link.href)}
                  className={`
                    block w-full text-left text-base font-medium
                    ${active === link.href.replace("#", "")
                      ? "text-primary"
                      : "text-muted hover:text-foreground"}
                  `}
                >
                  {link.name}
                </motion.button>
              ))}

              {/* Mobile Theme Toggle */}
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="mt-6 w-full flex items-center gap-3 border border-border rounded-xl px-4 py-3 hover:bg-surface transition"
              >
                {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
                Toggle Theme
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
