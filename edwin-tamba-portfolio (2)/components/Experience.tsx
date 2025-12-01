import React from 'react';
import { RESUME_DATA } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-slate-950 scroll-mt-16 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-3">
          <span className="text-primary-500">02.</span> Experience
        </h2>

        <div className="relative border-l border-slate-800 ml-3 md:ml-6 space-y-12">
          {RESUME_DATA.experiences.map((exp) => (
            <div key={exp.id} className="relative pl-8 md:pl-12">
              {/* Timeline Dot */}
              <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-primary-500 ring-4 ring-slate-950"></div>
              
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                <span className="font-mono text-sm text-primary-400 bg-primary-500/10 px-3 py-1 rounded-full w-fit mt-2 sm:mt-0">
                  {exp.period}
                </span>
              </div>
              
              <div className="text-lg text-slate-300 font-medium mb-4 flex items-center gap-2">
                <span className="text-primary-500">@</span> {exp.company}
                <span className="text-slate-600 text-sm">• {exp.location}</span>
              </div>
              
              <ul className="space-y-3">
                {exp.description.map((item, i) => (
                  <li key={i} className="text-slate-400 flex items-start gap-3 text-sm leading-relaxed">
                    <span className="text-primary-500 mt-1.5">▹</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;