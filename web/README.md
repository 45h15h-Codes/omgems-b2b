# Om Gems B2B Luxury Frontend

The high-end, cinematic Next.js 16 interface for the Om Gems trading ecosystem.

## Frontend Philosophy

This frontend is built with a "Luxury Minimalist" aesthetic, prioritizing high-performance animations, typography, and a seamless role-based user experience.

### Tech Stack
- **Framework**: Next.js 16 (App Router)
- **Library**: React 19
- **Design System**: 
  - **Tailwind CSS 4**: Modern styling with utility-first luxury tokens.
  - **Framer Motion**: Smooth, cinematic transitions and micro-interactions.
  - **Lucide**: Crisp, professional iconography.
- **State Management**: Zustand (Global stores for Auth, Search, etc.)
- **API Client**: Axios with global interceptors for Sanctum auth.

---

## Architectural Features

### 1. Unified Dashboard System
Located in `app/dashboard/`.
- A core shell that dynamically adapts its navigation/visibility based on the logged-in user's role.
- Consistent UI components across all portals (Admin, Merchant, Buyer).

### 2. Luxury Design Tokens
Defined in `app/globals.css`.
- High-end monochrome palette (Deep Black, Pure White, Silver).
- Premium typography scaling.
- Custom shimmer/loading effects for a polished feel.

### 3. Premier Search Interface
Located in `components/search/`.
- Interactive `ShapeGrid` and `StoneCard` components.
- Real-time filtering with custom `DualRangeSlider`.

---

## Development & Setup

### 1. Installation
```bash
npm install
```

### 2. Environment Configuration
Create a `.env.local` file:
```env
NEXT_PUBLIC_API_URL=http://localhost:8001
```

### 3. Running Development Server
```bash
npm run dev
```

---

## Technical Reference

### Directory Map
- `app/`: Next.js App Router pages and layouts.
- `components/ui/`: Low-level, reusable UI elements.
- `components/search/`: Domain-specific search components.
- `lib/api.ts`: Centralized API communication logic.
- `lib/store/`: Zustand state management (e.g., `useSearchStore`).
- `lib/utils.ts`: Shared helper functions (Tailwind merging, formatting).

### Key Workflows
- **Portals**: Each role has its layout/page structure defined in the App Router to ensure security and logical separation.
- **Auth**: Frontend tokens are stored securely and used in Axios headers via interceptors.

