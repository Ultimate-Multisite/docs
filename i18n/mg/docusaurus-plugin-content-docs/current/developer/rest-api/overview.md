---
title: Topimaso momba ny REST API
sidebar_position: 1
_i18n_hash: cabcc173f6a77e5de94e39fff19bc2fa
---
# Tahirin-kevitra REST API

## Fanamboarana fototra {#base-configuration}

**Base URL:** `{site_url}/wp-json/wu/v2/`
**Fanamarinana:** API Key & Secret (HTTP Basic Auth na URL Parameters)

## Fanamarinana {#authentication}

### Alefaso ny API {#enable-api}
```php
// Enable API in Ultimate Multisite settings or programmatically
wu_save_setting('enable_api', true);
```

### Makà API Credentials {#get-api-credentials}
```php
$api_key = wu_get_setting('api_key');
$api_secret = wu_get_setting('api_secret');
```

### Fomba fanamarinana {#authentication-methods}

**HTTP Basic Auth (Aroso):**
```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

**URL Parameters:**
```bash
curl "https://yoursite.com/wp-json/wu/v2/customers?api_key=your_key&api_secret=your_secret"
```

## Endpoints fototra {#core-endpoints}

### 1. Customers API {#1-customers-api}

**Base Route:** `/customers`

**Alao ny Customers rehetra**
```http
GET /wu/v2/customers
```

**Alao ny Customer tokana**
```http
GET /wu/v2/customers/{id}
```

**Mamoròna Customer**
```http
POST /wu/v2/customers
Content-Type: application/json

{
    "user_id": 123,
    "email_verification": "verified",
    "type": "customer",
    "has_trialed": false,
    "vip": false
}
```

**Havaozy ny Customer**
```http
PUT /wu/v2/customers/{id}
Content-Type: application/json

{
    "vip": true,
    "extra_information": "VIP customer notes"
}
```

**Fafao ny Customer**
```http
DELETE /wu/v2/customers/{id}
```

### 2. Sites API {#2-sites-api}

**Base Route:** `/sites`

**Mamoròna site**
```http
POST /wu/v2/sites
Content-Type: application/json

{
    "customer_id": 5,
    "membership_id": 10,
    "domain": "example.com",
    "path": "/",
    "title": "My New Site",
    "template_id": 1,
    "type": "customer_owned"
}
```

### 3. Memberships API {#3-memberships-api}

**Base Route:** `/memberships`

**Mamoròna membership**
```http
POST /wu/v2/memberships
Content-Type: application/json

{
    "customer_id": 5,
    "plan_id": 3,
    "status": "active",
    "gateway": "stripe",
    "gateway_subscription_id": "sub_1234567890",
    "auto_renew": true
}
```

### 4. Products API {#4-products-api}

**Base Route:** `/products`

**Alao ny products rehetra**
```http
GET /wu/v2/products
```

### 5. Payments API {#5-payments-api}

**Base Route:** `/payments`

**Mamoròna payment**
```http
POST /wu/v2/payments
Content-Type: application/json

{
    "customer_id": 5,
    "membership_id": 10,
    "status": "completed",
    "gateway": "stripe",
    "gateway_payment_id": "pi_1234567890",
    "total": 29.99,
    "currency": "USD"
}
```

### 6. Domains API {#6-domains-api}

**Base Route:** `/domains`

**Ampifandraiso ny domain**
```http
POST /wu/v2/domains
Content-Type: application/json

{
    "domain": "custom-domain.com",
    "customer_id": 5,
    "primary_domain": 1,
    "stage": "domain-mapping"
}
```

## Endpoint fisoratana anarana {#registration-endpoint}

Ny endpoint `/register` dia manome fikorianan'ny checkout/fisoratana anarana feno:

```http
POST /wu/v2/register
Content-Type: application/json

{
    "customer": {
        "username": "newuser",
        "password": "securepass123",
        "email": "user@example.com"
    },
    "products": ["basic-plan"],
    "duration": 1,
    "duration_unit": "month",
    "auto_renew": true,
    "site": {
        "site_url": "mynewsite",
        "site_title": "My New Site",
        "template_id": 1
    },
    "payment": {
        "status": "completed"
    },
    "membership": {
        "status": "active"
    }
}
```

**Valiny:**
```json
{
    "customer": { ... },
    "membership": { ... },
    "payment": { ... },
    "site": { "id": 123 }
}
```

## Endpoints ho an'ny Tenant Mahaleo Tena {#sovereign-tenant-endpoints}

Ultimate Multisite: Multi-Tenancy 1.2.0 dia manampy fandrakofana REST ho an'ny tenant mahaleo tena ho an'ny fampidirana izay mamorona, manamarina, na manamarina tenants mitokana.

Miankina amin'ny fahaizan'ny host navela ny payload fangatahana marina, fa tokony hanantena ireto vondrona endpoint ireto ny fampidirana:

```http
POST /wu/v2/tenants/{site_id}/bootstrap
GET /wu/v2/tenants/{site_id}/migration-status
POST /wu/v2/tenants/{site_id}/verify
DELETE /wu/v2/tenants/{site_id}
```

Ampiasao ny endpoint bootstrap hanomanana ny rejisitry ny tenant, database, filesystem, ary toetry ny routing. Ampiasao ny endpoints sata fifindra-monina sy fanamarinana alohan'ny hamindrana ny fifamoivoizana famokarana. Ampiasao ny endpoint famafana ho an'ny fandravana mahaleo tena mba hanesorana ny credentials database amin'ny alalan'ny fikorianan'ny fanadiovan'ny addon.

Ny valin'ny sata fifindra-monina mahazatra dia ahitana:

```json
{
    "site_id": 123,
    "isolation_model": "sovereign",
    "database_host": "localhost",
    "verification": {
        "no_legacy": "passed",
        "sovereign_push": "passed",
        "tenant_users": "passed"
    },
    "ready": true
}
```

Raiso ho toy ny sakana alohan'ny fandefasana ny `ready: false`. Zahao ny antsipirian'ny fanamarinana, amboary ny fatoran'ny host database, queue, famoronana user, na olana routing, dia andramo indray ny fanamarinana.

## Valin-kafatra hadisoana {#error-responses}

```json
{
    "code": "wu_rest_invalid_parameter",
    "message": "Invalid parameter value",
    "data": {
        "status": 400,
        "params": {
            "email": "Invalid email format"
        }
    }
}
```

## Pagination sy fanivanana {#pagination-and-filtering}

**Query Parameters:**
```http
GET /wu/v2/customers?per_page=20&page=2&search=john&status=active
```

Masontsivana mahazatra:
- `per_page` - Zavatra isaky ny pejy (default: 20, max: 100)
- `page` - Laharana pejy
- `search` - Teny fikarohana
- `orderby` - Sehatra fandaharana
- `order` - Lalana fandaharana (asc/desc)
- `status` - Sivano araka ny sata
- `date_created` - Sivano araka ny elanelam-potoana daty
