import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Cryptocurrency Price Tracker",
    description:
      "A real-time cryptocurrency dashboard that displays live coin prices, market trends, and analytics using modern React architecture and APIs.",
    tech: ["React", "API", "Tailwind CSS"],
    link: "https://crypto-dashboard-jan-wine.vercel.app/",
  },
  {
    title: "Prepster – Placement Preparation Platform",
    description:
      "An online placement preparation platform designed for aptitude, logical reasoning, and technical interview practice with a clean UI and smooth user experience.",
    tech: ["React", "Tailwind CSS", "Vercel"],
    link: "https://prepster-five.vercel.app/",
  },
];

const Projects = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-[#020617] via-[#020617] to-[#0f172a] text-white px-6 py-20">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            My Projects
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Real-world projects showcasing frontend development skills,
            clean UI design, API integration, and production-ready deployment.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative rounded-2xl p-[1px] bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-600 hover:scale-[1.03] transition-all duration-300"
            >
              {/* Card */}
              <div className="h-full bg-[#020617]/90 backdrop-blur-xl rounded-2xl p-8 flex flex-col justify-between">

                <div>
                  {/* Title */}
                  <h2 className="text-2xl font-semibold mb-3 text-blue-400 group-hover:text-cyan-300 transition">
                    {project.title}
                  </h2>

                  {/* Description */}
                  <p className="text-gray-300 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs bg-blue-500/10 border border-blue-500/30 text-blue-400 px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Live Link */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-cyan-300 font-medium transition"
                >
                  View Live Project <ExternalLink size={18} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
