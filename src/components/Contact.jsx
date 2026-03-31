import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-8 bg-white/[0.02] border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-6">
                <div className="w-8 h-1 bg-bottle-green rounded-full" />
                <h2 className="text-3xl font-bold tracking-tight">Get In <span className="text-bottle-green">Touch</span></h2>
            </div>
            
            <p className="text-lg text-slate-400 mb-10 max-w-md font-light leading-relaxed">
              Looking for a results-driven customer service leader or want to discuss a potential partnership? I'm always open to new opportunities.
            </p>

            <div className="space-y-6">
               <a href="mailto:nenidedan@gmail.com" className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center transition-all group-hover:border-bottle-green/50 group-hover:bg-bottle-green/10">
                     <Mail className="w-6 h-6 text-bottle-green" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Email</h4>
                    <span className="text-slate-300 font-medium">nenidedan@gmail.com</span>
                  </div>
               </a>

               <a href="tel:0724627842" className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center transition-all group-hover:border-bottle-green/50 group-hover:bg-bottle-green/10">
                     <Phone className="w-6 h-6 text-bottle-green" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Phone</h4>
                    <span className="text-slate-300 font-medium">0724 627 842</span>
                  </div>
               </a>

               {/* LinkedIn removed as per user request */}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card !bg-white/[0.03] p-10 border-white/5"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-400">Name</label>
                  <input type="text" className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-bottle-green/50 focus:ring-1 focus:ring-bottle-green/30 outline-none transition-all" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-400">Email</label>
                  <input type="email" className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-bottle-green/50 focus:ring-1 focus:ring-bottle-green/30 outline-none transition-all" placeholder="john@example.com" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-400">Subject</label>
                <input type="text" className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-bottle-green/50 focus:ring-1 focus:ring-bottle-green/30 outline-none transition-all" placeholder="Collaboration Inquiry" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-400">Message</label>
                <textarea className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-bottle-green/50 focus:ring-1 focus:ring-bottle-green/30 outline-none transition-all min-h-[150px]" placeholder="Hello Dedan, I'd like to talk about..." />
              </div>

              <button type="submit" className="w-full btn-primary flex items-center justify-center gap-2 group py-4">
                 Send Message
                 <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
