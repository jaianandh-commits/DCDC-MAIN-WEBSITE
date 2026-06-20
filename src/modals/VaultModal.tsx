import { useState } from 'react';
import { X, Lock, ShieldAlert, CheckCircle, Database, Eye, Terminal, Landmark, Cpu, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface VaultModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function VaultModal({ isOpen, onClose }: VaultModalProps) {
  const [passcode, setPasscode] = useState('');
  const [unlocked, setUnlocked] = useState(false);
  const [errorText, setErrorText] = useState('');
  const [activeProject, setActiveProject] = useState<string>('biosynth');

  const handlePasscodeChange = (val: string) => {
    setPasscode(val);
    setErrorText('');
    if (val === '2026' || val === '1918') {
      setUnlocked(true);
    }
  };

  const forceBypass = () => {
    setUnlocked(true);
    setPasscode('BYPASS');
  };

  const projects = [
    {
      id: 'biosynth',
      name: "Acoustic Bio-Synth",
      type: "EPX / HARDWARE RESEARCH",
      year: "2025",
      description: "A high-fidelity hardware setup capturing bio-conductive impedance from plants, mapping electrical shifts to browser synthesizer protocols.",
      blueprint: [
        "SENSORS: Copper-alloy gold contact electrodes with high-conductance impedance grids",
        "PROCESSING: ARM Cortex-M4 microcontroller running floating-point DSP algorithms",
        "AUDIO: Real-time browser Poly-Synth mapped to fluctuating voltage indices"
      ],
      diagram: "┌─[PLANT SENSOR GRID]─┐\n│                     ▼\n│  [ARM CORTEX-M4] ──► [DSP BI-PASS FILTER]\n│                     ▼\n└─► [RAW GATE VOLTAGE] ──► [DYNAMIC OSCILLATOR (AHDSR)]"
    },
    {
      id: 'eventcoordinator',
      name: "SRMIST Event Coordinator",
      type: "PROD / WEB WEB CLIENT",
      year: "2024",
      description: "A secure local on-campus event tracking pipeline utilizing decentralised state distribution for smooth administrative approvals and bookings.",
      blueprint: [
        "ARCHITECURE: Vite + TypeScript paired with custom client-side persistent storage modules",
        "INTERFACE: Glassmorphic high-density grid system supporting ultra-refined touch targeting",
        "SECURITY: RSA-2048 client-signed cryptographic approval envelopes"
      ],
      diagram: "┌─[ACADEMIC DEAN VIEW]─┐\n│                      ▼\n│  [CRYPTO ENVELOPE] ──► [SQUAD REGISTRY SYSTEM]\n│                      ▼\n└─► [SEALED STATE LOG] ──► [LOCAL PREVIEW BUFFER]"
    },
    {
      id: 'carbonui',
      name: "Carbon Design Tokens",
      type: "SPEC / UI LIBRARY",
      year: "2025",
      description: "A dedicated design token glossary and theme package engineered specifically for high-contrast scientific consoles, featuring optimized gray steps.",
      blueprint: [
        "PALETTE: Absolute eye-safe gray steps (Carbon #0D1118, Midnight #06080D, Circuit Gold #E5B93C)",
        "CONTRAST: Verified conformant with WCAG AAA 7.0+:1 typography margins",
        "DYNAMICS: Integrated CSS variables supporting micro-motion focus transitions"
      ],
      diagram: "┌─[PRIMARY: CARBON (#0D1118)]─┐\n│                             ▼\n│  [SECONDARY: MIDNIGHT] ──► [ACCENT CODE: #E5B93C]\n│                             ▼\n└─► [CONTRAST METRIC MATCH: WCAG AAA ENFORCED]"
    }
  ];

  const currentProject = projects.find(p => p.id === activeProject) || projects[0];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-6"
        >
          {/* Main Vault Panel */}
          <motion.div
            initial={{ scale: 0.9, y: 30 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 30 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-[#0D1118] border border-white/10 max-w-4xl w-full rounded-2xl overflow-hidden shadow-[0_0_60px_rgba(0,0,0,0.8)] flex flex-col min-h-[500px]"
          >
            {/* Vault Title Bar */}
            <div className="bg-[#06080D] border-b border-white/5 p-4 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <Database className="w-4.5 h-4.5 text-[#E5B93C] animate-pulse" />
                <div>
                  <h4 className="font-sans font-bold text-sm text-white uppercase tracking-wider">
                    DCDC SECURE VAULT
                  </h4>
                  <p className="font-mono text-[9px] text-white/30 truncate leading-none">
                    MUSEUM SCHEMATIC ARCHIVES // ACCESS_SEALED
                  </p>
                </div>
              </div>
              
              <button
                onClick={onClose}
                className="w-7 h-7 rounded-full bg-white/5 text-white/60 hover:bg-white hover:text-black flex items-center justify-center transition-all cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Locked vs Unlocked Screens */}
            {!unlocked ? (
              /* Security Passcode Bypass Lock screen */
              <div className="flex-1 p-8 flex flex-col items-center justify-center text-center space-y-6 max-w-md mx-auto">
                <div className="w-12 h-12 rounded-full bg-[#FF5A7A]/10 border border-[#FF5A7A]/20 flex items-center justify-center text-[#FF5A7A]">
                  <Lock className="w-5 h-5" />
                </div>

                <div className="space-y-2">
                  <h5 className="font-sans font-bold text-base text-white">
                    Vault Node Enforced
                  </h5>
                  <p className="font-sans text-xs text-[#D8DEE8]/50 leading-relaxed">
                    Access to intellectual engineering Blueprints, hardware wiring diagrams, and library files requires Curator Clearance. Try entering <strong className="text-white font-mono bg-white/5 px-1 rounded">2026</strong>.
                  </p>
                </div>

                <div className="space-y-3 w-full">
                  <input
                    type="password"
                    maxLength={4}
                    placeholder="ENTER 4-DIGIT SECURITY CODE"
                    value={passcode}
                    onChange={(e) => handlePasscodeChange(e.target.value)}
                    className="w-full px-4 py-2.5 bg-[#06080D] border border-white/10 rounded-lg text-center text-sm font-mono tracking-[0.4em] text-white focus:outline-none focus:border-[#E5B93C]/50 transition-all placeholder:tracking-normal placeholder:text-xs"
                  />

                  {errorText && (
                    <span className="font-mono text-[10px] text-[#FF5A7A] flex items-center gap-1 justify-center">
                      <ShieldAlert className="w-3.5 h-3.5" /> {errorText}
                    </span>
                  )}
                  
                  {/* Bypass Shortcut button */}
                  <button
                    onClick={forceBypass}
                    className="w-full py-2.5 text-xs font-semibold text-[#E5B93C] bg-[#E5B93C]/10 hover:bg-[#E5B93C]/20 border border-[#E5B93C]/35 rounded-lg transition-colors cursor-pointer"
                  >
                    Bypass Security Control
                  </button>
                </div>

                <div className="pt-4 border-t border-white/5 w-full text-left flex items-start gap-2">
                  <Terminal className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <p className="font-mono text-[9px] text-[#D8DEE8]/35 leading-relaxed uppercase">
                    SYSTEM STATUS: OFFLINE LOCK • ACCESS GRANTS SECURED UNDER AUDIT RA-DCDC-18
                  </p>
                </div>
              </div>
            ) : (
              /* Dynamic Curated Vault Console */
              <div className="flex-1 flex flex-col lg:flex-row h-full">
                
                {/* Left Drawer Project Selector */}
                <div className="w-full lg:w-1/3 border-b lg:border-b-0 lg:border-r border-white/5 p-4 flex flex-col gap-2 bg-[#06080D]/40">
                  <span className="font-mono text-[9px] text-[#E5B93C] uppercase tracking-[0.2em] font-semibold mb-2 block px-2">
                    PROJECT REGISTRY:
                  </span>

                  {projects.map((proj) => (
                    <button
                      key={proj.id}
                      onClick={() => setActiveProject(proj.id)}
                      className={`w-full text-left p-3 rounded-lg border transition-all cursor-pointer flex items-center justify-between ${
                        activeProject === proj.id
                          ? 'bg-[#2458FF]/10 border-[#2458FF] text-white'
                          : 'bg-[#06080D] border-white/5 text-[#D8DEE8]/60 hover:text-white hover:border-white/15'
                      }`}
                    >
                      <div>
                        <h5 className="font-sans font-bold text-xs leading-snug">
                          {proj.name}
                        </h5>
                        <span className="font-mono text-[8px] tracking-wider text-[#D8DEE8]/40 block mt-0.5">
                          {proj.type}
                        </span>
                      </div>
                      
                      <span className="font-mono text-[9.5px] text-white/40">
                        {proj.year}
                      </span>
                    </button>
                  ))}

                  <div className="mt-auto pt-6 px-2 border-t border-white/5 hidden lg:block">
                    <span className="font-mono text-[8.5px] text-[#D8DEE8]/40 leading-relaxed block uppercase">
                      VAULT KEY RESTRICTION: AUTHENTICATED BY METRICS SQUAD
                    </span>
                  </div>
                </div>

                {/* Right Viewer Board Panel */}
                <div className="w-full lg:w-2/3 p-6 flex flex-col justify-between space-y-6">
                  
                  {/* Top description */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-1.5 font-mono text-[9px] tracking-wider bg-[#2458FF]/10 text-[#2458FF] border border-[#2458FF]/20 px-2 py-0.5 rounded-full inline-block">
                      {currentProject.type}
                    </div>

                    <h4 className="font-sans text-2xl font-bold text-white tracking-tight leading-snug">
                      {currentProject.name}
                    </h4>

                    <p className="font-sans text-xs text-[#D8DEE8]/70 leading-relaxed">
                      {currentProject.description}
                    </p>
                  </div>

                  {/* Retro terminal flowchart schematic */}
                  <div className="space-y-2">
                    <span className="font-mono text-[9px] uppercase tracking-widest text-[#E5B93C] font-semibold block">
                      ARCHIVAL SCHEMATIC FLOWCHART:
                    </span>
                    <pre className="p-4 bg-black border border-white/10 rounded-xl font-mono text-[9.5px] text-green-400 overflow-x-auto leading-normal select-all">
                      {currentProject.diagram}
                    </pre>
                  </div>

                  {/* Curated list requirements */}
                  <div className="space-y-2.5">
                    <span className="font-mono text-[9px] uppercase tracking-widest text-white/40 block">
                      TECHNICAL SPECIFICATIONS / STACKS:
                    </span>
                    
                    <ul className="space-y-1.5 font-sans text-xs text-[#D8DEE8]/60">
                      {currentProject.blueprint.map((bp, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-[#E5B93C] shrink-0 translate-y-[1px]" />
                          <span>{bp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Close or print button */}
                  <div className="pt-4 border-t border-white/5 flex items-center justify-between text-[10px] text-white/30">
                    <span className="font-mono">AUTHORIZATION CODE // bypass_granted</span>
                    <button
                      onClick={() => alert(`Schematics for ${currentProject.name} entered printing local pipeline buffer successfully.`)}
                      className="px-4 py-1.5 bg-[#2458FF] hover:bg-[#2458FF]/90 text-white text-[10.5px] font-semibold rounded cursor-pointer"
                    >
                      Export Specification
                    </button>
                  </div>

                </div>

              </div>
            )}

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}