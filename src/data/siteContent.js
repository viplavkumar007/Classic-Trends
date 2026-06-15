// ============================================================
// CLASSIC TRENDS FAMILY SALON — SINGLE SOURCE OF TRUTH
// ============================================================

export const brand = {
  name: 'Classic Trends',
  fullName: 'Classic Trends Family Salon',
  tagline: 'Where Style Meets Perfection',
  subTagline: 'Premium Hair, Beauty & Grooming Services For Men, Women & Kids.',
  logo: '/logo.jpeg',
  phone: '9972608740',
  whatsapp: '9972608740',
  email: 'classictrends2026@gmail.com',
  instagram: 'https://www.instagram.com/classictrendsss',
  instagramHandle: '@classictrendsss',
  address: '#1-160, Near NTR Circle, Penukonda - 515110, Sri Sathya Sai District',
  addressShort: 'Near NTR Circle, Penukonda',
  city: 'Penukonda',
  mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3874.123!2d77.5946!3d14.0841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDA1JzAyLjgiTiA3N8KwMzUnNDAuNiJF!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin',
};

export const hero = {
  headline: 'Where Style Meets Perfection',
  subheadline: 'Premium Hair, Beauty & Grooming Services For Men, Women & Kids.',
  highlights: [
    { icon: '✦', text: 'Family Salon' },
    { icon: '✦', text: 'Men · Women · Kids' },
    { icon: '✦', text: 'Hair · Beauty · Bridal' },
    { icon: '✦', text: 'Premium Service' },
  ],
  ctas: [
    { label: 'Book Appointment', type: 'whatsapp', message: 'Hi! I would like to book an appointment at Classic Trends Family Salon. Please let me know the available slots.' },
    { label: 'WhatsApp Now', type: 'whatsapp', message: 'Hi Classic Trends! I am interested in your salon services. Please share more details.' },
    { label: 'Call Now', type: 'phone' },
  ],
};

export const about = {
  heading: 'About Classic Trends',
  subheading: 'Your Premium Family Salon in Penukonda',
  story: 'Classic Trends Family Salon is a premium grooming and beauty destination in Penukonda offering complete salon solutions for Men, Women and Kids. From trendy haircuts and beard styling to advanced hair treatments, facials, makeup, bridal services, hair coloring, keratin treatments, waxing and beauty care — we provide professional salon services under one roof.',
  mission: 'Our mission is to help every client look stylish, confident and beautiful through expert care and personalized attention.',
  stats: [
    { value: '5000+', label: 'Happy Clients' },
    { value: '50+', label: 'Services' },
    { value: '5+', label: 'Years Experience' },
    { value: '4.9★', label: 'Rating' },
  ],
};

export const whyUs = [
  { icon: '👨‍🎨', title: 'Professional Staff', desc: 'Trained stylists with years of expertise in the latest trends.' },
  { icon: '💎', title: 'Premium Products', desc: 'Only top-tier brands: L\'Oreal, O3+, VLCC, Lotus and more.' },
  { icon: '💰', title: 'Affordable Pricing', desc: 'Luxury salon experience at prices that make sense for every family.' },
  { icon: '✂️', title: 'Latest Hair Trends', desc: 'Stay ahead with the most current styles and techniques.' },
  { icon: '👰', title: 'Bridal Specialists', desc: 'Complete bridal packages for your most special day.' },
  { icon: '👨‍👩‍👧', title: 'Family Friendly', desc: 'A welcoming space for every member of the family.' },
  { icon: '🏆', title: 'Luxury Experience', desc: 'Premium ambience and service that redefines salon visits.' },
  { icon: '⭐', title: '100% Satisfaction', desc: 'Your happiness and confidence is our guarantee.' },
];

// ─── MEN'S SERVICES ────────────────────────────────────────

