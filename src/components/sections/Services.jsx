import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  mensServices, mensComboOffers,
  womensServices, advancedHairServices,
  makeupServices, mehendiServices,
  hairSpaServices, hairWashStyling, skinCare,
  womensPackages,
  getServiceWhatsAppURL, getWhatsAppURL
} from '../../data/siteContent';
import { staggerContainer, staggerItem, fadeUp } from '../../utils/motionVariants';
import { GoldDivider, SectionLabel, SectionHeading, GoldText } from '../ui/SectionHeader';

// ─── SERVICE ROW ─────────────────────────────────────────────
const ServiceRow = ({ name, price, priceRange }) => {
  const displayPrice = price ? `₹${price}` : priceRange;
  const waURL = getServiceWhatsAppURL(name, price);

  return (
    <motion.div
      variants={staggerItem}
      className="group flex items-center justify-between py-3 px-4 border-b border-white/5 hover:bg-gold-luxury/5 hover:border-gold-luxury/20 transition-all duration-200 cursor-pointer"
      onClick={() => window.open(waURL, '_blank')}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && window.open(waURL, '_blank')}
      title={`Book ${name}`}
      aria-label={`Book ${name} — ${displayPrice}`}
    >
      <span className="font-body text-sm text-white/80 group-hover:text-white transition-colors pr-4">
        {name}
      </span>
      <div className="flex items-center gap-3 flex-shrink-0">
        <span className="font-body text-sm font-semibold text-gold-luxury">{displayPrice}</span>
        <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-green-400 text-xs">
          Book →
        </span>
      </div>
    </motion.div>
  );
};

// ─── SERVICE CATEGORY ─────────────────────────────────────────
const ServiceCategory = ({ title, items, subsections }) => (
  <div className="border border-white/10 bg-salon-card/40 backdrop-blur-sm rounded-sm overflow-hidden">
    <div className="px-4 py-3 bg-emerald-deep/50 border-b border-gold-luxury/20 flex items-center gap-2">
      <div className="w-1 h-4 bg-gold-luxury" />
      <h4 className="font-body text-xs font-bold text-gold-luxury tracking-widest uppercase">{title}</h4>
    </div>
    {subsections ? (
      subsections.map((sub, si) => (
        <div key={si}>
          <div className="px-4 py-2 bg-white/3 border-b border-white/5">
            <p className="font-body text-xs font-semibold text-gold-champagne tracking-wide">{sub.subtitle}</p>
          </div>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}>
            {sub.items.map((item, i) => <ServiceRow key={i} {...item} />)}
          </motion.div>
        </div>
      ))
    ) : (
      <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}>
        {items?.map((item, i) => <ServiceRow key={i} {...item} />)}
      </motion.div>
    )}
  </div>
);

// ─── COMBO CARD ───────────────────────────────────────────────
const ComboCard = ({ price, services, popular }) => {
  const msg = `Hi Classic Trends! I would like to book the *₹${price} Combo Package* which includes: ${services.join(', ')}. Please confirm my appointment. Thank you!`;
  const waURL = getWhatsAppURL(msg);

  return (
    <motion.div
      variants={staggerItem}
      className={`relative border bg-salon-card/50 backdrop-blur-sm p-5 group hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 ${
        popular ? 'border-gold-luxury/60' : 'border-white/10 hover:border-gold-luxury/30'
      }`}
    >
      {popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="bg-gradient-to-r from-gold-dark via-gold-luxury to-gold-dark text-emerald-dark text-[10px] font-bold tracking-widest uppercase px-3 py-1">
            Popular
          </span>
        </div>
      )}
      <div className="text-center mb-4">
        <p className="font-accent text-xs text-salon-muted tracking-widest uppercase mb-1">Package</p>
        <p className="font-display text-3xl font-bold text-gold-luxury">₹{price}</p>
      </div>
      <ul className="space-y-2 mb-5">
        {services.map((s, i) => (
          <li key={i} className="flex items-center gap-2 font-body text-xs text-white/70">
            <span className="text-gold-luxury text-[10px]">✦</span>
            {s}
          </li>
        ))}
      </ul>
      <button
        onClick={() => window.open(waURL, '_blank')}
        className={`w-full py-3 font-body text-xs font-bold tracking-widest uppercase transition-all duration-300 ${
          popular
            ? 'bg-gradient-to-r from-gold-dark via-gold-luxury to-gold-dark text-emerald-dark hover:shadow-gold'
            : 'border border-gold-luxury/40 text-gold-luxury hover:bg-gold-luxury/10'
        }`}
      >
        Book This Combo
      </button>
    </motion.div>
  );
};

