/**
 * ==========================================================================
 * SPARKLING RHYTHM PORTFOLIO - REUSABLE LAYOUT COMPONENT (HEADER & FOOTER)
 * ==========================================================================
 * Automatically injects clean Header (Navbar) and Footer into every page with
 * official Sparkling_Logo.png brand image, SVG icons, and Lucide icons.
 */

// Apply saved theme immediately to prevent screen flash (Default: Light Mode)
(function() {
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
})();

document.addEventListener('DOMContentLoaded', () => {
  renderHeader();
  renderFooter();
  initMobileNav();
  initScrollNavbar();
  initThemeToggle();
  initPageTransitions();

  if (window.lucide) {
    lucide.createIcons();
  }
});

function renderHeader() {
  const headerContainer = document.getElementById('site-header');
  if (!headerContainer) return;

  const activePage = headerContainer.getAttribute('data-page') || 'home';

  headerContainer.innerHTML = `
    <nav class="navbar">
      <div class="container nav-container">
        <a href="index.html" class="nav-brand">
          <img src="images/Sparkling_Rhythm/8_Sparkling_Logo.webp" alt="Sparkling Rhythm Logo" class="nav-brand-logo-img">
          <span>Sparkling Rhythm<span class="gradient-text">.</span></span>
        </a>

        <div class="nav-links">
          <a href="index.html" class="nav-link ${activePage === 'home' ? 'active' : ''}">
            <i data-lucide="home" class="icon-inline"></i> Home
          </a>
          <a href="about.html" class="nav-link ${activePage === 'about' ? 'active' : ''}">
            <i data-lucide="user" class="icon-inline"></i> About
          </a>
          <a href="projects.html" class="nav-link ${activePage === 'projects' ? 'active' : ''}">
            <i data-lucide="grid" class="icon-inline"></i> Portfolio
          </a>
          <a href="contact.html" class="nav-link ${activePage === 'contact' ? 'active' : ''}">
            <i data-lucide="mail" class="icon-inline"></i> Contact
          </a>
        </div>

        <div class="nav-actions">
          <button class="theme-toggle-btn" id="theme-toggle-btn" aria-label="Toggle Light/Dark Theme" title="Toggle Theme">
            <i data-lucide="moon" class="theme-icon"></i>
          </button>
          <a href="contact.html" class="btn btn-primary">
            <span>Let’s Work Together</span>
            <i data-lucide="arrow-up-right" class="icon-inline"></i>
          </a>
          <button class="hamburger" id="hamburger-btn" aria-label="Toggle navigation menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>

    <!-- Mobile Navigation Drawer -->
    <div class="mobile-drawer" id="mobile-drawer">
      <a href="index.html" class="mobile-nav-link ${activePage === 'home' ? 'active' : ''}">
        <i data-lucide="home" class="icon-inline"></i> Home
      </a>
      <a href="about.html" class="mobile-nav-link ${activePage === 'about' ? 'active' : ''}">
        <i data-lucide="user" class="icon-inline"></i> About
      </a>
      <a href="projects.html" class="mobile-nav-link ${activePage === 'projects' ? 'active' : ''}">
        <i data-lucide="grid" class="icon-inline"></i> Portfolio
      </a>
      <a href="contact.html" class="mobile-nav-link ${activePage === 'contact' ? 'active' : ''}">
        <i data-lucide="mail" class="icon-inline"></i> Contact
      </a>
      <a href="contact.html" class="btn btn-primary mt-3">
        <span>Let’s Work Together</span>
        <i data-lucide="arrow-up-right" class="icon-inline"></i>
      </a>
    </div>
  `;
}

