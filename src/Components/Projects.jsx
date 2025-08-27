
export default function Projects() {
  const projects = [
    {
      name: "Random Music Generator",
      image: "/music-generator.png",
      technologies: ["HTML", "JavaScript", "API"],
      description: "This is a fun and interactive web app that allows users to search for music by artist name and receive a random song preview from Deezer's API." ,
    },
    {
      name: "WanderBite",
      image: "/wanderbite.png",
      technologies: ["React", "TailwindCSS", "JavaScript"],
      description: "WanderBite is an immersive full-stack CRUD web application designed for foodies and travelers alike. It blends the thrill of spontaneous adventure with the joy of discovering new cuisines. ",
    },
    
  ];

  return (
    <section
      id="projects"
      className="py-20 px-4 bg-gradient-to-br from-white/95 via-blue-50 to-pink-50"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="font-serif text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent">
          Projects
        </h2>
        <p className="text-gray-700 mb-12">
          A selection of projects I’ve worked on, showcasing technologies and
          skills I’ve developed.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
          {projects.map((project) => (
            <a
              key={project.name}
              href={project.link}
              className="block p-6 bg-white rounded-lg border-2 border-blue-100 shadow-lg hover:shadow-xl hover:border-pink-200 transition-all"
            >
                {/* Project Name */}
              <h3 className="font-serif text-2xl font-bold mb-6 text-blue-500">
                {project.name}
              </h3>
              
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-auto rounded-md mb-4"
              />

              {/* Technologies */}
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-700 font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Description */}
               <p className="text-gray-700 text-sm">{project.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
