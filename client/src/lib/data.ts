export type ProjectCategory = "web" | "mobile" | "ui";

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
    title: "Dashboard Analytics",
    category: "web",
    description: "A responsive dashboard with real-time analytics, advanced filtering and data visualization.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=600&h=400",
    technologies: ["React", "Redux", "D3.js", "Firebase"],
    preview: "https://example.com/dashboard",
    github: "https://github.com/example/dashboard"
  },
  {
    id: 2,
    title: "FitTrack",
    category: "mobile",
    description: "A fitness tracking mobile application with workout plans, progress charts and social sharing.",
    image: "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=600&h=400",
    technologies: ["React Native", "Redux", "Node.js", "MongoDB"],
    preview: "https://example.com/fittrack",
    github: "https://github.com/example/fittrack"
  },
  {
    id: 3,
    title: "BankEase UI",
    category: "ui",
    description: "A modern banking interface design with focus on accessibility and seamless user experience.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=600&h=400",
    technologies: ["Figma", "Sketch", "Adobe XD", "Prototyping"],
    preview: "https://example.com/bankease",
    caseStudy: "https://example.com/bankease-case-study"
  },
  {
    id: 4,
    title: "ShopNow",
    category: "web",
    description: "A complete e-commerce solution with product management, cart, and payment integration.",
    image: "https://images.unsplash.com/photo-1556742031-c6961e8560b0?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=600&h=400",
    technologies: ["Next.js", "Stripe", "MongoDB", "Tailwind"],
    preview: "https://example.com/shopnow",
    github: "https://github.com/example/shopnow"
  },
  {
    id: 5,
    title: "TravelBuddy",
    category: "mobile",
    description: "A travel companion app with itinerary planning, offline maps and local recommendations.",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=600&h=400",
    technologies: ["Flutter", "Firebase", "Google Maps API", "Bloc"],
    preview: "https://example.com/travelbuddy",
    github: "https://github.com/example/travelbuddy"
  },
  {
    id: 6,
    title: "BeatStream",
    category: "ui",
    description: "A music streaming service UI design with focus on visual appeal and intuitive navigation.",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=600&h=400",
    technologies: ["Figma", "UI Design", "Prototyping", "User Testing"],
    preview: "https://example.com/beatstream",
    caseStudy: "https://example.com/beatstream-case-study"
  }
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
