import { motion } from "framer-motion";

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-blue-500 transition"
    >
      <h3 className="text-xl font-semibold text-white mb-2">
        {project.title}
      </h3>

      <p className="text-gray-400 text-sm mb-4">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((item, index) => (
          <span
            key={index}
            className="text-xs px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full"
          >
            {item}
          </span>
        ))}
      </div>

      <div className="flex gap-4">
        <a
          href={project.github}
          target="_blank"
          className="text-sm text-gray-300 hover:text-white"
        >
          GitHub
        </a>
        <a
          href={project.live}
          target="_blank"
          className="text-sm text-blue-400 hover:underline"
        >
          Live Demo
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
