/**
 * ==========================================================================
 * SPARKLING RHYTHM PORTFOLIO - COMPLETE PROJECTS DATASTORE (19 PROJECTS)
 * ==========================================================================
 * Organized across 7 categories:
 * - graphic-design
 * - branding
 * - book-editorial
 * - ui-design
 * - digital-art
 * - 2d-creative
 * - 3d-other
 */

/**
 * ==========================================================================
 * SPARKLING RHYTHM PORTFOLIO - COMPLETE PROJECTS DATASTORE (22 PROJECTS)
 * ==========================================================================
 * Organized across disciplines:
 * - branding
 * - book-editorial
 * - graphic-design
 * - animation
 * - digital-art
 * - 3d
 */

const projectsData = [
  // --------------------------------------------------------------------------
  // TOP FEATURED PROJECTS (Recommended Order 1-6)
  // --------------------------------------------------------------------------
  {
    id: "atma-samvaad-ki-kala",
    title: "Atma Samvaad Ki Kala — Khushhaal Jeevan Ka Rahasya",
    category: "book-editorial",
    categoryLabel: "Book & Editorial",
    isFeatured: true,
    isPersonalProject: false,
    description: "A multi-page book designed for Brahma Kumaris, focusing on structured editorial layouts, typography, visual hierarchy and a calm, readable presentation.",
    detailsText: "129 Pages + Cover. A 129-page book design project created for Brahma Kumaris with a focus on maintaining consistency across a long-form publication. The project includes the complete page layout and cover design in Adobe InDesign, combining structured information and elegant typography for a clean editorial experience.",
    tools: ["129 Inner Pages", "Adobe InDesign", "Editorial Layout", "Typography", "Print Design"],
    primaryImage: "images/Sparkling_Rhythm/3_Graphic_Design/Books_Images/1_Atma_Samvaad_/Thumbnail.webp",
    mediaType: "image",
    gallery: [
      { url: "images/Sparkling_Rhythm/3_Graphic_Design/Books_Images/1_Atma_Samvaad_/1_Atma_Samvaad_.webp", caption: "01. Book Cover & Title Design" },
      { url: "images/Sparkling_Rhythm/3_Graphic_Design/Books_Images/1_Atma_Samvaad_/2_A_S_inner_page_.webp", caption: "02. Inner Page Editorial Layout" },
      { url: "images/Sparkling_Rhythm/3_Graphic_Design/Books_Images/1_Atma_Samvaad_/3_Atma_Samvaad_.webp", caption: "03. Section & Page Composition Spread" }
    ]
  },
  {
    id: "sahaj-rasoi",
    title: "Sahaj Rasoi — 71 Recipe Book Layout",
    category: "book-editorial",
    categoryLabel: "Book & Editorial",
    isFeatured: true,
    isPersonalProject: false,
    description: "A recipe book designed to present approximately 71 recipes across 93 inner pages with clear layouts, organized typography and an approachable visual style.",
    detailsText: "71 Recipes · 93 Pages + Cover. A recipe book featuring 71 recipes, designed across 93 pages along with its cover. The focus was on organizing a large amount of recipe content into a clear, readable, and visually consistent publication using Adobe InDesign.",
    tools: ["71 Recipes", "93 Inner Pages", "Adobe InDesign", "Editorial Design", "Page Layout"],
    primaryImage: "images/Sparkling_Rhythm/3_Graphic_Design/Books_Images/3_Sahaj_Rasoi/Thumbnail.webp",
    mediaType: "image",
    gallery: [
      { url: "images/Sparkling_Rhythm/3_Graphic_Design/Books_Images/3_Sahaj_Rasoi/book cover page.webp", caption: "01. Recipe Book Cover Page" },
      { url: "images/Sparkling_Rhythm/3_Graphic_Design/Books_Images/3_Sahaj_Rasoi/Sahaj_Rasoi_pg1.webp", caption: "02. Table of Contents & Category Intro" },
      { url: "images/Sparkling_Rhythm/3_Graphic_Design/Books_Images/3_Sahaj_Rasoi/Sahaj_Rasoi_pg2.webp", caption: "03. Recipe Layout & Ingredients Grid" },
      { url: "images/Sparkling_Rhythm/3_Graphic_Design/Books_Images/3_Sahaj_Rasoi/Sahaj_Rasoi_pg3.webp", caption: "04. Multi-column Cooking Steps Layout" },
      { url: "images/Sparkling_Rhythm/3_Graphic_Design/Books_Images/3_Sahaj_Rasoi/Sahaj_Rasoi_pg4.webp", caption: "05. Culinary Editorial Spread" },
      { url: "images/Sparkling_Rhythm/3_Graphic_Design/Books_Images/3_Sahaj_Rasoi/Sahaj_rasoi_5.webp", caption: "06. Recipe Presentation Details" }
    ]
  },
  {
    id: "sparkling-rhythm-identity",
    title: "Sparkling Rhythm — Personal Creative Identity",
    category: "branding",
    categoryLabel: "Branding",
    isFeatured: true,
    isPersonalProject: true,
    description: "My own creative identity representing my journey as a graphic designer and visual creative. The identity brings together design, art, colour and imagination.",
    detailsText: "Sparkling Rhythm represents my personal creative identity. The logomark features a lightbulb base bursting into organic, multi-colored leaf sparks symbolizing ideas, growth, and visual rhythm. The brand identity encompasses logo design, design thinking documentation, vector motion sketches, and brand guidelines.",
    tools: ["Personal Branding", "Logo / Identity", "Visual Direction", "Graphic Design", "Creative Identity"],
    primaryImage: "images/Sparkling_Rhythm/3_Graphic_Design/Logo_Design_By_me/Thumbnail.webp",
    mediaType: "image",
    gallery: [
      { url: "images/Sparkling_Rhythm/3_Graphic_Design/Logo_Design_By_me/8_Sparkling_Logo.webp", caption: "01. Primary Sparkling Rhythm Logo Mark" },
      { url: "images/Sparkling_Rhythm/3_Graphic_Design/Logo_Design_By_me/9_Sparkling_Rhythm_DesignThinking.webp", caption: "02. Design Thinking & Concept Sketchbook" },
      { url: "images/Sparkling_Rhythm/2_Animation/1_Sparkling_Rhythm_Motion_Graphics/S_R_motion.webp", caption: "03. Motion Vector Sketch & Layout Options" }
    ]
  },
  {
    id: "ihop-rebranding",
    title: "IHOP — Logo Redesign Concept",
    category: "branding",
    categoryLabel: "Branding",
    isFeatured: true,
    isPersonalProject: true,
    description: "A conceptual logo redesign exploring a completely new visual direction rather than modifying the original identity. Focuses on symbol and typography.",
    detailsText: "A complete reinterpretation of the IHOP logo, created from scratch with a new visual direction. The concept was developed through ideation and exploration, focusing on creating a fresh symbol and typography system rather than modifying the original logo. The final identity was presented through realistic mockups to visualize how the new branding could work in application.",
    tools: ["Logo Design", "Brand Concept", "Typography", "Visual Identity", "Mockup Presentation"],
    primaryImage: "images/Sparkling_Rhythm/1_Branding/1_IHOP_Images/Thumbnail_Mockup_IHOP.webp",
    mediaType: "image",
    processStages: [
      { name: "01. Design Thinking & Ideation", detail: "Mindmaps, conceptual sketches, and visual metaphors exploring fresh IHOP symbol concepts." },
      { name: "02. Symbol & Typography", detail: "Crafting the pictorial emblem and custom logotype font hierarchy balance." },
      { name: "03. Visual Identity System", detail: "Establishing primary, pictorial, and text logo variants with color specs." },
      { name: "04. Real-world Mockups", detail: "Applying the brand identity across storefront, packaging, and apparel mockups." }
    ],
    gallery: [
      { url: "images/Sparkling_Rhythm/1_Branding/1_IHOP_Images/IHOP_Logo.webp", caption: "01. Primary Logomark Redesign Concept" },
      { url: "images/Sparkling_Rhythm/1_Branding/1_IHOP_Images/IHOP_Design_Thinking.webp", caption: "02. Design Thinking & Conceptual Mindmap" },
      { url: "images/Sparkling_Rhythm/1_Branding/1_IHOP_Images/Logo_ideas.webp", caption: "03. Initial Logo Sketches & Vector Explorations" },
      { url: "images/Sparkling_Rhythm/1_Branding/1_IHOP_Images/Pictorial_Logo_IHOP.webp", caption: "04. Pictorial Symbol Mark Detail" },
      { url: "images/Sparkling_Rhythm/1_Branding/1_IHOP_Images/IHOP_TEXT_LOGO.webp", caption: "05. Typography & Text Logo Specification" },
      { url: "images/Sparkling_Rhythm/1_Branding/1_IHOP_Images/IHOP_Branding.webp", caption: "06. Visual Identity System & Color Standards" },
      { url: "images/Sparkling_Rhythm/1_Branding/1_IHOP_Images/Thumbnail_Mockup_IHOP.webp", caption: "07. Real-world Storefront & Collateral Mockup" }
    ]
  },
  {
    id: "splendid-rooms-4u",
    title: "Splendid Rooms 4U — Furniture Brand & UI/UX",
    category: "branding",
    categoryLabel: "Branding / UI Design",
    isFeatured: true,
    isPersonalProject: false,
    description: "A furniture-store UI/UX concept created for Splendid Rooms for U, including logo design, mobile/web interface screens, and video walkthrough.",
    detailsText: "A furniture-store UI/UX concept created for Splendid Rooms for U. The project includes the brand logo along with a complete set of interface screens, including a splash screen, home page, location page, login screen, and product overview designed to create a consistent furniture-shopping experience.",
    tools: ["UI/UX Design", "Logo Design", "Visual Identity", "Figma", "Interface Design"],
    primaryImage: "images/Sparkling_Rhythm/1_Branding/2_Splendid_Rooms_4U/Thumbnail_SR4U_Home_Page.webp",
    mediaType: "video",
    videoUrl: "images/Sparkling_Rhythm/1_Branding/2_Splendid_Rooms_4U/Furniture shop.webm",
    gallery: [
      { url: "images/Sparkling_Rhythm/1_Branding/2_Splendid_Rooms_4U/Furniture shop.webm", caption: "01. Animated UI Video Walkthrough" },
      { url: "images/Sparkling_Rhythm/1_Branding/2_Splendid_Rooms_4U/SR4U_website.webp", caption: "02. E-Commerce Website Home Page Layout" },
      { url: "images/Sparkling_Rhythm/1_Branding/2_Splendid_Rooms_4U/SR4U_Logo.webp", caption: "03. Splendid Rooms 4U Brand Mark" },
      { url: "images/Sparkling_Rhythm/1_Branding/2_Splendid_Rooms_4U/Splendid_r4u_logo_explain.webp", caption: "04. Logo Design Thinking & Grid Construction" },
      { url: "images/Sparkling_Rhythm/1_Branding/2_Splendid_Rooms_4U/SR4U_varients.webp", caption: "05. Brand Logo Color Variations" },
      { url: "images/Sparkling_Rhythm/1_Branding/2_Splendid_Rooms_4U/SR4U_Overview.webp", caption: "06. Product Overview Page" },
      { url: "images/Sparkling_Rhythm/1_Branding/2_Splendid_Rooms_4U/SR4U_Location_Page.webp", caption: "07. Store Location Page UI" },
      { url: "images/Sparkling_Rhythm/1_Branding/2_Splendid_Rooms_4U/Splendid_Rooms_4_U_Loginpage.webp", caption: "08. User Login Interface" },
      { url: "images/Sparkling_Rhythm/1_Branding/2_Splendid_Rooms_4U/SR4U_Profile_Page.webp", caption: "09. User Profile & Settings Screen" }
    ]
  },
  {
    id: "shree-krishna-digital-art",
    title: "Shree Krishna — Digital Artwork",
    category: "digital-art",
    categoryLabel: "Digital Art",
    isFeatured: true,
    isPersonalProject: true,
    description: "A digital artwork created in Adobe Fresco, exploring color, lighting, composition and expressive digital painting.",
    detailsText: "A digital artwork created in Adobe Fresco using a combination of custom brushes and digital painting techniques, focusing on vibrant lighting, sacred composition, and intricate brushwork.",
    tools: ["Digital Art", "Adobe Fresco", "Digital Painting", "Colour & Composition"],
    primaryImage: "images/Sparkling_Rhythm/3_Graphic_Design/Art_Design/Thumbnail.webp",
    mediaType: "image",
    gallery: [
      { url: "images/Sparkling_Rhythm/3_Graphic_Design/Art_Design/Shree_Krishna.webp", caption: "01. Full Digital Painting — Shree Krishna" }
    ]
  },

  // --------------------------------------------------------------------------
  // EDITORIAL & REPORTS
  // --------------------------------------------------------------------------
  {
    id: "prabhu-ratna-seva-report",
    title: "Prabhu Ratna Pratiyogita Seva Report",
    category: "book-editorial",
    categoryLabel: "Book & Editorial",
    isFeatured: false,
    isPersonalProject: false,
    description: "A 32-page report designed as part of seva work, combining structured information, typography and visual organization for a clean editorial experience.",
    detailsText: "32 Pages + Cover. A 32-page report book designed for Prabhu Ratna Pratiyogita Seva. The project involved creating the complete inner-page layout along with the cover, maintaining a structured and readable visual system throughout the publication in Adobe InDesign.",
    tools: ["32 Pages", "Adobe InDesign", "Report Design", "Editorial Layout", "Print Design"],
    primaryImage: "images/Sparkling_Rhythm/3_Graphic_Design/Books_Images/2_PRC_Report/Thumbnail.webp",
    mediaType: "image",
    gallery: [
      { url: "images/Sparkling_Rhythm/3_Graphic_Design/Books_Images/2_PRC_Report/PRC_Coverpage.webp", caption: "01. Report Book Cover Page" },
      { url: "images/Sparkling_Rhythm/3_Graphic_Design/Books_Images/2_PRC_Report/PRC_page1.webp", caption: "02. Inner Page 1 — Program Overview" },
      { url: "images/Sparkling_Rhythm/3_Graphic_Design/Books_Images/2_PRC_Report/PRC_page2.webp", caption: "03. Inner Page 2 — Structured Content Grid" },
      { url: "images/Sparkling_Rhythm/3_Graphic_Design/Books_Images/3_Sahaj_Rasoi/PRC_page3.webp", caption: "04. Inner Page 3 — Competition Seva Report" }
    ]
  },
  {
    id: "tapovan-report",
    title: "Tirandaji Prashikshan Evam Seminar — Tapovan Report",
    category: "book-editorial",
    categoryLabel: "Book & Editorial",
    isFeatured: false,
    isPersonalProject: false,
    description: "A 43-page report book documenting a Tirandaji Prashikshan Seminar at Tapovan, with emphasis on structured information and clean layouts.",
    detailsText: "43 Pages + Cover. A 43-page report book documenting a Tirandaji Prashikshan Evam Seminar at Tapovan. The project includes the complete inner-page design and cover, with emphasis on structured information and consistent page layouts.",
    tools: ["43 Pages", "Adobe InDesign", "Report Design", "Editorial Layout", "Cover Design"],
    primaryImage: "images/Sparkling_Rhythm/3_Graphic_Design/Books_Images/4_Tapovan/Thumbnail.webp",
    mediaType: "image",
    gallery: [
      { url: "images/Sparkling_Rhythm/3_Graphic_Design/Books_Images/4_Tapovan/1_Tapovanfrontpage.webp", caption: "01. Tapovan Report Front Cover Page" },
      { url: "images/Sparkling_Rhythm/3_Graphic_Design/Books_Images/4_Tapovan/2_Tapovanindex.webp", caption: "02. Table of Contents & Event Overview" },
      { url: "images/Sparkling_Rhythm/3_Graphic_Design/Books_Images/4_Tapovan/3_Tapovan.webp", caption: "03. Archery Seminar Editorial Layout" },
      { url: "images/Sparkling_Rhythm/3_Graphic_Design/Books_Images/4_Tapovan/4_Tapovan.webp", caption: "04. Training Program Schedule Spread" },
      { url: "images/Sparkling_Rhythm/3_Graphic_Design/Books_Images/4_Tapovan/5_Tapovan.webp", caption: "05. Closing Report Page & Acknowledgments" }
    ]
  },

  // --------------------------------------------------------------------------
  // ANIMATION & MOTION GRAPHICS
  // --------------------------------------------------------------------------
  {
    id: "sparkling-rhythm-motion",
    title: "Sparkling Rhythm — Logo Motion Graphics",
    category: "animation",
    categoryLabel: "Motion Graphics",
    isFeatured: false,
    isPersonalProject: true,
    description: "An animated version of the Sparkling Rhythm logo created in After Effects to give the brand a dynamic visual identity through motion and timing.",
    detailsText: "An animated version of the Sparkling Rhythm logo created to give the brand a dynamic visual identity. The logo elements were brought to life through motion and timing, creating a short brand animation in Adobe After Effects.",
    tools: ["Adobe After Effects", "Motion Graphics", "Logo Animation", "Timing", "Visual Effects"],
    primaryImage: "images/Sparkling_Rhythm/2_Animation/1_Sparkling_Rhythm_Motion_Graphics/Thumbnail.webp",
    mediaType: "video",
    videoUrl: "images/Sparkling_Rhythm/2_Animation/1_Sparkling_Rhythm_Motion_Graphics/Motion graphics .webm",
    gallery: [
      { url: "images/Sparkling_Rhythm/2_Animation/1_Sparkling_Rhythm_Motion_Graphics/S_R_motion.webp", caption: "01. Motion Vector Frame Layout" },
      { url: "images/Sparkling_Rhythm/2_Animation/1_Sparkling_Rhythm_Motion_Graphics/Motion graphics .webm", caption: "02. Brand Motion Animation Video" }
    ]
  },
  {
    id: "the-light-within-us",
    title: "The Light Within Us — 2D Short Animation",
    category: "animation",
    categoryLabel: "2D Animation",
    isFeatured: false,
    isPersonalProject: false,
    description: "A 2D animated storytelling project developed around the concept 'The Light Within Us', featuring storyboarding, character design, and scene planning.",
    detailsText: "A 2D animated storytelling project developed around the concept “The Light Within Us.” The project included storyboarding and visual planning before creating the animation in Adobe Animate CC and Photoshop.",
    tools: ["Adobe Animate", "Photoshop", "Storyboarding", "2D Animation", "Scene Planning"],
    primaryImage: "images/Sparkling_Rhythm/2_Animation/2_Light_Witin_Us/Thumbnail.webp",
    mediaType: "video",
    videoUrl: "images/Sparkling_Rhythm/2_Animation/2_Light_Witin_Us/2min movie.webm",
    gallery: [
      { url: "images/Sparkling_Rhythm/2_Animation/2_Light_Witin_Us/Light_within_Us.webp", caption: "01. Concept Scene Art" },
      { url: "images/Sparkling_Rhythm/2_Animation/2_Light_Witin_Us/2min movie.webm", caption: "02. 2D Short Movie Video" }
    ]
  },
  {
    id: "brahma-kumaris-animation-series",
    title: "Brahma Kumaris — Animation Series",
    category: "animation",
    categoryLabel: "2D Animation",
    isFeatured: false,
    isPersonalProject: false,
    description: "A collection of three animated projects: Jagadamba Saraswati (Mamma), Hasya Ras, and Rajyoga Meditation Invitation in Adobe Fresco.",
    detailsText: "A collection of three animated projects created for Brahma Kumaris content. The series includes Mamma Animation, Hasya Ras Animation, and Rajyoga Meditation Invitation Animation, with visuals created and animated in Adobe Fresco.",
    tools: ["Adobe Fresco", "2D Animation", "Digital Drawing", "Visual Storytelling"],
    primaryImage: "images/Sparkling_Rhythm/2_Animation/1_Brahma_Kumaris/Rajyoga meditation.webm",
    mediaType: "video",
    videoUrl: "images/Sparkling_Rhythm/2_Animation/1_Brahma_Kumaris/Rajyoga meditation.webm",
    gallery: [
      { url: "images/Sparkling_Rhythm/2_Animation/1_Brahma_Kumaris/Rajyoga meditation.webm", caption: "01. Rajyoga Meditation Invitation Animation" },
      { url: "images/Sparkling_Rhythm/2_Animation/1_Brahma_Kumaris/Jagadamba_Saraswati.webm", caption: "02. Mamma (Jagadamba Saraswati) Animation" },
      { url: "images/Sparkling_Rhythm/2_Animation/1_Brahma_Kumaris/Hasya_Ras.webm", caption: "03. Hasya Ras Animated Short" }
    ]
  },
  {
    id: "walk-cycle-studies",
    title: "Character Walk Cycle & Motion Studies",
    category: "animation",
    categoryLabel: "Character Animation",
    isFeatured: false,
    isPersonalProject: false,
    description: "A study of character movement and timing through different walking cycles, including Front Walk, Side Walk, and Baby Crawl Cycle.",
    detailsText: "A study of character movement and animation timing through different walking cycles. The project explores movement from multiple views along with a baby crawl cycle and bone tool rigging.",
    tools: ["Character Animation", "Walk Cycles", "Motion Study", "Timing", "Bone Tool"],
    primaryImage: "images/Sparkling_Rhythm/2_Animation/3_Frront_Walk_Cycle/Thumbnail.webp",
    mediaType: "video",
    videoUrl: "images/Sparkling_Rhythm/2_Animation/3_Frront_Walk_Cycle/3_Walk Cycle.webm",
    gallery: [
      { url: "images/Sparkling_Rhythm/2_Animation/3_Frront_Walk_Cycle/2_Front_walk_cycle.webp", caption: "01. Front Walk Keyframe Sheet" },
      { url: "images/Sparkling_Rhythm/2_Animation/3_Frront_Walk_Cycle/3_Walk Cycle.webm", caption: "02. Walk Cycle Motion Animation Video" },
      { url: "images/Sparkling_Rhythm/2_Animation/3_Frront_Walk_Cycle/1_Front walk cycle .webm", caption: "03. Front Walk Cycle Loop" },
      { url: "images/Sparkling_Rhythm/2_Animation/3_Frront_Walk_Cycle/baby crawl.webm", caption: "04. Baby Crawl Motion Study Video" },
      { url: "images/Sparkling_Rhythm/2_Animation/3_Frront_Walk_Cycle/4_Girl Bone Tool bg.webm", caption: "05. Girl Character Bone Tool Rigging" },
      { url: "images/Sparkling_Rhythm/2_Animation/3_Frront_Walk_Cycle/5_Baby_Crawl_side.webp", caption: "06. Baby Crawl Keyframe Breakdown" }
    ]
  },
  {
    id: "simple-animation-studies",
    title: "Simple Animation & FX Studies",
    category: "animation",
    categoryLabel: "Animation Experiments",
    isFeatured: false,
    isPersonalProject: false,
    description: "Exercises exploring movement: Girl Blowing a Boat, Butterfly Animation, Fish Swimming, Hard Work, and Train Path Animation.",
    detailsText: "A collection of smaller animation exercises created to explore movement, timing, effects, and storytelling across Adobe Animate CC and After Effects.",
    tools: ["2D Animation", "Motion Graphics", "Frame Animation", "Adobe Animate", "After Effects"],
    primaryImage: "images/Sparkling_Rhythm/2_Animation/4_Simple_Animation/Thumbnail.webp",
    mediaType: "video",
    videoUrl: "images/Sparkling_Rhythm/2_Animation/4_Simple_Animation/1_Girl Boatflow.webm",
    gallery: [
      { url: "images/Sparkling_Rhythm/2_Animation/4_Simple_Animation/1_Girl Boatflow.webm", caption: "01. Girl Blowing a Boat — Adobe Animate" },
      { url: "images/Sparkling_Rhythm/2_Animation/4_Simple_Animation/2_butterfly.webm", caption: "02. Butterfly Motion Animation — After Effects" },
      { url: "images/Sparkling_Rhythm/2_Animation/4_Simple_Animation/3_Fish animation .webm", caption: "03. Fish Swimming Motion Study — Adobe Animate" },
      { url: "images/Sparkling_Rhythm/2_Animation/4_Simple_Animation/4_hard work.webm", caption: "04. Hard Work Animation Study" },
      { url: "images/Sparkling_Rhythm/2_Animation/4_Simple_Animation/5_Train Path.webm", caption: "05. Train Path Motion Animation — Adobe Animate" }
    ]
  },

  // --------------------------------------------------------------------------
  // GRAPHIC DESIGN, ART & LOGOS
  // --------------------------------------------------------------------------
  {
    id: "digital-art-showcase",
    title: "Art & Digital Illustration Showcase",
    category: "digital-art",
    categoryLabel: "Digital Art",
    isFeatured: false,
    isPersonalProject: true,
    description: "A curated series of digital artwork: Melody, Gurl, Fish, Deer, Blue Girl, Avakin Character, Mermaid, Anime Character, and Nishant Sketch.",
    detailsText: "A rich collection of digital artwork, character designs, and atmospheric illustrations created across Photoshop, Procreate, and Adobe Fresco focusing on color, texture, and concept development.",
    tools: ["Photoshop", "Procreate", "Adobe Fresco", "Character Design", "Digital Illustration"],
    primaryImage: "images/Sparkling_Rhythm/3_Graphic_Design/Art_Design/Thumbnail.webp",
    mediaType: "image",
    gallery: [
      { url: "images/Sparkling_Rhythm/3_Graphic_Design/Art_Design/Melody.webp", caption: "01. Melody — Fictional Character Concept in Photoshop" },
      { url: "images/Sparkling_Rhythm/3_Graphic_Design/Art_Design/gurl.webp", caption: "02. Gurl — Creative Digital Painting" },
      { url: "images/Sparkling_Rhythm/3_Graphic_Design/Art_Design/Fish.webp", caption: "03. Fish — Decorative Illustration in Adobe Fresco" },
      { url: "images/Sparkling_Rhythm/3_Graphic_Design/Art_Design/deer.webp", caption: "04. Deer — Stylized Procreate Artwork" },
      { url: "images/Sparkling_Rhythm/3_Graphic_Design/Art_Design/Blue.webp", caption: "05. Blue Girl — Conceptual Concept Art" },
      { url: "images/Sparkling_Rhythm/3_Graphic_Design/Art_Design/Ava_Character.webp", caption: "06. Avakin Life Character Artwork in Adobe Fresco" },
      { url: "images/Sparkling_Rhythm/3_Graphic_Design/Art_Design/FROM GARBAGE TO GLORY_20250701_235235_0000.webp", caption: "07. Mermaid — From Garbage to Glory Concept Art" },
      { url: "images/Sparkling_Rhythm/3_Graphic_Design/Art_Design/animee.webp", caption: "08. Anime Character Illustration Study" },
      { url: "images/Sparkling_Rhythm/3_Graphic_Design/Art_Design/Nishant.webp", caption: "09. Nishant — Digital Portrait Sketch in Procreate" },
      { url: "images/Sparkling_Rhythm/3_Graphic_Design/Art_Design/blend.webp", caption: "10. Illustrator Shape Building Composition" }
    ]
  },
  {
    id: "logo-design-suite",
    title: "Logo Design & Brand Mark Suite",
    category: "graphic-design",
    categoryLabel: "Logo Design",
    isFeatured: false,
    isPersonalProject: true,
    description: "Custom logo design projects and design thinking sheets: Rich Snacksy, Spark, Splendid Rooms 4U, IHOP, and Sparkling Rhythm.",
    detailsText: "A collection of logo concepts exploring symbol mark development, typography balance, grid geometry, and brand positioning sheets.",
    tools: ["Logo Design", "Symbol Development", "Typography", "Design Thinking"],
    primaryImage: "images/Sparkling_Rhythm/3_Graphic_Design/Logo_Design_By_me/Thumbnail.webp",
    mediaType: "image",
    gallery: [
      { url: "images/Sparkling_Rhythm/3_Graphic_Design/Logo_Design_By_me/1_Rich_Snacsy.webp", caption: "01. Rich Snacksy Snack Shop Logo Concept" },
      { url: "images/Sparkling_Rhythm/3_Graphic_Design/Logo_Design_By_me/2_RichSnacsy_logo_DesignThinking.webp", caption: "02. Rich Snacksy Design Thinking Sheet" },
      { url: "images/Sparkling_Rhythm/3_Graphic_Design/Logo_Design_By_me/3_Spark_logo.webp", caption: "03. Spark Logomark Concept" },
      { url: "images/Sparkling_Rhythm/3_Graphic_Design/Logo_Design_By_me/4_Spark_DesignThinking.webp", caption: "04. Spark Vector Geometry & Design Thinking" },
      { url: "images/Sparkling_Rhythm/3_Graphic_Design/Logo_Design_By_me/5_Splendid_Rooms_4_U_Logo.webp", caption: "05. Splendid Rooms 4U Furniture Logomark" },
      { url: "images/Sparkling_Rhythm/3_Graphic_Design/Logo_Design_By_me/6_SR4U_DesignThinking.webp", caption: "06. Splendid Rooms Design Thinking Sheet" },
      { url: "images/Sparkling_Rhythm/3_Graphic_Design/Logo_Design_By_me/7_IHOP.webp", caption: "07. IHOP Concept Logomark Variant" },
      { url: "images/Sparkling_Rhythm/3_Graphic_Design/Logo_Design_By_me/8_Sparkling_Logo.webp", caption: "08. Sparkling Rhythm Primary Logomark" },
      { url: "images/Sparkling_Rhythm/3_Graphic_Design/Logo_Design_By_me/9_Sparkling_Rhythm_DesignThinking.webp", caption: "09. Sparkling Rhythm Design Thinking Sheet" }
    ]
  },
  {
    id: "posters-campaign-series",
    title: "Posters & Public Awareness Campaign Series",
    category: "graphic-design",
    categoryLabel: "Poster Design",
    isFeatured: false,
    isPersonalProject: false,
    description: "Poster designs including Spiritual Empowerment, World No Tobacco Day awareness posters, Spooky Night, and Burger promotional posters.",
    detailsText: "Visual communication and poster designs focusing on typography hierarchy, composition, and strong social message delivery.",
    tools: ["Poster Design", "Awareness Campaign", "Typography", "Visual Communication"],
    primaryImage: "images/Sparkling_Rhythm/3_Graphic_Design/Posters/Thumbnail.webp",
    mediaType: "image",
    gallery: [
      { url: "images/Sparkling_Rhythm/3_Graphic_Design/Posters/6_Tobacco_A_lethal_weapon.webp", caption: "01. Tobacco: A Lethal Weapon Awareness Poster" },
      { url: "images/Sparkling_Rhythm/3_Graphic_Design/Posters/7_World_no_tobacco_day.webp", caption: "02. World No Tobacco Day Poster" },
      { url: "images/Sparkling_Rhythm/3_Graphic_Design/Posters/1_A_Growing_Global_Threat.webp", caption: "03. Tobacco — A Growing Global Threat" },
      { url: "images/Sparkling_Rhythm/3_Graphic_Design/Posters/2_A_new_Generation_Hooked.webp", caption: "04. A New Generation Hooked Poster" },
      { url: "images/Sparkling_Rhythm/3_Graphic_Design/Posters/3_Empowering_change_through_spirituality.webp", caption: "05. Empowering Change Through Spirituality" },
      { url: "images/Sparkling_Rhythm/3_Graphic_Design/Posters/4_LifeAddiction.webp", caption: "06. Life Over Addiction Poster" },
      { url: "images/Sparkling_Rhythm/3_Graphic_Design/Posters/5_scan_To_Start_ur_journey.webp", caption: "07. Scan To Start Your Journey Poster" },
      { url: "images/Sparkling_Rhythm/3_Graphic_Design/Posters/8_Vicharon ko badlo chetna khil uthegi.webp", caption: "08. Vicharon Ko Badlo Poster" },
      { url: "images/Sparkling_Rhythm/3_Graphic_Design/Posters/9_artist_of_life.webp", caption: "09. Artist of Life Graphic Poster" },
      { url: "images/Sparkling_Rhythm/3_Graphic_Design/Posters/11_Storyboarding_spirituality.webp", caption: "10. Spiritual Storyboarding Poster" },
      { url: "images/Sparkling_Rhythm/3_Graphic_Design/Art_Design/Spooky night poster.webp", caption: "11. Spooky Night Graphic Poster" },
      { url: "images/Sparkling_Rhythm/3_Graphic_Design/Art_Design/Burger poster .webp", caption: "12. Burger Promotional Poster" }
    ]
  },
  {
    id: "prc-brochure",
    title: "Prabhu Ratna Contest — Promotional Brochure",
    category: "graphic-design",
    categoryLabel: "Brochure Design",
    isFeatured: false,
    isPersonalProject: false,
    description: "A promotional brochure created for Prabhu Ratna Contest (PRC), presenting event details in a clear and organized multi-panel format in Photoshop.",
    detailsText: "A promotional brochure created for Prabhu Ratna Contest (PRC). The design was developed in Photoshop with an emphasis on presenting event information in a visually engaging and organized format.",
    tools: ["Adobe Photoshop", "Brochure Design", "Layout", "Typography"],
    primaryImage: "images/Sparkling_Rhythm/3_Graphic_Design/Brouchure/Thumbnail.webp",
    mediaType: "image",
    gallery: [
      { url: "images/Sparkling_Rhythm/3_Graphic_Design/Brouchure/Brouchure.webp", caption: "01. Full Tri-Fold Brochure Layout Design" }
    ]
  },
  {
    id: "photo-restoration-typography",
    title: "Photo Restoration & Typography Studies",
    category: "graphic-design",
    categoryLabel: "Graphic Design",
    isFeatured: false,
    isPersonalProject: true,
    description: "Photo cleanup & colorization studies alongside creative typography experiments with clipping masks and text blends.",
    detailsText: "A collection of photo restoration work focused on repairing older photographs, paired with letterform and clipping mask typography explorations.",
    tools: ["Photo Restoration", "Retouching", "Typography", "Clipping Mask"],
    primaryImage: "images/Sparkling_Rhythm/3_Graphic_Design/Photo_Restoration/b&w to colourful.webp",
    mediaType: "image",
    gallery: [
      { url: "images/Sparkling_Rhythm/3_Graphic_Design/Photo_Restoration/b&w to colourful.webp", caption: "01. Photo Restoration & Colorization Study" },
      { url: "images/Sparkling_Rhythm/3_Graphic_Design/Typography/3_clipping.webp", caption: "02. Clipping Mask Typography Exploration" },
      { url: "images/Sparkling_Rhythm/3_Graphic_Design/Typography/2_supriya blend.webp", caption: "03. Typography Letterform Blend" }
    ]
  },

  // --------------------------------------------------------------------------
  // 3D MODELING & ENVIRONMENTS
  // --------------------------------------------------------------------------
  {
    id: "haunted-house-3d",
    title: "Vampire / Haunted House — 3D Environment",
    category: "3d",
    categoryLabel: "3D Environment",
    isFeatured: false,
    isPersonalProject: true,
    description: "A creative 3D environment project exploring modeling, forms, atmosphere and spooky visual storytelling in Blender.",
    detailsText: "A creative 3D environment project exploring modelling, forms, atmosphere and visual storytelling built in Blender, including perspective view and detail breakdowns.",
    tools: ["3D Modelling", "Blender", "Environment Design", "Visual Storytelling"],
    primaryImage: "images/Sparkling_Rhythm/4_3d/Haunted_House/Thumbnail.webp",
    mediaType: "image",
    gallery: [
      { url: "images/Sparkling_Rhythm/4_3d/Haunted_House/Haunted_House.webp", caption: "01. Haunted House Primary Render" },
      { url: "images/Sparkling_Rhythm/4_3d/Haunted_House/Haunted_house_perspective.webp", caption: "02. Environment Perspective View" },
      { url: "images/Sparkling_Rhythm/4_3d/Haunted_House/HauntedHouse_explain.webp", caption: "03. Scene Breakdown & Modeling Explanation" }
    ]
  },
  {
    id: "ganpati-bappa-3d",
    title: "Ganpati Bappa — 3D Model",
    category: "3d",
    categoryLabel: "3D Model",
    isFeatured: false,
    isPersonalProject: true,
    description: "A 3D creative project exploring modeling and form through the creation of a Ganpati Bappa model in Blender.",
    detailsText: "A 3D creative project exploring modeling and form through the creation of a Ganpati Bappa model in Blender, including front view, side view, and detail render collages.",
    tools: ["3D Modelling", "Blender", "Creative Modelling", "Form & Sculpture"],
    primaryImage: "images/Sparkling_Rhythm/4_3d/Ganpati/Thumbnail.webp",
    mediaType: "image",
    gallery: [
      { url: "images/Sparkling_Rhythm/4_3d/Ganpati/Ganpati_Front.webp", caption: "01. Ganpati Bappa 3D Model Front View" },
      { url: "images/Sparkling_Rhythm/4_3d/Ganpati/Ganpati_side.webp", caption: "02. Ganpati 3D Model Side View" },
      { url: "images/Sparkling_Rhythm/4_3d/Ganpati/Ganpati_details.webp", caption: "03. Detail Sculpt & Surface Renders" },
      { url: "images/Sparkling_Rhythm/4_3d/Ganpati/Gnapati_collage.webp", caption: "04. Multi-angle Render Collage" }
    ]
  },
  {
    id: "guitar-3d-model",
    title: "Guitar — 3D Model & Wireframe Mesh",
    category: "3d",
    categoryLabel: "3D Model",
    isFeatured: false,
    isPersonalProject: false,
    description: "A 3D modeling exercise created in Maya, focusing on form, proportions, modeling details, wireframes, and clean construction.",
    detailsText: "A 3D modeling exercise created in Maya, focusing on form, proportions, modeling details, and clean object construction. Includes design thinking sheets, wireframe polygon meshes, and closeups.",
    tools: ["3D Modelling", "Autodesk Maya", "Prop Modelling", "Wireframe Mesh"],
    primaryImage: "images/Sparkling_Rhythm/4_3d/Guitar/Thumbnail.webp",
    mediaType: "image",
    gallery: [
      { url: "images/Sparkling_Rhythm/4_3d/Guitar/Guitar.webp", caption: "01. Maya Guitar Model Main Render" },
      { url: "images/Sparkling_Rhythm/4_3d/Guitar/front view.webp", caption: "02. Guitar Front Perspective View" },
      { url: "images/Sparkling_Rhythm/4_3d/Guitar/Guitar_Wireframe.webp", caption: "03. Polygon Wireframe Mesh" },
      { url: "images/Sparkling_Rhythm/4_3d/Guitar/Guitar_closeup.webp", caption: "04. Headstock & Tuning Peg Closeup" },
      { url: "images/Sparkling_Rhythm/4_3d/Guitar/Guitar_closeup_2.webp", caption: "05. Soundhole & Bridge Detail Closeup" },
      { url: "images/Sparkling_Rhythm/4_3d/Guitar/Guitar_DesignThinking.webp", caption: "06. Modeling Design Thinking Sheet" }
    ]
  },
  {
    id: "3d-architecture-props-suite",
    title: "3D Architecture & Props Suite",
    category: "3d",
    categoryLabel: "3D Models & Environments",
    isFeatured: false,
    isPersonalProject: false,
    description: "A collection of 3D models: Magic Wands, Petrol Pump Environment, Stylized Red House, and Snow House created in Maya and Blender.",
    detailsText: "Explorations in 3D prop design and stylized environment modeling created in Maya and Blender, featuring design thinking sheets and multiple render angles.",
    tools: ["3D Modelling", "Maya", "Blender", "Environment Design", "Prop Design"],
    primaryImage: "images/Sparkling_Rhythm/4_3d/Red_House/Thumbnail.webp",
    mediaType: "image",
    gallery: [
      { url: "images/Sparkling_Rhythm/4_3d/Red_House/Red_House.webp", caption: "01. Stylized Red House Render" },
      { url: "images/Sparkling_Rhythm/4_3d/Red_House/Stylized_house_2.webp", caption: "02. Red House Perspective Angle" },
      { url: "images/Sparkling_Rhythm/4_3d/Red_House/Stylized_house_details.webp", caption: "03. House Roof & Texture Details" },
      { url: "images/Sparkling_Rhythm/4_3d/Magic_Wand/Magic_Wand.webp", caption: "04. Magic Wand 3D Prop Render" },
      { url: "images/Sparkling_Rhythm/4_3d/Magic_Wand/Magic_Wand_DesignThinking.webp", caption: "05. Magic Wand Design Thinking Sheet" },
      { url: "images/Sparkling_Rhythm/4_3d/Petrol_Pump/Petrol pump.webp", caption: "06. Petrol Pump 3D Environment" },
      { url: "images/Sparkling_Rhythm/4_3d/Petrol_Pump/Petrol_Pump_view2.webp", caption: "07. Petrol Pump Angle View 2" },
      { url: "images/Sparkling_Rhythm/4_3d/Petrol_Pump/Petrol_Pump_view3.webp", caption: "08. Petrol Pump Angle View 3" },
      { url: "images/Sparkling_Rhythm/4_3d/Petrol_Pump/Petrol_Pump_DesignThinking.webp", caption: "09. Petrol Pump Design Thinking Sheet" }
    ]
  }
];

