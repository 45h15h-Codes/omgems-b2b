# Stack Research

**Domain:** Luxury B2B Diamond & Jewellery Trading
**Researched:** 2026-04-09
**Confidence:** HIGH

## Recommended Stack

### Core Technologies

| Technology | Version | Purpose | Why Recommended |
|------------|---------|---------|-----------------|
| Laravel | 12.x | Backend API | Robust ecosystem for RBAC, API management, and business logic. |
| Next.js | 16.x | Frontend | Industry standard for high-performance, SEO-friendly luxury web apps. |
| MySQL | 8.0+ | Database | Reliability and ACID compliance for transaction-heavy B2B data. |
| Tailwind CSS | 4.x | Styling | Rapid development of premium, bespoke luxury interfaces. |
| TypeScript | 5.x | Language | Type safety across the decoupled stack for maintainability. |

### Supporting Libraries

| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| Sanctum | 4.x | Authentication | Secure, cookie-based session management for the headless setup. |
| React Query | 5.x | Data Fetching | Efficient caching and state management for diamond search results. |
| Framer Motion | 11.x | Animations | Smooth, premium interactions and micro-animations. |
| Lucide React | Latest | Icons | Clean, minimal iconography for luxury design. |
| Chart.js | 4.x | Data Viz | Merchant analytics and market trend visualizations. |

### Development Tools

| Tool | Purpose | Notes |
|------|---------|-------|
| Laravel Forge | Infrastructure | Streamlined deployment for Laravel APIs. |
| Vercel | Hosting | Native support for Next.js ISR and global performance. |
| Redis | Caching | Performance optimization for search queries and sessions. |

## Installation

```bash
# Core (Laravel API)
composer create-project laravel/laravel:^12.0 .
composer require laravel/sanctum

# Frontend (Next.js)
npx create-next-app@latest ./ --typescript --tailwind --eslint
npm install framer-motion lucide-react @tanstack/react-query
```

## Alternatives Considered

| Recommended | Alternative | When to Use Alternative |
|-------------|-------------|-------------------------|
| Next.js | Remix | If deep nested routing and standard web APIs are prioritized over ISR. |
| MySQL | PostgreSQL | If advanced JSON querying or complex geospatial data becomes a core feature. |

## What NOT to Use

| Avoid | Why | Use Instead |
|-------|-----|-------------|
| Inertia.js | Less "headless" than a pure Next.js setup; harder to scale for high-end cinematic visuals. | Next.js (Headless) |
| Standard UI Kits | Too generic for a Tier-1 luxury brand like Cartier/Tiffany. | Bespoke Tailwind components |

## Stack Patterns by Variant

**If High Volume Trading:**
- Use Redis for real-time inventory caching.
- Implement Laravel Horizon for background job management (GIA API calls).

**If Cinematic Visuals focus:**
- Use ISR (Incremental Static Regeneration) for product pages to ensure 100ms load times.
- Implement Three.js for 3D stone visualization in future phases.

## Sources

- [James Allen Platform Analysis] — UI/UX patterns for high-volume diamond search.
- [GIA Developer Documentation] — API integration for diamond grading reports.
- [Next.js/Laravel Headless Best Practices 2025] — Architectural patterns for performance.

---
*Stack research for: Luxury B2B Jewelry*
*Researched: 2026-04-09*
