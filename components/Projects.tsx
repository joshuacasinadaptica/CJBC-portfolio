import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { ExternalLink, ArrowRight } from 'lucide-react';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Web' | 'Mobile' | 'Design'>('All');

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 bg-surface-900 border-t border-white/5">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-xs font-bold text-primary-500 uppercase tracking-widest mb-2">Portfolio</h2>
            <h3 className="text-3xl font-bold text-white">Selected Works</h3>
          </div>
          
          <div className="flex gap-2 bg-dark-950 p-1 rounded-sm border border-white/5">
            {['All', 'Web', 'Mobile', 'Design'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat as any)}
                className={`px-4 py-1.5 text-xs font-medium rounded-sm transition-all uppercase tracking-wide ${
                  filter === cat 
                    ? 'bg-primary-600 text-white' 
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group bg-dark-950 border border-white/5 hover:border-primary-500/30 transition-all duration-300">
              <div className="relative h-56 overflow-hidden bg-dark-800">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-dark-950/20 group-hover:bg-transparent transition-colors"></div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <span className="text-xs font-mono text-primary-500 uppercase">{project.category}</span>
                  <div className="flex gap-3">
                     {project.link && (
                      <a href={project.link} className="text-slate-400 hover:text-white transition-colors">
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm mb-6 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map(tech => (
                    <span key={tech} className="text-[10px] px-2 py-1 bg-white/5 text-slate-300 border border-white/5 uppercase tracking-wider">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;