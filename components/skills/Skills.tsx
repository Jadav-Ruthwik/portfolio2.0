"use client";

import { motion } from "framer-motion";
import { Caveat } from "next/font/google";

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const skillGroups = [
  {
    title: "Frontend",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "HTML",
      "CSS",
    ],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "REST APIs", "Multer"],
  },
  {
    title: "AI",
    skills: [
      "Google Gemini",
      "Prompt Engineering",
      "Amazon PartyRock",
      "Generative AI",
    ],
  },
  {
    title: "Database",
    skills: ["MongoDB", "Supabase", "Firebase", "SQL"],
  },
  {
    title: "Tools",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Vercel",
      "Render",
      "Postman",
      "Figma",
    ],
  },
  {
    title: "Libraries",
    skills: ["Framer Motion", "Axios", "React Dropzone", "PapaParse"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative pt-40 pb-56">
      <div className="mx-auto w-full max-w-[1500px] px-10">
        {/* Bottom Space */}
        <div
          style={{
            width: "100%",
            height: "60px", // Increase or decrease this value
          }}
        ></div>
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-24 text-center"
        >
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.45em] text-cyan-400">
            Skills
          </p>

          <h2 className="text-5xl font-black text-white md:text-6xl">
            Technologies I Work With
          </h2>

          <p
            className={`${caveat.className} mt-[30px] w-[900px] text-center text-[34px] leading-[48px] text-cyan-200/90`}
            style={{
              margin: "30px auto 0",
            }}
          >
            Crafting modern digital experiences with clean code, thoughtful
            design, and AI-powered innovation.
          </p>
        </motion.div>

        {/* Skill Categories */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-2">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/30"
            >
              <h3 className="mb-6 text-2xl font-bold text-white">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
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
