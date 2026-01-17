import SkillPill from "./SkillPill";

const SkillMarquee = ({ skills, reverse = false }) => {
  return (
    <div className="overflow-hidden group">
      <div
        className={`flex gap-4 w-max animate-marquee ${
          reverse ? "animate-marquee-reverse" : ""
        } group-hover:[animation-play-state:paused]`}
      >
        {[...skills, ...skills].map((skill, index) => (
          <SkillPill key={index} name={skill} />
        ))}
      </div>
    </div>
  );
};

export default SkillMarquee;
