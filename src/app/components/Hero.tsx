"use client";

export default function Hero() {
  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden px-4 sm:px-6 py-16 md:py-24"
    >
      {/* Decorative accent - hidden on mobile */}
      <div
        className="hidden md:block absolute top-20 right-10 lg:right-20 w-4 h-4 bg-[#2ECC71] rounded-full opacity-60"
        aria-hidden="true"
      ></div>
      <div
        className="hidden md:block absolute bottom-40 left-8 lg:left-16 w-2 h-2 bg-[#2ECC71] rounded-full opacity-40"
        aria-hidden="true"
      ></div>

      <div className="max-w-5xl mx-auto text-center">
        {/* Small tag */}
        <div
          data-aos="fade-down"
          data-aos-delay="0"
          className="inline-flex items-center gap-2 mb-6 md:mb-8 px-3 md:px-4 py-1.5 md:py-2 border border-[#E5E7EB] rounded-full"
        >
          <span
            className="w-2 h-2 bg-[#2ECC71] rounded-full animate-pulse"
            aria-hidden="true"
          ></span>
          <span className="text-xs md:text-sm font-medium tracking-wide text-gray-600">
            AVAILABLE FOR WORK
          </span>
        </div>

        {/* Main heading - Only h1 on page */}
        <h1
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-tight md:leading-none mb-4 md:mb-6 text-black uppercase"
        >
          BUILDING THE FUTURE
          <br />
          <span className="relative">
            WITH <span className="text-[#2ECC71]">CODE</span>
          </span>
        </h1>

        {/* Role badge */}
        <p data-aos="fade-up" data-aos-delay="200" className="mb-6 md:mb-8">
          <span className="text-sm sm:text-base md:text-lg lg:text-xl font-medium text-gray-500 tracking-wide">
            Informatics Student{" "}
            <span className="text-[#2ECC71]" aria-hidden="true">
              |
            </span>{" "}
            Backend Developer
          </span>
        </p>

        {/* Subheading */}
        <p
          data-aos="fade-up"
          data-aos-delay="300"
          className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-xs sm:max-w-md md:max-w-xl lg:max-w-2xl mx-auto mb-6 md:mb-8 font-light leading-relaxed px-2 sm:px-0"
        >
          I build modern web applications with a strong focus on clean, scalable
          backend development.
        </p>

        {/* CTA Buttons */}
        <nav
          data-aos="fade-up"
          data-aos-delay="400"
          className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center mb-4"
          aria-label="Primary actions"
        >
          <a
            href="#projects"
            className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-black text-white text-sm md:text-base font-semibold rounded-full hover:bg-gray-800 transition-all duration-300 hover:scale-105 text-center"
          >
            View My Work
          </a>
          <a
            href="/cv/Akbar-Wijaya-CV.pdf"
            download="Akbar-Wijaya-CV.pdf"
            className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-[#2ECC71] text-white text-sm md:text-base font-semibold rounded-full hover:bg-[#27AE60] transition-all duration-300 hover:scale-105 text-center inline-flex items-center justify-center gap-2"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            <span>Download CV</span>
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 border-2 border-black text-black text-sm md:text-base font-semibold rounded-full hover:bg-black hover:text-white transition-all duration-300 text-center"
          >
            Get in Touch
          </a>
        </nav>
      </div>

      {/* Scroll indicator - hidden on very small screens */}
      <div
        data-aos="fade-up"
        data-aos-delay="500"
        className="hidden sm:flex absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex-col items-center gap-2 animate-bounce"
        aria-hidden="true"
      >
        <span className="text-xs text-gray-400 tracking-widest">SCROLL</span>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-gray-400"
          aria-hidden="true"
        >
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </section>
  );
}