export const mensServices = {
  hairCuts: {
    title: "Hair Services",
    items: [
      { name: "Hair Cut", price: 149 },
      { name: "Shave", price: 59 },
      { name: "Beard Trim", price: 69 },
      { name: "Beard Shave", price: 99 },
      { name: "Change of Style", price: 149 },
      { name: "Kids Cut", price: 199 },
      { name: "Kids Change of Style", price: 129 },
      { name: "Head Wash", price: 49 },
    ]
  },
  hairColours: {
    title: "Hair Colours",
    items: [
      { name: "Fruit Colour", price: 199 },
      { name: "Garnier Colour", price: 249 },
      { name: "Loreal Colour", price: 499 },
      { name: "Loreal Ammonia Free Colour", price: 599 },
      { name: "Fashion Colour Per Streak", price: 24 },
      { name: "Fashion Colour Global", price: 699 },
      { name: "Beard Colour", price: 99 },
      { name: "Cap Highlights Colour", price: 799 },
    ]
  },
  hairSpa: {
    title: "Hair Spa",
    items: [
      { name: "Damage Hair Spa", price: 599 },
      { name: "Dandruff Hair Spa", price: 699 },
      { name: "Hair Loss Hair Spa", price: 699 },
    ]
  },
  straightening: {
    title: "Straightening",
    items: [
      { name: "Hair Straightening Half", price: 1499 },
      { name: "Hair Straightening Full", price: 1999 },
    ]
  },
  headMassage: {
    title: "Head Massage",
    items: [
      { name: "Coconut Oil (20 Min)", price: 199 },
      { name: "Almond Oil (20 Min)", price: 199 },
      { name: "Amravati Oil (20 Min)", price: 199 },
      { name: "Navratna Oil (20 Min)", price: 199 },
    ]
  },
  facials: {
    title: "Facial Services",
    items: [
      { name: "Face Wash Normal", price: 49 },
      { name: "Face Scrub Normal", price: 99 },
      { name: "Face Scrub with Steam", price: 249 },
      { name: "Face Bleach", price: 199 },
      { name: "Face & Neck Bleach", price: 299 },
      { name: "Face De-Tan O3+", price: 399 },
      { name: "Face De-Tan Raga", price: 299 },
      { name: "Face Peel Off Mask", price: 299 },
      { name: "Face Cleanup", price: 399 },
      { name: "Fruit Facial", price: 499 },
      { name: "Wine Facial", price: 699 },
      { name: "Gold Facial", price: 999 },
      { name: "Diamond Facial", price: 999 },
      { name: "Skin Lightening Facial", price: 1799 },
      { name: "Skin Brightening Facial", price: 1999 },
    ]
  },
  massageChair: {
    title: "Massage Chair",
    items: [
      { name: "10 Minutes", price: 100 },
      { name: "15 Minutes", price: 150 },
      { name: "20 Minutes", price: 200 },
      { name: "25 Minutes", price: 250 },
      { name: "30 Minutes", price: 300 },
    ]
  },
};

export const mensComboOffers = [
  {
    price: 299,
    popular: false,
    services: ["Hair Cut", "Beard Trim", "Hair Wash", "Face Wash"],
  },
  {
    price: 399,
    popular: true,
    services: ["Hair Cut", "Beard Trim", "Hair Wash", "Massage Chair (15 Min)"],
  },
  {
    price: 329,
    popular: false,
    services: ["Hair Cut", "Beard Trim", "Hair Wash", "Head Massage (15 Min)"],
  },
  {
    price: 649,
    popular: false,
    services: ["Hair Cut", "Beard Trim", "Hair Colour", "De-Tan"],
  },
  {
    price: 799,
    popular: false,
    services: ["Hair Cut", "Beard Trim", "Dandruff Hair Spa"],
  },
  {
    price: 999,
    popular: true,
    services: ["Hair Cut", "Beard Trim", "Golden Facial"],
  },
];

// ─── WOMEN'S SERVICES ──────────────────────────────────────

