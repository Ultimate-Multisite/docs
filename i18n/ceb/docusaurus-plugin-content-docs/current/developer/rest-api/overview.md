---
title: Kinatibuk-ang Pagtan-aw sa REST API
sidebar_position: 1
_i18n_hash: cabcc173f6a77e5de94e39fff19bc2fa
---
# Reperensiya sa REST API

## Pangunang Konpigurasyon {#base-configuration}

**Base URL:** `{site_url}/wp-json/wu/v2/`
**Authentication:** API Key & Secret (HTTP Basic Auth o URL Parameters)

## Authentication {#authentication}

### I-enable ang API {#enable-api}
```php
// Enable API in Ultimate Multisite settings or programmatically
wu_save_setting('enable_api', true);
```

### Kuhaa ang mga API Credential {#get-api-credentials}
```php
$api_key = wu_get_setting('api_key');
$api_secret = wu_get_setting('api_secret');
```

### Mga Pamaagi sa Authentication {#authentication-methods}

**HTTP Basic Auth (Girekomenda):**
```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

**URL Parameters:**
```bash
curl "https://yoursite.com/wp-json/wu/v2/customers?api_key=your_key&api_secret=your_secret"
```

## Pangunang mga Katapusang Punto {#core-endpoints}

### 1. API sa mga Kustomer {#1-customers-api}

**Pangunang Ruta:** `/customers`

**Kuhaa ang Tanang Kustomer**
```http
GET /wu/v2/customers
```

**Kuhaa ang Usa ka Kustomer**
```http
GET /wu/v2/customers/{id}
```

**Paghimo og Kustomer**
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

**Pag-update og Kustomer**
```http
PUT /wu/v2/customers/{id}
Content-Type: application/json

{
    "vip": true,
    "extra_information": "VIP customer notes"
}
```

**Pagtangtang og Kustomer**
```http
DELETE /wu/v2/customers/{id}
```

### 2. API sa mga Websayt {#2-sites-api}

**Pangunang Ruta:** `/sites`

**Paghimo og Websayt**
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

### 3. API sa mga Membership {#3-memberships-api}

**Pangunang Ruta:** `/memberships`

**Paghimo og Membership**
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

### 4. API sa mga Produkto {#4-products-api}

**Pangunang Ruta:** `/products`

**Kuhaa ang Tanang Produkto**
```http
GET /wu/v2/products
```

### 5. API sa mga Bayad {#5-payments-api}

**Pangunang Ruta:** `/payments`

**Paghimo og Bayad**
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

### 6. API sa mga Domain {#6-domains-api}

**Pangunang Ruta:** `/domains`

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

## Katapusang Punto sa Pagparehistro {#registration-endpoint}

Ang katapusang punto nga `/register` naghatag og kompleto nga dagan sa checkout/pagparehistro:

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

**Tubag:**
```json
{
    "customer": { ... },
    "membership": { ... },
    "payment": { ... },
    "site": { "id": 123 }
}
```

## Mga Katapusang Punto sa Sovereign Tenant {#sovereign-tenant-endpoints}

Ang Ultimate Multisite: Multi-Tenancy 1.2.0 nagdugang og sovereign tenant REST coverage alang sa mga integration nga nag-provision, nagsusi, o nag-verify sa mga isolated tenant.

Ang eksaktong payload sa hangyo nagdepende sa gi-enable nga host capability, apan ang mga integration kinahanglan magdahom niining mga grupo sa katapusang punto:

```http
POST /wu/v2/tenants/{site_id}/bootstrap
GET /wu/v2/tenants/{site_id}/migration-status
POST /wu/v2/tenants/{site_id}/verify
DELETE /wu/v2/tenants/{site_id}
```

Gamita ang bootstrap endpoint aron maandam ang tenant registry, database, filesystem, ug kahimtang sa routing. Gamita ang migration status ug verification endpoints sa dili pa ibalhin ang production traffic. Gamita ang deletion endpoint alang sa sovereign teardown aron ang database credentials matangtang pinaagi sa addon cleanup flow.

Ang kasagarang mga tubag sa migration status naglakip sa:

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

Tagda ang `ready: false` isip usa ka pre-launch blocker. Susiha ang mga detalye sa verification, ayuhon ang database host binding, queue, user provisioning, o isyu sa routing, unya sulayi pag-usab ang verification.

## Mga Tubag sa Sayop {#error-responses}

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

## Pagination ug Filtering {#pagination-and-filtering}

**Mga Parameter sa Query:**
```http
GET /wu/v2/customers?per_page=20&page=2&search=john&status=active
```

Kasagarang mga parameter:
- `per_page` - Mga item kada panid (default: 20, max: 100)
- `page` - Numero sa panid
- `search` - Termino sa pagpangita
- `orderby` - Field sa paghan-ay
- `order` - Direksyon sa paghan-ay (asc/desc)
- `status` - Salaa pinaagi sa status
- `date_created` - Salaa pinaagi sa range sa petsa
