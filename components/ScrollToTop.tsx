"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById("hero");

      if (!hero) return;

      const heroBottom = hero.getBoundingClientRect().bottom;

      // Show only after Hero section
      setVisible(heroBottom < 0);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-[999] flex h-14 w-14 items-center justify-center rounded-full border border-cyan-400/20 bg-[#071326]/80 text-cyan-300 backdrop-blur-xl shadow-[0_0_30px_rgba(34,211,238,.15)] transition-all duration-300 hover:scale-110 hover:border-cyan-400 hover:bg-cyan-500/10 hover:text-white ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-8 opacity-0"
      }`}
    >
      <ArrowUp size={22} />
    </button>
  );
}
