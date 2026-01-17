import { motion } from "framer-motion";

const SkillBadge = ({ skill }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }} // subtle pop on hover
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="
        relative flex items-center justify-center
        h-20 px-6
        rounded-xl
        bg-[#020617]        /* dark card background */
        border border-white/10
        shadow-md            /* default subtle shadow */
        hover:shadow-[0_0_20px_rgba(56,189,248,0.5)] /* cyan glow on hover */
        cursor-pointer
        overflow-visible
      "
    >
      {/* Skill Text */}
      <span className="text-white font-semibold tracking-wide">{skill}</span>
    </motion.div>
  );
};

export default SkillBadge;
