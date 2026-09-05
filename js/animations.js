/* ==========================================================================
   SCROLL REVEAL, 3D SPATIAL TILT & CLICK SPARKLE BURST ANIMATIONS
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  /* ------------------------------------------------------------------------
     1. CLICK & INTERACTION SPARKLE BURST PHYSICS
     ------------------------------------------------------------------------ */
  const logoColors = ['#FFB703', '#F05365', '#48CAE4', '#9B487A', '#FAF6F0'];

  document.addEventListener('click', (e) => {
    spawnSparkleBurst(e.clientX, e.clientY);
  });

  function spawnSparkleBurst(clickX, clickY) {
    const burstContainer = document.createElement('div');
    burstContainer.className = 'sparkle-burst-container';
    burstContainer.style.cssText = `position:fixed;left:${clickX}px;top:${clickY}px;pointer-events:none;z-index:99999;`;
    document.body.appendChild(burstContainer);

    const count = 10;
    for (let i = 0; i < count; i++) {
      const particle = document.createElement('div');
      particle.className = 'sparkle-burst-star';
      
      const color = logoColors[Math.floor(Math.random() * logoColors.length)];
      const angle = (i * (360 / count)) + (Math.random() * 20 - 10);
      const distance = Math.random() * 60 + 30;
      const size = Math.random() * 12 + 8;

      const rad = (angle * Math.PI) / 180;
      const tx = Math.cos(rad) * distance;
      const ty = Math.sin(rad) * distance;

      particle.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        left: -${size / 2}px;
        top: -${size / 2}px;
        background: ${color};
        clip-path: polygon(50% 0%, 65% 35%, 100% 50%, 65% 65%, 50% 100%, 35% 65%, 0% 50%, 35% 35%);
        box-shadow: 0 0 12px ${color};
        opacity: 1;
        transform: translate3d(0, 0, 0) scale(0.4) rotate(0deg);
        transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.6s ease-out;
      `;

      burstContainer.appendChild(particle);

      requestAnimationFrame(() => {
        particle.style.transform = `translate3d(${tx}px, ${ty}px, 0) scale(1.2) rotate(${Math.random() * 180}deg)`;
        particle.style.opacity = '0';
      });
    }

    setTimeout(() => {
      burstContainer.remove();
    }, 700);
  }

  /* ------------------------------------------------------------------------
     2. SCROLL REVEAL ANIMATION (Intersection Observer)
     ------------------------------------------------------------------------ */
  const revealElements = document.querySelectorAll('.reveal');

  if (revealElements.length > 0) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
  }

  /* ------------------------------------------------------------------------
     3. 3D SPATIAL MOUSE TILT PHYSICS
     ------------------------------------------------------------------------ */
  const spatialCards = document.querySelectorAll('.spatial-glass-card');
  
  spatialCards.forEach(spatialCard => {
    const parent = spatialCard.parentElement;

    parent.addEventListener('mousemove', (e) => {
      const rect = spatialCard.getBoundingClientRect();
      const cardX = e.clientX - rect.left - rect.width / 2;
      const cardY = e.clientY - rect.top - rect.height / 2;

      const rotateX = (-cardY / (rect.height / 2)) * 12; // Max 12 deg tilt
      const rotateY = (cardX / (rect.width / 2)) * 12;

      spatialCard.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    });

    parent.addEventListener('mouseleave', () => {
      spatialCard.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    });
  });

  /* ------------------------------------------------------------------------
     4. MAGNETIC TYPOGRAPHY POP EFFECT
     ------------------------------------------------------------------------ */
  const magneticTitles = document.querySelectorAll('.magnetic-title');
  magneticTitles.forEach(title => {
    const text = title.textContent;
    title.innerHTML = '';
    [...text].forEach(char => {
      const span = document.createElement('span');
      span.className = char === ' ' ? 'magnetic-space' : 'magnetic-letter';
      span.innerHTML = char === ' ' ? '&nbsp;' : char;
      title.appendChild(span);
    });
  });
});
