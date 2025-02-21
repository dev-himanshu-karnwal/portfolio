import {
  Cloud,
  Code2,
  Cpu,
  Database,
  Globe,
  Layout,
  Server,
  Terminal,
} from "lucide-react";

const technologies = [
  {
    name: "Frontend",
    items: [
      { name: "React", icon: <Code2 size={24} />, color: "text-[#61DAFB]" },
      {
        name: "TypeScript",
        icon: <Code2 size={24} />,
        color: "text-[#3178C6]",
      },
      {
        name: "Next.js",
        icon: <Layout size={24} />,
        color: "text-[#000000] dark:text-white",
      },
      {
        name: "Tailwind CSS",
        icon: <Code2 size={24} />,
        color: "text-[#38B2AC]",
      },
      {
        name: "Tailwind CSS",
        icon: <Code2 size={24} />,
        color: "text-[#38B2AC]",
      },
      {
        name: "Tailwind CSS",
        icon: <Code2 size={24} />,
        color: "text-[#38B2AC]",
      },
      {
        name: "Tailwind CSS",
        icon: <Code2 size={24} />,
        color: "text-[#38B2AC]",
      },
    ],
  },
  {
    name: "Backend",
    items: [
      { name: "Node.js", icon: <Server size={24} />, color: "text-[#339933]" },
      {
        name: "Express",
        icon: <Server size={24} />,
        color: "text-[#000000] dark:text-white",
      },
      { name: "Python", icon: <Terminal size={24} />, color: "text-[#3776AB]" },
      { name: "Java", icon: <Cpu size={24} />, color: "text-[#007396]" },
    ],
  },
  {
    name: "Database",
    items: [
      {
        name: "PostgreSQL",
        icon: <Database size={24} />,
        color: "text-[#336791]",
      },
      {
        name: "MongoDB",
        icon: <Database size={24} />,
        color: "text-[#47A248]",
      },
      { name: "Redis", icon: <Database size={24} />, color: "text-[#DC382D]" },
      { name: "MySQL", icon: <Database size={24} />, color: "text-[#4479A1]" },
    ],
  },
  {
    name: "DevOps",
    items: [
      { name: "Docker", icon: <Cloud size={24} />, color: "text-[#2496ED]" },
      {
        name: "Kubernetes",
        icon: <Cloud size={24} />,
        color: "text-[#326CE5]",
      },
      { name: "AWS", icon: <Cloud size={24} />, color: "text-[#FF9900]" },
      { name: "CI/CD", icon: <Globe size={24} />, color: "text-[#2088FF]" },
    ],
  },
];

export default technologies;
