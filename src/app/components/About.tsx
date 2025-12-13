"use client";

import { useEffect, useRef, useState } from "react";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skills = [
    {
      name: "Frontend",
      items: ["React", "Vue", "Next.js", "Tailwind CSS"],
    },
    {
      name: "Backend",
      items: ["Node.js", "Express", "PostgreSQL", "MySQL", "MongoDB"],
    },
    { name: "Tools", items: ["Git", "Docker", "Postman", "VS Code"] },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 md:py-32 px-6 border-t border-[#E5E7EB]"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div
          className={`mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-sm font-semibold text-[#2ECC71] tracking-widest uppercase mb-4 block">
            01 — ABOUT
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight uppercase">
            WHO I AM
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          {/* Left column - Description */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-6">
              I am a developer focused on modern web development. I enjoy
              building clean, functional, and scalable products that deliver
              exceptional user experiences.
            </p>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-6">
              With a passion for clean code and modern technologies, I transform
              complex problems into elegant solutions. My approach combines
              technical expertise with a keen eye for design.
            </p>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Currently based in Indonesia, I&apos;m always excited to
              collaborate on projects that push the boundaries of what&apos;s
              possible on the web.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-[#E5E7EB]">
              <div>
                <span className="text-4xl md:text-5xl font-bold text-black">
                  2+
                </span>
                <p className="text-sm text-gray-500 mt-2">Years Experience</p>
              </div>
              <div>
                <span className="text-4xl md:text-5xl font-bold text-black">
                  10+
                </span>
                <p className="text-sm text-gray-500 mt-2">Projects Done</p>
              </div>
            </div>
          </div>

          {/* Right column - Skills */}
          <div
            className={`transition-all duration-700 delay-400 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="space-y-8">
              {skills.map((category, index) => (
                <div
                  key={category.name}
                  className="p-6 border border-[#E5E7EB] rounded-2xl hover:border-[#2ECC71] transition-colors duration-300"
                >
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 bg-[#2ECC71] text-white rounded-full flex items-center justify-center text-sm">
                      {index + 1}
                    </span>
                    {category.name}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((skill) => (
                      <span
                        key={skill}
                        className="px-4 py-2 bg-gray-50 text-gray-700 rounded-full text-sm font-medium hover:bg-[#2ECC71] hover:text-white transition-colors duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
