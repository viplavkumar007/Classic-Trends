import { motion } from 'framer-motion';
import { about, whyUs } from '../../data/siteContent';
import { staggerContainer, staggerItem, fadeUp, slideInLeft, slideInRight } from '../../utils/motionVariants';
import { GoldDivider, SectionLabel, SectionHeading, GoldText } from '../ui/SectionHeader';

const StatCard = ({ value, label, index }) => (
  <motion.div
    variants={staggerItem}
    className="text-center p-6 border border-gold-luxury/20 bg-salon-card/50 backdrop-blur-sm relative group hover:border-gold-luxury/40 transition-all duration-300"
  >
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-luxury to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    <p className="font-display text-3xl md:text-4xl font-bold text-gold-luxury mb-1">{value}</p>
    <p className="font-body text-xs text-salon-muted tracking-widest uppercase">{label}</p>
  </motion.div>
);

const WhyCard = ({ icon, title, desc, index }) => (
  <motion.div
    variants={staggerItem}
    className="flex items-start gap-4 p-5 border border-white/5 bg-salon-card/30 backdrop-blur-sm rounded-sm group hover:border-gold-luxury/30 hover:bg-salon-card/60 transition-all duration-300"
  >
    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center border border-gold-luxury/30 text-xl group-hover:border-gold-luxury/60 group-hover:bg-gold-luxury/5 transition-all duration-300">
      {icon}
    </div>
    <div>
      <h3 className="font-body text-sm font-semibold text-white mb-1 tracking-wide">{title}</h3>
      <p className="font-body text-xs text-salon-muted leading-relaxed">{desc}</p>
    </div>
  </motion.div>
);

export const About = () => (
  <section id="about" className="relative py-20 md:py-28 bg-salon-bg overflow-hidden">
    {/* Decorative background */}
    <div className="absolute top-0 right-0 w-96 h-96 bg-gold-luxury/3 rounded-full blur-3xl" />
    <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-deep/50 rounded-full blur-3xl" />
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-luxury/20 to-transparent" />

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      {/* Stats */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {about.stats.map((s, i) => (
          <StatCard key={i} {...s} index={i} />
        ))}
      </motion.div>

      {/* Two-column layout */}
      <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start mb-20">

        {/* Left - Story */}
        <motion.div
          variants={slideInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <SectionLabel>Our Story</SectionLabel>
          <SectionHeading className="mb-4">
            About <GoldText>Classic Trends</GoldText>
          </SectionHeading>
          <GoldDivider className="mb-8 max-w-xs" />
          <p className="font-body text-salon-muted leading-relaxed mb-6 text-sm md:text-base">
            {about.story}
          </p>
          <p className="font-accent text-base italic text-gold-champagne leading-relaxed border-l-2 border-gold-luxury/40 pl-4">
            "{about.mission}"
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href={`https://wa.me/919972608740?text=${encodeURIComponent('Hi! I would like to book an appointment at Classic Trends Family Salon.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-7 py-3.5 bg-gradient-to-r from-gold-dark via-gold-luxury to-gold-dark text-emerald-dark font-body font-bold text-xs tracking-widest uppercase hover:shadow-gold hover:-translate-y-0.5 transition-all duration-300"
            >
              ✦ Book Appointment
            </a>
            <a
              href="tel:9972608740"
              className="flex items-center justify-center gap-2 px-7 py-3.5 border border-gold-luxury/40 text-gold-luxury font-body font-semibold text-xs tracking-widest uppercase hover:bg-gold-luxury/10 transition-all duration-300"
            >
              📞 Call Us
            </a>
          </div>
        </motion.div>

        {/* Right - Why Choose Us */}
        <motion.div
          variants={slideInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <SectionLabel>Why Classic Trends</SectionLabel>
          <SectionHeading className="mb-4">
            Why <GoldText>Choose Us</GoldText>
          </SectionHeading>
          <GoldDivider className="mb-8 max-w-xs" />

          <motion.div
            className="grid grid-cols-1 gap-3"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {whyUs.map((item, i) => (
              <WhyCard key={i} {...item} index={i} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>

    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-luxury/20 to-transparent" />
  </section>
);
