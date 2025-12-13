# Context: Building a Modern Portfolio Website Inspired by GitHub Universe Using Next.js & Tailwind CSS

This document serves as context for AI/VibeCoding in developing a personal portfolio website with a visual style inspired by GitHub Universe 2025. The main objective is to create a minimalist, modern, elegant interface with a clean futuristic aesthetic.

---

## 1. Project Objectives

The goal is to build a personal portfolio website that:

- Presents a professional identity in a modern way.
- Uses a visual style similar to GitHub Universe: bold typography, minimal colors, strong contrast, and clean layout.
- Utilizes modern technologies: Next.js (App Router) and Tailwind CSS.
- Features an effective page structure: Hero → About → Projects → Contact.

---

## 2. Technologies & Tools

| Category    | Tool/Technology                                                                    |
| ----------- | ---------------------------------------------------------------------------------- |
| Framework   | Next.js (latest version, App Router)                                               |
| Styling     | Tailwind CSS                                                                       |
| Font        | Modern sans-serif (e.g., Inter, Space Grotesk)                                     |
| Animations  | Framer Motion (optional)                                                           |
| AI Workflow | VibeCoding / AI-assisted generation for components, styling, and content structure |

---

## 3. Design Concept

The design follows GitHub Universe 2025 principles:

### 3.1 Primary Colors

Use a minimalist color palette:

| Element       | Color Code                                                  |
| ------------- | ----------------------------------------------------------- |
| Background    | `#FFFFFF` or very light tones                               |
| Text          | `#000000` bold & solid                                      |
| Accent Green  | `#2ECC71` (similar to the leaf accent in the Universe logo) |
| Line / Border | `#E5E7EB` light gray                                        |

### 3.2 Typography

- **Titles:** large, bold, uppercase (similar to "UNIVERSE'25")
- **Paragraphs:** clean & lightweight

### 3.3 Layout

- Generous whitespace
- Simple grid
- Focus on readability

### 3.4 Design Mood

- High contrast
- Modern flat design
- Resembles global developer conference landing pages

---

## 4. Page Structure

Final page structure AI will generate:

### 4.1 Hero Section

- Large bold headline, full viewport
- Simple subheadline
- Optional CTA
- Directly inspired by GitHub Universe 2025 header

### 4.2 About Section

- Short self-description (3–5 sentences)
- Bold heading
- Two-column or simple single-column layout

### 4.3 Projects Section

- Showcase selected projects
- Clean project cards (thin border, subtle hover)
- Project title + short description + tech stack

### 4.4 Contact Section

- Minimal and straightforward
- Email or social media links
- CTA: "Get in Touch"

---

## 5. Guidelines for AI / VibeCoding

When generating code or content, the AI must:

- Use Next.js App Router (`app/` directory).
- Use Tailwind CSS for all styling.
- Apply large headings (`xl` → `7xl`), similar to Universe.
- Use ample whitespace and large paddings (`py-24`, `py-32`).
- Use green accent sparingly.
- Keep decorations minimal; focus on premium simplicity.
- Ensure components are reusable and clean.
- Maintain full responsiveness.

---

## 6. Expected Folder Structure

```
project-root/
├── app/
│   ├── page.tsx
│   ├── components/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Projects.tsx
│   │   └── Contact.tsx
│   └── globals.css
├── public/
├── tailwind.config.ts
└── package.json
```

---

## 7. Expected AI Output

AI should generate:

- Ready-to-use Next.js components
- Clean and consistent Tailwind CSS styling
- A page structure following the defined layout
- Professional placeholder content

---

## 8. Tone & Copywriting Example (AI may adjust)

**Hero Heading:**

> "BUILDING FUTURE WITH CLEAN CODE"

**Subheading:**

> "Developer Portfolio inspired by GitHub Universe."

**About Text:**

> "I am a developer focused on modern web development. I enjoy building clean, functional, and scalable products."

---

## 9. Additional Notes

The project should appear:

- Professional
- Modern
- Extremely simple yet powerful
- Similar to major tech conference landing pages

---

> This document serves as a guideline for the development process using AI/VibeCoding. All AI outputs must follow the design concept and structure defined above.
