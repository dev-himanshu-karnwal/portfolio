import { motion } from "framer-motion";
import quotes from "../data/quotes";

const Quote = () => {
  // Randomly select a quote
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="container mx-auto px-4 py-6 bg-slate-200 dark:bg-slate-800 text-center rounded-xl"
    >
      <p className="text-lg md:text-xl font-medium text-slate-700 dark:text-slate-300 mb-4 font-mono">
        "{randomQuote.text}"
      </p>

      <p className="text-sm md:text-base text-primary dark:text-secondary font-semibold">
        - {randomQuote.author}
      </p>
    </motion.div>
  );
};

export default Quote;
