export default function Skills() {
  const skills = [
    { name: "React", color: "bg-amber-500" },
    { name: "JavaScript", color: "bg-cyan-500" },
    { name: "HTML/CSS", color: "bg-purple-500" },
    { name: "TailwindCSS", color: "bg-green-500" },
    { name: "Node.js", color: "bg-blue-500" },
    { name: "Git", color: "bg-pink-500" },
    { name: "VS Code", color: "bg-amber-500" },
    { name: "Figma", color: "bg-cyan-500" },
    { name: "SQLite", color: "bg-purple-500" },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-br from-white/95 via-blue-50 to-pink-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="font-serif text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent">
          Skills
        </h2>
        <p className="text-gray-700 mb-12">
          Here are some of the tools and technologies I use to build modern web applications.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill) => (
            <span
              key={skill.name}
              className={`${skill.color} text-white px-4 py-2 rounded-full font-medium shadow-lg hover:scale-105 transform transition-transform`}
            >
              {skill.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
