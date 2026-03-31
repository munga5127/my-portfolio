import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 bg-slate-950/80 backdrop-blur-md border-b border-white/5"
    >
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-bottle-green to-emerald-800 flex items-center justify-center font-bold text-white shadow-lg">
          D
        </div>
        <span className="font-bold text-lg tracking-tight">Dedan <span className="text-bottle-green">Muiruri</span></span>
      </div>
      
      <div className="hidden md:flex items-center gap-8">
        <a href="#about" className="nav-link text-slate-400 hover:text-white transition-colors">About</a>
        <a href="#experience" className="nav-link text-slate-400 hover:text-white transition-colors">Experience</a>
        <a href="#projects" className="nav-link text-slate-400 hover:text-white transition-colors text-bottle-green font-bold">Projects</a>
        <a href="#skills" className="nav-link text-slate-400 hover:text-white transition-colors">Skills</a>
        <a href="#contact" className="nav-link text-slate-400 hover:text-white transition-colors">Contact</a>
      </div>

      <a href="#contact" className="hidden md:flex btn-primary !py-2 !px-5 text-sm">
        Hire Me
      </a>
    </motion.nav>
  );
};

export default Navbar;
