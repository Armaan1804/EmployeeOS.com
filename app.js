'use strict';

/* ---- Sticky nav shadow ---- */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 8);
}, { passive: true });

/* ---- Dropdown menus ---- */
document.querySelectorAll('.nav-item.has-dropdown').forEach(item => {
  const btn = item.querySelector('.nav-btn');
  if (!btn) return;
  btn.addEventListener('click', e => {
    e.stopPropagation();
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.nav-item.has-dropdown.open').forEach(el => {
      el.classList.remove('open');
      el.querySelector('.nav-btn')?.setAttribute('aria-expanded', 'false');
    });
    if (!isOpen) {
      item.classList.add('open');
      btn.setAttribute('aria-expanded', 'true');
    }
  });
});
document.addEventListener('click', () => {
  document.querySelectorAll('.nav-item.has-dropdown.open').forEach(el => {
    el.classList.remove('open');
    el.querySelector('.nav-btn')?.setAttribute('aria-expanded', 'false');
  });
});
document.addEventListener('keydown', e => {
  if (e.key !== 'Escape') return;
  document.querySelectorAll('.nav-item.has-dropdown.open').forEach(el => {
    el.classList.remove('open');
  });
});

/* ---- Mobile nav ---- */
const mobileToggle = document.querySelector('.nav-mobile-toggle');
if (mobileToggle) {
  mobileToggle.addEventListener('click', () => {
    const open = document.body.classList.toggle('nav-open');
    mobileToggle.setAttribute('aria-expanded', String(open));
    mobileToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  });
}

/* ---- Dynamic "How We Do It" Product Mockup Cards ---- */
const hwiMockupData = [
  // 0: Employer of Record (EOR)
  {
    image: 'sakura.png',
    badge: 'EOR EMPLOYEE',
    name: 'Sakura Tanaka',
    status: 'EMPLOYEE OF RECORD',
    location: 'Tokyo, Japan &nbsp;•&nbsp; UTC +9:00',
    title: 'Active Actions',
    actionText: 'View details',
    tasks: [
      {
        icon: '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="2"><path d="M20 12V22H4V12"/><path d="M22 7H2v5h20V7z"/><path d="M12 22V7"/></svg>',
        text: 'Local statutory health & pension enrolled',
        tagText: 'Compliant',
        tagClass: 'overdue',
        tagStyle: 'background:#dcfce7;color:#15803d;'
      },
      {
        icon: '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>',
        text: 'Bilingual Japanese labor contract signed',
        tagText: 'Complete',
        tagClass: 'soon',
        tagStyle: ''
      }
    ]
  },
  // 1: Global Payroll
  {
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
    badge: 'PAYROLL ACTIVE',
    name: 'Marta Weber',
    status: 'PAYROLL RUN · GERMANY',
    location: 'Munich, Germany &nbsp;•&nbsp; EUR (€)',
    title: 'Cycle Breakdown',
    actionText: 'Run payroll',
    tasks: [
      {
        icon: '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#16a34a" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>',
        text: 'Monthly gross pay: €6,450.00 (Tax withheld: €1,890.00)',
        tagText: 'Processed',
        tagClass: 'overdue',
        tagStyle: 'background:#dcfce7;color:#15803d;'
      },
      {
        icon: '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>',
        text: 'Direct SEPA deposit scheduled for 28th',
        tagText: 'In 2 days',
        tagClass: 'soon',
        tagStyle: ''
      }
    ]
  },
  // 2: Contractor of Record (COR)
  {
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
    badge: 'COR PROTECTED',
    name: 'Lucas Rossi',
    status: 'INDEMNIFIED CONTRACTOR',
    location: 'São Paulo, Brazil &nbsp;•&nbsp; BRL (R$)',
    title: 'Compliance & Audit',
    actionText: 'Verify risk',
    tasks: [
      {
        icon: '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
        text: '100% Misclassification liability coverage active',
        tagText: 'Shielded',
        tagClass: 'overdue',
        tagStyle: 'background:#eff6ff;color:#1d4ed8;'
      },
      {
        icon: '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>',
        text: 'Brazilian tax residency & W-8BEN-E verified',
        tagText: 'Valid',
        tagClass: 'soon',
        tagStyle: 'background:#f1f5f9;color:#334155;'
      }
    ]
  },
  // 3: Contractor Management
  {
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80',
    badge: 'CONTRACTOR',
    name: 'Amara Vance',
    status: 'FREELANCE DESIGNER',
    location: 'London, UK &nbsp;•&nbsp; GBP (£)',
    title: 'Invoices & Milestones',
    actionText: 'Approve all',
    tasks: [
      {
        icon: '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#be185d" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><line x1="6" y1="12" x2="18" y2="12"/></svg>',
        text: 'Design Sprint Milestone 3 — £3,200.00 pending review',
        tagText: 'Pending',
        tagClass: 'overdue',
        tagStyle: 'background:#fef2f2;color:#b91c1c;'
      },
      {
        icon: '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>',
        text: 'Auto-invoice generated with automated IP assignment',
        tagText: 'Protected',
        tagClass: 'soon',
        tagStyle: ''
      }
    ]
  }
];

