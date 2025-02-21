export interface Project {
  title: string;
  description: string;
  images: string[];
  videos?: string[];
  tech: string[];
  github: string;
  demo: string;
}

export const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with real-time inventory management and secure payment processing.",
    images: [
      "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800",
    ],
    videos: ["https://example.com/demo-video.mp4"],
    tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management tool with real-time updates and team collaboration features.",
    images: [
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800",
    ],
    tech: ["Next.js", "TypeScript", "MongoDB", "Socket.io"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "Weather Dashboard",
    description:
      "A beautiful weather dashboard with interactive maps and detailed forecasts.",
    images: [
      "https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&q=80&w=800",
    ],
    tech: ["React", "D3.js", "OpenWeather API"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "Weather Dashboard",
    description:
      "A beautiful weather dashboard with interactive maps and detailed forecasts.",
    images: [
      "https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&q=80&w=800",
    ],
    tech: ["React", "D3.js", "OpenWeather API"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "Weather Dashboard",
    description:
      "A beautiful weather dashboard with interactive maps and detailed forecasts.",
    images: [
      "https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&q=80&w=800",
    ],
    tech: ["React", "D3.js", "OpenWeather API"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
];
