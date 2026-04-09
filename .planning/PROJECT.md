# Om Gems B2B Platform

## What This Is

A Tier-1 B2B diamond and jewellery trading platform designed for luxury-level performance and user experience. It serves as a high-end marketplace connecting diamond and jewellery suppliers with merchants, featuring an advanced filtration system, certificate management, and a robust RFQ/order tracking engine.

## Core Value

Deliver a premium, minimal, and highly polished luxury trading experience that mirrors the prestige of brands like Cartier and Tiffany & Co. while providing powerful B2B functionality and scalability.

## Requirements

### Validated

(None yet — ship to validate)

### Active

- [ ] **RBAC System**: Secure role-based access control for Super Admin, Admin, and Merchant.
- [ ] **Advanced Diamond Filters**: Multi-parameter search (carat, cut, clarity, color, etc.) with real-time results.
- [ ] **Luxury Jewellery Catalog**: High-end visual presentation for jewelry products with rich media support.
- [ ] **RFQ & Inquiry Engine**: Workflow for bulk order inquiries and real-time order tracking.
- [ ] **Certificate Management**: System for uploading and viewing diamond certifications (GIA, etc.).
- [ ] **Shopify-like CMS**: Fully dynamic admin panel for managing content, sections, and product listings.
- [ ] **Checkout & Payments**: Integrated India and international payment gateways with secure processing.

### Out of Scope

- **B2C Features**: Initial focus is strictly B2B; retail-focused features are deferred.
- **Physical POS Integration**: Focus is on the digital platform; physical store integration is not in 1.0.

## Context

- **Tech Stack**: Laravel (API), Next.js (Frontend - Static Export), MySQL.
- **Hosting**: GoDaddy cPanel (Shared/Business).
- **Inspiration**: Cartier, Tiffany & Co., and James Allen (workflows and visual aesthetic).
- **Architecture**: Headless/Decoupled architecture with a static frontend talking to a Laravel subdomain API.

## Constraints

- **Design**: Must strictly adhere to "Luxury Minimal" aesthetics (high whitespace, clean typography).
- **Performance**: High-end UI interactions and smooth animations must not compromise speed.
- **B2B Logic**: Must support bulk order workflows and merchant listing management.

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Headless Architecture | Next.js frontend + Laravel API enables cinematic performance and scalability. | — Pending |
| Fine granularity | User requested focused phases for high-quality execution. | — Pending |

## Evolution

This document evolves at phase transitions and milestone boundaries.

**After each phase transition** (via `/gsd-transition`):
1. Requirements invalidated? → Move to Out of Scope with reason
2. Requirements validated? → Move to Validated with phase reference
3. New requirements emerged? → Add to Active
4. Decisions to log? → Add to Key Decisions
5. "What This Is" still accurate? → Update if drifted

**After each milestone** (via `/gsd-complete-milestone`):
1. Full review of all sections
2. Core Value check — still the right priority?
3. Audit Out of Scope — reasons still valid?
4. Update Context with current state

---
*Last updated: 2026-04-09 after initialization*
