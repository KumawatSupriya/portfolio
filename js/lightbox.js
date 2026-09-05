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

function openLightbox(projectId) {
  if (typeof projectsData === 'undefined') return;
  const project = projectsData.find(p => p.id === projectId);
  if (!project) return;

  currentLightboxProject = project;
  currentGalleryIndex = 0;

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