function updateHwiMockup(index) {
  const card = document.getElementById('hwi-dynamic-card');
  if (!card) return;
  const data = hwiMockupData[index];
  if (!data) return;

  // Fade out
  card.classList.add('card-fade-out');

  setTimeout(() => {
    const taskRowsHtml = data.tasks.map(t => `
      <div class="fc-task-row">
        <span class="fc-task-ico">${t.icon}</span>
        <span class="fc-task-text">${t.text}</span>
        <span class="fc-task-tag ${t.tagClass}" style="${t.tagStyle || ''}">${t.tagText}</span>
        <svg class="fc-row-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#d1d5db" stroke-width="2">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </div>
    `).join('');

    card.innerHTML = `
      <div class="fc-header-strip">
        <img src="${data.image}" alt="${data.name}" class="fc-hero-img" />
        <div class="fc-header-info">
          <span class="fc-badge-pill">${data.badge}</span>
          <span class="fc-dots">···</span>
        </div>
        <div class="fc-name-block">
          <h3 class="fc-name">${data.name}</h3>
          <span class="fc-status-label">${data.status}</span>
          <p class="fc-location">${data.location}</p>
        </div>
      </div>
      <div class="fc-tasks-panel">
        <div class="fc-tasks-header">
          <span class="fc-tasks-title">${data.title}</span>
          <div class="fc-tasks-actions">
            <span class="fc-show-all">${data.actionText}</span>
            <button class="fc-add">+</button>
          </div>
        </div>
        ${taskRowsHtml}
      </div>
    `;

    card.classList.remove('card-fade-out');
    card.classList.add('card-fade-in');
    setTimeout(() => {
      card.classList.remove('card-fade-in');
    }, 400);
  }, 200);
}

/* ---- Accordion ---- */
document.querySelectorAll('.acc-item').forEach(item => {
  const btn = item.querySelector('.acc-header');
  if (!btn) return;
  btn.addEventListener('click', () => {
    const isOpen = item.classList.contains('open');
    const idx = parseInt(item.getAttribute('data-index') || '0', 10);
    // close all
    document.querySelectorAll('.acc-item.open').forEach(el => {
      el.classList.remove('open');
      el.querySelector('.acc-header')?.setAttribute('aria-expanded', 'false');
    });
    if (!isOpen) {
      item.classList.add('open');
      btn.setAttribute('aria-expanded', 'true');
      updateHwiMockup(idx);
    }
  });
});

/* ---- Smooth scroll ---- */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    document.body.classList.remove('nav-open');
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});



/* ---- Home page FAQ accordion ---- */
document.querySelectorAll('.hfaq-item').forEach(item => {
  const btn = item.querySelector('.hfaq-q');
  if (!btn) return;
  btn.addEventListener('click', () => {
    const isOpen = item.classList.contains('open');
    // close all siblings
    item.closest('.home-faq-list')?.querySelectorAll('.hfaq-item.open').forEach(el => {
      el.classList.remove('open');
      el.querySelector('.hfaq-q')?.setAttribute('aria-expanded', 'false');
    });
    if (!isOpen) {
      item.classList.add('open');
      btn.setAttribute('aria-expanded', 'true');
    }
  });
});

