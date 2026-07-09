---
title: Trosolwg REST API
sidebar_position: 1
_i18n_hash: cabcc173f6a77e5de94e39fff19bc2fa
---
# Cyfeirnod REST API

## Ffurfweddiad Sylfaenol

**URL Sylfaenol:** `{site_url}/wp-json/wu/v2/`
**Dilysu:** API Key a Secret (HTTP Basic Auth neu Baramedrau URL)

## Dilysu

### Galluogi API
```php
// Enable API in Ultimate Multisite settings or programmatically
wu_save_setting('enable_api', true);
```

### Cael Manylion Dilysu API
```php
$api_key = wu_get_setting('api_key');
$api_secret = wu_get_setting('api_secret');
```

### Dulliau Dilysu

**HTTP Basic Auth (Argymhellir):**
```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

**Paramedrau URL:**
```bash
curl "https://yoursite.com/wp-json/wu/v2/customers?api_key=your_key&api_secret=your_secret"
```

## Terfynbwyntiau Craidd

### 1. API Cwsmeriaid

**Llwybr Sylfaenol:** `/customers`

**Cael Pob Cwsmer**
```http
GET /wu/v2/customers
```

**Cael Cwsmer Sengl**
```http
GET /wu/v2/customers/{id}
```

**Creu Cwsmer**
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

**Diweddaru Cwsmer**
```http
PUT /wu/v2/customers/{id}
Content-Type: application/json

{
    "vip": true,
    "extra_information": "VIP customer notes"
}
```

**Dileu Cwsmer**
```http
DELETE /wu/v2/customers/{id}
```

### 2. API Gwefannau

**Llwybr Sylfaenol:** `/sites`

**Creu Gwefan**
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

### 3. API Aelodaethau

**Llwybr Sylfaenol:** `/memberships`

**Creu Aelodaeth**
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

### 4. API Cynhyrchion

**Llwybr Sylfaenol:** `/products`

**Cael Pob Cynnyrch**
```http
GET /wu/v2/products
```

### 5. API Taliadau

**Llwybr Sylfaenol:** `/payments`

**Creu Taliad**
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

### 6. API Parthau

**Llwybr Sylfaenol:** `/domains`

**Mapio Parth**
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

## Terfynbwynt Cofrestru

Mae’r terfynbwynt `/register` yn darparu llif talu/cofrestru cyflawn:

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

**Ymateb:**
```json
{
    "customer": { ... },
    "membership": { ... },
    "payment": { ... },
    "site": { "id": 123 }
}
```

## Terfynbwyntiau Tenantiaid Sofran

Mae Ultimate Multisite: Multi-Tenancy 1.2.0 yn ychwanegu cwmpas REST i denantiaid sofran ar gyfer integreiddiadau sy’n darparu, archwilio, neu wirio tenantiaid ynysig.

Mae union lwyth y cais yn dibynnu ar allu’r gwesteiwr sydd wedi’i alluogi, ond dylai integreiddiadau ddisgwyl y grwpiau terfynbwynt hyn:

```http
POST /wu/v2/tenants/{site_id}/bootstrap
GET /wu/v2/tenants/{site_id}/migration-status
POST /wu/v2/tenants/{site_id}/verify
DELETE /wu/v2/tenants/{site_id}
```

Defnyddiwch y terfynbwynt bootstrap i baratoi cyflwr cofrestrfa tenantiaid, cronfa ddata, system ffeiliau, a llwybro. Defnyddiwch derfynbwyntiau statws mudo a gwirio cyn newid traffig cynhyrchu. Defnyddiwch y terfynbwynt dileu ar gyfer dymchwel sofran fel bod manylion mynediad y gronfa ddata yn cael eu tynnu drwy lif glanhau’r addon.

Mae ymatebion statws mudo nodweddiadol yn cynnwys:

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

Triniwch `ready: false` fel rhwystr cyn lansio. Gwiriwch fanylion y gwirio, trwsiwch rwymiad gwesteiwr y gronfa ddata, y ciw, darparu defnyddwyr, neu’r broblem llwybro, yna ailgeisiwch wirio.

## Ymatebion Gwall

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

## Tudaleniad a Hidlo

**Paramedrau Ymholiad:**
```http
GET /wu/v2/customers?per_page=20&page=2&search=john&status=active
```

Paramedrau cyffredin:
- `per_page` - Eitemau fesul tudalen (rhagosodiad: 20, uchafswm: 100)
- `page` - Rhif tudalen
- `search` - Term chwilio
- `orderby` - Maes didoli
- `order` - Cyfeiriad didoli (asc/desc)
- `status` - Hidlo yn ôl statws
- `date_created` - Hidlo yn ôl ystod dyddiadau
