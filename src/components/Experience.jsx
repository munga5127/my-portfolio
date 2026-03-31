import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';

const experiences = [
  {
    company: "Ready Works",
    role: "Customer Happiness Manager (Remote)",
    period: "Oct 2024 — Ongoing",
    description: [
      "Resolved customer inquiries and technical issues with a 95%+ satisfaction rating.",
      "Successfully onboarded 50+ enterprise clients, cutting implementation timelines by 30%.",
      "Automated IT and operational workflows, resulting in a 25% improvement in efficiency.",
      "Tracked customer usage metrics to increase platform utilization by 35%."
    ]
  },
  {
    company: "Optica Africa",
    role: "Head of Customer Service (Kenya, Uganda & Rwanda)",
    period: "Mar 2024 — Aug 2024",
    description: [
      "Developed and implemented operational strategies for high-performing teams.",
      "Mitigated operational risks across multi-national offices (Kenya, Uganda, Rwanda).",
      "Streamlined processes to increase efficiency and productivity across the region."
    ]
  },
  {
    company: "CCI Kenya Limited",
    role: "Operations Manager (Shutterfly Campaign)",
    period: "Nov 2023 — Mar 2024",
    description: [
      "Coached team leaders on performance improvement via statistical analysis.",
      "Liaised with international clients on script updates and product changes.",
      "Implemented methods to enhance team efficiency and service delivery."
    ]
  },
  {
    company: "CCI Kenya Limited",
    role: "Team Manager / Team Lead Manager",
    period: "July 2022 — Nov 2023",
    description: [
      "Managed 25 agents' welfare and acted as primary POC for campaign operations.",
      "Conducted weekly (WBR) and monthly (MBR) business reviews with global clients.",
      "Created performance trackers for lateness, attrition, and process health indicators (PHI)."
    ]
  },
  {
    company: "CCI Kenya Limited",
    role: "Call Center Agent (Team Captain & Flow support)",
    period: "Nov 2021 — June 2022",
    description: [
        "Provided quality customer assistance via calls and chats.",
        "Supported agents on the floor with product knowledge and flow support.",
        "Coached new hires and enforced attendance/time management."
    ]
  },
  {
    company: "Expended Data Networks LTD",
    role: "IT Technician",
    period: "Sept 2017 — Sept 2020",
    description: [
        "Consulted clients on after-sales services and conducted site inspections.",
        "Provided technical solutions and managed project completion timelines.",
        "Led project walkthroughs with clients to assess work quality and address concerns."
    ]
  },
  {
    company: "Clear Kenya International (Mombasa)",
    role: "In-House Paralegal",
    period: "April 2012 — Sept 2012",
    description: [
        "Drafted legal documents (plaints, affidavits) and handled court registry filings.",
        "Managed mediation and arbitration for out-of-court settlements.",
        "Provided civic education and legal aid to communities and inmates at Shimo La Tewa prison."
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-8 max-w-6xl mx-auto">
      <div className="flex items-center gap-4 mb-16 px-4">
          <div className="w-12 h-1 bg-bottle-green rounded-full" />
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Professional <span className="text-bottle-green font-light italic">Experience</span></h2>
      </div>

      <div className="relative border-l border-white/5 ml-4 pl-8 space-y-16">
        {experiences.map((exp, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-[41px] top-2 w-4 h-4 rounded-full bg-bottle-green border-4 border-slate-950 shadow-[0_0_15px_rgba(0,106,78,0.5)]" />
            
            <div className="glass-card hover:border-bottle-green/30">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                  <div className="flex items-center gap-3 text-bottle-green font-medium">
                    <Briefcase className="w-4 h-4" />
                    <span>{exp.company}</span>
                  </div>
                </div>
                
                <div className="flex flex-col items-start md:items-end gap-1 px-4 py-2 bg-white/5 rounded-xl text-slate-400 text-sm">
                   <div className="flex items-center gap-2">
                       <Calendar className="w-3.5 h-3.5" />
                       {exp.period}
                   </div>
                </div>
              </div>

              <ul className="space-y-4">
                 {exp.description.map((item, i) => (
                   <li key={i} className="flex items-start gap-3 text-slate-400 text-sm leading-relaxed">
                     <ChevronRight className="w-4 h-4 text-bottle-green shrink-0 mt-0.5" />
                     {item}
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

export default Experience;
