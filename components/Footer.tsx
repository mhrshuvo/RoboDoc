
import React from 'react';
import { PageType } from '../types';

interface FooterProps {
  onNavigate: (page: PageType) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="mt-20 border-t border-neonCyan/20 bg-background pt-16 pb-8 relative overflow-hidden">
      {/* Decorative Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,242,255,0.03)_1px,transparent_1px),linear-gradient(rgba(0,242,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 flex items-center justify-center">
                <img src="/logo.png" alt="RoboDoc Logo" className="w-full h-full object-contain filter drop-shadow-[0_0_5px_rgba(0,242,255,0.5)]" />
              </div>
              <span className="font-tech text-xl font-bold tracking-widest uppercase">Robo<span className="text-neonCyan">Doc</span></span>
            </div>
            <p className="text-gray-500 max-w-sm leading-relaxed mb-6 font-mono text-sm">
              &gt; Initializing knowledge transfer protocol...<br />
              &gt; Subject: Future Tech, AI, Ethics.<br />
              &gt; Status: Online.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 glass clip-corner-sm flex items-center justify-center text-gray-400 hover:text-neonCyan hover:bg-neonCyan/10 border border-transparent hover:border-neonCyan transition-all"><i className="fa-brands fa-x-twitter"></i></a>
              <a href="#" className="w-10 h-10 glass clip-corner-sm flex items-center justify-center text-gray-400 hover:text-neonCyan hover:bg-neonCyan/10 border border-transparent hover:border-neonCyan transition-all"><i className="fa-brands fa-github"></i></a>
              <a href="#" className="w-10 h-10 glass clip-corner-sm flex items-center justify-center text-gray-400 hover:text-neonCyan hover:bg-neonCyan/10 border border-transparent hover:border-neonCyan transition-all"><i className="fa-brands fa-linkedin-in"></i></a>
            </div>
          </div>

          <div>
            <h4 className="font-tech text-white text-lg font-bold uppercase tracking-widest mb-6 border-b border-neonCyan/30 pb-2 inline-block">Quick Links</h4>
            <ul className="space-y-4 text-gray-400 text-sm font-mono">
              <li><button onClick={() => onNavigate('home')} className="hover:text-neonCyan hover:pl-2 transition-all duration-300">:: Home</button></li>
              <li><button onClick={() => onNavigate('about')} className="hover:text-neonCyan hover:pl-2 transition-all duration-300">:: About Unit</button></li>
              <li><button onClick={() => onNavigate('contact')} className="hover:text-neonCyan hover:pl-2 transition-all duration-300">:: Contact Node</button></li>
              <li><button onClick={() => onNavigate('search')} className="hover:text-neonCyan hover:pl-2 transition-all duration-300">:: Search DB</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-tech text-white text-lg font-bold uppercase tracking-widest mb-6 border-b border-neonCyan/30 pb-2 inline-block">Legal Protocols</h4>
            <ul className="space-y-4 text-gray-400 text-sm font-mono">
              <li><button onClick={() => onNavigate('privacy')} className="hover:text-neonCyan hover:pl-2 transition-all duration-300">:: Privacy</button></li>
              <li><button onClick={() => onNavigate('disclaimer')} className="hover:text-neonCyan hover:pl-2 transition-all duration-300">:: Disclaimer</button></li>
              <li><button className="hover:text-neonCyan hover:pl-2 transition-all duration-300">:: Cookie Config</button></li>
              <li><button className="hover:text-neonCyan hover:pl-2 transition-all duration-300">:: Sitemap</button></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-600 text-[10px] uppercase tracking-widest font-mono">
          <p>© 2024 ROBODOC. System All Systems Nominal.</p>
          <p>Designed by [AI_CONSTRUCT]</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
