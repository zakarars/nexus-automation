import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Calendar, Building2, ArrowRight } from 'lucide-react';
import Button from './ui/Button';

const Services = () => {
  const services = [
    {
      icon: MessageCircle,
      title: "AI Sales Concierge",
      desc: "24/7 Lead Capture & Qualification. Engage visitors instantly and turn traffic into qualified meetings.",
      tags: ["Real Estate", "Auto Dealerships"],
      color: "text-nexus-primary",
      border: "border-nexus-primary/50"
    },
    {
      icon: Calendar,
      title: "Service Assistant",
      desc: "Automated bookings, menu inquiries, and triage. Perfect for high-volume service businesses.",
      tags: ["Medical Clinics", "HoReCa"],
      color: "text-nexus-secondary",
      border: "border-nexus-secondary/50"
    },
    {
      icon: Building2,
      title: "Enterprise Ops",
      desc: "Internal HR Bots, CRM Synchronization, and complex workflow automation for large organizations.",
      tags: ["Corporations", "Logistics"],
      color: "text-nexus-accent",
      border: "border-nexus-accent/50"
    }
  ];

  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Our <span className="text-gradient">Core Systems</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Tailored automation solutions for every scale of business.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className={`glass-card p-8 rounded-2xl border-t-4 ${service.border} group relative overflow-hidden`}
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <service.icon className="w-24 h-24" />
              </div>
              
              <div className={`w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center mb-6 ${service.color}`}>
                <service.icon className="w-7 h-7" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">{service.desc}</p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {service.tags.map((tag, i) => (
                  <span key={i} className="text-xs font-mono px-2 py-1 rounded bg-white/5 border border-white/10 text-gray-300">
                    {tag}
                  </span>
                ))}
              </div>
              
              <a href="#" className={`flex items-center gap-2 text-sm font-bold ${service.color} hover:underline`}>
                Learn More <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