// ─── WOMEN'S PACKAGE CARD ─────────────────────────────────────
const WomensPackageCard = ({ title, price, services, popular }) => {
  const msg = `Hi Classic Trends! I would like to book the *${title} — ₹${price}* package. Please confirm my appointment and let me know the available slots. Thank you!`;
  const waURL = getWhatsAppURL(msg);

  return (
    <motion.div
      variants={staggerItem}
      className={`relative border bg-salon-card/50 backdrop-blur-sm p-6 group hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 ${
        popular ? 'border-gold-luxury/60' : 'border-white/10 hover:border-gold-luxury/30'
      }`}
    >
      {popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="bg-gradient-to-r from-gold-dark via-gold-luxury to-gold-dark text-emerald-dark text-[10px] font-bold tracking-widest uppercase px-3 py-1">
            Best Value
          </span>
        </div>
      )}
      <div className="text-center mb-4 border-b border-gold-luxury/20 pb-4">
        <h4 className="font-display text-base font-bold text-white mb-1">{title}</h4>
        <p className="font-display text-3xl font-bold text-gold-luxury">₹{price}</p>
      </div>
      <ul className="space-y-2 mb-5">
        {services.map((s, i) => (
          <li key={i} className="flex items-center gap-2 font-body text-xs text-white/70">
            <span className="text-gold-luxury text-[10px]">✦</span>
            {s}
          </li>
        ))}
      </ul>
      <button
        onClick={() => window.open(waURL, '_blank')}
        className={`w-full py-3 font-body text-xs font-bold tracking-widest uppercase transition-all duration-300 ${
          popular
            ? 'bg-gradient-to-r from-gold-dark via-gold-luxury to-gold-dark text-emerald-dark hover:shadow-gold'
            : 'border border-gold-luxury/40 text-gold-luxury hover:bg-gold-luxury/10'
        }`}
      >
        Book This Package
      </button>
    </motion.div>
  );
};

// ─── MAIN TABS ─────────────────────────────────────────────────
const TABS = [
  { id: 'mens', label: "Men's Grooming" },
  { id: 'womens', label: "Women's Beauty" },
  { id: 'advanced', label: 'Advanced Hair' },
  { id: 'bridal', label: 'Bridal & Makeup' },
];

