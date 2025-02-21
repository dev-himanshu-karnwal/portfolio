import { motion } from "framer-motion";
import GradientBG from "../components/GradientBG";
import ContactForm from "../sections/ContactForm";
import ContactInfo from "../sections/ContactInfo";

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto relative"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
        <p className="text-lg text-slate-600 dark:text-slate-300 mb-12">
          Have a question or want to work together? Feel free to reach out!
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <ContactForm />
          <ContactInfo />
        </div>

        <GradientBG position="top-0 -left-1/4" />
        <GradientBG position="bottom-0 -right-1/4" />
      </motion.div>
    </div>
  );
};

export default Contact;
