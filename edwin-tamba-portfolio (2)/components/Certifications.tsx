import React from 'react';
import { RESUME_DATA } from '../constants';
import { Award, GraduationCap } from 'lucide-react';

const Certifications: React.FC = () => {
  return (
    <section className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid md:grid-cols-2 gap-12">
           {/* Education Column */}
           <div>
              <div className="flex items-center gap-3 mb-8">
                 <GraduationCap className="text-primary-500" size={24} />
                 <h2 className="text-2xl font-bold text-white">Education</h2>
              </div>
              
              <div className="space-y-6">
                 {RESUME_DATA.education.map((edu) => (
                    <div key={edu.id} className="border-l-2 border-slate-800 pl-6 py-1">
                       <h3 className="font-bold text-white">{edu.degree}</h3>
                       <p className="text-primary-400 text-sm">{edu.institution}</p>
                       <p className="text-slate-500 text-xs font-mono mt-1">{edu.period} • {edu.location}</p>
                    </div>
                 ))}
              </div>
           </div>
           
           {/* Certifications Column */}
           <div>
              <div className="flex items-center gap-3 mb-8">
                 <Award className="text-primary-500" size={24} />
                 <h2 className="text-2xl font-bold text-white">Certifications</h2>
              </div>
              
              <div className="grid gap-3">
                 {RESUME_DATA.certificates.map((cert) => (
                    <div key={cert.id} className="flex items-center gap-3 p-3 rounded-lg bg-slate-900 border border-slate-800">
                       <div className="w-1.5 h-1.5 rounded-full bg-primary-500 flex-shrink-0"></div>
                       <span className="text-slate-300 text-sm">{cert.name}</span>
                    </div>
                 ))}
              </div>
           </div>
        </div>

      </div>
    </section>
  );
};

export default Certifications;