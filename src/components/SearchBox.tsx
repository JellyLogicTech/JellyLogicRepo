import React, { useState } from 'react'

export default function SearchBox({ onSubmit }: { onSubmit: (prompt: string)=>void }) {
  const [prompt, setPrompt] = useState('')

  const handleKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      onSubmit(prompt.trim()); 
    }
  }

  const examples: string[] = ['Email Automation','Support Optimization','Customer Analytics','Social Media Strategy']

  return (
    <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 mt-6">
      <div className="mx-auto max-w-3xl bg-white/5 border border-jelly-500/20 rounded-2xl shadow-glow p-5 sm:p-6">
        <h2 className="text-lg sm:text-xl font-semibold text-center sm:text-left">Business Intelligence Platform</h2>
        <p className="text-xs sm:text-sm text-white/60 mt-1 text-center sm:text-left">Get AI-powered strategies, proposals, and solutions tailored to your needs</p>
        <div className="mt-4 flex flex-col sm:flex-row gap-2">
          <input
            value={prompt}
            onChange={e=>setPrompt(e.target.value)}
            onKeyDown={handleKey}
            placeholder="Describe your business challenge or opportunity..."
            className="flex-1 bg-white/5 border border-jelly-500/30 rounded-lg px-3 py-3 text-sm placeholder:text-white/40 focus:outline-none focus:border-jelly-500 focus:ring-4 focus:ring-jelly-500/20"
          />
          <button
            onClick={()=>onSubmit(prompt.trim())}
            className="px-4 sm:px-5 py-3 rounded-lg font-semibold bg-gradient-to-r from-jelly-500 via-purple-500 to-pink-300 text-white shadow-lg hover:brightness-110 transition inline-flex items-center gap-2 justify-center"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round"/></svg>
            Generate
          </button>
        </div>

        <div className="mt-4 flex flex-wrap gap-2 justify-center sm:justify-start">
          {examples.map((t, i)=>(
            <button
              key={i}
              onClick={()=>onSubmit(examplePrompts[t])}
              className="px-3 py-2 rounded-full text-xs border border-jelly-500/30 bg-white/5 text-white/70 hover:text-white hover:-translate-y-0.5 transition"
            >
              {t}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

const examplePrompts: Record<string,string> = {
  'Email Automation': 'email automation',
  'Support Optimization': 'support optimization',
  'Customer Analytics': 'customer analytics',
  'Social Media Strategy': 'social media strategy'
}
