/* ==========================================================================
   INTERACTIVE CANVAS HERO (Logo Leaf Colors & Twinkling Sparkle Stars)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const canvas1 = document.getElementById('hero-canvas-1');
  if (!canvas1) return;

  const ctx1 = canvas1.getContext('2d');
  let w1, h1;
  let particles1 = [];
  let fluidTrails = [];
  let sparkleStars = [];
  const mouse1 = { x: null, y: null };

  // Sample exact 4 leaf color accents from Sparkling_Logo.png
  const logoLeafColors = [
    '#F05365', // Coral Red
    '#FFB703', // Amber Gold
    '#48CAE4', // Ocean Cyan
    '#9B487A', // Plum Berry
    '#FAF6F0'  // Cream White
  ];

  function draw4PointStar(ctx, cx, cy, radius, color, alpha, rotation) {
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(rotation);
    ctx.globalAlpha = Math.max(0, alpha);
    ctx.fillStyle = color;
    ctx.shadowBlur = 15;
    ctx.shadowColor = color;

    ctx.beginPath();
    for (let i = 0; i < 8; i++) {
      const r = i % 2 === 0 ? radius : radius * 0.22;
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

  function initCanvas1() {
    if (!canvas1.parentElement) return;
    w1 = canvas1.width = canvas1.parentElement.offsetWidth;
    h1 = canvas1.height = canvas1.parentElement.offsetHeight;
    particles1 = [];
    sparkleStars = [];

    // Ambient floating dots
    for (let i = 0; i < 50; i++) {
      particles1.push({
        x: Math.random() * w1,
        y: Math.random() * h1,
        size: Math.random() * 2.5 + 1.2,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        color: logoLeafColors[Math.floor(Math.random() * logoLeafColors.length)],
        alpha: Math.random() * 0.65 + 0.3
      });
    }

    // Twinkling Sparkle Stars
    for (let i = 0; i < 20; i++) {
      sparkleStars.push({
        x: Math.random() * w1,
        y: Math.random() * h1,
        radius: Math.random() * 8 + 4,
        color: logoLeafColors[Math.floor(Math.random() * logoLeafColors.length)],
        alpha: Math.random() * 0.7 + 0.2,
        pulseSpeed: Math.random() * 0.03 + 0.015,
        pulseDir: Math.random() > 0.5 ? 1 : -1,
        rotation: Math.random() * Math.PI
      });
    }
  }

  // Spawn liquid trail ripple particles sampling logo colors on move
  window.addEventListener('mousemove', (e) => {
    const rect = canvas1.getBoundingClientRect();
    if (e.clientY >= rect.top && e.clientY <= rect.bottom && e.clientX >= rect.left && e.clientX <= rect.right) {
      mouse1.x = e.clientX - rect.left;
      mouse1.y = e.clientY - rect.top;

      for (let i = 0; i < 2; i++) {
        const randomColor = logoLeafColors[Math.floor(Math.random() * logoLeafColors.length)];
        fluidTrails.push({
          x: mouse1.x + (Math.random() - 0.5) * 12,
          y: mouse1.y + (Math.random() - 0.5) * 12,
          size: Math.random() * 8 + 4,
          maxSize: Math.random() * 26 + 14,
          color: randomColor,
          alpha: 0.75,
          vx: (Math.random() - 0.5) * 1.6,
          vy: (Math.random() - 0.5) * 1.6
        });
      }
    }
  });

  function animate1() {
    ctx1.clearRect(0, 0, w1, h1);

    // Render fluid cursor ripple trails
    for (let i = fluidTrails.length - 1; i >= 0; i--) {
      let t = fluidTrails[i];
      t.size += 0.85;
      t.alpha -= 0.025;
      t.x += t.vx;
      t.y += t.vy;

      if (t.alpha <= 0 || t.size >= t.maxSize) {
        fluidTrails.splice(i, 1);
        continue;
      }

      ctx1.save();
      ctx1.globalAlpha = Math.max(0, t.alpha);
      ctx1.beginPath();
      ctx1.arc(t.x, t.y, t.size, 0, Math.PI * 2);
      ctx1.fillStyle = t.color;
      ctx1.shadowBlur = 16;
      ctx1.shadowColor = t.color;
      ctx1.fill();
      ctx1.restore();
    }

    // Render ambient orbital particles
    particles1.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0 || p.x > w1) p.vx *= -1;
      if (p.y < 0 || p.y > h1) p.vy *= -1;

      ctx1.save();
      ctx1.globalAlpha = p.alpha;
      ctx1.beginPath();
      ctx1.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx1.fillStyle = p.color;
      ctx1.shadowBlur = 8;
      ctx1.shadowColor = p.color;
      ctx1.fill();
      ctx1.restore();
    });

    // Render Twinkling Background Sparkle Stars
    sparkleStars.forEach(s => {
      s.alpha += s.pulseSpeed * s.pulseDir;
      s.rotation += 0.005;

      if (s.alpha >= 0.95) {
        s.alpha = 0.95;
        s.pulseDir = -1;
      } else if (s.alpha <= 0.15) {
        s.alpha = 0.15;
        s.pulseDir = 1;
      }

      draw4PointStar(ctx1, s.x, s.y, s.radius, s.color, s.alpha, s.rotation);
    });

    requestAnimationFrame(animate1);
  }

  initCanvas1();
  animate1();

  window.addEventListener('resize', initCanvas1);
});
