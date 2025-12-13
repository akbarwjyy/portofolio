"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  link: string;
  github?: string;
  image: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with real-time inventory management, payment integration, and admin dashboard.",
    techStack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Stripe"],
    link: "#",
    github: "#",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    featured: true,
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "Collaborative project management tool with real-time updates, drag-and-drop functionality, and team analytics.",
    techStack: ["React", "Node.js", "Socket.io", "MongoDB"],
    link: "#",
    github: "#",
    image:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
    featured: true,
  },
  {
    id: 3,
    title: "AI Content Generator",
    description:
      "AI-powered platform that generates marketing copy, blog posts, and social media content using GPT models.",
    techStack: ["Next.js", "OpenAI API", "TailwindCSS", "Vercel"],
    link: "#",
    github: "#",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
    featured: true,
  },
];

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-24 md:py-32 px-6 bg-white"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div
          className={`mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-sm font-semibold text-[#2ECC71] tracking-widest uppercase mb-4 block">
            02 — WORK
          </span>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            PROJECT
          </h2>
        </div>

        {/* Projects grid - 3 columns like GitHub Universe */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group flex flex-col transition-all duration-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100 + 200}ms` }}
            >
              {/* Project Image */}
              <div className="relative w-full h-48 overflow-hidden rounded-xl mb-6 bg-gray-100">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Project content */}
              <div className="flex-grow">
                <p className="text-gray-900 text-lg leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Link button - GitHub Universe style */}
              <a
                href={project.link}
                className="inline-flex items-center justify-between w-full px-6 py-4 bg-gray-100 rounded-xl text-sm font-semibold text-black uppercase tracking-wider hover:bg-gray-200 transition-colors duration-300 group/btn"
              >
                <span>{project.title.toUpperCase()}</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1"
                >
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </a>
            </div>
          ))}
        </div>

        {/* More projects link */}
        <div
          className={`text-center mt-16 transition-all duration-700 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-black text-black font-semibold rounded-full hover:bg-black hover:text-white transition-all duration-300"
          >
            View All Projects
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
