import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { faqs, getWhatsAppURL } from '../../data/siteContent';
import { GoldDivider, SectionLabel, SectionHeading, GoldText } from '../ui/SectionHeader';
import { staggerContainer, staggerItem, fadeUp } from '../../utils/motionVariants';

const FAQItem = ({ q, a, isOpen, onToggle, index }) => (
  <motion.div
    variants={staggerItem}
    className={`border-b transition-colors duration-300 ${
      isOpen ? 'border-gold-luxury/30' : 'border-white/10'
    }`}
  >
    <button
      onClick={onToggle}
      className="w-full flex items-center justify-between gap-4 py-5 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-luxury focus-visible:ring-inset"
      aria-expanded={isOpen}
    >
      <div className="flex items-start gap-4">
        <span className="font-body text-xs text-gold-luxury/50 mt-0.5 font-medium flex-shrink-0">
          {String(index + 1).padStart(2, '0')}
        </span>
        <span className={`font-body text-sm font-semibold leading-snug transition-colors duration-300 ${
          isOpen ? 'text-gold-luxury' : 'text-white group-hover:text-gold-champagne'
        }`}>
          {q}
        </span>
      </div>
      <motion.span
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className={`flex-shrink-0 w-7 h-7 border flex items-center justify-center transition-colors duration-300 ${
          isOpen ? 'border-gold-luxury text-gold-luxury' : 'border-white/20 text-white/50 group-hover:border-gold-luxury/50'
        }`}
      >
        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </motion.span>
    </button>

    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden"
        >
          <p className="font-body text-sm text-salon-muted leading-relaxed pb-5 pl-8 md:pl-10">
            {a}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  </motion.div>
);

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const bookURL = getWhatsAppURL('Hi! I have a question about Classic Trends Family Salon services. Can you help me?');

  return (
    <section id="faq" className="relative py-20 md:py-28 bg-salon-bg overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-luxury/20 to-transparent" />
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-gold-luxury/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          className="text-center mb-14"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <SectionLabel>Got Questions?</SectionLabel>
          <SectionHeading className="mb-4">
            Frequently Asked <GoldText>Questions</GoldText>
          </SectionHeading>
          <GoldDivider className="max-w-xs mx-auto" />
        </motion.div>

        <motion.div
          className="border border-white/10 bg-salon-card/30 backdrop-blur-sm divide-y-0 px-4 sm:px-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              {...faq}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-10"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <p className="font-body text-sm text-salon-muted mb-4">
            Still have questions? We're happy to help!
          </p>
          <a
            href={bookURL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 border border-gold-luxury/40 text-gold-luxury font-body font-semibold text-xs tracking-widest uppercase hover:bg-gold-luxury/10 hover:-translate-y-0.5 transition-all duration-300"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.534 5.857L.057 23.75a.5.5 0 00.614.63l6.094-1.597A11.933 11.933 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.821 9.821 0 01-5.011-1.368l-.36-.213-3.723.976.993-3.62-.233-.372A9.845 9.845 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182S21.818 6.58 21.818 12 17.42 21.818 12 21.818z" />
            </svg>
            Ask on WhatsApp
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-luxury/20 to-transparent" />
    </section>
  );
};
