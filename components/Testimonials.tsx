import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-dark-950 border-t border-white/5">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mb-16">
          <h2 className="text-xs font-bold text-primary-500 uppercase tracking-widest mb-2">Testimonials</h2>
          <h3 className="text-3xl font-bold text-white">Client Feedback</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div key={testimonial.id} className="bg-surface-900 p-8 border border-white/5 hover:border-white/10 transition-colors">
              <div className="mb-6 text-primary-500">
                <Quote size={32} />
              </div>
              
              <p className="text-slate-300 text-sm leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-10 h-10 rounded-full object-cover grayscale"
                />
                <div>
                  <h4 className="text-white font-semibold text-sm">{testimonial.name}</h4>
                  <p className="text-slate-500 text-xs uppercase tracking-wide">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;