
import React from 'react';

interface AdSlotProps {
  id: string;
  type: 'banner' | 'in-feed' | 'sidebar' | 'mid-content';
  className?: string;
}

const AdSlot: React.FC<AdSlotProps> = ({ id, type, className = "" }) => {
  const heights = {
    'banner': 'h-24 md:h-32',
    'in-feed': 'h-64',
    'sidebar': 'h-[600px]',
    'mid-content': 'h-64 md:h-80'
  };

  return (
    <div className={`my-8 flex flex-col items-center justify-center w-full ${className}`}>
      <span className="text-[10px] uppercase tracking-widest text-gray-600 mb-2">Advertisement</span>
      <div 
        id={`ad-${id}`}
        className={`w-full bg-surface border border-dashed border-gray-800 rounded-lg flex items-center justify-center relative overflow-hidden ${heights[type]}`}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-neonCyan/5 to-neonPurple/5 animate-pulse" />
        <p className="text-gray-700 font-display text-sm z-10">AdSpace - Placeholder</p>
      </div>
    </div>
  );
};

export default AdSlot;
