
import React from 'react';
import { MOCK_POSTS, CATEGORIES } from '../data';
import BlogCard from '../components/BlogCard';
import AdSlot from '../components/AdSlot';
import { PageType } from '../types';

interface HomeProps {
  onNavigate: (page: PageType, slug?: string) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const featuredPost = MOCK_POSTS[0];
  const latestPosts = MOCK_POSTS.slice(1);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* SEO Hero Header */}
      <section className="mb-16 text-center relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-neonCyan/5 blur-[120px] -z-10 rounded-full" />
        <h1 className="text-5xl md:text-8xl font-tech font-bold mb-6 text-white uppercase tracking-tighter leading-none relative inline-block">
          The Hub of <br /><span className="text-neonCyan">Robotic Intellect</span>
          <div className="absolute -right-8 top-0 text-xs font-mono text-gray-500 transform rotate-90 origin-left">SYS.V.2.0</div>
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl font-mono border-l-2 border-neonPurple pl-4 mt-8 text-left md:text-center md:border-none md:pl-0">
          // Deep dives into AI, Quantum Computing, and the Future of Human Evolution.
        </p>
      </section>

      {/* Featured Section */}
      <section className="mb-16">
        <div className="relative">
          <div className="absolute -left-4 top-10 w-1 h-20 bg-neonCyan"></div>
          <BlogCard post={featuredPost} onNavigate={onNavigate} featured />
        </div>
      </section>

      <AdSlot id="home-top" type="banner" />

      {/* Categories Bar */}
      <section className="mb-12 overflow-x-auto">
        <div className="flex items-center gap-4 min-w-max pb-4">
          <span className="text-neonCyan uppercase text-xs font-mono font-bold tracking-widest mr-4 border-b border-neonCyan pb-1">:: Explore Protocols</span>
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              className="px-6 py-2 clip-corner-sm bg-white/5 hover:bg-neonCyan/20 border border-white/10 hover:border-neonCyan text-gray-400 hover:text-white transition-all text-xs uppercase tracking-widest font-mono font-bold"
            >
              [{cat}]
            </button>
          ))}
        </div>
      </section>

      {/* Latest Feed */}
      <section className="mb-16">
        <div className="flex justify-between items-end mb-8 border-b border-white/10 pb-4">
          <h2 className="text-3xl font-tech font-bold text-white uppercase tracking-wide">Latest Transmissions</h2>
          <button className="text-neonCyan text-xs uppercase font-mono font-bold tracking-widest hover:bg-neonCyan hover:text-black px-2 py-1 transition-all">:: View Archive ::</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestPosts.map(post => (
            <BlogCard key={post.id} post={post} onNavigate={onNavigate} />
          ))}
          {/* Repeat some for filling grid */}
          <BlogCard post={featuredPost} onNavigate={onNavigate} />
        </div>
      </section>

      <AdSlot id="home-bottom" type="mid-content" />

      {/* Newsletter */}
      <section className="glass clip-corner p-12 text-center border-neonPurple/20 relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-neonPurple to-transparent opacity-50" />
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neonCyan to-transparent opacity-50" />

        <h2 className="text-3xl font-tech font-bold mb-4 uppercase">Sync Your Neural Net</h2>
        <p className="text-gray-400 mb-8 max-w-md mx-auto font-mono text-sm leading-relaxed">
          &gt; Initiate weekly data packets.<br />
          &gt; Receive futuristic tech insights directly to your inbox.
        </p>
        <form className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
          <div className="flex-1 relative">
            <span className="absolute left-4 top-4 text-neonCyan font-mono">$&gt;</span>
            <input
              type="email"
              placeholder="ENTER_PROTOCOL_ADDRESS..."
              className="w-full bg-black/50 border border-white/10 to-transparent clip-corner-sm px-10 py-4 focus:border-neonCyan outline-none text-white font-mono text-sm"
            />
          </div>
          <button className="bg-neonCyan/10 hover:bg-neonCyan/20 text-neonCyan border border-neonCyan font-mono font-bold py-4 px-8 clip-corner-sm shadow-[0_0_10px_rgba(0,242,255,0.2)] hover:shadow-[0_0_20px_rgba(0,242,255,0.4)] transition-all uppercase tracking-widest">
            Execute
          </button>
        </form>
      </section>
    </div>
  );
};

export default Home;
