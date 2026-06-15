import { useState } from 'react';
import { motion } from 'framer-motion';
import { contact, brand, getWhatsAppURL } from '../../data/siteContent';
import { GoldDivider, SectionLabel, SectionHeading, GoldText } from '../ui/SectionHeader';
import { staggerContainer, staggerItem, fadeUp, slideInLeft, slideInRight } from '../../utils/motionVariants';
import { useToast, Toast } from '../ui/Toast';

const SERVICE_OPTIONS = [
  'Hair Cut (Men/Women)',
  'Beard Styling',
  'Hair Coloring',
  'Keratin Treatment',
  'Hair Botox',
  'Hair Straightening',
  'Hair Spa',
  'Facial',
  'Waxing',
  'Threading',
  'Manicure / Pedicure',
  'Bridal Makeup',
  'Bridal Mehendi',
  'Complete Bridal Package',
  "Men's Combo Package",
  "Women's Beauty Package",
  'Other / General Enquiry',
];

const InputField = ({ label, id, type = 'text', value, onChange, error, required, ...rest }) => (
  <div className="relative">
    <label htmlFor={id} className="block font-body text-xs text-salon-muted mb-2 tracking-wide">
      {label} {required && <span className="text-gold-luxury">*</span>}
    </label>
    <input
      type={type}
      id={id}
      name={id}
      value={value}
      onChange={onChange}
      required={required}
      className={`w-full bg-salon-card/60 border text-white font-body text-sm px-4 py-3 placeholder-white/20 focus:outline-none focus:ring-2 transition-all duration-300 ${
        error
          ? 'border-red-500/60 focus:ring-red-500/30'
          : 'border-white/10 focus:border-gold-luxury/60 focus:ring-gold-luxury/20 hover:border-white/20'
      }`}
      {...rest}
    />
    {error && <p className="mt-1 font-body text-xs text-red-400">{error}</p>}
  </div>
);

const SelectField = ({ label, id, value, onChange, options, required }) => (
  <div>
    <label htmlFor={id} className="block font-body text-xs text-salon-muted mb-2 tracking-wide">
      {label} {required && <span className="text-gold-luxury">*</span>}
    </label>
    <select
      id={id}
      name={id}
      value={value}
      onChange={onChange}
      required={required}
      className="w-full bg-salon-card/60 border border-white/10 text-white font-body text-sm px-4 py-3 focus:outline-none focus:border-gold-luxury/60 focus:ring-2 focus:ring-gold-luxury/20 hover:border-white/20 transition-all duration-300 appearance-none"
      style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23D4AF37' viewBox='0 0 24 24'%3E%3Cpath d='M7 10l5 5 5-5z'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center', backgroundSize: '20px' }}
    >
      <option value="" disabled className="bg-salon-bg">Select a service</option>
      {options.map((opt) => (
        <option key={opt} value={opt} className="bg-salon-bg">{opt}</option>
      ))}
    </select>
  </div>
);

const TextareaField = ({ label, id, value, onChange, required }) => (
  <div>
    <label htmlFor={id} className="block font-body text-xs text-salon-muted mb-2 tracking-wide">
      {label} {required && <span className="text-gold-luxury">*</span>}
    </label>
    <textarea
      id={id}
      name={id}
      value={value}
      onChange={onChange}
      required={required}
      rows={4}
      className="w-full bg-salon-card/60 border border-white/10 text-white font-body text-sm px-4 py-3 placeholder-white/20 focus:outline-none focus:border-gold-luxury/60 focus:ring-2 focus:ring-gold-luxury/20 hover:border-white/20 transition-all duration-300 resize-none"
      placeholder="Tell us more about what you need..."
    />
  </div>
);

const ContactInfoCard = ({ icon, label, value, href }) => (
  <motion.a
    variants={staggerItem}
    href={href}
    target={href?.startsWith('http') ? '_blank' : undefined}
    rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
    className="flex items-start gap-4 p-4 border border-white/10 bg-salon-card/30 hover:border-gold-luxury/30 hover:bg-salon-card/60 transition-all duration-300 group"
  >
    <div className="flex-shrink-0 w-10 h-10 border border-gold-luxury/30 flex items-center justify-center text-xl group-hover:border-gold-luxury/60 transition-colors">
      {icon}
    </div>
    <div>
      <p className="font-body text-xs text-gold-luxury tracking-widest uppercase mb-1">{label}</p>
      <p className="font-body text-sm text-white/80 group-hover:text-white transition-colors">{value}</p>
    </div>
  </motion.a>
);

