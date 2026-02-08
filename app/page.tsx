'use client';

import React from 'react';
import { Github, Linkedin, ExternalLink, ArrowRight, Cpu, MapPin, Server, Layers, Globe, Database, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";

// --- DATA CONFIG ---

const SKILLS = [
  'JavaScript', 'Python', 'Java', 'C++', 'C', 'SQL', 
  'React', 'Next.js', 'TypeScript', 'Tailwind CSS', 
  'Palantir Foundry', 'MongoDB', 'Git', 'RESTful APIs', 'SDLC'
];

const EXPERIENCE = [
  {
    company: "Strategic Auto Group",
    role: "Web Developer & Consultant",
    period: "Jan 2023 — May 2024",
    color: "bg-indigo-500",
    text: "text-indigo-400",
    description: [
      "Engineered a custom dealership web application using JavaScript, HTML, and CSS to automate vehicle browsing.",
      "Implemented responsive web design ensuring high-performance cross-device compatibility.",
      "Enhanced online visibility and lead generation through SEO optimization."
    ]
  },
  {
    company: "Genpact",
    role: "Quality Analyst",
    period: "Mar 2021 — Aug 2022",
    color: "bg-sky-500",
    text: "text-sky-400",
    description: [
      "Performed rigorous quality assurance and data validation on large-scale datasets.",
      "Collaborated with cross-functional teams using Git and Agile workflows to meet strict deadlines.",
      "Resolved critical data discrepancies, improving reliability for the client."
    ]
  },
  {
    company: "eBay Storefront",
    role: "E-commerce Business Owner",
    period: "Mar 2019 — Present",
    color: "bg-slate-700",
    text: "text-slate-500",
    description: [
      "Directed business operations for a high-volume storefront, sustaining 5 years of growth.",
      "Implemented pricing strategies with Python and Palantir Foundry to increase margins.",
      "Managed logistics and inventory audits using SQL queries."
    ]
  }
];

const PROJECTS = [
  {
    title: "Tasneem Events",
    link: "https://www.tasneemevents.com/",
    tags: ["Next.js 14", "TypeScript", "Tailwind"],
    icon: <Globe size={24} />,
    iconColor: "text-indigo-400",
    iconBg: "bg-indigo-500/10",
    description: "A high-performance commercial landing page achieving a 100/100 Lighthouse score. Features serverless lead generation using Web3Forms and advanced UI/UX with Framer Motion."
  },
  {
    title: "AI Slop Meter",
    link: "https://chromewebstore.google.com/detail/ai-slop-meter/mhjlleifaocopeongciebnkjpidaocai?pli=1",
    tags: ["Chrome Ext", "JavaScript", "Automation"],
    icon: <Layers size={24} />,
    iconColor: "text-emerald-400",
    iconBg: "bg-emerald-500/10",
    description: "A custom Chrome browser extension designed to analyze and filter content quality. Published to the Chrome Web Store to improve user browsing efficiency."
  },
  {
    title: "Personal Fitness Tracker",
    link: null, // No link provided yet
    tags: ["Full Stack", "CRUD", "REST"],
    icon: <Database size={24} />,
    iconColor: "text-rose-400",
    iconBg: "bg-rose-500/10",
    description: "Full-stack application to log workouts and metrics. Implemented full CRUD functionality and progress visualization tools, directly contributing to personal health goals."
  },
  {
    title: "CRM Application",
    link: null,
    tags: ["Palantir Foundry", "Data Eng", "SQL"],
    icon: <Cpu size={24} />,
    iconColor: "text-purple-400",
    iconBg: "bg-purple-500/10",
    description: "Automated data pipelines and interactive dashboards in Palantir Foundry. Improved decision-making efficiency by 40% through real-time data visualization."
  }
];

// --- ANIMATION CONFIG ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 50 } }
};

