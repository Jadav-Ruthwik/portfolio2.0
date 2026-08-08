"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { FaGithub } from "react-icons/fa";

interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  live: string;
  github: string;
  featured: boolean;
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] px-10 py-12 backdrop-blur-xl transition-all duration-500 hover:border-cyan-400/40"
    >
      {/* Glow */}
      <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute -right-32 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[90px_1fr_220px]">
        {/* Project Number */}
        <div>
          <p className="text-7xl font-black text-white/10">
            {String(project.id).padStart(2, "0")}
          </p>
        </div>

        {/* Content */}
        <div>
          {project.featured && (
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
              <Sparkles size={14} />
              Featured
            </span>
          )}

          <h3 className="text-4xl font-bold text-white">{project.title}</h3>

          <p className="mt-2 text-xl text-cyan-300">{project.subtitle}</p>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="mt-8 flex flex-wrap gap-3">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-500/10"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col items-end justify-center gap-4">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex w-48 items-center justify-center gap-2 rounded-2xl bg-cyan-400 px-6 py-3 font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.35)]"
            >
              Live Demo
              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          )}

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex w-48 items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-500/10 hover:text-cyan-300"
            >
              <FaGithub
                size={19}
                className="transition-transform duration-300 group-hover:scale-110"
              />
              Source Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
