// ============================================================
// CLASSIC TRENDS FAMILY SALON — SINGLE SOURCE OF TRUTH
// ============================================================

export const brand = {
  name: 'Classic Trends',
  fullName: 'Classic Trends Family Salon',
  tagline: 'Where Style Meets Perfection',
  subTagline: 'Premium Hair, Beauty & Grooming Services For Men, Women & Kids.',
  logo: '/classic-trends-logo.png',
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

export const payment = {
  qrImage: '/payment-qr.jpeg',
  upiId: 'paytm.s2g0yp7@pty',
  merchantName: 'Classic Trends',
  phone: '8660218950',
  condition: 'Discounted prices and reward points are valid only for services confirmed with advance payment.',
};

const onlineAdvanceRewards = [
  ['Hair Cut', 99, 0],
  ['Shave', 49, 0],
  ['Beard Trim', 69, 0],
  ['Beard Shave', 99, 0],
  ['Change of Style', 129, 6],
  ['Kids Cut', 149, 6],
  ['Kids Hair Cut', 149, 5],
  ['Kids Change of Style', 129, 6],
  ['Head Wash', 49, 0],
  ['Fruit Colour', 199, 6],
  ['Garnier Colour', 249, 8],
  ['Loreal Colour', 499, 10],
  ['Loreal Ammonia Free Colour', 599, 10],
  ['Fashion Colour Per Streak', 599, 10],
  ['Fashion Colour Global', 649, 10],
  ['Beard Colour', 99, 0],
  ['Cap Highlights Colour', 799, 20],
  ['Damage Hair Spa', 599, 30],
  ['Dandruff Hair Spa', 699, 30],
  ['Hair Loss Hair Spa', 699, 30],
  ['Hair Straightening Half', 1449, 40],
  ['Hair Straightening Full', 1949, 50],
  ['Coconut Oil (20 Min)', 199, 6],
  ['Almond Oil (20 Min)', 199, 6],
  ['Amravati Oil (20 Min)', 199, 6],
  ['Navratna Oil (20 Min)', 199, 6],
  ['Face Wash Normal', 49, 0],
  ['Face Scrub Normal', 99, 0],
  ['Face Scrub with Steam', 249, 6],
  ['Face Bleach', 199, 6],
  ['Face & Neck Bleach', 299, 8],
  ['Face De-Tan O3+', 399, 10],
  ['Face De-Tan Raga', 299, 8],
  ['Face Peel Off Mask', 299, 8],
  ['Face Cleanup', 399, 10],
  ['Fruit Facial', 499, 12],
  ['Wine Facial', 699, 50],
  ['Gold Facial', 999, 100],
  ['Diamond Facial', 999, 100],
  ['Skin Lightening Facial', 1799, 120],
  ['Skin Brightening Facial', 1999, 128],
  ['10 Minutes', 100, 0],
  ['15 Minutes', 150, 0],
  ['20 Minutes', 200, 6],
  ['25 Minutes', 250, 8],
  ['30 Minutes', 300, 10],
  ['Straight Cut', 149, 5],
  ['U Shape', 199, 7],
  ['V Shape', 199, 7],
  ['Layer Cut', 399, 9],
  ['Step Cut', 399, 9],
  ['Feather Cut', 329, 8],
  ['Advanced Hair Cut', 539, 10],
  ['Eyebrows', 30, 0],
  ['Forehead', 20, 0],
  ['Upper Lip', 20, 0],
  ['Chin', 20, 0],
  ['Deep Neck', 199, 5],
  ['Hand', 249, 6],
  ['Under Arm', 70, 0],
  ['Half Leg', 249, 6],
  ['Full Leg', 399, 9],
  ['Chin Wax', 40, 0],
  ['Clean Up', 299, 6],
  ['D-Tan', 349, 7],
  ['Pearl Facial', 799, 16],
  ['VLCC Facial', 1199, 35],
  ['Lotus Facial', 1199, 35],
  ['Hydra Facial', 1849, 50],
  ['Papaya Facial', 601, 10],
  ['Brightening Facial', 1199, 35],
  ['Paraffin', 599, 10],
  ['Wax Aroma', 499, 10],
  ['O3', 999, 28],
  ['Anti Dandruff Treatment', 1099, 32],
  ['Hair Wash with Conditioner', 249, 6],
  ['Hair Oil Massage', 249, 6],
  ['Hair Spa', 1299, 35],
  ['Highlights Per Streak', 249, 6],
  ['Root Touch-up', 999, 28],
  ['Root Touch-up Ammonia Free', 1099, 30],
  ['Short', 1399, 38],
  ['Medium', 2349, 60],
  ['Long', 3199, 100],
  ['Temporary Straightening', 549, 30],
  ['Ironing (Shortâ€“Long)', '449-749', 20],
  ['Fruit Fresh Facial', 649, 20],
  ['Gold Glow Facial', 949, 39],
  ['Pearl Glow Facial', 1349, 47],
  ['De-Tan Facial', 1449, 50],
  ['Bridal Facial', 2349, 100],
  ['Clean-up', 549, 49],
  ['Fruit Clean-up', 449, 38],
  ['Gold Radiance Clean-up', 749, 52],
  ['Pearl/Diamond Clean-up', 849, 52],
  ['Wash & Blow Dry', 189, 6],
  ['Wash & Deep Conditioning', 289, 8],
  ['Straight Blow Dry (Shortâ€“Long)', '289-489', 8],
  ['Moisturizing Hair Spa', 749, 40],
  ['Repair/Damage Hair Spa', 949, 50],
  ['Frizz Ease Hair Spa', 949, 50],
  ['Dandruff Removing Spa', 949, 50],
  ['Light Makeup', '1500-2500', 20],
  ['HD Bridal Makeup', '4000-5000', 50],
  ['Saree Pre-Plating', 350, 20],
  ['Saree Draping', 500, 50],
  ['Lehanga Draping', 500, 30],
  ['Simple Mehendi (Both Hands)', 999, 40],
  ['Bridal Mehendi (Both Hands)', 3499, 50],
];

const rewardsByName = new Map(onlineAdvanceRewards.map(([name, discountPrice, rewardPoints]) => [
  name.toLowerCase(),
  { discountPrice, rewardPoints },
]));

const addAdvanceRewards = (node) => {
  if (Array.isArray(node)) {
    node.forEach(addAdvanceRewards);
    return;
  }
  if (!node || typeof node !== 'object') return;
  if (node.name && rewardsByName.has(node.name.toLowerCase())) {
    Object.assign(node, rewardsByName.get(node.name.toLowerCase()));
  }
  Object.values(node).forEach(addAdvanceRewards);
};

[
  mensServices,
  womensServices,
  advancedHairServices,
  hairWashStyling,
  hairSpaServices,
  skinCare,
  makeupServices,
  mehendiServices,
].forEach(addAdvanceRewards);

const setAdvanceRewards = (items, values) => {
  items.forEach((item, index) => {
    const [discountPrice, rewardPoints] = values[index];
    Object.assign(item, { discountPrice, rewardPoints });
  });
};

setAdvanceRewards(womensServices.bleaching.items, [
  [249, 6],
  [199, 5],
  [299, 6],
  [149, 3],
]);

setAdvanceRewards(womensServices.waxing.subsections[0].items, [
  [249, 6],
  [70, 0],
  [249, 6],
  [399, 9],
]);

setAdvanceRewards(womensServices.waxing.subsections[1].items, [
  [349, 8],
  [120, 0],
  [349, 8],
  [599, 10],
  [40, 0],
]);

setAdvanceRewards(womensServices.manicure.items, [
  [599, 10],
  [499, 10],
  [400, 0],
  [999, 28],
]);

setAdvanceRewards(womensServices.pedicure.items, [
  [599, 12],
  [499, 10],
  [500, 0],
  [999, 28],
]);

setAdvanceRewards(advancedHairServices.coloring.global.items, [
  [1399, 38],
  [2349, 60],
  [3199, 100],
]);

setAdvanceRewards(advancedHairServices.coloring.globalAmmoniaFree.items, [
  [1449, 50],
  [1959, 68],
  [2949, 100],
]);

setAdvanceRewards(advancedHairServices.coloring.fullHighlights.items, [
  [2949, 100],
  [3449, 120],
  [4449, 150],
]);

setAdvanceRewards(advancedHairServices.straightening.items, [
  [3949, 120],
  [6449, 149],
  [6499, 149],
]);

setAdvanceRewards(advancedHairServices.keratin.items, [
  [4949, 130],
  [6949, 150],
  [6949, 150],
]);

setAdvanceRewards(advancedHairServices.botox.items, [
  [4449, 130],
  [6449, 150],
  [7949, 200],
]);

mensComboOffers.forEach((combo, index) => {
  const rewards = [
    { discountPrice: 299, rewardPoints: 6 },
    { discountPrice: 399, rewardPoints: 8 },
    { discountPrice: 329, rewardPoints: 8 },
    { discountPrice: 649, rewardPoints: 10 },
    { discountPrice: 799, rewardPoints: 12 },
    { discountPrice: 999, rewardPoints: 18 },
  ][index];
  Object.assign(combo, rewards);
});

womensPackages[0].discountPrice = 949;
womensPackages[0].rewardPoints = 20;
womensPackages[1].discountPrice = 1999;
womensPackages[1].rewardPoints = 30;

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

export const getServiceWhatsAppURL = (serviceName) => {
  const message = `Hi Classic Trends! I would like to book *${serviceName}* service. Please confirm the appointment. Thank you!`;
  return getWhatsAppURL(message);
};

export const getAdvanceServiceWhatsAppURL = (serviceName, discountedPrice, rewardPoints = 0) => {
  const priceText = discountedPrice ? `*Discounted Price:* ₹${discountedPrice}` : '*Discounted Price:* Advance payment done';
  const pointsText = rewardPoints > 0
    ? `*Reward Points Earned:* ${rewardPoints} points redeemable on my next service.`
    : '*Reward Points Earned:* 0 points.';
  const message = `Hi Classic Trends! I have paid advance for *${serviceName}* service.

${priceText}
${pointsText}

I will attach the advance payment screenshot. Please confirm my appointment. Thank you!`;
  return getWhatsAppURL(message);
};
