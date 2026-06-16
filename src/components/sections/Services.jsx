import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import {
  mensServices,
  mensComboOffers,
  womensServices,
  advancedHairServices,
  makeupServices,
  mehendiServices,
  hairSpaServices,
  hairWashStyling,
  skinCare,
  womensPackages,
  payment,
  getWhatsAppURL,
} from '../../data/siteContent';
import { staggerContainer, staggerItem, fadeUp } from '../../utils/motionVariants';
import { GoldDivider, SectionLabel, SectionHeading, GoldText } from '../ui/SectionHeader';
import { BookingLeadModal } from '../ui/BookingLeadModal';

const formatPrice = (value) => {
  if (!value) return '';
  const text = String(value);
  if (text.startsWith('₹') || !/^\d/.test(text)) return text;
  return `₹${text}`;
};

const PaymentModal = ({ item, onClose, onConfirm }) => {
  if (!item) return null;

  const amount = item.discountPrice || item.price || item.priceRange || 'Advance';
  const confirmMessage = item.confirmMessage || `Hi Classic Trends! I have paid advance for *${item.name}* service.

*Discounted Price:* ${formatPrice(amount)}
*Reward Points Earned:* ${item.rewardPoints || 0} points redeemable on my next service.

I will attach the advance payment screenshot. Please confirm my appointment. Thank you!`;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[80] flex items-center justify-center bg-black/75 px-4 py-6 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        role="dialog"
        aria-modal="true"
        aria-label="Pay advance QR code"
        onClick={onClose}
      >
        <motion.div
          className="relative w-full max-w-sm border border-gold-luxury/30 bg-salon-bg p-4 shadow-card"
          initial={{ opacity: 0, y: 18, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 18, scale: 0.98 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            type="button"
            onClick={onClose}
            className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center border border-white/15 bg-salon-card/90 text-xl leading-none text-white/80 transition hover:border-gold-luxury/50 hover:text-white"
            aria-label="Close payment QR"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
          <div className="pr-10">
            <p className="font-body text-[11px] font-bold uppercase tracking-widest text-gold-luxury">Pay Advance</p>
            <h3 className="mt-1 font-display text-xl font-bold text-white">{item.name}</h3>
            <p className="mt-1 font-body text-sm text-salon-muted">
              Discounted price: <span className="font-semibold text-gold-champagne">{formatPrice(amount)}</span>
              {item.rewardPoints ? ` + ${item.rewardPoints} reward points` : ''}
            </p>
          </div>
          <div className="mt-4 overflow-hidden border border-white/10 bg-white p-2">
            <img src={payment.qrImage} alt="Classic Trends Paytm UPI QR code" className="h-auto w-full" />
          </div>
          <p className="mt-3 text-center font-body text-xs text-salon-muted">
            Pay using Paytm/UPI, then WhatsApp the payment screenshot to confirm your slot.
          </p>
          <button
            type="button"
            onClick={() => onConfirm(confirmMessage, item.name)}
            className="mt-4 w-full bg-gradient-to-r from-gold-dark via-gold-luxury to-gold-dark px-4 py-3 font-body text-xs font-bold uppercase tracking-widest text-emerald-dark transition hover:shadow-gold"
          >
            Confirm on WhatsApp
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const AdvanceBookingBanner = () => (
  <motion.div
    className="mb-10 border border-gold-luxury/30 bg-gradient-to-r from-gold-luxury/15 via-salon-card/70 to-emerald-deep/70 p-5 md:p-6"
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
  >
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div>
        <p className="font-body text-[11px] font-bold uppercase tracking-widest text-gold-luxury">
          Discounted Price List + Rewards Program
        </p>
        <h3 className="mt-2 font-display text-2xl font-bold text-white">
          Book With Advance Payment & Save More
        </h3>
        <p className="mt-2 max-w-3xl font-body text-sm leading-6 text-salon-muted">
          Pay advance to unlock discounted prices and earn reward points for your next visit.
        </p>
      </div>
    </div>
  </motion.div>
);

const BookingDisclaimers = () => (
  <motion.div
    className="mb-8 grid gap-3 md:grid-cols-2"
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
  >
    <div className="border border-white/10 bg-salon-card/35 p-4">
      <p className="font-body text-[11px] font-bold uppercase tracking-widest text-gold-luxury">Rewards Disclaimer</p>
      <p className="mt-2 font-body text-sm leading-6 text-salon-muted">
        Points earned from a service can be redeemed during your next service.
      </p>
    </div>
    <div className="border border-white/10 bg-salon-card/35 p-4">
      <p className="font-body text-[11px] font-bold uppercase tracking-widest text-gold-luxury">Discount Disclaimer</p>
      <p className="mt-2 font-body text-sm leading-6 text-salon-muted">
        Discounted price applies only when the service is confirmed with advance payment.
      </p>
    </div>
  </motion.div>
);

const ServiceRow = ({ name, price, priceRange, discountPrice, rewardPoints = 0, onPayAdvance }) => {
  const displayPrice = price ? formatPrice(price) : priceRange;
  const onlinePrice = discountPrice ? formatPrice(discountPrice) : displayPrice;
  const bookMessage = `Hi Classic Trends! I would like to book *${name}* service. Please confirm the appointment. Thank you!`;
  const confirmMessage = `Hi Classic Trends! I have paid advance for *${name}* service.

*Discounted Price:* ${formatPrice(discountPrice || price || priceRange)}
*Reward Points Earned:* ${rewardPoints > 0 ? `${rewardPoints} points redeemable on my next service.` : '0 points.'}

I will attach the advance payment screenshot. Please confirm my appointment. Thank you!`;

  return (
    <motion.div
      variants={staggerItem}
      className="group grid gap-4 border-b border-white/5 px-5 py-4 transition-all duration-200 hover:border-gold-luxury/20 hover:bg-gold-luxury/5 md:grid-cols-[minmax(0,1fr)_auto] md:items-center"
      onClick={() => onPayAdvance({ name, message: bookMessage, mode: 'book' })}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onPayAdvance({ name, message: bookMessage, mode: 'book' })}
      title={`Book ${name}`}
      aria-label={`Book ${name} - ${onlinePrice}`}
    >
      <div className="min-w-0">
        <span className="block font-body text-base font-semibold leading-6 text-white/85 transition-colors group-hover:text-white">
          {name}
        </span>
        {discountPrice && (
          <span className="mt-2 block max-w-md font-body text-xs leading-5 text-salon-muted">
            Salon price <span className="line-through">{displayPrice}</span>
            <span className="mx-1 text-gold-luxury">|</span>
            Discounted price <span className="font-semibold text-gold-champagne">{onlinePrice}</span>
            {rewardPoints > 0 && <span> + {rewardPoints} pts</span>}
          </span>
        )}
      </div>
      <div className="grid shrink-0 grid-cols-2 gap-2 md:min-w-[320px] md:grid-cols-[auto_1fr_1fr] md:items-center">
        <span className="col-span-2 font-body text-base font-bold text-gold-luxury md:col-span-1 md:min-w-[64px]">{onlinePrice}</span>
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onPayAdvance({ name, message: bookMessage, mode: 'book' });
          }}
          className="min-h-10 border border-white/15 px-3 py-2 font-body text-[10px] font-bold uppercase tracking-widest text-white/80 transition hover:border-gold-luxury/50 hover:text-gold-luxury"
        >
          Book Service
        </button>
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onPayAdvance({ name, price, priceRange, discountPrice, rewardPoints, confirmMessage, mode: 'advance' });
          }}
          className="min-h-10 border border-gold-luxury/40 px-3 py-2 font-body text-[10px] font-bold uppercase tracking-widest text-gold-luxury transition hover:bg-gold-luxury hover:text-emerald-dark"
        >
          Pay Advance
        </button>
      </div>
    </motion.div>
  );
};

