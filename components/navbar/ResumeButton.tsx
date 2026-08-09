"use client";

import { Download } from "lucide-react";

export default function ResumeButton() {
  return (
    <a
      href="/resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-400/20 hover:shadow-[0_0_25px_rgba(34,211,238,.25)]"
    >
      <Download size={16} />
      Resume
    </a>
  );
}
