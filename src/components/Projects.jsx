import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ExternalLink, Code2, Heart, Lightbulb, ArrowUpRight, Github } from 'lucide-react';

const projects = [
  {
    title: "Nungari Proposal",
    category: "Interactive Experience",
    description: "A heartbeat-synced interactive proposal application. Designed with bespoke medical-themed aesthetics and state-driven emotional storytelling.",
    tech: ["React", "Framer Motion", "Tailwind"],
    icon: <Heart className="w-6 h-6 text-pink-500" />,
    color: "from-pink-500/40 via-rose-500/20 to-transparent",
    glow: "shadow-pink-500/20"
  },
  {
    title: "Generation Kenya",
    category: "EdTech Interface",
    description: "An immersive reflection platform for learners. Features include real-time mood mapping and interactive feedback visualization.",
    tech: ["Vite", "JavaScript", "CSS3"],
    icon: <Lightbulb className="w-6 h-6 text-amber-500" />,
    color: "from-amber-500/40 via-orange-500/20 to-transparent",
    glow: "shadow-amber-500/20"
  }
];

const ProjectCard = ({ project, index }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
  
    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);
  
    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);
  
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
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="group relative h-full"
        >
            <div className={`absolute -inset-1 bg-gradient-to-br ${project.color} rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10`} />
            
            <div 
                style={{ transform: "translateZ(75px)" }}
                className={`glass-card h-full flex flex-col p-8 border-white/5 group-hover:border-white/20 transition-all duration-500 ${project.glow}`}
            >
                <div className="flex items-start justify-between mb-8">
                    <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 group-hover:scale-110 transition-all duration-500">
                        {project.icon}
                    </div>
                    <div className="flex gap-2 flex-wrap justify-end max-w-[150px]">
                        {project.tech.map((t, i) => (
                            <span key={i} className="text-[10px] font-black uppercase tracking-widest px-2.5 py-1 bg-white/5 rounded-lg text-slate-400 border border-white/5">
                                {t}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="mb-2">
                    <span className="text-[10px] font-bold text-bottle-green tracking-[0.3em] uppercase block mb-1">
                        {project.category}
                    </span>
                    <h3 className="text-3xl font-black text-white tracking-tight group-hover:text-bottle-green transition-colors">
                        {project.title}
                    </h3>
                </div>

                <p className="text-slate-400 leading-relaxed mb-10 text-sm font-medium">
                    {project.description}
                </p>

                <div className="mt-auto flex items-center gap-6">
                    <motion.button 
                        whileHover={{ x: 5 }}
                        className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-white group/link"
                    >
                        <span className="group-hover/link:text-bottle-green transition-colors">Details</span>
                        <ArrowUpRight className="w-4 h-4 text-bottle-green" />
                    </motion.button>
                    
                    <a href="#" className="p-2 rounded-full border border-white/5 hover:border-bottle-green/50 hover:bg-bottle-green/5 transition-all">
                        <Github className="w-4 h-4 text-slate-500 hover:text-white" />
                    </a>
                </div>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    return (
        <section id="projects" className="py-32 px-8 relative overflow-hidden bg-slate-950/20">
            <div className="max-w-6xl mx-auto relative z-10">
                <div className="flex flex-col mb-20 items-center md:items-start">
                    <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: 64 }}
                        className="h-1 bg-bottle-green rounded-full mb-6" 
                    />
                    <h2 className="text-4xl md:text-7xl font-black tracking-tighter text-white">
                        FEATURED <span className="text-bottle-green italic font-light glow-text">WORK</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>

            {/* Background decorative text */}
            <div className="absolute top-20 -right-20 text-[15rem] font-black text-white/[0.02] select-none pointer-events-none rotate-12">
                PROJECTS
            </div>
        </section>
    );
};

export default Projects;

