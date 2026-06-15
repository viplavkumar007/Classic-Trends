import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { brand, hero, getWhatsAppURL } from '../../data/siteContent';
import { heroStagger, heroItem } from '../../utils/motionVariants';

const ScissorIcon = () => (
  <svg className="w-5 h-5 text-gold-luxury" fill="currentColor" viewBox="0 0 24 24">
    <path d="M9.64 7.64c.23-.5.36-1.05.36-1.64 0-2.21-1.79-4-4-4S2 3.79 2 6s1.79 4 4 4c.59 0 1.14-.13 1.64-.36L10 12l-2.36 2.36C7.14 14.13 6.59 14 6 14c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4c0-.59-.13-1.14-.36-1.64L12 14l7 7h3v-1L9.64 7.64zM6 8c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm0 12c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm6-7.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5zM19 3l-6 6 2 2 7-7V3z" />
  </svg>
);

export const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const whatsappBookURL = getWhatsAppURL('Hi! I would like to book an appointment at Classic Trends Family Salon. Please let me know the available slots.');
  const whatsappChatURL = getWhatsAppURL('Hi Classic Trends! I am interested in your salon services. Please share more details.');

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero - Classic Trends Family Salon"
    >
      {/* Animated Background */}
      <motion.div className="absolute inset-0 z-0" style={{ y }}>
        {/* Base dark gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#021F24] via-[#03363D] to-[#021F24]" />

        {/* Decorative geometric lines */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-gold-luxury to-transparent" />
          <div className="absolute top-0 left-2/4 w-px h-full bg-gradient-to-b from-transparent via-gold-luxury to-transparent" />
          <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-gold-luxury to-transparent" />
          <div className="absolute left-0 top-1/3 w-full h-px bg-gradient-to-r from-transparent via-gold-luxury to-transparent" />
          <div className="absolute left-0 top-2/3 w-full h-px bg-gradient-to-r from-transparent via-gold-luxury to-transparent" />
        </div>

        {/* Radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-emerald-deep/40 blur-[120px]" />
        <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] rounded-full bg-gold-luxury/5 blur-[80px]" />
        <div className="absolute bottom-1/3 right-1/3 w-[300px] h-[300px] rounded-full bg-gold-luxury/5 blur-[80px]" />
      </motion.div>

      {/* Gold top bar */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold-luxury to-transparent z-10" />

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16"
        style={{ opacity }}
        variants={heroStagger}
        initial="hidden"
        animate="visible"
      >
        {/* Pre-label */}
        <motion.div variants={heroItem} className="flex items-center justify-center gap-3 mb-8">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-gold-luxury" />
          <span className="text-gold-luxury text-[10px] tracking-[0.4em] uppercase font-body font-medium">
            Premium Family Salon · Penukonda
          </span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-gold-luxury" />
        </motion.div>

        {/* Logo */}
        <motion.div variants={heroItem} className="flex justify-center mb-10">
          <motion.div
            className="relative"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="absolute inset-0 bg-gold-luxury/20 blur-2xl rounded-full scale-150" />
            <img
              src={brand.logo}
              alt="Classic Trends Family Salon"
              className="relative w-32 h-32 md:w-40 md:h-40 object-contain drop-shadow-[0_0_30px_rgba(212,175,55,0.3)]"
              loading="eager"
            />
          </motion.div>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          variants={heroItem}
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-4"
        >
          Where{' '}
          <span className="bg-gradient-to-r from-gold-luxury via-gold-champagne to-gold-luxury bg-clip-text text-transparent">
            Style
          </span>{' '}
          Meets
          <br />
          <em className="not-italic text-white">Perfection</em>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={heroItem}
          className="font-accent text-lg md:text-xl lg:text-2xl text-salon-muted font-light italic mb-10 max-w-2xl mx-auto"
        >
          {hero.subheadline}
        </motion.p>

        {/* Highlights */}
        <motion.div
          variants={heroItem}
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mb-12"
        >
          {hero.highlights.map((h, i) => (
            <span key={i} className="flex items-center gap-2 text-gold-champagne text-sm font-body font-medium">
              <ScissorIcon />
              {h.text}
            </span>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          variants={heroItem}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href={whatsappBookURL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-gold-dark via-gold-luxury to-gold-dark text-emerald-dark font-body font-bold text-sm tracking-widest uppercase hover:shadow-gold-lg hover:-translate-y-1 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-luxury w-full sm:w-auto justify-center"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <span>✦</span>
            Book Appointment
          </motion.a>

          <motion.a
            href={whatsappChatURL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-4 border border-gold-luxury/60 text-gold-luxury font-body font-semibold text-sm tracking-widest uppercase hover:bg-gold-luxury/10 hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto justify-center"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.534 5.857L.057 23.75a.5.5 0 00.614.63l6.094-1.597A11.933 11.933 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.821 9.821 0 01-5.011-1.368l-.36-.213-3.723.976.993-3.62-.233-.372A9.845 9.845 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182S21.818 6.58 21.818 12 17.42 21.818 12 21.818z" />
            </svg>
            WhatsApp Now
          </motion.a>

          <motion.a
            href="tel:9972608740"
            className="flex items-center gap-2 px-8 py-4 border border-white/20 text-white/80 font-body font-semibold text-sm tracking-widest uppercase hover:border-white/50 hover:text-white hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto justify-center"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            📞 Call Now
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          variants={heroItem}
          className="flex flex-col items-center gap-2 mt-16"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <span className="text-gold-luxury/40 text-[10px] tracking-[0.3em] uppercase font-body">Explore</span>
          <div className="w-px h-10 bg-gradient-to-b from-gold-luxury/40 to-transparent" />
        </motion.div>
      </motion.div>

      {/* Bottom gold bar */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-luxury/30 to-transparent" />
    </section>
  );
};
