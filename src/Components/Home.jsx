
import MyImage from "../assets/_MG_4300 small.jpg"

export default function Home() {
  return (
    <section id="home" className="py-20  px-4 bg-gradient-to-br from-white/95 via-blue-50 to-pink-50">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-20">
        {/* Profile Picture */}
        <div className="flex-shrink-0">
          <img
            src={MyImage}
            alt="Tyechia Smith"
            className="w-48 h-48 rounded-full border-4 border-blue-200 shadow-lg object-cover object-[50%_10%]"
          />
        </div>

        {/* Welcome Text */}
        <div className="text-center md:text-left max-w-xl">
          <h2 className="font-serif text-4xl text-center font-bold mb-4 bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent">
            Welcome!
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            I’m passionate about building applications that are both functional and beautiful.  
            I enjoy exploring new technologies, solving challenging problems, and collaborating with others to create meaningful projects.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            My goal is to craft web experiences that are intuitive, engaging, and visually appealing.  
            I’m constantly learning and evolving my skills to stay at the forefront of modern web development.
          </p>
        </div>
      </div>
    </section>
  );
}
