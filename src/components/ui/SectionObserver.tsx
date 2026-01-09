"use client";

import { useEffect } from "react";

export default function SectionObserver() {
  useEffect(() => {
    const sections = document.querySelectorAll("section[data-bg]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const bg = entry.target.getAttribute("data-bg");
            if (bg) {
              document.documentElement.style.setProperty(
                "--page-bg",
                bg
              );
            }
          }
        });
      },
      { threshold: 0.4 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return null;
}
