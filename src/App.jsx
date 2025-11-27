import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import BentoGrid from './components/BentoGrid';
import ChatDemo from './components/ChatDemo';
import Services from './components/Services';
import CaseStudy from './components/CaseStudy';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-nexus-dark text-white selection:bg-nexus-primary selection:text-nexus-dark">
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <BentoGrid />
        <ChatDemo />
        <Services />
        <CaseStudy />
      </main>
      <Footer />
    </div>
  );
}

export default App;
