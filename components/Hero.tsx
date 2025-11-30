import React from 'react';
import { ArrowRight, Download, Github, Linkedin, Twitter } from 'lucide-react';
import { PERSONAL_DETAILS } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-surface-900">
      {/* Background Subtle Grid */}
      <div className="absolute inset-0 bg-grid-pattern bg-[size:40px_40px] opacity-[0.03]"></div>
      
      {/* Subtle Gradient Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-900/20 rounded-full blur-[100px] -z-10"></div>

      <div className="container mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <div className="space-y-8">
          <div className="inline-block px-3 py-1 rounded border border-primary-500/30 bg-primary-900/20 text-primary-400 text-xs font-semibold tracking-widest uppercase">
            Available for Consultancy
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Integrating <span className="text-primary-400">Machines</span> to <br />
            Intelligent Software.
          </h1>
          
          <p className="text-lg text-slate-400 max-w-lg leading-relaxed font-light">
            I help enterprises bridge the gap between industrial machinery and modern software ecosystems using Oracle Integration Cloud, custom SCADA systems, and secure infrastructure.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a href="#contact" className="px-8 py-3 rounded bg-primary-600 hover:bg-primary-500 text-white font-semibold transition-all flex items-center gap-2 text-sm uppercase tracking-wide">
              Consult with Me
              <ArrowRight size={16} />
            </a>
            <a href="#projects" className="px-8 py-3 rounded bg-transparent hover:bg-white/5 text-white font-semibold transition-all border border-white/20 flex items-center gap-2 text-sm uppercase tracking-wide">
              View Portfolio
            </a>
          </div>

          <div className="flex items-center gap-8 pt-8 border-t border-white/5">
            <div className="text-slate-500 text-xs font-semibold uppercase tracking-widest">Connect</div>
            <div className="flex gap-5">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="relative z-10 bg-dark-800 p-2 rounded-lg border border-white/5 shadow-2xl">
            <img 
              src="https://picsum.photos/600/600?grayscale" 
              alt={PERSONAL_DETAILS.name}
              className="rounded-sm w-full h-auto grayscale hover:grayscale-0 transition-all duration-700 ease-in-out object-cover"
            />
          </div>
          {/* Decorative geometric elements */}
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary-600/10 z-0 border border-primary-500/20"></div>
          <div className="absolute -top-6 -left-6 w-32 h-32 border border-white/10 z-0"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;