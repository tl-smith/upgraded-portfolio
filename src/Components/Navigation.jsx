export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Name */}
          
          <div className="font-serif text-xl font-bold bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent">
            
            Tyechia Smith
          </div>

          {/* Nav links */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-gray-900 hover:text-blue-500 transition-colors font-medium"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-900 hover:text-pink-500 transition-colors font-medium"
            >
              About 
            </a>
            <a
              href="#skills"
              className="text-gray-900 hover:text-purple-500 transition-colors font-medium"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="text-gray-900 hover:text-pink-500 transition-colors font-medium"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-gray-900 hover:text-blue-500 transition-colors font-medium"
            >
              Contact
            </a>
          </div>
         
        </div>
      </div>
    </nav>
  )
}

