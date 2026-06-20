import { useState } from 'react';
import { MILESTONES } from '../data';
import { Calendar, ArrowRight, ArrowLeft, Lightbulb, UserCheck, Milestone as MilestoneIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Timeline() {
  const [activeStep, setActiveStep] = useState(0);

  const nextStep = () => {
    if (activeStep < MILESTONES.length - 1) setActiveStep(activeStep + 1);
  };

  const prevStep = () => {
    if (activeStep > 0) setActiveStep(activeStep - 1);
  };

  const currentMilestone = MILESTONES[activeStep];

  return (
    <section 
      id="journey" 
      className="relative w-full bg-[#06080D] py-28 md:py-36 border-b border-white/5 overflow-hidden"
    >
      {/* Background radial gradient */}
      <div className="absolute top-0 right-10 w-[45vw] h-[45vh] bg-[#E5B93C]/5 blur-[130px] pointer-events-none rounded-full"></div>
      <div className="absolute bottom-0 left-10 w-[45vw] h-[45vh] bg-[#2458FF]/5 blur-[130px] pointer-events-none rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 space-y-16">
        
        {/* Section Heading */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">

          
          <h2 className="font-sans text-3xl md:text-5xl font-bold tracking-tight text-white">
            The Journey Continues
          </h2>
          
          <p className="font-sans text-xs md:text-sm text-[#D8DEE8]/60 leading-relaxed">
            Travel through the core epochs of DCDC. Follow the path from a modest interest club to an elite hub of creative engineering.
          </p>
        </div>

        {/* 1. Horizontal Historical Stepper Controls */}
        <div className="relative max-w-4xl mx-auto px-4">
          {/* Progress bar line background */}
          <div className="absolute top-1/2 left-0 w-full h-[1.5px] bg-white/10 -translate-y-1/2 rounded-full"></div>
          
          {/* Active Progress line */}
          <div 
            className="absolute top-1/2 left-0 h-[1.5px] bg-gradient-to-r from-[#2458FF] via-[#E5B93C] to-[#FF5A7A] -translate-y-1/2 rounded-full transition-all duration-500"
            style={{ width: `${(activeStep / (MILESTONES.length - 1)) * 100}%` }}
          ></div>

          {/* Chrono nodes */}
          <div className="relative flex justify-between items-center z-10">
            {MILESTONES.map((item, idx) => {
              const isActive = idx === activeStep;
              const isPast = idx < activeStep;
              
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveStep(idx)}
                  className="flex flex-col items-center gap-2.5 outline-none group cursor-pointer"
                >
                  <div 
                    className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-300 relative ${
                      isActive 
                        ? 'bg-white border-white text-black shadow-[0_0_20px_rgba(255,255,255,0.4)] scale-110' 
                        : isPast
                          ? 'bg-[#0D1118] border-[#2458FF] text-[#2458FF]'
                          : 'bg-[#06080D] border-white/20 text-[#D8DEE8]/50 group-hover:border-white/50 group-hover:text-white'
                    }`}
                  >
                    <span className="font-mono text-xs font-bold">
                      0{idx + 1}
                    </span>

                    {/* Miniature Glow ring for active */}
                    {isActive && (
                      <span className="absolute -inset-1.5 rounded-full border border-white/30 animate-ping"></span>
                    )}
                  </div>

                  <span 
                    className={`font-mono text-[10px] md:text-xs font-bold tracking-wider transition-colors duration-300 ${
                      isActive ? 'text-[#E5B93C]' : 'text-[#D8DEE8]/40 group-hover:text-[#D8DEE8]'
                    }`}
                  >
                    {item.year.split(' ')[0]} {/* Grab first word e.g. "2026" */}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 2. Interactive Large Display Exhibition Panel */}
        <div className="relative max-w-5xl mx-auto bg-[#0D1118]/80 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl p-6 md:p-10 overflow-hidden flex flex-col lg:flex-row gap-10 min-h-[460px]">
          
          {/* Subtle blueprint detailing inside frame */}
          <div className="absolute top-4 right-4 pointer-events-none opacity-20 hidden md:block">
            <span className="font-mono text-[9px] text-white bg-white/5 border border-white/15 px-2 py-1 rounded">
              FILE-REF: HIST-DCDC-25
            </span>
          </div>

          {/* Left Block: Image inside curated museum frame */}
          <div className="w-full lg:w-1/2 aspect-[4/3] rounded-xl overflow-hidden bg-black border border-white/10 relative group shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentMilestone.id}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                src={currentMilestone.image}
                alt={currentMilestone.title}
                className="w-full h-full object-cover transition-transform duration-700 saturate-[0.5] group-hover:saturate-100 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </AnimatePresence>
            
            {/* Spotlight Gradient on Frame */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            
            <div className="absolute top-4 left-4 font-mono text-[9.5px] uppercase tracking-[0.2em] bg-black/60 text-[#E5B93C] px-3 py-1 rounded border border-white/10">
              {currentMilestone.tag}
            </div>

            <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
              <span className="font-mono text-[10px] tracking-widest text-[#D8DEE8]/60">
                EXHIBIT IMAGE_REF // 0{activeStep + 1}
              </span>
              <span className="font-sans text-xs bg-[#E5B93C] text-black font-bold px-2 py-0.5 rounded">
                CRITIC'S PICK
              </span>
            </div>
          </div>

          {/* Right Block: Purely Written Editorial Account */}
          <div className="w-full lg:w-1/2 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              
              {/* Year banner with soft spotlight accent */}
              <div className="flex items-center gap-3">
                <span className="font-sans text-4xl font-extrabold tracking-tight text-white leading-none bg-gradient-to-r from-white via-[#D8DEE8] to-[#D8DEE8]/40 bg-clip-text text-transparent">
                  {currentMilestone.year}
                </span>
                <span className="h-0.5 w-12 bg-[#FF5A7A]"></span>
              </div>

              {/* Title & Description of epoch */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentMilestone.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-4"
                >
                  <h3 className="font-sans text-2xl md:text-3xl font-bold text-white tracking-tight leading-tight">
                    {currentMilestone.title}
                  </h3>
                  
                  <p className="font-sans text-sm text-[#D8DEE8]/70 leading-relaxed">
                    {currentMilestone.description}
                  </p>
                </motion.div>
              </AnimatePresence>

            </div>

            {/* Stepper Stepping Controllers */}
            <div className="pt-6 border-t border-white/5 flex items-center justify-between">
              
              {/* Left back */}
              <button
                id="timeline-prev-btn"
                onClick={prevStep}
                disabled={activeStep === 0}
                className={`flex items-center gap-2 px-4 py-2.5 text-xs font-semibold rounded-lg border transition-all cursor-pointer ${
                  activeStep === 0 
                  ? 'border-white/5 text-[#D8DEE8]/20 bg-transparent cursor-not-allowed' 
                  : 'border-white/10 text-[#D8DEE8]/80 hover:text-white hover:bg-white/5 bg-[#06080D]'
                }`}
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                Previous Era
              </button>

              <span className="font-mono text-xs text-[#D8DEE8]/40">
                Corridor {activeStep + 1} of {MILESTONES.length}
              </span>

              {/* Right ahead */}
              <button
                id="timeline-next-btn"
                onClick={nextStep}
                disabled={activeStep === MILESTONES.length - 1}
                className={`flex items-center gap-2 px-4 py-2.5 text-xs font-semibold rounded-lg border transition-all cursor-pointer ${
                  activeStep === MILESTONES.length - 1 
                  ? 'border-white/5 text-[#D8DEE8]/20 bg-transparent cursor-not-allowed' 
                  : 'border-white/10 text-[#D8DEE8]/80 hover:text-white hover:bg-white/5 bg-[#06080D]'
                }`}
              >
                Next Era
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}