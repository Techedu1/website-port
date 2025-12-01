import React from 'react';
import { RESUME_DATA } from '../constants';
import { Terminal, Server, Cpu, Code2 } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-950 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          <div className="flex flex-col h-full">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-primary-500">01.</span> About Me
            </h2>
            <div className="prose prose-invert prose-lg text-slate-400 mb-8">
              <p>{RESUME_DATA.about}</p>
            </div>

            {/* Creative System Configuration Profile */}
            <div className="mt-auto border-t border-slate-800 pt-8">
              <h3 className="text-white font-bold mb-6 flex items-center gap-2">
                <Code2 size={18} className="text-primary-500" />
                Operator Configuration
              </h3>
              
              <div className="bg-slate-900 rounded-lg border border-slate-800 shadow-xl overflow-hidden">
                 {/* Terminal Window Header */}
                 <div className="flex gap-1.5 p-3 border-b border-slate-800 bg-slate-850 items-center">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                    <span className="ml-3 text-xs text-slate-500 font-mono">user_profile.config.ts — Read Only</span>
                 </div>
                 
                 {/* Code Content */}
                 <div className="p-5 overflow-x-auto">
                    <pre className="font-mono text-sm leading-relaxed">
                        <code>
                            <span className="text-purple-400">const</span> <span className="text-blue-400">System_Operator</span> <span className="text-slate-300">=</span> <span className="text-slate-300">{`{`}</span><br/>
                            <br/>
                            <span className="text-slate-500 pl-4">// Identity Attributes</span><br/>
                            <span className="pl-4 text-cyan-300">operator_name</span>: <span className="text-green-400">"{RESUME_DATA.name}"</span>,<br/>
                            <span className="pl-4 text-cyan-300">current_role</span>: <span className="text-green-400">"{RESUME_DATA.title}"</span>,<br/>
                            <br/>
                            <span className="text-slate-500 pl-4">// Communication Uplinks</span><br/>
                            <span className="pl-4 text-cyan-300">base_coordinates</span>: <span className="text-green-400">"{RESUME_DATA.location}"</span>,<br/>
                            <span className="pl-4 text-cyan-300">email_protocol</span>: <span className="text-green-400">"{RESUME_DATA.email}"</span>,<br/>
                            <span className="pl-4 text-cyan-300">voice_channel</span>: <span className="text-green-400">"{RESUME_DATA.phone}"</span>,<br/>
                            <br/>
                            <span className="text-slate-500 pl-4">// Language Modules</span><br/>
                            <span className="pl-4 text-cyan-300">installed_packs</span>: <span className="text-yellow-300">[{RESUME_DATA.languages.map(l => `"${l}"`).join(", ")}]</span>,<br/>
                            <br/>
                            <span className="pl-4 text-cyan-300">system_status</span>: <span className="text-primary-400">"ONLINE_AND_AVAILABLE"</span><br/>
                            <span className="text-slate-300">{`}`}</span>;
                        </code>
                    </pre>
                 </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-full">
            <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 hover:border-primary-500/50 transition-colors">
              <Server className="text-primary-400 mb-4" size={32} />
              <h3 className="text-white font-semibold mb-2">Infrastructure</h3>
              <p className="text-sm text-slate-400">Robust Network Architecture & Cloud Systems</p>
            </div>
            <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 hover:border-primary-500/50 transition-colors">
              <Cpu className="text-primary-400 mb-4" size={32} />
              <h3 className="text-white font-semibold mb-2">Automation</h3>
              <p className="text-sm text-slate-400">AI-driven Workflows & Data Processing</p>
            </div>
            <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 hover:border-primary-500/50 transition-colors sm:col-span-2">
              <Terminal className="text-primary-400 mb-4" size={32} />
              <h3 className="text-white font-semibold mb-2">Technical Support</h3>
              <p className="text-sm text-slate-400">Tier 1-3 Support, ITIL Compliance & High Uptime Standards</p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default About;