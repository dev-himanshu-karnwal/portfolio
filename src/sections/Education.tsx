import { motion } from "framer-motion";

const educationData = [
  {
    degree: "Online Learning Platforms",
    institution: "Self-Taught Developer",
    duration: "2021 - Present",
    description:
      "Continuously learning through platforms like Udemy, Coursera, and freeCodeCamp to stay updated with industry trends.",
  },
  {
    degree: "Bachelor of Computer Applications",
    institution: "Tilak Raj Chadha Institute of Management and Technology",
    duration: "2021 - 2024",
    description:
      "Studied core computer science concepts including programming, algorithms, data structures, and software engineering.",
  },
  {
    degree: "Senior Secondary Education",
    institution: "St. Vivekanand Lotus Valley Public School",
    duration: "2019 - 2021",
    description:
      "Acquired foundational knowledge in commerce subjects, focusing on accounting, business studies, and economics.",
  },
];

function EducationSection() {
  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="text-4xl font-bold text-center mb-12 text-slate-800 dark:text-slate-200"
        >
          My Education
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.2,
                duration: 0.6,
                ease: "easeInOut",
              }}
              className="relative p-6 bg-white dark:bg-slate-800 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative z-10">
                <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-2">
                  {edu.degree}
                </h3>

                <p className="text-slate-600 dark:text-slate-400 mb-1">
                  {edu.institution}
                </p>

                <p className="text-sm text-primary dark:text-secondary mb-4">
                  {edu.duration}
                </p>

                <p className="text-slate-700 dark:text-slate-300">
                  {edu.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default EducationSection;
