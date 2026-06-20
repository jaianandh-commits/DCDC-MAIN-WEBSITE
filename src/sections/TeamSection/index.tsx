import React, { useState } from 'react';
import { teamData } from '../../data/teamData';
import TeamHeroCollage from '../../components/team/TeamHeroCollage';
import TeamGrid from '../../components/team/TeamGrid';
import TeamDetailModal from '../../components/team/TeamDetailModal';

export default function TeamSection() {
  const [selectedMemberId, setSelectedMemberId] = useState<string | null>(null);

  // Derive selected member
  const selectedMember = selectedMemberId 
    ? teamData.find(member => member.id === selectedMemberId) || null 
    : null;

  const handleSelectMember = (id: string) => {
    setSelectedMemberId(id);
  };

  return (
    <section id="team" className="w-full bg-[#151515] font-sans relative text-neutral-300 antialiased py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-gondens mb-6 text-white">Meet the Team</h2>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
            The creative minds and technical wizards behind DCDC.
          </p>
        </div>
      </div>
      
      {/* Section 1: Hero with Custom Rounded Photo Grid */}
      <TeamHeroCollage 
        members={teamData} 
        onSelectMember={handleSelectMember} 
      />

      {/* Section 2: Directory grid listing, search bar & category filters */}
      <TeamGrid 
        members={teamData} 
        onSelectMember={handleSelectMember} 
      />

      {/* Profile details popover modal */}
      <TeamDetailModal 
        member={selectedMember} 
        onClose={() => setSelectedMemberId(null)} 
      />
    </section>
  );
}
