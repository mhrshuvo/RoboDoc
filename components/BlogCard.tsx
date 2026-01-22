
import React from 'react';
import { BlogPost, PageType } from '../types';

interface BlogCardProps {
  post: BlogPost;
  onNavigate: (page: PageType, slug: string) => void;
  featured?: boolean;
}

const BlogCard: React.FC<BlogCardProps> = ({ post, onNavigate, featured = false }) => {
  if (featured) {
    return (
      <div
        className="group relative w-full h-[500px] clip-corner overflow-hidden glass cursor-pointer border-b-2 border-neonCyan"
        onClick={() => onNavigate('post', post.slug)}
      >
        <img
          src={post.thumbnail}
          alt={post.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />

        {/* Tech Accents */}
        <div className="absolute top-0 right-0 p-4">
          <div className="w-20 h-2 bg-neonCyan/20 transform skew-x-12" />
        </div>

        <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full max-w-4xl">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-neonCyan text-black text-[12px] font-mono font-bold uppercase px-2 py-0.5 clip-corner-sm">{post.category}</span>
            <span className="text-neonCyan/80 text-xs font-mono uppercase tracking-widest border-l border-neonCyan/30 pl-3">{post.readingTime} read</span>
          </div>
          <h2 className="text-3xl md:text-6xl font-tech font-bold text-white mb-6 group-hover:text-neonCyan transition-colors leading-none uppercase tracking-tight">
            {post.title}
          </h2>
          <p className="text-gray-400 text-lg mb-8 line-clamp-2 max-w-2xl font-mono leading-relaxed border-l-2 border-neonCyan/30 pl-4">
            {post.description}
          </p>
          <div className="flex items-center gap-3">
            <img src={post.author.avatar} alt={post.author.name} className="w-10 h-10 clip-corner-sm border border-neonCyan/50 grayscale group-hover:grayscale-0 transition-all" />
            <div>
              <p className="text-white text-sm font-bold font-tech uppercase tracking-widest">{post.author.name}</p>
              <p className="text-neonCyan/60 text-xs font-mono uppercase">{post.publishedAt} // TERMINAL_ID_99</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="group glass clip-corner overflow-hidden cursor-pointer transition-all duration-300 hover:border-neonCyan border-transparent border"
      onClick={() => onNavigate('post', post.slug)}
    >
      <div className="relative h-56 overflow-hidden border-b border-white/5">
        <img
          src={post.thumbnail}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
        />
        <div className="absolute top-2 left-0">
          <span className="bg-black/90 backdrop-blur text-neonCyan text-[10px] font-mono font-bold uppercase px-3 py-1 border-r border-neonCyan clip-corner-sm">
            {post.category}
          </span>
        </div>
      </div>
      <div className="p-6 relative">
        {/* Corner Accent */}
        <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-neonCyan/50" />

        <div className="flex justify-between items-center mb-4 font-mono text-xs text-gray-500">
          <span className="uppercase tracking-widest">{post.publishedAt}</span>
          <span className="uppercase tracking-widest text-neonCyan/50">{post.readingTime}</span>
        </div>
        <h3 className="text-2xl font-tech font-bold text-white mb-3 group-hover:text-neonCyan transition-colors line-clamp-2 uppercase leading-tight">
          {post.title}
        </h3>
        <p className="text-gray-400 text-sm mb-6 line-clamp-3 font-mono leading-relaxed opacity-70">
          {post.description}
        </p>
        <div className="flex items-center gap-3 pt-4 border-t border-white/5 group-hover:border-neonCyan/30 transition-colors">
          <img src={post.author.avatar} alt={post.author.name} className="w-8 h-8 clip-corner-sm grayscale group-hover:grayscale-0 transition-all" />
          <p className="text-gray-300 text-xs font-bold font-tech uppercase tracking-wider">{post.author.name}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
