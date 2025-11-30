import React, { useState } from 'react';
import { Mail, MapPin, Send, Phone, ArrowRight } from 'lucide-react';
import { PERSONAL_DETAILS } from '../constants';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      alert("Thanks for your message! I'll get back to you soon.");
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 bg-surface-900 border-t border-white/5">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16">
          
          <div>
            <h2 className="text-xs font-bold text-primary-500 uppercase tracking-widest mb-2">Get in Touch</h2>
            <h3 className="text-3xl font-bold text-white mb-6">Let's Discuss Your Project</h3>
            <p className="text-slate-400 mb-12 text-sm leading-relaxed max-w-md">
              Ready to modernize your infrastructure? I am available for consultations, freelance projects, and long-term partnerships.
            </p>

            <div className="space-y-8">
              <div className="flex gap-4 group">
                <div className="w-12 h-12 bg-dark-950 border border-white/10 flex items-center justify-center text-white group-hover:border-primary-500/50 transition-colors">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-white text-sm font-bold uppercase tracking-wide mb-1">Email</h4>
                  <a href={`mailto:${PERSONAL_DETAILS.email}`} className="text-slate-400 hover:text-primary-400 transition-colors text-sm">
                    {PERSONAL_DETAILS.email}
                  </a>
                </div>
              </div>

              <div className="flex gap-4 group">
                <div className="w-12 h-12 bg-dark-950 border border-white/10 flex items-center justify-center text-white group-hover:border-primary-500/50 transition-colors">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-white text-sm font-bold uppercase tracking-wide mb-1">Phone</h4>
                  <a href={`tel:${PERSONAL_DETAILS.phone}`} className="text-slate-400 hover:text-primary-400 transition-colors text-sm">
                    {PERSONAL_DETAILS.phone}
                  </a>
                </div>
              </div>

              <div className="flex gap-4 group">
                <div className="w-12 h-12 bg-dark-950 border border-white/10 flex items-center justify-center text-white group-hover:border-primary-500/50 transition-colors">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-white text-sm font-bold uppercase tracking-wide mb-1">Location</h4>
                  <p className="text-slate-400 text-sm">{PERSONAL_DETAILS.location}</p>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-dark-950 p-8 lg:p-10 border border-white/5 shadow-2xl">
            <h4 className="text-white font-bold mb-6">Send a Message</h4>
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-surface-900 border border-white/10 px-4 py-3 text-white text-sm focus:outline-none focus:border-primary-500 transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-surface-900 border border-white/10 px-4 py-3 text-white text-sm focus:outline-none focus:border-primary-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-surface-900 border border-white/10 px-4 py-3 text-white text-sm focus:outline-none focus:border-primary-500 transition-colors resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-primary-600 hover:bg-primary-500 text-white font-bold uppercase tracking-widest text-xs transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Processing...' : 'Send Message'}
              </button>
            </div>
          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;