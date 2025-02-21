import { motion } from "framer-motion";

function GradientBG({ position }: { position: string }) {
  return (
    <motion.div
      animate={{
        scale: [1, 1.1, 1],
        opacity: [0.5, 0.8, 0.5],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`absolute ${position} -translate-x-1/2 -translate-y-1/2 w-96 h-96 pointer-events-none bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl`}
    />
  );
}

export default GradientBG;
