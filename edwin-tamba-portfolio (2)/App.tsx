import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Chatbot from './components/Chatbot';
import { Github, Linkedin, Mail, Terminal } from 'lucide-react';
import { RESUME_DATA } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen relative flex flex-col">
      {/* Navigation */}
      <nav className="sticky top-0 w-full bg-slate-950/90 border-b border-slate-800 z-50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 text-primary-400">
            <Terminal size={20} />
            <span className="font-mono font-bold tracking-tight text-white">
              Edwin.Tamba<span className="text-primary-500">_</span>
            </span>
          </div>
          
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
            {['About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`} 
                className="hover:text-white transition-colors hover:border-b hover:border-primary-500 py-1"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <main className="flex-grow">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
      </main>

      <footer id="contact" className="bg-slate-950 border-t border-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">Let's Connect</h2>
              <p className="text-slate-400 mb-6">
                Open to opportunities in IT Support, Infrastructure, and AI Automation.
              </p>
              
              <div className="space-y-2 text-slate-400 font-mono text-sm">
                <p className="flex items-center gap-2"><span className="text-primary-500">📍</span> {RESUME_DATA.location}</p>
                <p className="flex items-center gap-2"><span className="text-primary-500">📧</span> {RESUME_DATA.email}</p>
                <p className="flex items-center gap-2"><span className="text-primary-500">📱</span> {RESUME_DATA.phone}</p>
              </div>
            </div>
            
            <div className="flex flex-col items-start md:items-end gap-6">
              <div className="flex gap-4">
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-3 bg-slate-900 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-all border border-slate-800"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/edwin-murungatech/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-3 bg-slate-900 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-all border border-slate-800"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href={`mailto:${RESUME_DATA.email}`} 
                  className="p-3 bg-slate-900 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-all border border-slate-800"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
              </div>
              <p className="text-xs text-slate-500">
                &copy; {new Date().getFullYear()} Edwin Murunga Tamba. Built with React & Tailwind.
              </p>
            </div>
          </div>
        </div>
      </footer>

      <Chatbot />
    </div>
  );
};

export default App;