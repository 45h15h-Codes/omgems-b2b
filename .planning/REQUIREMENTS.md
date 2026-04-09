# Requirements: Om Gems B2B Platform

**Defined:** 2026-04-09
**Core Value:** Deliver a premium, minimal, and highly polished luxury trading experience with powerful B2B functionality and scalability.

## v1 Requirements (MVP)

### Authentication & RBAC
- [ ] **AUTH-01**: User can sign up/login with email and password.
- [ ] **AUTH-02**: Role-based access control for Super Admin, Admin, and Merchant.
- [ ] **AUTH-03**: Password reset via email flow.
- [ ] **AUTH-04**: Session persistence and secure logout.

### Merchant Onboarding
- [ ] **MERC-01**: Merchants can apply to list products.
- [ ] **MERC-02**: Admin can approve/reject merchant applications.
- [ ] **MERC-03**: Merchants can manage their own business profile.

### Diamond Inventory
- [ ] **DIAM-01**: Merchants can list diamonds with 20+ technical parameters (4Cs, fluorescence, etc.).
- [ ] **DIAM-02**: Manual upload of GIA/IGI certificates (PDF/Images).
- [ ] **DIAM-03**: Real-time stock status management (Available, Reserved/Hold, Sold).

### Jewellery Catalog
- [ ] **JEWL-01**: Merchants can list jewellery items (Rings, Necklaces, etc.).
- [ ] **JEWL-02**: Support for multiple professional product images and videos.
- [ ] **JEWL-03**: Category and collection management for jewellery.

### Luxury Search & Filtering
- [ ] **SRCH-01**: Advanced diamond filters (James Allen style range sliders for Carat/Price).
- [ ] **SRCH-02**: Visual shape selectors (icon-based).
- [ ] **SRCH-03**: Real-time filtering updates with no page refreshes.
- [ ] **SRCH-04**: "Hold" requests for specific diamonds (24-48h logic).

### RFQ & Order Tracking
- [ ] **ORD-01**: Inquiries / RFQ system for bulk and single item orders.
- [ ] **ORD-02**: Real-time order status updates (Pending, Approved, Shipped, Delivered).
- [ ] **ORD-03**: Order history for buyers and merchants.

### Admin Panel (Shopify-like)
- [ ] **ADMN-01**: Dynamic section management (Enable/disable home page sections).
- [ ] **ADMN-02**: CMS for static pages (About, Contact, Terms).
- [ ] **ADMN-03**: Management of hero sections (Images/Video support).
- [ ] **ADMN-04**: Role-based permission control interface.

### Payments & Checkout
- [ ] **PAY-01**: Integration with India (Razorpay) gateway.
- [ ] **PAY-02**: Integration with International (Stripe) gateway.
- [ ] **PAY-03**: Multi-currency display based on user location (INR/USD).

## v2 Requirements (Future)

### Visual Innovations
- **VIS-01**: Integrated 360° stone interactive viewer.
- **VIS-02**: Virtual Try-On (AR) for rings and necklaces.
- **VIS-03**: GIA Report Results API direct integration (GraphQL).

### Logistics & ERP
- **LOG-01**: Automated shipping label generation.
- **LOG-02**: ERP/Inventory sync for large wholesalers.

## Out of Scope

| Feature | Reason |
|---------|--------|
| B2C Retail App | Current mission is B2B wholesale platform. |
| Physical Store POS | De-prioritized for initial digital platform. |
| Loyalty Points | Focus on transaction efficiency over gaming/retention. |

## Traceability

| Requirement | Phase | Status |
|-------------|-------|--------|
| AUTH-01 | Phase 1 | Pending |
| AUTH-02 | Phase 1 | Pending |
| ADMN-04 | Phase 1 | Pending |
| MERC-01 | Phase 1 | Pending |
| DIAM-01 | Phase 2 | Pending |
| SRCH-01 | Phase 2 | Pending |
| SRCH-02 | Phase 2 | Pending |
| SRCH-03 | Phase 2 | Pending |
| JEWL-01 | Phase 3 | Pending |
| ADMN-01 | Phase 3 | Pending |
| ADMN-02 | Phase 3 | Pending |
| ADMN-03 | Phase 3 | Pending |
| ORD-01 | Phase 4 | Pending |
| ORD-02 | Phase 4 | Pending |
| PAY-01 | Phase 5 | Pending |
| PAY-02 | Phase 5 | Pending |
| UIUX-01 | Phase ALL | Pending |

**Coverage:**
- v1 requirements: 26 total
- Mapped to phases: 26
- Unmapped: 0 ✓

---
*Requirements defined: 2026-04-09*
*Last updated: 2026-04-09 after initial definition*
