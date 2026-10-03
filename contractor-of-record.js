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

/* ---- Compliance Scan Dashboard Slideshow ---- */
const slides = [
  {
    flag: '🇬🇧',
    cycle: 'Compliance scan',
    badgeText: 'SAFE',
    badgeClass: 'paid',
    name: 'Liam Harris',
    avatar: 'https://i.pravatar.cc/60?img=12',
    amount: 'Liam Harris · Eng',
    currency: 'UK',
    steps: [
      { label: 'Relationship check', date: 'Compliant', done: true },
      { label: 'Agreement audit', date: 'Verified', done: true },
      { label: 'IP Guard protection', date: 'Uncapped', done: true }
    ]
  },
  {
    flag: '🇺🇸',
    cycle: 'Compliance scan',
    badgeText: 'SAFE',
    badgeClass: 'paid',
    name: 'Sarah Jenkins',
    avatar: 'https://i.pravatar.cc/60?img=32',
    amount: 'Sarah Jenkins · Mkt',
    currency: 'USA',
    steps: [
      { label: 'Schedule dependency check', date: 'Clear', done: true },
      { label: 'Multi-client billing audit', date: 'Verified', done: true },
      { label: 'Contract check', date: 'Escrow Active', done: true }
    ]
  },
  {
    flag: '🇨🇦',
    cycle: 'Compliance scan',
    badgeText: 'SCANNING',
    badgeClass: 'needs',
    name: 'Alex Tremblay',
    avatar: 'https://i.pravatar.cc/60?img=5',
    amount: 'Alex Tremblay · Copy',
    currency: 'CAN',
    steps: [
      { label: 'Relationship check', date: 'Compliant', done: true },
      { label: 'Agreement audit', date: 'Verifying', done: false },
      { label: 'IP Guard protection', date: 'Pending', done: false }
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
      badgeEl.style.background = '#e0f2fe';
      badgeEl.style.color = '#0369a1';
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
  if (currencyEl) currencyEl.textContent = ''; // empty currency block since name includes it

  if (timelineEl) {
    timelineEl.innerHTML = '';
    slide.steps.forEach(step => {
      const stepDiv = document.createElement('div');
      stepDiv.className = 'pay-step' + (step.done ? ' done' : '');
      
      const checkSpan = document.createElement('span');
      checkSpan.className = 'pay-check';
      checkSpan.style.background = step.done ? '#2563eb' : 'rgba(255,255,255,0.1)';
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
  dropup.style.background = 'rgba(10, 22, 40, 0.98)';
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

/* ---- Interactive Currency Selector for COR pricing card ---- */
const rates = { USD: 1, EUR: 0.92, GBP: 0.79, CAD: 1.36, AUD: 1.53, SGD: 1.34, JPY: 149 };
const symbols = { USD: '$', EUR: '€', GBP: '£', CAD: 'CA$', AUD: 'A$', SGD: 'S$', JPY: '¥' };
const corBasePrice = 325;

const currencySelectEl = document.getElementById('corCurrencySelect');
const priceNumEl = document.querySelector('.gp-price-num');

if (currencySelectEl && priceNumEl) {
  currencySelectEl.addEventListener('change', function () {
    const cur = this.value;
    const rate = rates[cur] || 1;
    const sym = symbols[cur] || '$';
    
    const converted = Math.round(corBasePrice * rate);
    priceNumEl.textContent = 'From ' + sym + converted.toLocaleString();
  });
}

/* ---- Mockpay tab & dynamic text switcher with sticky scroll driver ---- */
const mockpayData = {
  1: {
    tag: 'AI-powered',
    title: 'Continuous compliance via real-time audits',
    desc: 'Our algorithms constantly review contractor engagement parameters (hours, invoices, tool accesses) to ensure workers meet local criteria.',
    items: [
      'Automatic behavioral flag notifications',
      'Compliance scoring updated dynamically',
      'Automatic classification questionnaires for workers'
    ]
  },
  2: {
    tag: 'Indemnity Shield',
    title: 'Uncapped legal and financial protection',
    desc: 'Unlike competitors that cap indemnity coverage, EmployeeOS COR assumes 100% legal representation and covers all financial liability in classification disputes.',
    items: [
      'Zero liability contract structure for your company',
      'Uncapped financial coverage in tax & labor audits',
      'Local legal team defense in regional jurisdictions',
      'Instant migration path for existing contractor pools'
    ]
  },
  3: {
    tag: 'IP Protection',
    title: 'Secure your intellectual property with IP Guard',
    desc: 'Many global contract models fail to transfer intellectual property cleanly under local laws. EmployeeOS IP Guard standardizes IP transfers to ensure 100% code and IP ownership.',
    items: [
      'Local-law compliant IP transfer clauses',
      'Automatic copyright assignment upon payment',
      'Multi-jurisdictional patent & trademark protection',
      'Backed by uncapped classification indemnity'
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
        listEl.innerHTML = data.items.map(item => `<li><span class="gp-check" style="background: #2563eb; color: #ffffff;">✓</span> ${item}</li>`).join('');
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


