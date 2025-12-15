import { Metadata } from "next";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import JsonLd from "./lib/JsonLd";

export const metadata: Metadata = {
  title: "Akbar Wijaya | Web Developer & Backend Specialist",
  description:
    "Welcome to Akbar Wijaya portfolio. A Web Developer focused on Backend Development, specializing in building scalable server-side applications and RESTful APIs.",
  openGraph: {
    title: "Akbar Wijaya | Web Developer Portfolio",
    description:
      "Discover projects and skills of Akbar Wijaya, a Web Developer focused on Backend Development and server-side technologies.",
  },
};

export default function Home() {
  return (
    <>
      <JsonLd />
      <header>
        <Navbar />
      </header>
      <main className="min-h-screen bg-white overflow-x-hidden">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
