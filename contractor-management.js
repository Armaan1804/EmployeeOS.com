'use strict';

/* ---- FAQ accordion ---- */
document.querySelectorAll('.gp-faq-q').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.gp-faq-item');
    if (!item) return;
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.gp-faq-item').forEach(i => {
      i.classList.remove('open');
      i.querySelector('.gp-faq-q')?.setAttribute('aria-expanded', 'false');
    });
    if (!isOpen) {
      item.classList.add('open');
      btn.setAttribute('aria-expanded', 'true');
    }
  });
});

/* ---- Contractor Milestones Slideshow ---- */
const slides = [
  {
    flag: '🇯🇵',
    cycle: 'Milestones',
    badgeText: 'PROCESSING',
    badgeClass: 'needs',
    name: 'Sakura Tanaka',
    avatar: 'sakura.png',
    amount: '¥620,000',
    currency: 'JPY',
    steps: [
      { label: 'Onboarding questionnaire', date: 'Sep 1', done: true },
      { label: 'Invoice generated', date: 'Sep 2', done: true },
      { label: 'Invoice approved', date: 'Sep 3', done: true },
      { label: 'Stripe Connect Payout', date: 'Processing', done: false }
    ]
  },
  {
    flag: '🇬🇧',
    cycle: 'Milestones',
    badgeText: 'PAID OUT',
    badgeClass: 'paid',
    name: 'Liam Harris',
    avatar: 'https://i.pravatar.cc/60?img=12',
    amount: '£3,100.00',
    currency: 'GBP',
    steps: [
      { label: 'Onboarding questionnaire', date: 'Aug 28', done: true },
      { label: 'Timesheet submitted', date: 'Aug 30', done: true },
      { label: 'Invoice approved', date: 'Sep 1', done: true },
      { label: 'Stripe Connect Payout', date: 'Sep 1', done: true }
    ]
  },
  {
    flag: '🇺🇸',
    cycle: 'Milestones',
    badgeText: 'SCHEDULED',
    badgeClass: 'paid',
    name: 'Sarah Jenkins',
    avatar: 'https://i.pravatar.cc/60?img=32',
    amount: '$4,500.00',
    currency: 'USD',
    steps: [
      { label: 'Onboarding questionnaire', date: 'Sep 5', done: true },
      { label: 'Invoice generated', date: 'Sep 10', done: true },
      { label: 'Invoice approved', date: 'Sep 12', done: true },
      { label: 'Payout scheduled', date: 'Sep 25', done: false }
    ]
  }
];

let currentSlideIndex = 0;

const dashboardEl = document.querySelector('.pay-dashboard');
const flagEl = dashboardEl?.querySelector('.pay-flag');
const cycleEl = dashboardEl?.querySelector('.pay-cycle');
const badgeEl = dashboardEl?.querySelector('.pay-badge');
const avatarEl = dashboardEl?.querySelector('.pay-emp-avatar');
const nameEl = dashboardEl?.querySelector('.pay-emp-name');
const amountEl = dashboardEl?.querySelector('.pay-amount');
const currencyEl = dashboardEl?.querySelector('.pay-currency');
const timelineEl = dashboardEl?.querySelector('.pay-timeline');
const pageSelEl = dashboardEl?.querySelector('.pay-page-sel');

function updateDashboard(index) {
  currentSlideIndex = index;
  const slide = slides[index];
  if (!slide) return;

  if (flagEl) flagEl.textContent = slide.flag;
  if (cycleEl) cycleEl.textContent = slide.cycle;
  
  if (badgeEl) {
    badgeEl.textContent = slide.badgeText;
    badgeEl.className = 'pay-badge ' + slide.badgeClass;
    if (slide.badgeClass === 'paid') {
      badgeEl.style.background = '#faf5ff';
      badgeEl.style.color = '#7c3aed';
    } else {
      badgeEl.style.background = '#fef3c7';
      badgeEl.style.color = '#d97706';
    }
  }

  if (avatarEl) {
    avatarEl.src = slide.avatar;
    avatarEl.alt = slide.name;
  }
  if (nameEl) nameEl.textContent = slide.name;
  if (amountEl) amountEl.textContent = slide.amount;
  if (currencyEl) currencyEl.textContent = slide.currency;

  if (timelineEl) {
    timelineEl.innerHTML = '';
    slide.steps.forEach(step => {
      const stepDiv = document.createElement('div');
      stepDiv.className = 'pay-step' + (step.done ? ' done' : '');
      
      const checkSpan = document.createElement('span');
      checkSpan.className = 'pay-check';
      checkSpan.style.background = step.done ? '#7c3aed' : 'rgba(255,255,255,0.1)';
      checkSpan.style.color = step.done ? 'white' : 'rgba(255,255,255,0.4)';
      checkSpan.innerHTML = step.done ? '✓' : '…';
      
      const labelSpan = document.createElement('span');
      labelSpan.className = 'pay-step-label';
      labelSpan.textContent = step.label;
      
      const dateSpan = document.createElement('span');
      dateSpan.className = 'pay-step-date';
      dateSpan.textContent = step.date;
      
      stepDiv.appendChild(checkSpan);
      stepDiv.appendChild(labelSpan);
      stepDiv.appendChild(dateSpan);
      timelineEl.appendChild(stepDiv);
    });
  }

  const textSpan = pageSelEl?.querySelector('.pay-page-text-span');
  if (textSpan) {
    textSpan.textContent = `${index + 1} of ${slides.length} ∨`;
  } else if (pageSelEl) {
    pageSelEl.textContent = `${index + 1} of ${slides.length} ∨`;
  }
}

