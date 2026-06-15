export const GoldDivider = ({ className = '' }) => (
  <div className={`flex items-center gap-3 ${className}`}>
    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gold-luxury to-transparent opacity-40" />
    <span className="text-gold-luxury text-sm">✦</span>
    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gold-luxury to-transparent opacity-40" />
  </div>
);

export const SectionLabel = ({ children }) => (
  <p className="text-gold-luxury text-xs tracking-[0.3em] uppercase font-body font-medium mb-3">
    {children}
  </p>
);

export const SectionHeading = ({ children, className = '', light = false }) => (
  <h2
    className={`font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight ${
      light ? 'text-white' : 'text-white'
    } ${className}`}
  >
    {children}
  </h2>
);

export const GoldText = ({ children, className = '' }) => (
  <span
    className={`bg-gradient-to-r from-gold-luxury via-gold-champagne to-gold-luxury bg-clip-text text-transparent ${className}`}
  >
    {children}
  </span>
);
