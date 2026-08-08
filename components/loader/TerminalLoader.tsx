"use client";

import Typewriter from "./Typewriter";

interface Props {
  lines: string[];
}

export default function TerminalLoader({ lines }: Props) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-cyan-400/20 bg-black/80 p-8 shadow-[0_0_40px_rgba(0,255,255,0.12)] backdrop-blur-xl">
      {/* Header */}
      <div className="mb-6 flex items-center gap-2">
        <div className="h-3 w-3 rounded-full bg-red-500" />
        <div className="h-3 w-3 rounded-full bg-yellow-500" />
        <div className="h-3 w-3 rounded-full bg-green-500" />
      </div>

      {/* Prompt */}
      <p className="mb-6 font-mono text-cyan-400">portfolio@jadav:~$</p>

      {/* Commands */}
      <div className="space-y-3">
        {lines.map((line, index) => (
          <Typewriter key={index} text={line} speed={25} />
        ))}
      </div>

      {/* Scanlines */}
      <div className="scanlines absolute inset-0 pointer-events-none" />

      {/* Noise */}
      <div className="noise absolute inset-0 pointer-events-none" />
    </div>
  );
}
