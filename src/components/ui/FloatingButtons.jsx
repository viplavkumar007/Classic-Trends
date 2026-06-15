import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getWhatsAppURL } from '../../data/siteContent';

export const FloatingButtons = () => {
  const [visible, setVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(null);

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 200);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const waURL = getWhatsAppURL('Hi Classic Trends! I would like to book an appointment. Please share available slots.');
  const bookURL = getWhatsAppURL('Hi! I want to book an appointment at Classic Trends Family Salon. Please confirm my slot.');

  const buttons = [
    {
      id: 'whatsapp',
      label: 'WhatsApp',
      href: waURL,
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.534 5.857L.057 23.75a.5.5 0 00.614.63l6.094-1.597A11.933 11.933 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.821 9.821 0 01-5.011-1.368l-.36-.213-3.723.976.993-3.62-.233-.372A9.845 9.845 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182S21.818 6.58 21.818 12 17.42 21.818 12 21.818z" />
        </svg>
      ),
      color: 'bg-[#25D366] hover:bg-[#1da851]',
      ping: true,
    },
    {
      id: 'call',
      label: 'Call Now',
      href: 'tel:9972608740',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
        </svg>
      ),
      color: 'bg-gold-luxury hover:bg-gold-dark',
      textColor: 'text-emerald-dark',
      ping: false,
    },
    {
      id: 'instagram',
      label: 'Instagram',
      href: 'https://www.instagram.com/classictrendsss',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>
      ),
      color: 'bg-gradient-to-br from-[#f09433] via-[#e6683c] via-[#dc2743] via-[#cc2366] to-[#bc1888] hover:opacity-90',
      ping: false,
    },
    {
      id: 'book',
      label: 'Book Now',
      href: bookURL,
      icon: <span className="text-sm">✦</span>,
      color: 'bg-gradient-to-r from-gold-dark via-gold-luxury to-gold-dark hover:shadow-gold',
      textColor: 'text-emerald-dark',
      ping: false,
    },
  ];

  return (
    <AnimatePresence>
      {visible && (
        <div
          className="fixed bottom-6 right-4 z-50 flex flex-col gap-3"
          role="complementary"
          aria-label="Quick contact buttons"
        >
          {buttons.map((btn, i) => (
            <motion.div
              key={btn.id}
              initial={{ opacity: 0, scale: 0, x: 60 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0, x: 60 }}
              transition={{ delay: i * 0.06, type: 'spring', stiffness: 300, damping: 25 }}
              className="relative"
              onMouseEnter={() => setShowTooltip(btn.id)}
              onMouseLeave={() => setShowTooltip(null)}
            >
              {/* Tooltip */}
              <AnimatePresence>
                {showTooltip === btn.id && (
                  <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    className="absolute right-14 top-1/2 -translate-y-1/2 bg-salon-bg border border-gold-luxury/30 text-white text-xs font-body px-3 py-1.5 whitespace-nowrap pointer-events-none shadow-card"
                  >
                    {btn.label}
                    <div className="absolute right-[-5px] top-1/2 -translate-y-1/2 w-2 h-2 bg-salon-bg border-r border-t border-gold-luxury/30 rotate-45" />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Ping animation for WhatsApp */}
              {btn.ping && (
                <span className="absolute -top-1 -right-1 flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-[#25D366]" />
                </span>
              )}

              <motion.a
                href={btn.href}
                target={btn.href.startsWith('http') ? '_blank' : undefined}
                rel={btn.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`flex items-center justify-center w-12 h-12 rounded-full shadow-card ${btn.color} ${btn.textColor || 'text-white'} transition-all duration-300`}
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.9 }}
                aria-label={btn.label}
              >
                {btn.icon}
              </motion.a>
            </motion.div>
          ))}
        </div>
      )}
    </AnimatePresence>
  );
};
