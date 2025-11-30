import React from 'react';
import { PERSONAL_DETAILS, EXPERIENCE, EDUCATION, CERTIFICATIONS } from '../constants';
import { Award, Briefcase, GraduationCap, Calendar, Download } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-dark-950">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-16">
          
          {/* Bio Column */}
          <div className="lg:col-span-4 space-y-8">
            <div>
              <h2 className="text-xs font-bold text-primary-500 uppercase tracking-widest mb-2">My Profile</h2>
              <h3 className="text-3xl font-bold text-white mb-6">About Me</h3>
              <p className="text-slate-400 leading-relaxed text-sm mb-6">
                {PERSONAL_DETAILS.bio}
              </p>
              <button className="flex items-center gap-2 text-white border-b border-primary-500 pb-1 hover:text-primary-400 transition-colors text-sm font-medium">
                <Download size={16} /> Download Full Resume
              </button>
            </div>

            <div className="space-y-6 pt-8 border-t border-white/5">
              <div>
                <h4 className="flex items-center gap-2 text-white font-semibold mb-4">
                  <GraduationCap size={18} className="text-primary-500" /> Education
                </h4>
                {EDUCATION.map((edu, index) => (
                  <div key={index} className="mb-4">
                    <div className="text-white text-sm font-medium">{edu.institution}</div>
                    <div className="text-slate-400 text-xs">{edu.degree}</div>
                    <div className="text-slate-500 text-xs mt-1">{edu.year}</div>
                  </div>
                ))}
              </div>

              <div>
                <h4 className="flex items-center gap-2 text-white font-semibold mb-4">
                  <Award size={18} className="text-primary-500" /> Certifications
                </h4>
                <div className="space-y-3">
                  {CERTIFICATIONS.map((cert, index) => (
                    <div key={index} className="text-xs text-slate-300 border-l-2 border-white/10 pl-3">
                      {cert.name}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Timeline Column */}
          <div className="lg:col-span-8">
            <div className="flex items-center justify-between mb-10">
              <h3 className="text-2xl font-bold text-white">Professional Experience</h3>
            </div>

            <div className="relative border-l border-white/10 ml-3 space-y-12">
              {EXPERIENCE.map((item, index) => (
                <div key={index} className="relative pl-12">
                  {/* Timeline Node */}
                  <div className="absolute -left-[5px] top-2 w-[9px] h-[9px] rounded-full bg-dark-950 border-2 border-primary-500"></div>
                  
                  <div className="group">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h4 className="text-lg font-bold text-white group-hover:text-primary-400 transition-colors">
                        {item.role}
                      </h4>
                      <span className="text-xs font-mono text-primary-500 bg-primary-500/10 px-2 py-1 rounded">
                        {item.year}
                      </span>
                    </div>
                    <div className="text-sm font-medium text-slate-300 mb-3">{item.company}</div>
                    <p className="text-slate-400 text-sm leading-relaxed max-w-3xl">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;