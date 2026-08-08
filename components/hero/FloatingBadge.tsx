"use client";

import { motion } from "framer-motion";

interface Props {
  text: string;
  className?: string;
}

export default function FloatingBadge({ text, className = "" }: Props) {
  return (
    <motion.div
      animate={{
        y: [0, -8, 0],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`absolute rounded-full border border-cyan-400/30 bg-white/5 px-4 py-2 text-sm backdrop-blur-xl ${className}`}
    >
      {text}
    </motion.div>
  );
}
