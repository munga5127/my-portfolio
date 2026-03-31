import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, User, Award, Globe } from 'lucide-react';
import aboutImg from '../assets/about.jpg';

const About = () => {
  return (
    <section id="about" className="py-24 px-8 bg-white/[0.02] border-y border-white/5">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="relative aspect-square max-w-md mx-auto"
        >
           <div className="absolute inset-4 rounded-2xl border border-bottle-green/20 -z-10 translate-x-4 translate-y-4" />
           <div className="w-full h-full rounded-2xl bg-slate-900 border border-white/10 overflow-hidden relative shadow-2xl">
              <img src={aboutImg} alt="About Me" className="w-full h-full object-cover" />
           </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-1 bg-bottle-green rounded-full" />
              <h2 className="text-3xl font-bold tracking-tight">About <span className="text-bottle-green">Me</span></h2>
          </div>

          <p className="text-lg text-slate-300 mb-8 leading-relaxed font-light">
            Dynamic and results-oriented customer service and operations leader with <span className="text-white font-medium">6+ years of experience</span>. Managing high-performing teams across East Africa and collaborating with global teams in fully remote environments.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-bottle-green/10 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5 text-bottle-green" />
              </div>
              <div>
                <h4 className="font-bold text-white mb-1">Operations leader</h4>
                <p className="text-xs text-slate-400">Proven ability to lead large-scale operations across multiple countries.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-bottle-green/10 flex items-center justify-center shrink-0">
                <Award className="w-5 h-5 text-bottle-green" />
              </div>
              <div>
                <h4 className="font-bold text-white mb-1">LLB Degree</h4>
                <p className="text-xs text-slate-400">Catholic University of Eastern Africa & Presbyterian University of East Africa.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-bottle-green/10 flex items-center justify-center shrink-0">
                <Globe className="w-5 h-5 text-bottle-green" />
              </div>
              <div>
                <h4 className="font-bold text-white mb-1">Remote Veteran</h4>
                <p className="text-xs text-slate-400">Expert in virtual work environments & global team collaboration.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-bottle-green/10 flex items-center justify-center shrink-0">
                <User className="w-5 h-5 text-bottle-green" />
              </div>
              <div>
                <h4 className="font-bold text-white mb-1">Volunteer & Alumni</h4>
                <p className="text-xs text-slate-400">HIV/AIDS awareness, Mental Health advocacy, and Generation Kenya Alumni.</p>
              </div>
            </div>
          </div>

          <div className="p-6 bg-bottle-green/5 border border-bottle-green/10 rounded-2xl">
            <p className="text-sm text-slate-400 italic leading-relaxed">
              "My goal is to contribute to a forward-thinking organization by enhancing customer satisfaction, streamlining processes, and delivering exceptional experiences that support sustainable growth."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
