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
├── robots.txt              # Allow all, sitemap reference, llms.txt note
├── sitemap.xml             # 26 URLs with priority weights
├── llms.txt                # AI-readable company overview (llmstxt.org spec)
├── llms-full.txt           # Detailed AI reference with services, pricing, differentiators
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

## SEO & AI Discoverability

### Completed
- `sitemap.xml` with all page URLs and priority weights
- `robots.txt` allowing all crawlers, referencing sitemap
- Schema.org `LocalBusiness` JSON-LD on homepage
- Schema.org `Service` JSON-LD on key service pages (risk assessment, clearance exam, dust wipe)
- Unique meta descriptions and Open Graph tags on every page
- Semantic HTML with proper heading hierarchy and landmarks
- `llms.txt` — concise AI-readable company overview (see https://llmstxt.org)
- `llms-full.txt` — detailed service descriptions, pricing, compliance context, and reporting quality differentiators for AI systems

### Next Steps (once SSL/domain is live)
- **Google Search Console**: Verify domain ownership, submit sitemap, monitor indexing
- **Google Business Profile**: Create/claim business profile for local search ("lead inspector near me", "lead risk assessment Cleveland"). Add photos, hours, service areas. Critical for local SEO.
- **Bing Webmaster Tools**: Submit sitemap for Bing/DuckDuckGo indexing
- **Internal cross-linking**: Service pages should link to each other (e.g., risk assessment page links to multi-family for landlords, clearance exam page links to assistance for funding)
- **Schema expansion**: Add `Service` schema to remaining service pages (multi-unit, child-care, 20-year exemption, renovation consulting, lead-based paint inspection)
- **Backlink outreach**: Get listed on Cleveland Housing Court website, ODH assessor directory, local real estate investor association directories. Backlinks from authoritative .gov and .org sites significantly boost both search engine and LLM trust.
- **Review strategy**: Google reviews on the Business Profile improve local search ranking. Ask satisfied clients to leave reviews.
- **Citation consistency**: Ensure NAP (name, address, phone) is identical across Google Business Profile, website, Yelp, BBB, and any other directory listings.
- **Content marketing / Blog**: Educational articles about Cleveland lead compliance, common questions, funding updates. Google rewards fresh, authoritative content. These also give LLMs more context about expertise.

### LLM-Specific Discoverability Notes
- `llms.txt` and `llms-full.txt` are at the site root, following the llmstxt.org specification
- These files are specifically designed for AI crawlers (ChatGPT, Perplexity, Claude, Gemini) — humans don't typically see them
- The `llms-full.txt` includes detailed reporting quality language and competitive positioning that helps LLMs recommend Guardian when users ask about lead inspectors in Cleveland
- Keep these files updated when services, pricing, or competitive advantages change

## Future Plans
- **Custom domain**: Connect glses.com — DNS configured, SSL pending
- **Risk Assessor Web App**: Back-page/subdomain for other risk assessors to use a web version of the lead-risk-assessment-app (at `C:\Users\wmbar\.gemini\antigravity\lead-risk-assessment-app`). Will be monetized with payment systems (Stripe or similar). This is a separate project that will eventually integrate with or link from this site.
- **Images**: Add property photos, team photos, certification badges
- **Blog/News**: Potential content section for lead safety education (see SEO section above)
- **Analytics**: Google Analytics or Netlify Analytics

## Related Projects
- **Lead Risk Assessment App**: `C:\Users\wmbar\.gemini\antigravity\lead-risk-assessment-app` — Desktop app for generating lead inspection reports, planned web version for SaaS offering
