# Invoice/AP Automation Website Redesign - Project Plan

**Date Created:** January 25, 2026  
**Project:** The Shades Website Transformation  
**Goal:** Pivot from general dev marketplace to B2B Invoice/AP Automation SaaS

---

## 🎯 Core Positioning Change

**FROM:** Developer-Innovator marketplace platform  
**TO:** B2B Invoice & AP workflow automation delivered in 10 business days

**Key Offer:** "Invoice & AP workflow automation in 10 business days"

---

## 📋 Implementation Checklist

### ✅ Phase 1: Homepage Redesign (HIGHEST PRIORITY)

#### A. Hero Section Replacement

- [ ] **Update Hero Headline (H1)**
  - New: "Automate Invoice & AP Workflows in 10 Business Days"
  - File: `src/components/home/Hero.tsx` or `src/components/home/HeroContent.tsx`

- [ ] **Update Hero Subheadline**
  - New: "Turn email/SharePoint invoices into clean, validated data with an approvals queue and ERP-ready export — with audit logs and exception handling built in."

- [ ] **Primary CTA Button**
  - Text: "Book a 15-min Call"
  - Link: `/contact` (or Calendly embed)
  - Style: Solid button

- [ ] **Secondary CTA Button**
  - Text: "See How It Works"
  - Link: `/invoice-automation`
  - Style: Outline button

- [ ] **Add Under-CTA Microtext**
  - Text: "Typical outcomes: 50–80% less manual entry, faster approvals, fewer duplicates and errors."
  - Style: Small, muted text

#### B. Add "3-Step Process" Section

- [ ] **Create new component**: `src/components/home/ThreeStepProcess.tsx`
- [ ] **Section Title**: "How It Works"
- [ ] **Card 1: Capture**
  - Email/SharePoint intake + attachments
- [ ] **Card 2: Extract + Validate**
  - OCR/AI extraction + business rules (totals, duplicates, vendor checks)
- [ ] **Card 3: Approve + Export**
  - Exceptions dashboard + approvals → ERP-ready CSV/API
- [ ] **Add CTA Button**: "See the 10-Day Sprint" → `/invoice-automation`

#### C. Add "What We Automate" Section

- [ ] **Create new component**: `src/components/home/WhatWeAutomate.tsx`
- [ ] **Section Title**: "Start with Invoices. Expand to other workflows."
- [ ] **Bullet Points**:
  - Invoice intake & routing
  - Field extraction + line items (optional)
  - Validation rules & duplicate prevention
  - Exceptions queue & approvals
  - Export to ERP format + audit trail
- [ ] **Add Note**: "We begin with one high-volume workflow to ship fast, then expand."

#### D. Add "Trust" Section

- [ ] **Create new component**: `src/components/home/TrustSection.tsx`
- [ ] **Section Title**: "Built for real operations"
- [ ] **Bullet Points**:
  - Human-in-the-loop approvals
  - Audit logs and traceability
  - Error handling + retries
  - Role-based access (if applicable)
  - Secure handling of files and data
- [ ] **Note**: NO certifications unless truly available

#### E. Update Navigation

- [ ] **Update**: `src/components/Navigation.tsx` and `src/components/layout/Navigation.tsx`
- [ ] **New Navigation Items**:
  - Invoice Automation → `/invoice-automation`
  - How It Works → Section anchor on homepage (optional)
  - Pricing → Section anchor on `/invoice-automation`
  - Contact → `/contact`
- [ ] **Remove/Hide**: "Services" from primary nav or move to footer
- [ ] **Remove/Hide**: "Developers" and "Innovators" from primary nav

#### F. Update HomePage Structure

- [ ] **Update**: `src/pages/HomePage.tsx`
- [ ] **Remove old sections**:
  - HowItWorks (replace with ThreeStepProcess)
  - KeyFeatures (replace with WhatWeAutomate)
  - SuccessStories (keep or remove based on relevance)
  - BlogPreview (keep if relevant)
  - CTABanner (update messaging)
