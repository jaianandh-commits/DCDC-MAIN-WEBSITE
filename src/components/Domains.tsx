import { useState } from 'react';
import { DOMAINS } from '../data';
import { Terminal, Lightbulb, Library, Compass, Layers, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export default function Domains() {
  const [hoveredDomain, setHoveredDomain] = useState<string | null>(null);

  // Map domains to icons
  const getDomainIcon = (id: string, colorClass: string) => {
    switch (id) {
      case 'tech':
        return <Terminal className={`w-5 h-5 ${colorClass}`} />;
      case 'design':
        return <Layers className={`w-5 h-5 ${colorClass}`} />;
      case 'communication':
        return <Library className={`w-5 h-5 ${colorClass}`} />;
      case 'media':
        return <Compass className={`w-5 h-5 ${colorClass}`} />;
      default:
        return <Lightbulb className={`w-5 h-5 ${colorClass}`} />;
    }
  };

  return (
    <section 
      id="domains" 
      className="relative w-full bg-[#06080D] py-28 md:py-36 border-b border-white/5 overflow-hidden"
    >
      {/* Visual Ambient Spotlights behind cards */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[50vw] h-[40vh] bg-[#2458FF]/5 blur-[120px] pointer-events-none rounded-full"></div>
      <div className="absolute top-1/3 right-1/4 w-[40vw] h-[40vh] bg-[#E5B93C]/5 blur-[120px] pointer-events-none rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 space-y-16">
        
        {/* Title Display */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2">
            <span className="h-[1px] w-6 bg-[#E5B93C]/60"></span>
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#E5B93C]">
              EXHIBIT 05 / THE DISCIPLINARY LABS
            </span>
            <span className="h-[1px] w-6 bg-[#E5B93C]/60"></span>
          </div>
          
          <h2 className="font-sans text-3xl md:text-5xl font-bold tracking-tight text-white">
            A Place for Every Creator
          </h2>
          
          <p className="font-sans text-xs md:text-sm text-[#D8DEE8]/60 leading-relaxed">
            Five premium operational wings specializing in their respective drafts. Find the corridor that speaks to your core potential.
          </p>
        </div>

        {/* 5 Premium Exhibition Panels in Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {DOMAINS.map((dom) => (
            <motion.div
              key={dom.id}
              onMouseEnter={() => setHoveredDomain(dom.id)}
              onMouseLeave={() => setHoveredDomain(null)}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
              className={`relative bg-[#0D1118]/80 backdrop-blur-md rounded-2xl border border-white/5 p-6 flex flex-col justify-between transition-all duration-500 shadow-2xl group min-h-[460px] lg:col-span-1 cursor-pointer overflow-hidden ${dom.glowColor}`}
            >
              
              {/* Internal layout top */}
              <div className="space-y-5">
                
                {/* Header Icon + ID label */}
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center shadow-inner group-hover:bg-white/[0.08] transition-colors">
                    {getDomainIcon(dom.id, dom.color)}
                  </div>
                  
                  <span className="font-mono text-[9px] uppercase tracking-widest text-[#D8DEE8]/30">
                    LAB-{dom.id.toUpperCase()}
                  </span>
                </div>

                {/* Title and main descriptor */}
                <div className="space-y-2">
                  <h3 className={`font-sans text-2xl font-bold tracking-tight text-white group-hover:text-white transition-colors`}>
                    {dom.title}
                  </h3>
                  
                  <p className="font-sans text-[11px] text-[#D8DEE8]/65 leading-relaxed">
                    {dom.description}
                  </p>
                </div>

                {/* Divider */}
                <div className="h-[1px] bg-white/5 w-full"></div>

                {/* Primary Skills taught/refined */}
                <div className="space-y-2">
                  <span className="font-mono text-[8.5px] uppercase tracking-wider text-white/40 block">
                    Core Craft Focus:
                  </span>
                  
                  <div className="flex flex-wrap gap-1.5">
                    {dom.skills.map((sk) => (
                      <span 
                        key={sk} 
                        className="font-sans text-[9px] bg-white/[0.04] text-[#D8DEE8]/80 px-2 py-0.5 rounded border border-white/5 hover:border-white/10"
                      >
                        {sk}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Core Activities coordinated */}
                <div className="space-y-1.5">
                  <span className="font-mono text-[8.5px] uppercase tracking-wider text-white/40 block">
                    Coordinates:
                  </span>
                  
                  <ul className="space-y-1 text-[10px] text-[#D8DEE8]/60 font-sans">
                    {dom.activities.map((act) => (
                      <li key={act} className="flex items-start gap-1.5 leading-snug">
                        <CheckCircle2 className={`w-3 h-3 translate-y-[1.5px] shrink-0 ${dom.color}`} />
                        <span>{act}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Internal layout bottom: Sample Projects panel */}
              <div className="mt-6 pt-4 border-t border-white/5 space-y-2">
                <span className="font-mono text-[8.5px] uppercase tracking-widest text-[#E5B93C] font-semibold flex items-center gap-1">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E5B93C] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#E5B93C]"></span>
                  </span>
                  DCDC Lab Releases:
                </span>

                <div className="space-y-2">
                  {dom.exampleProjects.map((proj) => (
                    <div key={proj.name} className="space-y-0.5">
                      <h5 className="font-sans font-bold text-[10.5px] text-white">
                        {proj.name}
                      </h5>
                      <p className="font-sans text-[9.5px] text-[#D8DEE8]/40 leading-relaxed line-clamp-1 group-hover:line-clamp-none transition-all duration-300">
                        {proj.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Giant background text indicator */}
              <div className="absolute -bottom-10 -right-4 font-mono text-[60px] font-black opacity-[0.01] select-none pointer-events-none group-hover:opacity-[0.03] transition-all duration-500">
                {dom.id.toUpperCase()}
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}