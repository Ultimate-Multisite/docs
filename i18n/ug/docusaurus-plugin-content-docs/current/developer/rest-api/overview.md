---
title: REST API ئومۇمىي چۈشەنچىسى
sidebar_position: 1
_i18n_hash: cabcc173f6a77e5de94e39fff19bc2fa
---
# REST API پايدىلانمىسى

## ئاساسىي سەپلىمە {#base-configuration}

**ئاساسىي URL:** `{site_url}/wp-json/wu/v2/`
**دەلىللەش:** API ئاچقۇچى ۋە مەخپىي كود (HTTP Basic Auth ياكى URL پارامېتىرلىرى)

## دەلىللەش {#authentication}

### API نى قوزغىتىش {#enable-api}
```php
// Enable API in Ultimate Multisite settings or programmatically
wu_save_setting('enable_api', true);
```

### API كىنىشكىلىرىنى ئېلىش {#get-api-credentials}
```php
$api_key = wu_get_setting('api_key');
$api_secret = wu_get_setting('api_secret');
```

### دەلىللەش ئۇسۇللىرى {#authentication-methods}

**HTTP Basic Auth (تەۋسىيە قىلىنىدۇ):**
```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

**URL پارامېتىرلىرى:**
```bash
curl "https://yoursite.com/wp-json/wu/v2/customers?api_key=your_key&api_secret=your_secret"
```

## يادرولۇق ئاخىرقى نۇقتىلار {#core-endpoints}

### 1. خېرىدارلار API {#1-customers-api}

**ئاساسىي يول:** `/customers`

**بارلىق خېرىدارلارنى ئېلىش**
```http
GET /wu/v2/customers
```

**يەككە خېرىدارنى ئېلىش**
```http
GET /wu/v2/customers/{id}
```

**خېرىدار قۇرۇش**
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

**خېرىدارنى يېڭىلاش**
```http
PUT /wu/v2/customers/{id}
Content-Type: application/json

{
    "vip": true,
    "extra_information": "VIP customer notes"
}
```

**خېرىدارنى ئۆچۈرۈش**
```http
DELETE /wu/v2/customers/{id}
```

### 2. تور بېكەتلەر API {#2-sites-api}

**ئاساسىي يول:** `/sites`

**تور بېكەت قۇرۇش**
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

### 3. ئەزالىقلار API {#3-memberships-api}

**ئاساسىي يول:** `/memberships`

**ئەزالىق قۇرۇش**
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

### 4. مەھسۇلاتلار API {#4-products-api}

**ئاساسىي يول:** `/products`

**بارلىق مەھسۇلاتلارنى ئېلىش**
```http
GET /wu/v2/products
```

### 5. چىقىملار API {#5-payments-api}

**ئاساسىي يول:** `/payments`

**چىقىم قۇرۇش**
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

### 6. دائىرە ناملىرى API {#6-domains-api}

**ئاساسىي يول:** `/domains`

**دائىرە نامىنى باغلاش**
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

## تىزىملىتىش ئاخىرقى نۇقتىسى {#registration-endpoint}

`/register` ئاخىرقى نۇقتىسى تولۇق چىقىم قىلىش/تىزىملىتىش ئېقىمىنى تەمىنلەيدۇ:

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

**جاۋاب:**
```json
{
    "customer": { ... },
    "membership": { ... },
    "payment": { ... },
    "site": { "id": 123 }
}
```

## مۇستەقىل ئىجارىدار ئاخىرقى نۇقتىلىرى {#sovereign-tenant-endpoints}

Ultimate Multisite: Multi-Tenancy 1.2.0 ئايرىم ئىجارىدارلارنى تەمىنلەيدىغان، تەكشۈرىدىغان ياكى دەلىللەيدىغان بىرلەشتۈرۈشلەر ئۈچۈن مۇستەقىل ئىجارىدار REST قاپلىمىسىنى قوشىدۇ.

ئېنىق تەلەپ يۈكى قوزغىتىلغان host ئىقتىدارىغا باغلىق، لېكىن بىرلەشتۈرۈشلەر تۆۋەندىكى ئاخىرقى نۇقتا گۇرۇپپىلىرىنى كۈتۈشى كېرەك:

```http
POST /wu/v2/tenants/{site_id}/bootstrap
GET /wu/v2/tenants/{site_id}/migration-status
POST /wu/v2/tenants/{site_id}/verify
DELETE /wu/v2/tenants/{site_id}
```

bootstrap ئاخىرقى نۇقتىسىنى ئىشلىتىپ ئىجارىدار تىزىملىكى، سانلىق مەلۇمات ئامبىرى، ھۆججەت سىستېمىسى ۋە يوللاش ھالىتىنى تەييارلاڭ. ئىشلەپچىقىرىش ئېقىمىنى ئالماشتۇرۇشتىن بۇرۇن كۆچۈرۈش ھالىتى ۋە دەلىللەش ئاخىرقى نۇقتىلىرىنى ئىشلىتىڭ. مۇستەقىل تازىلاش ئۈچۈن ئۆچۈرۈش ئاخىرقى نۇقتىسىنى ئىشلىتىڭ، شۇنداقتا سانلىق مەلۇمات ئامبىرى كىنىشكىلىرى addon تازىلاش ئېقىمى ئارقىلىق چىقىرىۋېتىلىدۇ.

تىپىك كۆچۈرۈش ھالىتى جاۋابلىرى تۆۋەندىكىلەرنى ئۆز ئىچىگە ئالىدۇ:

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

`ready: false` نى ئېلان قىلىشتىن بۇرۇنقى توسالغۇ دەپ قاراڭ. دەلىللەش تەپسىلاتلىرىنى تەكشۈرۈڭ، سانلىق مەلۇمات ئامبىرى host باغلىنىشى، قاتار، ئىشلەتكۈچى تەمىنلەش ياكى يوللاش مەسىلىسىنى تۈزىتىڭ، ئاندىن دەلىللەشنى قايتا سىناڭ.

## خاتالىق جاۋابلىرى {#error-responses}

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

## بەتلەش ۋە سۈزۈش {#pagination-and-filtering}

**سۈرۈشتۈرۈش پارامېتىرلىرى:**
```http
GET /wu/v2/customers?per_page=20&page=2&search=john&status=active
```

ئورتاق پارامېتىرلار:
- `per_page` - ھەر بەتتىكى تۈرلەر (كۆڭۈلدىكى: 20، ئەڭ كۆپ: 100)
- `page` - بەت نومۇرى
- `search` - ئىزدەش ئاتالغۇسى
- `orderby` - تەرتىپلەش بۆلىكى
- `order` - تەرتىپلەش يۆنىلىشى (asc/desc)
- `status` - ھالەت بويىچە سۈزۈش
- `date_created` - چېسلا دائىرىسى بويىچە سۈزۈش
