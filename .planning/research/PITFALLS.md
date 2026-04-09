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

- **Certificates**: Linking to wrong GIA reports. *Prevention*: Store Report ID and Laboratory as distinct fields; build a direct Link Generator based on lab URL patterns.
- **Currency Fluctuations**: Setting fixed prices in INR for international buyers. *Prevention*: Use a base currency (USD usually for diamonds) and dynamically convert at checkout.
- **Media Hydration**: Next.js hydration errors with complex 360 viewers. *Prevention*: Wrap viewers in `ClientOnly` components to prevent SSR mismatches.

---
*Pitfalls research for: Luxury B2B Jewelry*
*Researched: 2026-04-09*
