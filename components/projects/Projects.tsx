"use client";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { projects } from "./projects";

export default function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden pt-40 pb-40">
      <div className="mx-auto w-full max-w-[1500px] px-10">
        {/* Bottom Space */}
        <div
          style={{
            width: "100%",
            height: "60px", // Increase or decrease this value
          }}
        ></div>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          style={{
            width: "100%",
            maxWidth: "900px",
            margin: "0 auto",
            marginBottom: "96px",
            textAlign: "center",
          }}
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.45em] text-cyan-400">
            Projects
          </p>

          <p
            className="text-lg leading-8 text-white/60"
            style={{
              width: "900px",
              margin: "24px auto 0",
              textAlign: "center",
            }}
          >
            A collection of AI-powered applications, full-stack products,
            automation tools, and real-world solutions I've designed and built.
          </p>
        </motion.div>

        {/* Project Cards */}
        <div className="grid gap-12">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        {/* Bottom Space */}
        <div
          style={{
            width: "100%",
            height: "180px", // Increase or decrease this value
          }}
        ></div>
      </div>
    </section>
  );
}
