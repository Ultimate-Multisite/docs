---
title: Pfupiso yeREST API
sidebar_position: 1
_i18n_hash: cabcc173f6a77e5de94e39fff19bc2fa
---
# REST API Chirevo

## Kurongwa kweHwaro

**Base URL:** `{site_url}/wp-json/wu/v2/`
**Authentication:** API Key & Secret (HTTP Basic Auth kana URL Parameters)

## Authentication

### Gonesa API
```php
// Enable API in Ultimate Multisite settings or programmatically
wu_save_setting('enable_api', true);
```

### Tora API Credentials
```php
$api_key = wu_get_setting('api_key');
$api_secret = wu_get_setting('api_secret');
```

### Nzira dzeAuthentication

**HTTP Basic Auth (Inokurudzirwa):**
```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

**URL Parameters:**
```bash
curl "https://yoursite.com/wp-json/wu/v2/customers?api_key=your_key&api_secret=your_secret"
```

## MaEndpoint Makuru

### 1. Customers API

**Base Route:** `/customers`

**Tora Customers Vese**
```http
GET /wu/v2/customers
```

**Tora Customer Mumwe**
```http
GET /wu/v2/customers/{id}
```

**Gadzira Customer**
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

**Gadzirisa Customer**
```http
PUT /wu/v2/customers/{id}
Content-Type: application/json

{
    "vip": true,
    "extra_information": "VIP customer notes"
}
```

**Dzima Customer**
```http
DELETE /wu/v2/customers/{id}
```

### 2. Sites API

**Base Route:** `/sites`

**Gadzira site**
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

### 3. Memberships API

**Base Route:** `/memberships`

**Gadzira membership**
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

### 4. Products API

**Base Route:** `/products`

**Tora products Dzese**
```http
GET /wu/v2/products
```

### 5. Payments API

**Base Route:** `/payments`

**Gadzira payment**
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

### 6. Domains API

**Base Route:** `/domains`

**Batanidza Domain**
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

## Registration Endpoint

Endpoint ye`/register` inopa kuyerera kwakazara kwecheckout/registration:

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

**Mhinduro:**
```json
{
    "customer": { ... },
    "membership": { ... },
    "payment": { ... },
    "site": { "id": 123 }
}
```

## MaEndpoint eSovereign Tenant

Ultimate Multisite: Multi-Tenancy 1.2.0 inowedzera REST coverage ye sovereign tenant kune integrations dzinogadzira, kuongorora, kana kusimbisa tenants dzakazvimirira.

Request payload chaiyo inoenderana nehost capability yakagoneswa, asi integrations dzinofanira kutarisira mapoka emaendpoint aya:

```http
POST /wu/v2/tenants/{site_id}/bootstrap
GET /wu/v2/tenants/{site_id}/migration-status
POST /wu/v2/tenants/{site_id}/verify
DELETE /wu/v2/tenants/{site_id}
```

Shandisa bootstrap endpoint kugadzirira tenant registry, database, filesystem, uye mamiriro e routing. Shandisa migration status nemaendpoint ekusimbisa usati wachinja traffic yeproduction. Shandisa deletion endpoint pakubvisa sovereign kuitira kuti database credentials dzibviswe kuburikidza neaddon cleanup flow.

Mhinduro dzakajairika dze migration status dzinosanganisira:

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

Tora `ready: false` sechinhu chinovhara pre-launch. Tarisa verification details, gadzirisa database host binding, queue, user provisioning, kana routing issue, wobva waedza verification zvakare.

## Mhinduro dzeError

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

## Pagination uye Filtering

**Query Parameters:**
```http
GET /wu/v2/customers?per_page=20&page=2&search=john&status=active
```

Maparameter akajairika:
- `per_page` - Zvinhu papeji (default: 20, max: 100)
- `page` - Nhamba yepeji
- `search` - Izwi rekutsvaga
- `orderby` - Munda wekuronga
- `order` - Direction yekuronga (asc/desc)
- `status` - Sefa ne status
- `date_created` - Sefa ne date range
