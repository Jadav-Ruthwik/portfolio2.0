"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import TerminalLoader from "./TerminalLoader";
import ProgressBar from "./ProgressBar";

const commands = [
  "Initializing Portfolio...",
  "Loading AI Engine...",
  "Loading Assets...",
  "Connecting Experience...",
  "Rendering 3D Scene...",
  "System Ready.",
];

export default function Loader() {
  const [progress, setProgress] = useState(0);
  const [visibleLines, setVisibleLines] = useState<string[]>([]);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    commands.forEach((line, index) => {
      setTimeout(() => {
        setVisibleLines((prev) => [...prev, line]);
      }, index * 700);
    });

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);

          setTimeout(() => {
            setFinished(true);
          }, 700);

          return 100;
        }

        return prev + 2;
      });
    }, 70);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {!finished && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black"
        >
          <div className="w-[700px] max-w-[90%]">
            <TerminalLoader lines={visibleLines} />
            <ProgressBar progress={progress} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
