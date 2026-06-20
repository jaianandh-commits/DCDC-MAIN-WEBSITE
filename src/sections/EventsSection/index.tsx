import React from 'react';
import HeaderNav from '../../components/events/HeaderNav';
import EventModal from '../../components/events/EventModal';
import IsometricJourneyView from '../../components/events/IsometricJourneyView';
import Domains from './Domains';
import { useEvents } from '../../hooks/useEvents';

export default function EventsSection() {
  const {
    events,
    selectedEvent,
    setSelectedEvent,
    registrations,
    comments,
    handleRegisterSuccess,
    handleAddComment
  } = useEvents();

  return (
    <section id="events" className="relative w-full bg-[#020e20] text-slate-100 flex flex-col font-sans py-20 min-h-[800px]">
      {/* GLOBAL BACKGROUND NOISE GRID */}
      <div className="absolute inset-0 pointer-events-none z-0 bg-[linear-gradient(to_right,#1e293b12_1px,transparent_1px),linear-gradient(to_bottom,#1e293b08_1px,transparent_1px)] bg-[size:32px_32px]" />
      
      {/* DECORATIVE TOP AURORA LUMINESCENCE */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[300px] bg-sky-500/[0.02] rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute top-32 right-1/4 w-[400px] h-[250px] bg-indigo-500/[0.02] rounded-full blur-[100px] pointer-events-none z-0" />

      <div className="relative z-10 w-full">
        {/* HEADER SECTION for Events */}
        <div className="max-w-7xl mx-auto mb-8 px-4 sm:px-6 lg:px-8">
          <HeaderNav
            currentView="isometric"
            onViewChange={() => {}}
            selectedCategory="All"
            onCategoryChange={() => {}}
          />
        </div>

        {/* MAIN CONTAINER STREAM */}
        <div className="flex-1 flex flex-col relative w-full overflow-x-hidden">
          {/* FIRST SECTION: GORGEOUS INTERACTIVE ISOMETRIC PIPELINE MAP */}
          <IsometricJourneyView
            events={events}
            onSelectEvent={setSelectedEvent}
            selectedCategory="All"
          />
        </div>

        {/* DOMAINS SECTION */}
        <div className="w-full relative z-10 bg-[#06080D]">
          <Domains />
        </div>
      </div>

      {/* EVENT POPUP REGISTRY PANEL */}
      <EventModal
        event={selectedEvent}
        onClose={() => setSelectedEvent(null)}
        onRegisterSuccess={handleRegisterSuccess}
        onAddComment={handleAddComment}
        registrations={registrations}
        comments={comments}
      />
    </section>
  );
}
