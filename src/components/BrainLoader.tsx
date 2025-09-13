import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBrain } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

import './BrainLoader.css'

export default function BrainLoader({ active, label }: { active: boolean; label: string }) {
  if (!active) return null
  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-2xl z-[1000] flex items-center justify-center flex-col gap-8 animate-[fadeIn_.3s_ease]">
      <div className="w-40 h-40 brain-float drop-shadow-[0_0_40px_rgba(102,126,234,0.6)]">
        <FontAwesomeIcon icon={faBrain} className="w-full h-full" />
      </div>
      <div className="w-[420px] max-w-[90vw] font-mono text-[#667eea]">
        <div className="flex gap-1 mb-2 pb-2 border-b border-jelly-500/30">
          <span className="w-2.5 h-2.5 rounded-full bg-[#667eea] animate-pulse"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-[#764ba2] animate-pulse [animation-delay:.2s]"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-[#f093fb] animate-pulse [animation-delay:.4s]"></span>
        </div>
        <div className="space-y-1">
          {['Initializing neural network...','Loading language models...','Analyzing business context...','Configuring optimization parameters...','Scanning market data...','Building solution architecture...','Applying AI recommendations...','Validating output quality...','Finalizing business strategy...','Analysis complete!'].map((t,i)=>(
            <div key={i} className="opacity-0 animate-[typeIn_.5s_ease_forwards]" style={{animationDelay:`${i*0.3}s`}}>&gt; {t}</div>
          ))}
        </div>
        
      </div>
      <div className="w-[420px] max-w-[90vw] mt-4">
        <div className="text-center text-sm text-white/80 mb-2">{label}</div>
        <div className="h-1 bg-white/10 rounded overflow-hidden"><div className="h-full w-0 bg-gradient-to-r from-jelly-500 via-purple-500 to-pink-300 animate-[fill_5s_ease-out_forwards]"></div></div>
        
      </div>
    </div>
  )
}
