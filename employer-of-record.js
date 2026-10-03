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

/* ---- Onboarding Slideshow ---- */
const slides = [
  {
    flag: '🇩🇪',
    cycle: 'Onboarding',
    badgeText: 'PROCESSING',
    badgeClass: 'needs',
    name: 'Fernando Mars',
    avatar: 'https://i.pravatar.cc/60?img=51',
    amount: '€5,400.00',
    currency: 'EUR',
    steps: [
      { label: 'Details submitted', date: 'Aug 1', done: true },
      { label: 'Contract generated', date: 'Aug 2', done: true },
      { label: 'Contract signing', date: 'Pending', done: false },
      { label: 'Compliance verification', date: 'Pending', done: false }
    ]
  },
  {
    flag: '🇯🇵',
    cycle: 'Onboarding',
    badgeText: 'PROCESSING',
    badgeClass: 'needs',
    name: 'Naoko Nakata',
    avatar: 'https://i.pravatar.cc/60?img=21',
    amount: '¥620,000',
    currency: 'JPY',
    steps: [
      { label: 'Details submitted', date: 'Jul 28', done: true },
      { label: 'Contract generated', date: 'Jul 29', done: true },
      { label: 'Contract signed', date: 'Jul 30', done: true },
      { label: 'Compliance verification', date: 'Pending', done: false }
    ]
  },
  {
    flag: '🇧🇷',
    cycle: 'Onboarding',
    badgeText: 'COMPLETED',
    badgeClass: 'paid',
    name: 'Ana Silva',
    avatar: 'https://i.pravatar.cc/60?img=47',
    amount: 'R$ 9,100.00',
    currency: 'BRL',
    steps: [
      { label: 'Details submitted', date: 'Jul 15', done: true },
      { label: 'Contract signed', date: 'Jul 17', done: true },
      { label: 'Compliance verified', date: 'Jul 19', done: true },
      { label: 'Onboarded & active', date: 'Jul 20', done: true }
    ]
  },
  {
    flag: '🇺🇸',
    cycle: 'Onboarding',
    badgeText: 'PROCESSING',
    badgeClass: 'needs',
    name: 'Julia Thompson',
    avatar: 'https://i.pravatar.cc/60?img=49',
    amount: '$7,500.00',
    currency: 'USD',
    steps: [
      { label: 'Details submitted', date: 'Aug 2', done: true },
      { label: 'Contract generated', date: 'Pending', done: false },
      { label: 'Contract signed', date: 'Pending', done: false },
      { label: 'Compliance verification', date: 'Pending', done: false }
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
      badgeEl.style.background = '#dcfce7';
      badgeEl.style.color = '#15803d';
    } else {
      badgeEl.style.background = '#fdf2f8';
      badgeEl.style.color = '#be185d';
    }
  }

  if (avatarEl) {
    avatarEl.src = slide.avatar;
    avatarEl.alt = slide.name;
  }
  if (nameEl) {
    nameEl.textContent = slide.name;
    nameEl.style.color = '#111827';
  }
  if (amountEl) {
    amountEl.textContent = slide.amount;
    amountEl.style.color = '#111827';
  }
  if (currencyEl) {
    currencyEl.textContent = slide.currency;
    currencyEl.style.color = '#4b5563';
  }

  if (timelineEl) {
    timelineEl.innerHTML = '';
    slide.steps.forEach(step => {
      const stepDiv = document.createElement('div');
      stepDiv.className = 'pay-step' + (step.done ? ' done' : '');
      stepDiv.style.background = step.done ? '#f3f4f6' : '#f9fafb';
      stepDiv.style.borderColor = '#e5e7eb';
      
      const checkSpan = document.createElement('span');
      checkSpan.className = 'pay-check';
      checkSpan.style.background = step.done ? '#be185d' : '#e5e7eb';
      checkSpan.style.color = step.done ? 'white' : '#6b7280';
      checkSpan.innerHTML = step.done ? '✓' : '…';
      
      const labelSpan = document.createElement('span');
      labelSpan.className = 'pay-step-label';
      labelSpan.textContent = step.label;
      labelSpan.style.color = '#111827';
      
      const dateSpan = document.createElement('span');
      dateSpan.className = 'pay-step-date';
      dateSpan.textContent = step.date;
      dateSpan.style.color = '#6b7280';
      
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
  dropup.style.background = 'rgba(30, 8, 14, 0.98)';
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

/* ---- Interactive Currency Selector for EOR pricing card ---- */
const rates = { USD: 1, EUR: 0.92, GBP: 0.79, CAD: 1.36, AUD: 1.53, SGD: 1.34, JPY: 149 };
const symbols = { USD: '$', EUR: '€', GBP: '£', CAD: 'CA$', AUD: 'A$', SGD: 'S$', JPY: '¥' };
const eorBasePrice = 699;

const currencySelectEl = document.getElementById('eorCurrencySelect');
const priceNumEl = document.querySelector('.gp-price-num');

if (currencySelectEl && priceNumEl) {
  currencySelectEl.addEventListener('change', function () {
    const cur = this.value;
    const rate = rates[cur] || 1;
    const sym = symbols[cur] || '$';
    
    const converted = Math.round(eorBasePrice * rate);
    priceNumEl.textContent = sym + converted.toLocaleString();
  });
}

/* ---- Mockpay tab & dynamic text switcher with sticky scroll driver ---- */
const mockpayData = {
  1: {
    tag: 'AI-powered',
    title: 'Compliant EOR operations powered by AI workflows',
    desc: 'We leverage intelligent models to localise contracts, process local payroll, evaluate state compliance, and administer benefits instantly.',
    items: [
      'Automatic contract adaptation matching local labor laws',
      'Smart tax withholding & contribution computations',
      'Local benefit mapping based on target employee jurisdiction'
    ]
  },
  2: {
    tag: 'Owned Entities',
    title: 'Your owned global employment infrastructure',
    desc: 'Because we operate our own legal entities in every market we serve, we do not rely on local brokers. This cuts your service costs, improves compliance reliability, and speeds up query response times.',
    items: [
      'Zero third-party intermediary markup or delay',
      'Dedicated local HR and compliance advisors',
      'Complete ownership over the worker experience'
    ]
  },
  3: {
    tag: 'Expertise',
    title: 'Supported by local labor experts',
    desc: 'Every region has localized labor legislation, tax brackets, and mandatory pension funds. Our in-house legal team ensures your contracts, taxes, and benefit schemes align perfectly with statutory expectations.',
    items: [
      '24/7 client EOR assistance',
      'Dedicated onboarding consultant per employee',
      'Proactive EOR policy alerts'
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
        listEl.innerHTML = data.items.map(item => `<li><span class="gp-check" style="color: #be185d;">✓</span> ${item}</li>`).join('');
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


