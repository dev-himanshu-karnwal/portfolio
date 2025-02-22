import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";

import { type Project, projects } from "../data/projects";
import ProjectModal from "../components/ProjectModal";
import GradientBG from "../components/GradientBG";
import ProjectCard from "../sections/ProjectCard";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      const filtered = projects.filter((project) =>
        project.title
          .concat(project.description)
          .concat(project.tech.join(" "))
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      );
      setFilteredProjects(filtered);
    }, 300);

    return () => clearTimeout(delayDebounce);
  }, [searchTerm]);

  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="container mx-auto px-4 py-12 relative overflow-hidden">
      <GradientBG position="top-0 left-1/2" />
      <GradientBG position="bottom-0 right-1/2" />

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-bold mb-12"
      >
        My Projects
      </motion.h1>

      <div className="relative w-[80vw] md:w-1/2 mx-auto mt-4 md:mt-0 mb-8 group focus-within:scale-[1.05] transition-transform duration-300">
        <input
          type="text"
          placeholder="Search Projects..."
          value={searchTerm}
          onChange={onSearchChange}
          className="w-full px-4 py-2 pr-10 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
        />
        <Search className="w-5 h-5 absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={index}
            index={index}
            project={project}
            setSelectedProject={setSelectedProject}
          />
        ))}
      </div>

      {selectedProject && (
        <ProjectModal
          selectedProject={selectedProject}
          setSelectedProject={setSelectedProject}
        />
      )}
    </div>
  );
};

export default Projects;