- [ ] **Add new sections in order**:
  1. Hero
  2. ThreeStepProcess
  3. WhatWeAutomate
  4. TrustSection
  5. CTABanner (updated)

---

### ✅ Phase 2: Create Invoice Automation Landing Page (MUST-HAVE)

- [ ] **Create new page**: `src/pages/InvoiceAutomationPage.tsx`
- [ ] **Add route** in `src/App.tsx`: `/invoice-automation`

#### Section 1: Hero

- [ ] **Create component**: `src/components/invoice-automation/Hero.tsx`
- [ ] **H1**: "Invoice & AP Automation Sprint"
- [ ] **Subheadline**: "Working automation delivered in 10 business days — intake → extraction → validation → approvals → export + audit trail."
- [ ] **Primary CTA**: "Book a 15-min Call"
- [ ] **Secondary CTA**: "See Pricing" (anchor link) OR "Download Sprint Scope" (PDF)

#### Section 2: Who It's For

- [ ] **Create component**: `src/components/invoice-automation/WhoItsFor.tsx`
- [ ] **Title**: "Designed for teams still handling invoices manually"
- [ ] **Bullets**:
  - Invoices arrive via email/SharePoint/PDFs
  - Data entry into ERP/Excel is slow and error-prone
  - Approvals delay processing
  - Duplicate invoices and missing fields cause rework

#### Section 3: What You Get (Deliverables)

