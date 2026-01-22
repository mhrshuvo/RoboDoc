
import React, { useEffect, useState } from 'react';
import { BlogPost, PageType } from '../types';
import { MOCK_POSTS } from '../data';
import AdSlot from '../components/AdSlot';

interface BlogPostPageProps {
  slug: string;
  onNavigate: (page: PageType, slug?: string) => void;
}

const BlogPostPage: React.FC<BlogPostPageProps> = ({ slug, onNavigate }) => {
  const post = MOCK_POSTS.find(p => p.slug === slug) || MOCK_POSTS[0];
  const [readingProgress, setReadingProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / scrollHeight) * 100;
      setReadingProgress(progress);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <article className="min-h-screen">
      {/* Scroll Progress Bar */}
      <div className="fixed top-16 left-0 w-full h-1 z-50 bg-white/5">
        <div
          className="h-full bg-gradient-to-r from-neonCyan to-neonPurple"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumbs */}
          <nav className="mb-8 text-xs uppercase font-mono font-bold tracking-widest text-gray-500 flex gap-2 items-center">
            <button onClick={() => onNavigate('home')} className="hover:text-neonCyan border-b border-transparent hover:border-neonCyan transition-all">Home</button>
            <span className="text-neonCyan/50">&gt;</span>
            <span className="text-gray-400">{post.category}</span>
            <span className="text-neonCyan/50">&gt;</span>
            <span className="text-neonCyan line-clamp-1">{post.title}</span>
          </nav>

          <header className="mb-12 relative">
            <div className="absolute -left-8 top-0 h-full w-1 bg-gradient-to-b from-neonCyan to-transparent opacity-20 hidden md:block" />
            <h1 className="text-4xl md:text-7xl font-tech font-bold text-white mb-8 leading-none uppercase tracking-tighter">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 py-6 border-y border-white/5 bg-white/5 backdrop-blur-sm px-4 clip-corner-sm">
              <div className="flex items-center gap-3">
                <img src={post.author.avatar} alt={post.author.name} className="w-12 h-12 clip-corner-sm border border-neonCyan filter grayscale" />
                <div>
                  <p className="text-white text-sm font-bold font-tech uppercase tracking-wide">{post.author.name}</p>
                  <p className="text-gray-500 text-[10px] uppercase font-mono tracking-widest">{post.author.role}</p>
                </div>
              </div>
              <div className="h-8 w-[1px] bg-white/10 hidden sm:block transform rotate-12" />
              <div className="flex gap-8">
                <div>
                  <p className="text-gray-500 text-[10px] uppercase font-bold tracking-widest mb-1 font-mono">Published</p>
                  <p className="text-neonCyan text-xs font-mono">{post.publishedAt}</p>
                </div>
                <div>
                  <p className="text-gray-500 text-[10px] uppercase font-bold tracking-widest mb-1 font-mono">Time_Calc</p>
                  <p className="text-neonCyan text-xs font-mono">{post.readingTime}</p>
                </div>
              </div>
            </div>
          </header>

          <div className="flex flex-col lg:flex-row gap-12 relative">
            {/* Sidebar TOC - Desktop only */}
            <aside className="hidden lg:block w-64 flex-shrink-0 sticky top-32 h-fit">
              <div className="glass clip-corner p-6 border-l-2 border-neonCyan/20">
                <h4 className="font-tech text-white text-sm font-bold uppercase tracking-widest mb-4 flex items-center gap-2 border-b border-white/5 pb-2">
                  <i className="fa-solid fa-code-branch text-neonCyan text-xs"></i>
                  Nav_Sequence
                </h4>
                <ul className="space-y-4 text-xs font-mono">
                  <li><a href="#intro" className="text-neonCyan hover:underline block hover:pl-2 transition-all">&gt; Intro: The Dawn</a></li>
                  <li><a href="#bci" className="text-gray-400 hover:text-neonCyan transition-all block hover:pl-2">&gt; What is a BCI?</a></li>
                  <li><a href="#challenges" className="text-gray-400 hover:text-neonCyan transition-all block hover:pl-2">&gt; The Challenges</a></li>
                  <li><a href="#faq" className="text-gray-400 hover:text-neonCyan transition-all block hover:pl-2">&gt; Protocols (FAQ)</a></li>
                </ul>
              </div>
              <AdSlot id="sidebar-sticky" type="sidebar" className="mt-8" />
            </aside>

            {/* Main Content Area */}
            <div className="flex-1">
              <div className="relative mb-12 group">
                <img src={post.thumbnail} alt={post.title} className="w-full h-auto clip-corner shadow-2xl filter grayscale group-hover:grayscale-0 transition-all duration-700" />
                <div className="absolute bottom-0 right-0 bg-black/80 text-neonCyan text-xs font-mono px-4 py-2 clip-corner-sm border-t border-l border-neonCyan/50">
                  IMG_REF_0294
                </div>
              </div>

              <AdSlot id="post-top" type="banner" />

              <div
                className="prose prose-invert prose-cyan max-w-none text-gray-300 leading-relaxed text-lg font-light
                prose-headings:font-tech prose-headings:uppercase prose-headings:tracking-tight
                prose-h1:text-5xl prose-h1:text-white
                prose-h2:text-4xl prose-h2:text-white prose-h2:mt-16 prose-h2:mb-8 prose-h2:border-l-4 prose-h2:border-neonCyan prose-h2:pl-6
                prose-h3:text-2xl prose-h3:text-white prose-h3:mt-12 prose-h3:mb-6 prose-h3:text-neonCyan
                prose-p:mb-8 prose-p:font-mono prose-p:text-sm prose-p:leading-loose
                prose-strong:text-white prose-strong:font-bold prose-strong:bg-neonCyan/10 prose-strong:px-1
                prose-ul:list-square prose-li:font-mono prose-li:text-sm
                "
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              <AdSlot id="post-mid" type="mid-content" />

              {/* FAQ Section */}
              {post.faqs && (
                <section id="faq" className="mt-20 pt-12 border-t border-white/10">
                  <h3 className="font-tech text-3xl font-bold text-white mb-8 uppercase">:: Frequently Asked Protocols</h3>
                  <div className="space-y-6">
                    {post.faqs.map((faq, idx) => (
                      <div key={idx} className="glass clip-corner p-8 border-l border-neonCyan/20 hover:border-neonCyan transition-colors">
                        <h4 className="text-neonCyan font-bold mb-4 flex items-center gap-3 font-tech uppercase tracking-wide">
                          <span className="w-6 h-6 bg-neonCyan/10 rounded-none flex items-center justify-center text-xs border border-neonCyan">Q</span>
                          {faq.question}
                        </h4>
                        <p className="text-gray-400 font-mono text-sm leading-relaxed pl-9 border-l border-white/5 ml-3">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              <AdSlot id="post-bottom" type="banner" className="mt-12" />

              {/* Author Bio Box */}
              <section className="mt-20 p-8 glass clip-corner border-b-2 border-neonPurple flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left relative overflow-hidden">
                <div className="absolute top-0 right-0 p-2 text-[10px] font-mono text-neonPurple opacity-50">USER_ID_9921</div>
                <img src={post.author.avatar} alt={post.author.name} className="w-24 h-24 clip-corner shadow-neon-purple object-cover filter grayscale hover:grayscale-0 transition-all" />
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-neonPurple mb-2 block font-mono">Transmission Originator</span>
                  <h4 className="text-2xl font-tech font-bold text-white mb-4 uppercase">{post.author.name}</h4>
                  <p className="text-gray-400 font-mono text-xs leading-relaxed mb-6 border-l-2 border-neonPurple/30 pl-4">{post.author.bio}</p>
                  <div className="flex justify-center md:justify-start gap-4 font-mono">
                    <button className="text-xs uppercase font-bold text-neonCyan hover:bg-neonCyan hover:text-black px-2 py-1 transition-all">[View Profile]</button>
                    <button className="text-xs uppercase font-bold text-neonPurple hover:bg-neonPurple hover:text-black px-2 py-1 transition-all">[Contact]</button>
                  </div>
                </div>
              </section>

              {/* Internal Linking / Related Posts */}
              <section className="mt-20">
                <h3 className="font-tech text-2xl font-bold text-white mb-8 uppercase tracking-widest border-b border-white/10 pb-4 inline-block">Correlated Transmissions</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {MOCK_POSTS.slice(1, 3).map(p => (
                    <div
                      key={p.id}
                      onClick={() => onNavigate('post', p.slug)}
                      className="glass clip-corner p-4 flex gap-4 cursor-pointer hover:border-neonCyan border border-transparent transition-all group"
                    >
                      <img src={p.thumbnail} alt="" className="w-20 h-20 clip-corner-sm object-cover filter grayscale group-hover:grayscale-0 transition-all" />
                      <div>
                        <h5 className="text-white text-sm font-bold group-hover:text-neonCyan line-clamp-2 font-tech uppercase">{p.title}</h5>
                        <p className="text-gray-500 text-[10px] mt-2 uppercase font-mono font-bold tracking-tighter">{p.category} // {p.readingTime}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogPostPage;
