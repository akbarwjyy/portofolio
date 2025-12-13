"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden px-6 py-24">
      {/* Decorative accent */}
      <div className="absolute top-20 right-20 w-4 h-4 bg-[#2ECC71] rounded-full opacity-60"></div>
      <div className="absolute bottom-40 left-16 w-2 h-2 bg-[#2ECC71] rounded-full opacity-40"></div>

      <div
        className={`max-w-5xl mx-auto text-center transition-all duration-1000 ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Small tag */}
        <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 border border-[#E5E7EB] rounded-full">
          <span className="w-2 h-2 bg-[#2ECC71] rounded-full animate-pulse"></span>
          <span className="text-sm font-medium tracking-wide text-gray-600">
            AVAILABLE FOR WORK
          </span>
        </div>

        {/* Main heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none mb-8 text-black uppercase">
          BUILDING FUTURE
          <br />
          <span className="relative">
            WITH <span className="text-[#2ECC71]">CLEAN</span> CODE
            <svg
              className="absolute -bottom-2 left-0 w-full"
              height="8"
              viewBox="0 0 200 8"
              fill="none"
            >
              <path
                d="M0 4C50 4 50 4 100 4C150 4 150 4 200 4"
                stroke="#2ECC71"
                strokeWidth="2"
                strokeDasharray="4 4"
              />
            </svg>
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
          Developer Portfolio inspired by GitHub Universe. Creating modern,
          clean, and scalable web experiences.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#projects"
            className="px-8 py-4 bg-black text-white font-semibold rounded-full hover:bg-gray-800 transition-all duration-300 hover:scale-105"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border-2 border-black text-black font-semibold rounded-full hover:bg-black hover:text-white transition-all duration-300"
          >
            Get in Touch
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs text-gray-400 tracking-widest">SCROLL</span>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-gray-400"
        >
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </section>
  );
}
