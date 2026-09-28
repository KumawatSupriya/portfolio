/**
 * ==========================================================================
 * PRICING PAGE CONTROLLER & EMAIL INTERACTION
 * ==========================================================================
 */

let activeServiceId = "logo-design";

document.addEventListener('DOMContentLoaded', () => {
  renderBrandingPackages();
  renderServiceTabs();
  renderServiceTiers(activeServiceId);
  renderReferenceRates();
  renderProjectRules();
  initModalListeners();

  if (window.lucide) {
    lucide.createIcons();
  }
});

/**
 * --------------------------------------------------------------------------
 * 1. RENDER BRANDING PACKAGES
 * --------------------------------------------------------------------------
 */
function renderBrandingPackages() {
  const container = document.getElementById('branding-packages-grid');
  if (!container || !pricingData || !pricingData.brandingPackages) return;

  container.innerHTML = pricingData.brandingPackages.map((pkg, index) => {
    return `
      <div class="glass-card branding-card reveal active">
        <div class="branding-card-header">
          <div class="branding-meta-badge">
            <i data-lucide="clock" class="icon-inline"></i> ${pkg.timeline}
          </div>
          <h3 class="branding-card-title">${pkg.name}</h3>
          <div class="branding-card-price">${pkg.price}</div>
          <div class="branding-card-suitability">
            <strong>Suitable for:</strong> ${pkg.suitableFor}
          </div>
          <p class="branding-card-summary">${pkg.summary}</p>
        </div>

        <div class="branding-inclusions-wrap">
          <div class="inclusions-title">
            <i data-lucide="check-circle-2" class="icon-inline"></i> Package Inclusions:
          </div>
          <ul class="pricing-feature-list">
            ${pkg.inclusions.map(inc => `
              <li>
                <span class="check-icon"><i data-lucide="check" class="icon-inline"></i></span>
                <span>${inc}</span>
              </li>
            `).join('')}
          </ul>
        </div>

        <div class="branding-card-footer">
          <div class="pricing-card-meta-line">
            <span class="meta-label">Revisions:</span>
            <span class="meta-val">${pkg.revisions}</span>
          </div>
          <button class="btn btn-primary" style="width: 100%; justify-content: center; margin-top: 1.2rem;"
            onclick="handlePackageEnquiry('Complete Branding Packages', '${pkg.name}', '${pkg.price}')">
            <span>Enquire About Package</span>
            <i data-lucide="arrow-up-right" class="icon-inline"></i>
          </button>
        </div>
      </div>
    `;
  }).join('');

  if (window.lucide) lucide.createIcons();
}

/**
 * --------------------------------------------------------------------------
 * 2. RENDER INDIVIDUAL SERVICE TABS
 * --------------------------------------------------------------------------
 */
function renderServiceTabs() {
  const tabContainer = document.getElementById('pricing-category-tabs');
  if (!tabContainer || !pricingData || !pricingData.services) return;

  tabContainer.innerHTML = pricingData.services.map((service, index) => {
    const isActive = service.id === activeServiceId;
    return `
      <button class="pricing-tab-btn ${isActive ? 'active' : ''}" 
        data-service-id="${service.id}"
        role="tab"
        aria-selected="${isActive ? 'true' : 'false'}"
        onclick="switchServiceCategory('${service.id}')">
        <i data-lucide="${service.icon}" class="icon-inline"></i>
        <span>${service.shortLabel}</span>
      </button>
    `;
  }).join('');

  if (window.lucide) lucide.createIcons();
}

/**
 * Switches the displayed individual design service
 */
function switchServiceCategory(serviceId) {
  activeServiceId = serviceId;

  // Update tabs UI
  const tabButtons = document.querySelectorAll('.pricing-tab-btn');
  tabButtons.forEach(btn => {
    const isThis = btn.getAttribute('data-service-id') === serviceId;
    btn.classList.toggle('active', isThis);
    btn.setAttribute('aria-selected', isThis ? 'true' : 'false');
  });

  // Render tiers
  renderServiceTiers(serviceId);
}

/**
 * --------------------------------------------------------------------------
 * 3. RENDER THREE TIERS FOR ACTIVE SERVICE
 * --------------------------------------------------------------------------
 */
