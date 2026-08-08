"use client";

const links = [
  "About",
  "Skills",
  "Projects",
  "Experience",
  "Certificates",
  "Contact",
];

export default function NavLinks() {
  return (
    <div className="hidden items-center gap-8 lg:flex">
      {links.map((link) => (
        <a
          key={link}
          href={`#${link.toLowerCase()}`}
          className="relative text-sm font-medium text-white/70 transition-all duration-300 hover:text-cyan-300"
        >
          {link}
        </a>
      ))}
    </div>
  );
}
