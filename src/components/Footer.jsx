import React from 'react';
import { Cpu, Linkedin, Twitter, Instagram } from 'lucide-react';
import Button from './ui/Button';

const Footer = () => {
  return (
    <footer className="bg-nexus-dark pt-24 pb-12 border-t border-white/10 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-nexus-primary/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 mb-20">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to upgrade your business?</h2>
            <p className="text-xl text-gray-400 mb-8">
              Join the future of automation. Book a free strategy call to see how we can transform your operations.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div className="glass-card p-8 rounded-2xl">
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="Name" className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-nexus-primary transition-colors" />
                <input type="text" placeholder="Company" className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-nexus-primary transition-colors" />
              </div>
              <input type="email" placeholder="Email Address" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-nexus-primary transition-colors" />
              <textarea placeholder="Tell us about your needs..." rows="4" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-nexus-primary transition-colors" />
              <Button variant="primary" className="w-full justify-center">
                Send Message
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-xl font-bold tracking-tighter">
            <div className="w-6 h-6 bg-gradient-to-br from-nexus-primary to-nexus-secondary rounded flex items-center justify-center">
              <Cpu className="text-nexus-dark w-4 h-4" />
            </div>
            <span className="text-white">NEXUS<span className="text-nexus-primary">.AUTO</span></span>
          </div>
          <p className="text-gray-500 text-sm">© 2024 Nexus Automation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
