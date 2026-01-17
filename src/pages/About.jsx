import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-aboutSection text-gray-300">

      {/* ===== Animated Background ===== */}
      <div className="absolute inset-0">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10" />

        {/* Floating glow elements */}
        <motion.div
          className="absolute -top-40 -left-40 w-[520px] h-[520px] bg-cyan-500/20 rounded-full blur-[150px]"
          animate={{ x: [0, 220, 0], y: [0, 140, 0] }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        />

        <motion.div
          className="absolute bottom-[-200px] right-[-200px] w-[480px] h-[480px] bg-purple-500/20 rounded-full blur-[140px]"
          animate={{ x: [0, -180, 0], y: [0, -120, 0] }}
          transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* ===== Content ===== */}
      <div className="relative max-w-5xl mx-auto px-6 py-24 space-y-20">

        {/* Intro */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            About Siddhant Gupta
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl text-gray-400 leading-relaxed"
          >
            A deeper look into my background, the projects I build, and the
            principles that guide my work as a frontend-focused full stack
            developer.
          </motion.p>
        </div>

        {/* Who I Am */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">Who I Am</h2>

          <p className="max-w-3xl leading-relaxed text-gray-400">
            I'm <span className="text-white font-medium">Siddhant Gupta</span>, a
            B.Tech Computer Science student at IPS Academy, Indore, graduating in
            2026. I specialize in building responsive, high-performance web
            applications with a strong focus on clean UI, scalability, and real-
            world usability.
          </p>

          <ul className="space-y-3 text-gray-400">
            <li>
              • <span className="text-gray-200 font-medium">Frontend & UI:</span>{" "}
              Strong experience with React.js, Tailwind CSS, responsive design,
              and modern component-based architecture
            </li>
            <li>
              • <span className="text-gray-200 font-medium">Full-Stack:</span>{" "}
              Built complete applications including an Online Education
              Platform, Live News App, and a Cryptocurrency Price Tracker
            </li>
            <li>
              • <span className="text-gray-200 font-medium">AI Integration:</span>{" "}
              Currently working on <em>Sensei</em>, an AI-powered career coach
              using Next.js, Prisma, NeonDB, Clerk, and Gemini AI
            </li>
            <li>
              • <span className="text-gray-200 font-medium">Practical Impact:</span>{" "}
              Experience with authentication, APIs, database design, and
              deployment on Vercel
            </li>
            <li>
              • <span className="text-gray-200 font-medium">Consistency:</span>{" "}
              Completed a Web Development Internship at InternPe and actively
              build production-ready projects alongside academics
            </li>
          </ul>
        </div>

        {/* What Drives Me */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">What Drives Me</h2>

          <p className="max-w-3xl leading-relaxed text-gray-400">
            I enjoy turning complex requirements into intuitive user
            experiences. I care deeply about performance, accessibility, and
            maintainability. Curiosity pushes me to explore new tools and
            patterns, while real-world problem solving keeps my work grounded
            and purposeful.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
