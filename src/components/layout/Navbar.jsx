import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { brand } from '../../data/siteContent';
import { useScrollSpy } from '../../hooks/useScrollSpy';

const NAV_LINKS = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Offers', href: '#offers' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

const SECTION_IDS = ['hero', 'about', 'services', 'offers', 'gallery', 'testimonials', 'faq', 'contact'];

export const Navbar = ({ onBookNow }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeSection = useScrollSpy(SECTION_IDS);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    if (menuOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleNavClick = (href) => {
    setMenuOpen(false);
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      setTimeout(() => {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-salon-bg/95 backdrop-blur-xl border-b border-gold-luxury/20 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">

            {/* Logo */}
            <a
              href="#hero"
              onClick={(e) => { e.preventDefault(); handleNavClick('#hero'); }}
              className="flex items-center gap-3 flex-shrink-0 group"
              aria-label="Classic Trends Family Salon - Home"
            >
              <div className="relative">
                <img
                  src={brand.logo}
                  alt="Classic Trends Family Salon Logo"
                  className="w-10 h-10 lg:w-12 lg:h-12 object-contain rounded-sm"
                  loading="eager"
                />
              </div>
              <div className="hidden sm:block">
                <p className="font-display text-sm font-bold text-white leading-tight tracking-wide group-hover:text-gold-champagne transition-colors duration-300">
                  CLASSIC TRENDS
                </p>
                <p className="font-body text-[10px] text-gold-luxury tracking-[0.2em] uppercase">
                  Family Salon
                </p>
              </div>
            </a>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.href.replace('#', '');
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                    className={`relative px-3 py-2 font-body text-xs font-medium tracking-widest uppercase transition-colors duration-300 group ${
                      isActive ? 'text-gold-luxury' : 'text-white/70 hover:text-white'
                    }`}
                  >
                    {link.label}
                    <span
                      className={`absolute bottom-0 left-3 right-3 h-px bg-gold-luxury transition-transform duration-300 origin-left ${
                        isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                      }`}
                    />
                  </a>
                );
              })}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={`https://wa.me/919972608740?text=${encodeURIComponent('Hi! I would like to book an appointment at Classic Trends Family Salon.')}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  e.preventDefault();
                  onBookNow?.('Hi! I would like to book an appointment at Classic Trends Family Salon.', 'Book Appointment');
                }}
                className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-gold-dark via-gold-luxury to-gold-dark text-emerald-dark text-xs font-body font-bold tracking-widest uppercase hover:shadow-gold hover:-translate-y-0.5 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-luxury"
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.534 5.857L.057 23.75a.5.5 0 00.614.63l6.094-1.597A11.933 11.933 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.821 9.821 0 01-5.011-1.368l-.36-.213-3.723.976.993-3.62-.233-.372A9.845 9.845 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182S21.818 6.58 21.818 12 17.42 21.818 12 21.818z" />
                </svg>
                Book Now
              </a>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden flex flex-col gap-1.5 p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-luxury"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              <motion.span
                animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                className="block w-6 h-0.5 bg-gold-luxury origin-center transition-all duration-300"
              />
              <motion.span
                animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                className="block w-6 h-0.5 bg-gold-luxury"
              />
              <motion.span
                animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                className="block w-6 h-0.5 bg-gold-luxury origin-center transition-all duration-300"
              />
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm lg:hidden"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-72 bg-salon-bg border-l border-gold-luxury/20 lg:hidden flex flex-col"
            >
              <div className="flex items-center justify-between p-6 border-b border-gold-luxury/20">
                <div>
                  <p className="font-display text-sm font-bold text-white">CLASSIC TRENDS</p>
                  <p className="font-body text-[10px] text-gold-luxury tracking-widest uppercase">Family Salon</p>
                </div>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="text-white/60 hover:text-white text-2xl leading-none"
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              <nav className="flex-1 overflow-y-auto py-6 px-6 space-y-1">
                {NAV_LINKS.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06, duration: 0.3 }}
                    className={`block py-3 px-4 font-body text-sm font-medium tracking-widest uppercase border-b border-white/5 transition-colors duration-200 ${
                      activeSection === link.href.replace('#', '')
                        ? 'text-gold-luxury border-gold-luxury/30'
                        : 'text-white/70 hover:text-gold-luxury'
                    }`}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>

              <div className="p-6 border-t border-gold-luxury/20 space-y-3">
                <a
                  href={`https://wa.me/919972608740?text=${encodeURIComponent('Hi! I would like to book an appointment at Classic Trends Family Salon.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    e.preventDefault();
                    setMenuOpen(false);
                    onBookNow?.('Hi! I would like to book an appointment at Classic Trends Family Salon.', 'Book Appointment');
                  }}
                  className="flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-gold-dark via-gold-luxury to-gold-dark text-emerald-dark font-body font-bold text-sm tracking-widest uppercase"
                >
                  Book Appointment
                </a>
                <a
                  href="tel:9972608740"
                  className="flex items-center justify-center gap-2 w-full py-3 border border-gold-luxury/40 text-gold-luxury font-body font-medium text-sm"
                >
                  📞 Call Now
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
