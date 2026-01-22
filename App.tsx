
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import BlogPostPage from './pages/BlogPost';
import AboutPage from './pages/About';
import SEO from './components/SEO';
import { RouteState, PageType } from './types';

const App: React.FC = () => {
  const [route, setRoute] = useState<RouteState>({ page: 'home' });

  // Simple Hash Routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (!hash || hash === 'home') {
        setRoute({ page: 'home' });
      } else if (hash.startsWith('post/')) {
        setRoute({ page: 'post', slug: hash.split('/')[1] });
      } else if (hash === 'about') {
        setRoute({ page: 'about' });
      } else if (hash === 'contact') {
        setRoute({ page: 'contact' });
      } else if (hash === 'privacy') {
        setRoute({ page: 'privacy' });
      } else if (hash === 'disclaimer') {
        setRoute({ page: 'disclaimer' });
      } else {
        setRoute({ page: 'home' }); // Fallback
      }
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Initial load

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = (page: PageType, slug?: string) => {
    if (slug) {
      window.location.hash = `${page}/${slug}`;
    } else {
      window.location.hash = page;
    }
  };

  const renderPage = () => {
    switch (route.page) {
      case 'home':
        return <Home onNavigate={navigate} />;
      case 'post':
        return <BlogPostPage slug={route.slug || ''} onNavigate={navigate} />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return (
          <div className="container mx-auto px-4 py-32 text-center">
            <h1 className="text-4xl font-display font-bold text-white mb-8">Contact Control</h1>
            <p className="text-gray-400 mb-12">Transmission channels currently operating on low power.</p>
            <div className="glass max-w-lg mx-auto p-12 clip-corner border-l-2 border-neonCyan">
              <p className="text-neonCyan font-mono text-xl tracking-wider">admin@robodoc.future</p>
            </div>
          </div>
        );
      case 'privacy':
      case 'disclaimer':
        return (
          <div className="container mx-auto px-4 py-20 max-w-4xl">
            <h1 className="text-4xl font-display font-bold text-white mb-12 uppercase tracking-widest">{route.page}</h1>
            <div className="glass p-12 clip-corner prose prose-invert prose-cyan max-w-none font-mono text-sm leading-relaxed border-t border-neonPurple/30 relative">
              <div className="absolute top-0 right-0 p-2 text-xs text-white/20">PROTOCOL_V2</div>
              <p>This is a legal document protocol. In the future of ROBODOC, we prioritize your data sovereignty.</p>
              <p>1. Data encryption is standard across all nodes.</p>
              <p>2. No tracking without explicit neural handshake.</p>
              <p>3. Use of information provided is at your own risk in the simulated environment.</p>
            </div>
          </div>
        );
      default:
        return <Home onNavigate={navigate} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-transparent text-gray-300 font-tech selection:bg-neonCyan selection:text-black">
      <div className="scanlines" />
      {/* Background Grid Accent */}
      <div className="fixed inset-0 bg-[url('https://patterns.ibrahimcesar.cloud/architect.svg')] opacity-5 pointer-events-none" />

      <SEO
        title="Home"
        description="ROBODOC: The ultimate source for futuristic tech, AI, and robotics. Join the neural revolution."
      />

      <Header activePage={route.page} onNavigate={navigate} />

      <main className="flex-grow">
        {renderPage()}
      </main>

      <Footer onNavigate={navigate} />
    </div>
  );
};

export default App;
