---
title: Pangkalahatang-ideya ng REST API
sidebar_position: 1
_i18n_hash: cabcc173f6a77e5de94e39fff19bc2fa
---
# Sanggunian ng REST API {#rest-api-reference}

## Batayang Konfigurasyon {#base-configuration}

**Base URL:** `{site_url}/wp-json/wu/v2/`
**Pagpapatunay:** API Key at Secret (HTTP Basic Auth o Mga Parameter ng URL)

## Pagpapatunay {#authentication}

### Paganahin ang API {#enable-api}
```php
// Enable API in Ultimate Multisite settings or programmatically
wu_save_setting('enable_api', true);
```

### Kunin ang Mga Kredensyal ng API {#get-api-credentials}
```php
$api_key = wu_get_setting('api_key');
$api_secret = wu_get_setting('api_secret');
```

### Mga Paraan ng Pagpapatunay {#authentication-methods}

**HTTP Basic Auth (Inirerekomenda):**
```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

**Mga Parameter ng URL:**
```bash
curl "https://yoursite.com/wp-json/wu/v2/customers?api_key=your_key&api_secret=your_secret"
```

## Mga Pangunahing Dulong Punto {#core-endpoints}

### 1. API ng Mga Kostumer {#1-customers-api}

**Batayang Ruta:** `/customers`

**Kunin ang Lahat ng Kostumer**
```http
GET /wu/v2/customers
```

**Kunin ang Isang Kostumer**
```http
GET /wu/v2/customers/{id}
```

**Gumawa ng Kostumer**
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

**I-update ang Kostumer**
```http
PUT /wu/v2/customers/{id}
Content-Type: application/json

{
    "vip": true,
    "extra_information": "VIP customer notes"
}
```

**Tanggalin ang Kostumer**
```http
DELETE /wu/v2/customers/{id}
```

### 2. API ng Mga Website {#2-sites-api}

**Batayang Ruta:** `/sites`

**Gumawa ng Website**
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

### 3. API ng Mga Pagiging Miyembro {#3-memberships-api}

**Batayang Ruta:** `/memberships`

**Gumawa ng Pagiging Miyembro**
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

### 4. API ng Mga Produkto {#4-products-api}

**Batayang Ruta:** `/products`

**Kunin ang Lahat ng Produkto**
```http
GET /wu/v2/products
```

### 5. API ng Mga Pagbabayad {#5-payments-api}

**Batayang Ruta:** `/payments`

**Gumawa ng Pagbabayad**
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

### 6. API ng Mga Dominyo {#6-domains-api}

**Batayang Ruta:** `/domains`

**I-map ang Dominyo**
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

## Dulong Punto ng Pagpaparehistro {#registration-endpoint}

Nagbibigay ang dulong punto na `/register` ng kumpletong daloy ng checkout/pagpaparehistro:

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

**Tugon:**
```json
{
    "customer": { ... },
    "membership": { ... },
    "payment": { ... },
    "site": { "id": 123 }
}
```

## Mga Dulong Punto ng Sovereign Tenant {#sovereign-tenant-endpoints}

Nagdaragdag ang Ultimate Multisite: Multi-Tenancy 1.2.0 ng REST coverage para sa sovereign tenant para sa mga integrasyong nagpo-provision, nagsusuri, o nagbeberipika ng mga nakahiwalay na tenant.

Nakadepende ang eksaktong payload ng kahilingan sa naka-enable na kakayahan ng host, ngunit dapat asahan ng mga integrasyon ang mga grupong ito ng dulong punto:

```http
POST /wu/v2/tenants/{site_id}/bootstrap
GET /wu/v2/tenants/{site_id}/migration-status
POST /wu/v2/tenants/{site_id}/verify
DELETE /wu/v2/tenants/{site_id}
```

Gamitin ang dulong punto ng bootstrap upang ihanda ang registry ng tenant, database, filesystem, at routing state. Gamitin ang mga dulong punto ng katayuan ng migrasyon at beripikasyon bago ilipat ang production traffic. Gamitin ang dulong punto ng pagtanggal para sa sovereign teardown upang maalis ang mga kredensyal ng database sa pamamagitan ng daloy ng paglilinis ng addon.

Karaniwang kasama sa mga tugon ng katayuan ng migrasyon ang:

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

Ituring ang `ready: false` bilang hadlang bago ang paglulunsad. Suriin ang mga detalye ng beripikasyon, ayusin ang database host binding, queue, user provisioning, o isyu sa routing, pagkatapos ay ulitin ang beripikasyon.

## Mga Tugon ng Error {#error-responses}

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

## Pagination at Pag-filter {#pagination-and-filtering}

**Mga Parameter ng Query:**
```http
GET /wu/v2/customers?per_page=20&page=2&search=john&status=active
```

Mga karaniwang parameter:
- `per_page` - Mga item bawat pahina (default: 20, max: 100)
- `page` - Numero ng pahina
- `search` - Termino sa paghahanap
- `orderby` - Field ng pag-uuri
- `order` - Direksiyon ng pag-uuri (asc/desc)
- `status` - I-filter ayon sa status
- `date_created` - I-filter ayon sa saklaw ng petsa
