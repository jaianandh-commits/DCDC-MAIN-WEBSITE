import React from 'react';
import { ContactSection as ContactFormSection } from '../../components/contact/ContactSection';
import { FAQSection } from '../../components/contact/FAQSection';

export default function ContactSection() {
  return (
    <section id="contact" className="w-full bg-[#06080D] font-sans flex flex-col justify-between selection:bg-gold selection:text-navy-900 overflow-x-hidden">
      <div className="flex-grow pt-12 md:pt-16 border-t border-white/5">
        {/* Contact section (Left info + Right form) */}
        <ContactFormSection onNewSubmission={() => {}} />

        {/* FAQ Accordion Section with ivory background */}
        <FAQSection />
      </div>
    </section>
  );
}
