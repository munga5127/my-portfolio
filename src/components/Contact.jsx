import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Send, MessageSquare, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-32 px-8 relative overflow-hidden bg-slate-950/40">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <div className="flex flex-col mb-10">
                <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: 48 }}
                    className="h-1 bg-bottle-green rounded-full mb-6" 
                />
                <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white leading-tight">
                    LET'S <span className="text-bottle-green italic font-light glow-text">CONNECT</span>
                </h2>
                <p className="text-slate-400 mt-8 text-xl font-light leading-relaxed max-w-md">
                    Ready to elevate your customer operations? Let's discuss how we can drive <span className="text-white font-medium">real impact</span> together.
                </p>
            </div>
            
            <div className="space-y-8">
               <motion.div whileHover={{ x: 10 }} className="flex items-center gap-6 group">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center transition-all group-hover:border-bottle-green/50 group-hover:bg-bottle-green/10 shadow-lg">
                     <Mail className="w-6 h-6 text-bottle-green" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] mb-1">Direct Email</h4>
                    <span className="text-white font-black tracking-tight text-lg group-hover:text-bottle-green transition-colors">nenidedan@gmail.com</span>
                  </div>
               </motion.div>

               <motion.div whileHover={{ x: 10 }} className="flex items-center gap-6 group">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center transition-all group-hover:border-bottle-green/50 group-hover:bg-bottle-green/10 shadow-lg">
                     <Phone className="w-6 h-6 text-bottle-green" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] mb-1">Mobile</h4>
                    <span className="text-white font-black tracking-tight text-lg group-hover:text-bottle-green transition-colors">0724 627 842</span>
                  </div>
               </motion.div>

               <motion.div whileHover={{ x: 10 }} className="flex items-center gap-6 group">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center transition-all group-hover:border-bottle-green/50 group-hover:bg-bottle-green/10 shadow-lg">
                     <MapPin className="w-6 h-6 text-bottle-green" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] mb-1">Locality</h4>
                    <span className="text-white font-black tracking-tight text-lg group-hover:text-bottle-green transition-colors">Nairobi, Kenya</span>
                  </div>
               </motion.div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card !bg-white/[0.02] p-10 md:p-12 border-white/10 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-bottle-green to-transparent opacity-50" />
            
            <form className="space-y-8 relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <MessageSquare className="w-5 h-5 text-bottle-green" />
                <h3 className="text-sm font-black uppercase tracking-[0.2em] text-slate-300">Quick Message</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Your Name</label>
                  <input type="text" className="w-full px-5 py-4 bg-white/[0.03] border border-white/10 rounded-2xl focus:border-bottle-green/50 focus:ring-4 focus:ring-bottle-green/5 outline-none transition-all placeholder:text-slate-700 text-white font-medium" placeholder="E.g. John Doe" />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Email Address</label>
                  <input type="email" className="w-full px-5 py-4 bg-white/[0.03] border border-white/10 rounded-2xl focus:border-bottle-green/50 focus:ring-4 focus:ring-bottle-green/5 outline-none transition-all placeholder:text-slate-700 text-white font-medium" placeholder="john@company.com" />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Your Message</label>
                <textarea className="w-full px-5 py-4 bg-white/[0.03] border border-white/10 rounded-2xl focus:border-bottle-green/50 focus:ring-4 focus:ring-bottle-green/5 outline-none transition-all min-h-[160px] placeholder:text-slate-700 text-white font-medium resize-none" placeholder="How can I help you today?" />
              </div>

              <button type="submit" className="w-full btn-primary flex items-center justify-center gap-3 group py-5 text-lg font-black tracking-tight">
                 SEND INQUIRY
                 <Send className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative background text */}
      <div className="absolute -bottom-10 left-10 text-[10rem] font-black text-white/[0.01] select-none pointer-events-none -rotate-6">
        CONTACT
      </div>
    </section>
  );
};

export default Contact;