function renderFooter() {
  const footerContainer = document.getElementById('site-footer');
  if (!footerContainer) return;

  footerContainer.innerHTML = `
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <a href="index.html" class="nav-brand">
            <img src="images/Sparkling_Rhythm/8_Sparkling_Logo.webp" alt="Sparkling Rhythm Logo" class="nav-brand-logo-img">
            <span>Sparkling Rhythm<span class="gradient-text">.</span></span>
          </a>

          <div class="footer-nav">
            <a href="index.html" class="nav-link"><i data-lucide="home" class="icon-inline"></i> Home</a>
            <a href="about.html" class="nav-link"><i data-lucide="user" class="icon-inline"></i> About</a>
            <a href="projects.html" class="nav-link"><i data-lucide="grid" class="icon-inline"></i> Portfolio</a>
            <a href="contact.html" class="nav-link"><i data-lucide="mail" class="icon-inline"></i> Contact</a>
          </div>

          <div class="footer-socials">
            <a href="mailto:kumawatsupriya33@gmail.com" class="social-link" title="Email Supriya" target="_blank" rel="noopener">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            </a>
            <a href="https://www.youtube.com/@Sparkling_Rhythm" class="social-link" title="YouTube Channel" target="_blank" rel="noopener">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.56 49.56 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><polygon points="10 15 15 12 10 9 10 15"/></svg>
            </a>
            <a href="https://www.linkedin.com/in/kumawat-supriya-b934492a4?utm_source=share_via&utm_content=profile&utm_medium=member_android" class="social-link" title="LinkedIn Profile" target="_blank" rel="noopener">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a href="https://github.com/KumawatSupriya" class="social-link" title="GitHub Profile" target="_blank" rel="noopener">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
            </a>
          </div>
        </div>

        <div class="footer-bottom">
          <p>© 2026 Supriya Kumawat — Sparkling Rhythm. All rights reserved.</p>
        </div>
      </div>
    </footer>
  `;
}

function initMobileNav() {
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const mobileDrawer = document.getElementById('mobile-drawer');

  if (hamburgerBtn && mobileDrawer) {
    hamburgerBtn.addEventListener('click', () => {
      mobileDrawer.classList.toggle('open');
    });
  }
}

function initScrollNavbar() {
  window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
      if (window.scrollY > 40) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }
  });
}

function initPageTransitions() {
  let overlay = document.getElementById('page-splash-overlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.id = 'page-splash-overlay';
    overlay.className = 'page-splash-overlay';
    overlay.innerHTML = `
      <div class="splash-video-container">
        <video class="splash-video" autoplay loop muted playsinline>
          <source src="images/Sparkling_Rhythm/2_Animation/1_Sparkling_Rhythm_Motion_Graphics/Motion graphics .webm" type="video/webm">
        </video>
      </div>
      <div class="splash-text">Sparkling Rhythm</div>
    `;
    document.body.appendChild(overlay);
    const vid = overlay.querySelector('video');
    if (vid) vid.playbackRate = 2.0;
  }

  // Handle page entry/fade-out if coming from transition
  if (sessionStorage.getItem('pageTransition') === 'true') {
    overlay.classList.add('active');
    setTimeout(() => {
      overlay.classList.remove('active');
      sessionStorage.removeItem('pageTransition');
    }, 600);
  }

  // Prevent stuck overlay on page restoration / bfcache
  window.addEventListener('pageshow', () => {
    overlay.classList.remove('active');
    sessionStorage.removeItem('pageTransition');
  });

  // Intercept click on internal links
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a');
    if (!link) return;

    const href = link.getAttribute('href');
    if (!href) return;

    // Ignore external, target=_blank, mailto, tel, javascript, hash links
    if (
      link.target === '_blank' ||
      href.startsWith('#') ||
      href.startsWith('mailto:') ||
      href.startsWith('tel:') ||
      href.startsWith('javascript:') ||
      link.hasAttribute('download')
    ) {
      return;
    }

    // Resolve URL
    const destination = new URL(link.href, window.location.href);

    // Ignore cross-origin
    if (destination.origin !== window.location.origin) return;

    // Ignore clicks to the exact same page & anchor
    if (destination.pathname === window.location.pathname && destination.hash) return;
    if (destination.href === window.location.href) return;

    // Trigger transition overlay
    e.preventDefault();
    overlay.classList.add('active');

    const video = overlay.querySelector('video');
    if (video) {
      video.playbackRate = 2.0;
      video.currentTime = 0;
      video.play().catch(() => {});
    }

    sessionStorage.setItem('pageTransition', 'true');

    setTimeout(() => {
      window.location.href = destination.href;
    }, 2000);
  });
}

function initThemeToggle() {
  const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
  updateThemeToggleUI(currentTheme);

  const toggleBtn = document.getElementById('theme-toggle-btn');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const theme = document.documentElement.getAttribute('data-theme') || 'light';
      const newTheme = theme === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      updateThemeToggleUI(newTheme);
    });
  }
}

function updateThemeToggleUI(theme) {
  const toggleBtn = document.getElementById('theme-toggle-btn');
  if (!toggleBtn) return;
  toggleBtn.setAttribute('title', theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode');
  toggleBtn.setAttribute('aria-label', theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode');
  toggleBtn.innerHTML = theme === 'light'
    ? '<i data-lucide="moon" class="theme-icon"></i>'
    : '<i data-lucide="sun" class="theme-icon"></i>';

  if (window.lucide) {
    lucide.createIcons();
  }
}

