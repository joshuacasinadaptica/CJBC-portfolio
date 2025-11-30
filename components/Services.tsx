import React from 'react';
import { SERVICES } from '../constants';
import * as LucideIcons from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-surface-900 border-t border-white/5">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-xs font-bold text-primary-500 uppercase tracking-widest mb-2">What I Offer</h2>
            <h3 className="text-3xl font-bold text-white">Specialized Technical Services</h3>
          </div>
          <p className="text-slate-400 text-sm max-w-md text-right md:text-left">
            End-to-end solutions for industrial automation and enterprise software integration.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => {
            const IconComponent = (LucideIcons as any)[service.icon] || LucideIcons.HelpCircle;

            return (
              <div 
                key={index} 
                className="group p-8 bg-dark-950 border border-white/5 hover:border-primary-500/50 transition-all duration-300 hover:bg-dark-800"
              >
                <div className="mb-6 text-slate-400 group-hover:text-primary-400 transition-colors">
                  <IconComponent size={32} strokeWidth={1.5} />
                </div>
                <h4 className="text-lg font-bold text-white mb-3">
                  {service.title}
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;