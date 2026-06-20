import { X, Mail, Phone, MapPin, Landmark, MessageSquare, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 md:p-6"
        >
          {/* Main Container */}
          <motion.div
            initial={{ scale: 0.9, y: 30 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 30 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-[#0D1118]/95 border border-white/10 max-w-md w-full rounded-2xl p-6 md:p-8 relative shadow-[0_0_50px_rgba(0,0,0,0.8)] space-y-6"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/5 pb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded bg-[#FF5A7A]/10 border border-[#FF5A7A]/20 flex items-center justify-center text-[#FF5A7A]">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-base text-white">
                    Contact Curators
                  </h4>
                  <span className="font-mono text-[9px] text-[#D8DEE8]/40 block uppercase">
                    OFFICIAL CORRESPONDENCE GATEWAY
                  </span>
                </div>
              </div>

              <button
                onClick={onClose}
                className="w-7 h-7 rounded-full bg-white/5 text-white/60 hover:bg-white hover:text-black flex items-center justify-center transition-all cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Channels List */}
            <div className="space-y-4">
              <p className="font-sans text-xs text-[#D8DEE8]/60 leading-relaxed">
                Have an inquiry about academic collaborations, design audits, brand sponsorships, or community interactions? Reach out to our official desk below.
              </p>

              {/* Email */}
              <div className="p-4 bg-[#06080D] border border-white/5 rounded-xl flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-[#2458FF]/15 border border-[#2458FF]/30 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-[#2458FF]" />
                </div>
                <div className="space-y-1">
                  <span className="font-mono text-[8px] tracking-wider text-white/30 block uppercase">
                    CURATORIAL OFFICE MAILINDEX
                  </span>
                  <a href="mailto:curator.dcdc@srmist.edu.in" className="font-sans font-bold text-xs text-white hover:text-[#E5B93C] transition-colors">
                    curator.dcdc@srmist.edu.in
                  </a>
                  <p className="text-[10px] text-[#D8DEE8]/45">General coordination, event logs & design submissions.</p>
                </div>
              </div>

              {/* Alternative coordinates */}
              <div className="p-4 bg-[#06080D] border border-white/5 rounded-xl flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-[#E5B93C]/15 border border-[#E5B93C]/30 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-[#E5B93C]" />
                </div>
                <div className="space-y-1">
                  <span className="font-mono text-[8px] tracking-wider text-white/30 block uppercase">
                    SRM SQUAD PHONE
                  </span>
                  <span className="font-sans text-xs text-[#D8DEE8]/80 block font-bold">
                    +91 (044) 2741-7000 / EXT-402
                  </span>
                  <p className="text-[10px] text-[#D8DEE8]/45">Available Mon-Fri during student chapter audit hours.</p>
                </div>
              </div>

              {/* Physical Headquarters */}
              <div className="p-4 bg-[#06080D] border border-white/5 rounded-xl flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-emerald-400/15 border border-emerald-400/30 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-emerald-400" />
                </div>
                <div className="space-y-1">
                  <span className="font-mono text-[8px] tracking-wider text-white/30 block uppercase">
                    PHYSICAL MAKERSPACE
                  </span>
                  <span className="font-sans font-bold text-xs text-white block">
                    Tech Park, Laboratory Node Room TP-604
                  </span>
                  <p className="text-[10px] text-[#D8DEE8]/45">Kattankulathur Campus, SRMIST, Tamil Nadu.</p>
                </div>
              </div>

            </div>

            {/* Note and CTA Close */}
            <div className="p-3 bg-white/[0.02] border border-white/5 rounded-lg flex items-center gap-2">
              <Landmark className="w-4 h-4 text-[#E5B93C] shrink-0" />
              <p className="text-[10.5px] text-[#D8DEE8]/55 font-sans leading-relaxed">
                Visits to the Physical Design Chambers are restricted to approved student delegations and curated gallery guests.
              </p>
            </div>

            <button
              onClick={onClose}
              className="w-full py-2.5 text-xs font-semibold bg-white text-black hover:bg-white/95 rounded-lg transition-colors cursor-pointer"
            >
              Close Communication Board
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}