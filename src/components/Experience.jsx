import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Briefcase, Calendar, ChevronRight, GraduationCap } from 'lucide-react';

const experiences = [
  {
    company: "Ready Works",
    role: "Customer Happiness Manager",
    period: "Oct 2024 — Ongoing",
    type: "Remote",
    description: [
      "Resolved customer inquiries with a 95%+ satisfaction rating.",
      "Successfully onboarded 50+ enterprise clients, cutting timelines by 30%.",
      "Automated IT and operational workflows, improving efficiency by 25%.",
      "Tracked customer usage metrics to increase platform utilization by 35%."
    ]
  },
  {
    company: "Optica Africa",
    role: "Head of Customer Service",
    period: "Mar 2024 — Aug 2024",
    type: "Regional",
    description: [
      "Developed and implemented operational strategies for high-performing teams.",
      "Mitigated operational risks across multi-national offices (Kenya, Uganda, Rwanda).",
      "Streamlined processes to increase efficiency and productivity across the region."
    ]
  },
  {
    company: "CCI Kenya Limited",
    role: "Operations Manager",
    period: "Nov 2023 — Mar 2024",
    type: "Shutterfly Campaign",
    description: [
      "Coached team leaders on performance improvement via statistical analysis.",
      "Liaised with international clients on script updates and product changes.",
      "Implemented methods to enhance team efficiency and service delivery."
    ]
  },
];

const ExperienceCard = ({ exp, index }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="relative group cursor-default"
    >
      <div 
        style={{ transform: "translateZ(50px)" }}
        className="glass-card group-hover:border-bottle-green/40 transition-colors duration-500"
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div className="space-y-1">
            <h3 className="text-2xl font-black text-white tracking-tight group-hover:text-bottle-green transition-colors">{exp.role}</h3>
            <div className="flex items-center gap-2 text-slate-300 font-semibold text-sm">
                <Briefcase className="w-4 h-4 text-bottle-green" />
                <span className="tracking-wide uppercase">{exp.company}</span>
                <span className="text-slate-600">•</span>
                <span className="text-bottle-green/80 italic lowercase">{exp.type}</span>
            </div>
          </div>
          
          <div className="flex items-center gap-2 px-4 py-2 bg-bottle-green/5 rounded-2xl border border-bottle-green/10 text-slate-400 text-xs font-bold font-mono">
             <Calendar className="w-3 h-3 text-bottle-green" />
             {exp.period}
          </div>
        </div>

        <ul className="space-y-4">
           {exp.description.map((item, i) => (
             <li key={i} className="flex items-start gap-4 text-slate-400 text-sm leading-relaxed group/li">
               <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-bottle-green group-hover/li:scale-150 transition-transform shadow-[0_0_8px_rgba(0,106,78,0.6)]" />
               <span className="group-hover/li:text-slate-200 transition-colors">{item}</span>
             </li>
           ))}
        </ul>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="py-32 px-8 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col mb-20 items-center text-center">
            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="w-16 h-1 bg-gradient-to-r from-transparent via-bottle-green to-transparent rounded-full mb-4" 
            />
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white">
                CRAFTING <span className="text-bottle-green italic font-light glow-text">EXCELLENCE</span>
            </h2>
            <p className="text-slate-500 mt-4 max-w-xl font-medium tracking-wide uppercase text-xs">
                A Journey through Operations & Customer Happiness Management
            </p>
        </div>

        <div className="grid grid-cols-1 gap-12 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} exp={exp} index={index} />
          ))}
        </div>

        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-20 text-center"
        >
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-slate-400 text-sm">
                <GraduationCap className="w-5 h-5 text-bottle-green" />
                <span>See full career history in my CV</span>
                <ChevronRight className="w-4 h-4" />
            </div>
        </motion.div>
      </div>

      {/* Decorative vertical line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/5 to-transparent -translate-x-1/2 -z-10" />
    </section>
  );
};

export default Experience;