const ServiceCategory = ({ title, items, subsections, onPayAdvance }) => (
  <div className="overflow-hidden rounded-sm border border-white/10 bg-salon-card/40 backdrop-blur-sm">
    <div className="flex items-center gap-2 border-b border-gold-luxury/20 bg-emerald-deep/50 px-4 py-3">
      <div className="h-4 w-1 bg-gold-luxury" />
      <h4 className="font-body text-xs font-bold uppercase tracking-widest text-gold-luxury">{title}</h4>
    </div>
    {subsections ? (
      subsections.map((sub, si) => (
        <div key={si}>
          <div className="border-b border-white/5 bg-white/3 px-4 py-2">
            <p className="font-body text-xs font-semibold tracking-wide text-gold-champagne">{sub.subtitle}</p>
          </div>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}>
            {sub.items.map((item, i) => <ServiceRow key={i} {...item} onPayAdvance={onPayAdvance} />)}
          </motion.div>
        </div>
      ))
    ) : (
      <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}>
        {items?.map((item, i) => <ServiceRow key={i} {...item} onPayAdvance={onPayAdvance} />)}
      </motion.div>
    )}
  </div>
);

const ComboCard = ({ title = 'Combo Package', price, discountPrice, rewardPoints = 0, services, popular, onPayAdvance }) => {
  const onlinePrice = discountPrice || price;
  const msg = `Hi Classic Trends! I would like to book *${title}* which includes: ${services.join(', ')}. Please confirm my appointment. Thank you!`;
  const confirmMsg = `Hi Classic Trends! I have paid advance for *${title}* which includes: ${services.join(', ')}.

*Discounted Price:* ₹${onlinePrice}
*Reward Points Earned:* ${rewardPoints} points redeemable on my next service.

I will attach the advance payment screenshot. Please confirm my appointment. Thank you!`;

  return (
    <motion.div
      variants={staggerItem}
      className={`group relative border bg-salon-card/50 p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover ${
        popular ? 'border-gold-luxury/60' : 'border-white/10 hover:border-gold-luxury/30'
      }`}
    >
      {popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="bg-gradient-to-r from-gold-dark via-gold-luxury to-gold-dark px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-emerald-dark">
            Popular
          </span>
        </div>
      )}
      <div className="mb-4 text-center">
        <p className="font-accent text-xs uppercase tracking-widest text-salon-muted">Package</p>
        {discountPrice && <p className="font-body text-xs text-salon-muted line-through">₹{price}</p>}
        <p className="font-display text-3xl font-bold text-gold-luxury">₹{onlinePrice}</p>
        {rewardPoints > 0 && <p className="mt-1 font-body text-xs text-gold-champagne">Earn {rewardPoints} reward points</p>}
      </div>
      <ul className="mb-5 space-y-2">
        {services.map((s, i) => (
          <li key={i} className="flex items-center gap-2 font-body text-xs text-white/70">
            <span className="text-[10px] text-gold-luxury">•</span>
            {s}
          </li>
        ))}
      </ul>
      <div className="grid gap-2">
        <button
          onClick={() => onPayAdvance({ name: title, message: msg, mode: 'book' })}
          className={`w-full py-3 font-body text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
            popular
              ? 'bg-gradient-to-r from-gold-dark via-gold-luxury to-gold-dark text-emerald-dark hover:shadow-gold'
              : 'border border-gold-luxury/40 text-gold-luxury hover:bg-gold-luxury/10'
          }`}
        >
          Book This Combo
        </button>
        <button
          type="button"
          onClick={() => onPayAdvance({ name: title, price, discountPrice: onlinePrice, rewardPoints, confirmMessage: confirmMsg, mode: 'advance' })}
          className="w-full border border-white/15 py-3 font-body text-xs font-bold uppercase tracking-widest text-white/80 transition hover:border-gold-luxury/50 hover:text-gold-luxury"
        >
          Pay Advance
        </button>
      </div>
    </motion.div>
  );
};

