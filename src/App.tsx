import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Timeline from './components/Timeline';
import MembershipModal from './components/MembershipModal';
import VaultModal from './components/VaultModal';
import ContactModal from './components/ContactModal';

export default function App() {
  const [isVaultOpen, setIsVaultOpen] = useState(false);
  const [isMembershipOpen, setIsMembershipOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);


  return (
    <div className="min-h-screen bg-[#06080D] text-white selection:bg-[#E5B93C]/30 selection:text-white">
      {/* 1. Global Navigation Bar */}
      <Navbar 
        onVaultClick={() => setIsVaultOpen(true)}
        onContactClick={() => setIsContactOpen(true)}
      />

      {/* 2. Page Sections */}
      <main className="relative flex flex-col w-full">
        {/* Section 1: Hero */}
        <Hero onJoinClick={() => setIsMembershipOpen(true)} />

        {/* Section 2: Legacy in Numbers */}
        <Stats />

        {/* Section 3: Timeline */}
        <Timeline />

      </main>

      {/* 3. Modal Overlays */}
      {/* Project Vault Secures */}
      <VaultModal 
        isOpen={isVaultOpen} 
        onClose={() => setIsVaultOpen(false)} 
      />

      {/* Membership Candidacy registry */}
      <MembershipModal 
        isOpen={isMembershipOpen} 
        onClose={() => setIsMembershipOpen(false)} 
      />

      {/* Cursor Contact Deck */}
      <ContactModal 
        isOpen={isContactOpen} 
        onClose={() => setIsContactOpen(false)} 
      />
    </div>
  );
}