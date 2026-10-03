# Remote.com — Comprehensive Website Analysis Document

> **Date:** August 2, 2026  
> **Analyzed by:** Systematic crawl of remote.com and all major sub-pages  
> **Scope:** Homepage, all primary product pages, pricing, about, blog, careers, resources, legal, developer portal, partner pages, and solution verticals.

---

## TABLE OF CONTENTS
1. [Executive Summary](#1-executive-summary)
2. [Global Site Architecture & Navigation](#2-global-site-architecture--navigation)
3. [Visual Design System & Theme](#3-visual-design-system--theme)
4. [Homepage (/) — Deep Dive](#4-homepage---deep-dive)
5. [Products Section](#5-products-section)
6. [Pricing Page (/pricing)](#6-pricing-page-pricing)
7. [About Page (/about)](#7-about-page-about)
8. [Why Remote (/why-remote)](#8-why-remote-why-remote)
9. [Blog (/blog)](#9-blog-blog)
10. [Careers (/careers)](#10-careers-careers)
11. [Resources Hub (/resources)](#11-resources-hub-resources)
12. [Contact Page (/contact)](#12-contact-page-contact)
13. [Developer & API Portal (/remote-mcp, /developers)](#13-developer--api-portal)
14. [Partners Page (/partners)](#14-partners-page-partners)
15. [Legal & Compliance Pages](#15-legal--compliance-pages)
16. [Footer & Global Elements](#16-footer--global-elements)
17. [Image & Asset Inventory](#17-image--asset-inventory)
18. [CTA & Button Placement Analysis](#18-cta--button-placement-analysis)
19. [Content Tone & Messaging Framework](#19-content-tone--messaging-framework)

---

## 1. EXECUTIVE SUMMARY

**Remote.com** is the flagship marketing site for **Remote Technology, Inc.**, a global employment infrastructure platform offering EOR (Employer of Record), payroll, contractor management, benefits, equity, visa/immigration, and PEO services across 90+ countries. The site is built as a modern, single-page-application-style experience with heavy JavaScript rendering, rich illustrative imagery, and a conversion-focused design.

**Key Stats from Footer:**
- Copyright: © 2026 Remote Technology, Inc.
- Onboarding claim: Standard onboarding may take 30 days; Remote's average is **2.3 days**
- Data based on internal customer base compilation

---

## 2. GLOBAL SITE ARCHITECTURE & NAVIGATION

### 2.1 Primary Navigation (Sticky Header)
The site uses a **sticky top navigation bar** with the following structure (left-to-right):

| Position | Item | Behavior |
|----------|------|----------|
| Far Left | **Remote Logo** (stylized "R" in a blue circle) | Links to `/` |
| Left | **Products** | Mega-dropdown menu |
| Left | **Solutions** | Dropdown |
| Left | **Pricing** | Direct link to `/pricing` |
| Left | **Resources** | Dropdown |
| Right | **Contact Sales** | Secondary CTA button |
| Right | **Log In** | Text link to `/login` |
| Right | **Get Started** | Primary CTA button (blue) |

### 2.2 Products Mega-Menu Contents
When hovering "Products", a large dropdown reveals:
- **Employer of Record** — Hire without opening local entities
- **Payroll** — International payroll processing
- **Contractor Management** — Manage & pay contractors
- **HR Management** — People operations platform
- **Recruit** — Global talent acquisition
- **Benefits** — Localized employee benefits
- **Equity** — Global equity compensation
- **Visa & Immigration** — Work permit support
- **PEO** — US-only Professional Employer Organization

### 2.3 Solutions Dropdown
- Startups
- Enterprise
- Agencies
- Social Purpose

### 2.4 Resources Dropdown
- Blog
- Webinars
- Country Guides
- Cost Calculator
- HR Glossary
- Remote Handbook
- Compare Remote
- Customer Stories
- Original Research

### 2.5 Complete Sitemap (All Crawled Pages)
```
/
├── /products
├── /pricing
├── /employer-of-record
├── /payroll
├── /contractor-management
├── /hr-management
├── /recruit
├── /benefits
├── /equity
├── /visa-and-immigration
├── /peo
├── /solutions/startups
├── /solutions/enterprise
├── /solutions/agencies
├── /why-remote
├── /global-coverage
├── /fair-price-guarantee
├── /ip-guard
├── /security
├── /about
├── /careers
├── /blog
├── /resources
├── /remote-handbook
├── /hr-glossary
├── /compare
├── /global-talent-map
├── /cost-calculator
├── /country-guides
├── /webinars
├── /customer-stories
├── /press
├── /partners
├── /remote-mcp
├── /ai-agents
├── /custom-report-builder
├── /startup-program
├── /social-purpose
├── /developers
├── /api
├── /integrations
├── /contact
├── /login
├── /legal/terms-and-conditions
├── /legal/privacy-policy
├── /legal/cookie-policy
└── /jobs/* (career listings)
```

---

## 3. VISUAL DESIGN SYSTEM & THEME

### 3.1 Color Palette
| Token | Value | Usage |
|-------|-------|-------|
| **Primary Blue** | `#0066FF` (approx) | CTAs, links, logo, accents |
| **Dark Navy** | `#0A1628` (approx) | Dark sections, hero backgrounds, MCP page |
| **White** | `#FFFFFF` | Primary background, text on dark |
| **Light Gray** | `#F5F7FA` | Section alternation, cards |
| **Success Green** | `#10B981` | Checkmarks, live indicators |
| **Accent Yellow** | `#FCD34D` | Illustration highlights, badges |
| **Soft Purple** | `#A78BFA` | Illustration accents, gradients |

### 3.2 Typography
- **Headings:** Modern geometric sans-serif (likely custom or Inter/Satoshi-like)
- **Body:** Clean sans-serif, generous line-height
- **Code/Terminal:** Monospace for API/CLI sections
- **Scale:** Large display headings (48–72px) for hero sections; 18–20px body

### 3.3 Layout Patterns
- **Max-width container:** Centered, ~1200px
- **Section padding:** Generous vertical spacing (80–120px)
- **Grid:** 2-column splits (text + image) for feature sections
- **Cards:** Rounded corners (12–16px), subtle shadows, white backgrounds
- **Dark sections:** Full-bleed navy backgrounds for product highlights (MCP, Integrations, API)

### 3.4 Illustration Style
Remote uses a **distinctive mixed-media illustration style**:
- **3D-rendered UI mockups** (glassmorphism, floating cards)
- **Hand-drawn watercolor-style illustrations** (globes, hands, people)
- **Halftone/dot pattern overlays** (retro print aesthetic)
- **Transparent PNGs** with checkered backgrounds in source
- **Colorful geometric shapes** (purple, yellow, blue, red)
- **No stock photography** — all custom artwork

---

## 4. HOMEPAGE (/) — DEEP DIVE

### 4.1 Hero Section
- **Background:** White/light
- **Headline:** "Hire and pay anyone in the world — with the compliance, reliability, and local expertise that only owned infrastructure delivers."
- **Subheadline:** "Need to hire anyone, anywhere? We handle the employment contract, taxes, benefits, and compliance — onboarded in hours, not months."
- **CTAs:** Primary "Get Started" + secondary "Talk to Sales" or "Book a demo"
- **Visual:** Large animated/3D globe illustration showing interconnected employee cards floating around a wireframe globe with the Remote "R" logo at center

**Employee Card Mockups in Hero:**
- Ana Pereira — EOR, Engineering
- Payroll run (Germany flag) — €487k, 142 employees
- Contract signed — "LIVE" badge, "12 sec ago"
- Kenji T. · Tokyo — Contractor → FTE, ¥6.2M

### 4.2 Feature Section: Owned Infrastructure
- **Headline:** "100+ owned entities" + "One system of record"
- **Visual:** Stacked UI cards showing:
  - **Payroll engine** (RUNNING status) — UK £312,540, DE €487,210, BR R$ 891k (13th salary)
  - **Compliance layer** (VERIFIED status) — SOC 2 Type II, ISO 27001, GDPR Aligned
- **Employee avatars:** Ana Silva (Brazil), Pedro Nik (Greece), Luna Choi (USA)

### 4.3 MCP Section (Dark Navy Background)
- **Label:** "MCP"
- **Headline:** "Deploy AI agents on real employment data"
- **Body:** "Remote MCP gives any AI agent a live, secure connection to payroll, contracts, compliance data, and org structure — no API keys, no exports, no custom integrations needed."
- **CTA:** "Learn more"
- **Visual:** Dark blue background with glowing nodes connected to central Remote "R" logo; labels: [CLAUDE], [CUSTOM APP], [AUTOMATION], [CHAT GPT], [CURSOR], [COPILOT]

### 4.4 Integrations Section (Dark Navy Background)
- **Label:** "Integrations"
- **Headline:** "Plug Remote into your stack"
- **Body:** "Keep the HR tools your team already uses. Remote runs the payroll and compliance underneath, natively integrated with Workday, HiBob, BambooHR, Personio, and more."
- **CTA:** "See all integrations"
- **Visual:** Grid of partner logos (HiBob, Slack, Workday, Carta, Kota, Zelt, Merge, GoCo) surrounding central Remote logo on dark blue grid background

### 4.5 API Section
- **Label:** "API"
- **Headline:** "Build on top of ours"
- **Body:** "Remote is API-first by design. Use our REST API, webhooks, and CLI to build custom workflows, embed global employment into your own product, or extend Remote however your business needs."
- **CTA:** "Explore the API"

### 4.6 Customer Testimonials Section
Three testimonial cards with:
- **Quote 1:** "We see Remote as a leading and trusted partner... streamlined our processes and created more opportunities for growth."
- **Quote 2:** "If we had to manage everything in-house, it would cost us well over $500,000 more each year."
  - Attribution: Luke McKinlay, VP of Finance
- **Quote 3:** "We run monthly, semi-monthly and hourly payroll in multiple different currencies... our Finance Manager has full visibility in a single platform."
  - Attribution: Marisol Jiménez, Head of People
- **Quote 4:** "We work with 460+ Contractors globally. I'd need to employ 5 or 6 people full time to keep on top of compliance."

**Visual:** Team member onboarding card showing "Fernando Mars — Software Engineer — Germany" with onboarding progress at 40%, alongside code snippet:
```ruby
require 'remote'
response = Remote.request({
  name: "Jamie COOPERT",
  country: "ca",
  type: "employee",
})
```

### 4.7 Footer Area (Global)
- Copyright: "Copyright © 2026. Remote Technology, Inc. All rights reserved."
- Disclaimer: "Numbers on this page are based on internal data... standard onboarding may take 30 days and Remote's average onboarding time is 2.3 days."
- Links: Terms and conditions, Privacy policy, Cookie policy, Sitemap, Support, Best Destinations Report

---

## 5. PRODUCTS SECTION

### 5.1 Employer of Record (/employer-of-record)
- **Title:** "Hire International Employees with Remote's Global HR Platform"
- **Educational Content:**
  - "What is an Employer of Record and why do you need one?"
  - Explains EOR acts as legal employer in countries without entities
  - Handles payroll, tax, benefits, compliance
- **Use Cases:**
  - Hire in countries without legal entities
  - Expand quickly without months of entity setup
  - No internal global employment expertise needed
- **Differentiator:** Remote owns legal entities in every country; no third-party intermediaries
- **EOR vs PEO comparison:** EOR = legal employer on paper; PEO = employer still responsible for compliance

### 5.2 Payroll (/payroll)
- **Title:** "Remote"
- **Content:** (Page renders dynamically; focuses on international payroll capabilities)

### 5.3 Contractor Management (/contractor-management)
- **Title:** "Contractor Management Software"
- **FAQ Section:**
  - Cost: Free to start; $29/contractor/month for active contractors
  - 3.5% service fee on credit card payments
  - Payment methods: Wire transfer, ACH, SEPA, credit card
  - Contractors receive payments via Stripe Connect
  - Currency conversion fee: 1–2% (from payment partner)
  - Supports onboarding existing contractors
  - Offers localized contractor agreements
  - **Contractor Management Plus:** $99/month — adds indemnity protection up to $100k
  - **Contractor of Record (COR):** From $325/month — direct engagement by Remote, uncapped indemnity, AI misclassification tools, IP Guard

### 5.4 Benefits (/benefits)
- **Title:** "Global Employee Benefits Solutions for Global Teams"
- **FAQ Content:**
  - Large team of global benefits and legal experts
  - Best-in-class providers for competitive large-group pricing
  - No premium charged on benefits
  - Full administration: research, vendor relations, negotiation, enrollment, renewals
  - "Fair equity" — statutory + supplemental benefits globally
  - Full legal compliance in every country
  - Multiple plan options in most markets (standard/premium)
  - Family health coverage available in most countries
  - Employee dashboard with benefits tab for enrollment
  - Contractor benefits available in most countries (discounted international health coverage)

### 5.5 HR Management (/hr-management)
- People operations platform component

### 5.6 Recruit (/recruit)
- Global talent acquisition tool

### 5.7 Equity (/equity)
- From $39/month
- For Delaware C-Corps direct employees, EOR, and contractors
- Transparent equity processes, tax handling, compliant legal documentation

### 5.8 PEO (/peo)
- From $99/employee/month
- US-only hiring and management
- Requires US bank account, billed in USD
- Federal, state, and local compliance
- Large-group benefits access

### 5.9 Visa & Immigration (/visa-and-immigration)
- Work permit and visa support

---

## 6. PRICING PAGE (/pricing)

### 6.1 Page Title
"Pricing & Plans: Low Flat Rates | Remote"

### 6.2 Currency Selector
Dropdown with: USD, EUR, GBP, CAD, AUD, NZD, SGD, CHF, JPY, SEK, NOK, DKK

### 6.3 Pricing Tiers

| Product | Price | Key Features |
|---------|-------|--------------|
| **Employer of Record** | $699/employee/month | Hire in 90+ countries, dedicated onboarding specialist, local payroll, compliance built-in, localized benefits, dedicated in-house experts, includes HR Essentials |
| **Payroll** | $29/employee/month | International payroll, self-service platform, dedicated specialists, local regulations, integrated benefits, includes HR Core |
| **Contractor Management** | $29/contractor/month | Only pay for active contractors, international contractors, localized contracts, one-click invoice approval, transparent payments, includes HR Core |
| **Contractor Management Plus** | $99/contractor/month | Indemnity protection up to $100k, compliant contracts, zero hidden fees, includes HR Core |
| **Contractor of Record** | From $325/contractor/month | Direct engagement by Remote, uncapped indemnity, AI misclassification tools, IP Guard, includes HR Core |
| **PEO** | From $99/employee/month | US-only hire, fast onboarding, accurate payroll, federal/state/local compliance, large-group benefits, requires US bank account |
| **Equity** | From $39/month | Transparent equity, tax handling, compliant documentation, Delaware C-Corps |

### 6.4 Special Programs
- **Startup Program:** 15% off core services
- **Social Purpose:** 15% off for social-purpose organizations

### 6.5 Testimonials on Pricing Page
- "Remote is perfect from a headspace, cost, and time perspective. It's easy to explain to our board and our investors what we are paying for, and why."
- "What sets Remote apart... is that it is 100% scalable and reliable." — Amador Pilapil, Head of People
- "Remote Equity has taken the entire process of equity off our hands." — Mehdi Boudoukhane, Founder & CEO

### 6.6 Fair Pricing Notes
- Transparent price guarantee
- No upfront deposits required
- Reserve payments collected only in rare, high-risk circumstances
- No additional deposits for: PTO above legal minimum, removing probation periods, incentive plans, monthly severance accruals (unlike competitors)

---

## 7. ABOUT PAGE (/about)

### 7.1 Title
"About Remote | Remote"

### 7.2 Mission Statement
"Remote eliminates barriers to international hiring so great companies can work with great people, no matter where those people are."

### 7.3 Visual
- Large watercolor-style illustration of two hands in a prayer/gesture position over a globe (Earth with Americas, Europe, Africa visible)
- Halftone/dot texture overlay
- Soft blue, green, white color palette

---

## 8. WHY REMOTE (/why-remote)

### 8.1 Title
"A unified global HR platform powered by local expertise"

### 8.2 Sections
1. **International hiring, solved**
   - Reduce costs and admin burden
   - No need to set up legal entities
   - CTA: "Learn more"
   - Visual: 3D illustration of hand placing a profile card into a grid

2. **Onboard international employees in minutes, not months**
   - Global experts handle local payroll, benefits, compliance
   - CTA: "Learn more"
   - Visual: Globe with floating employee profile cards and document folders

3. **Sync employee data across all your systems**
   - Integrations with HR and payroll tools
   - CTA: "Learn more"
   - Visual: Laptop with employee profile cards and analytics charts

4. **Transparent price guarantee**
   - Clear, upfront pricing with no surprise fees
   - CTA: "Get pricing"
   - Visual: Hand holding a star badge with profile cards

5. **Security & Compliance**
   - Industry-leading security and compliance
   - CTA: "Remote IP Guard"
   - Visual: 3D geometric crystal with security icons

---

## 9. BLOG (/blog)

### 9.1 Title
"Working Global by Remote: Enabling the International Workforce | Remote"

### 9.2 Featured Article
- **Title:** "What's new in Remote: clearer workflows for payroll, contractors, benefits, and team management"
- **Date:** July 29, 2026
- **Author:** By Remote
- **Summary:** Q2 updates including Custom Report Builder, Remote MCP, Remote CLI, Remote AI Agents

### 9.3 Recent Stories Grid
- **Article 1:** Illustration of diverse team members with paper airplane
  - Naoko Nakata — Product Manager (Japan flag)
- **Article 2:** Remote & Async Work — "The powerful environmental benefits of remote work"
- **Article 3:** Remote & Async Work — "10 inclusive workplace practices for your remote team"
- **Article 4:** Global HR — "How to build a strong culture with a remote team"

### 9.4 Promotional Banner
- "Learn AI for actual work" — Remote-branded AI learning program
- 5-part curriculum: The Basics → Everyday Craft → Automate & Build → To Production → Lead the Change

---

## 10. CAREERS (/careers)

### 10.1 Title
"Remote Careers | Remote"

### 10.2 Opening Statement
"Come work with Remote if you are an ambitious, motivated, high-performing contributor who wants to demonstrate impact from anywhere in the world."

### 10.3 Company Values (5 pillars)
1. **Care**
2. **Innovation**
3. **Transparency**
4. **Intensity**
5. **Excellence**

### 10.4 Benefits Grid
- Flexible paid time off
- Company stock options
- Paid parental leave
- Home office setup
- Mental health support
- Flexible working hours
- Other country-specific benefits
- Learning budget
- Co-working allowance
- Branded swag

### 10.5 Diversity Stats
- **Nationalities:** More than 90 nationalities represented
- **Languages:** More than 50 languages spoken
- **Continents:** 6 ("only Antarctica left to go!")

### 10.6 Department Listings
The page lists all departments with descriptions:
- **Sales & Sales Enablement** — Incoming queries, fair price guarantee, product updates, training
- **Legal** — Contractual and employment law, training
- **International Operations** — Opening/managing entities, legal presence in all countries
- **People** — People strategies, employee experience, AI and data-driven insights, high-performance culture
- **Product** — Self-service platform, iterating on product requests and bug reports
- **Remote Financial Services** — Financial transactions review, compliance
- **Operations** — Customer Experience, Payroll, Benefits, Onboarding, Mobility, Employee Lifecycle
- **Design** — Product Design, UX, Brand Design
- **Engineering** — Building the Remote product; public career path and rulebook; "Remote Flow" methodology
- **Finance** — Accounting, Tax, Treasury, FP&A, Systems Operations
- **FinTech** — Automated payments, payments operations, accounts receivable
- **Marketing** — Performance, product, field, PR/social, content, growth marketing; blog and research

---

## 11. RESOURCES HUB (/resources)

### 11.1 Title
"Global HR and remote work resources | Remote"

### 11.2 Hero
"Master global HR with expert remote work resources"  
"The knowledge you need to hire like a local"

### 11.3 Resource Categories (6 cards)

| Resource | Description | Visual |
|----------|-------------|--------|
| **Employee Cost Calculator** | Free cost calculator for hiring in new countries | Screen with rolling paper/calculator |
| **Tech Stack Integrations** | ATS, HRIS, payroll integrations | Screen with gears |
| **API Documentation** | Build custom integrations | Hand + puzzle + gear + coding signs |
| **On-demand Webinars** | Panel discussions, expert content | Cube + hand + tablet + pro star |
| **Original Research** | Global employment trends, compensation, benefits | Planet Earth + documents + wire globe |
| **Customer Stories** | Real customer experiences | Laptop + mouse cursor + story posts |

### 11.4 Secondary Resources
- **Remote Handbook** — "Onboard international employees in a few clicks"
- **Compare Remote** — "We navigate complex international hiring, so you don't have to"
- **Remote HR Glossary** — "Search, learn, and help your team understand HR terminology"

### 11.5 Customer Testimonial
- Quote: "We see Remote as a leading and trusted partner..."
- Attribution: Maria Shkaruppa, Senior Global Mobility and Remote Hiring Manager
- Visual: Woman working at home desk with dual monitors, dog on couch

---

## 12. CONTACT PAGE (/contact)

### 12.1 Title
"Contact us | Remote"

### 12.2 Hero CTA
"Book a demo, see Remote in action"  
"Manage, pay, and recruit global talent in a unified platform"

### 12.3 Success State
"Successfully submitted! If you scheduled a meeting, please check your email... Otherwise, a representative will reach out within 24–48 hours."

### 12.4 Contact Options (4 cards)

| Option | Icon | Description |
|--------|------|-------------|
| **Talk to Sales** | Headphones | "Interested in learning more about Remote's solutions?" Get tailored advice, see platform, learn pricing |
| **Need 24/7 support?** | File text | "We've got you covered. Anytime, anywhere." Chat with global support team via Remote account |
| **Partner with Remote** | Partner | "Interested in embedding hiring products or supporting your clients' global needs?" |
| **Access our Learning Hub** | Shield heart | Help Center, guides, quick answers, useful resources |

### 12.5 Navigation Sidebar
- Visit Remote.com
- Home
- Products (Payroll, HR Management, Recruit)
- Services (Global coverage, Growth Stage, Platform, Partner with us)
- Case Studies
- Resources (Tools & Calculators, Learn with Remote, Blog, Blog Posts)
- March Product Updates snippet
- Pricing

---

## 13. DEVELOPER & API PORTAL

### 13.1 Remote MCP (/remote-mcp)
**Title:** "Build on Remote — Connect any AI tool to Remote"

**Hero:**
- "Connect to Remote. Your [live] [welcome]"
- Three interface options: **API** | **CLI** | **MCP** | **Sandbox**

**Three Surfaces:**
1. **API** — "Build integrations that last"
   - Sync hiring, payroll, compliance data
   - Automate scheduled workflows
   - Connect to HR, finance, analytics platforms

2. **CLI** — "Run operations from your terminal"
   - Approve requests from terminal
   - Schedule recurring operational checks
   - Retrieve workforce data without dashboard

3. **MCP** — "Connect AI to your workforce data"
   - ChatGPT, Claude, Cursor, any MCP-compatible client
   - Analyze compensation data
   - Run compliance checks
   - Ask about headcount, PTO, contract renewals

**Security Features:**
- OAuth 2.0 / Secure Auth (no API keys, no secrets stored)
- Inherited RBAC (permissions carry through)
- Governed endpoints (structured, not raw database)
- Data privacy (not used to train AI models)
- SOC 2 Type II certified

**Partner Programs:**
- **Embedded partners** (Personio, BambooHR, etc.)
- **Integration partners**

**Auth Methods:**
1. OAuth 2.0 (browser login for CLI, MCP)
2. API tokens (direct customer scripts)
3. Client credentials (partner integrations)

**Sandbox:**
- Command: `$ remote sandbox --init`
- Preloaded with employees, contracts, payroll, expenses
- Test API calls, CLI workflows, integrations

### 13.2 AI Agents (/ai-agents)
- Dedicated page for AI agent capabilities

### 13.3 Custom Report Builder (/custom-report-builder)
- Reporting tool page

---

## 14. PARTNERS PAGE (/partners)

### 14.1 Title
"Explore Remote partner programs | Remote"

### 14.2 Hero
"Ready to help shape the future of remote work and grow your business?"

### 14.3 Value Props (3 cards)
1. **International hiring solved** — Hire anywhere, pay in local currencies
2. **Superior customer service** — Personalized HR and legal expert service
3. **Local compliance** — Understanding of local labor and tax laws

### 14.4 Partner Types
- **Remote Embedded** — Add EOR and Global Payroll directly in your platform
- Revenue sharing and product strategy partnership

### 14.5 Visual
- Conference room with people on video call (6 participants on large screen)
- Illustration of stacked documents with pen

---

## 15. LEGAL & COMPLIANCE PAGES

### 15.1 Terms and Conditions (/legal/terms-and-conditions)
- Standard legal terms
- Copyright © 2026 Remote Technology, Inc.

### 15.2 Privacy Policy (/legal/privacy-policy)
- Data privacy disclosures
- Copyright © 2026 Remote Technology, Inc.

### 15.3 Cookie Policy (/legal/cookie-policy)
- Cookie usage disclosures
- Copyright © 2026 Remote Technology, Inc.

---

## 16. FOOTER & GLOBAL ELEMENTS

### 16.1 Footer Content
- **Copyright:** "Copyright © 2026. Remote Technology, Inc. All rights reserved."
- **Disclaimer:** "Numbers on this page are based on internal data compiled from existing customer base and speed assumption is based on the fact that standard onboarding may take 30 days and Remote's average onboarding time is 2.3 days."

### 16.2 Footer Links
- Sitemap
- Support
- Best Destinations Report
- Terms and conditions
- Privacy policy
- Cookie policy

---

## 17. IMAGE & ASSET INVENTORY

### 17.1 Illustration Categories

| Category | Description | Example Locations |
|----------|-------------|-------------------|
| **3D UI Mockups** | Glassmorphic floating cards, dashboards, employee profiles | Hero, Products, Payroll engine |
| **Watercolor Hands/Globes** | Soft, artistic, hand-painted style | About page, Benefits, Careers |
| **Halftone Illustrations** | Retro print aesthetic with dot patterns | Careers values, Resources cards |
| **Geometric 3D Shapes** | Crystals, cubes, stars, arrows | Why Remote, Security, Equity |
| **Dark Mode Tech Visuals** | Glowing nodes, constellation patterns, grid backgrounds | MCP, Integrations, API |
| **People Photography** | Real employee/customer photos | Testimonials (small circular avatars) |
| **Lifestyle Photography** | Home office, remote work scenes | Customer stories, Blog |

### 17.2 Key Visual Motifs
- **Globe/Earth** — Represents global reach (About, Why Remote, Resources)
- **Hands** — Care, support, human touch (About, Careers values, Benefits)
- **Employee Profile Cards** — Product UI metaphor (Hero, Global Talent Map)
- **Documents/Contracts** — Compliance, legal (Partners, Contract signing)
- **Stars/Badges** — Quality, verification, awards (Why Remote, Compliance)
- **Laptops/Screens** — Technology, platform, integrations (Resources, API)

### 17.3 Partner Logos Displayed
HiBob, Slack, Workday, Carta, Kota, Zelt, Merge, GoCo

---

## 18. CTA & BUTTON PLACEMENT ANALYSIS

### 18.1 Primary CTAs (Blue buttons)
| Location | Text | Destination |
|----------|------|-------------|
| Nav (global) | "Get Started" | Signup flow |
| Nav (global) | "Contact Sales" | /contact or demo booking |
| Hero | "Get Started" | Signup |
| Hero | "Talk to Sales" / "Book a demo" | /contact |
| MCP section | "Learn more" | /remote-mcp |
| Integrations | "See all integrations" | /integrations |
| API section | "Explore the API" | /developers or /remote-mcp |
| Testimonials | "Read full customer story" | /customer-stories |
| Pricing | "Get 15% off" (Startup) | Startup program |
| Why Remote | "Learn more" | Various product pages |
| Why Remote | "Get pricing" | /pricing |

### 18.2 Secondary CTAs (Text links, outlined buttons)
- "Log In" (nav)
- "Read article" (blog)
- "Learn more" (multiple sections)
- "Read full customer story" (testimonials)

### 18.3 Form CTAs
- Contact page: Demo booking form
- Login page: Authentication form
- Careers: Job application links

### 18.4 CTA Pattern Analysis
- **Above the fold:** Always has a primary CTA (Get Started)
- **Every major section:** Ends with a CTA to the next logical step
- **Dark sections:** White text CTAs on navy backgrounds
- **Light sections:** Blue filled buttons on white backgrounds
- **Testimonials:** Always paired with "Read full story" link

---

## 19. CONTENT TONE & MESSAGING FRAMEWORK

### 19.1 Brand Voice
- **Confident but approachable** — "Hire and pay anyone in the world"
- **Expert but not arrogant** — Educational content, guides, glossaries
- **Transparent** — "Fair price guarantee", "no hidden fees", clear pricing
- **Human** — Watercolor illustrations, people-focused testimonials
- **Innovative** — AI agents, MCP, CLI, API-first positioning

### 19.2 Key Messaging Pillars
1. **Owned Infrastructure** — "100+ owned entities", "no third parties"
2. **Speed** — "Onboarded in hours, not months", "2.3 days average"
3. **Compliance** — "SOC 2 Type II", "ISO 27001", "GDPR Aligned"
4. **Transparency** — "Fair price guarantee", "no upfront deposits"
5. **Global Reach** — "90+ countries", "90+ nationalities", "50+ languages"
6. **Integration** — "Plug into your stack", "API-first"
7. **AI-Forward** — MCP, AI agents, CLI automation

### 19.3 Target Audience Segments
- **Startups** — Cost-conscious, fast growth, 15% discount
- **Enterprise** — Compliance-focused, scalability, integrations
- **Agencies** — Client management, embedded solutions
- **Social Purpose** — Mission-driven, 15% discount
- **Developers** — API, CLI, MCP, technical integrations

---

## 20. TECHNICAL OBSERVATIONS

### 20.1 Rendering
- Heavy JavaScript-dependent SPA architecture
- Many pages return minimal static HTML; content loads dynamically
- Illustrations served as transparent PNGs with checkered backgrounds
- SVG icons used for UI elements (some fail to render in crawler)

### 20.2 SEO
- Descriptive meta titles on all pages
- Structured data for articles (blog)
- Sitemap referenced in footer

### 20.3 Performance Claims
- "Standard onboarding may take 30 days and Remote's average onboarding time is 2.3 days"
- All performance numbers based on internal customer data

---

*End of Comprehensive Analysis Document*

