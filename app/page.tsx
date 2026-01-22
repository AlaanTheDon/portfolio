'use client';

import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code, Database, Terminal, ArrowRight, Cpu, MapPin, Server, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";

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
                For the past 5 years, I've run a high-volume e-commerce store, using <strong>Python</strong> and <strong>data engineering</strong> to outmaneuver competitors
              </p>
              <p>
                I have professional experience as a Full Stack Developer at <strong>Strategic Auto Group</strong>, where I designed and implemented a custom inventory management system that improved SEO and page load speeds.
                Additionally, I worked as a Quality Analyst at <strong>Genpact</strong>, ensuring data integrity and regulatory compliance on large-scale datasets.
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
                {['JavaScript', 'React', 'Next.js', 'Python', 'Java', 'SQL', 'Git', 'HTML/CSS', 'Tailwind', 'Palantir Foundry', 'MongoDB', 'C++', 'Typescript','REST', 'SDLC'].map((skill) => (
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
            
            {/* Role 1: Strategic Auto */}
            <div className="relative">
              <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-slate-950 bg-indigo-500"></span>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                <h3 className="text-xl font-bold text-slate-100">Strategic Auto Group</h3>
                <span className="text-sm font-mono text-indigo-400">2023 — Present</span>
              </div>
              <p className="text-slate-400 mb-4 font-medium">Full Stack Web Developer</p>
              <ul className="list-disc list-outside ml-4 text-slate-500 text-sm leading-relaxed max-w-2xl space-y-2 marker:text-indigo-500">
                <li>Engineered a custom inventory management system using JavaScript and CSS Flexbox. </li>
                <li>Replaced legacy manual tracking, optimizing SEO and page load speeds.</li>
                </ul>
            </div>

            {/* Role 2: Genpact */}
            <div className="relative">
              <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-slate-950 bg-sky-500"></span>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                <h3 className="text-xl font-bold text-slate-100">Genpact</h3>
                <span className="text-sm font-mono text-sky-400">2021 — 2022</span>
              </div>
              <p className="text-slate-400 mb-4 font-medium">Quality Analyst</p>
              <ul className="list-disc list-outside ml-4 text-slate-500 text-sm leading-relaxed max-w-2xl space-y-2 marker:text-sky-500/50">
                <li>Performed rigorous <strong>quality assurance</strong> and <strong>data validation</strong> on large-scale datasets to ensure accuracy and regulatory compliance.</li>
                <li>Collaborated with cross-functional teams using <strong>Git</strong> and <strong>Agile workflows</strong> to meet strict deadlines on NDA-protected projects.</li>
              </ul>
            </div>

            {/* Role 3: eBay */}
            <div className="relative">
              <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-slate-950 bg-slate-700"></span>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                <h3 className="text-xl font-bold text-slate-100">eBay Storefront</h3>
                <span className="text-sm font-mono text-slate-500">2019 — Present</span>
              </div>
              <p className="text-slate-400 mb-4 font-medium">Founder & Engineer</p>
                <ul className="list-disc list-outside ml-4 text-slate-500 text-sm leading-relaxed max-w-2xl space-y-2 marker:text-slate-700">
                  <li>Scaled operations for a high-volume storefront using Python scripts for sales tracking. </li>
                  <li>Built data pipelines in <strong>MongoDB</strong> to analyze pricing trends, significantly improving profit margins.</li>
                </ul>
            </div>
            
          </div>
        </section>

        {/* 4. PROJECTS */}
        <section className="mb-32">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <Server className="text-indigo-500" /> System Architecture
            </h2>
            <span className="text-xs font-mono text-slate-500 border border-slate-800 px-2 py-1 rounded">
              NON-VISUAL / BACKEND FOCUSED
            </span>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Project 1 - Fitness Tracker */}
            <div className="group bg-slate-900/50 border border-slate-800 p-8 rounded-2xl hover:border-indigo-500/50 transition-colors">
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-indigo-500/10 rounded-lg text-indigo-400">
                  <Database size={24} />
                </div>
                <div className="flex gap-2">
                   <span className="px-2 py-1 bg-slate-800 rounded text-[10px] text-slate-400 uppercase tracking-wider">CRUD</span>
                   <span className="px-2 py-1 bg-slate-800 rounded text-[10px] text-slate-400 uppercase tracking-wider">REST</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Personal Fitness Tracker</h3>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                A full-stack architecture for logging health metrics. 
                Focus was on database schema design and creating efficient API endpoints to handle historical data visualization.
              </p>
            </div>

            {/* Project 2 - Palantir */}
            <div className="group bg-slate-900/50 border border-slate-800 p-8 rounded-2xl hover:border-indigo-500/50 transition-colors">
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-purple-500/10 rounded-lg text-purple-400">
                  <Cpu size={24} />
                </div>
                 <div className="flex gap-2">
                   <span className="px-2 py-1 bg-slate-800 rounded text-[10px] text-slate-400 uppercase tracking-wider">Data Eng</span>
                   <span className="px-2 py-1 bg-slate-800 rounded text-[10px] text-slate-400 uppercase tracking-wider">SQL</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Foundry Data Pipeline</h3>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                Automated ETL pipelines in Palantir Foundry. 
                Processed raw client data into actionable dashboards, reducing decision latency by 40% for sales employees.
              </p>

            </div>
          </div>
        </section>

        <footer className="text-center text-slate-600 text-sm pb-8">
          <p>© {new Date().getFullYear()} Alaan Sharif. Built with Next.js & React Simple Maps.</p>
        </footer>
      </main>
    </div>
  );
}