// --- MAP CONFIG ---
const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-indigo-500/30 overflow-x-hidden">
      
      {/* BACKGROUND GRID */}
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#4f46e5 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
      </div>

      <main className="relative z-10 max-w-5xl mx-auto px-6 py-24">
        
        {/* 1. HERO SECTION */}
        <motion.section 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="mb-32 flex flex-col justify-center min-h-[50vh]"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-6 w-fit">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            Based in Dallas, TX
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-white">
            <span className="bg-gradient-to-r from-white to-slate-500 bg-clip-text text-transparent">
              Alaan Sharif
            </span>
            <motion.span 
              className="inline-block ml-4 origin-bottom-right"
              animate={{ rotate: [0, 14, -8, 14, -4, 10, 0, 0] }}
              transition={{ 
                duration: 2.5, 
                ease: "easeInOut", 
                times: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 1],
                repeat: Infinity,
                repeatDelay: 1
              }}
            >
              👋
            </motion.span>
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-xl md:text-2xl text-slate-400 mb-8 max-w-2xl leading-relaxed">
            <span className="text-indigo-400 font-semibold">Software Engineer</span> and dedicated <span className="text-indigo-400 font-semibold"> problem solver</span>, focused on building scalable architecture.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
            <a 
              href="/resume.pdf" 
              download="Alaan_Sharif_Resume.pdf"
              className="px-6 py-3 bg-slate-200 text-slate-900 rounded-lg font-semibold hover:bg-white transition-all flex items-center gap-2"
            >
              <ExternalLink size={18} /> Download Resume
            </a>
            <a href="mailto:alaansharif6@gmail.com" className="px-6 py-3 bg-indigo-600 rounded-lg text-white font-semibold hover:bg-indigo-500 transition-all flex items-center gap-2 group">
              Contact Me <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform"/>
            </a>
            <div className="flex gap-2 ml-2">
                <a href="https://github.com/AlaanTheDon" target="_blank" className="p-3 bg-slate-900 rounded-lg hover:bg-indigo-600 hover:text-white transition-all border border-slate-800"><Github size={24} /></a>
                <a href="https://www.linkedin.com/in/alaan-sharif-63b84b104/" target="_blank" className="p-3 bg-slate-900 rounded-lg hover:bg-indigo-600 hover:text-white transition-all border border-slate-800"><Linkedin size={24} /></a>
            </div>
          </motion.div>
        </motion.section>

        {/* 2. ABOUT & LOCATION */}
        <section className="mb-32 grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <MapPin className="text-indigo-500" /> About Me
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                I am a Computer Science graduate (UT Dallas '24) who doesn't just write code—I build businesses. 
                For the past 5 years, I've run a high-volume e-commerce store, using <strong>Python</strong> and <strong>data engineering</strong> to outmaneuver competitors.
              </p>
              <p>
                I have professional experience as a Full Stack Developer at <strong>Strategic Auto Group</strong>, where I designed and implemented a custom inventory management system that improved SEO and page load speeds.
                Additionally, I worked as a Quality Analyst at <strong>Genpact</strong>, ensuring data integrity on large-scale datasets.
              </p>
              <p>
                While others focus on making buttons look pretty, I focus on what happens when you click them: 
                <span className="text-slate-200"> database efficiency, API latency, and data integrity.</span> All while keeping them pretty.
              </p>
            </div>

            {/* SKILLS PILLS */}
            <div className="mt-8">
              <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {SKILLS.map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-slate-800/50 border border-slate-700 text-slate-300 rounded-full text-xs font-mono hover:border-indigo-500/50 transition-colors cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* The Interactive Map */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-[400px] w-full bg-slate-900/50 rounded-2xl border border-slate-800 p-4 shadow-2xl overflow-hidden"
          >
            <div className="absolute top-4 left-4 z-10 bg-slate-950/80 backdrop-blur px-3 py-1 rounded border border-slate-800 text-xs text-indigo-400 font-mono">
              📍 Current Status: Open to Relocate
            </div>
            
            <ComposableMap projection="geoAlbersUsa">
              <Geographies geography={geoUrl}>
                {({ geographies }) =>
                  geographies.map((geo) => {
                    const isTexas = geo.properties.name === "Texas";
                    return (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        fill={isTexas ? "#4f46e5" : "#1e293b"} // Indigo for TX, Slate for others
                        stroke="#0f172a"
                        style={{
                          default: { outline: "none" },
                          hover: { fill: isTexas ? "#4338ca" : "#334155", outline: "none" },
                          pressed: { outline: "none" },
                        }}
                      />
                    );
                  })
                }
              </Geographies>
              <Marker coordinates={[-96.7970, 32.7767]}> {/* Dallas Coordinates */}
                <circle r={8} fill="#818cf8" stroke="#fff" strokeWidth={2} />
                <text textAnchor="middle" y={-15} style={{ fontFamily: "system-ui", fill: "white", fontSize: "12px", fontWeight: "bold" }}>
                  Dallas
                </text>
              </Marker>
            </ComposableMap>
          </motion.div>
        </section>

        {/* 3. EXPERIENCE SECTION */}
        <section className="mb-32">
          <h2 className="text-2xl font-bold text-white mb-12 flex items-center gap-3">
            <Terminal className="text-indigo-500" /> Professional History
          </h2>
          
          <div className="space-y-8 relative border-l border-slate-800 ml-3 pl-8">
            {EXPERIENCE.map((job, index) => (
              <div key={index} className="relative">
                <span className={`absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-slate-950 ${job.color}`}></span>
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                  <h3 className="text-xl font-bold text-slate-100">{job.company}</h3>
                  <span className={`text-sm font-mono ${job.text}`}>{job.period}</span>
                </div>
                <p className="text-slate-400 mb-4 font-medium">{job.role}</p>
                <ul className="list-disc list-outside ml-4 text-slate-500 text-sm leading-relaxed max-w-2xl space-y-2 marker:text-slate-600">
                  {job.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* 4. PROJECTS */}
        <section className="mb-32">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <Server className="text-indigo-500" /> Projects
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {PROJECTS.map((project, index) => (
               <div key={index} className="group bg-slate-900/50 border border-slate-800 p-8 rounded-2xl hover:border-indigo-500/50 transition-colors flex flex-col h-full relative">
                 {/* Clickable Overlay if Link Exists */}
                 {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-10" aria-label={`View ${project.title}`}></a>
                 )}

                 <div className="flex justify-between items-start mb-6">
                   <div className={`p-3 rounded-lg ${project.iconBg} ${project.iconColor}`}>
                     {project.icon}
                   </div>
                   <div className="flex flex-col items-end gap-2">
                      {project.link && (
                        <ExternalLink size={16} className="text-slate-500 group-hover:text-indigo-400 transition-colors mb-1" />
                      )}
                      <div className="flex gap-2 flex-wrap justify-end">
                        {project.tags.map(tag => (
                          <span key={tag} className="px-2 py-1 bg-slate-800 rounded text-[10px] text-slate-400 uppercase tracking-wider">{tag}</span>
                        ))}
                      </div>
                   </div>
                 </div>
                 
                 <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors flex items-center gap-2">
                    {project.title}
                 </h3>
                 
                 <p className="text-slate-400 text-sm leading-relaxed">
                   {project.description}
                 </p>
               </div>
            ))}
          </div>
        </section>

        <footer className="text-center text-slate-600 text-sm pb-8">
          <p>© {new Date().getFullYear()} Alaan Sharif. Built with Next.js & React Simple Maps.</p>
        </footer>
      </main>
    </div>
  );
}
