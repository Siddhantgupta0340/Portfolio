import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-[#020617] rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition">
      {/* Image */}
      <div className="w-full h-48 bg-gray-800">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-white mb-2">
          {project.title}
        </h3>

        <p className="text-gray-400 mb-4">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, idx) => (
            <span
              key={idx}
              className="text-sm bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 bg-cyan-500 text-black font-semibold rounded-lg hover:bg-cyan-400 transition"
          >
            Live Demo
          </a>

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 border border-cyan-400 text-cyan-300 rounded-lg hover:bg-cyan-900 transition"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
