import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {

    
  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-br from-white/95 via-blue-50 to-pink-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif text-4xl font-bold text-center mb-4 bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent">
          Let's Work Together
        </h2>
        <p className="text-center text-gray-700 mb-16">
          Ready to bring your project to life? Get in touch!
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="p-8 border-2 border-blue-200 rounded-lg bg-white/80 shadow-lg">
            <h3 className="font-serif text-2xl font-bold mb-6 text-blue-500">
              Send Me a Message
            </h3>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-2">Name</label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-blue-300 focus:border-transparent"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Email</label>
                <input
                  type="email"
                  className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-blue-300 focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-blue-300 focus:border-transparent"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              <button
                // type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-pink-500 hover:from-blue-600 hover:to-pink-600 text-white font-medium rounded-lg shadow-lg transition-colors "
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="p-6 border-2 border-blue-200 rounded-lg bg-white/80 shadow-lg">
              <h3 className="font-serif text-xl font-bold mb-4 text-blue-500">
                Connect With Me
              </h3>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/tlsmith1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center px-4 py-2 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition-colors font-medium"
                >
                  <FaLinkedin className="text-xl mr-2" />
                  LinkedIn
                </a>

                <a
                  href="https://github.com/tl-smith"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center px-4 py-2 border border-pink-500 text-pink-500 rounded-lg hover:bg-pink-500 hover:text-white transition-colors font-medium"
                >
                  <FaGithub className="text-xl mr-2" />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

