"use client";

import Image from "next/image";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import FloatingBadge from "./FloatingBadge";

export default function HeroImage() {
  return (
    <motion.div
      animate={{
        y: [0, -18, 0],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="relative"
    >
      {/* Background Glow */}
      <div className="absolute -inset-8 rounded-[50px] bg-cyan-400/20 blur-[150px]" />

      <Tilt
        glareEnable
        glareMaxOpacity={0.35}
        glareColor="#ffffff"
        glarePosition="all"
        tiltMaxAngleX={12}
        tiltMaxAngleY={12}
        perspective={1800}
        transitionSpeed={1800}
        scale={1.05}
      >
        {/* Animated Border */}
        <div className="relative overflow-hidden rounded-[38px] p-[2px]">
          <div className="absolute inset-0 animate-spin-slow rounded-[38px] bg-[conic-gradient(from_0deg,#22d3ee,#3b82f6,#8b5cf6,#22d3ee)]" />

          {/* Card */}
          <div className="relative overflow-hidden rounded-[36px] bg-[#050914] p-3 backdrop-blur-xl">
            <Image
              src="/images/profile.jpeg"
              alt="Profile"
              width={560}
              height={700}
              priority
              className="rounded-[30px] object-cover"
            />

            {/* Overlay */}
            <div className="pointer-events-none absolute inset-0 rounded-[30px] bg-gradient-to-t from-black/25 via-transparent to-white/5" />
          </div>
        </div>
      </Tilt>

      {/* Floating Badges */}
      <FloatingBadge text="Next.js" className="-left-10 top-12" />

      <FloatingBadge text="AI" className="-right-12 top-32" />

      <FloatingBadge text="React" className="-left-12 bottom-24" />

      <FloatingBadge text="AWS" className="-right-8 bottom-10" />
    </motion.div>
  );
}
