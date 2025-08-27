
export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-br from-white/95 via-blue-50 to-pink-50">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
       
        {/* About Text */}
        <div className="max-w-6xl mx-auto ">
          <h2 className="font-serif text-4xl text-center font-bold mb-4 bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent">
            About Tyechia
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4 ">
            Hello! I'm Tyechia (pronounced Tie-e-sha), a proud Jersey girl who's recently traded the hustle of the Northeast for the charm of the Peach State. Armed with both an M.B.A. and an M.S.B.M., my journey has been shaped by both academic rigor and a deep passion for learning. As a former collegiate track athlete and honor’s student, I’ve always pushed myself to excel, whether on the field or in the classroom.
         </p>

          <p className="text-gray-700 text-lg leading-relaxed mb-4 ">
            From a young age, I was fascinated by the art of creation—whether it was building intricate Lego structures or assembling Ikea furniture, I loved the process of bringing something new to life. This hands-on curiosity led me to the Innovation Fellowship at the Knowledge House, where I discovered my passion for coding and web development. Today, I’m excited to apply my skills in a new way—using my hands to shape the future of technology.
            As I embark on this journey of web development, I’m eager to blend my creativity, problem-solving skills, and dedication to continuous learning. I look forward to seeing where this path takes me, and I'm thrilled about the endless possibilities that lie ahead.
          </p>
        
        </div>
      </div>
    </section>
  );
}
