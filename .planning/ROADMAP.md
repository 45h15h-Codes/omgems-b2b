# Roadmap: Om Gems B2B Platform

## Overview

This roadmap defines the path to building a Tier-1 luxury B2B diamond and jewellery marketplace. The journey begins with a robust Laravel/Next.js foundation and RBAC, moves into the technically complex diamond filtration engine, and culminates in a high-touch inquiry system and cinematic luxury UX.

## Phases

- [ ] **Phase 1: Foundation & RBAC** - Core API/Frontend setup and secure role-based access.
- [ ] **Phase 2: Diamond PIM & Catalog** - Technical data structures for 20+ diamond parameters.
- [ ] **Phase 3: Premier Search Engine** - High-performance diamond filtration with James Allen style UI.
- [ ] **Phase 4: Jewellery & Media** - Elegant jewellery catalog with rich media support.
- [ ] **Phase 5: Merchant Ecosystem** - Onboarding, verification, and Merchant management center.
- [ ] **Phase 6: Dynamic Admin CMS** - Shopify-like control over sections, heroes, and menus.
- [ ] **Phase 7: Inquiry & Hold Engine** - RFQ workflow and "24h Hold" business logic for stones.
- [ ] **Phase 8: Order Lifecycle** - Tracking, status updates, and transaction history.
- [ ] **Phase 9: Global Payments** - Integrated India (Razorpay) and International (Stripe) gateways.
- [ ] **Phase 10: Luxury Polish & SEO** - Cinematic animations, media optimization, and Tier-1 UX audit.

---

## Phase Details

### Phase 1: Foundation & RBAC
**Goal**: Establish the headless architecture and secure user roles.
**Depends on**: Nothing
**Requirements**: AUTH-01, AUTH-02, AUTH-03, AUTH-04, ADMN-04
**Success Criteria**:
  1. Laravel 12 API is running with Sanctum auth.
  2. Next.js 16 frontend is connected to the API.
  3. User can login and be routed to Super Admin, Admin, or Merchant shell based on role.
**Plans**: 2 plans

### Phase 2: Diamond PIM & Catalog
**Goal**: Define and implement the technical schema for professional diamond listings.
**Depends on**: Phase 1
**Requirements**: DIAM-01, DIAM-02, DIAM-03
**Success Criteria**:
  1. Database support for 4Cs, fluorescence, polish, symmetry, etc.
  2. Merchant can create a diamond listing with technical specs.
  3. GIA/IGI certificates can be uploaded and associated with stones.
**Plans**: 2 plans

### Phase 3: Premier Search Engine
**Goal**: Build a high-performance, data-dense diamond search tool.
**Depends on**: Phase 2
**Requirements**: SRCH-01, SRCH-02, SRCH-03
**Success Criteria**:
  1. Users can filter 100k+ records with range sliders (Carat/Price).
  2. Shape selection is visual (icon-based grid).
  3. Search results update asynchronously (no page refresh).
**Plans**: 3 plans

### Phase 4: Jewellery & Media
**Goal**: Launch the jewelry catalog with emphasis on luxury visual presentation.
**Depends on**: Phase 2
**Requirements**: JEWL-01, JEWL-02, JEWL-03
**Success Criteria**:
  1. Jewellery items can be categorized into collections.
  2. High-res image carousels and video backgrounds work on product pages.
  3. Admin can manage jewellery inventory and variants.
**Plans**: 2 plans

### Phase 5: Merchant Ecosystem
**Goal**: empower diamond/jewelry suppliers to manage their own presence.
**Depends on**: Phase 1
**Requirements**: MERC-01, MERC-02, MERC-03
**Success Criteria**:
  1. Suppliers can apply for a merchant account.
  2. Admin can approve merchants from the dashboard.
  3. Merchants can manage their own listings via their private portal.
**Plans**: 2 plans

### Phase 6: Dynamic Admin CMS
**Goal**: Provide full control over the storefront's content and design.
**Depends on**: Phase 4
**Requirements**: ADMN-01, ADMN-02, ADMN-03
**Success Criteria**:
  1. Admin can enable/disable home page sections without code.
  2. Manage hero image/video media from the dashboard.
  3. Create/edit static pages (About, Terms) via a CMS.
**Plans**: 2 plans

### Phase 7: Inquiry & Hold Engine
**Goal**: Facilitate B2B negotiation and inventory reservations.
**Depends on**: Phase 3, Phase 5
**Requirements**: ORD-01, SRCH-04
**Success Criteria**:
  1. Buyer can submit an RFQ for a specific diamond or bulk order.
  2. "Hold for 24h" logic locks a stone from other buyers.
  3. Notification system alerts merchants of new inquiries.
**Plans**: 2 plans

### Phase 8: Order Lifecycle
**Goal**: Manage the complete state of a trade from inquiry to delivery.
**Depends on**: Phase 7
**Requirements**: ORD-02, ORD-03
**Success Criteria**:
  1. Order status moves through defined states (Approved -> Shipped).
  2. Real-time tracking updates are visible to both parties.
  3. Transaction dashboard shows full order history.
**Plans**: 1 plan

### Phase 9: Global Payments
**Goal**: Secure, multi-currency transaction processing.
**Depends on**: Phase 8
**Requirements**: PAY-01, PAY-02, PAY-03
**Success Criteria**:
  1. Local payments work via Razorpay (India).
  2. International payments work via Stripe.
  3. Currency converts automatically between INR and USD.
**Plans**: 2 plans

### Phase 10: Luxury Polish & SEO
**Goal**: Final Tier-1 audit for visual excellence and production readiness.
**Depends on**: Phase 1-9
**Requirements**: UIUX-01
**Success Criteria**:
  1. Framer Motion animations are smooth and lag-free.
  2. Media is optimized for 100/100 Lighthouse performance.
  3. Sitemap and SEO meta tags reflect luxury brand standards.
**Plans**: 2 plans

---

## Progress

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Foundation & RBAC | 0/2 | Not started | - |
| 2. Diamond PIM | 0/2 | Not started | - |
| 3. Premier Search | 0/3 | Not started | - |
| 4. Jewellery & Media | 0/2 | Not started | - |
| 5. Merchant Ecosystem | 0/2 | Not started | - |
| 6. Dynamic Admin CMS | 0/2 | Not started | - |
| 7. Inquiry & Hold | 0/2 | Not started | - |
| 8. Order Lifecycle | 0/1 | Not started | - |
| 9. Global Payments | 0/2 | Not started | - |
| 10. Luxury Polish | 0/2 | Not started | - |
