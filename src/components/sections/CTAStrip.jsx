import { motion } from 'framer-motion';
import { getWhatsAppURL } from '../../data/siteContent';

export const CTAStrip = ({ onBookNow }) => {
  const waURL = getWhatsAppURL('Hi Classic Trends! I would like to book an appointment. Please share available slots. Thank you!');

  return (
    <section className="relative py-14 md:py-20 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-deep via-emerald-mid to-emerald-deep" />
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-gold-luxury/10 via-transparent to-gold-luxury/10"
          animate={{ x: ['-100%', '100%'] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
        />
      </div>
      {/* Gold pulse glow */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-gold-luxury/10 blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-luxury to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-luxury to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-gold-luxury text-[10px] tracking-[0.4em] uppercase font-body font-medium mb-3">
            Limited Slots Available
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 leading-tight">
            Ready for Your{' '}
            <span className="bg-gradient-to-r from-gold-luxury via-gold-champagne to-gold-luxury bg-clip-text text-transparent">
              Transformation?
            </span>
          </h2>
          <p className="font-accent text-base md:text-lg text-white/70 italic mb-8 max-w-xl mx-auto">
            Book your appointment today and experience the premium Classic Trends difference.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href={waURL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                e.preventDefault();
                onBookNow?.('Hi Classic Trends! I would like to book an appointment. Please share available slots. Thank you!', 'Book Appointment');
              }}
              className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-gold-dark via-gold-luxury to-gold-dark text-emerald-dark font-body font-bold text-sm tracking-widest uppercase shadow-gold hover:shadow-gold-lg hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto justify-center"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.534 5.857L.057 23.75a.5.5 0 00.614.63l6.094-1.597A11.933 11.933 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.821 9.821 0 01-5.011-1.368l-.36-.213-3.723.976.993-3.62-.233-.372A9.845 9.845 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182S21.818 6.58 21.818 12 17.42 21.818 12 21.818z" />
              </svg>
              Book on WhatsApp
            </motion.a>

            <motion.a
              href="tel:9972608740"
              className="flex items-center gap-3 px-8 py-4 border-2 border-white/30 text-white font-body font-semibold text-sm tracking-widest uppercase hover:border-white/60 hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto justify-center"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              📞 9972608740
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