const WomensPackageCard = ({ title, price, discountPrice, rewardPoints = 0, services, popular, onPayAdvance }) => {
  const onlinePrice = discountPrice || price;
  const msg = `Hi Classic Trends! I would like to book the *${title}* package. Please confirm my appointment and let me know the available slots. Thank you!`;
  const confirmMsg = `Hi Classic Trends! I have paid advance for the *${title}* package.

*Discounted Price:* ₹${onlinePrice}
*Reward Points Earned:* ${rewardPoints} points redeemable on my next service.

I will attach the advance payment screenshot. Please confirm my appointment and let me know the available slots. Thank you!`;

  return (
    <motion.div
      variants={staggerItem}
      className={`group relative border bg-salon-card/50 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover ${
        popular ? 'border-gold-luxury/60' : 'border-white/10 hover:border-gold-luxury/30'
      }`}
    >
      {popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="bg-gradient-to-r from-gold-dark via-gold-luxury to-gold-dark px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-emerald-dark">
            Best Value
          </span>
        </div>
      )}
      <div className="mb-4 border-b border-gold-luxury/20 pb-4 text-center">
        <h4 className="mb-1 font-display text-base font-bold text-white">{title}</h4>
        {discountPrice && <p className="font-body text-xs text-salon-muted line-through">₹{price}</p>}
        <p className="font-display text-3xl font-bold text-gold-luxury">₹{onlinePrice}</p>
        {rewardPoints > 0 && <p className="mt-1 font-body text-xs text-gold-champagne">Earn {rewardPoints} reward points</p>}
      </div>
      <ul className="mb-5 space-y-2">
        {services.map((s, i) => (
          <li key={i} className="flex items-center gap-2 font-body text-xs text-white/70">
            <span className="text-[10px] text-gold-luxury">•</span>
            {s}
          </li>
        ))}
      </ul>
      <div className="grid gap-2">
        <button
          onClick={() => onPayAdvance({ name: title, message: msg, mode: 'book' })}
          className={`w-full py-3 font-body text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
            popular
              ? 'bg-gradient-to-r from-gold-dark via-gold-luxury to-gold-dark text-emerald-dark hover:shadow-gold'
              : 'border border-gold-luxury/40 text-gold-luxury hover:bg-gold-luxury/10'
          }`}
        >
          Book This Package
        </button>
        <button
          type="button"
          onClick={() => onPayAdvance({ name: title, price, discountPrice: onlinePrice, rewardPoints, confirmMessage: confirmMsg, mode: 'advance' })}
          className="w-full border border-white/15 py-3 font-body text-xs font-bold uppercase tracking-widest text-white/80 transition hover:border-gold-luxury/50 hover:text-gold-luxury"
        >
          Pay Advance
        </button>
      </div>
    </motion.div>
  );
};

