# Om Gems B2B API

The high-performance Laravel 12 backend for the Om Gems trading ecosystem.

## Core Backend Architecture

This API is designed for reliability, technical precision, and security. It handles all business logic, role-based access control, and inventory management.

### Tech Stack
- **Framework**: Laravel 12
- **Language**: PHP 8.2+
- **Database**: MySQL / PostgreSQL
- **Security**: 
  - **Sanctum**: Token-based API authentication.
  - **Spatie**: Granular Permission/Role management (RBAC).
- **Environment**: Container-ready with standard Laravel structure.

---

## Key Technical Components

### 1. Role-Based Access Control (RBAC)
Located in `app/Providers/AppServiceProvider.php` and `database/seeders/DatabaseSeeder.php`. 
- Leverages `spatie/laravel-permission`.
- Defined roles: `SuperAdmin`, `Admin`, `Partner`, `WholesaleBuyer`, `RetailCustomer`.

### 2. Diamond PIM (Product Information Management)
- **Model**: `app/Models/Diamond.php`
- **Controller**: `app/Http/Controllers/DiamondController.php`
- Manages professional diamond listings with extensive technical specs (Table%, Depth%, Girdle, etc.).

### 3. Authentication Flow
- **Controller**: `app/Http/Controllers/AuthController.php`
- Handles login, session management, and role-based payload delivery.

---

## Development & Setup

### 1. Installation
```bash
composer install
cp .env.example .env
php artisan key:generate
```

### 2. Database Initialization
```bash
php artisan migrate --seed
```
*Note: The seeder creates a default `SuperAdmin` user (`admin@omgems.com` / `password`) and sets up all required roles.*

### 3. Running the Server
```bash
php artisan serve --port=8001
```

---

## Technical Reference

### Directory Map
- `app/Http/Controllers`: Business logic handlers.
- `app/Http/Requests`: Strict validation for API inputs (e.g., `StoreDiamondRequest`).
- `app/Models`: Core data structures with Eloquent relationships.
- `database/migrations`: Professional schema definitions.
- `routes/api.php`: Authenticated and public endpoint definitions.

### Available Artisan Commands
- `php artisan db:seed`: Repopulate with mock diamond data and roles.
- `php artisan test`: Run the test suite (once implemented).
- `php artisan route:list`: View all registered API endpoints.

