"use client";

import Navbar from "../navbar/Navbar";
import HeroBackground from "./HeroBackground";
import HeroTitle from "./HeroTitle";
import HeroButtons from "./HeroButtons";
import HeroImage from "./HeroImage";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-[#020617]"
    >
      <Navbar />

      <HeroBackground />
      <div className="relative z-10 mx-auto grid min-h-screen max-w-[1500px] grid-cols-2 items-center px-24">
        <div className="flex justify-center">
          <div className="max-w-xl">
            <HeroTitle />
            <HeroButtons />
          </div>
        </div>

        {/* Right */}
        <div className="flex justify-center">
          <HeroImage />
        </div>
      </div>
    </section>
  );
}
