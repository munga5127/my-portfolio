import React from 'react';
import { motion } from 'framer-motion';
import { User, Briefcase, Code, MousePointer2, Mail } from 'lucide-react';

const Navbar = () => {
  const navItems = [
    { name: 'About', href: '#about', icon: <User className="w-4 h-4" /> },
    { name: 'Experience', href: '#experience', icon: <Briefcase className="w-4 h-4" /> },
    { name: 'Projects', href: '#projects', icon: <Code className="w-4 h-4" /> },
    { name: 'Skills', href: '#skills', icon: <MousePointer2 className="w-4 h-4" /> },
    { name: 'Contact', href: '#contact', icon: <Mail className="w-4 h-4" /> },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl glass-nav rounded-2xl px-6 py-3 flex items-center justify-between shadow-[0_8px_32px_0_rgba(0,0,0,0.4)] border border-white/10"
    >
      <motion.div 
        whileHover={{ scale: 1.05 }}
        className="flex items-center gap-3 cursor-pointer group"
      >
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-bottle-green to-emerald-900 flex items-center justify-center font-black text-white text-xl shadow-[0_0_20px_rgba(0,106,78,0.4)] group-hover:shadow-[0_0_25px_rgba(0,106,78,0.6)] transition-all">
          D
        </div>
        <div className="flex flex-col leading-none">
          <span className="font-black text-lg tracking-tighter">DEDAN</span>
          <span className="text-[10px] font-bold text-bottle-green tracking-[0.2em] uppercase">Muiruri</span>
        </div>
      </motion.div>
      
      <div className="hidden md:flex items-center gap-1">
        {navItems.map((item) => (
          <motion.a
            key={item.name}
            href={item.href}
            whileHover={{ y: -2 }}
            className="nav-link flex items-center gap-2"
          >
            <span className="text-bottle-green/70 group-hover:text-bottle-green">{item.icon}</span>
            {item.name}
          </motion.a>
        ))}
      </div>

      <motion.a 
        href="#contact"
        whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(0, 106, 78, 0.4)' }}
        whileTap={{ scale: 0.95 }}
        className="btn-primary !py-2 !px-6 text-sm font-bold tracking-tight hidden md:flex"
      >
        Let's Talk
      </motion.a>

      {/* Mobile Menu Placeholder - can be expanded later */}
      <div className="md:hidden w-8 h-8 flex flex-col justify-center gap-1.5 cursor-pointer">
        <div className="w-full h-0.5 bg-white rounded-full" />
        <div className="w-2/3 h-0.5 bg-bottle-green rounded-full self-end" />
        <div className="w-full h-0.5 bg-white rounded-full" />
      </div>
    </motion.nav>
  );
};

export default Navbar;