// ─── MAIN COMPONENT ───────────────────────────────────────────
export const Services = () => {
  const [activeTab, setActiveTab] = useState('mens');

  return (
    <section id="services" className="relative py-20 md:py-28 bg-gradient-to-b from-salon-bg to-[#021a1f] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-luxury/20 to-transparent" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold-luxury/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-12"
        >
          <SectionLabel>Complete Service Menu</SectionLabel>
          <SectionHeading className="mb-4">
            Our <GoldText>Services</GoldText>
          </SectionHeading>
          <GoldDivider className="max-w-xs mx-auto mb-4" />
          <p className="font-body text-sm text-salon-muted max-w-lg mx-auto">
            Click on any service to book directly via WhatsApp with a pre-typed message.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 font-body text-xs font-semibold tracking-widest uppercase transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-gold-dark via-gold-luxury to-gold-dark text-emerald-dark'
                  : 'border border-white/20 text-white/60 hover:text-white hover:border-gold-luxury/40'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Panels */}
        <AnimatePresence mode="wait">
          {activeTab === 'mens' && (
            <motion.div
              key="mens"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              {/* Men's service grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
                <ServiceCategory {...mensServices.hairCuts} />
                <ServiceCategory {...mensServices.hairColours} />
                <ServiceCategory {...mensServices.hairSpa} />
                <ServiceCategory {...mensServices.straightening} />
                <ServiceCategory {...mensServices.headMassage} />
                <ServiceCategory {...mensServices.massageChair} />
              </div>
              <ServiceCategory {...mensServices.facials} />

              {/* Men's Combos */}
              <div id="offers" className="mt-14">
                <div className="text-center mb-8">
                  <SectionLabel>Exclusive Men's Deals</SectionLabel>
                  <SectionHeading><GoldText>Combo Offers</GoldText></SectionHeading>
                  <GoldDivider className="max-w-xs mx-auto mt-4" />
                </div>
                <motion.div
                  className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                >
                  {mensComboOffers.map((combo, i) => (
                    <ComboCard key={i} {...combo} />
                  ))}
                </motion.div>
              </div>
            </motion.div>
          )}

          {activeTab === 'womens' && (
            <motion.div
              key="womens"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
                <ServiceCategory {...womensServices.hairCuts} />
                <ServiceCategory {...womensServices.threading} />
                <ServiceCategory {...womensServices.bleaching} />
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
                <ServiceCategory
                  title={womensServices.waxing.title}
                  subsections={womensServices.waxing.subsections}
                />
                <ServiceCategory {...womensServices.manicure} />
                <ServiceCategory {...womensServices.pedicure} />
              </div>
              <div className="grid sm:grid-cols-2 gap-5 mb-5">
                <ServiceCategory {...womensServices.facials} />
                <ServiceCategory {...womensServices.hairTreatment} />
              </div>

              {/* Women's Packages */}
              <div className="mt-14">
                <div className="text-center mb-8">
                  <SectionLabel>Special Women's Deals</SectionLabel>
                  <SectionHeading><GoldText>Beauty Packages</GoldText></SectionHeading>
                  <GoldDivider className="max-w-xs mx-auto mt-4" />
                </div>
                <motion.div
                  className="grid sm:grid-cols-2 gap-5 max-w-2xl mx-auto"
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                >
                  {womensPackages.map((pkg, i) => (
                    <WomensPackageCard key={i} {...pkg} />
                  ))}
                </motion.div>
              </div>
            </motion.div>
          )}

          {activeTab === 'advanced' && (
            <motion.div
              key="advanced"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
                <div className="lg:col-span-2">
                  <div className="border border-white/10 bg-salon-card/40 backdrop-blur-sm rounded-sm overflow-hidden">
                    <div className="px-4 py-3 bg-emerald-deep/50 border-b border-gold-luxury/20 flex items-center gap-2">
                      <div className="w-1 h-4 bg-gold-luxury" />
                      <h4 className="font-body text-xs font-bold text-gold-luxury tracking-widest uppercase">Hair Coloring</h4>
                    </div>
                    <div>
                      <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}>
                        {advancedHairServices.coloring.items.map((item, i) => <ServiceRow key={i} {...item} />)}
                      </motion.div>
                      {[advancedHairServices.coloring.global, advancedHairServices.coloring.globalAmmoniaFree, advancedHairServices.coloring.fullHighlights].map((sub, si) => (
                        <div key={si}>
                          <div className="px-4 py-2 bg-white/3 border-b border-white/5 border-t border-white/5">
                            <p className="font-body text-xs font-semibold text-gold-champagne tracking-wide">{sub.subtitle}</p>
                          </div>
                          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}>
                            {sub.items.map((item, i) => <ServiceRow key={i} {...item} />)}
                          </motion.div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-5">
                  <ServiceCategory {...advancedHairServices.tempStyling} />
                  <ServiceCategory {...hairWashStyling} />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                <ServiceCategory {...advancedHairServices.straightening} />
                <ServiceCategory {...advancedHairServices.keratin} />
                <ServiceCategory {...advancedHairServices.botox} />
                <ServiceCategory {...hairSpaServices} />
                {Object.values(skinCare).map((cat, i) => (
                  <ServiceCategory key={i} {...cat} />
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'bridal' && (
            <motion.div
              key="bridal"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
                <div className="lg:col-span-2">
                  <ServiceCategory {...makeupServices} />
                </div>
                <ServiceCategory {...mehendiServices} />
              </div>

              {/* Bridal CTA */}
              <motion.div
                className="relative p-8 md:p-12 border border-gold-luxury/30 bg-gradient-to-br from-salon-card to-salon-bg text-center overflow-hidden"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-gold-luxury/5 via-transparent to-gold-luxury/5" />
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-luxury to-transparent" />
                <div className="relative z-10">
                  <SectionLabel>Make Your Day Special</SectionLabel>
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-3">
                    Complete <GoldText>Bridal Package</GoldText>
                  </h3>
                  <p className="font-body text-sm text-salon-muted mb-6 max-w-md mx-auto">
                    HD Bridal Makeup + Bridal Mehendi + Bridal Facial + Hair Styling. Contact us for a custom quote for your special day.
                  </p>
                  <button
                    onClick={() => window.open(
                      `https://wa.me/919972608740?text=${encodeURIComponent('Hi Classic Trends! I would like to enquire about your Bridal Package. Please share complete details and pricing. Thank you!')}`,
                      '_blank'
                    )}
                    className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-gold-dark via-gold-luxury to-gold-dark text-emerald-dark font-body font-bold text-sm tracking-widest uppercase hover:shadow-gold-lg hover:-translate-y-1 transition-all duration-300"
                  >
                    💍 Enquire About Bridal Package
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom note */}
        <motion.p
          className="text-center font-body text-xs text-salon-muted mt-10"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          ✦ All prices are indicative. Actual pricing may vary based on hair length and service complexity. Please confirm at the salon.
        </motion.p>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-luxury/20 to-transparent" />
    </section>
  );
};
