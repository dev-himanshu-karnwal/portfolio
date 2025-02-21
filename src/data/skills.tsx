import {
  Brush,
  Cloud,
  Code,
  Database,
  GitBranch,
  Laptop,
  Server,
  SquareCode,
} from "lucide-react";

export default [
  {
    category: "Frontend",
    items: [
      { name: "HTML", img: "html" },
      { name: "CSS", img: "css" },
      { name: "Javascript", img: "javascript" },
      { name: "Typescript", img: "typescript" },
      { name: "React", img: "react" },
      { name: "Angular", img: "angular" },
    ],
    icon: <Code className="w-6 h-6 text-primary" />,
  },
  {
    category: "Styling Libraries",
    items: [
      { name: "Bootstrap", img: "bootstrap" },
      { name: "Tailwind CSS", img: "tailwind" },
      { name: "Framer Motion", img: "motion" },
      { name: "Styled Components", img: "styled-components" },
      { name: "CSS Modules", img: "css" },
    ],
    icon: <Brush className="w-6 h-6 text-secondary" />,
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", img: "node" },
      { name: "Express", img: "express" },
      { name: "Nest.js", img: "nest" },
      { name: "Typescript", img: "typescript" },
      { name: "Flask", img: "flask" },
    ],
    icon: <Server className="w-6 h-6 text-accent" />,
  },
  {
    category: "Databases",
    items: [
      { name: "PostgreSQL", img: "postgre" },
      { name: "MongoDB", img: "mongo" },
      { name: "MYSQL", img: "mysql" },
      { name: "Oracle SQL", img: "oracle" },
      { name: "SQLite", img: "sqlite" },
    ],
    icon: <Database className="w-6 h-6 text-primary" />,
  },
  {
    category: "BAAS",
    items: [
      { name: "FireBase", img: "firebase" },
      { name: "Supabase", img: "supabase" },
      { name: "Appwrite", img: "appwrite" },
    ],
    icon: <Cloud className="w-6 h-6 text-secondary" />,
  },
  {
    category: "Source Control",
    items: [
      { name: "Git", img: "git" },
      { name: "Github", img: "github" },
      { name: "Bit Bucket", img: "bitbucket" },
    ],
    icon: <GitBranch className="w-6 h-6 text-accent" />,
  },
  {
    category: "Programming Languages",
    items: [
      { name: "C", img: "c" },
      { name: "C++", img: "cpp" },
      { name: "Python", img: "python" },
      { name: "Java", img: "java" },
      { name: "Javascript", img: "javascript" },
    ],
    icon: <SquareCode className="w-6 h-6 text-primary" />,
  },
  {
    category: "Other Skills",
    items: [
      { name: "Web Scraping", img: "python" },
      { name: "Telegram Bot Development", img: "telegram" },
      { name: "Chrome Extension Development", img: "chrome" },
    ],
    icon: <Laptop className="w-6 h-6 text-secondary" />,
  },
];
