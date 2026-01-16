import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaDownload } from "react-icons/fa";

const Home = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black to-gray-900 px-6 text-center">
      {/* Motion container */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl"
      >
        {/* Greeting */}
        <h1 className="text-4xl md:text-6xl font-bold text-white">
          Hi, I’m <span className="text-blue-500">Siddhant Gupta</span>
        </h1>

        {/* Role */}
        <h2 className="mt-4 text-xl md:text-2xl text-gray-400">
          Full Stack Developer
        </h2>

        {/* Resume-style tagline */}
        <p className="mt-6 text-gray-400 leading-relaxed">
          I build scalable, high-performance web applications with modern frontend & backend
          technologies. Skilled in React.js, Tailwind CSS, Node.js, and database management.
          Passionate about solving real-world problems with clean UI & optimized code.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            to="/projects"
            className="px-6 py-3 bg-blue-500 text-black rounded-lg font-semibold hover:bg-blue-400 transition"
          >
            View Projects
          </Link>

          <Link
            to="/contact"
            className="px-6 py-3 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-black transition"
          >
            Contact Me
          </Link>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-green-500 text-green-500 rounded-lg hover:bg-green-500 hover:text-black transition flex items-center gap-2"
          >
            <FaDownload /> Resume
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
