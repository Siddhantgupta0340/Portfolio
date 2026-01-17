import { motion } from "framer-motion";
import skills from "../data/skills";
import SkillBadge from "./SkillBadge";

const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="relative py-24 bg-gradient-to-b from-[#0f172a] to-[#020617] overflow-visible"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white">Skills</h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto">
            A fast-moving showcase of the tools and technologies I rely on every day —
            hover on any skill to highlight and explore.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {Object.entries(skills).map(([category, items]) =>
            items.map((skill, index) => <SkillBadge key={index} skill={skill} />)
          )}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
