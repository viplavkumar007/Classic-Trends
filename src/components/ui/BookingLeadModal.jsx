import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, X } from 'lucide-react';

const initialLeadForm = {
  name: '',
  phone: '',
  date: '',
  time: '',
};

export const buildLeadMessage = (message, form) => `${message}

*Customer Details*
*Name:* ${form.name.trim()}${form.phone.trim() ? `\n*Phone:* ${form.phone.trim()}` : ''}
*Preferred Date:* ${form.date}
*Preferred Time:* ${form.time}`;

export const BookingLeadModal = ({ lead, onClose, onSubmit }) => {
  const [form, setForm] = useState(initialLeadForm);
  const [errors, setErrors] = useState({});

  if (!lead) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nextErrors = {};
    if (!form.name.trim()) nextErrors.name = 'Please enter customer name';
    if (!form.date) nextErrors.date = 'Please select preferred date';
    if (!form.time) nextErrors.time = 'Please select preferred time';

    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors);
      return;
    }

    onSubmit(buildLeadMessage(lead.message, form));
    setForm(initialLeadForm);
    setErrors({});
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[90] flex items-center justify-center bg-black/75 px-4 py-6 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        role="dialog"
        aria-modal="true"
        aria-label="Booking enquiry form"
        onClick={onClose}
      >
        <motion.form
          className="relative w-full max-w-md border border-gold-luxury/30 bg-salon-bg p-5 shadow-card"
          initial={{ opacity: 0, y: 18, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 18, scale: 0.98 }}
          onClick={(e) => e.stopPropagation()}
          onSubmit={handleSubmit}
          noValidate
        >
          <button
            type="button"
            onClick={onClose}
            className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center border border-white/15 bg-salon-card/90 text-xl leading-none text-white/80 transition hover:border-gold-luxury/50 hover:text-white"
            aria-label="Close enquiry form"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
          <p className="font-body text-[11px] font-bold uppercase tracking-widest text-gold-luxury">Booking Enquiry</p>
          <h3 className="mt-1 pr-10 font-display text-xl font-bold text-white">{lead.title}</h3>
          <p className="mt-2 font-body text-xs leading-5 text-salon-muted">
            Share your preferred appointment details. WhatsApp will open with everything pre-filled.
          </p>

          <div className="mt-5 grid gap-4">
            <div>
              <label htmlFor="booking-name" className="mb-2 block font-body text-xs text-salon-muted">
                Customer Name <span className="text-gold-luxury">*</span>
              </label>
              <input
                id="booking-name"
                name="name"
                value={form.name}
                onChange={handleChange}
                className={`w-full border bg-salon-card/60 px-4 py-3 font-body text-sm text-white placeholder-white/20 outline-none transition focus:ring-2 ${
                  errors.name ? 'border-red-500/60 focus:ring-red-500/30' : 'border-white/10 focus:border-gold-luxury/60 focus:ring-gold-luxury/20'
                }`}
                placeholder="Your name"
                autoComplete="name"
              />
              {errors.name && <p className="mt-1 font-body text-xs text-red-400">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="booking-phone" className="mb-2 block font-body text-xs text-salon-muted">
                Phone Number
              </label>
              <input
                id="booking-phone"
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
                className="w-full border border-white/10 bg-salon-card/60 px-4 py-3 font-body text-sm text-white placeholder-white/20 outline-none transition focus:border-gold-luxury/60 focus:ring-2 focus:ring-gold-luxury/20"
                placeholder="Optional"
                autoComplete="tel"
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="booking-date" className="mb-2 block font-body text-xs text-salon-muted">
                  Preferred Date <span className="text-gold-luxury">*</span>
                </label>
                <div className="relative">
                  <Calendar className="pointer-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gold-luxury" aria-hidden="true" />
                  <input
                    id="booking-date"
                    name="date"
                    type="date"
                    value={form.date}
                    onChange={handleChange}
                    className={`w-full border bg-salon-card/60 px-4 py-3 pr-11 font-body text-sm text-white outline-none transition focus:ring-2 ${
                      errors.date ? 'border-red-500/60 focus:ring-red-500/30' : 'border-white/10 focus:border-gold-luxury/60 focus:ring-gold-luxury/20'
                    }`}
                  />
                </div>
                {errors.date && <p className="mt-1 font-body text-xs text-red-400">{errors.date}</p>}
              </div>
              <div>
                <label htmlFor="booking-time" className="mb-2 block font-body text-xs text-salon-muted">
                  Preferred Time <span className="text-gold-luxury">*</span>
                </label>
                <div className="relative">
                  <Clock className="pointer-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gold-luxury" aria-hidden="true" />
                  <input
                    id="booking-time"
                    name="time"
                    type="time"
                    value={form.time}
                    onChange={handleChange}
                    className={`w-full border bg-salon-card/60 px-4 py-3 pr-11 font-body text-sm text-white outline-none transition focus:ring-2 ${
                      errors.time ? 'border-red-500/60 focus:ring-red-500/30' : 'border-white/10 focus:border-gold-luxury/60 focus:ring-gold-luxury/20'
                    }`}
                  />
                </div>
                {errors.time && <p className="mt-1 font-body text-xs text-red-400">{errors.time}</p>}
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="mt-5 w-full bg-gradient-to-r from-gold-dark via-gold-luxury to-gold-dark px-4 py-3 font-body text-xs font-bold uppercase tracking-widest text-emerald-dark transition hover:shadow-gold"
          >
            Continue to WhatsApp
          </button>
        </motion.form>
      </motion.div>
    </AnimatePresence>
  );
};
