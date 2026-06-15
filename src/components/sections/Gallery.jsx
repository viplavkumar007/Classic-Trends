import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { galleryTabs, getWhatsAppURL } from '../../data/siteContent';
import { GoldDivider, SectionLabel, SectionHeading, GoldText } from '../ui/SectionHeader';
import { staggerContainer, staggerItem, fadeUp } from '../../utils/motionVariants';

// Gallery placeholder cards with service-themed gradients
const GALLERY_THEMES = [
  { bg: 'from-emerald-deep to-emerald-dark', icon: '✂️' },
  { bg: 'from-[#1a1a4e] to-emerald-dark', icon: '💇‍♀️' },
  { bg: 'from-[#2d1a00] to-emerald-dark', icon: '🎨' },
  { bg: 'from-emerald-dark to-[#1a1a4e]', icon: '✨' },
  { bg: 'from-[#1a0000] to-emerald-dark', icon: '🌸' },
  { bg: 'from-[#1a1a00] to-emerald-dark', icon: '👰' },
];

const GalleryCard = ({ index, tab }) => {
  const theme = GALLERY_THEMES[index % GALLERY_THEMES.length];
  const waURL = getWhatsAppURL(`Hi Classic Trends! I love your work on ${tab}. I would like to book a similar service. Please let me know the details.`);

  return (
    <motion.div
      variants={staggerItem}
      className={`relative aspect-square bg-gradient-to-br ${theme.bg} border border-gold-luxury/15 group overflow-hidden cursor-pointer`}
      onClick={() => window.open(waURL, '_blank')}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border border-gold-luxury" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full border border-gold-luxury" />
      </div>

      {/* Gold overlay on hover */}
      <div className="absolute inset-0 bg-gold-luxury/0 group-hover:bg-gold-luxury/10 transition-all duration-300" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-4xl mb-3 group-hover:scale-125 transition-transform duration-300">{theme.icon}</span>
        <p className="font-body text-xs text-white/40 group-hover:text-gold-luxury/80 transition-colors duration-300 text-center px-3">
          {tab}
        </p>
      </div>

      {/* Book overlay */}
      <div className="absolute inset-0 flex items-end justify-center pb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="bg-gold-luxury/90 text-emerald-dark text-[10px] font-bold tracking-widest uppercase px-3 py-1.5">
          Book This →
        </span>
      </div>

      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-gold-luxury/30 group-hover:border-gold-luxury/60 transition-colors duration-300" />
      <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-gold-luxury/30 group-hover:border-gold-luxury/60 transition-colors duration-300" />
    </motion.div>
  );
};

export const Gallery = () => {
  const [activeTab, setActiveTab] = useState(galleryTabs[0]);

  return (
    <section id="gallery" className="relative py-20 md:py-28 bg-salon-bg overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-luxury/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-deep/30 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          className="text-center mb-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <SectionLabel>Our Work</SectionLabel>
          <SectionHeading className="mb-4">
            Style <GoldText>Gallery</GoldText>
          </SectionHeading>
          <GoldDivider className="max-w-xs mx-auto mb-4" />
          <p className="font-body text-sm text-salon-muted max-w-md mx-auto">
            Real transformations from our skilled stylists. Click any photo to book a similar service.
          </p>
        </motion.div>

        {/* Tab pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {galleryTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 font-body text-xs font-medium tracking-wide transition-all duration-300 ${
                activeTab === tab
                  ? 'bg-gold-luxury text-emerald-dark font-bold'
                  : 'border border-white/20 text-white/60 hover:text-white hover:border-gold-luxury/40'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {Array.from({ length: 8 }).map((_, i) => (
              <GalleryCard key={i} index={i} tab={activeTab} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Instagram CTA */}
        <motion.div
          className="text-center mt-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <p className="font-body text-sm text-salon-muted mb-4">
            Follow us on Instagram for daily style inspiration and latest work
          </p>
          <a
            href="https://www.instagram.com/classictrendsss"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 border border-gold-luxury/40 text-gold-luxury font-body font-semibold text-sm tracking-widest uppercase hover:bg-gold-luxury/10 hover:-translate-y-0.5 hover:border-gold-luxury transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
            Follow @classictrendsss
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-luxury/20 to-transparent" />
    </section>
  );
};
