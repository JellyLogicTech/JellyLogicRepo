import React from 'react'
import { SidebarLink } from './SidebarLink'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartLine, faLayerGroup, faUsers, faGraduationCap, faBriefcase, faAward, faEllipsis } from '@fortawesome/free-solid-svg-icons'

const Dot = () => <span className="w-2 h-2 rounded-full bg-jelly-500 inline-block mr-2 shadow-glow" />

export default function Sidebar({ onHomeClick, onGenerate }: { onHomeClick: ()=>void; onGenerate: (seed?: string)=>void }) {
  return (
    <aside className="w-64 xl:w-72 bg-white/5 backdrop-blur-xl border-r border-white/10 min-h-screen text-sm relative hidden md:block">
      <div className="px-5 py-5 border-b border-white/5">
        <button onClick={onHomeClick} className="flex items-center gap-2 cursor-pointer hover:scale-[1.01] transition">
          <div className="w-8 h-8 rounded-lg bg-jelly-600/80 flex items-center justify-center shadow-glow">
            <FontAwesomeIcon icon={faEllipsis} className="w-4 h-4 text-white" />
          </div>
          <span className="font-semibold">Jelly Logic</span>
        </button>
      </div>

      <div className="px-3">
        <h2 className="text-[11px] uppercase tracking-wide text-white/60 mt-3 mb-1 px-2">Quick Actions</h2>
        <nav className="space-y-1">
          <button onClick={()=>onGenerate('new strategy')}><SidebarLink active icon={<Dot />} label="New Strategy" /></button>
          <button onClick={()=>onGenerate('business analysis')}><SidebarLink icon={<svg width="16" height="16" viewBox="0 0 24 24">
            <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" stroke="currentColor" fill="none" stroke-width="2"/>
          </svg>} label="Business Analysis" /></button>
          <button onClick={()=>onGenerate('success stories')}><SidebarLink icon={<svg width="16" height="16" viewBox="0 0 24 24">
            <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" fill="none" stroke-width="2"/>
          </svg>} label="Success Stories" /></button>
        </nav>

        <h2 className="text-[11px] uppercase tracking-wide text-white/60 mt-5 mb-1 px-2">Recent</h2>
        <div className="space-y-1">
          <button onClick={()=>onGenerate('email automation')}><SidebarLink icon={<Dot />} label="Email automation workflow..." /></button>
          <button onClick={()=>onGenerate('customer data analysis')}><SidebarLink icon={<Dot />} label="Customer data analysis..." /></button>
          <button onClick={()=>onGenerate('social media optimization')}><SidebarLink icon={<Dot />} label="Social media optimization..." /></button>
        </div>

        <h2 className="text-[11px] uppercase tracking-wide text-white/60 mt-5 mb-1 px-2">Templates</h2>
        <div className="space-y-1 mb-24">
          <button onClick={()=>onGenerate('growth strategy')}><SidebarLink icon={<svg width="16" height="16" viewBox="0 0 24 24">
            <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" stroke="currentColor" fill="none" stroke-width="2"/>
          </svg>} label="Growth Strategy" /></button>
          <button onClick={()=>onGenerate('financial model')}><SidebarLink icon={ <svg width="16" height="16" viewBox="0 0 24 24">
            <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" fill="none" stroke-width="2"/>
          </svg>} label="Financial Model" /></button>
        </div>

        <div className="absolute bottom-4 left-0 w-full px-3">
          <SidebarLink icon={ <svg width="16" height="16" viewBox="0 0 24 24">
            <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke="currentColor" fill="none" stroke-width="2"/>
          </svg>} label="Send Feedback" />
          
          <SidebarLink icon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="opacity-80">
            <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" stroke="currentColor" strokeWidth="2"/>
            <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" stroke="currentColor" strokeWidth="2"/>
          </svg>} label="Settings" />
        </div>
      </div>
    </aside>
  )
}
