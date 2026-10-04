'use strict';

document.addEventListener('DOMContentLoaded', () => {
  initPricingCalculator();
  initFaqAccordion();
  initFeatureTableSearch();
});

/* ── Pricing Configuration Data ─────────────────────── */
const currencyData = {
  INR: {
    symbol: '₹',
    flag: '🇮🇳',
    essentialBase: 2495,
    essentialAdd: 45,
    growthBase: 4495,
    growthAdd: 85,
    addons: {
      pms: '₹35–₹45',
      timesheets: '₹35',
      expense: '₹35',
      gps: '₹140',
      recruit: '₹2,500',
      alumni: '₹20'
    }
  },
  USD: {
    symbol: '$',
    flag: '🇺🇸',
    essentialBase: 29,
    essentialAdd: 0.55,
    growthBase: 55,
    growthAdd: 1.00,
    addons: {
      pms: '$0.45–$0.55',
      timesheets: '$0.45',
      expense: '$0.45',
      gps: '$1.70',
      recruit: '$30',
      alumni: '$0.25'
    }
  },
  EUR: {
    symbol: '€',
    flag: '🇪🇺',
    essentialBase: 27,
    essentialAdd: 0.50,
    growthBase: 50,
    growthAdd: 0.90,
    addons: {
      pms: '€0.40–€0.50',
      timesheets: '€0.40',
      expense: '€0.40',
      gps: '€1.55',
      recruit: '€28',
      alumni: '€0.22'
    }
  },
  GBP: {
    symbol: '£',
    flag: '🇬🇧',
    essentialBase: 23,
    essentialAdd: 0.42,
    growthBase: 42,
    growthAdd: 0.78,
    addons: {
      pms: '£0.35–£0.45',
      timesheets: '£0.35',
      expense: '£0.35',
      gps: '£1.35',
      recruit: '£24',
      alumni: '£0.20'
    }
  }
};

let currentCurrency = 'INR';
let currentEmpCount = 50;

function initPricingCalculator() {
  const slider = document.getElementById('employeeRange');
  const currencySelect = document.getElementById('currencySelect');

  if (slider) {
    slider.addEventListener('input', (e) => {
      setEmployeeCount(parseInt(e.target.value, 10));
    });
  }

  if (currencySelect) {
    currencySelect.addEventListener('change', (e) => {
      currentCurrency = e.target.value;
      const data = currencyData[currentCurrency] || currencyData.INR;
      document.getElementById('currencyFlag').textContent = data.flag;
      updateCalculatedPrices();
    });
  }

  updateCalculatedPrices();
}

