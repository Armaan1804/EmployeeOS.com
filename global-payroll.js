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

/* ---- Mockpay tab & dynamic text switcher with sticky scroll driver ---- */
const mockpayData = {
  1: {
    tag: 'AI-powered',
    title: 'Scalable payroll with AI-powered workflows and automatic payments',
    desc: 'EmployeeOS uses intelligent automation to run compliance checks, calculate deductions, and process salary payouts — all without manual intervention.',
    items: [
      'Automated compliance check across every jurisdiction',
      'Automatic tax calculation and deductions',
      'Direct salary payout in local currency',
      'Real-time payroll status and audit trail'
    ]
  },
  2: {
    tag: 'Infrastructure',
    title: 'Your international payroll processing hub',
    desc: 'One platform to run payroll across 100+ countries. EmployeeOS owns the legal entities — meaning faster onboarding, no third-party risk, and complete data ownership.',
    items: [
      'Owned legal entities in every country — no intermediaries',
      'Consolidated multi-country payroll runs',
      'Real-time compliance monitoring',
      'Integrated HR, benefits, and expense data'
    ]
  },
  3: {
    tag: 'Your team',
    title: 'Your in-house payroll partner',
    desc: 'Whether you have a robust payroll department or zero in-house expertise, EmployeeOS acts as your dedicated payroll specialist — handling the complexity so your team can focus on growth.',
    items: [
      'Dedicated payroll specialist per account',
      '24/7 support in local languages',
      'Proactive alerts for regulation changes',
      'Custom payroll workflows and approvals'
    ]
  }
};

let currentMockpayStep = 1;

function updateMockpayStep(step) {
  if (currentMockpayStep === step && document.getElementById('mockpayTrack')?.style.transform) return;
  currentMockpayStep = step;

  // 1. Slide image track sideways
  const track = document.getElementById('mockpayTrack');
  if (track) {
    track.style.transform = `translateX(-${(step - 1) * 100}%)`;
  }

  // 2. Highlight correct tab
  const btn = document.getElementById(`tab-btn-${step}`);
  if (btn) {
    document.querySelectorAll('.gp-demo-tab').forEach(t => t.classList.remove('active'));
    btn.classList.add('active');
  }

  // 3. Update text card content smoothly
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
        listEl.innerHTML = data.items.map(item => `<li><span class="gp-check">\u2713</span> ${item}</li>`).join('');
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

// Throttled Scroll driver for sticky section animation
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

/* ---- Compliance Section Pink Underline Observer ---- */
const compSection = document.getElementById('compliance');
if (compSection) {
  const compObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        compSection.classList.add('animate-pink-underline');
      }
    });
  }, {
    rootMargin: '0px 0px -15% 0px',
    threshold: 0.25
  });
  compObserver.observe(compSection);
}

