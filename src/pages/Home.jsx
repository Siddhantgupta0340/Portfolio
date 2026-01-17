import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SkillsSection from "../components/SkillsSection";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-screen bg-aboutSection text-gray-300 flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10" />

          <motion.div
            className="absolute -top-48 -left-48 w-[600px] h-[600px] bg-cyan-500/25 rounded-full blur-[160px]"
            animate={{ x: [0, 240, 0], y: [0, 160, 0] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          />

          <motion.div
            className="absolute top-1/2 right-[-250px] w-[520px] h-[520px] bg-purple-500/25 rounded-full blur-[150px]"
            animate={{ x: [0, -200, 0], y: [0, -140, 0] }}
            transition={{ duration: 34, repeat: Infinity, ease: "linear" }}
          />
        </div>

        {/* Hero Content */}
        <motion.div
          className="relative z-10 text-center px-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-white mb-4"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            Hi, I’m Siddhant Gupta
          </motion.h1>

          {/* ===== Animated Roles ===== */}
          <motion.h2
            className="text-2xl md:text-3xl text-cyan-400 mb-6 font-medium h-12"
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
          >
            <Typewriter
              words={[
                "Frontend Developer",
                "React Developer",
                "MERN Stack Developer",
                "Full-Stack Engineer",
                "UI/UX Enthusiast",
              ]}
              loop={0}         // infinite loop
              cursor
              cursorStyle="|"
              typeSpeed={100}  // typing speed
              deleteSpeed={50} // backspace speed
              delaySpeed={1500} // delay before typing next word
            />
          </motion.h2>

          <motion.p
            className="max-w-2xl text-gray-400 mx-auto mb-8"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
          >
            I build modern, scalable, and performance-driven web applications using React, Tailwind CSS, and full-stack technologies.
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-4"
            animate={{ y: [0, -2, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <Link
              to="/projects"
              className="px-6 py-3 rounded-lg bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 hover:bg-cyan-500/20 transition"
            >
              View Projects
            </Link>

            <Link
              to="/contact"
              className="px-6 py-3 rounded-lg border border-white/20 text-gray-200 hover:bg-white/10 transition"
            >
              Contact Me
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* ===== SKILLS SECTION ===== */}
      <SkillsSection />
    </>
  );
};

export default Home;
