import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import {
  X,
  Github,
  ExternalLink,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import { type Project } from "../data/projects";

const ProjectModal = ({
  selectedProject,
  setSelectedProject,
}: {
  selectedProject: Project | null;
  setSelectedProject: React.Dispatch<React.SetStateAction<Project | null>>;
}) => {
  if (!selectedProject) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
      onClick={() => setSelectedProject(null)}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white dark:bg-slate-800 rounded-xl max-w-2xl w-full p-6 max-h-[90vh] overflow-y-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-2xl font-bold">{selectedProject.title}</h2>
          <button
            onClick={() => setSelectedProject(null)}
            className="p-1 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg"
          >
            <X size={24} />
          </button>
        </div>

        {/* Carousel */}
        <Swiper
          modules={[Navigation, Pagination]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{ clickable: true }}
          spaceBetween={10}
          slidesPerView={1}
          className="w-full h-64 rounded-lg overflow-hidden mb-6"
        >
          <div className="swiper-button-next absolute top-1/2 right-4 transform -translate-y-1/2 z-10 text-primary hover:text-secondary cursor-pointer">
            <ChevronRight size={32} />
          </div>
          <div className="swiper-button-prev absolute top-1/2 left-4 transform -translate-y-1/2 z-10 text-primary hover:text-secondary cursor-pointer">
            <ChevronLeft size={32} />
          </div>
          {selectedProject.images.map((item, index) => (
            <SwiperSlide key={index}>
              <img
                src={item}
                alt={`${selectedProject.title} - Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Description */}
        <p className="text-slate-600 dark:text-slate-300 mb-6">
          {selectedProject.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {selectedProject.tech.map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-primary/10 text-primary dark:text-slate-300 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          {selectedProject.github && (
            <a
              href={selectedProject.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center gap-2"
            >
              <Github size={20} />
              View Code
            </a>
          )}
          {selectedProject.demo && (
            <a
              href={selectedProject.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary flex items-center gap-2"
            >
              <ExternalLink size={20} />
              Live Demo
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectModal;
