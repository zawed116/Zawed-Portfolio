"use client";

import PageTransition from "@/components/ui/PageTransition";
import About from "@/components/about/About";
import Hero from "@/components/hero/Hero";
import Skills from "@/components/skills/Skills";
import Experience from "@/components/experience/Experience";
import Projects from "@/components/projects/Projects";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <PageTransition>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />

    </PageTransition>
  );
}
