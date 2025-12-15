export default function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Akbar Wijaya",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://akbarwijaya.vercel.app",
    image: `${
      process.env.NEXT_PUBLIC_SITE_URL || "https://akbarwijaya.vercel.app"
    }/og-image.png`,
    sameAs: [
      "https://github.com/akbarwijaya",
      "https://linkedin.com/in/akbarwijaya",
      "https://gitlab.com/akbarwijaya",
    ],
    jobTitle: "Web Developer & Backend Specialist",
    worksFor: {
      "@type": "Organization",
      name: "Freelance",
    },
    description:
      "Web Developer focused on Backend Development. Specializing in building scalable server-side applications, RESTful APIs, and database architecture using Node.js, Express.js, and modern web technologies.",
    knowsAbout: [
      "Web Development",
      "Next.js",
      "React",
      "Express.js",
      "Node.js",
      "MongoDB",
      "PostgreSQL",
      "MySQL",
      "Tailwind CSS",
      "JavaScript",
      "TypeScript",
    ],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Universitas Teknologi Digital Indonesia",
    },
  };

  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Akbar Wijaya Portfolio",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://akbarwijaya.vercel.app",
    description:
      "Personal portfolio of Akbar Wijaya, a Web Developer focused on Backend Development and server-side technologies.",
    author: {
      "@type": "Person",
      name: "Akbar Wijaya",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }}
      />
    </>
  );
}
