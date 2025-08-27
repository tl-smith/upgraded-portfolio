import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import Navigation from './Components/Navigation.jsx'
import Home from './Components/Home.jsx'
import About from './Components/About.jsx'
import Skills from './Components/Skills.jsx'
import Projects from './Components/Projects.jsx'
import Contact from './Components/Contact.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navigation />
    <Home />
    <About />
    <Skills />
    <Projects />
    <Contact />

   
  </StrictMode>,
)
