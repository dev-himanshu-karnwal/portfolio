import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import experiences from "../data/experiences";

function Eperience() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="mb-16"
    >
      <h2 className="text-3xl font-bold mb-8">Experience</h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 * index }}
            className="relative pl-8 border-l-2 border-primary/30"
          >
            <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
              {exp.icon}
            </div>
            <div className="card">
              <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
              <Link
                to={exp.companyLink}
                className="text-secondary font-medium mb-2"
              >
                {exp.company}
              </Link>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-3">
                {exp.period}
              </p>
              <p className="text-slate-600 dark:text-slate-300">
                {exp.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Eperience;
