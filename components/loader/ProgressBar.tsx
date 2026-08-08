"use client";

import { motion } from "framer-motion";

interface ProgressBarProps {
  progress: number;
}

export default function ProgressBar({ progress }: ProgressBarProps) {
  return (
    <div className="mt-8 w-full">
      <div className="h-1 overflow-hidden rounded-full bg-white/10">
        <motion.div
          className="h-full rounded-full bg-cyan-400"
          animate={{ width: `${progress}%` }}
          transition={{ ease: "easeInOut" }}
        />
      </div>

      <p className="mt-3 text-right font-mono text-xs text-cyan-400">
        {Math.floor(progress)}%
      </p>
    </div>
  );
}
