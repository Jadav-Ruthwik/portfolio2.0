"use client";

import { motion } from "framer-motion";

export default function HeroTitle() {
  return (
    <div className="relative">
      {/* Background Glow */}
      <div className="absolute -left-16 top-0 h-80 w-80 rounded-full bg-cyan-400/10 blur-[120px]" />

      {/* Greeting */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 mb-6 flex items-center gap-3"
      >
        <div className="h-2.5 w-2.5 rounded-full bg-cyan-400 animate-pulse" />

        <span className="text-sm font-medium uppercase tracking-[0.45em] text-cyan-300">
          Hello, I'm
        </span>
      </motion.div>

      {/* Name */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.9,
          delay: 0.2,
        }}
        className="relative z-10"
      >
        <h1 className="leading-[0.88] tracking-tight font-black">
          <span className="block text-7xl md:text-8xl xl:text-[7rem] text-white">
            Jadav
          </span>

          <span className="block bg-gradient-to-r from-cyan-300 via-white to-blue-400 bg-clip-text text-7xl text-transparent md:text-8xl xl:text-[7rem]">
            Ruthwik
          </span>
        </h1>
      </motion.div>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 0.6,
          duration: 0.7,
        }}
        className="relative z-10 mt-8 max-w-xl text-lg leading-8 text-white/70 md:text-xl"
      >
        I design and build
        <span className="font-semibold text-cyan-300">
          {" "}
          AI-powered applications
        </span>
        , immersive digital experiences, and modern full-stack products with a
        focus on performance, creativity, and user experience.
      </motion.p>
    </div>
  );
}
