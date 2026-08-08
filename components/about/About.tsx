"use client";

import { motion } from "framer-motion";

const stats = [
  {
    number: "10+",
    label: "Projects Built",
  },
  {
    number: "2+",
    label: "Internships",
  },
  {
    number: "10+",
    label: "Certifications",
  },
  {
    number: "2027",
    label: "Graduate",
  },
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden py-36">
      <div className="mx-auto max-w-[1500px] px-10">
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
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.45em] text-cyan-400">
            About Me
          </p>

          <h2 className="text-5xl font-black text-white md:text-6xl">
            Building AI Products That Solve
            <span className="block text-cyan-400">Real-World Problems</span>
          </h2>
        </motion.div>

        {/* Content */}
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p
              className="text-center text-lg leading-9 text-white/70"
              style={{
                width: "950px",
                marginLeft: "285px",
                marginRight: "485px",
                marginTop: "32px",
              }}
            >
              I'm a Computer Science student passionate about AI, Full Stack
              Development, and building products that solve real-world problems.
              Over the past few years I've built AI-powered applications,
              automation tools, business websites, productivity software, and
              full-stack platforms using modern web technologies. I enjoy
              transforming ideas into polished products with clean UI, scalable
              architecture, and practical user experiences.
            </p>

            {/* Highlights */}
            <div className="mt-12 flex flex-wrap justify-center gap-6 mt-3 grid gap-6 md:grid-cols-1 lg:grid-cols-6">
              <div className="rounded-2xl border border-white/10 bg-white/5 px-6 py-4">
                🤖 AI Applications
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 px-6 py-4">
                💻 Full Stack Development
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 px-4 py-4">
                ⚡ Automation Tools
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 px-6 py-4">
                🚀 Modern Web Apps
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 px-6 py-4">
                🛠 Software Engineering
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 px-6 py-4">
                🔗 API Development
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-30 grid gap-6 md:grid-cols-2 lg:grid-cols-2"
        >
          {stats.map((item) => (
            <div
              key={item.label}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center backdrop-blur-xl transition duration-300 hover:border-cyan-400/30"
            >
              <h3 className="text-5xl font-black text-cyan-400">
                {item.number}
              </h3>

              <p className="mt-4 text-white/70">{item.label}</p>
            </div>
          ))}
        </motion.div>
        {/* Bottom Space */}
        <div
          style={{
            width: "100%",
            height: "100px", // Increase or decrease this value
          }}
        ></div>
      </div>
    </section>
  );
}
