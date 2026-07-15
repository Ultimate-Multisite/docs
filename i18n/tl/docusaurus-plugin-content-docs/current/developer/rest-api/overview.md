---
title: Pangkalahatang-ideya ng REST API
sidebar_position: 1
_i18n_hash: cabcc173f6a77e5de94e39fff19bc2fa
---
# Sanggunian ng REST API

## Batayang Configuration {#base-configuration}

**Base URL:** `{site_url}/wp-json/wu/v2/`
**Authentication:** API Key & Secret (HTTP Basic Auth o URL Parameters)

## Authentication {#authentication}

### Paganahin ang API {#enable-api}
```php
// Enable API in Ultimate Multisite settings or programmatically
wu_save_setting('enable_api', true);
```

### Kunin ang API Credentials {#get-api-credentials}
```php
$api_key = wu_get_setting('api_key');
$api_secret = wu_get_setting('api_secret');
```

### Mga Paraan ng Authentication {#authentication-methods}

**HTTP Basic Auth (Inirerekomenda):**
```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

**URL Parameters:**
```bash
curl "https://yoursite.com/wp-json/wu/v2/customers?api_key=your_key&api_secret=your_secret"
```

## Mga Pangunahing Endpoint {#core-endpoints}

### 1. Customers API {#1-customers-api}

**Base Route:** `/customers`

**Kunin ang Lahat ng Customer**
```http
GET /wu/v2/customers
```

**Kunin ang Isang Customer**
```http
GET /wu/v2/customers/{id}
```

**Gumawa ng Customer**
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

**I-update ang Customer**
```http
PUT /wu/v2/customers/{id}
Content-Type: application/json

{
    "vip": true,
    "extra_information": "VIP customer notes"
}
```

**Tanggalin ang Customer**
```http
DELETE /wu/v2/customers/{id}
```

### 2. Sites API {#2-sites-api}

**Base Route:** `/sites`

**Gumawa ng Site**
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

**Gumawa ng Membership**
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

**Kunin ang Lahat ng Product**
```http
GET /wu/v2/products
```

### 5. Payments API {#5-payments-api}

**Base Route:** `/payments`

**Gumawa ng Payment**
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

**I-map ang Domain**
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

## Endpoint ng Registration {#registration-endpoint}

Ang endpoint na `/register` ay nagbibigay ng kumpletong daloy ng checkout/registration:

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

**Response:**
```json
{
    "customer": { ... },
    "membership": { ... },
    "payment": { ... },
    "site": { "id": 123 }
}
```

## Mga Endpoint ng Sovereign Tenant {#sovereign-tenant-endpoints}

Ang Ultimate Multisite: Multi-Tenancy 1.2.0 ay nagdaragdag ng sovereign tenant REST coverage para sa mga integration na nagpo-provision, nagsusuri, o nagbe-verify ng mga nakahiwalay na tenant.

Ang eksaktong request payload ay nakadepende sa naka-enable na kakayahan ng host, ngunit dapat asahan ng mga integration ang mga pangkat ng endpoint na ito:

```http
POST /wu/v2/tenants/{site_id}/bootstrap
GET /wu/v2/tenants/{site_id}/migration-status
POST /wu/v2/tenants/{site_id}/verify
DELETE /wu/v2/tenants/{site_id}
```

Gamitin ang bootstrap endpoint upang ihanda ang tenant registry, database, filesystem, at routing state. Gamitin ang migration status at verification endpoints bago ilipat ang production traffic. Gamitin ang deletion endpoint para sa sovereign teardown upang maalis ang database credentials sa pamamagitan ng addon cleanup flow.

Karaniwang kasama sa mga migration status response ang:

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

Ituring ang `ready: false` bilang pre-launch blocker. Suriin ang mga detalye ng verification, ayusin ang database host binding, queue, user provisioning, o routing issue, pagkatapos ay subukang muli ang verification.

## Mga Error Response {#error-responses}

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

## Pagination at Filtering {#pagination-and-filtering}

**Query Parameters:**
```http
GET /wu/v2/customers?per_page=20&page=2&search=john&status=active
```

Mga karaniwang parameter:
- `per_page` - Mga item bawat pahina (default: 20, max: 100)
- `page` - Numero ng pahina
- `search` - Termino sa paghahanap
- `orderby` - Field ng pag-uuri
- `order` - Direksyon ng pag-uuri (asc/desc)
- `status` - I-filter ayon sa status
- `date_created` - I-filter ayon sa saklaw ng petsa
