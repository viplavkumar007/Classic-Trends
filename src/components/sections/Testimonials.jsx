import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { testimonials } from '../../data/siteContent';
import { GoldDivider, SectionLabel, SectionHeading, GoldText } from '../ui/SectionHeader';
import { staggerContainer, staggerItem, fadeUp } from '../../utils/motionVariants';

const StarRating = ({ rating }) => (
  <div className="flex gap-0.5" aria-label={`Rating: ${rating} out of 5`}>
    {Array.from({ length: 5 }).map((_, i) => (
      <span key={i} className={`text-sm ${i < rating ? 'text-gold-luxury' : 'text-white/20'}`}>★</span>
    ))}
  </div>
);

const TestimonialCard = ({ name, role, rating, text, service, avatar }) => (
  <motion.div
    className="relative flex-shrink-0 w-full sm:w-80 md:w-96 border border-gold-luxury/20 bg-salon-card/60 backdrop-blur-md p-6 md:p-8 group hover:border-gold-luxury/40 transition-all duration-300"
    whileHover={{ y: -4 }}
  >
    {/* Quote mark */}
    <div className="absolute top-4 right-6 font-display text-6xl text-gold-luxury/10 leading-none select-none">"</div>

    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-luxury to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-300" />

    {/* Avatar + Info */}
    <div className="flex items-center gap-4 mb-5">
      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-gold-dark to-gold-luxury flex items-center justify-center">
        <span className="font-display text-sm font-bold text-emerald-dark">{avatar}</span>
      </div>
      <div>
        <p className="font-body text-sm font-bold text-white">{name}</p>
        <p className="font-body text-xs text-salon-muted">{role}</p>
      </div>
    </div>

    <StarRating rating={rating} />

    <blockquote className="font-body text-sm text-white/75 leading-relaxed mt-4 mb-5">
      "{text}"
    </blockquote>

    <div className="flex items-center gap-2">
      <div className="w-1 h-3 bg-gold-luxury" />
      <span className="font-body text-[10px] text-gold-luxury tracking-widest uppercase">{service}</span>
    </div>
  </motion.div>
);

export const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 5000);
    return () => clearInterval(timer);
  }, [total]);

  return (
    <section id="testimonials" className="relative py-20 md:py-28 bg-gradient-to-b from-[#021a1f] to-salon-bg overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-luxury/20 to-transparent" />

      {/* Decorative bg */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-gold-luxury/3 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          className="text-center mb-14"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <SectionLabel>Client Love</SectionLabel>
          <SectionHeading className="mb-4">
            What Our <GoldText>Clients Say</GoldText>
          </SectionHeading>
          <GoldDivider className="max-w-xs mx-auto" />
        </motion.div>

        {/* Desktop grid */}
        <motion.div
          className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {testimonials.map((t, i) => (
            <motion.div key={i} variants={staggerItem}>
              <TestimonialCard {...t} />
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile slider */}
        <div className="md:hidden">
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                transition={{ duration: 0.4 }}
              >
                <TestimonialCard {...testimonials[current]} />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`transition-all duration-300 ${
                  i === current ? 'w-6 h-1 bg-gold-luxury' : 'w-1 h-1 bg-white/30'
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Rating summary */}
        <motion.div
          className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          {[
            { value: '4.9★', label: 'Average Rating' },
            { value: '5000+', label: 'Happy Clients' },
            { value: '100%', label: 'Satisfaction Rate' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <p className="font-display text-3xl font-bold text-gold-luxury">{stat.value}</p>
              <p className="font-body text-xs text-salon-muted tracking-widest uppercase mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-luxury/20 to-transparent" />
    </section>
  );
};