- [ ] **Create component**: `src/components/invoice-automation/Deliverables.tsx`
- [ ] **Title**: "What's included in the 10-day sprint"
- [ ] **Checklist items**:
  - Invoice intake setup (email/SharePoint/folder)
  - OCR + AI extraction of key fields (vendor, invoice #, date, totals, tax, PO #)
  - Validation rules (totals match, duplicates, vendor checks, required fields)
  - Exceptions dashboard (approve/reject/request info)
  - Export (ERP-ready CSV; API integration optional)
  - Activity logs + audit trail
  - Short handover + training session

#### Section 4: Timeline (10 Days)

- [ ] **Create component**: `src/components/invoice-automation/Timeline.tsx`
- [ ] **Title**: "10-Day delivery plan"
- [ ] **Days**:
  - Day 1–2: Intake + sample docs + data mapping
  - Day 3–5: Extraction + validation rules
  - Day 6–7: Exceptions dashboard + approvals
  - Day 8–9: Export format + testing + hardening
  - Day 10: Demo + handover + next steps (retainer)

#### Section 5: Pricing

- [ ] **Create component**: `src/components/invoice-automation/Pricing.tsx`
- [ ] **Title**: "Pricing"
- [ ] **3 Pricing Cards**:

**Starter — $3k to $6k**

- Single inbox/source
- Core fields extraction
- CSV export
- Basic validations

**Standard — $7k to $15k (recommended)**

- Exceptions dashboard
- Strong validations + duplicates
- Reporting/status view
- Better reliability & logging

**Premium — $15k to $30k+**

- ERP/API integration
- Multi-step approvals
- Advanced rules + security requirements
- Higher volume + SLAs

- [ ] **Add note below**: "Final price depends on invoice volume, number of formats/vendors, and integration needs."

#### Section 6: Retainer

- [ ] **Create component**: `src/components/invoice-automation/Retainer.tsx`
- [ ] **Title**: "Ongoing optimization & support (monthly retainer)"
- [ ] **Copy**: "Invoice formats change. Vendors change. Rules change. A small retainer keeps the system reliable and improving."
- [ ] **Pricing range**: "$2k–$8k/month for monitoring, fixes, new templates, rule updates, enhancements."

#### Section 7: FAQ

- [ ] **Create component**: `src/components/invoice-automation/FAQ.tsx`
- [ ] **Q&A Items**:

**Q: Do we need to change our ERP?**
A: No. We export in a format your ERP can import (CSV/API depending on setup).

**Q: What if the invoice is messy/scanned?**
A: We handle OCR + extraction, and route uncertain cases to the exceptions queue.

**Q: Is human approval required?**
A: Only for exceptions. Clean invoices can go straight through.

**Q: How do we start?**
A: Share 10–20 sample invoices (with sensitive data removed if needed) and we map the workflow.

#### Section 8: Final CTA Block

- [ ] **Create component**: `src/components/invoice-automation/FinalCTA.tsx`
- [ ] **Headline**: "Ready to remove invoice busywork?"
- [ ] **Primary Button**: "Book a 15-min Call"
- [ ] **Secondary**: "Or email us at contact@thetrueshades.com"

---

### ✅ Phase 3: Update Footer & Other Services

- [ ] **Update**: `src/components/Footer.tsx` and `src/components/layout/Footer.tsx`
- [ ] **Add small section**: "Other capabilities"
- [ ] **Text**: "Other capabilities: Web apps, dashboards, integrations, automation for other ops workflows."
- [ ] **Keep it minimal** - NOT prominently displayed

---

### ✅ Phase 4: Contact Page Upgrade

- [ ] **Update**: `src/pages/ContactPage.tsx`
- [ ] **Update form** in `src/components/contact/ContactForm.tsx` (if exists)
- [ ] **New Form Fields**:
  - Name
  - Company
  - Email
  - Monthly invoice volume (dropdown: <100 / 100–500 / 500–2000 / 2000+)
  - Current system (dropdown: ERP / Excel/other)
  - Where invoices come from (dropdown: Email / SharePoint / Portal / Mixed)
  - Message (textarea)
- [ ] **Optional**: Add Calendly embed
- [ ] **Update EmailJS template** to handle new fields

---

### ✅ Phase 5: Technical & SEO Updates

#### A. Update Page Titles & Meta Tags

- [ ] **Update**: `index.html` for base title
- [ ] **Add React Helmet** or update document titles in components

**Homepage:**

- Title: "The Shades | Invoice & AP Workflow Automation"
- Meta description: "Automate invoice and accounts payable workflows in 10 business days. Email/SharePoint intake → AI extraction → validation → approvals → ERP-ready export + audit logs."

**Invoice Automation Page:**

- Title: "Invoice Automation Sprint | The Shades"
- Meta description: "Get working invoice automation in 10 business days. Turn email/SharePoint invoices into clean, validated data with approvals queue and ERP-ready export."

**About Page:**

- Title: "About The Shades | Invoice Automation Experts"

**Contact Page:**

- Title: "Contact Us | The Shades Invoice Automation"

#### B. Add Conversion Tracking

- [ ] **Track CTA clicks**: "Book a 15-min Call"
- [ ] **Track form submits**: Contact form, invoice automation inquiries
- [ ] **Setup GA4 events** or analytics of choice
- [ ] **Add event handlers** to Button components

---

### ✅ Phase 6: Legacy Pages (Developers/Innovators)

**Decision needed**: Keep or remove?

**Option 1: Remove completely**

- [ ] Remove routes from `src/App.tsx`
- [ ] Keep files for reference but don't link to them

**Option 2: Move to "Other Services" footer link**

- [ ] Create `/other-services` page
- [ ] List developer network and innovator services there
- [ ] Link from footer only

**Recommendation**: Remove from main navigation, keep pages accessible via direct URL but don't promote them

---

## 📁 Files to Create (New)

### New Components - Homepage

1. `src/components/home/ThreeStepProcess.tsx`
2. `src/components/home/WhatWeAutomate.tsx`
3. `src/components/home/TrustSection.tsx`

### New Page & Components - Invoice Automation

1. `src/pages/InvoiceAutomationPage.tsx`
2. `src/components/invoice-automation/Hero.tsx`
3. `src/components/invoice-automation/WhoItsFor.tsx`
4. `src/components/invoice-automation/Deliverables.tsx`
5. `src/components/invoice-automation/Timeline.tsx`
6. `src/components/invoice-automation/Pricing.tsx`
7. `src/components/invoice-automation/Retainer.tsx`
8. `src/components/invoice-automation/FAQ.tsx`
9. `src/components/invoice-automation/FinalCTA.tsx`

### New Utility/Config Files

1. `src/types/invoiceAutomation.ts` (if needed for form types)

---

## 📝 Files to Modify (Existing)

### Core Files

1. `src/App.tsx` - Add `/invoice-automation` route
2. `src/pages/HomePage.tsx` - Complete restructure
3. `src/pages/ContactPage.tsx` - Update form fields
4. `src/components/Navigation.tsx` - Update nav items
5. `src/components/layout/Navigation.tsx` - Update nav items
6. `src/components/Footer.tsx` - Add "Other capabilities" section
7. `src/components/layout/Footer.tsx` - Add "Other capabilities" section
8. `index.html` - Update page title

### Homepage Components (Modify or Replace)

1. `src/components/home/Hero.tsx` - Complete rewrite
2. `src/components/home/HeroContent.tsx` - Complete rewrite (if separate)
3. `src/components/home/CTABanner.tsx` - Update messaging

### Contact Components

1. `src/components/contact/ContactForm.tsx` - Add new fields
2. `src/services/email.ts` - Update to handle new contact form fields

---

## 🎨 Design Considerations

### Color Scheme

- Keep existing Shades brand colors
- Ensure CTAs are prominent (solid vs outline)
- Use trust signals appropriately (blue/green for security mentions)

### Typography

- H1: Large, bold for main headlines
- H2: Section titles
- Body: Clear, readable for B2B audience
- Microtext: Smaller for under-CTA text

### Layout

- Hero: Full-width, centered content
- Sections: Max-width container (existing pattern)
- Cards: Grid layout (2-3 columns on desktop)
- Mobile: Stack vertically, maintain readability

---

## 🔄 Migration Strategy

### Step 1: Create all new components (no breaking changes)

- Build all invoice automation components
- Test in isolation

### Step 2: Create new invoice automation page

- Add route
- Test page independently

### Step 3: Update homepage (breaking change)

- Replace old sections with new ones
- Update navigation
- Test all links and CTAs

### Step 4: Update contact page

- Add new form fields
- Update email service
- Test form submission

### Step 5: Update meta tags and SEO

- Update titles
- Add meta descriptions
- Test in browser

### Step 6: Add analytics tracking

- Implement conversion events
- Test tracking

### Step 7: Deploy and monitor

- Deploy to production
- Monitor analytics
- Gather feedback

---

## ⚠️ Important Notes

1. **Don't remove old code immediately** - Comment out or keep in separate branch for reference
2. **Test email forms thoroughly** - Ensure EmailJS config handles new fields
3. **Mobile responsiveness** - All new sections must be mobile-friendly
4. **Accessibility** - Maintain ARIA labels, keyboard navigation
5. **Performance** - Keep bundle size reasonable, lazy load if needed
6. **Real content** - Use actual email (contact@thetrueshades.com), don't use placeholders
7. **No fake certifications** - Only mention real security features
8. **Calendly integration** - Get actual Calendly link before implementing

---

## 📊 Success Metrics to Track

- CTA click-through rate ("Book a 15-min Call")
- Form completion rate (Contact page)
- Time on page (Invoice Automation page)
- Bounce rate changes
- Traffic to `/invoice-automation`
- Contact form submissions with invoice volume data

---

## 🚀 Next Steps

1. Review this plan with stakeholders
2. Get actual Calendly link (if using)
3. Confirm pricing ranges are accurate
4. Start with Phase 1 (Homepage redesign)
5. Build incrementally, test frequently
6. Deploy in stages if possible

---

## 📞 Questions to Resolve

- [ ] Do we have a Calendly link for the CTAs?
- [ ] Should we remove /developers and /innovators pages completely or keep them hidden?
- [ ] Do we have actual customer testimonials for invoice automation?
- [ ] Are the pricing ranges ($3k-$30k) accurate?
- [ ] Is the 10-day timeline realistic for all tiers?
- [ ] Do we need terms of service / privacy policy updates?
- [ ] Should we add a case study or demo video?

---

**End of Project Plan**
