import React, { ReactNode } from 'react'

export function SidebarLink({ icon, label, active=false }: { icon: ReactNode; label: string; active?: boolean }) {
  return (
    <a href="#" className={`flex items-center gap-3 px-4 py-2 rounded-lg transition 
      ${active ? 'bg-jelly-600/20 text-white before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[3px] before:bg-gradient-to-b before:from-jelly-500 before:to-purple-500 relative' : 'text-white/80 hover:bg-white/5 hover:text-white'}`}>
      <span className="inline-flex w-4 h-4">{icon}</span>
      <span className="text-[13px]">{label}</span>
    </a>
  )
}
