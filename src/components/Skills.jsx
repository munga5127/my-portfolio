import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

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
    <section id="skills" className="py-24 px-8 max-w-6xl mx-auto">
      <div className="flex items-center gap-4 mb-16 mx-auto justify-center">
          <div className="w-12 h-1 bg-bottle-green rounded-full" />
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center">Core <span className="text-bottle-green font-light italic">Competencies</span></h2>
          <div className="w-12 h-1 bg-bottle-green rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {skills.map((skillGroup, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group"
          >
            <div className="glass-card h-full flex flex-col group-hover:border-bottle-green/30 px-6 py-8">
              <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                 <div className="w-2 h-6 bg-bottle-green rounded-full opacity-50 group-hover:opacity-100 transition-opacity" />
                 {skillGroup.category}
              </h3>
              <ul className="space-y-4 flex-grow">
                {skillGroup.items.map((skill, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-400 text-sm group-hover:text-slate-300 transition-colors">
                    <CheckCircle2 className="w-4 h-4 text-bottle-green shrink-0" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