/* ---- Consolidated Payroll Dashboard Slideshow ---- */
const slides = [
  {
    flag: '🇺🇸',
    cycle: 'Biweekly',
    badgeText: 'PAID OUT',
    badgeClass: 'paid',
    name: 'Julia Thompson',
    avatar: 'https://i.pravatar.cc/60?img=49',
    amount: '$6,200.00',
    currency: 'USD',
    steps: [
      { label: 'Pay run created', date: 'Sep 1', done: true },
      { label: 'Pay run approved', date: 'Sep 12', done: true },
      { label: 'Pay in received', date: 'Sep 24', done: true },
      { label: 'Paid out $6,200.00', date: 'Sep 24', done: true }
    ]
  },
  {
    flag: '🇩🇪',
    cycle: 'Monthly',
    badgeText: 'PAID OUT',
    badgeClass: 'paid',
    name: 'Fernando Mars',
    avatar: 'https://i.pravatar.cc/60?img=51',
    amount: '€4,870.00',
    currency: 'EUR',
    steps: [
      { label: 'Pay run created', date: 'Sep 1', done: true },
      { label: 'Pay run approved', date: 'Sep 10', done: true },
      { label: 'Pay in received', date: 'Sep 28', done: true },
      { label: 'Paid out €4,870.00', date: 'Sep 28', done: true }
    ]
  },
  {
    flag: '🇯🇵',
    cycle: 'Monthly',
    badgeText: 'PROCESSING',
    badgeClass: 'processing',
    name: 'Sakura Tanaka',
    avatar: 'sakura.png',
    amount: '¥620,000',
    currency: 'JPY',
    steps: [
      { label: 'Pay run created', date: 'Sep 1', done: true },
      { label: 'Pay run approved', date: 'Sep 15', done: true },
      { label: 'Processing payments', date: 'Sep 25', done: true },
      { label: 'Payout release', date: 'Sep 30', done: false }
    ]
  },
  {
    flag: '🇧🇷',
    cycle: '13th Salary',
    badgeText: 'NEEDS APPROVAL',
    badgeClass: 'needs',
    name: 'Ana Silva',
    avatar: 'https://i.pravatar.cc/60?img=47',
    amount: 'R$ 8,910.00',
    currency: 'BRL',
    steps: [
      { label: 'Pay run created', date: 'Nov 1', done: true },
      { label: 'Calculated accruals', date: 'Nov 10', done: true },
      { label: 'Compliance check passed', date: 'Nov 15', done: true },
      { label: 'Approve release', date: 'Nov 30', done: false }
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
    // Apply inline style fallbacks for custom badge aesthetics
    if (slide.badgeClass === 'paid') {
      badgeEl.style.background = '#dcfce7';
      badgeEl.style.color = '#15803d';
    } else if (slide.badgeClass === 'processing') {
      badgeEl.style.background = '#dbeafe';
      badgeEl.style.color = '#1d4ed8';
    } else {
      badgeEl.style.background = '#fce7f3';
      badgeEl.style.color = '#be185d';
    }
  }

  if (avatarEl) {
    avatarEl.src = slide.avatar;
    avatarEl.alt = slide.name;
  }
  if (nameEl) {
    nameEl.textContent = slide.name;
    nameEl.style.color = '#ffffff';
  }
  if (amountEl) {
    amountEl.textContent = slide.amount;
    amountEl.style.color = '#ffffff';
  }
  if (currencyEl) {
    currencyEl.textContent = slide.currency;
    currencyEl.style.color = 'rgba(255, 255, 255, 0.85)';
  }

  if (timelineEl) {
    timelineEl.innerHTML = '';
    slide.steps.forEach(step => {
      const stepDiv = document.createElement('div');
      stepDiv.className = 'pay-step' + (step.done ? ' done' : '');
      
      const checkSpan = document.createElement('span');
      checkSpan.className = 'pay-check';
      checkSpan.innerHTML = step.done ? '✓' : '…';
      if (!step.done) {
        checkSpan.style.background = 'rgba(255,255,255,0.1)';
        checkSpan.style.color = 'rgba(255,255,255,0.4)';
      }
      
      const labelSpan = document.createElement('span');
      labelSpan.className = 'pay-step-label';
      labelSpan.textContent = step.label;
      labelSpan.style.color = '#ffffff';
      
      const dateSpan = document.createElement('span');
      dateSpan.className = 'pay-step-date';
      dateSpan.textContent = step.date;
      dateSpan.style.color = 'rgba(255, 255, 255, 0.8)';
      
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

// Set up page selector dropdown popup
if (pageSelEl && dashboardEl) {
  // Wrap pageSelEl to position dropup list correctly
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
  dropup.style.background = 'rgba(30, 10, 20, 0.96)';
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

  // Re-build inner structure of pageSelEl
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

// Navigation arrows click logic
const navBtns = document.querySelectorAll('.pay-pagination .pay-nav');
if (navBtns.length >= 2) {
  // index 0 is prev, 1 is next
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

// Initialize slide
updateDashboard(0);

/* ---- Interactive Currency Selector for Global Payroll pricing card ---- */
const gpRates = { USD: 1, EUR: 0.92, GBP: 0.79, CAD: 1.36, AUD: 1.53, SGD: 1.34, JPY: 149 };
const gpSymbols = { USD: '$', EUR: '€', GBP: '£', CAD: 'CA$', AUD: 'A$', SGD: 'S$', JPY: '¥' };
const gpBasePrice = 29;

const currencySelectEl = document.getElementById('gpCurrencySelect');
const priceNumEl = document.querySelector('.gp-price-num');

if (currencySelectEl && priceNumEl) {
  currencySelectEl.addEventListener('change', function () {
    const cur = this.value;
    const rate = gpRates[cur] || 1;
    const sym = gpSymbols[cur] || '$';
    
    const converted = Math.round(gpBasePrice * rate);
    priceNumEl.textContent = sym + converted.toLocaleString();
  });
}

