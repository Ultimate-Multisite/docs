---
title: REST API Kev Saib Dav
sidebar_position: 1
_i18n_hash: cabcc173f6a77e5de94e39fff19bc2fa
---
# Phau ntawv siv REST API

## Kev teeb tsa hauv paus {#base-configuration}

**Base URL:** `{site_url}/wp-json/wu/v2/`
**Kev lees paub tus kheej:** API Key & Secret (HTTP Basic Auth lossis URL Parameters)

## Kev lees paub tus kheej {#authentication}

### Qhib API {#enable-api}
```php
// Enable API in Ultimate Multisite settings or programmatically
wu_save_setting('enable_api', true);
```

### Tau txais API Credentials {#get-api-credentials}
```php
$api_key = wu_get_setting('api_key');
$api_secret = wu_get_setting('api_secret');
```

### Cov kev lees paub tus kheej {#authentication-methods}

**HTTP Basic Auth (Pom zoo):**
```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

**URL Parameters:**
```bash
curl "https://yoursite.com/wp-json/wu/v2/customers?api_key=your_key&api_secret=your_secret"
```

## Cov endpoint tseem ceeb {#core-endpoints}

### 1. Customers API {#1-customers-api}

**Txoj kev hauv paus:** `/customers`

**Tau txais txhua tus customer**
```http
GET /wu/v2/customers
```

**Tau txais ib tus customer**
```http
GET /wu/v2/customers/{id}
```

**Tsim customer**
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

**Hloov kho customer**
```http
PUT /wu/v2/customers/{id}
Content-Type: application/json

{
    "vip": true,
    "extra_information": "VIP customer notes"
}
```

**Rho tawm customer**
```http
DELETE /wu/v2/customers/{id}
```

### 2. Sites API {#2-sites-api}

**Txoj kev hauv paus:** `/sites`

**Tsim site**
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

**Txoj kev hauv paus:** `/memberships`

**Tsim membership**
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

**Txoj kev hauv paus:** `/products`

**Tau txais txhua yam product**
```http
GET /wu/v2/products
```

### 5. Payments API {#5-payments-api}

**Txoj kev hauv paus:** `/payments`

**Tsim payment**
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

**Txoj kev hauv paus:** `/domains`

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

## Endpoint rau kev sau npe {#registration-endpoint}

Endpoint `/register` muab ib qho checkout/kev sau npe tiav hlo:

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

## Cov endpoint rau Sovereign Tenant {#sovereign-tenant-endpoints}

Ultimate Multisite: Multi-Tenancy 1.2.0 ntxiv sovereign tenant REST coverage rau cov kev sib txuas uas provision, tshuaj xyuas, lossis verify cov tenant uas cais nyias.

Request payload tiag nyob ntawm host capability uas qhib lawm, tab sis cov kev sib txuas yuav tsum cia siab tias muaj cov endpoint group no:

```http
POST /wu/v2/tenants/{site_id}/bootstrap
GET /wu/v2/tenants/{site_id}/migration-status
POST /wu/v2/tenants/{site_id}/verify
DELETE /wu/v2/tenants/{site_id}
```

Siv bootstrap endpoint los npaj tenant registry, database, filesystem, thiab routing state. Siv migration status thiab verification endpoints ua ntej hloov production traffic. Siv deletion endpoint rau sovereign teardown kom database credentials raug tshem tawm dhau ntawm addon cleanup flow.

Cov migration status responses uas ib txwm muaj xws li:

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

Saib `ready: false` ua ib yam uas thaiv ua ntej launch. Tshuaj xyuas verification details, kho database host binding, queue, user provisioning, lossis routing issue, ces sim verification dua.

## Error Responses {#error-responses}

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

## Pagination thiab Filtering {#pagination-and-filtering}

**Query Parameters:**
```http
GET /wu/v2/customers?per_page=20&page=2&search=john&status=active
```

Cov parameter uas siv ntau:
- `per_page` - Cov khoom ib nplooj (default: 20, max: 100)
- `page` - Tus lej nplooj
- `search` - Lo lus tshawb nrhiav
- `orderby` - Field rau sort
- `order` - Kev sort nce los nqis (asc/desc)
- `status` - Lim raws status
- `date_created` - Lim raws date range
