"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import { HiOutlineCodeBracket, HiOutlineEnvelope } from "react-icons/hi2";

const socials = [
  {
    icon: FaLinkedinIn,
    href: "https://www.linkedin.com/in/jadav-ruthwik/",
  },
  {
    icon: FaGithub,
    href: "https://github.com/Jadav-Ruthwik",
  },
  {
    icon: HiOutlineCodeBracket,
    href: "https://leetcode.com/u/Jadav-Ruthwik/",
  },
  {
    icon: HiOutlineEnvelope,
    href: "mailto:23211a05b9@bvrit.ac.in",
  },
  {
    icon: FaInstagram,
    href: "https://instagram.com/jadav__banny",
  },
];

export default function HeroButtons() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.8,
        duration: 0.7,
      }}
      className="mt-10"
    >
      {/* View Projects */}
      <button
        onClick={() =>
          document
            .getElementById("projects")
            ?.scrollIntoView({ behavior: "smooth" })
        }
        className="group flex items-center gap-3 rounded-full bg-cyan-400 px-8 py-4 font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-cyan-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.45)]"
      >
        View Projects
        <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
      </button>

      {/* Stats */}
      <div className="mt-14 flex flex-wrap gap-12">
        <div>
          <h2 className="text-4xl font-bold text-cyan-400">10+</h2>
          <p className="mt-1 text-sm text-white/60">Projects Built</p>
        </div>

        <div>
          <h2 className="text-4xl font-bold text-cyan-400">2+</h2>
          <p className="mt-1 text-sm text-white/60">Internships & Programs</p>
        </div>

        <div>
          <h2 className="text-4xl font-bold text-cyan-400">2027</h2>
          <p className="mt-1 text-sm text-white/60">B.Tech Graduation</p>
        </div>
      </div>

      {/* Social Buttons */}
      <div className="mt-20 flex items-center gap-5">
        {socials.map(({ icon: Icon, href }, index) => (
          <Link
            key={index}
            href={href}
            target="_blank"
            className="group flex h-16 w-16 items-center justify-center rounded-full bg-white text-[#08122B] transition-all duration-300 hover:-translate-y-2 hover:bg-cyan-400 hover:text-black hover:shadow-[0_0_30px_rgba(34,211,238,0.45)]"
          >
            <Icon className="text-[30px] transition-transform duration-300 group-hover:scale-110" />
          </Link>
        ))}
      </div>
    </motion.div>
  );
}
