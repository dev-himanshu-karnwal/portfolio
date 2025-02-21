import React from "react";
import { motion } from "framer-motion";
import { type Project } from "../data/projects";

function ProjectCard({
  project,
  index,
  setSelectedProject,
}: {
  project: Project;
  index: number;
  setSelectedProject: React.Dispatch<React.SetStateAction<Project | null>>;
}) {
  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="card group cursor-pointer z-2"
      onClick={() => setSelectedProject(project)}
    >
      <div className="relative overflow-hidden rounded-lg mb-4">
        <img
          src={project.images[0]}
          alt={project.title}
          className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <p className="text-white text-lg font-medium">View Details</p>
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
      <p className="text-slate-600 dark:text-slate-300 mb-4 line-clamp-2">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {project.tech.map((tech, i) => (
          <span
            key={i}
            className="px-3 py-1 bg-primary/10 text-primary dark:text-slate-300 rounded-full text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default ProjectCard;
