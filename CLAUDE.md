# CLAUDE.md — Guardian Lead Safety Website

## Project Overview
Professional business website for **Guardian Lead Safety & Environmental Services**, a licensed lead inspection company serving Greater Cleveland & Northeast Ohio.

- **Owner**: William M Barker, License LA 10055
- **Business Address**: 6776 Wilson Mills RD, Gates Mills, OH 44040
- **Phone**: (216) 800-8259
- **Email**: info@glses.com
- **Domain**: glses.com (pending custom domain setup)

## Tech Stack
- **Type**: Pure static HTML/CSS/JS — no framework, no build process
- **Pages**: 27 HTML files across 5 sections
- **CSS**: Custom design system with CSS variables (`assets/style.css`)
- **JS**: Vanilla JS — hamburger menu, dropdowns, smooth scroll, dynamic year (`assets/app.js`)
- **Favicon**: SVG shield with "G" monogram (`assets/favicon.svg`)
- **Forms**: Netlify Forms with honeypot spam protection (`data-netlify="true"`)

## Hosting & Deployment
- **Host**: Netlify (auto-deploys on push to `main`)
- **Netlify Site**: classy-ganache-7c76d1.netlify.app
- **GitHub Repo**: https://github.com/wmbarker-guardian-lead/Gardian-Lead-Safety-and-Environmental-Services.git
- **Branch**: `main`
- **Config**: `netlify.toml` (redirects, security headers, asset caching)
- **Custom Domain**: Not yet configured (planned: glses.com)

## File Structure
```
/
├── index.html              # Homepage with Schema.org LocalBusiness
├── contact.html            # Quote request form (Netlify Forms)
├── 404.html                # Error page (absolute paths for Netlify)
├── robots.txt              # Allow all, sitemap reference
├── sitemap.xml             # 27 URLs with priority weights
├── netlify.toml            # Deploy config, redirects, headers
├── CLAUDE.md               # This file
├── assets/
│   ├── style.css           # Full design system
│   ├── app.js              # Navigation, interactions
│   └── favicon.svg         # Shield logo
├── services/               # 11 service pages
│   ├── index.html
│   ├── lead-risk-assessment.html
│   ├── lead-based-paint-inspection.html
│   ├── clearance-exam.html         # Legacy link target
│   ├── lead-clearance-exam.html    # Primary clearance page
│   ├── dust-wipe-sampling.html
│   ├── dust-soil-sampling.html
│   ├── 20-year-exemption.html
│   ├── renovation-consulting.html
│   ├── multi-unit-programs.html
│   └── child-care-schools.html     # Includes daycare content (merged)
├── process/                # 4 process pages
│   ├── timeline.html
│   ├── prep.html
│   ├── after.html
│   └── faq.html
├── assistance/             # 6 financial assistance pages
│   ├── index.html
│   ├── lead-safe-home-fund.html
│   ├── city-lhc.html
│   ├── county.html
│   ├── state-federal.html
│   └── daycare.html
└── resources/              # 3 resource pages
    ├── index.html
    ├── lead-safe-cle.html
    └── odh.html
```

## Design System (CSS)
- **Brand colors**: `--c-primary: #1e40af` (blue), `--c-accent: #f59e0b` (amber)
- **Typography**: Inter font family, weights 400/500/600/700
- **Components**: `.card`, `.btn` (primary/outline/ghost), `.checklist`, `.faq` (details/summary), `.trust-badges`, `.cta-banner`, `.pricing-grid`
- **Layout**: `.container` (max-width 1120px), `.two-col`, `.card-grid`, `.footer-grid`
- **Responsive**: Breakpoints at 768px and 900px
- **Accessibility**: `.skip-link`, focus styles, reduced-motion support
- **Print**: Print stylesheet included

## Page Template
All pages follow a unified template:
1. Skip link → `#main`
2. `<header class="site-header">` with logo, hamburger toggle, nav with dropdown submenus
3. `<main id="main">` with hero section + content sections
4. `<footer>` with 4-column grid (company, services, company links, contact)
5. Dynamic year via `<span id="year">`
6. Subdirectory pages use `../` relative paths

## SEO & Metadata
- **Schema.org**: LocalBusiness JSON-LD on homepage
- **Open Graph**: Title, description, type, URL on all pages
- **Meta descriptions**: Unique per page
- **Sitemap**: `sitemap.xml` with 27 URLs
- **Robots**: `robots.txt` allowing all crawlers

## Contact Form
- **Method**: Netlify Forms (POST, `data-netlify="true"`)
- **Spam**: Honeypot field (`netlify-honeypot="bot-field"`)
- **Fields**: Name*, Email*, Phone, Property Address, City (default: Cleveland), Number of Units, Service Needed (dropdown), Notes
- **Submissions**: Viewable in Netlify dashboard → Forms

## Security Headers (netlify.toml)
- `X-Frame-Options: DENY`
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy: camera=(), microphone=(), geolocation=()`

## Notes
- Two clearance exam pages exist intentionally: `clearance-exam.html` (legacy links) and `lead-clearance-exam.html` (primary/new nav)
- `daycare-facility.html` was merged into `child-care-schools.html`; a 301 redirect exists in `netlify.toml`
- No images currently — all visual design is CSS-based
- 404 page uses absolute paths (`/assets/...`) for Netlify compatibility

## Future Plans
- **Custom domain**: Connect glses.com (or similar) to Netlify
- **Google Search Console**: Submit sitemap after domain setup
- **Risk Assessor Web App**: Back-page/subdomain for other risk assessors to use a web version of the lead-risk-assessment-app (at `C:\Users\wmbar\.gemini\antigravity\lead-risk-assessment-app`). Will be monetized with payment systems (Stripe or similar). This is a separate project that will eventually integrate with or link from this site.
- **Images**: Add property photos, team photos, certification badges
- **Blog/News**: Potential content section for lead safety education
- **Analytics**: Google Analytics or Netlify Analytics

## Related Projects
- **Lead Risk Assessment App**: `C:\Users\wmbar\.gemini\antigravity\lead-risk-assessment-app` — Desktop app for generating lead inspection reports, planned web version for SaaS offering
