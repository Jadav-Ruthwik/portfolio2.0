"use client";

import Hero from "@/components/hero/Hero";
import Projects from "@/components/projects/Projects";
import ScrollToTop from "@/components/ScrollToTop";
import About from "@/components/about/About";
import Skills from "@/components/skills/Skills";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />

      <ScrollToTop />
    </>
  );
}
