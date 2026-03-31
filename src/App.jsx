import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';

import Projects from './components/Projects';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 font-['Inter',sans-serif]">
      <Navbar />
      <main className="pt-20">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      
      <footer className="py-12 border-t border-white/5 text-center px-8">
        <p className="text-sm text-slate-500">
           &copy; {new Date().getFullYear()} <span className="font-bold text-white tracking-tight">Dedan <span className="text-bottle-green">Muiruri</span></span>. Built with React & Vite.
        </p>
      </footer>
    </div>
  );
}

export default App;
