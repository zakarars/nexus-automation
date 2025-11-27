import React from 'react';
import { motion } from 'framer-motion';
import { XCircle, CheckCircle, Database, MessageSquare, Zap, Globe } from 'lucide-react';

const BentoGrid = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">The Old Way vs. <span className="text-gradient">The Nexus Way</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Stop losing leads to slow response times. Upgrade to an intelligent system that never sleeps.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          
          {/* Card 1: The Pain */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-1 glass-card rounded-2xl p-8 flex flex-col justify-between border-l-4 border-red-500/50"
          >
            <div>
              <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center mb-6">
                <XCircle className="text-red-500 w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-2">The Pain</h3>
              <p className="text-gray-400">Missed calls, messy Excel sheets, and leads waiting hours for a reply.</p>
            </div>
            <div className="flex -space-x-2 opacity-50">
              {[1,2,3].map(i => (
                <div key={i} className="w-8 h-8 rounded-full bg-gray-700 border border-gray-800" />
              ))}
            </div>
          </motion.div>

          {/* Card 2: The Solution */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-2 glass-card rounded-2xl p-8 flex flex-col justify-between border-l-4 border-nexus-secondary relative overflow-hidden"
          >
            <div className="relative z-10">
              <div className="w-12 h-12 bg-nexus-secondary/20 rounded-full flex items-center justify-center mb-6">
                <CheckCircle className="text-nexus-secondary w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-2">The Solution</h3>
              <p className="text-gray-400 max-w-md">AI Agents that speak fluent Armenian & English. They qualify leads, book appointments, and sync everything instantly.</p>
            </div>
            
            <div className="absolute right-0 bottom-0 w-1/2 h-full bg-gradient-to-l from-nexus-secondary/10 to-transparent" />
            <div className="absolute right-8 bottom-8 flex gap-4">
               <div className="px-4 py-2 bg-nexus-dark/50 rounded-lg border border-nexus-secondary/30 text-xs font-mono text-nexus-secondary">
                 Status: Active
               </div>
               <div className="px-4 py-2 bg-nexus-dark/50 rounded-lg border border-nexus-secondary/30 text-xs font-mono text-nexus-secondary">
                 Response: &lt;1s
               </div>
            </div>
          </motion.div>

          {/* Card 3: The Tech Stack */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-2 glass-card rounded-2xl p-8 flex flex-col justify-center items-center text-center border-t-4 border-nexus-primary"
          >
             <h3 className="text-2xl font-bold mb-8">Powered By Next-Gen Tech</h3>
             <div className="flex flex-wrap justify-center gap-8">
               {[
                 { icon: Zap, label: 'n8n' },
                 { icon: Database, label: 'Supabase' },
                 { icon: MessageSquare, label: 'OpenAI' },
                 { icon: Globe, label: 'DeepSeek' },
               ].map((tech, i) => (
                 <div key={i} className="flex flex-col items-center gap-2 group">
                   <div className="w-16 h-16 bg-white/5 rounded-xl flex items-center justify-center group-hover:bg-nexus-primary/20 transition-colors">
                     <tech.icon className="w-8 h-8 text-gray-400 group-hover:text-nexus-primary transition-colors" />
                   </div>
                   <span className="text-sm text-gray-500 font-mono">{tech.label}</span>
                 </div>
               ))}
             </div>
          </motion.div>

          {/* Card 4: The Result */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-1 glass-card rounded-2xl p-8 flex flex-col justify-center bg-gradient-to-br from-nexus-accent/20 to-transparent border border-nexus-accent/30"
          >
            <h3 className="text-4xl font-bold text-white mb-2">100%</h3>
            <p className="text-nexus-accent font-medium mb-4">Response Rate</p>
            <p className="text-sm text-gray-400">Leads injected directly into your CRM instantly. No human intervention needed.</p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
