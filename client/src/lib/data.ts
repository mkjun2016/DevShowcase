export type ProjectCategory = "web" | "mobile" | "ui";
import mentbox from "@/assets/logo.png";

export interface Project {
  id: number;
  title: string;
  category: ProjectCategory;
  description: string;
  image: string;
  technologies: string[];
  preview?: string;
  github?: string;
  caseStudy?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "MentBox",
    category: "web",
    description:
      "Memorize and practice your speech for your upcoming presentation with the App.",
    image: mentbox,
    technologies: [
      "React",
      "Zustand",
      "Vite",
      "React Query",
      "TailwindCSS",
      "Expo",
    ],
    preview: "https://example.com/dashboard",
    github: "https://github.com/mkjun2016",
  },
  {
    id: 2,
    title: "Fitory",
    category: "mobile",
    description:
      "A fitness tracking mobile application with workout plans, progress charts and social sharing.",
    image:
      "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=600&h=400",
    technologies: [
      "React Native",
      "Zustand",
      "Node.js",
      "Firebase",
      "Styled-Components",
    ],
    preview: "https://example.com/dashboard",
    github: "https://github.com/mkjun2016/fitory",
  },
];

export interface Skill {
  name: string;
  level: number; // 0-100
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  description: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  link?: string;
}
