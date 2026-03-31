import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, MousePointer2 } from 'lucide-react';
import profileImg from '../assets/profile.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-bottle-green/10 rounded-full blur-[120px] -z-10" />
      
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-48 h-48 rounded-full border-4 border-bottle-green/20 p-2 mb-8 bg-slate-900 shadow-2xl relative"
      >
        <div className="w-full h-full rounded-full bg-slate-800 overflow-hidden relative">
            <img src={profileImg} alt="Dedan Muiruri Munga" className="w-full h-full object-cover" />
        </div>
        <div className="absolute -bottom-2 -right-2 bg-bottle-green p-2 rounded-full shadow-lg">
           <MousePointer2 className="w-4 h-4 text-white" />
        </div>
      </motion.div>

      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-center px-4"
      >
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 tracking-tight">
          Dedan <span className="text-bottle-green">Muiruri Munga</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-400 mb-8 max-w-2xl mx-auto font-light leading-relaxed">
          Dynamic & Results-Oriented <span className="text-white font-medium italic">Customer Service & Operations Leader</span> with 6+ years of expertise.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-6 text-slate-300 mb-12">
           <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
              <Mail className="w-4 h-4 text-bottle-green" />
              <span className="text-sm">nenidedan@gmail.com</span>
           </div>
           <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
              <Phone className="w-4 h-4 text-bottle-green" />
              <span className="text-sm">0724 627 842</span>
           </div>
           <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
              <MapPin className="w-4 h-4 text-bottle-green" />
              <span className="text-sm">Nairobi, Kenya</span>
           </div>
        </div>

        <div className="flex items-center justify-center gap-4">
           <motion.a 
             whileHover={{ scale: 1.05 }}
             whileTap={{ scale: 0.95 }}
             href="#contact" 
             className="btn-primary flex items-center gap-2"
           >
             Contact Me
           </motion.a>
           <motion.a 
             whileHover={{ scale: 1.05 }}
             whileTap={{ scale: 0.95 }}
             href="#experience" 
             className="px-6 py-2.5 rounded-full font-medium border border-white/10 transition-all hover:bg-white/5 active:scale-95"
           >
             View Work
           </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
