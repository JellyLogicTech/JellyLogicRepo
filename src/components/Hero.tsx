import React from 'react';
import './Hero.css';

const llmIcons = [
  {
    title: 'GPT-4',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-full h-full">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'Claude',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-full h-full">
        <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="1.6"/>
        <path d="M9 12h6M12 9v6" strokeWidth="1.6" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Gemini',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-full h-full">
        <circle cx="12" cy="12" r="10" strokeWidth="1.6"/>
        <circle cx="12" cy="12" r="4" strokeWidth="1.6"/>
        <path d="M12 2v4M12 18v4M2 12h4M18 12h4" strokeWidth="1.6" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'LLaMA',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-full h-full">
        <path d="M9 2l3 7 3-7M9 22l3-7 3 7M2 9l7 3-7 3M22 9l-7 3 7 3" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

export default function Hero() {
  return (
    <div className="text-center pt-8 px-4 fade-in-up">
      <h1 className="slogan-grad text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
        Intelligence Meets Innovation
      </h1>
      <p className="mt-2 text-white/60 text-sm sm:text-base">
        Transform your business with AI-powered insights
      </p>

      {/* Icons row */}
      <div className="flex items-center justify-center gap-6 sm:gap-8 mt-8 opacity-0 animate-[fadeUp_.8s_.3s_forwards]">
        {llmIcons.map(({ title, svg }, i) => (
          <div
            key={i}
            className="group relative w-8 h-8 sm:w-9 sm:h-9 text-white/80 hover:text-white transition will-change-transform hover:-translate-y-1"
            aria-label={title}
          >
            {/* subtle glow on hover */}
            <div className="absolute inset-0 rounded-full blur-md opacity-0 group-hover:opacity-50 transition" style={{ boxShadow: '0 0 24px rgba(102,126,234,0.45)' }} />
            <div className="relative w-full h-full">{svg}</div>

            {/* tooltip */}
            <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-[calc(100%+10px)] opacity-0 group-hover:opacity-100 transition
                            text-[10px] sm:text-xs font-medium text-slate-900 bg-white/90 px-2 py-1 rounded shadow-lg">
              {title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
