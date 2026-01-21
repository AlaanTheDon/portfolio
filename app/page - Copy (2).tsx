'use client'; // This is required for animations to work

import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code, Database, Terminal, ArrowRight, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';

// Animation variants to keep code clean
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: { type: "spring", stiffness: 50 }
  }
};

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-indigo-500/30">
      
      {/* BACKGROUND GRID EFFECT */}
      <div className="fixed inset-0 z-0 opacity-20" 
           style={{ backgroundImage: 'radial-gradient(#4f46e5 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
      </div>

      <main className="relative z-10 max-w-4xl mx-auto px-6 py-24">
        
        {/* HERO SECTION */}
        <motion.section 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="mb-32 flex flex-col justify-center min-h-[60vh]"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-6 w-fit">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            Open to Work
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-r from-white to-slate-500 bg-clip-text text-transparent">
            Alaan Sharif
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-xl md:text-2xl text-slate-400 mb-8 max-w-2xl leading-relaxed">
            I bridge the gap between <span className="text-indigo-400 font-semibold">complex data</span> and <span className="text-indigo-400 font-semibold">user experience</span>.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex gap-4">
            <a href="https://github.com/YOUR_GITHUB" target="_blank" className="p-3 bg-slate-900 rounded-lg hover:bg-indigo-600 hover:text-white transition-all duration-300 border border-slate-800">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/YOUR_LINKEDIN" target="_blank" className="p-3 bg-slate-900 rounded-lg hover:bg-indigo-600 hover:text-white transition-all duration-300 border border-slate-800">
              <Linkedin size={24} />
            </a>
            <a href="mailto:alaansharif6@gmail.com" className="px-6 py-3 bg-indigo-600 rounded-lg text-white font-semibold hover:bg-indigo-500 transition-all flex items-center gap-2 group">
              Contact Me <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform"/>
            </a>
          </motion.div>
        </motion.section>

        {/* PROJECTS SECTION (Grid Layout) */}
        <section className="mb-32">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-white mb-12 flex items-center gap-3"
          >
            <Cpu className="text-indigo-500" /> Featured Projects
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Project 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group relative bg-slate-900/50 border border-slate-800 rounded-2xl p-8 hover:border-indigo-500/50 transition-colors overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-slate-800 rounded-lg text-indigo-400">
                    <Code size={24} />
                  </div>
                  <ExternalLink size={20} className="text-slate-500 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors">Personal Fitness Tracker</h3>
                <p className="text-slate-400 mb-6 leading-relaxed">
                  A full-stack application visualizing health metrics. Replaced manual logging with a responsive dashboard that tracks caloric intake and workout progress over time.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-slate-800 rounded-full text-xs text-indigo-300 font-mono">JavaScript</span>
                  <span className="px-3 py-1 bg-slate-800 rounded-full text-xs text-indigo-300 font-mono">React</span>
                  <span className="px-3 py-1 bg-slate-800 rounded-full text-xs text-indigo-300 font-mono">Tailwind</span>
                </div>
              </div>
            </motion.div>

            {/* Project 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative bg-slate-900/50 border border-slate-800 rounded-2xl p-8 hover:border-indigo-500/50 transition-colors overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-slate-800 rounded-lg text-purple-400">
                    <Database size={24} />
                  </div>
                  <ExternalLink size={20} className="text-slate-500 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">Data Viz Dashboard</h3>
                <p className="text-slate-400 mb-6 leading-relaxed">
                  Automated data pipeline using Palantir Foundry. Designed interactive dashboards that reduced decision-making time by 40% through real-time visualization.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-slate-800 rounded-full text-xs text-purple-300 font-mono">Palantir</span>
                  <span className="px-3 py-1 bg-slate-800 rounded-full text-xs text-purple-300 font-mono">SQL</span>
                  <span className="px-3 py-1 bg-slate-800 rounded-full text-xs text-purple-300 font-mono">Python</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section className="mb-32">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-white mb-12 flex items-center gap-3"
          >
            <Terminal className="text-indigo-500" /> Professional History
          </motion.h2>
          
          <div className="space-y-8 relative border-l border-slate-800 ml-3 pl-8">
            {/* Role 1 */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-slate-950 bg-indigo-500"></span>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                <h3 className="text-xl font-bold text-slate-100">Strategic Auto Group</h3>
                <span className="text-sm font-mono text-indigo-400">2023 — Present</span>
              </div>
              <p className="text-slate-400 mb-4 font-medium">Full Stack Web Developer</p>
              <p className="text-slate-500 text-sm leading-relaxed max-w-2xl">
                Engineered a custom inventory management system using JavaScript and CSS Flexbox. 
                Replaced legacy manual tracking, optimizing SEO and page load speeds which directly improved lead generation capabilities.
              </p>
            </motion.div>

            {/* Role 2 */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative"
            >
              <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-slate-950 bg-slate-700"></span>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                <h3 className="text-xl font-bold text-slate-100">eBay Storefront</h3>
                <span className="text-sm font-mono text-slate-500">2019 — Present</span>
              </div>
              <p className="text-slate-400 mb-4 font-medium">Founder & Engineer</p>
              <p className="text-slate-500 text-sm leading-relaxed max-w-2xl">
                Scaled operations for a high-volume storefront using Python scripts for sales tracking. 
                Leveraged Palantir Foundry logic to analyze market trends, maintaining a 99% positive rating over 5 years.
              </p>
            </motion.div>
          </div>
        </section>

        <footer className="text-center text-slate-600 text-sm pb-8">
          <p>© {new Date().getFullYear()} Alaan Sharif. Designed in Wylie, TX.</p>
        </footer>
      </main>
    </div>
  );
}