function renderServiceTiers(serviceId) {
  const container = document.getElementById('pricing-tiers-grid');
  const serviceHeader = document.getElementById('active-service-header');
  if (!container || !pricingData) return;

  const currentService = pricingData.services.find(s => s.id === serviceId);
  if (!currentService) return;

  if (serviceHeader) {
    serviceHeader.innerHTML = `
      <div class="active-service-info">
        <h3 class="active-service-name">${currentService.name}</h3>
        <p class="active-service-desc">${currentService.description}</p>
      </div>
    `;
  }

  container.innerHTML = currentService.tiers.map((tier, idx) => {
    const tierBadgeClass = tier.tierLevel.toLowerCase(); // 'basic', 'standard', 'premium'
    const tierAccordionId = `accordion-${serviceId}-${idx}`;

    return `
      <div class="glass-card pricing-card tier-${tierBadgeClass} reveal active">
        <div class="pricing-card-top">
          <div class="pricing-tier-badge badge-${tierBadgeClass}">
            ${tier.tierLevel} Tier
          </div>
          <h4 class="pricing-package-name">${tier.name}</h4>
          <div class="pricing-price-tag">${tier.price}</div>
          <p class="pricing-package-summary">${tier.summary}</p>
        </div>

        <div class="pricing-card-features">
          <div class="inclusions-title">
            <i data-lucide="layers" class="icon-inline"></i> Core Inclusions:
          </div>
          <ul class="pricing-feature-list">
            ${tier.inclusions.map(item => `
              <li>
                <span class="check-icon"><i data-lucide="check" class="icon-inline"></i></span>
                <span>${item}</span>
              </li>
            `).join('')}
          </ul>
        </div>

        <!-- Expandable Details Accordion -->
        <div class="pricing-expandable-section">
          <button class="pricing-expand-toggle" 
            onclick="toggleTierAccordion('${tierAccordionId}')"
            aria-expanded="false" 
            id="toggle-${tierAccordionId}">
            <span>View Full Deliverables & Formats</span>
            <i data-lucide="chevron-down" class="expand-chevron icon-inline"></i>
          </button>
          <div class="pricing-expand-content" id="${tierAccordionId}">
            <div class="expand-detail-group">
              <span class="expand-label">Revision Rounds:</span>
              <span class="expand-val">${tier.revisions}</span>
            </div>
            <div class="expand-detail-group">
              <span class="expand-label">File Formats:</span>
              <span class="expand-val">${tier.fileFormats}</span>
            </div>
            <div class="expand-detail-group">
              <span class="expand-label">Primary Deliverables:</span>
              <span class="expand-val">${tier.deliverables}</span>
            </div>
          </div>
        </div>

        <div class="pricing-card-action">
          <button class="btn ${tierBadgeClass === 'premium' ? 'btn-primary' : 'btn-secondary'}" 
            style="width: 100%; justify-content: center;"
            onclick="handlePackageEnquiry('${currentService.name}', '${tier.name}', '${tier.price}')">
            <span>Request This Package</span>
            <i data-lucide="arrow-up-right" class="icon-inline"></i>
          </button>
        </div>
      </div>
    `;
  }).join('');

  if (window.lucide) lucide.createIcons();
}

/**
 * Toggle expandable accordion for tier details
 */
function toggleTierAccordion(id) {
  const content = document.getElementById(id);
  const toggleBtn = document.getElementById('toggle-' + id);
  if (!content || !toggleBtn) return;

  const isOpen = content.classList.toggle('open');
  toggleBtn.classList.toggle('active', isOpen);
  toggleBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');

  const chevron = toggleBtn.querySelector('.expand-chevron');
  if (chevron) {
    chevron.style.transform = isOpen ? 'rotate(180deg)' : 'rotate(0deg)';
  }
}

/**
 * --------------------------------------------------------------------------
 * 4. RENDER STANDALONE REFERENCE RATES & PROJECT RULES
 * --------------------------------------------------------------------------
 */
function renderReferenceRates() {
  const container = document.getElementById('reference-rates-container');
  if (!container || !pricingData || !pricingData.referenceRates) return;

  container.innerHTML = pricingData.referenceRates.map((cat, idx) => {
    return `
      <div class="reference-category-card">
        <h4 class="reference-cat-title"><i data-lucide="tag" class="icon-inline"></i> ${cat.category}</h4>
        <div class="reference-items-table">
          ${cat.items.map(item => `
            <div class="reference-item-row">
              <span class="ref-item-name">${item.service}</span>
              <span class="ref-item-price">${item.price}</span>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }).join('');
}

function renderProjectRules() {
  const rulesContainer = document.getElementById('project-rules-container');
  const termsContainer = document.getElementById('general-terms-container');
  if (!rulesContainer || !pricingData) return;

  if (pricingData.projectRules) {
    rulesContainer.innerHTML = pricingData.projectRules.map(r => `
      <div class="rule-card">
        <div class="rule-item-name">${r.item}</div>
        <div class="rule-item-spec">${r.rule}</div>
      </div>
    `).join('');
  }

  if (termsContainer && pricingData.generalTerms) {
    termsContainer.innerHTML = pricingData.generalTerms.map(t => `
      <li class="term-list-item">
        <i data-lucide="shield-check" class="icon-inline" style="color:var(--clr-coral-red); flex-shrink:0;"></i>
        <span>${t}</span>
      </li>
    `).join('');
  }
}

