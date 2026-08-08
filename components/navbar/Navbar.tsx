"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import ResumeButton from "./ResumeButton";

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById("hero");

      setScrolled(window.scrollY > 30);

      if (hero) {
        const heroBottom = hero.getBoundingClientRect().bottom;

        // Hide navbar after scrolling a little inside Hero
        if (window.scrollY > 80) {
          setVisible(false);
        } else {
          // Show only while Hero is visible
          setVisible(heroBottom > 120);
        }
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 top-8 z-50 flex w-full justify-center pt-6 transition-all duration-500 ${
        visible
          ? "translate-y-0 opacity-100"
          : "-translate-y-8 opacity-0 pointer-events-none"
      }`}
    >
      <nav
        className={`flex w-[80%] max-w-[1500px] items-center justify-between rounded-2xl border px-8 py-4 transition-all duration-500 ${
          scrolled
            ? "border-cyan-400/20 bg-[#071326]/75 shadow-[0_20px_60px_rgba(0,0,0,.45)] backdrop-blur-2xl"
            : "border-white/10 bg-white/5 backdrop-blur-xl"
        }`}
      >
        <Logo />

        <NavLinks />

        <ResumeButton />
      </nav>
    </header>
  );
}
