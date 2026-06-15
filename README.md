# Classic Trends Family Salon — Website

Premium, production-ready React website for Classic Trends Family Salon, Penukonda.

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Open in browser
# http://localhost:5173
```

---

## 📁 Folder Structure

```
classic-trends-salon/
├── public/
│   └── logo.jpeg                    # Salon logo
├── src/
│   ├── assets/                      # Static assets
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx           # Sticky navbar with mobile menu
│   │   │   └── Footer.jsx           # Footer with links
│   │   ├── sections/
│   │   │   ├── Hero.jsx             # Hero with parallax
│   │   │   ├── About.jsx            # About + Why Choose Us
│   │   │   ├── Services.jsx         # Full service menu with tabs
│   │   │   ├── Gallery.jsx          # Gallery with category tabs
│   │   │   ├── Testimonials.jsx     # Testimonial slider/grid
│   │   │   ├── FAQ.jsx              # Accordion FAQ
│   │   │   ├── Contact.jsx          # Form → WhatsApp redirect
│   │   │   └── CTAStrip.jsx         # Conversion strip
│   │   └── ui/
│   │       ├── Button.jsx           # Gold/Outline/WhatsApp buttons
│   │       ├── SectionHeader.jsx    # Reusable heading components
│   │       ├── Toast.jsx            # Toast notifications
│   │       └── FloatingButtons.jsx  # Fixed WhatsApp/Call/Instagram
│   ├── data/
│   │   └── siteContent.js           # ⭐ SINGLE SOURCE OF TRUTH
│   ├── hooks/
│   │   ├── useScrollSpy.js          # Active nav section tracking
│   │   └── useInView.js             # Scroll animation trigger
│   ├── utils/
│   │   └── motionVariants.js        # Framer Motion variants
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── vercel.json
├── netlify.toml
└── package.json
```

---

## ✨ Key Features

### WhatsApp Integration
- Every service row → click → opens WhatsApp with pre-typed message
- Combo/package cards → opens WhatsApp with full package details
- Contact form → submits as WhatsApp message (no backend needed!)
- Floating WhatsApp button always visible
- All CTAs link to WhatsApp with relevant messages

### Service Booking Flow
```
User clicks service → WhatsApp opens with:
"Hi Classic Trends! I would like to book [Service Name] (₹[Price]) service.
Please confirm the appointment. Thank you!"
```

### Contact Form Flow
```
User fills form → Clicks "Send via WhatsApp" → WhatsApp opens with:
"Hi Classic Trends! 🙏
New Appointment Enquiry
👤 Name: [Name]
📞 Phone: [Phone]
💈 Service: [Selected Service]
💬 Message: [Message]
Please confirm my appointment. Thank you!"
```

---

## 🛠 Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| React | 18.x | UI Framework |
| Vite | 5.x | Build Tool |
| Tailwind CSS | 3.x | Styling |
| Framer Motion | 11.x | Animations |
| Lucide React | 0.383 | Icons |

---

## 🌐 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow the prompts — it auto-detects Vite config
```

Or: Push to GitHub → Import on vercel.com → Auto-deploys

### Netlify
```bash
# Build first
npm run build

# Deploy dist folder via Netlify Dashboard
# OR: Connect GitHub repo → Auto-deploy from main branch
```

---

## ✏️ Updating Content

All content lives in **`src/data/siteContent.js`**:

```js
// Update business info
export const brand = {
  phone: '9972608740',
  email: 'classictrends2026@gmail.com',
  // ...
};

// Add/edit services
export const mensServices = {
  hairCuts: {
    items: [
      { name: "Hair Cut", price: 149 },
      // Add more...
    ]
  }
};

// Edit testimonials, FAQs, etc.
```

---

## 📱 Sections

1. **Navbar** — Sticky, blur on scroll, active section highlight, mobile drawer
2. **Hero** — Parallax, floating logo, staggered animations, 3 CTAs
3. **About** — Stats, story, Why Choose Us cards
4. **Services** — 4 tabs: Men's / Women's / Advanced Hair / Bridal
5. **Gallery** — 8 category tabs, click-to-book
6. **CTA Strip** — Animated glowing section
7. **Testimonials** — 6 cards (grid + mobile slider)
8. **FAQ** — Animated accordion
9. **Contact** — Form + WhatsApp + Map + Contact info
10. **Footer** — Full links + social
11. **Floating Buttons** — WhatsApp (pinging) + Call + Instagram + Book

---

## 🎨 Brand Colors

| Name | Hex |
|------|-----|
| Deep Emerald | `#03363D` |
| Dark BG | `#021F24` |
| Luxury Gold | `#D4AF37` |
| Champagne Gold | `#E6D3A3` |
| Muted Text | `#B8C4C7` |

---

## 📞 Contact

**Classic Trends Family Salon**  
#1-160, Near NTR Circle, Penukonda - 515110  
📞 9972608740  
📧 classictrends2026@gmail.com  
📸 [@classictrendsss](https://www.instagram.com/classictrendsss)
