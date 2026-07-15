---
title: REST API-oversigt
sidebar_position: 1
_i18n_hash: cabcc173f6a77e5de94e39fff19bc2fa
---
# REST API-reference

## Basiskonfiguration {#base-configuration}

**Base URL:** `{site_url}/wp-json/wu/v2/`
**Godkendelse:** API Key & Secret (HTTP Basic Auth eller URL-parametre)

## Godkendelse {#authentication}

### Aktivér API {#enable-api}
```php
// Enable API in Ultimate Multisite settings or programmatically
wu_save_setting('enable_api', true);
```

### Hent API-legitimationsoplysninger {#get-api-credentials}
```php
$api_key = wu_get_setting('api_key');
$api_secret = wu_get_setting('api_secret');
```

### Godkendelsesmetoder {#authentication-methods}

**HTTP Basic Auth (anbefalet):**
```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

**URL-parametre:**
```bash
curl "https://yoursite.com/wp-json/wu/v2/customers?api_key=your_key&api_secret=your_secret"
```

## Kerne-endpoints {#core-endpoints}

### 1. Kunde-API {#1-customers-api}

**Basisrute:** `/customers`

**Hent alle kunder**
```http
GET /wu/v2/customers
```

**Hent enkelt kunde**
```http
GET /wu/v2/customers/{id}
```

**Opret kunde**
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

**Opdater kunde**
```http
PUT /wu/v2/customers/{id}
Content-Type: application/json

{
    "vip": true,
    "extra_information": "VIP customer notes"
}
```

**Slet kunde**
```http
DELETE /wu/v2/customers/{id}
```

### 2. Sites API {#2-sites-api}

**Basisrute:** `/sites`

**Opret site**
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

**Basisrute:** `/memberships`

**Opret membership**
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

**Basisrute:** `/products`

**Hent alle products**
```http
GET /wu/v2/products
```

### 5. Payments API {#5-payments-api}

**Basisrute:** `/payments`

**Opret payment**
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

**Basisrute:** `/domains`

**Map domain**
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

## Registrerings-endpoint {#registration-endpoint}

`/register`-endpointet giver et komplet checkout-/registreringsflow:

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

**Svar:**
```json
{
    "customer": { ... },
    "membership": { ... },
    "payment": { ... },
    "site": { "id": 123 }
}
```

## Sovereign Tenant-endpoints {#sovereign-tenant-endpoints}

Ultimate Multisite: Multi-Tenancy 1.2.0 tilføjer sovereign tenant REST-dækning til integrationer, der provisionerer, inspicerer eller verificerer isolerede tenants.

Den præcise request-payload afhænger af den aktiverede host-kapabilitet, men integrationer bør forvente disse endpoint-grupper:

```http
POST /wu/v2/tenants/{site_id}/bootstrap
GET /wu/v2/tenants/{site_id}/migration-status
POST /wu/v2/tenants/{site_id}/verify
DELETE /wu/v2/tenants/{site_id}
```

Brug bootstrap-endpointet til at forberede tenant-registrering, database, filsystem og routing-tilstand. Brug endpointene til migrationsstatus og verifikation, før produktionstrafik skiftes. Brug slette-endpointet til sovereign nedtagning, så database-legitimationsoplysninger fjernes gennem addon-oprydningsflowet.

Typiske svar for migrationsstatus omfatter:

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

Behandl `ready: false` som en blokering før lancering. Tjek verifikationsdetaljerne, ret database-host-bindingen, køen, brugerprovisioneringen eller routing-problemet, og prøv derefter verifikation igen.

## Fejlsvar {#error-responses}

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

## Paginering og filtrering {#pagination-and-filtering}

**Forespørgselsparametre:**
```http
GET /wu/v2/customers?per_page=20&page=2&search=john&status=active
```

Almindelige parametre:
- `per_page` - Elementer pr. side (standard: 20, maks.: 100)
- `page` - Sidenummer
- `search` - Søgeterm
- `orderby` - Sorteringsfelt
- `order` - Sorteringsretning (asc/desc)
- `status` - Filtrér efter status
- `date_created` - Filtrér efter datointerval
