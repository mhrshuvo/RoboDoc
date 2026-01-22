
import React, { useState } from 'react';
import { PageType } from '../types';

interface HeaderProps {
  activePage: PageType;
  onNavigate: (page: PageType, slug?: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activePage, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', page: 'home' as PageType },
    { name: 'Future Tech', page: 'category' as PageType, category: 'Future Tech' },
    { name: 'Science', page: 'category' as PageType, category: 'Science' },
    { name: 'About', page: 'about' as PageType },
    { name: 'Contact', page: 'contact' as PageType },
  ];

  return (
    <header className="sticky top-0 z-50 w-full glass border-b border-neonCyan/20">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => onNavigate('home')}
        >
          <div className="w-12 h-12 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
            <img src="/logo.png" alt="RoboDoc Logo" className="w-full h-full object-contain filter drop-shadow-[0_0_5px_rgba(0,242,255,0.5)]" />
          </div>
          <span className="font-tech text-2xl font-bold tracking-widest text-white uppercase">
            Robo<span className="text-neonCyan">Doc</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => onNavigate(item.page)}
              className={`px-4 py-1 text-sm font-mono font-medium transition-all uppercase tracking-wider border border-transparent hover:border-neonCyan/50 hover:bg-neonCyan/5 clip-corner-sm ${activePage === item.page ? 'text-neonCyan border-neonCyan/30 bg-neonCyan/10' : 'text-gray-400'
                }`}
            >
              {item.name}
            </button>
          ))}
          <button className="w-9 h-9 flex items-center justify-center clip-corner-sm bg-white/5 hover:bg-neonCyan/20 border border-white/10 hover:border-neonCyan transition-all text-gray-300 hover:text-neonCyan ml-4">
            <i className="fa-solid fa-magnifying-glass text-sm"></i>
          </button>
        </nav>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden text-neonCyan p-2 border border-neonCyan/30 bg-neonCyan/5 clip-corner-sm"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <i className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars-staggered'} text-xl`}></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full glass border-b border-neonCyan/20 flex flex-col p-4 gap-2 animate-in fade-in slide-in-from-top-4 duration-200">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => {
                onNavigate(item.page);
                setIsMenuOpen(false);
              }}
              className="text-left px-4 py-3 text-lg font-mono text-gray-300 hover:text-neonCyan hover:bg-neonCyan/5 border-l-2 border-transparent hover:border-neonCyan transition-all"
            >
              <span className="text-neonCyan/50 mr-2">{'>'}</span>{item.name}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
