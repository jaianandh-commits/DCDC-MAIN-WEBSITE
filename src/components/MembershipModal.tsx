import { useState, ChangeEvent, FormEvent } from 'react';
import { X, Trophy, Landmark, Send, CheckCircle2, User, Sparkles, AlertCircle, Bookmark } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface MembershipModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MembershipModal({ isOpen, onClose }: MembershipModalProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    regNumber: '',
    domain: 'tech',
    whyJoin: '',
    portfolioUrl: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.regNumber || !formData.email) {
      alert("Please provide human credentials (Name, Registration number, and Email) to enter registration archives.");
      return;
    }
    
    // Generate a beautiful unique ticket Id
    const rand = Math.floor(1000 + Math.random() * 9000);
    setTicketId(`DCDC-2026-${formData.domain.substring(0, 3).toUpperCase()}-${rand}`);
    setSubmitted(true);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 md:p-6"
        >
          {submitted ? (
            /* Admission Certificate Display */
            <motion.div
              initial={{ scale: 0.9, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 30 }}
              className="bg-[#0D1118] border-2 border-[#E5B93C]/30 max-w-xl w-full rounded-2xl p-6 md:p-8 relative overflow-hidden shadow-[0_0_50px_rgba(229,185,60,0.15)] flex flex-col items-center text-center space-y-6"
            >
              {/* Gold lights flowing */}
              <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-transparent via-[#E5B93C] to-transparent"></div>
              
              <div className="w-14 h-14 rounded-full bg-[#E5B93C]/10 border border-[#E5B93C]/30 flex items-center justify-center">
                <Trophy className="w-7 h-7 text-[#E5B93C] animate-bounce" />
              </div>

              <div className="space-y-2">
                <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#E5B93C] font-semibold block">
                  CANDIDACY FILED SUCCESSFULLY
                </span>
                <h3 className="font-sans text-2xl md:text-3xl font-bold text-white tracking-tight">
                  Verification Invite Logged
                </h3>
                <p className="font-sans text-xs text-[#D8DEE8]/60 leading-relaxed max-w-sm">
                  Your credentials have been placed securely in the Curator’s Archive. We have generated your dynamic admission entry ticket below.
                </p>
              </div>

              {/* Real-world ticket graphic */}
              <div 
                className="w-full relative p-6 bg-[#06080D] border border-white/10 rounded-xl space-y-4 text-left font-mono"
                style={{
                  backgroundImage: `
                    radial-gradient(circle at 0px 50%, transparent 12px, #06080D 12px),
                    radial-gradient(circle at 100% 50%, transparent 12px, #06080D 12px)
                  `,
                  backgroundPosition: 'left, right',
                  backgroundSize: '100% 100%'
                }}
              >
                {/* Micro cut indicators */}
                <div className="absolute top-1/2 left-0 right-0 h-[1px] border-b border-dashed border-white/20 -translate-y-1/2"></div>
                
                <div className="flex items-center justify-between text-[10px] text-white/40 pb-5">
                  <span>DCDC ADMISSIONS // INDUCTION TICKET</span>
                  <span className="text-[#E5B93C] font-semibold">TICKET ID: {ticketId}</span>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4 text-xs">
                  <div>
                    <span className="text-[#D8DEE8]/30 text-[9px] block">CANDIDATE NAME</span>
                    <span className="text-white font-semibold uppercase">{formData.fullName}</span>
                  </div>
                  
                  <div>
                    <span className="text-[#D8DEE8]/30 text-[9px] block">REGISTRATION NUMBER</span>
                    <span className="text-white font-semibold uppercase">{formData.regNumber}</span>
                  </div>

                  <div>
                    <span className="text-[#D8DEE8]/30 text-[9px] block">SECURED LAB DISCIPLINE</span>
                    <span className="text-white font-semibold uppercase text-cyan-400">{formData.domain.toUpperCase()}</span>
                  </div>

                  <div>
                    <span className="text-[#D8DEE8]/30 text-[9px] block">CURATOR VERDICT</span>
                    <span className="text-emerald-400 font-bold flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> LOGGED
                    </span>
                  </div>
                </div>

                {/* Simulated barcode */}
                <div className="pt-6 flex flex-col items-center gap-1.5 justify-center select-none opacity-45">
                  <div className="h-6 w-3/4 bg-white/10 flex gap-[2px]">
                    {Array.from({ length: 28 }).map((_, i) => (
                      <div 
                        key={i} 
                        className="h-full bg-white/70" 
                        style={{ width: `${(i % 3 === 0 ? 3 : i % 2 === 0 ? 1 : 2)}px` }}
                      ></div>
                    ))}
                  </div>
                  <span className="text-[8px] tracking-[0.4em] text-white/30">MUSEUM SECURITY ENTRY</span>
                </div>
              </div>

              <div className="flex items-center gap-2 p-3 bg-white/[0.03] border border-white/5 rounded-lg text-left">
                <Bookmark className="w-4 h-4 text-[#FF5A7A] shrink-0" />
                <p className="font-sans text-[10.5px] text-[#D8DEE8]/60 leading-normal">
                  Our recruiting leads will dispatch an official follow-up interview guide to <strong className="text-white">{formData.email}</strong> dynamically within 24–48 collegiate hours. Keep your ticket safe!
                </p>
              </div>

              <div className="flex items-center gap-4 w-full">
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="w-full py-2.5 text-xs font-semibold bg-white text-black hover:bg-white/90 rounded-lg transition-colors cursor-pointer"
                >
                  Return to Exhibition
                </button>
              </div>
            </motion.div>
          ) : (
            /* Traditional Premium Glass Form */
            <motion.div
              initial={{ scale: 0.9, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 30 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0D1118]/95 border border-white/15 max-w-lg w-full rounded-2xl p-6 md:p-8 relative shadow-[0_0_50px_rgba(0,0,0,0.8)] space-y-6"
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b border-white/5 pb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded bg-[#E5B93C]/10 border border-[#E5B93C]/20 flex items-center justify-center">
                    <Landmark className="w-4 h-4 text-[#E5B93C]" />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-lg text-white tracking-tight">
                      Candidacy Archives
                    </h4>
                    <span className="font-mono text-[9px] tracking-wider text-[#D8DEE8]/40 block uppercase">
                      DCDC-SRMIST INDUCTION FORM
                    </span>
                  </div>
                </div>

                <button
                  onClick={onClose}
                  className="w-7 h-7 rounded-full bg-white/5 text-white/60 hover:bg-white hover:text-black hover:scale-105 transition-all flex items-center justify-center cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Form elements */}
              <form onSubmit={handleFormSubmit} className="space-y-4">
                
                {/* Full name */}
                <div className="space-y-1.5">
                  <label className="font-sans font-semibold text-xs text-[#D8DEE8]/70 flex items-center gap-1">
                    <User className="w-3.5 h-3.5 text-[#FF5A7A]" />
                    Full Representative Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    placeholder="e.g. Vicky Raghavan"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 bg-[#06080D] border border-white/10 rounded-lg text-xs text-white placeholder-white/20 focus:outline-none focus:border-[#E5B93C]/50 transition-colors"
                  />
                </div>

                {/* SRMIST registration number & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="font-sans font-semibold text-xs text-[#D8DEE8]/70 flex justify-between">
                      <span>Registration Number</span>
                      <span className="font-mono text-[9px] text-[#E5B93C] uppercase">SRMIST EX: RA2411...</span>
                    </label>
                    <input
                      type="text"
                      name="regNumber"
                      required
                      placeholder="e.g. RA2311025..."
                      value={formData.regNumber}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 bg-[#06080D] border border-white/10 rounded-lg text-xs text-white placeholder-white/20 focus:outline-none focus:border-[#E5B93C]/50 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-sans font-semibold text-xs text-[#D8DEE8]/70">
                      Academic Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="e.g. vr1245@srmist.edu.in"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 bg-[#06080D] border border-white/10 rounded-lg text-xs text-white placeholder-white/20 focus:outline-none focus:border-[#E5B93C]/50 transition-colors"
                    />
                  </div>
                </div>

                {/* Target Domain selection */}
                <div className="space-y-1.5">
                  <label className="font-sans font-semibold text-xs text-[#D8DEE8]/70">
                    Sought Disciplinary Domain (Designated Lab)
                  </label>
                  
                  <select
                    name="domain"
                    value={formData.domain}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 bg-[#06080D] border border-white/10 rounded-lg text-xs text-white focus:outline-none focus:border-[#E5B93C]/50 transition-colors"
                  >
                    <option value="tech">LAB 1: Technology Node (UI, Hardware, Architecture)</option>
                    <option value="design">LAB 2: Design Node (Figma, Visual systems, Layout)</option>
                    <option value="communication">LAB 3: Communication Node (Narrative, Relations)</option>
                    <option value="media">LAB 4: Media Node (Cinematography, Photography)</option>
                    <option value="innovation">LAB 5: Innovation Node (Speculative computation)</option>
                  </select>
                </div>

                {/* Why Join description */}
                <div className="space-y-1.5">
                  <label className="font-sans font-semibold text-xs text-[#D8DEE8]/70">
                    Why is DCDC your sought destination? (Reasoning for joining)
                  </label>
                  <textarea
                    name="whyJoin"
                    required
                    rows={3}
                    placeholder="Describe how you fit the intersection of design, creativity, and technological engineering at DCDC..."
                    value={formData.whyJoin}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 bg-[#06080D] border border-white/10 rounded-lg text-xs text-white placeholder-white/20 focus:outline-none focus:border-[#E5B93C]/50 transition-colors resize-none leading-relaxed"
                  />
                </div>

                {/* Optional Portfolio URL */}
                <div className="space-y-1.5">
                  <label className="font-sans font-semibold text-xs text-[#D8DEE8]/70 flex justify-between">
                    <span>Portfolio / GitHub / Behance Link (Optional)</span>
                    <span className="text-white/30 text-[9px]">e.g. https://...</span>
                  </label>
                  <input
                    type="url"
                    name="portfolioUrl"
                    placeholder="Link to showcase your digital capabilities"
                    value={formData.portfolioUrl}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 bg-[#06080D] border border-white/10 rounded-lg text-xs text-white placeholder-white/20 focus:outline-none focus:border-[#E5B93C]/50 transition-colors"
                  />
                </div>

                {/* Notice text */}
                <div className="p-3 bg-white/[0.02] rounded-lg border border-white/5 flex items-start gap-2 text-left">
                  <AlertCircle className="w-4 h-4 text-[#E5B93C] shrink-0 mt-0.5" />
                  <p className="text-[10px] text-[#D8DEE8]/50 leading-normal">
                    By submitting this application envelope, your candidature becomes a persistent record in local SRMIST chapter audits. Keep your verification ticket safe upon generation.
                  </p>
                </div>

                {/* Actions */}
                <button
                  type="submit"
                  className="w-full py-3 text-xs font-bold bg-[#E5B93C] text-black hover:bg-[#E5B93C]/90 rounded-lg shadow-xl shadow-black/80 transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <Send className="w-3.5 h-3.5" />
                  Submit Candidacy Envelope
                </button>

              </form>
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}