if (pageSelEl && dashboardEl) {
  pageSelEl.style.position = 'relative';
  pageSelEl.style.cursor = 'pointer';

  const textSpan = document.createElement('span');
  textSpan.className = 'pay-page-text-span';
  textSpan.textContent = `1 of ${slides.length} ∨`;

  const dropup = document.createElement('ul');
  dropup.className = 'pay-page-dropup';
  dropup.style.position = 'absolute';
  dropup.style.bottom = '36px';
  dropup.style.left = '50%';
  dropup.style.transform = 'translateX(-50%)';
  dropup.style.background = 'rgba(22, 10, 30, 0.98)';
  dropup.style.border = '1px solid rgba(255, 255, 255, 0.15)';
  dropup.style.borderRadius = '8px';
  dropup.style.padding = '0.5rem 0';
  dropup.style.boxShadow = '0 10px 30px rgba(0,0,0,0.5)';
  dropup.style.zIndex = '1000';
  dropup.style.listStyle = 'none';
  dropup.style.margin = '0';
  dropup.style.minWidth = '160px';
  dropup.style.textAlign = 'left';
  dropup.style.display = 'none';

  slides.forEach((slide, idx) => {
    const li = document.createElement('li');
    li.style.padding = '0.4rem 1rem';
    li.style.fontSize = '0.8rem';
    li.style.color = 'rgba(255,255,255,0.85)';
    li.style.cursor = 'pointer';
    li.style.transition = 'background 0.2s';
    li.innerHTML = `<span style="margin-right:0.4rem">${slide.flag}</span> ${slide.name}`;
    
    li.addEventListener('mouseenter', () => li.style.background = 'rgba(255,255,255,0.1)');
    li.addEventListener('mouseleave', () => li.style.background = 'transparent');
    li.addEventListener('click', (e) => {
      e.stopPropagation();
      updateDashboard(idx);
      dropup.style.display = 'none';
    });
    dropup.appendChild(li);
  });

  pageSelEl.innerHTML = '';
  pageSelEl.appendChild(textSpan);
  pageSelEl.appendChild(dropup);

  pageSelEl.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = dropup.style.display === 'block';
    dropup.style.display = isOpen ? 'none' : 'block';
  });

  document.addEventListener('click', () => {
    dropup.style.display = 'none';
  });
}

const navBtns = document.querySelectorAll('.pay-pagination .pay-nav');
if (navBtns.length >= 2) {
  navBtns[0].addEventListener('click', (e) => {
    e.stopPropagation();
    let nextIdx = currentSlideIndex - 1;
    if (nextIdx < 0) nextIdx = slides.length - 1;
    updateDashboard(nextIdx);
  });

  navBtns[1].addEventListener('click', (e) => {
    e.stopPropagation();
    let nextIdx = (currentSlideIndex + 1) % slides.length;
    updateDashboard(nextIdx);
  });
}

updateDashboard(0);

/* ---- Interactive Currency Selector for CM pricing cards ---- */
const rates = { USD: 1, EUR: 0.92, GBP: 0.79, CAD: 1.36, AUD: 1.53, SGD: 1.34, JPY: 149 };
const symbols = { USD: '$', EUR: '€', GBP: '£', CAD: 'CA$', AUD: 'A$', SGD: 'S$', JPY: '¥' };
const cmBasePrice = 29;
const cmpBasePrice = 99;

const currencySelectEl = document.getElementById('cmCurrencySelect');
const cmPriceNumEl = document.querySelector('.cm-price-num');
const cmpPriceNumEl = document.querySelector('.cmp-price-num');

