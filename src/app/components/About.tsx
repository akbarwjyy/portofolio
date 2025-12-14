"use client";

export default function About() {
  const skills = [
    {
      name: "Frontend",
      items: ["React.js", "Vue.js", "Next.js", "Tailwind CSS"],
    },
    {
      name: "Backend",
      items: [
        "Node.js",
        "Express.js",
        "Laravel",
        "Flask",
        "PostgreSQL",
        "MySQL",
        "MongoDB",
        "Prisma",
        "Supabase",
      ],
    },
    { name: "Tools", items: ["Git", "Docker", "Postman", "VS Code"] },
  ];

  return (
    <section
      id="about"
      className="py-24 md:py-32 px-6 border-t border-[#E5E7EB]"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div data-aos="fade-up" className="mb-16">
          <span className="text-sm font-semibold text-[#2ECC71] tracking-widest uppercase mb-4 block">
            01 — ABOUT
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight uppercase">
            WHO I AM
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          {/* Left column - Description */}
          <div data-aos="fade-right" data-aos-delay="100">
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-6">
              I am an Informatics student at Universitas Teknologi Digital
              Indonesia with a strong focus on backend web development. I
              specialize in building reliable, scalable, and well-structured
              server-side applications.
            </p>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-6">
              As a web developer, I enjoy working with modern technologies to
              design clean architectures and transform complex business logic
              into efficient solutions. I prioritize code quality,
              maintainability, and performance in every project I work on.
            </p>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Currently based in Indonesia, I am continuously improving my
              backend expertise and open to collaborating on impactful web
              projects and real-world applications.
            </p>

            {/* Stats */}
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-[#E5E7EB]"
            >
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
          <div>
            <div className="space-y-8">
              {skills.map((category, index) => (
                <div
                  key={category.name}
                  data-aos="fade-left"
                  data-aos-delay={index * 100 + 100}
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
