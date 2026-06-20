import { useState, useEffect } from 'react';
import { INITIAL_EVENTS } from '../data/eventsData';
import { EventItem, Registration, Comment } from '../types';

export function useEvents() {
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);

  // Persistence State for Events
  const [events, setEvents] = useState<EventItem[]>(() => {
    const stored = localStorage.getItem('dcdc_events_v2');
    let loadedEvents = INITIAL_EVENTS;
    if (stored) {
      try {
        loadedEvents = JSON.parse(stored);
      } catch (err) {
        console.error('Failed to parse stored events: ', err);
      }
    }
    
    // CLEANSE: Explicitly remove specific user-requested events if they exist in persistence
    return loadedEvents.filter(e => {
      const matchText = (e.title + ' ' + (e.speaker || '') + ' ' + e.id).toLowerCase();
      return !matchText.includes('sudharshan') && !matchText.includes('vignesh');
    });
  });

  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [comments, setComments] = useState<Comment[]>([]);

  // Seed default comments and registrations on initial render
  useEffect(() => {
    // Registrations
    const storedRegs = localStorage.getItem('dcdc_registrations_v1');
    if (storedRegs) {
      setRegistrations(JSON.parse(storedRegs));
    } else {
      const defaultRegs: Registration[] = [
        { id: '1', eventId: 'mar-pcb-design', name: 'Zane Martinez', email: 'zane@mit.edu', role: 'Student', registeredAt: '10:45 AM' },
        { id: '2', eventId: 'mar-idea-forge', name: 'Carla Dubois', email: 'carla@mit.edu', role: 'Research Fellow', registeredAt: '12:20 PM' }
      ];
      localStorage.setItem('dcdc_registrations_v1', JSON.stringify(defaultRegs));
      setRegistrations(defaultRegs);
    }

    // Comments
    const storedComments = localStorage.getItem('dcdc_comments_v1');
    if (storedComments) {
      setComments(JSON.parse(storedComments));
    } else {
      const defaultComments: Comment[] = [
        { id: 'c1', eventId: 'mar-pcb-design', author: 'Siddharth S.', text: 'Will licensing codes for Autodesk or KiCad library downloads be provided?', timestamp: '01:15 PM' },
        { id: 'c2', eventId: 'mar-idea-forge', author: 'Dr. Evelyn Vance', text: 'All teams will get physical staging access to our local lab kits during incubation.', timestamp: '04:10 PM' }
      ];
      localStorage.setItem('dcdc_comments_v1', JSON.stringify(defaultComments));
      setComments(defaultComments);
    }
  }, []);

  // Sync events back to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('dcdc_events_v2', JSON.stringify(events));
  }, [events]);

  // Update persistent database counts when local registers change
  useEffect(() => {
    if (registrations.length > 0) {
      setEvents(prevEvents => {
        const updated = prevEvents.map(ev => {
          const count = registrations.filter(r => r.eventId === ev.id).length;
          const baseline = INITIAL_EVENTS.find(base => base.id === ev.id)?.registeredCount || 0;
          const expectedCount = baseline + count;
          if (ev.registeredCount !== expectedCount) {
            return {
              ...ev,
              registeredCount: expectedCount
            };
          }
          return ev;
        });
        return updated;
      });
    }
  }, [registrations]);

  // Handle registration success
  const handleRegisterSuccess = (eventId: string, newReg: Registration) => {
    const updatedRegs = [...registrations, newReg];
    setRegistrations(updatedRegs);
    localStorage.setItem('dcdc_registrations_v1', JSON.stringify(updatedRegs));
  };

  // Handle adding comments
  const handleAddComment = (eventId: string, newComment: Comment) => {
    const updatedComments = [...comments, newComment];
    setComments(updatedComments);
    localStorage.setItem('dcdc_comments_v1', JSON.stringify(updatedComments));
  };

  return {
    events,
    selectedEvent,
    setSelectedEvent,
    registrations,
    comments,
    handleRegisterSuccess,
    handleAddComment
  };
}
