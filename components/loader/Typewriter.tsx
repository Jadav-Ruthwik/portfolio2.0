"use client";

import { useEffect, useState } from "react";

interface TypewriterProps {
  text: string;
  speed?: number;
}

export default function Typewriter({ text, speed = 30 }: TypewriterProps) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    setDisplayed("");

    let index = 0;

    const timer = setInterval(() => {
      index++;

      setDisplayed(text.slice(0, index));

      if (index >= text.length) {
        clearInterval(timer);
      }
    }, speed);

    return () => clearInterval(timer);
  }, [text, speed]);

  return (
    <p className="font-mono text-green-400">
      <span className="text-cyan-400">&gt;</span> {displayed}
      <span className="animate-pulse text-cyan-400">█</span>
    </p>
  );
}
