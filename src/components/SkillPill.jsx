const SkillPill = ({ name }) => {
  return (
    <div className="px-5 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white text-sm font-medium hover:bg-blue-500/20 hover:border-blue-500 hover:text-blue-400 transition-all duration-300 cursor-pointer whitespace-nowrap">
      {name}
    </div>
  );
};

export default SkillPill;