export const womensServices = {
  hairCuts: {
    title: "Hair Cuts",
    items: [
      { name: "Kids Hair Cut", price: 150 },
      { name: "Straight Cut", price: 150 },
      { name: "U Shape", price: 200 },
      { name: "V Shape", price: 200 },
      { name: "Layer Cut", price: 400 },
      { name: "Step Cut", price: 400 },
      { name: "Feather Cut", price: 350 },
      { name: "Advanced Hair Cut", price: 550 },
    ]
  },
  threading: {
    title: "Threading",
    items: [
      { name: "Eyebrows", price: 30 },
      { name: "Forehead", price: 20 },
      { name: "Upper Lip", price: 20 },
      { name: "Chin", price: 20 },
    ]
  },
  bleaching: {
    title: "Bleaching",
    items: [
      { name: "Face Bleach", price: 250 },
      { name: "Deep Neck", price: 200 },
      { name: "Hand", price: 300 },
      { name: "Neck", price: 150 },
    ]
  },
  waxing: {
    title: "Waxing",
    subsections: [
      {
        subtitle: "Honey Wax",
        items: [
          { name: "Hand", price: 250 },
          { name: "Under Arm", price: 70 },
          { name: "Half Leg", price: 250 },
          { name: "Full Leg", price: 400 },
        ]
      },
      {
        subtitle: "Rica Wax",
        items: [
          { name: "Hand", price: 350 },
          { name: "Under Arm", price: 120 },
          { name: "Half Leg", price: 350 },
          { name: "Full Leg", price: 600 },
          { name: "Chin Wax", price: 40 },
        ]
      }
    ]
  },
  facials: {
    title: "Facials",
    items: [
      { name: "Clean Up", price: 350 },
      { name: "D-Tan", price: 350 },
      { name: "Fruit Facial", price: 600 },
      { name: "Gold Facial", price: 800 },
      { name: "Pearl Facial", price: 900 },
      { name: "Diamond Facial", price: 1100 },
      { name: "VLCC Facial", price: 1200 },
      { name: "Lotus Facial", price: 1200 },
      { name: "Hydra Facial", price: 2000 },
      { name: "Wine Facial", price: 900 },
      { name: "Papaya Facial", price: 600 },
      { name: "Brightening Facial", price: 1200 },
    ]
  },
  manicure: {
    title: "Manicure",
    items: [
      { name: "Paraffin", price: 600 },
      { name: "Wax Aroma", price: 500 },
      { name: "Antitan", price: 400 },
      { name: "O3", price: 1000 },
    ]
  },
  pedicure: {
    title: "Pedicure",
    items: [
      { name: "Paraffin", price: 600 },
      { name: "Wax Aroma", price: 500 },
      { name: "Antitan", price: 500 },
      { name: "O3", price: 1000 },
    ]
  },
  hairTreatment: {
    title: "Hair Treatment",
    items: [
      { name: "Anti Dandruff Treatment", price: 1100 },
      { name: "Hair Wash with Conditioner", price: 250 },
      { name: "Hair Oil Massage", price: 250 },
      { name: "Hair Spa", price: 1300 },
    ]
  },
};

// ─── ADVANCED HAIR SERVICES ────────────────────────────────

export const advancedHairServices = {
  coloring: {
    title: "Hair Coloring",
    items: [
      { name: "Highlights Per Streak", price: 249 },
      { name: "Root Touch-up", price: 999 },
      { name: "Root Touch-up Ammonia Free", price: 1100 },
    ],
    global: {
      subtitle: "Global Hair Color",
      items: [
        { name: "Short", price: 1400 },
        { name: "Medium", price: 2499 },
        { name: "Long", price: 3299 },
      ]
    },
    globalAmmoniaFree: {
      subtitle: "Global Ammonia Free",
      items: [
        { name: "Short", price: 1499 },
        { name: "Medium", price: 1999 },
        { name: "Long", price: 2999 },
      ]
    },
    fullHighlights: {
      subtitle: "Full Global Highlights",
      items: [
        { name: "Short", price: 2999 },
        { name: "Medium", price: 3499 },
        { name: "Long", price: 4499 },
      ]
    },
  },
  straightening: {
    title: "Straightening & Smoothening",
    items: [
      { name: "Short", price: 3999 },
      { name: "Medium", price: 6499 },
      { name: "Long", price: 6499 },
    ]
  },
  keratin: {
    title: "Keratin Treatment",
    items: [
      { name: "Short", price: 4999 },
      { name: "Medium", price: 6999 },
      { name: "Long", price: 6999 },
    ]
  },
  botox: {
    title: "Hair Botox",
    items: [
      { name: "Short", price: 4499 },
      { name: "Medium", price: 6499 },
      { name: "Long", price: 7999 },
    ]
  },
  tempStyling: {
    title: "Temporary Styling",
    items: [
      { name: "Temporary Straightening", price: 599 },
      { name: "Ironing (Short–Long)", priceRange: "₹499–₹799" },
    ]
  },
};

// ─── SKIN CARE ─────────────────────────────────────────────

