import React from 'react';
import { PERSONAL_DETAILS, SOCIALS } from '../constants';
import * as LucideIcons from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-950 py-12 border-t border-white/5">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-2">{PERSONAL_DETAILS.brand}</h3>
            <p className="text-slate-500 text-xs">
              &copy; {new Date().getFullYear()} {PERSONAL_DETAILS.name}. All rights reserved.
            </p>
          </div>

          <div className="flex gap-6">
            {SOCIALS.map((social) => {
              const IconComponent = (LucideIcons as any)[social.icon] || LucideIcons.Link;
              return (
                <a 
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 hover:text-primary-400 transition-colors"
                  aria-label={social.platform}
                >
                  <IconComponent size={18} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;