import React from 'react';
import { motion } from 'framer-motion';

const SocialProof = () => {
  const logos = [
    "Nexus", "Starlight", "Orbit", "Hyperion", "Zenith", "Apex", "Vortex", "Quantum"
  ];

  return (
    <section className="py-10 border-y border-white/5 bg-white/2 overflow-hidden">
      <div className="container mx-auto px-6 mb-6 text-center">
        <p className="text-sm text-gray-400 uppercase tracking-widest">Trusted by leading Construction & Medical firms in Yerevan</p>
      </div>
      
      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee whitespace-nowrap flex gap-16 items-center">
          {[...logos, ...logos, ...logos].map((logo, index) => (
            <span key={index} className="text-2xl font-bold text-white/20 uppercase font-mono hover:text-nexus-primary transition-colors cursor-default">
              {logo}
            </span>
          ))}
        </div>
        
        <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex gap-16 items-center ml-16">
          {[...logos, ...logos, ...logos].map((logo, index) => (
            <span key={index} className="text-2xl font-bold text-white/20 uppercase font-mono hover:text-nexus-primary transition-colors cursor-default">
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