export const Contact = () => {
  const { toasts, addToast, removeToast } = useToast();
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Name is required';
    if (!form.phone.trim()) errs.phone = 'Phone number is required';
    else if (!/^[6-9]\d{9}$/.test(form.phone.trim())) errs.phone = 'Enter a valid 10-digit Indian mobile number';
    if (!form.service) errs.service = 'Please select a service';
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      addToast({ type: 'error', title: 'Please fix the errors', message: 'Fill in all required fields correctly.' });
      return;
    }

    // Build WhatsApp message
    const waMessage = `Hi Classic Trends! 🙏

*New Appointment Enquiry*

👤 *Name:* ${form.name}
📞 *Phone:* ${form.phone}${form.email ? `\n📧 *Email:* ${form.email}` : ''}
💈 *Service:* ${form.service}${form.message ? `\n💬 *Message:* ${form.message}` : ''}

Please confirm my appointment. Thank you!`;

    const waURL = getWhatsAppURL(waMessage);
    window.open(waURL, '_blank');

    addToast({
      type: 'success',
      title: 'Redirecting to WhatsApp!',
      message: 'Your appointment enquiry is ready to send.',
      duration: 5000,
    });

    setForm({ name: '', phone: '', email: '', service: '', message: '' });
    setErrors({});
  };

  return (
    <>
      <Toast toasts={toasts} removeToast={removeToast} />

      <section id="contact" className="relative py-20 md:py-28 bg-gradient-to-b from-salon-bg to-[#011519] overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-luxury/20 to-transparent" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-gold-luxury/3 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div
            className="text-center mb-14"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <SectionLabel>Get In Touch</SectionLabel>
            <SectionHeading className="mb-4">
              Book Your <GoldText>Appointment</GoldText>
            </SectionHeading>
            <GoldDivider className="max-w-xs mx-auto mb-4" />
            <p className="font-body text-sm text-salon-muted max-w-md mx-auto">
              Fill the form below and we'll connect you directly on WhatsApp to confirm your appointment.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-10 lg:gap-14">

            {/* Left – Contact Info */}
            <motion.div
              className="lg:col-span-2"
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <h3 className="font-display text-xl font-bold text-white mb-6">
                Find <GoldText>Us Here</GoldText>
              </h3>

              <motion.div
                className="space-y-3 mb-8"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
              >
                <ContactInfoCard
                  icon="📍"
                  label="Address"
                  value={contact.address}
                  href={`https://maps.google.com/?q=Penukonda+NTR+Circle`}
                />
                <ContactInfoCard
                  icon="📞"
                  label="Call Us"
                  value={contact.phone}
                  href={`tel:${contact.phone}`}
                />
                <ContactInfoCard
                  icon="💬"
                  label="WhatsApp"
                  value={contact.whatsapp}
                  href={`https://wa.me/91${contact.whatsapp}`}
                />
                <ContactInfoCard
                  icon="📧"
                  label="Email"
                  value={contact.email}
                  href={`mailto:${contact.email}`}
                />
                <ContactInfoCard
                  icon="📸"
                  label="Instagram"
                  value="@classictrendsss"
                  href={contact.instagram}
                />
              </motion.div>

              {/* Map */}
              <div className="border border-gold-luxury/20 overflow-hidden">
                <iframe
                  title="Classic Trends Family Salon Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60811.35!2d77.5946!3d14.0841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb68c0bc5f49bdf%3A0x17b5cfdba98b5e56!2sPenukonda%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
                  className="w-full h-48 grayscale contrast-125 opacity-80"
                  style={{ filter: 'invert(90%) hue-rotate(180deg) saturate(0.5)' }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </motion.div>

            {/* Right – Form */}
            <motion.div
              className="lg:col-span-3"
              variants={slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="border border-gold-luxury/20 bg-salon-card/30 backdrop-blur-md p-6 md:p-8">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-luxury/40 to-transparent" />

                <h3 className="font-display text-xl font-bold text-white mb-1">
                  Book an <GoldText>Appointment</GoldText>
                </h3>
                <p className="font-body text-xs text-salon-muted mb-6">
                  Submitting this form will open WhatsApp with your pre-filled enquiry.
                </p>

                <form onSubmit={handleSubmit} noValidate>
                  <div className="grid sm:grid-cols-2 gap-5 mb-5">
                    <InputField
                      label="Full Name"
                      id="name"
                      value={form.name}
                      onChange={handleChange}
                      error={errors.name}
                      required
                      placeholder="Your name"
                      autoComplete="name"
                    />
                    <InputField
                      label="Phone Number"
                      id="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      error={errors.phone}
                      required
                      placeholder="10-digit mobile number"
                      autoComplete="tel"
                    />
                  </div>

                  <div className="mb-5">
                    <InputField
                      label="Email Address"
                      id="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="Optional"
                      autoComplete="email"
                    />
                  </div>

                  <div className="mb-5">
                    <SelectField
                      label="Service Interested In"
                      id="service"
                      value={form.service}
                      onChange={handleChange}
                      options={SERVICE_OPTIONS}
                      required
                    />
                    {errors.service && <p className="mt-1 font-body text-xs text-red-400">{errors.service}</p>}
                  </div>

                  <div className="mb-7">
                    <TextareaField
                      label="Additional Message"
                      id="message"
                      value={form.message}
                      onChange={handleChange}
                    />
                  </div>

                  <motion.button
                    type="submit"
                    className="w-full flex items-center justify-center gap-3 py-4 bg-gradient-to-r from-gold-dark via-gold-luxury to-gold-dark text-emerald-dark font-body font-bold text-sm tracking-widest uppercase hover:shadow-gold-lg transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-luxury focus-visible:ring-offset-2 focus-visible:ring-offset-salon-bg"
                    whileHover={{ scale: 1.01, y: -2 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.534 5.857L.057 23.75a.5.5 0 00.614.63l6.094-1.597A11.933 11.933 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.821 9.821 0 01-5.011-1.368l-.36-.213-3.723.976.993-3.62-.233-.372A9.845 9.845 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182S21.818 6.58 21.818 12 17.42 21.818 12 21.818z" />
                    </svg>
                    Send via WhatsApp
                  </motion.button>

                  <p className="text-center font-body text-[11px] text-salon-muted/60 mt-3">
                    Opens WhatsApp with your enquiry pre-filled ✦ We respond within minutes
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-luxury/20 to-transparent" />
      </section>
    </>
  );
};
