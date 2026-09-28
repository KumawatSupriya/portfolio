/**
 * ==========================================================================
 * SPARKLING RHYTHM PORTFOLIO - INTERACTIVE LIGHTBOX & FULLSCREEN IMAGE VIEWER
 * ==========================================================================
 * Displays high-res images, video playback, branding process stages (IHOP spotlight),
 * multi-image thumbnail carousels, and full-screen image zoom popups!
 */

document.addEventListener('DOMContentLoaded', () => {
  initLightboxModal();
  initFullscreenOverlay();
});

let currentLightboxProject = null;
let currentGalleryIndex = 0;

function initLightboxModal() {
  // Ensure Lightbox DOM structure exists
  let modal = document.getElementById('lightbox-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'lightbox-modal';
    modal.className = 'lightbox-modal';
    modal.innerHTML = `
      <div class="lightbox-backdrop" id="lightbox-backdrop"></div>
      <div class="lightbox-container glass-card">
        <button class="lightbox-close-btn" id="lightbox-close-btn" aria-label="Close Lightbox">&times;</button>
        
        <div class="lightbox-body">
          <!-- Left Column: Primary Media Viewer & Gallery Carousel -->
          <div class="lightbox-media-column">
            <div class="lightbox-viewer" id="lightbox-viewer"></div>
            <div class="lightbox-caption" id="lightbox-caption"></div>
            <div class="lightbox-gallery-strip" id="lightbox-gallery-strip"></div>
          </div>

          <!-- Right Column: Project Metadata, Description & Branding Process Breakdown -->
          <div class="lightbox-info-column">
            <div class="lightbox-badges" id="lightbox-badges"></div>
            <h2 class="lightbox-title" id="lightbox-title"></h2>
            <div class="tag-group mb-3" id="lightbox-tools"></div>
            <p class="lightbox-description" id="lightbox-description"></p>
            
            <div class="lightbox-process-section" id="lightbox-process-section"></div>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
  }

  // Event Listeners
  const backdrop = document.getElementById('lightbox-backdrop');
  const closeBtn = document.getElementById('lightbox-close-btn');

  if (backdrop) backdrop.addEventListener('click', closeLightbox);
  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const fsOverlay = document.getElementById('fullscreen-image-overlay');
      if (fsOverlay && fsOverlay.classList.contains('open')) {
        closeFullscreenImage();
      } else {
        closeLightbox();
      }
    }
  });
}

function initFullscreenOverlay() {
  let fsOverlay = document.getElementById('fullscreen-image-overlay');
  if (!fsOverlay) {
    fsOverlay = document.createElement('div');
    fsOverlay.id = 'fullscreen-image-overlay';
    fsOverlay.className = 'fullscreen-image-overlay';
    fsOverlay.innerHTML = `
      <button class="fullscreen-close-btn" id="fullscreen-close-btn" aria-label="Close Fullscreen">&times;</button>
      <div class="fullscreen-hint-badge"><i data-lucide="maximize-2" class="icon-inline"></i> Fullscreen Image View • Click anywhere to exit</div>
      <img id="fullscreen-img" class="fullscreen-img" src="" alt="Fullscreen Image View">
    `;
    document.body.appendChild(fsOverlay);

    fsOverlay.addEventListener('click', (e) => {
      closeFullscreenImage();
    });

    const closeBtn = document.getElementById('fullscreen-close-btn');
    if (closeBtn) closeBtn.addEventListener('click', closeFullscreenImage);
  }
}

/**
 * ==========================================================================
 * IHOP BRAND ECOSYSTEM INDIVIDUAL SECTION DATASETS
 * ==========================================================================
 * Provides dedicated popup views for each branch of the IHOP Brand Ecosystem,
 * showing ONLY the assets and design rationale belonging to that specific category.
 */
const ihopEcosystemData = {
  strategy: {
    id: "ihop-strategy",
    title: "IHOP — Brand Strategy & Foundation",
    categoryLabel: "Brand Strategy",
    tools: ["Market Research", "Target Personas", "Competitor Matrix", "Brand Strategy"],
    description: "The strategic foundation behind the IHOP rebrand: market research, competitive landscape analysis, target audience personas, and defining core brand value pillars.",
    isPersonalProject: true,
    processStages: [
      { name: "01. Market Landscape", detail: "Investigating breakfast dining trends, family occasions, and market shifts." },
      { name: "02. Core Brand Strategy", detail: "Formulating the 'Good Food, Brighter Days' positioning and emotional pillars." },
      { name: "03. Target Personas", detail: "Mapping generational demographics from breakfast lovers to modern families." },
      { name: "04. Competitor Positioning", detail: "Benchmarking IHOP against key casual dining competitors." }
    ],
    gallery: [
      { url: "images/Sparkling_Rhythm/1_Branding/IHOP_Branding/IHOP_Branding/1_Brand_Research.webp", caption: "01. Brand Research & Market Landscape Analysis" },
      { url: "images/Sparkling_Rhythm/1_Branding/IHOP_Branding/IHOP_Branding/2_Brand_Strategy.webp", caption: "02. Brand Strategy & Core Value Pillars" },
      { url: "images/Sparkling_Rhythm/1_Branding/IHOP_Branding/IHOP_Branding/3_Target_Audience.webp", caption: "03. Target Audience & Consumer Personas" },
      { url: "images/Sparkling_Rhythm/1_Branding/IHOP_Branding/IHOP_Branding/4_Competitor.webp", caption: "04. Competitor Benchmarking & Positioning Matrix" }
    ]
  },
  identity: {
    id: "ihop-identity",
    title: "IHOP — Visual Identity & Logo System",
    categoryLabel: "Visual Identity",
    tools: ["Logo Design", "Typography", "Colour Palette", "Brand Guidelines"],
    description: "Complete visual identity standards including the final signature logomark lockup, harmonious color palette specifications, and custom typography hierarchy.",
    isPersonalProject: true,
    processStages: [
      { name: "01. Signature Logomark", detail: "The smiling logomark pairing friendly curves with confident typography." },
      { name: "02. Harmonious Palette", detail: "Deep IHOP Blue paired with vibrant Coral and warm pancake tones." },
      { name: "03. Typography Standards", detail: "Carefully balanced display and body font pairings for clear readability." },
      { name: "04. Vector Geometry", detail: "Grid alignment and optical balance for scalable multi-platform use." }
    ],
    gallery: [
      { url: "images/Sparkling_Rhythm/1_Branding/IHOP_Branding/IHOP_Branding/7_Final_Logo with words on the side.webp", caption: "01. Final Signature Logomark & Lockup" },
      { url: "images/Sparkling_Rhythm/1_Branding/IHOP_Branding/IHOP_Branding/8_Colour_Palette.webp", caption: "02. Harmonious Brand Colour Palette & Values" },
      { url: "images/Sparkling_Rhythm/1_Branding/IHOP_Branding/IHOP_Branding/5_Typography.webp", caption: "03. Typography System & Font Hierarchy" },
      { url: "images/Sparkling_Rhythm/1_Branding/IHOP_Branding/IHOP_Branding/6_Logo_Concept.webp", caption: "04. Logo Construction & Vector Geometry" }
    ]
  },
  collaterals: {
    id: "ihop-collaterals",
    title: "IHOP — Brand Collaterals & Packaging",
    categoryLabel: "Collaterals & Packaging",
    tools: ["Menu Design", "Packaging", "Uniforms", "Print Production"],
    description: "Physical and print touchpoints designed to bring warmth and joy: restaurant dining menus, sustainable takeaway packaging boxes, and branded employee uniforms.",
    isPersonalProject: true,
    processStages: [
      { name: "01. Dining Menu Design", detail: "Structured food categories with appetizing layout and typography." },
      { name: "02. Eco-Friendly Packaging", detail: "Takeout pancake boxes, cups, and bags with friendly brand graphics." },
      { name: "03. Team Uniforms", detail: "Professional, comfortable polo shirts and branded staff apparel." }
    ],
    gallery: [
      { url: "images/Sparkling_Rhythm/1_Branding/IHOP_Branding/IHOP_Branding/11_Menu_Design.webp", caption: "01. Restaurant Dining Menu Design & Layout" },
      { url: "images/Sparkling_Rhythm/1_Branding/IHOP_Branding/IHOP_Branding/14_Packaging.webp", caption: "02. Takeaway Packaging & Eco-Friendly Boxes" },
      { url: "images/Sparkling_Rhythm/1_Branding/IHOP_Branding/IHOP_Branding/13__Employee_Uniform.webp", caption: "03. Employee Uniforms & Branded Apparel" }
    ]
  },
  story: {
    id: "ihop-story",
    title: "IHOP — Story, Mascot & Storyboard",
    categoryLabel: "Story & Mascot",
    tools: ["Character Illustration", "Mascot Design", "Animation Storyboard", "Moodboard"],
    description: "Bringing emotional connection to life through a friendly brand mascot character, animated logo storyboards, and an expressive creative moodboard.",
    isPersonalProject: true,
    processStages: [
      { name: "01. Brand Mascot Character", detail: "An endearing character full of personality and breakfast warmth." },
      { name: "02. Animation Storyboard", detail: "Frame-by-frame motion concept bringing the IHOP smile to life." },
      { name: "03. Creative Moodboard", detail: "Visual inspiration capturing wholesome dining and family happiness." }
    ],
    gallery: [
      { url: "images/Sparkling_Rhythm/1_Branding/IHOP_Branding/IHOP_Branding/9_Character(illustration).webp", caption: "01. Brand Mascot & Character Illustration" },
      { url: "images/Sparkling_Rhythm/1_Branding/IHOP_Branding/IHOP_Branding/10_Logo_Animation_Storyboard.webp", caption: "02. Logo Animation & Motion Storyboard" },
      { url: "images/Sparkling_Rhythm/1_Branding/IHOP_Branding/IHOP_Branding/16_Moodboard.webp", caption: "03. Creative Moodboard & Aesthetic Direction" }
    ]
  },
  marketing: {
    id: "ihop-marketing",
    title: "IHOP — Marketing & Promotional Campaigns",
    categoryLabel: "Marketing & Campaigns",
    tools: ["Campaign Creative", "Outdoor Advertising", "Billboards", "Promotions"],
    description: "Creative marketing campaigns, promotional creatives, outdoor billboards, and store banners promoting IHOP's signature breakfast experiences.",
    isPersonalProject: true,
    processStages: [
      { name: "01. Outdoor Billboards", detail: "High-impact roadside and street billboards with bold appetizing headlines." },
      { name: "02. Promotional Creatives", detail: "Limited-time offers, seasonal pancakes, and morning dining campaigns." },
      { name: "03. Campaign Positioning", detail: "Connecting emotional brand storytelling with direct restaurant traffic." }
    ],
    gallery: [
      { url: "images/Sparkling_Rhythm/1_Branding/IHOP_Branding/IHOP_Branding/12_Social_Media.webp", caption: "01. Campaign Social & Digital Creatives" },
      { url: "images/Sparkling_Rhythm/1_Branding/IHOP_Branding/IHOP_Branding/15_Restaurant_Environment.webp", caption: "02. Outdoor Billboard & Store Signage" },
      { url: "images/Sparkling_Rhythm/1_Branding/IHOP_Branding/IHOP_Branding/4_Competitor.webp", caption: "03. Competitive Campaign Positioning" }
    ]
  },
  social: {
    id: "ihop-social",
    title: "IHOP — Social Media & Community Content",
    categoryLabel: "Social Media",
    tools: ["Instagram Grid", "Social Content", "Digital Engagement", "Community"],
    description: "Engaging social media templates, content grids, and promotional graphics designed for vibrant online community interaction and appetite appeal.",
    isPersonalProject: true,
    processStages: [
      { name: "01. Instagram Grid Design", detail: "Harmonious feed aesthetic alternating between food imagery and playful brand art." },
      { name: "02. Community Engagement", detail: "Interactive social posts highlighting pancake moments and customer smiles." },
      { name: "03. Digital Campaigns", detail: "Short-form promotional story creatives and takeaway unboxing posts." }
    ],
    gallery: [
      { url: "images/Sparkling_Rhythm/1_Branding/IHOP_Branding/IHOP_Branding/12_Social_Media.webp", caption: "01. Instagram Feed & Promotional Campaign Grid" },
      { url: "images/Sparkling_Rhythm/1_Branding/IHOP_Branding/IHOP_Branding/9_Character(illustration).webp", caption: "02. Mascot Spotlight & Social Feature" },
      { url: "images/Sparkling_Rhythm/1_Branding/IHOP_Branding/IHOP_Branding/14_Packaging.webp", caption: "03. Unboxing & Takeout Social Post" }
    ]
  },
  concept: {
    id: "ihop-concept",
    title: "IHOP — Concept, Ideation & Sketches",
    categoryLabel: "Concept & Ideation",
    tools: ["Design Thinking", "Logo Ideation", "Vector Geometry", "Sketches"],
    description: "Exploration and ideation process from rough sketches to refined vector curves, symbol exploration, motion ideas, and creative moodboarding.",
    isPersonalProject: true,
    processStages: [
      { name: "01. Rough Ideation Sketches", detail: "Brainstorming pancake stacks, smiles, and geometric monogram marks." },
      { name: "02. Symbol & Vector Refinement", detail: "Translating loose sketches into mathematically precise vector geometry." },
      { name: "03. Visual Exploration", detail: "Testing mark applications across motion storyboards and moodboards." }
    ],
    gallery: [
      { url: "images/Sparkling_Rhythm/1_Branding/IHOP_Branding/IHOP_Branding/6_Logo_Concept.webp", caption: "01. Logo Ideation & Conceptual Sketches" },
      { url: "images/Sparkling_Rhythm/1_Branding/IHOP_Branding/IHOP_Branding/10_Logo_Animation_Storyboard.webp", caption: "02. Motion Concepts & Animation Storyboard" },
      { url: "images/Sparkling_Rhythm/1_Branding/IHOP_Branding/IHOP_Branding/16_Moodboard.webp", caption: "03. Creative Moodboard & Visual References" }
    ]
  },
  offline: {
    id: "ihop-offline",
    title: "IHOP — In-Store Experience & Environment",
    categoryLabel: "Offline Experience",
    tools: ["Storefront Design", "Environmental Graphics", "Interior Signage", "Dining Space"],
    description: "Spatial and environmental branding: restaurant exterior architecture, illuminated pylon signage, cozy interior wall graphics, and table dining experience.",
    isPersonalProject: true,
    processStages: [
      { name: "01. Exterior Architecture", detail: "Modern blue roofline, glass facade, and welcoming outdoor entrance." },
      { name: "02. Pylon & Directional Signage", detail: "High-visibility illuminated pylon sign with clean brand presence." },
      { name: "03. Interior Dining Environment", detail: "Warm wood finishes, wall murals ('Good Food Brighter Days'), and table menus." }
    ],
    gallery: [
      { url: "images/Sparkling_Rhythm/1_Branding/IHOP_Branding/IHOP_Branding/15_Restaurant_Environment.webp", caption: "01. Restaurant Exterior, Interior & Signage" },
      { url: "images/Sparkling_Rhythm/1_Branding/IHOP_Branding/IHOP_Branding/11_Menu_Design.webp", caption: "02. In-Store Table Dining Menu Experience" }
    ]
  }
};

/**
 * Open a specific section of the IHOP Brand Ecosystem in its own focused popup
 * showing ONLY the images and information related to that section.
 */
function openEcosystemSection(sectionKey) {
  const sectionData = ihopEcosystemData[sectionKey];
  if (!sectionData) {
    openLightbox('ihop-rebranding', 0);
    return;
  }

  currentLightboxProject = sectionData;
  currentGalleryIndex = 0;

  const modal = document.getElementById('lightbox-modal');
  const badgesContainer = document.getElementById('lightbox-badges');
  const titleContainer = document.getElementById('lightbox-title');
  const toolsContainer = document.getElementById('lightbox-tools');
  const descContainer = document.getElementById('lightbox-description');
  const processContainer = document.getElementById('lightbox-process-section');

  // Set Section Metadata
  badgesContainer.innerHTML = `
    <span class="project-category-badge">
      <i data-lucide="tag" class="icon-inline"></i> ${sectionData.categoryLabel}
    </span>
    <span class="badge" style="background:rgba(0,79,159,0.12);color:#004F9F;">
      <i data-lucide="layers" class="icon-inline"></i> IHOP Rebrand Section
    </span>
  `;

  titleContainer.textContent = sectionData.title;
  toolsContainer.innerHTML = sectionData.tools.map(t => `<span class="tag-chip">${t}</span>`).join('');
  descContainer.textContent = sectionData.description;

  // Render Section Process Highlights & Quick Jump to Full Case Study
  if (sectionData.processStages && sectionData.processStages.length > 0) {
    processContainer.innerHTML = `
      <div class="section-tag mb-2" style="margin-top:1.5rem;"><i data-lucide="check-circle" class="icon-inline"></i> Section Highlights</div>
      <div class="lightbox-process-grid">
        ${sectionData.processStages.map(s => `
          <div class="glass-card lightbox-process-step">
            <div class="process-step-name">${s.name}</div>
            <div class="process-step-detail">${s.detail}</div>
          </div>
        `).join('')}
      </div>
      <button class="btn btn-secondary mt-3" style="width:100%;" onclick="openLightbox('ihop-rebranding', 0)">
        <i data-lucide="layout-grid" class="icon-inline"></i> View Complete Case Study (All 16 Boards)
      </button>
    `;
  } else {
    processContainer.innerHTML = '';
  }

  // Render Media & Gallery Strip with ONLY this section's assets
  renderLightboxMedia();
  renderLightboxGalleryStrip();

  // Re-initialize Lucide Icons inside Lightbox
  if (window.lucide) lucide.createIcons();

  // Show Modal
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function openLightbox(projectId, initialIndex = 0) {
  if (typeof projectsData === 'undefined') return;
  const project = projectsData.find(p => p.id === projectId);
  if (!project) return;

  currentLightboxProject = project;
  currentGalleryIndex = (typeof initialIndex === 'number' && initialIndex >= 0) ? initialIndex : 0;

  const modal = document.getElementById('lightbox-modal');
  const badgesContainer = document.getElementById('lightbox-badges');
  const titleContainer = document.getElementById('lightbox-title');
  const toolsContainer = document.getElementById('lightbox-tools');
  const descContainer = document.getElementById('lightbox-description');
  const processContainer = document.getElementById('lightbox-process-section');

  // Set Metadata
  badgesContainer.innerHTML = `
    <span class="project-category-badge">
      <i data-lucide="tag" class="icon-inline"></i> ${project.categoryLabel || project.category}
    </span>
    ${project.isPersonalProject ? `<span class="badge" style="background:rgba(255,183,3,0.15);color:var(--clr-amber-gold);"><i data-lucide="sparkles" class="icon-inline"></i> Personal Rebranding Case Study</span>` : ''}
  `;

  titleContainer.textContent = project.title;
  toolsContainer.innerHTML = project.tools.map(t => `<span class="tag-chip">${t}</span>`).join('');
  descContainer.textContent = project.detailsText || project.description;

  // Render Branding Process Breakdown
  if (project.processStages && project.processStages.length > 0) {
    processContainer.innerHTML = `
      <div class="section-tag mb-2" style="margin-top:1.5rem;"><i data-lucide="git-commit" class="icon-inline"></i> Branding Process Breakdown</div>
      <div class="lightbox-process-grid">
        ${project.processStages.map(s => `
          <div class="glass-card lightbox-process-step">
            <div class="process-step-name">${s.name}</div>
            <div class="process-step-detail">${s.detail}</div>
          </div>
        `).join('')}
      </div>
    `;
  } else {
    processContainer.innerHTML = '';
  }

  // Render Media & Gallery Carousel
  renderLightboxMedia();
  renderLightboxGalleryStrip();

  // Re-initialize Lucide Icons inside Lightbox
  if (window.lucide) lucide.createIcons();

  // Show Modal
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function renderLightboxMedia() {
  const viewer = document.getElementById('lightbox-viewer');
  const caption = document.getElementById('lightbox-caption');
  if (!viewer || !currentLightboxProject) return;

  const gallery = currentLightboxProject.gallery || [
    { 
      url: currentLightboxProject.mediaType === 'video' ? currentLightboxProject.videoUrl : currentLightboxProject.primaryImage, 
      caption: currentLightboxProject.title 
    }
  ];
  const currentItem = gallery[currentGalleryIndex] || gallery[0];
  const mediaUrl = currentItem.url || currentLightboxProject.videoUrl || currentLightboxProject.primaryImage;

  const isVideoUrl = mediaUrl.toLowerCase().endsWith('.webm') || mediaUrl.toLowerCase().endsWith('.mp4');

  if (isVideoUrl) {
    viewer.innerHTML = `
      <video class="lightbox-video-player" controls autoplay loop src="${mediaUrl}">
        Your browser does not support video playback.
      </video>
    `;
  } else {
    viewer.innerHTML = `
      <img src="${mediaUrl}" alt="${currentItem.caption || currentLightboxProject.title}" class="lightbox-main-img" onclick="openFullscreenImage('${mediaUrl}', '${(currentItem.caption || currentLightboxProject.title).replace(/'/g, "\\'")}')" title="Click to view full screen image">
    `;
  }

  if (caption) {
    caption.textContent = currentItem.caption || `${currentGalleryIndex + 1} of ${gallery.length}`;
  }
}

function renderLightboxGalleryStrip() {
  const strip = document.getElementById('lightbox-gallery-strip');
  if (!strip || !currentLightboxProject) return;

  const gallery = currentLightboxProject.gallery;
  if (!gallery || gallery.length <= 1) {
    strip.innerHTML = '';
    return;
  }

  strip.innerHTML = gallery.map((item, index) => {
    const isVid = item.url.toLowerCase().endsWith('.webm') || item.url.toLowerCase().endsWith('.mp4');
    return `
      <div class="lightbox-thumb ${index === currentGalleryIndex ? 'active' : ''}" onclick="selectGalleryIndex(${index})">
        ${isVid ? `<div class="thumb-vid-overlay"><i data-lucide="play" style="width:16px;height:16px;"></i></div><video src="${item.url}#t=0.5" preload="metadata" style="width:100%;height:100%;object-fit:cover;"></video>` : `<img src="${item.url}" alt="Thumbnail ${index + 1}">`}
      </div>
    `;
  }).join('');
}

function selectGalleryIndex(index) {
  currentGalleryIndex = index;
  renderLightboxMedia();
  renderLightboxGalleryStrip();
}

function openFullscreenImage(imgSrc, captionText) {
  const fsOverlay = document.getElementById('fullscreen-image-overlay');
  const fsImg = document.getElementById('fullscreen-img');

  if (fsOverlay && fsImg) {
    fsImg.src = imgSrc;
    fsImg.alt = captionText || 'Fullscreen View';
    fsOverlay.classList.add('open');

    if (window.lucide) lucide.createIcons();
  }
}

function closeFullscreenImage() {
  const fsOverlay = document.getElementById('fullscreen-image-overlay');
  if (fsOverlay) {
    fsOverlay.classList.remove('open');
  }
}

function closeLightbox() {
  const modal = document.getElementById('lightbox-modal');
  if (modal) {
    modal.classList.remove('open');
    document.body.style.overflow = '';

    // Pause any playing video
    const video = modal.querySelector('video');
    if (video) video.pause();
  }
}
