import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code2, Heart, Lightbulb } from 'lucide-react';

const projects = [
  {
    title: "Nungari Proposal",
    category: "Interactive Web App",
    description: "A heartfelt, interactive proposal application featuring dynamic state-based transitions, background music, and a custom medical-themed design.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    icon: <Heart className="w-6 h-6 text-pink-500" />,
    color: "from-pink-500/20 to-rose-500/20"
  },
  {
    title: "Generation Kenya Reflections",
    category: "EdTech Interface",
    description: "An immersive learning reflection journey built for the Generation Kenya community, featuring interactive mood filters and personalized feedback loops.",
    tech: ["HTML5", "Tailwind CSS", "JavaScript"],
    icon: <Lightbulb className="w-6 h-6 text-amber-500" />,
    color: "from-amber-500/20 to-orange-500/20"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-8 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <div className="w-12 h-1 bg-bottle-green rounded-full" />
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Featured <span className="text-bottle-green font-light italic">Projects</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`} />
              
              <div className="glass-card h-full p-8 group-hover:border-white/10 transition-all border-white/5 bg-slate-900/80">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                    {project.icon}
                  </div>
                  <div className="flex gap-2">
                    {project.tech.map((t, i) => (
                      <span key={i} className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 bg-white/5 rounded-md text-slate-400 border border-white/5">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-sm text-bottle-green font-medium mb-4 uppercase tracking-wider">{project.category}</p>
                <p className="text-slate-400 leading-relaxed mb-8">
                  {project.description}
                </p>

                <div className="flex items-center gap-4">
                  <button className="flex items-center gap-2 text-sm font-bold text-white group/btn">
                    <Code2 className="w-4 h-4 text-bottle-green" />
                    <span>View Details</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
