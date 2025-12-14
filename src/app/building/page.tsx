import Link from "next/link";

export default function BuildingPage() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden px-6 py-24 bg-white">
      {/* Decorative accents */}
      <div className="absolute top-20 right-20 w-4 h-4 bg-[#2ECC71] rounded-full opacity-60 animate-pulse"></div>
      <div className="absolute bottom-40 left-16 w-2 h-2 bg-[#2ECC71] rounded-full opacity-40 animate-pulse"></div>
      <div className="absolute top-1/3 left-10 w-3 h-3 bg-[#2ECC71] rounded-full opacity-30 animate-pulse"></div>

      <div className="max-w-2xl mx-auto text-center">
        {/* Icon */}
        <div
          data-aos="zoom-in"
          className="mb-8 inline-flex items-center justify-center w-24 h-24 bg-[#2ECC71]/10 rounded-full"
        >
          <svg
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#2ECC71"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="animate-pulse"
          >
            <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
            <path d="M17 18h1" />
            <path d="M12 18h1" />
            <path d="M7 18h1" />
          </svg>
        </div>

        {/* Small tag */}
        <div
          data-aos="fade-down"
          data-aos-delay="100"
          className="inline-flex items-center gap-2 mb-6 px-4 py-2 border border-[#E5E7EB] rounded-full"
        >
          <span className="w-2 h-2 bg-[#2ECC71] rounded-full animate-pulse"></span>
          <span className="text-sm font-medium tracking-wide text-gray-600">
            UNDER CONSTRUCTION
          </span>
        </div>

        {/* Main heading */}
        <h1
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6 text-black uppercase"
        >
          Building in{" "}
          <span className="text-[#2ECC71]">Progress</span>
        </h1>

        {/* Subheading */}
        <p
          data-aos="fade-up"
          data-aos-delay="300"
          className="text-lg md:text-xl text-gray-600 max-w-md mx-auto mb-10 font-light leading-relaxed"
        >
          This part of the site is under development.
        </p>

        {/* Progress bar */}
        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="w-full max-w-xs mx-auto mb-10"
        >
          <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full w-2/3 bg-[#2ECC71] rounded-full animate-pulse"></div>
          </div>
          <p className="text-xs text-gray-400 mt-2">~66% Complete</p>
        </div>

        {/* CTA Button */}
        <div data-aos="fade-up" data-aos-delay="500">
          <Link
            href="/"
            className="inline-flex items-center gap-3 px-8 py-4 bg-black text-white font-semibold rounded-full hover:bg-[#2ECC71] transition-all duration-300 hover:scale-105"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Homepage
          </Link>
        </div>
      </div>

      {/* Decorative code blocks */}
      <div className="absolute bottom-10 right-10 opacity-10 hidden md:block">
        <pre className="text-xs text-gray-600 font-mono">
          {`{
  "status": "building",
  "progress": 66,
  "eta": "soon"
}`}
        </pre>
      </div>
    </section>
  );
}