/* ---- Stat Cards Scroll Entrance & 0 to 100 Counter Animation ---- */
function initStatCounterAnimation() {
  const statCards = document.querySelectorAll('.gp-stat-card');
  const statValues = document.querySelectorAll('.gp-stat-value');

  if (!statCards.length && !statValues.length) return;

  // Prepare initial 0 state for numbers before scroll
  statValues.forEach(el => {
    const origText = el.textContent.trim();
    el.setAttribute('data-orig', origText);
    const match = origText.match(/^([^\d]*)([\d\.]+)([^\d]*)$/);
    if (match) {
      const prefix = match[1];
      const isFloat = match[2].includes('.');
      const suffix = match[3];
      el.textContent = `${prefix}${isFloat ? '0.0' : '0'}${suffix}`;
    }
  });

  const animateNumber = (el) => {
    if (el.dataset.animated === 'true') return;
    el.dataset.animated = 'true';

    const origText = el.getAttribute('data-orig') || el.textContent.trim();
    const match = origText.match(/^([^\d]*)([\d\.]+)([^\d]*)$/);
    if (!match) return;

    const prefix = match[1];
    const targetNum = parseFloat(match[2]);
    const suffix = match[3];
    const isFloat = match[2].includes('.');

    const duration = 1800;
    const startTime = performance.now();

    const updateCount = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const currentNum = targetNum * easeProgress;

      const formattedNum = isFloat ? currentNum.toFixed(1) : Math.floor(currentNum);
      el.textContent = `${prefix}${formattedNum}${suffix}`;

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        el.textContent = origText;
      }
    };

    requestAnimationFrame(updateCount);
  };

  const onIntersect = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const card = entry.target;
        observer.unobserve(card);

        // Stagger entrance animation
        card.classList.add('animate-in');

        // Trigger number counter
        const valEl = card.querySelector('.gp-stat-value');
        if (valEl) {
          animateNumber(valEl);
        }
      }
    });
  };

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(onIntersect, {
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.1
    });

    statCards.forEach((card, index) => {
      card.style.transitionDelay = `${index * 120}ms`;
      observer.observe(card);
    });
  } else {
    statCards.forEach(card => {
      card.classList.add('animate-in');
      const valEl = card.querySelector('.gp-stat-value');
      if (valEl) animateNumber(valEl);
    });
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initStatCounterAnimation);
} else {
  initStatCounterAnimation();
}

