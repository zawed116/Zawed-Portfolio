"use client";

import { motion } from "framer-motion";
import { Linkedin, Github, FileText, Code, Code2Icon } from "lucide-react";

const highlights = [
  {
    title: "Full Stack Developer",
    desc: "Building end-to-end web applications with modern architecture.",
    color: "from-indigo-500 to-cyan-500",
  },
  {
    title: "DevOps & Cloud",
    desc: "CI/CD, Docker, AWS and production deployments.",
    color: "from-emerald-500 to-teal-500",
  },
  {
    title: "Performance Focused",
    desc: "Fast, scalable and SEO-optimized applications.",
    color: "from-pink-500 to-rose-500",
  },
  {
    title: "Problem Solver",
    desc: "Turning complex problems into clean solutions.",
    color: "from-amber-500 to-orange-500",
  },
];

const socials = [
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/zawed-akhter-3982bb26b/",
    color: "from-blue-dark-500 to-cyan-500",
  },
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/zawed116",
    color: "from-red-600 to-gray-900",
  },
  {
    name: "LeetCode",
    icon: Code,
    href: "https://leetcode.com/u/zawed116/",
    color: "from-yellow-500 to-orange-500",
  },
  {
    name: "geeksforgeeks",
    icon: Code2Icon,
    href: "https://www.geeksforgeeks.org/profile/zawedakhe0vp",
    color: "from-indigo-500 to-purple-500",
  },
];

const certifications = [
  "MERN Stack Web Development – CodeHelp",
  "Java FullStack (SCA LIVE IN Bhopal )",
  "DEVOPS-NASSCOM (orbique institute",
  "Problem Solving (Intermediate) – HackerRank",
];

export default function About() {
  return (
    <section id="about" data-bg="#0f172a" className="py-14 bg-surface overflow-hidden scroll-mt-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-6"
        >
          About Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-muted max-w-3xl mx-auto mb-20"
        >
          I design and build modern, scalable and high-performance web
          applications with a strong focus on clean code, architecture
          and user experience.
        </motion.p>

        {/* MAIN GRID */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-28">
          {/* LEFT – STORY */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl font-semibold mb-5 leading-snug">
              I build products that are{" "}
              <span className="text-primary">scalable</span>,{" "}
              <span className="text-secondary">reliable</span>{" "}
              and{" "}
              <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
                production-ready
              </span>
            </h3>

            <p className="text-muted leading-relaxed mb-5">
              I am a{" "}
              <span className="font-medium text-foreground">
                Full Stack Web Developer
              </span>{" "}
              with hands-on experience in{" "}
              <span className="text-primary font-medium">
                JavaScript, React, TypeScript
              </span>{" "}
              and backend technologies like{" "}
              <span className="text-primary font-medium">Node.js</span>.
            </p>

            <p className="text-muted leading-relaxed mb-5">
              I also work with{" "}
              <span className="text-secondary font-medium">
                DevOps & Cloud tools
              </span>{" "}
              such as Docker, CI/CD pipelines and AWS to ensure applications
              are scalable and production-ready.
            </p>

            <p className="text-muted leading-relaxed">
              Passionate about problem-solving, system design and continuous
              learning.
            </p>
          </motion.div>

          {/* RIGHT – HIGHLIGHTS */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="
                  relative overflow-hidden rounded-2xl p-6
                  bg-background border border-border
                  hover:shadow-xl transition
                "
              >
                <div
                  className={`absolute top-0 left-0 h-1 w-full bg-linear-to-r ${item.color}`}
                />
                <h4
                  className={`text-lg font-semibold mb-2 bg-linear-to-r ${item.color} bg-clip-text text-transparent`}
                >
                  {item.title}
                </h4>
                <p className="text-sm text-muted leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* SOCIAL LINKS */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mb-28">
          {socials.map((item) => (
            <motion.a
              key={item.name}
              href={item.href}
              target="_blank"
              whileHover={{ y: -8 }}
              className="
                relative overflow-hidden rounded-2xl p-6
                bg-background border border-border
                hover:shadow-xl transition
              "
            >
              <div
                className={`absolute inset-0 opacity-0 hover:opacity-100 transition
                bg-linear-to-r ${item.color}`}
              />
              <div className="relative z-10 flex items-center gap-4">
                <item.icon className="w-7 h-7 text-primary" />
                <span className="font-semibold">{item.name}</span>
              </div>
            </motion.a>
          ))}
        </div>

        {/* EDUCATION */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="
            bg-background border border-border
            rounded-3xl p-8 mb-28
            hover:shadow-2xl transition
            hover:scale-[1.02]
          "
        >
          <h3 className="text-2xl font-bold text-primary mb-2">
            Education
          </h3>
          <p className="text-lg font-semibold">
            B.Tech – Computer Science & Engineering
          </p>
          <p className="text-muted">
            RGPV(Rajiv Gandhi Proudyogiki Vishwavidyalaya)
          </p>
          <p className="text-muted">
            Technocrats Institute of technology Bhopal M.P (2021 – 2025)
          </p>
        </motion.div>

        {/* CERTIFICATIONS */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12">
            Certifications
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="
                  bg-background border border-border
                  rounded-2xl p-6
                  hover:shadow-xl transition
                "
              >
                <p className="font-medium text-primary">
                  {cert}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
