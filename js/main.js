/**
 * ==========================================================================
 * SPARKLING RHYTHM PORTFOLIO - MAIN INTERACTION LOGIC
 * ==========================================================================
 * Handles FAQ accordion expand/collapse, software tools marquee duplicating,
 * and Lucide icon rendering.
 */

document.addEventListener('DOMContentLoaded', () => {
  initFaqAccordion();
  initMarqueeLoop();

  if (window.lucide) {
    lucide.createIcons();
  }
});

/**
 * FAQ Accordion Expand / Collapse
 */
function initFaqAccordion() {
  const faqQuestions = document.querySelectorAll('.faq-question');

  faqQuestions.forEach((question) => {
    question.addEventListener('click', () => {
      const faqItem = question.parentElement;
      const isOpen = faqItem.classList.contains('open');

      // Close all other open FAQ items
      document.querySelectorAll('.faq-item').forEach((item) => {
        item.classList.remove('open');
      });

      // Toggle current FAQ item
      if (!isOpen) {
        faqItem.classList.add('open');
      }
    });
  });
}

/**
 * Ensures smooth infinite loop for software toolkit marquee track
 */
function initMarqueeLoop() {
  const marqueeTrack = document.querySelector('.tools-marquee-track');
  if (marqueeTrack) {
    const marqueeContent = marqueeTrack.querySelector('.tools-marquee-content');
    if (marqueeContent && marqueeTrack.children.length === 1) {
      // Duplicate marquee content once for infinite continuous scroll
      const clone = marqueeContent.cloneNode(true);
      marqueeTrack.appendChild(clone);
    }
  }
}

/**
 * Copies email address to clipboard and presents a modern glassmorphism toast popup
 */
function copyEmailToClipboard(event, email = 'kumawatsupriya33@gmail.com') {
  if (event) {
    event.preventDefault();
  }

  const doToast = () => {
    showToastPopup('Email copied to clipboard! (' + email + ')');
  };

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(email).then(doToast).catch(() => {
      fallbackCopy(email);
    });
  } else {
    fallbackCopy(email);
  }

  // Attempt mailto trigger
  setTimeout(() => {
    window.location.href = 'mailto:' + email;
  }, 350);
}

function fallbackCopy(text) {
  const textArea = document.createElement('textarea');
  textArea.value = text;
  textArea.style.position = 'fixed';
  textArea.style.opacity = '0';
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  try {
    document.execCommand('copy');
    showToastPopup('Email copied to clipboard! (' + text + ')');
  } catch (err) {
    showToastPopup('Email address: ' + text);
  }
  document.body.removeChild(textArea);
}

function showToastPopup(message) {
  let toast = document.getElementById('global-toast-popup');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'global-toast-popup';
    toast.className = 'toast-popup';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `<i data-lucide="check-circle" class="icon-inline" style="color:var(--clr-coral-red);"></i> <span>${message}</span>`;
  if (window.lucide) {
    lucide.createIcons();
  }

  toast.classList.add('show');

  if (window.toastTimer) {
    clearTimeout(window.toastTimer);
  }

  window.toastTimer = setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}
