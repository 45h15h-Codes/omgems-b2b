# Pitfalls Research

**Domain:** Luxury B2B Diamond & Jewellery Trading
**Researched:** 2026-04-09
**Confidence:** MEDIUM

## Common Mistakes in Jewelry E-commerce

### 1. The "Generic Store" Aesthetic
- **Pitfall**: Using standard UI kits or frameworks that feel like a mass-market retail site.
- **Prevention**: Use high whitespace, custom typography, and "brand-first" layouts. Avoid grid-heavy homepages; use large-scale cinematic imagery.

### 2. High-Latency Filtration
- **Pitfall**: Diamond searches with 20+ parameters can become slow, causing users to bounce.
- **Prevention**: Implement server-side caching (Redis) for filtered counts and use asynchronous UI updates to keep the interface snappy.

### 3. "Zero Results" Dead Ends
- **Pitfall**: Allowing users to select filter combinations (e.g., 5ct Flawless Round for $500) that produce no results.
- **Prevention**: Dynamically disable or gray out filter options that would yield zero results based on current selections.

### 4. Overwhelming Advanced Specs
- **Pitfall**: Showing "Table %" or "Symmetry" to beginner buyers immediately.
- **Prevention**: Group filters into "Basic" (Shape, Carat, Price) and "Advanced" (Technical specs) to maintain a clean UX.

### 5. Trust Deficit in B2B
- **Pitfall**: No clear verification for merchants listing high-value items.
- **Prevention**: Implement a "Verified Seller" badge and manual admin approval for merchant listing access.

## Technical Gotchas

- **cPanel 404s**: Static export of Next.js can lead to 404s on page refresh. *Prevention*: Configure `.htaccess` to redirect all non-file requests to `index.html`.
- **Inode Limits**: Large projects (Next.js build artifacts) can hit cPanel inode limits. *Prevention*: Clean production builds frequently and avoid storing excessive temp files.
- **Laravel Public Folder**: Moving files to `public_html` incorrectly. *Prevention*: Always keep core Laravel files *above* the subdomain root.

---
*Pitfalls research for: Luxury B2B Jewelry*
*Researched: 2026-04-09*
