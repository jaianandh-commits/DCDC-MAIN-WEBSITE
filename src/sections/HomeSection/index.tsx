import React from 'react';
import Hero from './Hero';
import Stats from './Stats';
import Timeline from './Timeline';

interface HomeSectionProps {
  onJoinClick: () => void;
}

export default function HomeSection({ onJoinClick }: HomeSectionProps) {
  return (
    <section id="home" className="w-full flex flex-col relative">
      <Hero onJoinClick={onJoinClick} />
      <Stats />
      <Timeline />
    </section>
  );
}
