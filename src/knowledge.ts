export type PackageInfo = {
  name: string; badge: string; description: string;
  tools: string[]; ai?: string; metrics?: Record<string,string>; benefit: string;
}
export type Knowledge = {
  title: string; subtitle: string; packages: { basic: PackageInfo; growth: PackageInfo; pro: PackageInfo }
}

export const knowledgeBase: Record<string, Knowledge> = {
  'email automation': {
    title: 'Email Automation Solutions',
    subtitle: 'Transform your email outreach with AI-powered automation',
    packages: {
      basic: {
        name: 'Email Sequencer',
        badge: 'STARTER PACK',
        description: 'Auto-send intro → reminder → final nudge sequences to keep leads warm.',
        tools: ['Gmail/Outlook','Google Sheets','Mailmeteor/GMass'],
        ai: 'ChatGPT for template drafting',
        metrics: { time:'5-10 hrs/week', savings:'£600-£1,200/mo', leads:'+10-15% warm', impact:'Zero manual chasing' },
        benefit: 'Consistent follow-ups without lifting a finger',
      },
      growth: {
        name: 'Smart Nurture Flow',
        badge: 'MOST POPULAR',
        description: 'Segments leads and triggers journeys based on engagement (open/click/reply).',
        tools: ['HubSpot CRM or Mailchimp','Lemlist'],
        ai: 'Lavender.ai (personalization) + GrammarlyGO (tone)',
        metrics: { time:'15-20 hrs/month', savings:'£450-£600/mo', leads:'+20-30% replies', impact:'1-2 extra deals/mo' },
        benefit: 'Smarter outreach, improved brand perception',
      },
      pro: {
        name: 'AI-Driven Outreach Engine',
        badge: 'ENTERPRISE',
        description: 'AI writes tailored emails, schedules at optimal times, routes hot leads to calendar.',
        tools: ['Apollo.io','Outreach.io/SalesLoft','HubSpot/Salesforce'],
        ai: 'ChatGPT/Jasper + Seventh Sense + Calendly',
        metrics: { time:'50+ hrs/month', savings:'£1,500+/mo', leads:'2-3x meetings', impact:'£10k-£15k pipeline/mo' },
        benefit: 'Fully hands-free; sales team focuses on hot leads',
      }
    }
  }
}

export function renderKnowledgeHTML(k: Knowledge): string {
  const pkg = (p: PackageInfo, cls: string) => `
    <div class="package-item ${cls}">
      <div class="package-badge">${p.badge}</div>
      <div class="package-title">${p.name}</div>
      <div class="package-description">${p.description}</div>
      ${p.metrics ? `<div class="metrics-grid">
        ${Object.entries(p.metrics).map(([label,val])=>`
          <div class="metric-item"><div class="metric-label">${label}</div><div class="metric-value">${val}</div></div>
        `).join('')}
      </div>`:''}
      <div class="tools-section">
        <div class="tools-label">Tools Used</div>
        <div class="tools-list">
          ${p.tools.map(t=>`<div class="tool-row">
            <div class="tool-icon"><i class="fa-solid fa-circle-check"></i></div>
            <span>${t}</span>
          </div>`).join('')}
        </div>
      </div>
      ${p.ai ? `<div class="ai-section">
        <div class="ai-label"><i class="fa-solid fa-microchip"></i>AI Layer</div>
        <div class="ai-content">${p.ai}</div>
      </div>`:''}
      <div class="benefit-section">
        <div class="benefit-label">Key Benefit</div>
        <div class="benefit-content">${p.benefit}</div>
      </div>
      <button class="package-cta">Select Package</button>
    </div>`

  return `
    
    <div class="solution-header">
      <h2>${k.title}</h2>
      <p>${k.subtitle}</p>
    </div>
    <div class="packages-container">
      ${pkg(k.packages.basic,'basic')}
      ${pkg(k.packages.growth,'growth')}
      ${pkg(k.packages.pro,'pro')}
    </div>
  `
}
