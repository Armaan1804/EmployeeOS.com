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

/* ---- Currency conversion selector for US PEO pricing ---- */
const peoRates = {
  USD: { symbol: '$', rate: 1, text: 'per employee' },
  EUR: { symbol: '€', rate: 0.92, text: 'per employee' },
  GBP: { symbol: '£', rate: 0.79, text: 'per employee' },
  CAD: { symbol: 'CA$', rate: 1.35, text: 'per employee' },
  AUD: { symbol: 'A$', rate: 1.52, text: 'per employee' },
  SGD: { symbol: 'S$', rate: 1.34, text: 'per employee' },
  JPY: { symbol: '¥', rate: 155, text: 'per employee' }
};

const peoCurrencySel = document.getElementById('peoCurrencySelect');
const peoPriceNum = document.querySelector('.gp-price-num');

if (peoCurrencySel && peoPriceNum) {
  peoCurrencySel.addEventListener('change', (e) => {
    const code = e.target.value;
    const data = peoRates[code] || peoRates.USD;
    const basePrice = 99;
    
    if (code === 'JPY') {
      const converted = Math.round(basePrice * data.rate);
      peoPriceNum.textContent = `From ${data.symbol}${converted.toLocaleString()}`;
    } else {
      const converted = Math.round(basePrice * data.rate);
      peoPriceNum.textContent = `From ${data.symbol}${converted}`;
    }
  });
}

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
    title: '50-State co-employment and U.S. tax engine',
    desc: 'Manage U.S. payroll, SUTA registrations, local tax withholdings, and employee benefits in all 50 states with ease.',
    items: [
      'Automatic state unemployment tax (SUTA) management',
      'Quarterly & annual IRS and local tax filings',
      'Unified multi-state payroll disbursement',
      'Direct integration with major U.S. payroll rails'
    ]
  },
  3: {
    tag: 'Your Team',
    title: 'Large-group benefits & certified HR support',
    desc: 'Provide world-class healthcare benefits and access certified HR professionals for complete co-employment peace of mind.',
    items: [
      'Aetna, BCBS, and Kaiser large-group health plans',
      'Automated 401(k) and retirement plan administration',
      'Dedicated certified HR compliance advisors',
      'State-by-state labor law monitoring & alerts'
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
        listEl.innerHTML = data.items.map(item => `<li><span class="gp-check" style="background: #16a34a; color: #ffffff;">✓</span> ${item}</li>`).join('');
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

