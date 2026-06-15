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

function App() {
  return (
    <div className="min-h-screen bg-salon-bg text-white">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <CTAStrip />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>

      <Footer />
      <FloatingButtons />
    </div>
  );
}

export default App;
