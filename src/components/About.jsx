import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, User, Award, Globe, Quote } from 'lucide-react';
import aboutImg from '../assets/about.jpg';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <section id="about" className="py-32 px-8 relative overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="relative aspect-square max-w-md mx-auto group"
        >
           {/* Dynamic background glow */}
           <div className="absolute inset-0 bg-bottle-green/20 rounded-[3rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />
           
           <div className="absolute -inset-4 border border-bottle-green/10 rounded-[3rem] -z-10 translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700" />
           
           <div className="w-full h-full rounded-[2.5rem] bg-slate-900 border border-white/10 overflow-hidden relative shadow-2xl group-hover:border-bottle-green/30 transition-colors duration-500">
              <img src={aboutImg} alt="About Dedan" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
           </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants} className="flex flex-col mb-10">
              <div className="w-12 h-1 bg-bottle-green rounded-full mb-6" />
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white leading-tight">
                  ABOUT <span className="text-bottle-green italic font-light glow-text">ME</span>
              </h2>
          </motion.div>

          <motion.p variants={itemVariants} className="text-xl text-slate-400 mb-10 leading-relaxed font-light">
            An agile <span className="text-white font-medium">Operations & Service Leader</span> with a legal background and a passion for human-centric management. Delivering high-impact results across multi-national teams.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
              { icon: <ShieldCheck className="w-5 h-5 text-bottle-green" />, title: "Operations Leader", desc: "6+ years scaling teams across Kenya, Uganda, and Rwanda." },
              { icon: <Award className="w-5 h-5 text-bottle-green" />, title: "LLB Graduate", desc: "Legal expertise driving compliance and risk mitigation." },
              { icon: <Globe className="w-5 h-5 text-bottle-green" />, title: "Remote Veteran", desc: "Expert in leading global, distributed customer happiness teams." },
              { icon: <User className="w-5 h-5 text-bottle-green" />, title: "Human Centric", desc: "Dedicated to mental health advocacy and customer happiness." }
            ].map((skill, i) => (
              <motion.div 
                key={i}
                variants={itemVariants}
                className="flex items-start gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-bottle-green/30 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-bottle-green/10 transition-colors">
                  {skill.icon}
                </div>
                <div>
                  <h4 className="font-black text-white text-sm tracking-tight mb-1">{skill.title}</h4>
                  <p className="text-[10px] text-slate-500 font-bold tracking-wide uppercase leading-tight">{skill.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            variants={itemVariants}
            className="p-8 glass-card border-bottle-green/10 relative overflow-hidden group"
          >
            <Quote className="absolute -top-4 -right-4 w-24 h-24 text-bottle-green/5 group-hover:text-bottle-green/10 transition-colors rotate-12" />
            <p className="text-sm text-slate-300 italic leading-relaxed relative z-10 font-medium">
              "My mission is to fuse operational efficiency with genuine customer happiness, creating sustainable growth through exceptional human experiences."
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

