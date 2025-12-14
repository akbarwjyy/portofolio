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
    title: "Note App",
    description:
      "A modern web-based note application designed to deliver a smooth, efficient, and intuitive writing experience.",
    techStack: ["Vue.js", "Laravel", "PostgreSQL", "TailwindCSS", "Vite"],
    link: "https://github.com/akbarwjyy/note-app",
    github: "https://github.com/akbarwjyy/note-app",
    image: "/projects/project3.png",
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
