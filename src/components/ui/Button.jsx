import { motion } from 'framer-motion';

export const GoldButton = ({ children, onClick, href, className = '', size = 'md', loading = false }) => {
  const sizes = {
    sm: 'px-5 py-2.5 text-sm',
    md: 'px-7 py-3.5 text-sm',
    lg: 'px-8 py-4 text-base',
  };

  const base = `
    inline-flex items-center justify-center gap-2 font-body font-semibold
    tracking-wide rounded-none border border-gold-luxury
    bg-gradient-to-r from-gold-dark via-gold-luxury to-gold-dark
    text-emerald-dark
    relative overflow-hidden
    transition-all duration-300
    hover:-translate-y-0.5 hover:shadow-gold
    active:translate-y-0 active:shadow-none
    focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-luxury focus-visible:ring-offset-2 focus-visible:ring-offset-salon-bg
    ${sizes[size]} ${className}
  `;

  const inner = loading ? (
    <span className="flex items-center gap-2">
      <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
      </svg>
      Processing...
    </span>
  ) : children;

  if (href) {
    return (
      <motion.a
        href={href}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        className={base}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <span className="absolute inset-0 bg-white/10 translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-700 skew-x-12 pointer-events-none" />
        {inner}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className={base}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      disabled={loading}
    >
      <span className="absolute inset-0 bg-white/10 translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-700 skew-x-12 pointer-events-none" />
      {inner}
    </motion.button>
  );
};

export const OutlineButton = ({ children, onClick, href, className = '', size = 'md' }) => {
  const sizes = {
    sm: 'px-5 py-2.5 text-sm',
    md: 'px-7 py-3.5 text-sm',
    lg: 'px-8 py-4 text-base',
  };

  const base = `
    inline-flex items-center justify-center gap-2 font-body font-semibold
    tracking-wide rounded-none border border-gold-luxury/60
    text-gold-luxury bg-transparent
    transition-all duration-300
    hover:bg-gold-luxury/10 hover:border-gold-luxury hover:-translate-y-0.5
    active:translate-y-0
    focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-luxury
    ${sizes[size]} ${className}
  `;

  if (href) {
    return (
      <motion.a
        href={href}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        className={base}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className={base}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.button>
  );
};

export const WhatsAppButton = ({ children, message, className = '', size = 'md' }) => {
  const phone = '919972608740';
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  return (
    <GoldButton href={url} className={className} size={size}>
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.534 5.857L.057 23.75a.5.5 0 00.614.63l6.094-1.597A11.933 11.933 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.821 9.821 0 01-5.011-1.368l-.36-.213-3.723.976.993-3.62-.233-.372A9.845 9.845 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182S21.818 6.58 21.818 12 17.42 21.818 12 21.818z" />
      </svg>
      {children}
    </GoldButton>
  );
};
