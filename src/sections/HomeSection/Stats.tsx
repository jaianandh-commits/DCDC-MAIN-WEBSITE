import { LEGACY_STATS } from '../../data';
import { Landmark, Compass, Award, Heart, Shield } from 'lucide-react';
import { motion } from 'motion/react';

export default function Stats() {
  // Map icons to categories
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'COMMUNITY':
        return <Heart className="w-3.5 h-3.5 text-[#FF5A7A]" />;
      case 'INNOVATION':
        return <Compass className="w-3.5 h-3.5 text-[#2458FF]" />;
      case 'EDUCATION':
        return <Award className="w-3.5 h-3.5 text-[#E5B93C]" />;
      case 'LEGACY':
        return <Landmark className="w-3.5 h-3.5 text-emerald-400" />;
      default:
        return <Shield className="w-3.5 h-3.5 text-purple-400" />;
    }
  };

  return (
    <section 
      id="legacy" 
      className="relative w-full bg-[#0D1118] py-28 md:py-36 border-t border-b border-white/5 overflow-hidden"
    >
      {/* 1. Subtle glowing spotlight in the background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vh] bg-[#2458FF]/5 blur-[120px] pointer-events-none rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 space-y-16">
        
        {/* Header with elegant layout */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">

          
          <h2 className="font-sans text-3xl md:text-5xl font-bold tracking-tight text-white">
            A Legacy Built Together
          </h2>
          
          <p className="font-sans text-xs md:text-sm text-[#D8DEE8]/60 text-center leading-relaxed">
            Every entry on our plaque represents a milestone of engineering design, co-created by a tireless community of visionaries.
          </p>
        </div>

        {/* Premium Plaque Museum Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto w-full">
          {LEGACY_STATS.map((stat, idx) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ 
                y: -6,
                borderColor: "rgba(229,185,60,0.4)",
              }}
              className="relative p-6 bg-[#06080D]/90 backdrop-blur-md rounded-xl border border-white/5 shadow-2xl overflow-hidden group flex flex-col justify-between min-h-[230px]"
            >
              {/* Gold light leakage / highlight at the top */}
              <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#E5B93C]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Category label with icon (Pristine, no horizontal rule) */}
              <div className="flex items-center">
                <span className="flex items-center gap-1.5 font-mono text-[9.5px] tracking-wider text-white bg-white/5 border border-white/10 px-2.5 py-1 rounded-full group-hover:border-[#E5B93C]/30 transition-colors duration-300">
                  {getCategoryIcon(stat.category)}
                  {stat.category}
                </span>
              </div>

              {/* Big Metric Display */}
              <div className="my-4">
                <h3 className="font-sans text-4xl md:text-5xl font-bold text-white tracking-tight leading-none">
                  {stat.value}
                </h3>
                <span className="font-sans text-xs font-semibold text-[#D8DEE8]/70 block mt-2 text-left uppercase tracking-wider">
                  {stat.label}
                </span>
              </div>

              {/* Plaque Metadata Description */}
              <p className="font-sans text-[10.5px] text-[#D8DEE8]/50 leading-relaxed pt-3 border-t border-white/5 group-hover:text-[#D8DEE8]/70 transition-colors duration-300">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Curator Quote / Underlining Notice */}
        <div className="border border-white/10 rounded-xl p-6 bg-[#06080D]/40 backdrop-blur-sm max-w-3xl mx-auto flex flex-col sm:flex-row items-center gap-4 text-left">
          <div className="w-10 h-10 rounded-full bg-[#E5B93C]/10 flex items-center justify-center shrink-0 border border-[#E5B93C]/20">
            <Landmark className="w-5 h-5 text-[#E5B93C]" />
          </div>
          <div>
            <h5 className="font-sans font-bold text-xs text-white uppercase tracking-wider">
              CURATORIAL REMARK
            </h5>
            <p className="font-sans text-[11px] text-[#D8DEE8]/60 mt-1 leading-relaxed">
              "Unlike conventional tech clubs that prioritize sheer volume, DCDC measures its impact by the durability of its creations. Each workstation and designed interface is meant to create a permanent contribution to college culture."
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}