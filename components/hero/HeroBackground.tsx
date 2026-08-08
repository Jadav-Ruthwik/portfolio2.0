"use client";

import Network from "../background/Network";

export default function HeroBackground() {
  return (
    <>
      <Network />

      {/* Main Glow */}
      <div className="absolute right-[18%] top-1/2 h-[700px] w-[700px] -translate-y-1/2 rounded-full bg-cyan-400/10 blur-[180px]" />

      {/* Blue Glow */}
      <div className="absolute left-[10%] top-[10%] h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[180px]" />

      {/* Bottom Glow */}
      <div className="absolute bottom-[-200px] left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-sky-500/5 blur-[220px]" />

      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, transparent 40%, rgba(2,6,23,.45) 100%)",
        }}
      />
    </>
  );
}
