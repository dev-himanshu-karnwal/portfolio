import { motion } from "framer-motion";
import { name } from "../constants";
import { Link } from "react-router-dom";
import { Code2, Database, Server, Cpu, Cloud, Github } from "lucide-react";
import GradientBG from "../components/GradientBG";

const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col md:flex-row items-center justify-between gap-12 min-h-[calc(100vh-4rem)] md:min-h-screen md:-mt-8 mb-48 sm:mb-20 md:mb-0"
    >
      {/* Left side content remains the same */}
      <div className="relative flex-1 flex flex-col items-center md:items-start text-center md:text-left space-y-4 md:space-y-6">
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          Hi, I'm {name}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-6"
        >
          Full-Stack Developer | DevOps Enthusiast
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="text-lg text-slate-600 dark:text-slate-400 mb-8"
        >
          Bringing creativity and performance together for outstanding web
          applications.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Link to="/about" className="btn-primary">
            About Me
          </Link>
        </motion.div>

        <GradientBG position="-top-1/2 left-0" />
      </div>

      {/* Enhanced right side content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
        className="flex-1 relative h-[500px] -mt-[50%] -ml-[50%] md:mt-0 md:ml-0"
      >
        <GradientBG position="top-1/2 left-1/2" />

        {/* Central container for floating elements */}
        <div className="absolute inset-0 grid place-items-center">
          <div className="relative w-80 h-80">
            {/* Original floating cards with adjusted positions */}
            <motion.div
              animate={{
                rotate: 360,
                y: [0, -20, 0],
              }}
              transition={{
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
              }}
              className="absolute top-0 left-0 w-32 h-32 bg-primary/10 rounded-2xl grid place-items-center backdrop-blur-sm"
            >
              <Code2 size={48} className="text-primary" />
            </motion.div>

            <motion.div
              animate={{
                rotate: -360,
                y: [0, 20, 0],
              }}
              transition={{
                rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                y: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
              }}
              className="absolute bottom-0 right-0 w-32 h-32 bg-secondary/10 rounded-2xl grid place-items-center backdrop-blur-sm"
            >
              <Server size={48} className="text-secondary" />
            </motion.div>

            <motion.div
              animate={{
                rotate: 0,
                x: [0, 20, 0],
              }}
              transition={{
                rotate: { duration: 25, repeat: Infinity, ease: "linear" },
                x: { duration: 3, repeat: Infinity, ease: "easeInOut" },
              }}
              className="absolute top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2 w-32 h-32 bg-accent/10 rounded-2xl grid place-items-center backdrop-blur-sm"
            >
              <Cloud size={48} className="text-accent" />
            </motion.div>

            {/* New floating elements */}
            <motion.div
              animate={{
                rotate: -180,
                scale: [1, 1.1, 1],
              }}
              transition={{
                rotate: { duration: 30, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
              }}
              className="absolute top-10 right-10 w-24 h-24 bg-purple-500/10 rounded-full grid place-items-center backdrop-blur-sm"
            >
              <Cpu size={32} className="text-purple-500" />
            </motion.div>

            <motion.div
              animate={{
                rotate: 90,
                scale: [1, 0.9, 1],
              }}
              transition={{
                rotate: { duration: 28, repeat: Infinity, ease: "linear" },
                scale: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
              }}
              className="absolute bottom-20 left-10 w-20 h-20 bg-blue-500/10 rounded-lg grid place-items-center backdrop-blur-sm"
            >
              <Database size={28} className="text-blue-500" />
            </motion.div>

            <motion.div
              animate={{
                rotate: -90,
                scale: [1, 1.2, 1],
              }}
              transition={{
                rotate: { duration: 22, repeat: Infinity, ease: "linear" },
                scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
              }}
              className="absolute top-20 left-20 w-16 h-16 bg-green-500/10 rounded-xl grid place-items-center backdrop-blur-sm"
            >
              <Github size={24} className="text-green-500" />
            </motion.div>

            {/* Connecting lines */}
            <motion.div
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <div className="absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2">
                <div className="absolute top-0 left-0 w-full h-full border-2 border-primary/20 rounded-full" />
                <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 border-2 border-secondary/20 rounded-full" />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Small floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -20, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2,
            }}
            className="absolute w-2 h-2 bg-primary/50 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
            }}
          />
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Hero;
