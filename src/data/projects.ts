export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  date: string;
  status: "completed" | "in-progress" | "planned";
  category: "web" | "plugin" | "tool" | "game";
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  highlights: string[];
}

export const projectsData: Project[] = [
  {
    id: "1",
    title: "Telleer",
    description:
      "A modern web application built with JavaScript, featuring a clean user interface and responsive design.",
    technologies: ["JavaScript", "HTML", "CSS"],
    date: "2025-06",
    status: "completed",
    category: "web",
    githubUrl: "https://github.com/Marten-Mrfc/telleer",
    liveUrl: "https://telleer.vercel.app",
    highlights: [
      "Modern web application",
      "Responsive design",
      "Deployed on Vercel",
      "Recently updated",
    ],
  },
  {
    id: "2",
    title: "Personal Portfolio Website",
    description:
      "Contains the code of my own website built with TypeScript, showcasing my projects and skills with a modern design.",
    technologies: ["TypeScript", "React", "Next.js", "Tailwind CSS"],
    date: "2025-06",
    status: "completed",
    category: "web",
    githubUrl: "https://github.com/Marten-Mrfc/Website",
    liveUrl: "https://website-nine-opal-98.vercel.app",
    highlights: [
      "Personal portfolio showcase",
      "TypeScript implementation",
      "Modern UI/UX design",
      "Responsive layout",
    ],
  },
  {
    id: "3",
    title: "KnockBackFFA Plugin",
    description:
      "The only open-source KnockBackFFA Plugin that is currently actively maintained. A comprehensive Minecraft plugin for PvP gameplay.",
    technologies: ["Kotlin", "PaperMC", "Minecraft API"],
    date: "2024-04",
    status: "completed",
    category: "plugin",
    githubUrl: "https://github.com/Marten-Mrfc/KnockBackFFA",
    liveUrl: "https://marten-mrfc.github.io/KnockBackFFA/",
    highlights: [
      "Open-source and actively maintained",
      "5 GitHub stars",
      "GPL-3.0 license",
      "Comprehensive PvP gamemode",
      "All-in-one solution",
    ],
  },
  {
    id: "4",
    title: "Custom Extensions for Typewriter",
    description:
      "Custom Extensions made for the Typewriter Minecraft plugin, extending functionality with custom features and enhancements.",
    technologies: ["Kotlin", "Minecraft API", "Typewriter"],
    date: "2025-06",
    status: "completed",
    category: "plugin",
    githubUrl: "https://github.com/Marten-Mrfc/CustomExtensionsTypewriter",
    highlights: [
      "Plugin extension system",
      "Kotlin-based development",
      "Minecraft server enhancement",
      "Custom functionality",
    ],
  },
  {
    id: "5",
    title: "MLib - Kotlin Library",
    description:
      "A Marten_mrfcyt Kotlin PaperMC Plugin Library providing reusable components and utilities for Minecraft plugin development.",
    technologies: ["Kotlin", "PaperMC", "Library Development"],
    date: "2025-02",
    status: "completed",
    category: "tool",
    githubUrl: "https://github.com/Marten-Mrfc/MLib",
    highlights: [
      "Reusable plugin library",
      "MIT License",
      "Kotlin-based",
      "Developer productivity tool",
    ],
  },
  {
    id: "6",
    title: "MobWaves Plugin",
    description:
      "A Minecraft plugin that creates challenging mob wave encounters, perfect for survival and adventure gameplay modes.",
    technologies: ["Kotlin", "PaperMC", "Minecraft API"],
    date: "2025-01",
    status: "completed",
    category: "plugin",
    githubUrl: "https://github.com/Marten-Mrfc/MobWaves",
    highlights: [
      "Wave-based mob encounters",
      "GPL-3.0 license",
      "Survival gameplay enhancement",
      "Kotlin implementation",
    ],
  },
  {
    id: "7",
    title: "Tournament System",
    description:
      "A tournament management system built with Kotlin, designed for organizing and managing competitive events.",
    technologies: ["Kotlin", "Tournament Management"],
    date: "2025-01",
    status: "completed",
    category: "tool",
    githubUrl: "https://github.com/Marten-Mrfc/Tournament",
    highlights: [
      "Tournament organization",
      "Event management",
      "Competitive gaming support",
      "Kotlin-based system",
    ],
  },
  {
    id: "8",
    title: "Masterclass Website",
    description:
      "A website built with Svelte for educational content and masterclass presentation, featuring modern web technologies.",
    technologies: ["Svelte", "HTML", "CSS", "JavaScript"],
    date: "2025-02",
    status: "completed",
    category: "web",
    githubUrl: "https://github.com/Marten-Mrfc/masterclass-website",
    highlights: [
      "Educational platform",
      "Svelte framework",
      "GitHub Pages deployment",
      "Modern web design",
    ],
  },
  {
    id: "9",
    title: "GitHub Profile Configuration",
    description:
      "Config files for my GitHub profile, featuring a custom README and profile customization built with Svelte.",
    technologies: ["Svelte", "Markdown", "GitHub Actions"],
    date: "2022-03",
    status: "completed",
    category: "tool",
    githubUrl: "https://github.com/Marten-Mrfc/Marten-Mrfc",
    liveUrl: "https://github.com/Marten-Mrfc",
    highlights: [
      "Custom GitHub profile",
      "Svelte-based components",
      "Profile automation",
      "Developer branding",
    ],
  },
];