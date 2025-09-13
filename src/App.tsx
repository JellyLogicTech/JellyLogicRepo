import React, { useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Hero from './components/Hero';
import SearchBox from './components/SearchBox';
import Output from './components/Output';
import BrainLoader from './components/BrainLoader';
import { knowledgeBase, renderKnowledgeHTML } from './knowledge';

export default function App() {
  const [isGenerating, setGenerating] = React.useState(false);
  const [label, setLabel] = React.useState('Initializing AI Engine...');
  const [showOutput, setShowOutput] = React.useState(false);
  const [html, setHtml] = React.useState('');

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const r = document.createElement('span');
      r.className = 'ripple';
      r.style.left = `${e.clientX - 6}px`;
      r.style.top = `${e.clientY - 6}px`;
      document.body.appendChild(r);
      setTimeout(() => r.remove(), 400);
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  const run = (prompt: string) => {
    const p = (prompt || '').toLowerCase();
    if (!p.trim()) return;
    setShowOutput(false);
    setGenerating(true); setLabel('Initializing AI Engine...');
    setTimeout(() => setLabel('Analyzing Business Requirements...'), 800);
    setTimeout(() => setLabel('Processing Market Intelligence...'), 1600);
    setTimeout(() => setLabel('Generating Strategic Solutions...'), 2400);
    setTimeout(() => setLabel('Optimizing Recommendations...'), 3200);
    setTimeout(() => {
      // basic routing by intent
      const topic = (p.includes('email') || p.includes('automation')) ? 'email automation' : 'email automation';
      const k = knowledgeBase[topic];
      setHtml(renderKnowledgeHTML(k));
      setGenerating(false);
      setShowOutput(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 4000);
  };

  const goHome = () => {
    setShowOutput(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen relative">
      <div className="holo-bg">
        <div className="holo-grid"></div>
        <div className="absolute inset-0">
          <div className="geo-line"></div><div className="geo-line"></div><div className="geo-line"></div><div className="geo-line"></div>
        </div>
      </div>

      <div className="relative z-10 flex">
        <Sidebar onHomeClick={goHome} onGenerate={(seed) => run(seed || '')} />
        <main className="flex-1 min-h-screen overflow-y-auto">
          <Header onHomeClick={goHome} />
          <div className="flex flex-col items-stretch justify-start py-8 sm:py-10 gap-6">
            {!showOutput && (
              <>
                <Hero />
                <SearchBox onSubmit={run} />
              </>
            )}
            {showOutput && (
              <Output
                html={html}
                onBack={goHome}
                // No onCopy/onShare passed → uses built-in copy/share (with toast + Web Share API)
              />
            )}
            <div className="px-4 sm:px-6 md:px-8 lg:px-10 pb-6 text-center text-xs text-white/40">
              <a className="mx-2 hover:text-jelly-500" href="#">How it Works</a>
              <a className="mx-2 hover:text-jelly-500" href="#">About Jelly Logic</a>
              <a className="mx-2 hover:text-jelly-500" href="#">API Access</a>
              <a className="mx-2 hover:text-jelly-500" href="#">Careers</a>
            </div>
          </div>
        </main>
      </div>

      <BrainLoader active={isGenerating} label={label} />
    </div>
  );
}
