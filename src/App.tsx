import { useState } from 'react';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';

// Sections
import HomeSection from './sections/HomeSection';
import AboutSection from './sections/AboutSection';
import EventsSection from './sections/EventsSection';
import TeamSection from './sections/TeamSection';
import GallerySection from './sections/GallerySection';
import ContactSection from './sections/ContactSection';

// Modals
import VaultModal from './modals/VaultModal';
import MembershipModal from './modals/MembershipModal';
import ContactModal from './modals/ContactModal';

export default function App() {
  const [isVaultOpen, setIsVaultOpen] = useState(false);
  const [isMembershipOpen, setIsMembershipOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-text selection:bg-primary/30 selection:text-white">
      <Navbar 
        onVaultClick={() => setIsVaultOpen(true)}
        onContactClick={() => setIsContactOpen(true)}
      />

      <main className="relative flex flex-col w-full">
        <HomeSection onJoinClick={() => setIsMembershipOpen(true)} />
        <AboutSection />
        <EventsSection />
        <TeamSection />
        <GallerySection />
        <ContactSection />
      </main>

      <Footer 
        onJoinClick={() => setIsMembershipOpen(true)}
        onExploreProjectsClick={() => setIsVaultOpen(true)}
      />

      <VaultModal 
        isOpen={isVaultOpen} 
        onClose={() => setIsVaultOpen(false)} 
      />

      <MembershipModal 
        isOpen={isMembershipOpen} 
        onClose={() => setIsMembershipOpen(false)} 
      />

      <ContactModal 
        isOpen={isContactOpen} 
        onClose={() => setIsContactOpen(false)} 
      />
    </div>
  );
}