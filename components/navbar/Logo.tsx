"use client";

export default function Logo() {
  return (
    <a href="/" className="group flex items-center select-none">
      <div className="flex items-end">
        <span className="text-[44px] font-black leading-none tracking-[-0.08em] text-white transition-all duration-300 group-hover:text-cyan-300">
          JR
        </span>

        <span className="mb-[7px] ml-1 h-4 w-4 rounded-full bg-cyan-400 shadow-[0_0_18px_rgba(34,211,238,.9)] transition-all duration-300 group-hover:scale-125 group-hover:shadow-[0_0_30px_rgba(34,211,238,1)]" />
      </div>
    </a>
  );
}