const TABS = [
  { id: 'mens', label: "Men's Grooming" },
  { id: 'womens', label: "Women's Beauty" },
  { id: 'advanced', label: 'Advanced Hair' },
  { id: 'bridal', label: 'Bridal & Makeup' },
];

export const Services = () => {
  const [activeTab, setActiveTab] = useState('mens');
  const [paymentItem, setPaymentItem] = useState(null);
  const [bookingLead, setBookingLead] = useState(null);

  const openLeadForm = (message, title) => {
    setBookingLead({ message, title: title || 'Book Appointment' });
  };

  const handleBookingAction = (item) => {
    if (item.mode === 'advance') {
      setPaymentItem(item);
      return;
    }

    openLeadForm(item.message, item.name);
  };

  const handlePaymentConfirm = (message, title) => {
    setPaymentItem(null);
    openLeadForm(message, title);
  };

  const handleLeadSubmit = (message) => {
    window.open(getWhatsAppURL(message), '_blank');
    setBookingLead(null);
  };

  return (
    <section id="services" className="relative overflow-hidden bg-gradient-to-b from-salon-bg to-[#021a1f] py-20 md:py-28">
      <PaymentModal item={paymentItem} onClose={() => setPaymentItem(null)} onConfirm={handlePaymentConfirm} />
      <BookingLeadModal lead={bookingLead} onClose={() => setBookingLead(null)} onSubmit={handleLeadSubmit} />
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-luxury/20 to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 h-[600px] w-[600px] rounded-full bg-gold-luxury/3 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-12 text-center"
        >
          <SectionLabel>Complete Service Menu</SectionLabel>
          <SectionHeading className="mb-4">
            Our <GoldText>Services</GoldText>
          </SectionHeading>
          <GoldDivider className="mx-auto mb-4 max-w-xs" />
          <p className="mx-auto max-w-lg font-body text-sm text-salon-muted">
            Click any service to book on WhatsApp, or pay advance to unlock discounted prices and rewards.
          </p>
        </motion.div>

        <AdvanceBookingBanner />

        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 font-body text-xs font-semibold uppercase tracking-widest transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-gold-dark via-gold-luxury to-gold-dark text-emerald-dark'
                  : 'border border-white/20 text-white/60 hover:border-gold-luxury/40 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <BookingDisclaimers />

        <AnimatePresence mode="wait">
          {activeTab === 'mens' && (
            <motion.div key="mens" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }}>
              <div className="mb-14 grid gap-6 lg:grid-cols-2">
                <ServiceCategory {...mensServices.hairCuts} onPayAdvance={handleBookingAction} />
                <ServiceCategory {...mensServices.hairColours} onPayAdvance={handleBookingAction} />
                <ServiceCategory {...mensServices.hairSpa} onPayAdvance={handleBookingAction} />
                <ServiceCategory {...mensServices.straightening} onPayAdvance={handleBookingAction} />
                <ServiceCategory {...mensServices.headMassage} onPayAdvance={handleBookingAction} />
                <ServiceCategory {...mensServices.massageChair} onPayAdvance={handleBookingAction} />
              </div>
              <ServiceCategory {...mensServices.facials} onPayAdvance={handleBookingAction} />

              <div id="offers" className="mt-14">
                <div className="mb-8 text-center">
                  <SectionLabel>Exclusive Men's Deals</SectionLabel>
                  <SectionHeading><GoldText>Combo Offers</GoldText></SectionHeading>
                  <GoldDivider className="mx-auto mt-4 max-w-xs" />
                </div>
                <motion.div className="grid gap-6 lg:grid-cols-2" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}>
                  {mensComboOffers.map((combo, i) => (
                    <ComboCard key={i} {...combo} title={`Combo ${i + 1}`} onPayAdvance={handleBookingAction} />
                  ))}
                </motion.div>
              </div>
            </motion.div>
          )}

          {activeTab === 'womens' && (
            <motion.div key="womens" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }}>
              <div className="mb-6 grid gap-6 lg:grid-cols-2">
                <ServiceCategory {...womensServices.hairCuts} onPayAdvance={handleBookingAction} />
                <ServiceCategory {...womensServices.threading} onPayAdvance={handleBookingAction} />
                <ServiceCategory {...womensServices.bleaching} onPayAdvance={handleBookingAction} />
              </div>
              <div className="mb-6 grid gap-6 lg:grid-cols-2">
                <ServiceCategory title={womensServices.waxing.title} subsections={womensServices.waxing.subsections} onPayAdvance={handleBookingAction} />
                <ServiceCategory {...womensServices.manicure} onPayAdvance={handleBookingAction} />
                <ServiceCategory {...womensServices.pedicure} onPayAdvance={handleBookingAction} />
              </div>
              <div className="mb-6 grid gap-6 lg:grid-cols-2">
                <ServiceCategory {...womensServices.facials} onPayAdvance={handleBookingAction} />
                <ServiceCategory {...womensServices.hairTreatment} onPayAdvance={handleBookingAction} />
              </div>

              <div className="mt-14">
                <div className="mb-8 text-center">
                  <SectionLabel>Special Women's Deals</SectionLabel>
                  <SectionHeading><GoldText>Beauty Packages</GoldText></SectionHeading>
                  <GoldDivider className="mx-auto mt-4 max-w-xs" />
                </div>
                <motion.div className="mx-auto grid max-w-2xl gap-5 sm:grid-cols-2" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
                  {womensPackages.map((pkg, i) => (
                    <WomensPackageCard key={i} {...pkg} onPayAdvance={handleBookingAction} />
                  ))}
                </motion.div>
              </div>
            </motion.div>
          )}

          {activeTab === 'advanced' && (
            <motion.div key="advanced" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }}>
              <div className="mb-6 grid gap-6 lg:grid-cols-2">
                <div className="lg:col-span-2">
                  <div className="overflow-hidden rounded-sm border border-white/10 bg-salon-card/40 backdrop-blur-sm">
                    <div className="flex items-center gap-2 border-b border-gold-luxury/20 bg-emerald-deep/50 px-4 py-3">
                      <div className="h-4 w-1 bg-gold-luxury" />
                      <h4 className="font-body text-xs font-bold uppercase tracking-widest text-gold-luxury">Hair Coloring</h4>
                    </div>
                    <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}>
                      {advancedHairServices.coloring.items.map((item, i) => <ServiceRow key={i} {...item} onPayAdvance={handleBookingAction} />)}
                    </motion.div>
                    {[advancedHairServices.coloring.global, advancedHairServices.coloring.globalAmmoniaFree, advancedHairServices.coloring.fullHighlights].map((sub, si) => (
                      <div key={si}>
                        <div className="border-y border-white/5 bg-white/3 px-4 py-2">
                          <p className="font-body text-xs font-semibold tracking-wide text-gold-champagne">{sub.subtitle}</p>
                        </div>
                        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}>
                          {sub.items.map((item, i) => <ServiceRow key={i} {...item} onPayAdvance={handleBookingAction} />)}
                        </motion.div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-5">
                  <ServiceCategory {...advancedHairServices.tempStyling} onPayAdvance={handleBookingAction} />
                  <ServiceCategory {...hairWashStyling} onPayAdvance={handleBookingAction} />
                </div>
              </div>

              <div className="grid gap-6 lg:grid-cols-2">
                <ServiceCategory {...advancedHairServices.straightening} onPayAdvance={handleBookingAction} />
                <ServiceCategory {...advancedHairServices.keratin} onPayAdvance={handleBookingAction} />
                <ServiceCategory {...advancedHairServices.botox} onPayAdvance={handleBookingAction} />
                <ServiceCategory {...hairSpaServices} onPayAdvance={handleBookingAction} />
                {Object.values(skinCare).map((cat, i) => (
                  <ServiceCategory key={i} {...cat} onPayAdvance={handleBookingAction} />
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'bridal' && (
            <motion.div key="bridal" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }}>
              <div className="mb-10 grid gap-6 lg:grid-cols-2">
                <div className="lg:col-span-2">
                  <ServiceCategory {...makeupServices} onPayAdvance={handleBookingAction} />
                </div>
                <ServiceCategory {...mehendiServices} onPayAdvance={handleBookingAction} />
              </div>

              <motion.div
                className="relative overflow-hidden border border-gold-luxury/30 bg-gradient-to-br from-salon-card to-salon-bg p-8 text-center md:p-12"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-gold-luxury/5 via-transparent to-gold-luxury/5" />
                <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-luxury to-transparent" />
                <div className="relative z-10">
                  <SectionLabel>Make Your Day Special</SectionLabel>
                  <h3 className="mb-3 font-display text-2xl font-bold text-white md:text-3xl">
                    Complete <GoldText>Bridal Package</GoldText>
                  </h3>
                  <p className="mx-auto mb-6 max-w-md font-body text-sm text-salon-muted">
                    HD Bridal Makeup + Bridal Mehendi + Bridal Facial + Hair Styling. Contact us for a custom quote for your special day.
                  </p>
                  <button
                    onClick={() => window.open(
                      `https://wa.me/919972608740?text=${encodeURIComponent('Hi Classic Trends! I would like to enquire about your Bridal Package. Please share complete details and pricing. Thank you!')}`,
                      '_blank'
                    )}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-gold-dark via-gold-luxury to-gold-dark px-8 py-4 font-body text-sm font-bold uppercase tracking-widest text-emerald-dark transition-all duration-300 hover:-translate-y-1 hover:shadow-gold-lg"
                  >
                    Enquire About Bridal Package
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.p className="mt-10 text-center font-body text-xs text-salon-muted" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}>
          Discounted prices and rewards are valid only with advance payment. Actual pricing may vary based on hair length and service complexity.
        </motion.p>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-luxury/20 to-transparent" />
    </section>
  );
};
