import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Zap } from 'lucide-react';

const skills = [
  { 
    category: "Operations", 
    items: ["Operations Management", "Strategic Planning", "Workflow Optimization", "Process Improvement", "PHI Monitoring"] 
  },
  { 
    category: "Customer Service", 
    items: ["Customer Happiness", "Enterprise Onboarding", "Issue Resolution", "Relationship Mgmt", "Global Support"] 
  },
  { 
    category: "Leadership", 
    items: ["Multi-national Leadership", "Coaching & Mentoring", "WBR/MBR reporting", "Stakeholder Mgmt", "Remote Management"] 
  },
  { 
    category: "Technical & Development", 
    items: ["Coding (HTML/CSS/JS)", "React & Vite", "Cyber Security", "Workflow Automation", "IT Troubleshooting"] 
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-8 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center mb-20 text-center">
            <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-4"
            >
                <Zap className="w-3.5 h-3.5 text-bottle-green" />
                <span className="text-[10px] font-black tracking-widest uppercase text-slate-400">Toolkit</span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white">
                CORE <span className="text-bottle-green italic font-light glow-text">COMPETENCIES</span>
            </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skillGroup, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group"
            >
              <div className="glass-card h-full flex flex-col group-hover:border-bottle-green/30 px-6 py-10 relative overflow-hidden">
                {/* Subtle background glow on hover */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-bottle-green/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <h3 className="text-sm font-black text-white mb-8 flex items-center gap-3 tracking-[0.2em] uppercase">
                   <div className="w-1.5 h-6 bg-bottle-green rounded-full shadow-[0_0_10px_rgba(0,106,78,0.5)]" />
                   {skillGroup.category}
                </h3>
                <ul className="space-y-4 flex-grow relative z-10">
                  {skillGroup.items.map((skill, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-400 text-xs font-bold tracking-tight group-hover:text-slate-200 transition-colors">
                      <CheckCircle2 className="w-3.5 h-3.5 text-bottle-green shrink-0 opacity-40 group-hover:opacity-100 transition-opacity" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

