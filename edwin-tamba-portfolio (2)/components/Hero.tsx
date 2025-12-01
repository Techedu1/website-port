import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { RESUME_DATA } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="min-h-[85vh] flex items-center justify-center py-20 relative border-b border-slate-800 bg-slate-950/50 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary-500/20 blur-[120px] rounded-full -z-10 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 w-full text-center relative z-10">
        
        <div className="space-y-8 flex flex-col items-center">
          
          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-tight">
            Building the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-cyan-400 to-primary-400 animate-gradient bg-300%">
              Intelligent Future
            </span>
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Hi, I'm <strong className="text-white">{RESUME_DATA.name}</strong>. 
            I bridge the gap between robust IT Infrastructure and advanced AI Automation.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <a 
              href="https://www.linkedin.com/in/edwin-murungatech/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-4 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-500 transition-all flex items-center gap-2 shadow-lg shadow-primary-900/40 hover:-translate-y-1"
            >
              Connect on LinkedIn
              <ArrowRight size={20} />
            </a>
            <button 
              onClick={() => window.print()}
              className="px-8 py-4 bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800 transition-all flex items-center gap-2 border border-slate-800 hover:border-slate-700 hover:-translate-y-1"
            >
              <Download size={20} />
              Download CV
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;