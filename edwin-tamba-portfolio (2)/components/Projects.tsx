import React, { useState } from 'react';
import { RESUME_DATA } from '../constants';
import { Folder, ChevronDown, ChevronUp } from 'lucide-react';

const Projects: React.FC = () => {
  const [expandedProjects, setExpandedProjects] = useState<Record<string, boolean>>({});

  const toggleProject = (id: string) => {
    setExpandedProjects(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section id="projects" className="py-20 bg-slate-950 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-3">
          <span className="text-primary-500">03.</span> Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {RESUME_DATA.projects.map((project) => {
            const isExpanded = !!expandedProjects[project.id];
            const hasMoreContent = project.description.length > 1;
            
            return (
              <div key={project.id} className="group bg-slate-900 rounded-xl p-6 border border-slate-800 hover:border-primary-500/50 transition-all flex flex-col h-full hover:-translate-y-1">
                
                <div className="flex justify-between items-start mb-6">
                   <div className="text-primary-500 p-3 bg-slate-800/50 rounded-lg">
                      <Folder size={32} strokeWidth={1.5} />
                   </div>
                   <div className="flex gap-4">
                      <span className="font-mono text-xs text-primary-400 bg-primary-500/10 px-2 py-1 rounded">
                        {project.period}
                      </span>
                   </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">
                  {project.title}
                </h3>
                
                <div className="flex-1 space-y-3 mb-4">
                  {/* First paragraph always visible */}
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {project.description[0]}
                  </p>
                  
                  {/* Additional paragraphs only visible if expanded */}
                  {isExpanded && project.description.slice(1).map((desc, i) => (
                    <p key={i} className="text-sm text-slate-400 leading-relaxed animate-fadeIn">
                      {desc}
                    </p>
                  ))}
                </div>
                
                <div className="mt-auto pt-4 border-t border-slate-800 flex items-center justify-between">
                    {hasMoreContent ? (
                      <button 
                        onClick={() => toggleProject(project.id)}
                        className="text-primary-400 hover:text-primary-300 text-sm font-medium flex items-center gap-1 transition-colors focus:outline-none"
                      >
                        {isExpanded ? (
                          <>Show Less <ChevronUp size={16} /></>
                        ) : (
                          <>Read More <ChevronDown size={16} /></>
                        )}
                      </button>
                    ) : (
                      <span className="text-sm text-slate-600 italic opacity-50">End of details</span>
                    )}
                    
                    <span className="font-mono text-xs text-slate-600 uppercase tracking-wider">
                      {project.title.toLowerCase().includes('agent') || project.title.toLowerCase().includes('ai') ? 'AI System' : 'Infrastructure'}
                    </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;