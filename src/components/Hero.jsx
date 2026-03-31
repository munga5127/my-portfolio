import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, MousePointer2, ChevronRight, Sparkles } from 'lucide-react';
import profileImg from '../assets/profile.jpg';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } }
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-8 overflow-hidden">
      {/* Background dynamic elements */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-bottle-green/10 rounded-full blur-[120px] animate-pulse -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-emerald-900/10 rounded-full blur-[100px] -z-10" />
      
      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
            key={i}
            initial={{ opacity: 0.1, scale: 0.5 }}
            animate={{ 
                y: [0, -30, 0],
                x: [0, i % 2 === 0 ? 20 : -20, 0],
                opacity: [0.1, 0.3, 0.1]
            }}
            transition={{ 
                duration: 5 + i, 
                repeat: Infinity, 
                ease: "easeInOut" 
            }}
            className="absolute hidden md:block w-1.5 h-1.5 bg-bottle-green rounded-full blur-[1px]"
            style={{ 
                top: `${20 + i * 15}%`, 
                left: `${15 + (i % 3) * 20}%` 
            }}
        />
      ))}

      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative mb-12 group"
      >
        {/* Profile Glow Ring */}
        <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-4 border-2 border-dashed border-bottle-green/30 rounded-full group-hover:border-bottle-green/60 transition-colors"
        />
        <div className="w-56 h-56 rounded-full border-4 border-white/5 p-3 bg-slate-900/50 backdrop-blur-xl shadow-2xl relative z-10 overflow-hidden">
            <div className="w-full h-full rounded-full bg-slate-800 overflow-hidden relative">
                <img src={profileImg} alt="Dedan Muiruri Munga" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <motion.div 
                whileHover={{ scale: 1.2, rotate: 15 }}
                className="absolute -bottom-1 -right-1 bg-bottle-green p-3 rounded-2xl shadow-[0_0_20px_rgba(0,106,78,0.5)] z-20"
            >
               <MousePointer2 className="w-5 h-5 text-white" />
            </motion.div>
        </div>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center max-w-4xl"
      >
        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-bottle-green" />
            <span className="text-xs font-bold tracking-widest uppercase text-slate-300">Operations & Service Expert</span>
        </motion.div>

        <motion.h1 variants={itemVariants} className="text-6xl md:text-8xl font-black mb-6 tracking-tighter leading-[0.9]">
          DEDAN <span className="text-bottle-green glow-text italic font-light">MUIRURI</span>
        </motion.h1>

        <motion.p variants={itemVariants} className="text-xl md:text-2xl text-slate-400 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
          Dynamic and results-oriented <span className="text-white font-medium italic">Customer Service & Operations Leader</span> with <span className="text-bottle-green font-medium">8+ years of experience</span>.
        </motion.p>


        <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-4 md:gap-8 text-slate-400 mb-12">
           <div className="flex items-center gap-2 px-1 transition-colors hover:text-white group cursor-pointer">
              <Mail className="w-4 h-4 text-bottle-green group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium">nenidedan@gmail.com</span>
           </div>
           <div className="flex items-center gap-2 px-1 transition-colors hover:text-white group cursor-pointer">
              <Phone className="w-4 h-4 text-bottle-green group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium">0724 627 842</span>
           </div>
           <div className="flex items-center gap-2 px-1 transition-colors hover:text-white group cursor-pointer">
              <MapPin className="w-4 h-4 text-bottle-green group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium">Nairobi, Kenya</span>
           </div>
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-col md:flex-row items-center justify-center gap-6">
           <motion.a 
             whileHover={{ scale: 1.05 }}
             whileTap={{ scale: 0.95 }}
             href="#contact" 
             className="btn-primary flex items-center gap-3 px-8 py-4 text-lg"
           >
             Get In Touch
             <ChevronRight className="w-5 h-5" />
           </motion.a>
           <motion.a 
             whileHover={{ y: -3, color: '#fff' }}
             href="#experience" 
             className="text-slate-400 font-bold tracking-tight px-6 py-4 flex items-center gap-2 transition-all hover:bg-white/5 rounded-2xl"
           >
             Explore Career
           </motion.a>
        </motion.div>
      </motion.div>

      {/* Floating CTA Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-bottle-green to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;

