import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-6 text-center">
      {/* Copyright */}
      <p className="text-sm">
       © 2026 Siddhant Gupta. Building clean, scalable, and high-performance web apps.
  
      </p>

      {/* Social Icons */}
      <div className="mt-2 flex justify-center gap-6 text-2xl">
        <motion.a
          whileHover={{ scale: 1.2, color: "#F5F5F5" }}
          transition={{ type: "spring", stiffness: 300 }}
          href="https://github.com/siddhant-gupta"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400"
        >
          <FaGithub />
        </motion.a>

        <motion.a
          whileHover={{ scale: 1.2, color: "#0A66C2" }}
          transition={{ type: "spring", stiffness: 300 }}
          href="https://www.linkedin.com/in/siddhant-gupta-b7730930a/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400"
        >
          <FaLinkedin />
        </motion.a>
      </div>
    </footer>
  );
};

export default Footer;
