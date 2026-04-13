# Om Gems B2B

Tier-1 B2B diamond and jewellery trading platform. A professional ecosystem for stone inventory management, advanced searching, and role-based trade portals.

Inspired by Cartier, Tiffany & Co., and James Allen, this platform delivers a luxury digital experience backed by high-performance engineering.

## Project Architecture

The project is structured as a multi-module monorepo:

- **`/api` (Backend)**: Laravel 12 API providing the core business logic, database management, and authentication.
- **`/web` (Frontend)**: Next.js 16 luxury interface for various user roles (Admins, Merchants, and Customers).

---

## Tech Stack

### Backend Engine (`/api`)
- **Framework**: Laravel 12.0
- **Runtime**: PHP 8.2+
- **Security**: Laravel Sanctum (API Auth) & Spatie Permissions (RBAC)
- **Database**: MySQL / PostgreSQL
- **Tooling**: Vite for asset management (Laravel integration)

### Frontend Experience (`/web`)
- **Framework**: Next.js 16 (App Router)
- **Library**: React 19
- **Styling**: Tailwind CSS 4 (Luxury Monochrome Design)
- **Animations**: Framer Motion
- **State Management**: Zustand
- **Icons**: Lucide React

---

## Technical Modules

### 1. Foundation & RBAC
A granular Role-Based Access Control system powered by Spatie. It manages five distinct user levels:
- **Super Admin**: Full system control.
- **Admin**: Staff-level management.
- **Vendor (Partner)**: Merchant inventory management.
- **Wholesale Buyer**: B2B customer portal.
- **Retail Customer**: End-consumer experience.

### 2. Diamond PIM (Product Information Management)
A professional-grade system for managing diamond inventory with 20+ technical specifications, including:
- **Core Specs**: Carat, Shape, Color, Clarity.
- **Technical Metrics**: Table %, Depth %, Girdle, Culet, Polish, Symmetry.
- **Certification**: Lab (GIA/IGI/HRD), Certificate No, Verify URLs.

### 3. Premier Search Engine
A high-performance filtering engine built into the backend to handle complex, multi-parameter stone searches with sorting and real-time pagination.

---

## Getting Started

### Prerequisites
- PHP 8.2+ & Composer
- Node.js 20+ & NPM/PNPM
- MySQL or PostgreSQL database

### 1. Backend Setup
```bash
cd api
composer install
cp .env.example .env
php artisan key:generate
# Configure database in .env
php artisan migrate --seed
php artisan serve --port=8001
```

### 2. Frontend Setup
```bash
cd web
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) for the frontend and [http://localhost:8001](http://localhost:8001) for the API.

---

## Directory Structure

```text
├── api/                    # Laravel 12 Backend
│   ├── app/                # Application logic (Controllers, Models, Requests)
│   ├── config/             # System configuration (RBAC, Auth, etc.)
│   ├── database/           # Migrations, Seeders, Factories
│   └── routes/             # API and Web route definitions
├── web/                    # Next.js 16 Frontend
│   ├── app/                # App Router (Pages, Layouts, Portals)
│   ├── components/         # Premium UI Components
│   └── lib/                # API client, Stores (Zustand), Utilities
└── .planning/              # Development phases and roadmap
```

