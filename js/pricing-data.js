/**
 * ==========================================================================
 * DESIGN SERVICES & PRICING CATALOGUE DATA
 * Source: Design_Services_Pricing_Catalogue.docx (BUILDZERO / Sparkling Rhythm)
 * Currency: INR (₹)
 * ==========================================================================
 */

const pricingData = {
  // Authoritative Contact Email from Contact page
  contactEmail: "sparklingrhythm74@gmail.com",

  // --------------------------------------------------------------------------
  // A. COMPLETE BRANDING PACKAGES
  // --------------------------------------------------------------------------
  brandingPackages: [
    {
      id: "brand-essentials",
      name: "Brand Essentials",
      price: "₹20,000–₹25,000",
      timeline: "2–3 weeks",
      suitableFor: "Startups and small businesses needing a basic identity.",
      summary: "A focused, foundational identity package providing the essential brand assets to establish a cohesive visual presence.",
      inclusions: [
        "2 initial logo concepts (1 selected for refinement)",
        "Primary logo and basic variations",
        "Brand colour palette and font selection",
        "Simple 2-page brand guide",
        "5 editable social media templates",
        "Business card design"
      ],
      deliverables: "Vector logo files (AI/EPS/SVG), high-res PNG/JPG, 2-page PDF guide, editable Canva templates, print-ready business card PDF.",
      revisions: "2 revision rounds"
    },
    {
      id: "complete-brand-system",
      name: "Complete Brand System",
      price: "₹60,000–₹85,000",
      timeline: "3–4 weeks",
      suitableFor: "Growing businesses needing consistency across channels.",
      summary: "A robust, multi-channel identity system with comprehensive guidelines, marketing collateral, and extensive social media assets.",
      inclusions: [
        "Brand discovery questionnaire and kickoff meeting",
        "Competitor and visual reference review",
        "3 logo concepts (1 selected for refinement)",
        "Full logo suite, colour palette and typography system",
        "Supporting graphic elements and icon style",
        "10–15 page brand guidelines",
        "15 editable social media templates & 5 story templates",
        "Business card, letterhead and email signature",
        "Social profile and cover graphics",
        "3 promotional campaign designs"
      ],
      deliverables: "Complete logo suite (color/mono/reverse/SVG/PNG), 10–15 page brand guidelines manual, editable Canva/Figma templates, stationery set, digital campaign graphics.",
      revisions: "3 revision rounds at agreed milestones"
    },
    {
      id: "complete-brand-experience",
      name: "Complete Brand Experience",
      price: "₹1,25,000–₹2,00,000+",
      timeline: "4–6 weeks",
      suitableFor: "Businesses preparing for launch, expansion or repositioning.",
      summary: "The ultimate end-to-end brand transformation: in-depth strategy, bespoke typography, packaging, full marketing suite, and executive rollout.",
      inclusions: [
        "Brand discovery workshop and stakeholder interviews",
        "Competitor visual audit and market research",
        "Brand positioning, personality and messaging direction",
        "3–4 creative identity directions",
        "Complete logo suite and visual identity system",
        "Custom typography and supporting graphic elements, where appropriate",
        "Comprehensive 25–40 page brand guidelines",
        "25–30 editable social media templates & 10 story/campaign templates",
        "10 finished launch posts using supplied content",
        "Business stationery and email signature",
        "Presentation template up to 15 slides",
        "Up to 5 marketing collateral designs (e.g. brochure, banner, flyer)",
        "Packaging or product label design for one product line",
        "Brand mockups and organized asset library",
        "Brand rollout and handover session"
      ],
      deliverables: "Master asset library, 25–40 page brand book, complete collateral suite, editable presentation deck, packaging print files, and dedicated handover session.",
      revisions: "3 revision rounds at agreed milestones"
    }
  ],

  // --------------------------------------------------------------------------
  // B. INDIVIDUAL DESIGN SERVICES (THREE TIERS EACH)
  // --------------------------------------------------------------------------
  services: [
    {
      id: "logo-design",
      name: "Logo Design",
      shortLabel: "Logo Design",
      icon: "feather",
      description: "Custom visual identity marks crafted for timeless distinction and cross-platform versatility.",
      tiers: [
        {
          tierLevel: "Basic",
          name: "Basic — Essential Logo",
          price: "₹4,000",
          summary: "Essential starter mark for emerging ideas and straightforward brand needs.",
          inclusions: [
            "1 initial design concept",
            "Refinement of selected design",
            "Primary logo in colour and monochrome",
            "PNG, JPG and SVG format exports",
            "Basic usage notes included"
          ],
          revisions: "2 revision rounds",
          fileFormats: "PNG, JPG, SVG",
          deliverables: "Primary logo mark in color & monochrome with usage notes."
        },
        {
          tierLevel: "Standard",
          name: "Standard — Professional Logo",
          price: "₹8,000",
          summary: "Comprehensive professional logo system with alternative lockups and color guidelines.",
          inclusions: [
            "2 distinct creative concepts",
            "Refine 1 selected concept",
            "Primary and alternate logo lockups",
            "Full colour and monochrome versions",
            "PNG, JPG, SVG and PDF exports",
            "Basic colour palette and typography selection",
            "2-page mini brand guide"
          ],
          revisions: "3 revision rounds",
          fileFormats: "PNG, JPG, SVG, PDF",
          deliverables: "Primary & alternate lockups, color palette, typography pairing, 2-page mini guide."
        },
        {
          tierLevel: "Premium",
          name: "Premium — Signature Logo",
          price: "₹15,000",
          summary: "Signature bespoke brand mark with full responsive lockups, dark/light modes, and realistic 3D mockups.",
          inclusions: [
            "3 distinct creative concepts",
            "Refine 1 selected concept",
            "Primary, alternate, and standalone icon versions",
            "Custom color palette and typography pairing",
            "Optimized light and dark background versions",
            "Complete export package across all digital & vector formats",
            "4–6 page logo usage & clearspace guide",
            "Realistic high-resolution mockups"
          ],
          revisions: "3 revision rounds",
          fileFormats: "AI, EPS, SVG, PDF, PNG, JPG",
          deliverables: "Complete logo suite, icon, custom palette, 4–6 page usage guide, realistic mockups."
        }
      ]
    },
    {
      id: "social-media",
      name: "Social Media Design",
      shortLabel: "Social Media",
      icon: "share-2",
      description: "High-engagement digital graphics, carousels, and editable templates to build brand authority.",
      tiers: [
        {
          tierLevel: "Basic",
          name: "Basic — Social Starter",
          price: "₹3,000",
          summary: "Quick starter batch of polished posts tailored for social feeds.",
          inclusions: [
            "3 finished social posts",
            "1 unified visual style",
            "Client-provided copy and imagery integration",
            "Instagram-ready high-resolution exports"
          ],
          revisions: "1 revision round per post",
          fileFormats: "JPG, PNG (1080x1080 / 1080x1350)",
          deliverables: "3 finished social posts formatted for Instagram and feed platforms."
        },
        {
          tierLevel: "Standard",
          name: "Standard — Social Essentials",
          price: "₹7,000",
          summary: "Balanced social package combining finished posts with reusable, editable templates.",
          inclusions: [
            "5 finished social posts",
            "2 editable post templates",
            "2 Instagram story designs",
            "Consistent visual styling and brand alignment",
            "Editable Canva source files included"
          ],
          revisions: "2 revision rounds",
          fileFormats: "JPG, PNG, Editable Canva Links",
          deliverables: "5 finished posts, 2 editable templates, 2 story graphics, Canva files."
        },
        {
          tierLevel: "Premium",
          name: "Premium — Social Campaign Kit",
          price: "₹15,000",
          summary: "Complete social campaign package featuring carousel storytelling and full template kits.",
          inclusions: [
            "10 finished social posts",
            "5 editable post templates",
            "5 story designs",
            "1 educational carousel (up to 5 slides)",
            "Campaign visual direction and layout system",
            "Editable Canva files and final export files"
          ],
          revisions: "2 revision rounds",
          fileFormats: "JPG, PNG, Editable Canva Files",
          deliverables: "10 posts, 5 templates, 5 stories, 1 multi-slide carousel, Canva source."
        }
      ]
    },
    {
      id: "print-marketing",
      name: "Print & Marketing Design",
      shortLabel: "Print & Marketing",
      icon: "printer",
      description: "Tangible brand collateral and marketing materials engineered with precise print-ready prepress standards.",
      tiers: [
        {
          tierLevel: "Basic",
          name: "Basic — Single Design",
          price: "₹2,000",
          summary: "Single dedicated print asset designed for immediate marketing use.",
          inclusions: [
            "1 item: flyer, poster, business card, or letterhead",
            "1 clear design direction",
            "Print-ready PDF with proper color modes",
            "Digital preview file for approval"
          ],
          revisions: "2 revision rounds",
          fileFormats: "Print-ready CMYK PDF, Digital RGB Preview",
          deliverables: "1 print-ready marketing item with digital proof."
        },
        {
          tierLevel: "Standard",
          name: "Standard — Business Collateral Set",
          price: "₹6,000",
          summary: "Coordinated corporate stationery and promotional set sharing a unified visual language.",
          inclusions: [
            "3 coordinated items (e.g. business card, letterhead, flyer)",
            "Consistent visual styling across all 3 assets",
            "Print-ready PDFs and digital previews",
            "Editable source files included"
          ],
          revisions: "2 revision rounds per item",
          fileFormats: "Print-ready PDF, Source Files (AI/PSD/InDesign), Digital Previews",
          deliverables: "3 coordinated print collateral items with editable source files."
        },
        {
          tierLevel: "Premium",
          name: "Premium — Marketing Collateral Kit",
          price: "₹12,000",
          summary: "Comprehensive marketing toolkit for trade shows, retail presence, or corporate launches.",
          inclusions: [
            "5 coordinated items (e.g. brochure, flyer, poster, business card, banner)",
            "Custom visual direction and layout hierarchy",
            "Print-ready files with suitable bleed and trim margins",
            "Digital versions optimized for email and web sharing",
            "Editable master source files"
          ],
          revisions: "3 revision rounds per item",
          fileFormats: "Prepress CMYK PDF with bleed/crop marks, Source Files, Web PDFs",
          deliverables: "5 coordinated marketing items, prepress files, and digital versions."
        }
      ]
    },
    {
      id: "book-publication",
      name: "Book & Publication Design",
      shortLabel: "Book & Publication",
      icon: "book-open",
      description: "Editorial layout, typography hierarchy, and cover artistry across long-form publishing.",
      tiers: [
        {
          tierLevel: "Basic",
          name: "Basic — Book Starter",
          price: "₹4,000",
          summary: "Foundational cover and concise interior layout for short publications or booklets.",
          inclusions: [
            "Book cover design (front)",
            "Interior layout up to 20 pages",
            "Clean text and image placement",
            "Print-ready PDF export"
          ],
          revisions: "2 revision rounds",
          fileFormats: "Print-ready PDF",
          deliverables: "Front cover and up to 20 interior pages formatted for print."
        },
        {
          tierLevel: "Standard",
          name: "Standard — Book Layout",
          price: "₹10,000",
          summary: "Full cover wrap and structured publication layout for books and company reports.",
          inclusions: [
            "Custom cover and back cover design",
            "Interior layout up to 60 pages",
            "Consistent typography, page styling and margins",
            "Running headers, footers and page numbering",
            "Print-ready PDF and digital preview"
          ],
          revisions: "2 revision rounds",
          fileFormats: "Print-ready PDF, Interactive Digital PDF",
          deliverables: "Full cover (front & back), up to 60 styled interior pages with numbering."
        },
        {
          tierLevel: "Premium",
          name: "Premium — Publication Design",
          price: "₹20,000",
          summary: "Editorial publication design with custom dividers, elaborate feature pages, and source files.",
          inclusions: [
            "Custom front cover and back cover design",
            "Interior layout up to 120 pages",
            "Custom section dividers and graphic page accents",
            "Up to 10 elaborately designed feature/editorial pages",
            "Consistent visual style throughout",
            "Print-ready and digital interactive PDFs",
            "Editable source files included"
          ],
          revisions: "3 revision rounds",
          fileFormats: "Adobe InDesign / Illustrator Source, Print PDF, Interactive Web PDF",
          deliverables: "Complete publication up to 120 pages, custom dividers, 10 feature pages, source files."
        }
      ]
    },
    {
      id: "ui-ux",
      name: "UI/UX Design",
      shortLabel: "UI/UX Design",
      icon: "layout",
      description: "Intuitive digital experiences, user journeys, component libraries, and interactive Figma prototypes.",
      tiers: [
        {
          tierLevel: "Basic",
          name: "Basic — UI Starter",
          price: "₹6,000",
          summary: "Essential screen designs for landing pages, simple portals, or feature wireframes.",
          inclusions: [
            "3 website or mobile app screens",
            "Basic layout and visual styling",
            "1 visual design direction",
            "Figma design file with organized layers"
          ],
          revisions: "2 revision rounds",
          fileFormats: "Figma (.fig) Source File, PNG/PDF Previews",
          deliverables: "3 designed screens in Figma with standard styling."
        },
        {
          tierLevel: "Standard",
          name: "Standard — Interface Design",
          price: "₹18,000",
          summary: "Multi-screen application flow with clickable prototype and cohesive component styling.",
          inclusions: [
            "Up to 8 screens",
            "Consistent UI components and typography hierarchy",
            "Desktop or mobile layouts for selected target platform",
            "Basic user flow based on supplied requirements",
            "Clickable interactive prototype in Figma",
            "Figma source file with organized frames"
          ],
          revisions: "2 revision rounds",
          fileFormats: "Figma Source File, Clickable Prototype Link",
          deliverables: "Up to 8 screens, user flow, clickable prototype, and Figma source."
        },
        {
          tierLevel: "Premium",
          name: "Premium — Product UI Kit",
          price: "₹35,000",
          summary: "End-to-end product design system: responsive layouts, interaction states, and dev handoff.",
          inclusions: [
            "Up to 15 screens",
            "Custom UI design system and reusable component library",
            "Responsive desktop and mobile layouts",
            "Clickable interactive prototype of key user journeys",
            "Basic interaction states (hover, active, disabled, error)",
            "Organized developer handoff specs"
          ],
          revisions: "3 revision rounds",
          fileFormats: "Figma Design System & Tokens, Interactive Prototype, Developer Handoff",
          deliverables: "Up to 15 responsive screens, reusable component library, prototype, handoff specs."
        }
      ]
    },
    {
      id: "three-d-design",
      name: "3D Design & Visual Modeling",
      shortLabel: "3D Modeling",
      icon: "box",
      description: "Artistic 3D props, refined materials, lighting compositions, and promotional showcase renders.",
      tiers: [
        {
          tierLevel: "Basic",
          name: "Basic — 3D Starter",
          price: "₹3,000",
          summary: "Simple decorative 3D asset with clean lighting and materials.",
          inclusions: [
            "1 simple decorative prop or object",
            "Basic materials and textures",
            "1 lighting setup",
            "1 final high-res render",
            "PNG delivery with transparent or solid background"
          ],
          revisions: "2 revision rounds",
          fileFormats: "High-resolution PNG (Transparent/Solid)",
          deliverables: "1 simple 3D asset, single angle render."
        },
        {
          tierLevel: "Standard",
          name: "Standard — 3D Visual Design",
          price: "₹8,000",
          summary: "Refined 3D model with custom procedural textures and multiple camera compositions.",
          inclusions: [
            "1 moderately detailed prop or product-style visual",
            "Custom materials and textures",
            "Refined lighting and studio composition",
            "Up to 3 final render camera views",
            "High-resolution image delivery"
          ],
          revisions: "2 revision rounds",
          fileFormats: "High-res PNG & JPG renders (up to 4K)",
          deliverables: "1 detailed 3D model with 3 distinct camera view renders."
        },
        {
          tierLevel: "Premium",
          name: "Premium — 3D Showcase",
          price: "₹18,000",
          summary: "High-end artistic 3D asset with advanced surface physics, multi-angle renders, and animation.",
          inclusions: [
            "1 highly detailed artistic object or product visual",
            "Custom materials, textures and realistic surface details",
            "Advanced lighting, atmospheric depth, and composition",
            "Up to 5 final render views",
            "Short promotional 3D animation (up to 5 seconds)",
            "High-resolution delivery"
          ],
          revisions: "3 revision rounds",
          fileFormats: "4K Still Renders (PNG/JPG), MP4/WebM Animation File",
          deliverables: "Highly detailed 3D model, 5 high-res renders, and 5s motion animation."
        }
      ]
    }
  ],

  // --------------------------------------------------------------------------
  // C. STANDALONE REFERENCE RATES (SECTION C)
  // --------------------------------------------------------------------------
  referenceRates: [
    {
      category: "Brand Identity",
      items: [
        { service: "Logo redesign", price: "₹5,000–₹12,000" },
        { service: "Logo variations and brand icon", price: "₹2,000–₹4,000" },
        { service: "Brand colour palette & typography", price: "₹3,000–₹5,000" },
        { service: "Mini brand guide (2–4 pages)", price: "₹4,000–₹7,000" },
        { service: "Full brand guidelines (10–15 pages)", price: "₹12,000–₹20,000" },
        { service: "Complete brand identity system", price: "₹20,000–₹40,000" }
      ]
    },
    {
      category: "Social Media",
      items: [
        { service: "Single social post", price: "₹800–₹1,500" },
        { service: "Carousel (up to 5 slides)", price: "₹2,000–₹4,000" },
        { service: "Additional carousel slide", price: "₹300–₹600" },
        { service: "Editable social template", price: "₹1,000–₹2,000" },
        { service: "Set of 5 editable templates", price: "₹4,000–₹8,000" },
        { service: "Set of 10 editable templates", price: "₹8,000–₹15,000" },
        { service: "Instagram story design", price: "₹500–₹1,000" },
        { service: "Set of 5 story templates", price: "₹2,500–₹5,000" },
        { service: "Profile and cover graphics", price: "₹1,500–₹3,000" },
        { service: "Campaign set of 5 finished posts", price: "₹4,000–₹8,000" }
      ]
    },
    {
      category: "Print & Marketing",
      items: [
        { service: "ID card design", price: "₹500–₹1,000" },
        { service: "Business card design", price: "₹800–₹1,500" },
        { service: "Letterhead design", price: "₹800–₹1,500" },
        { service: "Flyer design", price: "₹1,000–₹2,000" },
        { service: "Poster design", price: "₹1,500–₹3,000" },
        { service: "Menu design, single page", price: "₹1,500–₹3,000" },
        { service: "Menu, up to 8 pages", price: "₹4,000–₹8,000" },
        { service: "Brochure, up to 4 pages", price: "₹3,000–₹6,000" },
        { service: "Brochure, 8–12 pages", price: "₹7,000–₹15,000" },
        { service: "Product catalogue, up to 10 pages", price: "₹5,000–₹10,000" },
        { service: "Presentation, up to 10 slides", price: "₹3,000–₹6,000" },
        { service: "Additional presentation slide", price: "₹300–₹600" },
        { service: "Banner design", price: "₹1,500–₹4,000" }
      ]
    },
    {
      category: "Book & Publication",
      items: [
        { service: "Book cover design", price: "₹2,500–₹6,000" },
        { service: "Interior layout, 10–30 pages", price: "₹3,000–₹6,000" },
        { service: "Interior layout, 50–100 pages", price: "₹8,000–₹15,000" },
        { service: "Additional standard page", price: "₹100–₹200" },
        { service: "Illustrated page layout", price: "₹300–₹800" },
        { service: "E-book formatting", price: "₹3,000–₹8,000" },
        { service: "Cover + interior layout", price: "₹6,000–₹18,000" }
      ]
    },
    {
      category: "UI/UX",
      items: [
        { service: "Basic UI design, per screen", price: "₹1,500–₹3,000" },
        { service: "Detailed UI/UX design, per screen", price: "₹3,000–₹6,000" },
        { service: "Landing page UI", price: "₹6,000–₹12,000" },
        { service: "Small website UI, 5–6 screens", price: "₹15,000–₹30,000" },
        { service: "Website redesign, 5–6 screens", price: "₹12,000–₹25,000" },
        { service: "Interactive prototype", price: "₹5,000–₹12,000" },
        { service: "Basic design system", price: "₹5,000–₹15,000" },
        { service: "Mobile app UI, 5 screens", price: "₹10,000–₹20,000" },
        { service: "Additional mobile app screen", price: "₹1,500–₹3,000" }
      ]
    },
    {
      category: "3D Design",
      items: [
        { service: "Simple 3D model", price: "₹1,500–₹3,000" },
        { service: "Medium 3D model", price: "₹4,000–₹8,000" },
        { service: "Advanced artistic model", price: "₹10,000–₹20,000+" },
        { service: "Additional render angle", price: "₹500–₹1,500" },
        { service: "Custom materials or texture design", price: "₹1,000–₹3,000" },
        { service: "3D product showcase render", price: "₹3,000–₹8,000" },
        { service: "Short 3D promotional animation, up to 10 sec", price: "₹5,000–₹15,000+" }
      ]
    }
  ],

  // --------------------------------------------------------------------------
  // D. ADDITIONAL CHARGES & PROJECT RULES (SECTION D)
  // --------------------------------------------------------------------------
  projectRules: [
    { item: "Extra revision round", rule: "10–15% of project fee, agreed before proceeding" },
    { item: "Urgent delivery (within 48 hours)", rule: "Add 25–50%, subject to availability" },
    { item: "Additional logo concept", rule: "₹1,500–₹3,000" },
    { item: "Additional social post using approved design", rule: "₹500–₹1,000" },
    { item: "Additional custom template", rule: "₹1,000–₹2,000" },
    { item: "Additional language adaptation", rule: "From ₹500 per design" },
    { item: "Extra content or image preparation", rule: "Custom quote based on scope" },
    { item: "Printing, ad spend, photography, video, copywriting", rule: "Not included unless explicitly quoted" },
    { item: "Engineering / CAD / manufacturing deliverables", rule: "Out of scope; handled as a separate field/service" }
  ],

  generalTerms: [
    "Customer supplies final text, high-resolution imagery and required project brief information unless agreed otherwise.",
    "Scope, deliverable formats, timelines and revision rounds must be confirmed in writing before project work begins.",
    "Larger projects may use structured milestone payments.",
    "Final editable / master source files are provided only where the package or quotation explicitly states they are included.",
    "Additional concepts, pages, screens, designs or major revisions outside agreed scope are quoted separately."
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = pricingData;
}
