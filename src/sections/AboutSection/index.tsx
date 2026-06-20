import React, { useRef, useState, useEffect } from "react";
import BackgroundGlows from "../../components/about/BackgroundGlows";
import VisionCard from "../../components/about/VisionCard";
import MissionCard from "../../components/about/MissionCard";
import LegacyCard from "../../components/about/LegacyCard";
import WorkshopsCard from "../../components/about/WorkshopsCard";
import DesignChallengesCard from "../../components/about/DesignChallengesCard";
import IndustryConnectCard from "../../components/about/IndustryConnectCard";
import { Sparkles, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export default function AboutSection() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const carouselCards = [
    { id: "mission", component: <MissionCard className="h-[445px] w-full" /> },
    { id: "vision", component: <VisionCard className="h-[445px] w-full" /> },
    { id: "legacy", component: <LegacyCard className="h-[395px] w-full" /> },
    { id: "workshops", component: <WorkshopsCard className="h-[395px] w-full" /> },
    { id: "challenges", component: <DesignChallengesCard className="h-[395px] w-full" /> },
    { id: "connect", component: <IndustryConnectCard className="h-[395px] w-full" /> },
  ];

  const handleScroll = () => {
    if (!carouselRef.current) return;
    const container = carouselRef.current;
    const children = container.children;
    const containerCenter = container.scrollLeft + container.offsetWidth / 2;

    let minDistance = Infinity;
    let currentActive = 0;

    for (let i = 0; i < children.length; i++) {
      const child = children[i] as HTMLElement;
      if (!child.classList.contains("carousel-slide")) continue;

      const childCenter = child.offsetLeft + child.offsetWidth / 2;
      const distance = Math.abs(containerCenter - childCenter);
      if (distance < minDistance) {
        minDistance = distance;
        const indexAttr = child.getAttribute("data-index");
        if (indexAttr !== null) {
          currentActive = parseInt(indexAttr, 10);
        }
      }
    }
    setActiveIndex(currentActive);
  };

  const scrollToCard = (index: number) => {
    if (!carouselRef.current) return;
    const container = carouselRef.current;
    const children = Array.from(container.children).filter(child =>
      (child as HTMLElement).classList.contains("carousel-slide")
    );
    if (children[index]) {
      const child = children[index] as HTMLElement;
      const targetScroll = child.offsetLeft - (container.offsetWidth - child.offsetWidth) / 2;
      container.scrollTo({
        left: targetScroll,
        behavior: "smooth"
      });
      setActiveIndex(index);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      handleScroll();
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="about" className="relative w-full bg-transparent text-slate-100 overflow-hidden py-24">
      {/* Premium Background Grid & Halo Glow Layer */}
      <BackgroundGlows />

      {/* Main Container Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Title, Subtitle, and Logo Container */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 lg:gap-16 mb-16 sm:mb-20 relative z-20">
          
          {/* Left Block: Text Content */}
          <div className="max-w-[700px] space-y-6 text-left flex-grow">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#131A24]/65 border border-white/10 text-xs font-mono font-bold text-accent-blue tracking-wider uppercase backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-accent-gold animate-pulse" />
              <span>ABOUT DCDC</span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-[62px] font-extrabold font-display tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white via-[#D8DEE8] to-slate-400 leading-[1.08] text-balance">
              Where Communication,<br className="hidden sm:inline" />
              Creativity and Technology<br className="hidden sm:inline" />
              Come Together.
            </h2>

            <p className="text-lg sm:text-[20px] text-slate-300 leading-relaxed font-sans font-medium">
              A student-driven community empowering future innovators through design, communication, collaboration and digital experiences.
            </p>
          </div>

          {/* Right Block: Pure Floating Logo integrated into the environment with PCB pathways */}
          <div className="relative flex justify-center lg:justify-end items-center lg:shrink-0 w-full lg:w-auto lg:pr-12 md:pr-6">
            <div className="absolute w-[240px] h-[240px] sm:w-[280px] sm:h-[280px] rounded-full bg-[#2458FF]/15 blur-[60px] pointer-events-none" />
            <div className="absolute w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] rounded-full bg-[#E5B93C]/8 blur-[50px] pointer-events-none" />
            
            <svg 
              className="absolute w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] pointer-events-none z-0" 
              viewBox="0 0 300 300" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="150" cy="150" r="110" stroke="#2458FF" strokeWidth="0.75" strokeOpacity="0.15" />
              <circle cx="150" cy="150" r="95" stroke="#E5B93C" strokeWidth="1" strokeOpacity="0.25" strokeDasharray="6 8" className="animate-[spin_40s_linear_infinite]" />
              <circle cx="150" cy="148" r="75" stroke="#2458FF" strokeWidth="1.2" strokeOpacity="0.30" strokeDasharray="30 15" className="animate-[spin_25s_linear_infinite_reverse]" />
              <circle cx="150" cy="150" r="55" stroke="#FF5A7A" strokeWidth="0.75" strokeOpacity="0.15" strokeDasharray="2 10" />

              <path d="M 20 60 L 95 60 L 115 115 L 132 128" stroke="#2458FF" strokeWidth="1.2" strokeOpacity="0.4" fill="none" />
              <path d="M 20 60 L 95 60 L 115 115 L 132 128" stroke="#E5B93C" strokeWidth="1.5" strokeOpacity="0.85" fill="none" className="animate-signal-flow-blue" />
              <circle cx="20" cy="60" r="3" fill="#E5B93C" />
              <circle cx="95" cy="60" r="2" fill="#2458FF" />

              <path d="M 30 240 L 110 240 L 125 185 L 134 168" stroke="#2458FF" strokeWidth="1.2" strokeOpacity="0.4" fill="none" />
              <path d="M 30 240 L 110 240 L 125 185 L 134 168" stroke="white" strokeWidth="1.2" strokeOpacity="0.75" fill="none" className="animate-signal-flow-gold" />
              <circle cx="30" cy="240" r="3" fill="#2458FF" />
              <circle cx="110" cy="240" r="2" fill="#E5B93C" />

              <path d="M 280 70 L 205 70 L 185 110 L 168 128" stroke="#E5B93C" strokeWidth="1" strokeOpacity="0.35" fill="none" />
              <path d="M 280 70 L 205 70 L 185 110 L 168 128" stroke="#2458FF" strokeWidth="1.5" strokeOpacity="0.8" fill="none" className="animate-signal-flow-blue" />
              <circle cx="280" cy="70" r="3" fill="#2458FF" />

              <path d="M 270 230 L 195 230 L 178 185 L 166 168" stroke="#2458FF" strokeWidth="1.2" strokeOpacity="0.4" fill="none" />
              <circle cx="270" cy="230" r="3" fill="#E5B93C" />

              <line x1="150" y1="0" x2="150" y2="35" stroke="#E5B93C" strokeWidth="0.75" strokeOpacity="0.3" strokeDasharray="3 3" />
              <line x1="150" y1="265" x2="150" y2="300" stroke="#2458FF" strokeWidth="0.75" strokeOpacity="0.3" strokeDasharray="3 3" />
            </svg>

            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 15 }}
              animate={{ 
                opacity: 1, 
                scale: 1, 
                y: [0, -8, 0],
              }}
              transition={{
                opacity: { duration: 0.8, ease: "easeOut" },
                scale: { duration: 0.8, ease: "easeOut" },
                y: {
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
              className="relative flex items-center justify-center w-36 h-36 sm:w-44 sm:h-44 lg:w-52 lg:h-52 group/logo cursor-pointer select-none z-10"
            >
              <motion.img
                src="https://lh3.googleusercontent.com/d/1D611EDsa0bt1OLlzfVWLxtVmxB1FA9YT"
                alt="DCDC Logo"
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain filter drop-shadow-[0_0_35px_rgba(36,88,255,0.45)] drop-shadow-[0_0_15px_rgba(229,185,60,0.25)] group-hover/logo:scale-105 group-hover/logo:rotate-[3deg] transition-all duration-500 ease-out"
              />
            </motion.div>
          </div>
        </div>

        {/* Bento Grid & Carousel */}
        <div className="relative mb-24">
          <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-[#2458FF]/10 blur-[100px] pointer-events-none z-0" />
          <div className="absolute bottom-[30%] right-1/4 translate-x-1/2 translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#E5B93C]/5 blur-[130px] pointer-events-none z-0" />
          
          <div className="hidden md:grid relative z-10 w-full mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-[14px] items-stretch pt-4 pb-12">
            <section className="col-span-1 md:col-span-1 lg:col-span-8 flex flex-col justify-stretch">
              <MissionCard className="h-[400px] md:h-[420px] lg:h-[445px] w-full" />
            </section>
            <section className="col-span-1 md:col-span-1 lg:col-span-4 flex flex-col justify-stretch">
              <VisionCard className="h-[400px] md:h-[420px] lg:h-[445px] w-full" />
            </section>
            <section className="col-span-1 md:col-span-1 lg:col-span-6 flex flex-col justify-stretch">
              <LegacyCard className="h-[350px] md:h-[370px] lg:h-[395px] w-full" />
            </section>
            <section className="col-span-1 md:col-span-1 lg:col-span-6 flex flex-col justify-stretch">
              <WorkshopsCard className="h-[350px] md:h-[370px] lg:h-[395px] w-full" />
            </section>
            <section className="col-span-1 md:col-span-1 lg:col-span-6 flex flex-col justify-stretch">
              <DesignChallengesCard className="h-[350px] md:h-[370px] lg:h-[395px] w-full" />
            </section>
            <section className="col-span-1 md:col-span-1 lg:col-span-6 flex flex-col justify-stretch">
              <IndustryConnectCard className="h-[350px] md:h-[370px] lg:h-[395px] w-full" />
            </section>
          </div>

          <div className="md:hidden relative z-10 w-full pt-4 pb-12 flex flex-col items-center">
            <div
              ref={carouselRef}
              onScroll={handleScroll}
              className="w-full flex gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-6 scrollbar-none"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                paddingLeft: "calc((100% - min(88vw, 440px)) / 2)",
                paddingRight: "calc((100% - min(88vw, 440px)) / 2)",
              }}
            >
              {carouselCards.map((card, idx) => (
                <div
                  key={card.id}
                  data-index={idx}
                  onClick={() => scrollToCard(idx)}
                  className="carousel-slide snap-center shrink-0 transition-all duration-300 ease-out cursor-pointer"
                  style={{
                    width: "min(88vw, 440px)",
                    transform: activeIndex === idx ? "scale(1)" : "scale(0.94)",
                    opacity: activeIndex === idx ? 1.0 : 0.45,
                  }}
                >
                  {card.component}
                </div>
              ))}
            </div>
            <div className="flex justify-center items-center gap-2.5 mt-4">
              {carouselCards.map((card, idx) => (
                <button
                  key={`dot-${card.id}`}
                  onClick={() => scrollToCard(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeIndex === idx
                      ? "w-8 bg-violet-500"
                      : "w-2.5 bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}