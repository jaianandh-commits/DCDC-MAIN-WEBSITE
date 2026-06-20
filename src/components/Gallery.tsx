import { useState } from 'react';
import { GALLERY_ITEMS } from '../data';
import { Filter, Calendar, ZoomIn, X, Clock, Eye, Landmark } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedItem, setSelectedItem] = useState<(typeof GALLERY_ITEMS)[0] | null>(null);

  const filterCategories = [
    { label: 'All Exhibits', value: 'all' },
    { label: 'Workshops', value: 'workshops' },
    { label: 'Collaborations', value: 'collaborations' },
    { label: 'Events & Forums', value: 'events' },
    { label: 'Innovations', value: 'innovations' }
  ];

  const filteredItems = activeCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section 
      id="gallery" 
      className="relative w-full bg-[#0D1118] py-28 md:py-36 border-b border-white/5 overflow-hidden"
    >
      {/* Dynamic atmospheric light leaking from sides */}
      <div className="absolute top-1/4 -left-20 w-[35vw] h-[35vh] bg-[#FF5A7A]/5 blur-[120px] pointer-events-none rounded-full"></div>
      <div className="absolute bottom-1/4 -right-20 w-[35vw] h-[35vh] bg-[#E5B93C]/5 blur-[120px] pointer-events-none rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 space-y-16">
        
        {/* Gallery Title Block */}
        <div className="text-center space-y-4 max-w-2xl mx-auto animate-fade-in">
          <div className="inline-flex items-center gap-2">
            <span className="h-[1px] w-6 bg-[#FF5A7A]/60"></span>
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#FF5A7A]">
              EXHIBIT 04 / CURATED MOMENTS
            </span>
            <span className="h-[1px] w-6 bg-[#FF5A7A]/60"></span>
          </div>
          
          <h2 className="font-sans text-3xl md:text-5xl font-bold tracking-tight text-white animate-pulse">
            Moments That Define DCDC
          </h2>
          
          <p className="font-sans text-xs md:text-sm text-[#D8DEE8]/60 leading-relaxed">
            Every workshop, event, collaboration, and project adds another chapter to our story. Browse the physical archives of our interactions.
          </p>
        </div>

        {/* Category Filter Controls */}
        <div className="flex flex-wrap items-center justify-center gap-2.5">
          {filterCategories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide border transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                activeCategory === cat.value
                  ? 'bg-white text-black border-white shadow-[0_4px_12px_rgba(255,255,255,0.15)] font-semibold'
                  : 'bg-[#06080D]/80 text-[#D8DEE8]/60 border-white/10 hover:border-white/20 hover:text-white'
              }`}
            >
              <Filter className={`w-3 h-3 ${activeCategory === cat.value ? 'text-black' : 'text-[#D8DEE8]/40'}`} />
              {cat.label}
            </button>
          ))}
        </div>

        {/* Masonry-Style Curated Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                onClick={() => setSelectedItem(item)}
                className="group relative bg-[#06080D]/90 rounded-2xl border border-white/5 overflow-hidden shadow-2xl hover:border-white/25 transition-all duration-500 cursor-zoom-in h-[340px]"
              >
                {/* Image panel */}
                <div className="absolute inset-0 w-full h-full bg-black">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-1000 ease-out saturate-[0.4] group-hover:scale-105 group-hover:saturate-100"
                    referrerPolicy="no-referrer"
                  />
                  {/* Spot shadow overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#06080D] via-[#06080D]/20 to-[#06080D]/20 group-hover:bg-gradient-to-t group-hover:from-black/90 group-hover:via-black/40 group-hover:to-transparent transition-all duration-500"></div>
                </div>

                {/* Micro Spotlight Tag at top right */}
                <div className="absolute top-4 right-4 z-20">
                  <span className="font-mono text-[9px] uppercase tracking-wider bg-[#0D1118]/80 backdrop-blur-md text-white border border-white/10 px-2.5 py-1 rounded-full">
                    {item.category}
                  </span>
                </div>

                {/* Descriptive card foot */}
                <div className="absolute bottom-0 inset-x-0 p-6 z-20 flex flex-col justify-end h-1/2 select-none">
                  
                  {/* Mini Meta Date indicator */}
                  <div className="flex items-center gap-1.5 font-mono text-[9px] text-[#E5B93C] mb-2 font-semibold">
                    <Clock className="w-3 h-3 text-[#E5B93C]" />
                    {item.date.toUpperCase()}
                  </div>

                  {/* Title of frame */}
                  <h3 className="font-sans font-bold text-lg text-white leading-snug group-hover:text-[#E5B93C] transition-colors duration-300">
                    {item.title}
                  </h3>

                  {/* Description fade on hover */}
                  <p className="font-sans text-[11px] text-[#D8DEE8]/50 mt-1 line-clamp-2 leading-relaxed transition-opacity duration-300">
                    {item.description}
                  </p>

                  {/* Clean Visual Reveal Indicator */}
                  <div className="mt-3 pt-3 border-t border-white/5 flex items-center justify-between opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <span className="font-mono text-[9px] text-white/55 tracking-[0.2em] flex items-center gap-1.5">
                      <Eye className="w-3 h-3 text-[#E5B93C]" /> EXAMINE ARTIFACT
                    </span>
                    <ZoomIn className="w-3.5 h-3.5 text-white" />
                  </div>

                </div>

                {/* Fine Frame boundary line overlay */}
                <div className="absolute inset-2 border border-white/5 group-hover:border-white/15 rounded-xl pointer-events-none transition-all duration-500"></div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* 3. Breathtaking Light-Box Overlay Modal */}
        <AnimatePresence>
          {selectedItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedItem(null)}
              className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-6"
            >
              {/* Box container */}
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 180 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-[#0D1118] border border-white/15 max-w-4xl w-full rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)] flex flex-col md:flex-row relative"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-4 right-4 z-40 w-8 h-8 rounded-full bg-black/80 border border-white/15 text-white flex items-center justify-center hover:bg-white hover:text-black transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>

                {/* Story Image */}
                <div className="w-full md:w-3/5 bg-black aspect-video md:aspect-square relative flex items-center">
                  <img
                    src={selectedItem.image}
                    alt={selectedItem.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
                </div>

                {/* Story Descriptions Plaque */}
                <div className="w-full md:w-2/5 p-6 md:p-8 flex flex-col justify-between space-y-8 bg-[#0D1118]">
                  <div className="space-y-4">
                    <div className="flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.2em] bg-[#E5B93C]/10 text-[#E5B93C] border border-[#E5B93C]/20 px-2.5 py-1 rounded inline-block">
                      {selectedItem.category}
                    </div>

                    <h4 className="font-sans text-xl md:text-2xl font-bold text-white tracking-tight leading-snug">
                      {selectedItem.title}
                    </h4>

                    <div className="flex items-center gap-2 font-mono text-[10.5px] text-[#D8DEE8]/40 border-b border-white/5 pb-4">
                      <Landmark className="w-3.5 h-3.5 text-emerald-400" />
                      EXHIBIT REF // {selectedItem.id.toUpperCase()} • {selectedItem.date}
                    </div>

                    <p className="font-sans text-xs md:text-sm text-[#D8DEE8]/70 leading-relaxed pt-2">
                      {selectedItem.description}
                    </p>
                    
                    <p className="font-sans text-[11px] text-[#D8DEE8]/50 italic leading-relaxed pt-3 border-t border-white/5">
                      "This community photograph stands as evidence of DCDC members working collaboratively to engineer solution pipelines, emphasizing the club's devotion to permanent creative design."
                    </p>
                  </div>

                  <div className="pt-4 flex items-center justify-between">
                    <span className="font-mono text-[9px] text-white/30 lowercase">
                      DCDC-SRMIST // curation-logs
                    </span>
                    <button
                      onClick={() => setSelectedItem(null)}
                      className="px-4 py-1.5 text-xs font-semibold bg-white text-black hover:bg-white/90 rounded transition-colors cursor-pointer"
                    >
                      Dismiss Frame
                    </button>
                  </div>
                </div>

                {/* Plaque golden border details internally */}
                <div className="absolute top-2 left-2 bottom-2 w-1 border-l border-white/5 hidden md:block"></div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}