/**
 * --------------------------------------------------------------------------
 * 5. CONTACT & EMAIL ENQUIRY WITH GRACEFUL CLIPBOARD FALLBACK
 * --------------------------------------------------------------------------
 */
function handlePackageEnquiry(serviceName, packageName, price) {
  const recipient = pricingData.contactEmail || "sparklingrhythm74@gmail.com";
  
  // Format Subject & Body cleanly
  let subject = "";
  if (serviceName === "Complete Branding Packages") {
    subject = `Enquiry about ${packageName}`;
  } else if (serviceName === "Custom Project") {
    subject = "Custom Design Project Enquiry";
  } else {
    subject = `Enquiry about ${serviceName} — ${packageName}`;
  }

  const body = 
`Hello,

I’m interested in the following design service:

Service: ${serviceName}
Package: ${packageName}
Listed price: ${price}

Project details:
[Please describe your requirements, goals, and any relevant deadlines.]

Thank you.`;

  const mailtoUrl = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  // Formulate full text for clipboard
  const fullTextToCopy = `To: ${recipient}
Subject: ${subject}

${body}`;

  // Copy to clipboard with graceful feedback
  copyEnquiryToClipboard(fullTextToCopy, mailtoUrl, subject, body, recipient);
}

/**
 * Copies text and attempts mailto launch, falling back to modal if necessary
 */
function copyEnquiryToClipboard(fullText, mailtoUrl, subject, body, recipient) {
  const tryOpenMailApp = () => {
    // Attempt opening mailto link
    setTimeout(() => {
      try {
        window.location.href = mailtoUrl;
      } catch (e) {
        console.warn('Could not launch mailto protocol directly:', e);
      }
    }, 300);
  };

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(fullText).then(() => {
      if (typeof showToastPopup === 'function') {
        showToastPopup("Enquiry details copied to clipboard! Opening your email app...");
      }
      tryOpenMailApp();
    }).catch(() => {
      fallbackTextCopy(fullText, tryOpenMailApp, subject, body, recipient);
    });
  } else {
    fallbackTextCopy(fullText, tryOpenMailApp, subject, body, recipient);
  }
}

function fallbackTextCopy(fullText, onSuccess, subject, body, recipient) {
  let copied = false;
  try {
    const textArea = document.createElement("textarea");
    textArea.value = fullText;
    textArea.style.position = "fixed";
    textArea.style.opacity = "0";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    copied = document.execCommand('copy');
    document.body.removeChild(textArea);
  } catch (err) {
    copied = false;
  }

  if (copied) {
    if (typeof showToastPopup === 'function') {
      showToastPopup("Enquiry details copied to clipboard! Opening your email app...");
    }
    if (onSuccess) onSuccess();
  } else {
    // Present the accessible manual fallback modal
    openEnquiryModal(subject, body, recipient);
  }
}

/**
 * --------------------------------------------------------------------------
 * 6. ACCESSIBLE ENQUIRY FALLBACK MODAL
 * --------------------------------------------------------------------------
 */
function openEnquiryModal(subject, body, recipient) {
  const modal = document.getElementById('enquiry-fallback-modal');
  if (!modal) return;

  const subjectEl = document.getElementById('modal-enquiry-subject');
  const bodyEl = document.getElementById('modal-enquiry-body');
  const recipientEl = document.getElementById('modal-enquiry-recipient');
  const directMailtoBtn = document.getElementById('modal-direct-mailto-btn');

  if (subjectEl) subjectEl.textContent = subject;
  if (bodyEl) bodyEl.value = body;
  if (recipientEl) recipientEl.textContent = recipient;
  if (directMailtoBtn) {
    directMailtoBtn.href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  modal.classList.add('show');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeEnquiryModal() {
  const modal = document.getElementById('enquiry-fallback-modal');
  if (!modal) return;

  modal.classList.remove('show');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function copyModalEnquiryText() {
  const bodyEl = document.getElementById('modal-enquiry-body');
  const recipientEl = document.getElementById('modal-enquiry-recipient');
  const subjectEl = document.getElementById('modal-enquiry-subject');
  if (!bodyEl) return;

  const fullText = `To: ${recipientEl ? recipientEl.textContent : ''}\nSubject: ${subjectEl ? subjectEl.textContent : ''}\n\n${bodyEl.value}`;

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(fullText).then(() => {
      if (typeof showToastPopup === 'function') {
        showToastPopup("Enquiry text copied to clipboard!");
      }
    });
  } else {
    bodyEl.focus();
    bodyEl.select();
    document.execCommand('copy');
    if (typeof showToastPopup === 'function') {
      showToastPopup("Enquiry text copied to clipboard!");
    }
  }
}

function initModalListeners() {
  const modal = document.getElementById('enquiry-fallback-modal');
  if (!modal) return;

  // Close on backdrop click
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeEnquiryModal();
    }
  });

  // Close on Esc key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('show')) {
      closeEnquiryModal();
    }
  });
}
