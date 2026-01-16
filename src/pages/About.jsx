const About = () => {
  return (
    <section className="min-h-screen bg-gray-950 text-gray-300 px-6 py-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          About Me
        </h2>

        <p className="leading-relaxed mb-6">
          I am a passionate <span className="text-blue-500 font-semibold">
          Full Stack Developer</span> with strong expertise in building modern
          web applications from scratch. I enjoy working across the entire
          development lifecycle — from designing responsive user interfaces to
          developing robust backend systems and APIs.
        </p>

        <p className="leading-relaxed mb-6">
          My technical skill set includes React, Next.js, Tailwind CSS,
          JavaScript (ES6+), Node.js, Express, Prisma ORM, and MongoDB/NeonDB.
          I have hands-on experience with authentication systems, REST APIs,
          database design, and deployment on platforms like Vercel.
        </p>

        <p className="leading-relaxed">
          I believe in writing clean, maintainable code and continuously
          improving my problem-solving skills through real-world projects,
          internships, and DSA practice. My goal is to work in a challenging
          environment where I can grow as a developer and contribute to
          impactful products.
        </p>
      </div>
    </section>
  );
};

export default About;
