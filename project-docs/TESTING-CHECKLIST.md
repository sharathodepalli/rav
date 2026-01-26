# Quick Testing Checklist ✅

Run these commands and checks before deployment.

## 🚀 Commands to Run

```bash
# 1. Navigate to project
cd "/Users/sharathchandra/Documents/Make it_2025/Website/rav"

# 2. Install dependencies (if not done)
npm install

# 3. Start development server
npm run dev

# 4. Build for production
npm run build

# 5. Preview production build
npm run preview

# 6. Deploy to GitHub Pages
npm run deploy
```

---

## ✅ Manual Testing Checklist

### Homepage (/)

- [ ] Hero headline: "Automate Invoice & AP Workflows in 10 Business Days"
- [ ] Two CTAs visible: "Book a 15-min Call" + "See How It Works"
- [ ] Microtext under CTAs displays
- [ ] "How it works" section with 3 cards (Capture, Extract, Approve)
- [ ] "What we automate" section with 5 bullet points
- [ ] "Built for real operations" trust section
- [ ] Footer shows "Other capabilities" text

### Navigation (All Pages)

- [ ] Nav items: Home, Invoice Automation, Pricing, Contact
- [ ] "Invoice Automation" links to /invoice-automation
- [ ] "Pricing" links to /invoice-automation#pricing
- [ ] Mobile menu works
- [ ] No "Developers" or "Innovators" in main nav

### Invoice Automation Page (/invoice-automation)

- [ ] Section 1: Hero with "Invoice & AP Automation Sprint"
- [ ] Section 2: "Who it's for" with 4 pain points
- [ ] Section 3: Deliverables checklist (7 items)
- [ ] Section 4: 10-day timeline visualization
- [ ] Section 5: Scope boundaries (Included vs Not Included)
- [ ] Section 6: Security & data handling (5 points)
- [ ] Section 7: Proof section with placeholders
- [ ] Section 8: Pricing with 3 tiers (id="pricing")
- [ ] Section 9: Retainer ($2k-$8k/month)
- [ ] Section 10: FAQ (4 questions, accordion)
- [ ] Section 11: Final CTA with email

### Pricing Anchor Link Test

- [ ] Click "Pricing" in nav from homepage
- [ ] Should navigate to /invoice-automation and scroll to #pricing section
- [ ] Click "See Pricing" button on invoice automation hero
- [ ] Should scroll to #pricing on same page

### Contact Page (/contact)

- [ ] Form has "Name" field
- [ ] Form has "Company" field (NEW)
- [ ] Form has "Email" field
- [ ] Form has "Reason for Contact" dropdown
- [ ] "Invoice Automation Inquiry" is first option in dropdown
- [ ] Select "Invoice Automation Inquiry"
- [ ] Three additional fields appear:
  - [ ] "Monthly Invoice Volume" dropdown
  - [ ] "Current System" dropdown
  - [ ] "Where do invoices come from?" dropdown
- [ ] "Message" textarea exists
- [ ] "We respond within 24 hours." text displays
- [ ] Submit button works

### Footer (All Pages)

- [ ] Company name: "The Shades"
- [ ] Description mentions invoice automation
- [ ] "Other capabilities" section visible with small text
- [ ] Lists: "Dashboards, integrations, web apps..."
- [ ] Email: contact@thetrueshades.com visible

### SEO / Meta Tags

- [ ] Browser tab shows: "The Shades | Invoice & AP Workflow Automation"
- [ ] View page source → meta description includes "10 business days"

### Mobile Responsiveness

- [ ] Test on mobile viewport (375px)
- [ ] Hero text readable
- [ ] Buttons stack vertically
- [ ] 3-column grids become 1-column
- [ ] Navigation hamburger menu works
- [ ] Forms are usable
- [ ] Timeline section is readable

### Links & Routing

- [ ] All "Book a 15-min Call" buttons go to /contact
- [ ] "See How It Works" goes to /invoice-automation
- [ ] "See the 10-Day Sprint" goes to /invoice-automation
- [ ] Logo/home link works
- [ ] No broken links
- [ ] /developers and /innovators still work (but not linked in nav)

---

## 🐛 Common Issues to Check

### Issue: TypeScript errors

**Solution:** Run `npm install` to get type definitions

### Issue: Images/icons not showing

**Check:** lucide-react icons imported correctly

### Issue: Styles not applying

**Check:** Tailwind config is working, classes are correct

### Issue: Form not submitting

**Check:** EmailJS configuration in src/config/emailjs.ts

### Issue: Pricing anchor not scrolling

**Check:** Element has id="pricing" attribute

### Issue: Conditional form fields not showing

**Check:** Select "Invoice Automation Inquiry" from dropdown

---

## 📊 Acceptance Criteria (from spec)

✅ **Goal 1:** Finance/AP buyer understands in 10 seconds

- [ ] Hero is clear and benefit-driven
- [ ] 10-day timeline is prominent
- [ ] Next action is obvious

✅ **Goal 2:** Primary CTA always visible

- [ ] "Book a 15-min Call" on homepage hero
- [ ] "Book a 15-min Call" on trust section
- [ ] "Book a 15-min Call" on invoice automation page (2x)
- [ ] All route to /contact

✅ **Goal 3:** /invoice-automation page complete

- [ ] All 11 sections present
- [ ] Content matches spec exactly
- [ ] Pricing section has anchor id

✅ **Goal 4:** No generic services in main nav

- [ ] Only: Home, Invoice Automation, Pricing, Contact
- [ ] Other services in footer only

✅ **Goal 5:** Links prioritize /invoice-automation

- [ ] Primary conversion path clear
- [ ] Multiple entry points to landing page

---

## 🎯 Key Metrics to Track (Post-Launch)

Setup these in Google Analytics:

- [ ] CTA clicks: "Book a 15-min Call"
- [ ] Form submissions from /contact
- [ ] Traffic to /invoice-automation
- [ ] Time on page for /invoice-automation
- [ ] Pricing section scroll depth
- [ ] Bounce rate on homepage

---

## 📝 Pre-Launch Checklist

- [ ] All placeholder content replaced (demo video, screenshots)
- [ ] Real Calendly link added (if available)
- [ ] EmailJS configured for new form fields
- [ ] Analytics tracking code added
- [ ] 404 page works
- [ ] Favicon updated
- [ ] Social sharing meta tags added (optional)
- [ ] CNAME file present (for custom domain)

---

## 🚨 Final Checks Before Deploy

- [ ] Run `npm run build` successfully
- [ ] No console errors in browser
- [ ] Test in Chrome, Firefox, Safari
- [ ] Test on actual mobile device
- [ ] All images load
- [ ] All links work
- [ ] Form submissions work
- [ ] Git commit with clear message
- [ ] Run `npm run deploy`
- [ ] Verify on live URL
- [ ] Test live site completely

---

**Ready to Ship!** 🎉
