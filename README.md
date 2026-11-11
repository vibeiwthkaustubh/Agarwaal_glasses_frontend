# AGARWAL GLASS — Premium Interior Glass Portfolio Website

> **Reflection of Satisfaction**  
> *Bespoke Architectural Interior Glass Design & Installation Studio*  
> Established: July 2022 • Head Office: New Alipore, Kolkata, West Bengal, India

---

## 1. Project Overview

This is the official, frontend-first portfolio website for **AGARWAL GLASS**, an interior glass design and installation business founded in July 2022 in New Alipore, Kolkata. The studio serves homeowners, architects, luxury interior designers, and commercial clients across Kolkata and all districts of West Bengal.

The platform is designed to:
- Showcase luxury interior glass solutions and architectural concepts.
- Build profound customer trust through meticulous craftsmanship presentation.
- Drive high-intent consultations and site visits via official click-to-chat WhatsApp flows (`+91 9073407966`) and direct phone calls.
- Offer bilingual support in **English** and **Hindi (हिन्दी)** with an instant language toggle.

---

## 2. Technology Stack

- **React.js 18** — Component-driven frontend architecture.
- **Vite 6** — Lightning-fast build tooling and hot module replacement.
- **Tailwind CSS 3** — Utility-first styling with custom brand color palette and luxury shadows.
- **Lucide React** — Elegant minimalist iconography.
- **Framer Motion** — Subtle, cinematic entrance animations respecting reduced-motion accessibility.
- **Modern Semantic HTML5 & Modern CSS** — Structured data (Schema.org JSON-LD), Open Graph tags, responsive viewports, and custom luxury scrollbars.

---

## 3. Brand Identity & Design System

### Color Palette

| Color Name | Hex Code | Purpose |
| :--- | :--- | :--- |
| **Warm Ivory** | `#F7F2EA` | Main architectural background foundation |
| **Champagne Gold** | `#C5A46D` | Highlights, badges, borders, and luminous accents |
| **Deep Burgundy** | `#4A1F2D` | Royal brand identity color, primary headings, luxury buttons |
| **Warm Charcoal** | `#242321` | High-contrast, accessible primary body text |
| **Soft Beige** | `#E8DED0` | Secondary section fills and card backgrounds |
| **Muted Bronze** | `#92734F` | Decorative subtext, dividers, and accents |
| **Pure White** | `#FFFFFF` | Cards and foreground contrast surfaces |

### Typography

- **Headings (English)**: *Cormorant Garamond* / *Playfair Display* (Editorial luxury serif).
- **Headings (Hindi)**: *Rozha One* / *Noto Serif Devanagari*.
- **Body (English)**: *Inter* / *Manrope* (Clean, legible architectural sans-serif).
- **Body (Hindi)**: *Noto Sans Devanagari*.

### Architectural Background Layering System

To avoid blurring text or UI elements, the website implements a dedicated layered background system:
1. **Background Layer (`z-0`)**: High-resolution architectural interior photograph with warm ambient lighting and glass partitions.
2. **Blurred Pseudo-Layer**: `filter: blur(10px)` applied strictly to the decorative background layer only.
3. **Warm Translucent Overlay**: Warm Ivory (`#F7F2EA`) / Amber overlay with subtle radial glow flares.
4. **Foreground Content (`z-10`)**: 100% sharp text, cards, buttons, and navigation without visual degradation.

---

## 4. Services Covered (7 Specializations)

1. **Glass Partitions** — Acoustic and spatial floor-to-ceiling dividers.
2. **Glass Doors** — Pivot, sliding, and swing systems with architectural hardware.
3. **Glass Railings** — Frameless balustrades for staircases and mezzanines.
4. **Shower Enclosures** — Watertight frameless cubicles and walk-in screens.
5. **Designer Mirrors** — Ambient backlit, beveled, and organic statement mirrors.
6. **Decorative Glass** — Fluted, reeded, and tinted privacy glass.
7. **Frosted Glass** — Velvet satin-etched privacy daylight glass.

