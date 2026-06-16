import { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Services } from './components/sections/Services';
import { Gallery } from './components/sections/Gallery';
import { Testimonials } from './components/sections/Testimonials';
import { FAQ } from './components/sections/FAQ';
import { Contact } from './components/sections/Contact';
import { CTAStrip } from './components/sections/CTAStrip';
import { FloatingButtons } from './components/ui/FloatingButtons';
import { BookingLeadModal } from './components/ui/BookingLeadModal';
import { getWhatsAppURL } from './data/siteContent';

function App() {
  const [bookingLead, setBookingLead] = useState(null);

  const handleBookNow = (message, title = 'Book Appointment') => {
    setBookingLead({ message, title });
  };

  const handleLeadSubmit = (message) => {
    window.open(getWhatsAppURL(message), '_blank');
    setBookingLead(null);
  };

  return (
    <div className="min-h-screen bg-salon-bg text-white">
      <BookingLeadModal lead={bookingLead} onClose={() => setBookingLead(null)} onSubmit={handleLeadSubmit} />
      <Navbar onBookNow={handleBookNow} />

      <main>
        <Hero onBookNow={handleBookNow} />
        <About onBookNow={handleBookNow} />
        <Services />
        <Gallery />
        <CTAStrip onBookNow={handleBookNow} />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>

      <Footer />
      <FloatingButtons onBookNow={handleBookNow} />
    </div>
  );
}

export default App;
