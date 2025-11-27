import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Database, Bot, Zap } from 'lucide-react';
import Button from './ui/Button';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-nexus-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-nexus-accent/20 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
            <span className="w-2 h-2 rounded-full bg-nexus-secondary animate-pulse" />
            <span className="text-xs font-medium text-nexus-secondary tracking-wide uppercase">AI Automation Agency</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            We Don't Sell Software. <br />
            <span className="text-gradient">We Automate Revenue.</span>
          </h1>
          
          <p className="text-xl text-gray-400 mb-8 max-w-lg leading-relaxed">
            Armenia's premier AI Automation Agency. We transform chaotic operations into 24/7 sales machines using AI Agents and Smart Workflows.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="glow">
              Book a Strategy Call <ArrowRight className="w-4 h-4" />
            </Button>
            <Button variant="secondary">
              See Our Work <Play className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </motion.div>

        {/* Animated Workflow Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative h-[500px] glass-card rounded-2xl p-8 border border-white/10 hidden lg:block"
        >
          {/* Workflow Nodes Animation */}
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Central Node */}
            <div className="relative z-10">
              <div className="w-20 h-20 bg-nexus-dark border-2 border-nexus-primary rounded-xl flex items-center justify-center shadow-[0_0_30px_rgba(0,240,255,0.3)]">
                <Bot className="w-10 h-10 text-nexus-primary" />
              </div>
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-sm font-mono text-nexus-primary">AI Agent</div>
            </div>

            {/* Orbiting Nodes */}
            {[
              { icon: Database, color: 'text-nexus-secondary', label: 'CRM', pos: 'top-0 left-1/2 -translate-x-1/2 -translate-y-[150px]' },
              { icon: Zap, color: 'text-yellow-400', label: 'n8n', pos: 'bottom-0 left-1/2 -translate-x-1/2 translate-y-[150px]' },
              { icon: ArrowRight, color: 'text-nexus-accent', label: 'Leads', pos: 'top-1/2 right-0 translate-x-[150px] -translate-y-1/2' },
              { icon: ArrowRight, color: 'text-white', label: 'Input', pos: 'top-1/2 left-0 -translate-x-[150px] -translate-y-1/2' },
            ].map((node, i) => (
              <motion.div
                key={i}
                className={`absolute ${node.pos}`}
                animate={{ 
                  y: [0, -10, 0],
                }}
                transition={{ 
                  duration: 3, 
                  delay: i * 0.5, 
                  repeat: Infinity,
                  ease: "easeInOut" 
                }}
              >
                <div className="w-16 h-16 bg-nexus-dark/80 border border-white/20 rounded-lg flex items-center justify-center backdrop-blur-md">
                  <node.icon className={`w-8 h-8 ${node.color}`} />
                </div>
              </motion.div>
            ))}

            {/* Connecting Lines (SVG) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
              <motion.path
                d="M250 250 L250 100"
                stroke="rgba(0, 240, 255, 0.3)"
                strokeWidth="2"
                strokeDasharray="5 5"
              />
              <motion.path
                d="M250 250 L250 400"
                stroke="rgba(10, 255, 153, 0.3)"
                strokeWidth="2"
                strokeDasharray="5 5"
              />
              <motion.path
                d="M250 250 L400 250"
                stroke="rgba(112, 0, 255, 0.3)"
                strokeWidth="2"
                strokeDasharray="5 5"
              />
              <motion.path
                d="M100 250 L250 250"
                stroke="rgba(255, 255, 255, 0.3)"
                strokeWidth="2"
                strokeDasharray="5 5"
              />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