export const skinCare = {
  aromaFacials: {
    title: "Aroma Facials",
    items: [
      { name: "Fruit Fresh Facial", price: 699 },
      { name: "Gold Glow Facial", price: 999 },
      { name: "Pearl Glow Facial", price: 1399 },
      { name: "De-Tan Facial", price: 1499 },
    ]
  },
  premiumFacials: {
    title: "Premium Facials",
    items: [
      { name: "Skin Brightening Facial", price: 1999 },
      { name: "Bridal Facial", price: 2399 },
    ]
  },
  deepCleaning: {
    title: "Deep Cleaning",
    items: [
      { name: "Clean-up", price: 599 },
      { name: "Fruit Clean-up", price: 499 },
      { name: "Gold Radiance Clean-up", price: 799 },
      { name: "Pearl/Diamond Clean-up", price: 899 },
    ]
  },
};

// ─── STYLING & SPA ─────────────────────────────────────────

export const hairWashStyling = {
  title: "Hair Wash & Styling",
  items: [
    { name: "Wash & Blow Dry", price: 199 },
    { name: "Wash & Deep Conditioning", price: 299 },
    { name: "Straight Blow Dry (Short–Long)", priceRange: "₹399–₹499" },
    { name: "Curly Setup", price: 699 },
  ]
};

export const hairSpaServices = {
  title: "Hair Spa Services",
  items: [
    { name: "Moisturizing Hair Spa", price: 799 },
    { name: "Repair/Damage Hair Spa", price: 999 },
    { name: "Frizz Ease Hair Spa", price: 999 },
    { name: "Dandruff Removing Spa", price: 999 },
  ]
};

// ─── MAKEUP & MEHENDI ──────────────────────────────────────

export const makeupServices = {
  title: "Makeup Services",
  items: [
    { name: "Light Makeup", priceRange: "₹1500–₹2500" },
    { name: "HD Bridal Makeup", priceRange: "₹4000–₹5000" },
    { name: "Saree Pre-Plating", price: 350 },
    { name: "Saree Draping", price: 500 },
    { name: "Lehanga Draping", price: 500 },
  ]
};

export const mehendiServices = {
  title: "Mehendi Services",
  items: [
    { name: "Simple Mehendi (Both Hands)", price: 1000 },
    { name: "Bridal Mehendi (Both Hands)", price: 3500 },
  ]
};

// ─── WOMEN'S PACKAGES ──────────────────────────────────────

export const womensPackages = [
  {
    title: "Pick Any 3 Services",
    price: 999,
    popular: false,
    services: [
      "Basic Hair Cut",
      "De-Tan Face & Neck",
      "Herbal Clean Up",
      "Half Arms Waxing",
      "Regular Pedicure",
    ]
  },
  {
    title: "Pick Any 5 Services",
    price: 1999,
    popular: true,
    services: [
      "Head Massage",
      "Basic Hair Cut",
      "De-Tan Face & Neck",
      "De-Tan Full Arms",
      "Herbal Clean Up",
      "Fruit Facial",
      "Full Arms Waxing",
      "Half Legs Waxing",
      "Regular Manicure",
      "Regular Pedicure",
    ]
  },
];

// ─── TESTIMONIALS ──────────────────────────────────────────

export const testimonials = [
  {
    name: "Priya Reddy",
    role: "Regular Client",
    rating: 5,
    text: "Amazing experience every single time! The bridal makeup they did for my sister's wedding was absolutely stunning. Professional staff and premium products used.",
    service: "Bridal Makeup",
    avatar: "PR",
  },
  {
    name: "Ravi Kumar",
    role: "Men's Grooming",
    rating: 5,
    text: "Best salon in Penukonda for men's grooming! The beard styling and facial are top-notch. The combo packages offer great value for money.",
    service: "Beard Styling & Facial",
    avatar: "RK",
  },
  {
    name: "Kavitha Sharma",
    role: "Beauty Client",
    rating: 5,
    text: "I got my keratin treatment done here and the results are incredible! My hair is so smooth and shiny. Highly recommend their advanced hair services.",
    service: "Keratin Treatment",
    avatar: "KS",
  },
  {
    name: "Suresh Babu",
    role: "Family Customer",
    rating: 5,
    text: "We bring the whole family here — from kids' haircuts to mom's facials to dad's grooming. One-stop destination for everything. Very professional service!",
    service: "Family Package",
    avatar: "SB",
  },
  {
    name: "Anitha Naidu",
    role: "Bridal Client",
    rating: 5,
    text: "Classic Trends made me feel like a queen on my wedding day. The bridal package was complete — makeup, mehendi, hair styling. Absolutely loved it!",
    service: "Bridal Package",
    avatar: "AN",
  },
  {
    name: "Kiran Prasad",
    role: "Hair Color Client",
    rating: 5,
    text: "Got global hair highlights done here. The colorist is very skilled. The salon has great ambience and the staff is friendly and knowledgeable.",
    service: "Hair Highlights",
    avatar: "KP",
  },
];

