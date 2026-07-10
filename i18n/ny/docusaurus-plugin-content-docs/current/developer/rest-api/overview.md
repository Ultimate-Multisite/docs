---
title: Chidule cha REST API
sidebar_position: 1
_i18n_hash: cabcc173f6a77e5de94e39fff19bc2fa
---
# Buku la REST API {#rest-api-reference}

## Kasinthidwe Koyambira {#base-configuration}

**Base URL:** `{site_url}/wp-json/wu/v2/`
**Kutsimikizira:** API Key & Secret (HTTP Basic Auth kapena URL Parameters)

## Kutsimikizira {#authentication}

### Yambitsani API {#enable-api}
```php
// Enable API in Ultimate Multisite settings or programmatically
wu_save_setting('enable_api', true);
```

### Pezani Zizindikiro za API {#get-api-credentials}
```php
$api_key = wu_get_setting('api_key');
$api_secret = wu_get_setting('api_secret');
```

### Njira Zotsimikizira {#authentication-methods}

**HTTP Basic Auth (Yolimbikitsidwa):**
```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

**URL Parameters:**
```bash
curl "https://yoursite.com/wp-json/wu/v2/customers?api_key=your_key&api_secret=your_secret"
```

## Ma Endpoint Ofunika {#core-endpoints}

### 1. API ya Makasitomala {#1-customers-api}

**Base Route:** `/customers`

**Pezani Makasitomala Onse**
```http
GET /wu/v2/customers
```

**Pezani Kasitomala Mmodzi**
```http
GET /wu/v2/customers/{id}
```

**Pangani Kasitomala**
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

**Sinthani Kasitomala**
```http
PUT /wu/v2/customers/{id}
Content-Type: application/json

{
    "vip": true,
    "extra_information": "VIP customer notes"
}
```

**Chotsani Kasitomala**
```http
DELETE /wu/v2/customers/{id}
```

### 2. API ya Masite {#2-sites-api}

**Base Route:** `/sites`

**Pangani Site**
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

### 3. API ya Umembala {#3-memberships-api}

**Base Route:** `/memberships`

**Pangani Umembala**
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

### 4. API ya Zogulitsa {#4-products-api}

**Base Route:** `/products`

**Pezani Zogulitsa Zonse**
```http
GET /wu/v2/products
```

### 5. API ya Malipiro {#5-payments-api}

**Base Route:** `/payments`

**Pangani Malipiro**
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

### 6. API ya Ma Domain {#6-domains-api}

**Base Route:** `/domains`

**Lumikizani Domain**
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

## Endpoint Yolembetsera {#registration-endpoint}

Endpoint ya `/register` imapereka njira yonse ya checkout/kulembetsa:

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

**Yankho:**
```json
{
    "customer": { ... },
    "membership": { ... },
    "payment": { ... },
    "site": { "id": 123 }
}
```

## Ma Endpoint a Sovereign Tenant {#sovereign-tenant-endpoints}

Ultimate Multisite: Multi-Tenancy 1.2.0 imawonjezera kuphimba kwa REST kwa sovereign tenant kwa ma integration omwe amapereka, kufufuza, kapena kutsimikizira ma tenant odzipatula.

Payload yeniyeni ya pempho imadalira kuthekera kwa host komwe kwayatsidwa, koma ma integration ayenera kuyembekezera magulu a endpoint awa:

```http
POST /wu/v2/tenants/{site_id}/bootstrap
GET /wu/v2/tenants/{site_id}/migration-status
POST /wu/v2/tenants/{site_id}/verify
DELETE /wu/v2/tenants/{site_id}
```

Gwiritsani ntchito bootstrap endpoint kukonzekera registry ya tenant, database, filesystem, ndi routing state. Gwiritsani ntchito ma endpoint a migration status ndi verification musanasinthe production traffic. Gwiritsani ntchito deletion endpoint pochotsa sovereign kuti database credentials zichotsedwe kudzera mu addon cleanup flow.

Mayankho wamba a migration status amaphatikizapo:

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

Tengani `ready: false` ngati chotchinga chisanayambitsidwe. Onani tsatanetsatane wa verification, konza database host binding, queue, user provisioning, kapena routing issue, kenako yesaninso verification.

## Mayankho a Zolakwika {#error-responses}

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

## Pagination ndi Filtering {#pagination-and-filtering}

**Query Parameters:**
```http
GET /wu/v2/customers?per_page=20&page=2&search=john&status=active
```

Ma parameter wamba:
- `per_page` - Zinthu pa tsamba (default: 20, max: 100)
- `page` - Nambala ya tsamba
- `search` - Mawu osakira
- `orderby` - Field yosanjira
- `order` - Direction yosanjira (asc/desc)
- `status` - Sefa ndi status
- `date_created` - Sefa ndi date range
