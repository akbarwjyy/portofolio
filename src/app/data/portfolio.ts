import { ReactNode } from "react";

// Types
export interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  link: string;
  github?: string;
  image: string;
  featured?: boolean;
}

export interface SkillCategory {
  name: string;
  items: string[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: ReactNode;
}

// Skills Data
export const skills: SkillCategory[] = [
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

// Projects Data
export const projects: Project[] = [
  {
    id: 1,
    title: "PESONA 2025",
    description:
      "Official information website providing guidance and details for new student orientation programs.",
    techStack: ["Vue.js", "GSAP", "Aos.js", "TailwindCSS", "Vite"],
    link: "https://pesona.utdi.ac.id/",
    github: "#",
    image: "/projects/project2.png",
    featured: true,
  },
  {
    id: 2,
    title: "Go-Commerce API",
    description:
      "Go-Commerce API is a Golang (Gin)-based e-commerce REST API with a Modular Monolith architecture.",
    techStack: ["Golang", "GORM", "PostgreSQL", "Docker", "Redis"],
    link: "https://github.com/akbarwjyy/go-commerce-api.git",
    github: "https://github.com/akbarwjyy/go-commerce-api.git",
    image: "/projects/project4.png",
    featured: true,
  },
  {
    id: 3,
    title: "PORTAL UKM IK",
    description:
      "A web-based organization management platform designed to streamline member administration and content publishing.",
    techStack: ["React.js", "Express.js", "TailwindCSS", "MySQL"],
    link: "/building",
    github: "#",
    image: "/projects/image.png",
    featured: true,
  },
];