// ─── FAQs ──────────────────────────────────────────────────

export const faqs = [
  {
    q: "Do I need an appointment or can I walk in?",
    a: "Both are welcome! Walk-ins are accepted based on availability. However, we recommend booking an appointment via WhatsApp or call to avoid wait times, especially for bridal and advanced hair services.",
  },
  {
    q: "What brands of products do you use?",
    a: "We use only premium brands including L'Oreal, O3+, VLCC, Lotus, Garnier, and more. All products are professional-grade and safe for all hair and skin types.",
  },
  {
    q: "Do you offer bridal packages?",
    a: "Yes! We offer complete bridal packages including HD Bridal Makeup (₹4000–₹5000), Bridal Mehendi (₹3500), Bridal Facial (₹2399), and complete hair styling. WhatsApp us to discuss custom bridal packages.",
  },
  {
    q: "How long does a keratin treatment take?",
    a: "A keratin treatment typically takes 2–3 hours depending on hair length and thickness. We recommend booking at least 2 days before any important event for best results.",
  },
  {
    q: "Is the salon family-friendly? Do you have services for kids?",
    a: "Absolutely! Classic Trends is a family salon. We have dedicated kids' haircuts (₹150–₹199) in a fun, friendly environment that kids enjoy.",
  },
  {
    q: "What are your salon timings?",
    a: "We are open 7 days a week. Please WhatsApp or call us at 9972608740 for current operating hours.",
  },
  {
    q: "Do you offer combo packages for men?",
    a: "Yes! We have excellent combo packages for men starting from ₹299. Options include haircut + beard + hair wash combos, facial combos, and spa combos. Check our Men's Combos section for details.",
  },
  {
    q: "How do I book an appointment?",
    a: "You can book by: 1) WhatsApp at 9972608740, 2) Call at 9972608740, 3) Fill our contact form on this website, or 4) Visit us directly at Near NTR Circle, Penukonda.",
  },
];

// ─── GALLERY TABS ──────────────────────────────────────────

export const galleryTabs = [
  "Men's Grooming",
  "Women's Beauty",
  "Hair Coloring",
  "Keratin Treatment",
  "Facials",
  "Bridal Makeup",
  "Mehendi",
  "Salon Interior",
];

// ─── CONTACT ───────────────────────────────────────────────

export const contact = {
  phone: '9972608740',
  whatsapp: '9972608740',
  email: 'classictrends2026@gmail.com',
  instagram: 'https://www.instagram.com/classictrendsss',
  address: '#1-160, Near NTR Circle, Penukonda - 515110, Sri Sathya Sai District',
  mapEmbed: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3874.5!2d77.5946!3d14.0841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb5b7a0c0c0c0c0%3A0x0!2sPenukonda!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin`,
};

// ─── FOOTER LINKS ──────────────────────────────────────────

export const footerLinks = {
  quickLinks: [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Offers', href: '#offers' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ],
  services: [
    { label: "Men's Grooming", href: '#services' },
    { label: "Women's Beauty", href: '#services' },
    { label: 'Bridal Makeup', href: '#services' },
    { label: 'Keratin Treatment', href: '#services' },
    { label: 'Hair Coloring', href: '#services' },
    { label: 'Hair Spa', href: '#services' },
  ],
};

// ─── WHATSAPP HELPER ───────────────────────────────────────

export const getWhatsAppURL = (message) => {
  const phone = '919972608740';
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${encoded}`;
};

export const getServiceWhatsAppURL = (serviceName, price) => {
  const priceText = price ? ` (₹${price})` : '';
  const message = `Hi Classic Trends! I would like to book *${serviceName}*${priceText} service. Please confirm the appointment. Thank you!`;
  return getWhatsAppURL(message);
};