window.setEmployeeCount = function(count) {
  currentEmpCount = count;
  const slider = document.getElementById('employeeRange');
  if (slider) slider.value = count;

  // Highlight active tick button
  document.querySelectorAll('.pr-tick-btn').forEach(btn => {
    const btnVal = parseInt(btn.textContent.replace(/[^0-9]/g, ''), 10);
    if (btnVal === count || (btnVal === 3000 && count >= 3000)) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  const countDisplay = document.getElementById('empCountDisplay');
  if (countDisplay) {
    countDisplay.textContent = count >= 3000 ? '3,000+' : count.toLocaleString();
  }

  updateCalculatedPrices();
};

function updateCalculatedPrices() {
  const data = currencyData[currentCurrency] || currencyData.INR;
  const sym = data.symbol;

  // Extra employees above 50
  const extraEmp = Math.max(0, currentEmpCount - 50);

  // Essential calculation
  const totalEssential = Math.round(data.essentialBase + (extraEmp * data.essentialAdd));
  const elPriceEssential = document.getElementById('priceEssential');
  const elBaseEssential = document.getElementById('baseEssential');
  const elAddEssential = document.getElementById('addEssential');
  const tblAddEssential = document.getElementById('tblAddEssential');

  if (elPriceEssential) elPriceEssential.textContent = `${sym}${totalEssential.toLocaleString()}`;
  if (elBaseEssential) elBaseEssential.textContent = `${sym}${data.essentialBase.toLocaleString()}`;
  if (elAddEssential) elAddEssential.textContent = `${sym}${data.essentialAdd}/emp`;
  if (tblAddEssential) tblAddEssential.textContent = `${sym}${data.essentialAdd} / month`;

  // Growth calculation
  const totalGrowth = Math.round(data.growthBase + (extraEmp * data.growthAdd));
  const elPriceGrowth = document.getElementById('priceGrowth');
  const elBaseGrowth = document.getElementById('baseGrowth');
  const elAddGrowth = document.getElementById('addGrowth');
  const tblAddGrowth = document.getElementById('tblAddGrowth');

  if (elPriceGrowth) elPriceGrowth.textContent = `${sym}${totalGrowth.toLocaleString()}`;
  if (elBaseGrowth) elBaseGrowth.textContent = `${sym}${data.growthBase.toLocaleString()}`;
  if (elAddGrowth) elAddGrowth.textContent = `${sym}${data.growthAdd}/emp`;
  if (tblAddGrowth) tblAddGrowth.textContent = `${sym}${data.growthAdd} / month`;

  // Update add-ons pricing
  const addons = data.addons;
  if (addons) {
    const elPms = document.getElementById('costAddonPms');
    const elTs = document.getElementById('costAddonTimesheets');
    const elExp = document.getElementById('costAddonExpense');
    const elGps = document.getElementById('costAddonGps');
    const elRec = document.getElementById('costAddonRecruit');
    const elAlum = document.getElementById('costAddonAlumni');

    if (elPms) elPms.textContent = addons.pms;
    if (elTs) elTs.textContent = addons.timesheets;
    if (elExp) elExp.textContent = addons.expense;
    if (elGps) elGps.textContent = addons.gps;
    if (elRec) elRec.textContent = addons.recruit;
    if (elAlum) elAlum.textContent = addons.alumni;
  }
}

/* ── FAQ Accordion ──────────────────────────────────── */
function initFaqAccordion() {
  document.querySelectorAll('.faq-item').forEach(item => {
    const btn = item.querySelector('.faq-q');
    if (!btn) return;

    btn.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');

      // Close all
      document.querySelectorAll('.faq-item.open').forEach(el => {
        el.classList.remove('open');
        el.querySelector('.faq-q')?.setAttribute('aria-expanded', 'false');
        const ch = el.querySelector('.faq-chevron');
        if (ch) ch.innerHTML = '&#8964;';
      });

      if (!isOpen) {
        item.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
        const ch = item.querySelector('.faq-chevron');
        if (ch) ch.innerHTML = '&#8963;';
      }
    });
  });
}

/* ── Feature Search Filter ──────────────────────────── */
function initFeatureTableSearch() {
  const searchInput = document.getElementById('featureSearchInput');
  if (!searchInput) return;

  searchInput.addEventListener('input', function() {
    const filter = this.value.toLowerCase().trim();
    const rows = document.querySelectorAll('#featureTable tbody tr');

    rows.forEach(row => {
      if (row.classList.contains('tr-cat-header')) return;
      const text = row.textContent.toLowerCase();
      if (filter === '' || text.includes(filter)) {
        row.style.display = '';
      } else {
        row.style.display = 'none';
      }
    });
  });
}

/* ── ROI Calculator Modal ───────────────────────────── */
window.toggleRoiModal = function() {
  const modal = document.getElementById('roiModalBackdrop');
  if (!modal) return;
  const isActive = modal.classList.contains('active');
  if (isActive) {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
  } else {
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    calculateRoi();
  }
};

window.calculateRoi = function() {
  const empInput = document.getElementById('roiEmpCount');
  if (!empInput) return;
  const count = parseInt(empInput.value, 10) || 50;

  // Calculation heuristic: ~2.4 hrs per employee saved per month
  const hoursSaved = Math.round(count * 2.4);

  // Financial savings in local currency estimate
  const data = currencyData[currentCurrency] || currencyData.INR;
  const sym = data.symbol;
  const costSaved = Math.round(count * 840 * (currentCurrency === 'INR' ? 1 : 0.012));

  const elHours = document.getElementById('roiHoursSaved');
  const elCost = document.getElementById('roiCostSaved');

  if (elHours) elHours.textContent = `${hoursSaved.toLocaleString()} hrs`;
  if (elCost) elCost.textContent = `${sym}${costSaved.toLocaleString()}`;
};

/* ── Product Demo Tour (Scroll-Spy) ─────────────────── */
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

  const track = document.getElementById('mockpayTrack');
  if (track) track.style.transform = `translateX(-${(step - 1) * 100}%)`;

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
        listEl.innerHTML = data.items.map(item => `<li><span class="gp-check">\u2713</span> ${item}</li>`).join('');
      }

      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }, 150);
  }
}

window.switchMockpay = function(num, btn) {
  updateMockpayStep(num);
};

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
