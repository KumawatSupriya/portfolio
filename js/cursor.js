/* ==========================================================================
   CUSTOM DUAL MAGNETIC CURSOR & MAGICAL SPARKLE TRAIL SCRIPT
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // Check if touch device or phone view (max-width: 768px) - skip custom cursor on mobile
  if ('ontouchstart' in window || navigator.maxTouchPoints > 0 || window.innerWidth <= 768) return;

  // 1. Create Cursor Elements
  const dot = document.createElement('div');
  dot.id = 'cursor-dot';
  const ring = document.createElement('div');
  ring.id = 'cursor-ring';

  document.body.appendChild(dot);
  document.body.appendChild(ring);

  // 2. Create High-Performance Sparkle Overlay Canvas
  const sparkleCanvas = document.createElement('canvas');
  sparkleCanvas.id = 'sparkle-cursor-canvas';
  sparkleCanvas.style.cssText = 'position:fixed;inset:0;width:100vw;height:100vh;pointer-events:none;z-index:99998;';
  document.body.appendChild(sparkleCanvas);

  const ctx = sparkleCanvas.getContext('2d');
  let sw = (sparkleCanvas.width = window.innerWidth);
  let sh = (sparkleCanvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    sw = sparkleCanvas.width = window.innerWidth;
    sh = sparkleCanvas.height = window.innerHeight;
  });

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let ringX = mouseX;
  let ringY = mouseY;
  let sparkles = [];

  const logoColors = ['#FFB703', '#F05365', '#48CAE4', '#9B487A', '#FAF6F0'];

  // Helper to draw 4-point sparkling star
  function drawSparkleStar(cx, cy, radius, color, alpha, rotation) {
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(rotation);
    ctx.globalAlpha = Math.max(0, alpha);
    ctx.fillStyle = color;
    ctx.shadowBlur = 12;
    ctx.shadowColor = color;

    ctx.beginPath();
    for (let i = 0; i < 8; i++) {
      const r = i % 2 === 0 ? radius : radius * 0.25;
      const a = (i * Math.PI) / 4;
      const x = Math.cos(a) * r;
      const y = Math.sin(a) * r;
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }

  let lastSpawn = 0;
  window.addEventListener('mousemove', (e) => {
    if (window.innerWidth <= 768) return;
    mouseX = e.clientX;
    mouseY = e.clientY;

    dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;

    // Throttle sparkle particle generation
    const now = Date.now();
    if (now - lastSpawn > 35) {
      lastSpawn = now;
      const randomColor = logoColors[Math.floor(Math.random() * logoColors.length)];
      sparkles.push({
        x: mouseX + (Math.random() - 0.5) * 8,
        y: mouseY + (Math.random() - 0.5) * 8,
        radius: Math.random() * 6 + 4,
        maxRadius: Math.random() * 14 + 8,
        color: randomColor,
        alpha: 0.9,
        rotation: Math.random() * Math.PI,
        spinSpeed: (Math.random() - 0.5) * 0.1,
        vx: (Math.random() - 0.5) * 1.2,
        vy: (Math.random() - 0.5) * 1.2 + 0.3
      });
    }
  });

  // Lerp ring follow & sparkle canvas loop
  function animateCursorAndSparkles() {
    ringX += (mouseX - ringX) * 0.15;
    ringY += (mouseY - ringY) * 0.15;
    ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;

    // Render Sparkles
    ctx.clearRect(0, 0, sw, sh);

    for (let i = sparkles.length - 1; i >= 0; i--) {
      let s = sparkles[i];
      s.x += s.vx;
      s.y += s.vy;
      s.rotation += s.spinSpeed;
      s.alpha -= 0.025;
      s.radius *= 0.96;

      if (s.alpha <= 0 || s.radius <= 0.5) {
        sparkles.splice(i, 1);
        continue;
      }

      drawSparkleStar(s.x, s.y, s.radius, s.color, s.alpha, s.rotation);
    }

    requestAnimationFrame(animateCursorAndSparkles);
  }
  animateCursorAndSparkles();

  // Add hover class on interactive elements
  const interactiveSelector = 'a, button, .btn, .tool-chip, .service-card, .project-card, .faq-question, .social-link, .focus-card, .philosophy-card, .contact-card, .nav-brand';

  document.addEventListener('mouseover', (e) => {
    if (e.target.closest(interactiveSelector)) {
      document.body.classList.add('cursor-hover');
    }
  });

  document.addEventListener('mouseout', (e) => {
    if (e.target.closest(interactiveSelector)) {
      document.body.classList.remove('cursor-hover');
    }
  });
});
