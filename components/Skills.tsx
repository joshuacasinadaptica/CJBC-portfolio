import React from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  const categories = Array.from(new Set(SKILLS.map(s => s.category)));

  return (
    <section id="skills" className="py-24 bg-dark-950 border-t border-white/5">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mb-16">
          <h2 className="text-xs font-bold text-primary-500 uppercase tracking-widest mb-2">Expertise</h2>
          <h3 className="text-3xl font-bold text-white">Technologies & Tools</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div key={category} className="bg-surface-900 border border-white/5 p-6 rounded-sm">
              <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-6 pb-2 border-b border-white/5">
                {category}
              </h4>
              <div className="space-y-4">
                {SKILLS.filter(skill => skill.category === category).map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1.5">
                      <span className="text-slate-300 text-sm">{skill.name}</span>
                      <span className="text-slate-500 text-xs">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-dark-950 h-1.5 rounded-full overflow-hidden">
                      <div 
                        className="bg-slate-500 h-1.5 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;