if (currencySelectEl) {
  currencySelectEl.addEventListener('change', function () {
    const cur = this.value;
    const rate = rates[cur] || 1;
    const sym = symbols[cur] || '$';
    
    if (cmPriceNumEl) {
      const convertedCm = Math.round(cmBasePrice * rate);
      cmPriceNumEl.textContent = sym + convertedCm.toLocaleString();
    }
    if (cmpPriceNumEl) {
      const convertedCmp = Math.round(cmpBasePrice * rate);
      cmpPriceNumEl.textContent = sym + convertedCmp.toLocaleString();
    }
  });
}

/* ---- Mockpay tab & dynamic text switcher with sticky scroll driver ---- */
const mockpayData = {
  1: {
    tag: 'AI-powered',
    title: 'Scalable contractor management with automated payouts',
    desc: 'EmployeeOS uses intelligent automation to process contractor invoices, verify compliance, and execute batch bank payouts across 120+ countries.',
    items: [
      'Automatic invoice collection & OCR data parsing',
      'One-click batch invoice approvals and payouts',
      'Direct local bank payouts via Stripe Connect',
      'Automated W-8BEN/W-9 collection & archiving'
    ]
  },
  2: {
    tag: 'Infrastructure',
    title: 'Your international contractor processing hub',
    desc: 'One platform to manage contractors across 120+ countries. Create localized contracts, verify tax documentation, and manage all your global freelancers effortlessly.',
    items: [
      'Localized contractor agreements in 100+ countries',
      'Consolidated multi-currency payouts',
      'Real-time compliance and misclassification monitoring',
      'Integrated invoicing, tax forms, and payment rules'
    ]
  },
  3: {
    tag: 'Compliance',
    title: 'Zero-risk contractor engagement',
    desc: 'Shield your organization from misclassification risks and regulatory penalties with built-in legal indemnity and AI contract auditing.',
    items: [
      'Automated worker classification audits',
      'Optional $100,000 legal indemnity shield',
      '24/7 legal support in regional languages',
      'Seamless transition from contractor to full-time EOR'
    ]
  }
};

let currentMockpayStep = 1;

function updateMockpayStep(step) {
  if (currentMockpayStep === step && document.getElementById('mockpayTrack')?.style.transform) return;
  currentMockpayStep = step;

  const track = document.getElementById('mockpayTrack');
  if (track) {
    track.style.transform = `translateX(-${(step - 1) * 100}%)`;
  }

  const btn = document.getElementById(`tab-btn-${step}`);
  if (btn) {
    document.querySelectorAll('.gp-demo-tab').forEach(t => t.classList.remove('active'));
    btn.classList.add('active');
  }

  const card = document.getElementById('mockpayTextCard');
  const data = mockpayData[step];

  if (card && data) {
    card.style.opacity = '0';
    card.style.transform = 'translateY(10px)';

    setTimeout(() => {
      const tagEl = document.getElementById('mockpayTag');
      if (tagEl) tagEl.textContent = data.tag;

      const titleEl = document.getElementById('mockpayTitle');
      if (titleEl) titleEl.textContent = data.title;

      const descEl = document.getElementById('mockpayDesc');
      if (descEl) descEl.textContent = data.desc;

      const listEl = document.getElementById('mockpayList');
      if (listEl) {
        listEl.innerHTML = data.items.map(item => `<li><span class="gp-check" style="color: #7c3aed;">\u2713</span> ${item}</li>`).join('');
      }

      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }, 150);
  }
}

function switchMockpay(num, btn) {
  updateMockpayStep(num);
}
window.switchMockpay = switchMockpay;

let isMockpayScrollTicking = false;

window.addEventListener('scroll', () => {
  if (isMockpayScrollTicking) return;
  isMockpayScrollTicking = true;

  requestAnimationFrame(() => {
    isMockpayScrollTicking = false;
    if (window.innerWidth <= 1024) return;

    const section = document.getElementById('demo-tour');
    if (!section) return;

    const rect = section.getBoundingClientRect();
    const totalScrollableDistance = section.offsetHeight - window.innerHeight;

    if (totalScrollableDistance <= 0) return;

    const progress = -rect.top / totalScrollableDistance;

    if (progress >= -0.2 && progress <= 1.2) {
      if (progress < 0.35) {
        updateMockpayStep(1);
      } else if (progress < 0.70) {
        updateMockpayStep(2);
      } else {
        updateMockpayStep(3);
      }
    }
  });
}, { passive: true });

