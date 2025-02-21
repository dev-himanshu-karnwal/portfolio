import { motion } from "framer-motion";
import GradientBG from "../components/GradientBG";
import Skills from "../sections/Skills";
import Eperience from "../sections/Eperience";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-12 relative overflow-hidden">
      <GradientBG position="top-0 left-1/4" />
      <GradientBG position="top-1/2 left-1/4" />
      <GradientBG position="bottom-0 right-1/4" />

      {/* Introduction */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
        <p className="text-lg text-slate-600 dark:text-slate-300 mb-4">
          I'm a results-driven Full Stack Developer with expertise in modern web
          technologies. Proficient in both frontend and backend development, I
          specialize in building scalable, high-performance applications that
          enhance user experiences.
        </p>
        <p className="text-lg text-slate-600 dark:text-slate-300">
          Passionate about problem-solving and innovation, I thrive on creating
          efficient solutions for complex challenges. With hands-on experience
          in React, Angular, Node.js, NestJS and a lot more, I continuously
          explore new technologies to stay ahead in the ever-evolving tech
          landscape.
        </p>
      </motion.section>

      <Eperience />
      <Skills />
    </div>
  );
};

export default About;
