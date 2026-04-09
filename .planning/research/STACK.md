# Stack Research

**Domain:** Luxury B2B Diamond & Jewellery Trading
**Researched:** 2026-04-09
**Confidence:** HIGH

## Recommended Stack

### Core Technologies

| Technology | Version | Purpose | Why Recommended |
|------------|---------|---------|-----------------|
| Laravel | 12.x | Backend API | Hosted on cPanel subdomain (api.domain.com). |
| Next.js | 16.x | Frontend | Static Export (SSG) for cPanel compatibility. |
| MySQL | 8.0+ | Database | Managed via cPanel MySQL Databases. |
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
| GoDaddy cPanel | Hosting | Shared/Business hosting for PHP and Static files. |
| Laravel Forge | CI/CD | (Optional) Can be used if SSH access is available. |
| Redis | Caching | (Optional) Depends on GoDaddy server availability. |

## Installation

```bash
# Core (Laravel API setup)
php artisan install:api

# Frontend (Next.js with Static Export)
npm install
# Configure next.config.js for output: 'export'
npm run build
```

## Alternatives Considered

| Recommended | Alternative | When to Use Alternative |
|-------------|-------------|-------------------------|
| Next.js | Remix | If deep nested routing and standard web APIs are prioritized over ISR. |
| MySQL | PostgreSQL | If advanced JSON querying or complex geospatial data becomes a core feature. |

## What NOT to Use

| Avoid | Why | Use Instead |
|-------|-----|-------------|
| cPanel Node.js Selector | Resource heavy | Stick to Static Export for stability on shared hosting. |
| /public_html for Laravel | Security risk | Point subdomain root to /public and keep core files outside web root. |

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