*(Note: Facades and metal/aluminum fabrication are strictly excluded as per business scope.)*

---

## 5. WhatsApp Click-to-Chat Integration

Enquiry forms and CTA buttons integrate directly with WhatsApp via the official Click-to-Chat standard:
- **Target Number**: `+91 9073407966`
- **URL Pattern**: `https://wa.me/919073407966?text=ENCODED_MESSAGE`
- **Submission Flow**: The customer fills in their name, phone number, service required, project location, preferred site visit date, and notes. The form validates all required fields, encodes the text, and redirects the customer to WhatsApp with a pre-formatted message so they can tap **Send** directly to Agarwal Glass.

---

## 6. Project Structure

```
agarwal-glass/
├── public/
│   ├── favicon.svg            # Custom AG geometric glass monogram favicon
│   └── logo.svg               # Vector brand logo (horizontal format)
├── src/
│   ├── components/
│   │   ├── Footer.jsx         # Section 9: Complete verified footer with quick links
│   │   ├── Logo.jsx           # Reusable SVG logo (horizontal, compact, stacked)
│   │   ├── Navbar.jsx         # Section 6: Floating sticky navbar with language switcher
│   │   ├── ProjectCard.jsx    # Section 4: Project card with 1.05x zoom & touch states
│   │   ├── ProjectModal.jsx   # Detailed project preview & 'Request Similar Design'
│   │   ├── SectionHeading.jsx # Editorial luxury section title component
│   │   ├── ServiceCard.jsx    # Section 3: Service card with hover and enquire actions
│   │   ├── ServiceModal.jsx   # Service specification details modal
│   │   ├── SiteVisitModal.jsx # Instant modal for booking a site visit & survey
│   │   └── WhatsAppButton.jsx # Reusable WhatsApp button (solid, outline, floating)
│   ├── context/
│   │   └── LanguageContext.jsx# English & Hindi language state provider
│   ├── data/
│   │   ├── projects.js        # Featured project gallery data & categories
│   │   ├── services.js        # The 7 core interior glass services
│   │   └── translations.js    # Complete EN & HI bilingual dictionary
│   ├── sections/
│   │   ├── Hero.jsx           # Section 1: Hero banner (85–95vh)
│   │   ├── About.jsx          # Section 2: Split-layout story & 4 verified pillars
│   │   ├── Services.jsx       # Section 3: 7 service categories grid
│   │   ├── Projects.jsx       # Section 4: Filterable architectural project gallery
│   │   ├── WhyChooseUs.jsx    # Section 5: 5 core craftsmanship values
│   │   ├── Process.jsx        # Section 6: 6-step workflow timeline (H: desktop, V: mobile)
│   │   ├── CTA.jsx            # Section 7: Striking banner for site visit & calls
│   │   └── Contact.jsx        # Section 8: Direct contacts, map & enquiry form
│   ├── styles/
│   │   └── index.css          # Tailwind directives, luxury scrollbar & glass utilities
│   ├── App.jsx                # Main application wrapper with background layering
│   └── main.jsx               # Application entry point
├── index.html                 # SEO title, meta descriptions, Google Fonts, JSON-LD
├── package.json               # Dependencies & scripts
├── postcss.config.js          # PostCSS configuration
├── tailwind.config.js         # Custom Tailwind theme tokens
└── vite.config.js             # Vite configuration
```

---

## 7. How to Run Locally

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or pnpm

### Installation
```bash
# Install dependencies
npm install
```

### Start Development Server
```bash
npm run dev
```
Open `http://localhost:3000` in your web browser.

### Build for Production
```bash
npm run build
```
The optimized static build will be generated in the `dist/` directory.

### Preview Production Build
```bash
npm run preview
```

---

## 8. Updating Project Images

Actual completed client photographs will be provided by the business owner. To replace any concept image:
1. Place the new photography in `public/images/` or use high-resolution CDN URLs.
2. Open `src/data/projects.js`.
3. Update the `image` field and project descriptions. All gallery cards and modals will update automatically.

---

© 2026 Agarwal Glass. All Rights Reserved.