/* ---- Role Tabs Switcher ---- */
const roleData = {
  cio: {
    withoutTitle: 'Without EmployeeOS',
    withoutPoints: [
      'Five vendor contracts',
      'Five SSO setups',
      'Five compliance risks'
    ],
    withTitle: 'With EmployeeOS',
    withDesc: 'One platform with SOC 2 + ISO 27001 certification, native SSO and API, and a dedicated implementation team. Go live in 2–4 weeks, not months.',
    image: 'images/CIO.png',
    personName: 'Chief Information Officer',
    tasks: [
      { label: 'Security & Access', detail: 'There are 4 tasks to review' },
      { label: 'SSO Integration', detail: 'Active SAML 2.0 & Okta' },
      { label: 'Data Governance', detail: 'ISO 27001 verified' }
    ]
  },
  chro: {
    withoutTitle: 'Without EmployeeOS',
    withoutPoints: [
      'Fragmented HR tools & spreadsheets',
      '30+ day slow entity onboarding',
      'High misclassification penalty risk'
    ],
    withTitle: 'With EmployeeOS',
    withDesc: 'Hire employees & contractors in 100+ countries in just 2.3 days. Automated localized contracts with 100% legal compliance.',
    image: 'images/CIRO.png',
    personName: 'Chief Human Resources Officer',
    tasks: [
      { label: 'Global Onboarding', detail: '2.3 days avg speed' },
      { label: 'Contract Audit', detail: '100% compliant' },
      { label: 'Team Analytics', detail: 'Real-time turnover' }
    ]
  },
  payroll: {
    withoutTitle: 'Without EmployeeOS',
    withoutPoints: [
      'Manual multi-currency calculations',
      'Days spent filing state taxes',
      'Frequent payroll calculation errors'
    ],
    withTitle: 'With EmployeeOS',
    withDesc: 'Auto-compute taxes, PF, ESI, and statutory deductions across all regions. One-click batch payroll execution and direct portal filing.',
    image: 'images/Payroll Manager.png',
    personName: 'Payroll Administrator',
    tasks: [
      { label: 'Payroll Cycle', detail: 'Ready to approve' },
      { label: 'Tax Deductions', detail: 'Auto-computed' },
      { label: 'Batch Payout', detail: 'SEPA / ACH ready' }
    ]
  },
  managers: {
    withoutTitle: 'Without EmployeeOS',
    withoutPoints: [
      'Chasing emails for PTO approvals',
      'Disconnected contractor invoices',
      'No real-time team attendance sync'
    ],
    withTitle: 'With EmployeeOS',
    withDesc: '1-click leave & expense approvals directly from Slack, MS Teams, or web. Real-time team calendars and milestone verification.',
    image: 'images/Manager.png',
    personName: 'Engineering & People Manager',
    tasks: [
      { label: 'Team PTO', detail: '2 pending reviews' },
      { label: 'Expenses', detail: 'Receipts verified' },
      { label: 'Milestones', detail: '1-click approval' }
    ]
  },
  employees: {
    withoutTitle: 'Without EmployeeOS',
    withoutPoints: [
      'Asking HR for payslips repeatedly',
      'Paper expense receipts lost in mail',
      'Unclear leave balances & tax forms'
    ],
    withTitle: 'With EmployeeOS',
    withDesc: 'Self-service mobile & web app for instant payslip downloads, live leave balances, expense reporting, and tax document access.',
    image: 'images/Employee.png',
    personName: 'Global Team Member',
    tasks: [
      { label: 'My Payslips', detail: 'Instant PDF download' },
      { label: 'Leave Balance', detail: 'Live sync updated' },
      { label: 'Tax Form 16', detail: '1-click access' }
    ]
  }
};

function switchRoleTab(roleKey) {
  const panel = document.getElementById('roleDetailsPanel');
  const tabs = document.querySelectorAll('.role-tab');
  if (!panel || !roleData[roleKey]) return;

  tabs.forEach(tab => {
    const active = tab.getAttribute('data-role') === roleKey;
    tab.classList.toggle('active', active);
    tab.setAttribute('aria-selected', String(active));
  });

  const data = roleData[roleKey];
  panel.style.opacity = '0';
  panel.style.transform = 'translateY(6px)';

  setTimeout(() => {
    panel.innerHTML = `
      <div class="role-grid-container">
        <div class="role-left-col">
          <div class="role-without-card">
            <h3>${data.withoutTitle}</h3>
            <ul class="role-without-list">
              ${data.withoutPoints.map(pt => `<li><span class="role-green-dot"></span> ${pt}</li>`).join('')}
            </ul>
          </div>
          <div class="role-with-card">
            <h3>${data.withTitle}</h3>
            <p>${data.withDesc}</p>
          </div>
        </div>
        <div class="role-visual-card">
          <div class="role-bg-mockup">
            <div class="role-mockup-header">
              <strong>My Tasks</strong>
            </div>
            ${data.tasks.map(t => `
              <div class="role-mockup-item">
                <strong>${t.label}</strong>
                <span>${t.detail}</span>
              </div>
            `).join('')}
          </div>
          <img src="${data.image}" alt="${data.personName}" class="role-person-img" />
        </div>
      </div>
    `;
    panel.style.opacity = '1';
    panel.style.transform = 'translateY(0)';
  }, 160);
}

