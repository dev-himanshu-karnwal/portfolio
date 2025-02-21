import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { email, githubUrl, linkedinUrl, phone } from "../constants";

const socialLinks = [
  {
    name: "GitHub",
    url: githubUrl,
    icon: <Github className="w-6 h-6" />,
  },
  {
    name: "LinkedIn",
    url: linkedinUrl,
    icon: <Linkedin className="w-6 h-6" />,
  },
];

function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.3 }}
      className="space-y-8"
    >
      <div className="card">
        <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
        <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300 mb-2">
          <Mail className="w-5 h-5" />
          <a href={`mailto:${email}`}>{email}</a>
        </div>
        <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
          <Phone className="w-5 h-5" />
          <a href={`tel:${phone}`}>{phone}</a>
        </div>
      </div>

      <div className="card">
        <h3 className="text-xl font-semibold mb-4">Connect with Me</h3>
        <div className="flex gap-4">
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-100 dark:bg-slate-700 rounded-lg hover:bg-primary/10 
                             hover:text-primary transition-colors duration-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {link.icon}
            </motion.a>
          ))}
        </div>
      </div>

      <div className="card">
        <h3 className="text-xl font-semibold mb-4">Location</h3>
        <p className="text-slate-600 dark:text-slate-300">
          Based in India
          <br />
          Available for remote work worldwide
        </p>
      </div>
    </motion.div>
  );
}

export default ContactInfo;
