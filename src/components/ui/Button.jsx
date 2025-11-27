import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyles = "px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2";
  
  const variants = {
    primary: "bg-nexus-primary text-nexus-dark hover:bg-nexus-secondary hover:shadow-[0_0_20px_rgba(10,255,153,0.4)]",
    secondary: "bg-transparent border border-white/20 hover:bg-white/10 text-white",
    glow: "bg-gradient-to-r from-nexus-primary to-nexus-secondary text-nexus-dark shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:shadow-[0_0_30px_rgba(0,240,255,0.5)]"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
