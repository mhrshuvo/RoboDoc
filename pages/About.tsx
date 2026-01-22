
import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-display font-black mb-12 bg-gradient-to-r from-neonCyan to-neonPurple bg-clip-text text-transparent">
          The Origin Protocol
        </h1>
        
        <div className="prose prose-invert prose-cyan max-w-none text-gray-300">
          <p className="text-xl font-light mb-12 border-l-4 border-neonCyan pl-8 py-2 italic">
            "We aren't just writing about the future; we are observing its birth."
          </p>
          
          <h2 className="text-2xl font-display font-bold text-white mt-12 mb-6">Mission Directive</h2>
          <p className="mb-8 leading-relaxed">
            Founded in the year 2024, ROBODOC was established to serve as the definitive database for humanity's transition into the robotic era. Our mission is to provide accessible, high-fidelity information regarding artificial intelligence, quantum advancement, and the ethical integration of biological and mechanical systems.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-16">
            <div className="glass p-8 rounded-2xl text-center border-neonCyan/20">
              <i className="fa-solid fa-microchip text-4xl text-neonCyan mb-6"></i>
              <h3 className="font-display font-bold text-white mb-2">Analysis</h3>
              <p className="text-gray-500 text-sm">Deep neural scanning of tech trends.</p>
            </div>
            <div className="glass p-8 rounded-2xl text-center border-neonPurple/20">
              <i className="fa-solid fa-shield-halved text-4xl text-neonPurple mb-6"></i>
              <h3 className="font-display font-bold text-white mb-2">Ethics</h3>
              <p className="text-gray-500 text-sm">Safe-guarding the human spirit.</p>
            </div>
            <div className="glass p-8 rounded-2xl text-center border-neonCyan/20">
              <i className="fa-solid fa-atom text-4xl text-neonCyan mb-6"></i>
              <h3 className="font-display font-bold text-white mb-2">Quantum</h3>
              <p className="text-gray-500 text-sm">Beyond binary expectations.</p>
            </div>
          </div>

          <h2 className="text-2xl font-display font-bold text-white mt-12 mb-6">Our Team</h2>
          <p className="mb-8 leading-relaxed">
            A collective of bio-engineers, software architects, and digital philosophers working across decentralized nodes globally. We operate on the principle of open intelligence and verifiable truth.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
