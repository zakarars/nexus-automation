import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, BarChart3 } from 'lucide-react';

const CaseStudy = () => {
  return (
    <section id="case-studies" className="py-24 bg-white/2 border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="glass-card rounded-3xl p-8 md:p-12 border border-white/10 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-nexus-primary/10 to-transparent pointer-events-none" />
          
          <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-nexus-primary/10 border border-nexus-primary/20 mb-6">
                <span className="text-xs font-bold text-nexus-primary tracking-wide uppercase">Success Story</span>
              </div>
              
              <h2 className="text-3xl md:text-5xl font-bold mb-6">CBS Construction</h2>
              <p className="text-xl text-gray-300 mb-8">
                How we helped a major developer answer 100% of inquiries instantly and generate summarized leads in Telegram.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <h4 className="text-4xl font-bold text-white mb-1">24/7</h4>
                  <p className="text-sm text-gray-400">Availability</p>
                </div>
                <div>
                  <h4 className="text-4xl font-bold text-nexus-secondary mb-1">3x</h4>
                  <p className="text-sm text-gray-400">Lead Conversion</p>
                </div>
              </div>
              
              <button className="flex items-center gap-2 text-white border-b border-nexus-primary pb-1 hover:text-nexus-primary transition-colors">
                Read Full Case Study <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
            
            <div className="relative">
              <div className="aspect-video bg-gray-900 rounded-xl overflow-hidden border border-white/10 shadow-2xl relative group">
                {/* Abstract UI representation */}
                <div className="absolute inset-0 flex items-center justify-center bg-gray-800/50">
                  <BarChart3 className="w-20 h-20 text-white/20" />
                </div>
                
                {/* Floating cards */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-10 right-10 bg-nexus-dark p-4 rounded-lg border border-white/10 shadow-xl max-w-[200px]"
                >
                  <div className="h-2 w-20 bg-gray-700 rounded mb-2" />
                  <div className="h-2 w-32 bg-gray-700 rounded mb-4" />
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                      <ArrowUpRight className="w-4 h-4 text-green-500" />
                    </div>
                    <span className="text-green-500 font-bold">+124% Leads</span>
                  </div>
                </motion.div>

                 <motion.div 
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute bottom-10 left-10 bg-nexus-dark p-4 rounded-lg border border-white/10 shadow-xl"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-full bg-blue-500" />
                    <div>
                      <div className="h-2 w-20 bg-gray-700 rounded mb-1" />
                      <div className="h-2 w-10 bg-gray-700 rounded" />
                    </div>
                  </div>
                  <div className="h-2 w-full bg-gray-700 rounded" />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
