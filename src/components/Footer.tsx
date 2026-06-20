import { Heart, Landmark, Send, Globe, ChevronUp, Github } from 'lucide-react';
import { motion } from 'motion/react';

interface FooterProps {
  onJoinClick: () => void;
  onExploreProjectsClick: () => void;
}

export default function Footer({ onJoinClick, onExploreProjectsClick }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer 
      id="cta" 
      className="relative w-full bg-[#06080D] pt-32 pb-16 overflow-hidden border-t border-white/5"
    >
      {/* 1. Spotlight gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[70vw] h-[50vh] bg-[#FF5A7A]/5 blur-[120px] pointer-events-none rounded-full"></div>
      <div className="absolute bottom-0 right-10 w-[30vw] h-[30vh] bg-[#2458FF]/5 blur-[100px] pointer-events-none rounded-full"></div>

      {/* 2. Large Faded Watermark Backdrop */}
      <h2 className="absolute bottom-10 left-1/2 -translate-x-1/2 font-sans font-black tracking-[0.4em] text-[18vw] leading-none text-white/5 pointer-events-none select-none uppercase whitespace-nowrap">
        DCDC
      </h2>

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center text-center space-y-16">
        
        {/* Call To Action Box */}
        <div className="max-w-3xl space-y-8 flex flex-col items-center">
          

          <h2 className="font-sans text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight">
            The Next Chapter <br />
            Could Be Yours
          </h2>

          <p className="font-sans text-xs md:text-sm text-[#D8DEE8]/60 leading-relaxed max-w-lg">
            Join a multi-disciplinary community where creativity, technical engineering, and storytelling come together to create permanent, high-fidelity cultural impact.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
            
            <button
              id="cta-btn-join"
              onClick={onJoinClick}
              className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-[#D8DEE8] text-black font-semibold text-xs tracking-wider rounded-lg shadow-xl shadow-black/80 transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <Landmark className="w-4 h-4 text-[#2458FF]" />
              Join DCDC
            </button>

            <button
              id="cta-btn-explore"
              onClick={onExploreProjectsClick}
              className="w-full sm:w-auto px-8 py-4 bg-[#0D1118] hover:bg-white/5 text-[#D8DEE8] hover:text-white font-semibold text-xs tracking-wider rounded-lg border border-white/10 transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              Explore Projects
            </button>

          </div>

        </div>

        {/* Curator Footer separator line */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

        {/* Footer info panels */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 text-left text-[#D8DEE8]/50">
          
          {/* Identity column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="relative w-8 h-8 flex items-center justify-center rounded bg-[#0D1118] border border-white/10">
                <span className="font-sans font-black text-[#E5B93C] text-xs">D</span>
              </div>
              <span className="font-sans font-bold text-white tracking-widest text-sm">
                DCDC • SRMIST
              </span>
            </div>
            
            <p className="font-sans text-xs leading-relaxed max-w-xs">
              Digital Communication & Design Club represents SRMIST's elite community dedicated to modern visual, technical, and strategic innovation.
            </p>
          </div>

          {/* Exhibition Navigation columns */}
          <div className="space-y-4">
            <h5 className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#E5B93C] font-semibold">
              EXHIBITOR ARCHIVES
            </h5>
            
            <div className="grid grid-cols-2 gap-2 text-xs">
              <button onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })} className="text-left hover:text-white transition-colors cursor-pointer">
                The Core
              </button>
              <button onClick={() => document.getElementById('legacy')?.scrollIntoView({ behavior: 'smooth' })} className="text-left hover:text-white transition-colors cursor-pointer">
                Exhibition Records
              </button>
              <button onClick={() => document.getElementById('journey')?.scrollIntoView({ behavior: 'smooth' })} className="text-left hover:text-white transition-colors cursor-pointer">
                Chronology
              </button>
              <button onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })} className="text-left hover:text-white transition-colors cursor-pointer">
                Historic moments
              </button>
              <button onClick={() => document.getElementById('domains')?.scrollIntoView({ behavior: 'smooth' })} className="text-left hover:text-white transition-colors cursor-pointer">
                Disciplinary labs
              </button>
              <button onClick={onExploreProjectsClick} className="text-left hover:text-[#E5B93C] font-semibold transition-colors cursor-pointer">
                Project Vault
              </button>
            </div>
          </div>

          {/* Institutional validation column */}
          <div className="space-y-4">
            <h5 className="font-mono text-[9px] uppercase tracking-[0.2em] text-cyan-400 font-semibold">
              INSTITUTIONAL METADATA
            </h5>
            
            <div className="space-y-2 text-xs leading-relaxed">
              <p>SRM Institute of Science and Technology, Kattankulathur, Chennai, Tamil Nadu - 603203.</p>
              <p className="text-white/30 text-[11px]">Approved Student Union wing operating under Department guidelines.</p>
            </div>
          </div>

        </div>

        {/* Copyright and signature foot */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between font-mono text-[10px] text-[#D8DEE8]/30 pt-6 border-t border-white/5 gap-4">
          
          <div>
            © {new Date().getFullYear()} DCDC SRMIST. Redesigned Curatorial Exhibition.
          </div>

          <div className="flex items-center gap-1.5">
            <span>Crafted with pure typographic precision in</span>
            <Heart className="w-3 h-3 text-[#FF5A7A] animate-pulse" />
            <span>and SRMIST pride.</span>
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={scrollToTop}
              className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer"
            >
              UPWARD <ChevronUp className="w-3 h-3" />
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
}