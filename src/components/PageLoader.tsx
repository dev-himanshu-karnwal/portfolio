import { motion } from "framer-motion";
import { Code2 } from "lucide-react";

const FullPageLoader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-50 dark:bg-slate-900">
      {/* Outer Circle */}
      <motion.div
        className="absolute w-32 h-32 rounded-full border-4 border-primary/50"
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 1, 0] }} // Scale in and out continuously
        transition={{
          duration: 2, // Total duration of one cycle
          repeat: Infinity, // Repeat indefinitely
          ease: "easeInOut", // Smooth easing for scaling
        }}
      />

      {/* Inner Circle */}
      <motion.div
        className="relative w-20 h-20 rounded-full bg-primary shadow-lg flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <motion.span
          className="text-white text-3xl font-bold"
          initial={{ rotate: -360 }}
          animate={{ rotate: 0 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        >
          <Code2 size={32} />
        </motion.span>
      </motion.div>
    </div>
  );
};

export default FullPageLoader;
