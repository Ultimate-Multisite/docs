---
title: Dulmarka REST API
sidebar_position: 1
_i18n_hash: cabcc173f6a77e5de94e39fff19bc2fa
---
# Tixraaca REST API

## Qaabeynta Aasaasiga ah

**URL-ka Aasaasiga ah:** `{site_url}/wp-json/wu/v2/`
**Xaqiijinta:** API Key & Sir (HTTP Basic Auth ama URL Parameters)

## Xaqiijinta

### Daar API
```php
// Enable API in Ultimate Multisite settings or programmatically
wu_save_setting('enable_api', true);
```

### Hel Aqoonsiyada API
```php
$api_key = wu_get_setting('api_key');
$api_secret = wu_get_setting('api_secret');
```

### Hababka Xaqiijinta

**HTTP Basic Auth (Lagu taliyay):**
```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

**URL Parameters:**
```bash
curl "https://yoursite.com/wp-json/wu/v2/customers?api_key=your_key&api_secret=your_secret"
```

## Baraha-dhamaadka Muhiimka ah

### 1. API-ga Macaamiisha

**Waddada Aasaasiga ah:** `/customers`

**Soo hel Dhammaan Macaamiisha**
```http
GET /wu/v2/customers
```

**Soo hel Macmiil Keli ah**
```http
GET /wu/v2/customers/{id}
```

**Abuur Macmiil**
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

**Cusboonaysii Macmiil**
```http
PUT /wu/v2/customers/{id}
Content-Type: application/json

{
    "vip": true,
    "extra_information": "VIP customer notes"
}
```

**Tirtir Macmiil**
```http
DELETE /wu/v2/customers/{id}
```

### 2. API-ga Site-yada

**Waddada Aasaasiga ah:** `/sites`

**Abuur Site**
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

### 3. API-ga Membership-yada

**Waddada Aasaasiga ah:** `/memberships`

**Abuur Membership**
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

### 4. API-ga Products

**Waddada Aasaasiga ah:** `/products`

**Soo hel Dhammaan Products**
```http
GET /wu/v2/products
```

### 5. API-ga Payments

**Waddada Aasaasiga ah:** `/payments`

**Abuur Payment**
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

### 6. API-ga Domains

**Waddada Aasaasiga ah:** `/domains`

**Map-garee Domain**
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

## Barta-dhamaadka Diiwaangelinta

Barta-dhamaadka `/register` waxay bixisaa socod checkout/diiwaangelin oo dhammeystiran:

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

**Jawaab:**
```json
{
    "customer": { ... },
    "membership": { ... },
    "payment": { ... },
    "site": { "id": 123 }
}
```

## Baraha-dhamaadka Kireystayaasha Madaxbannaan

Ultimate Multisite: Multi-Tenancy 1.2.0 waxay ku daraysaa daboolidda REST ee kireystayaasha madaxbannaan ee isku-xidhyada diyaariya, baara, ama xaqiijiya kireystayaal go'doonsan.

Culayska codsiga ee saxda ahi wuxuu ku xiran yahay awoodda host ee la daaray, laakiin isku-xidhyadu waa inay filaan kooxahan baraha-dhamaadka:

```http
POST /wu/v2/tenants/{site_id}/bootstrap
GET /wu/v2/tenants/{site_id}/migration-status
POST /wu/v2/tenants/{site_id}/verify
DELETE /wu/v2/tenants/{site_id}
```

Adeegso barta-dhamaadka bootstrap si aad u diyaarsato diiwaanka kireystaha, database-ka, nidaamka faylasha, iyo xaaladda routing-ka. Adeegso baraha-dhamaadka xaaladda migration-ka iyo xaqiijinta ka hor intaadan wareejin taraafikada production-ka. Adeegso barta-dhamaadka tirtiridda si loo sameeyo burburinta madaxbannaan si aqoonsiyada database-ka looga saaro socodka nadiifinta addon-ka.

Jawaabaha caadiga ah ee xaaladda migration-ka waxaa ka mid ah:

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

U qaado `ready: false` inuu yahay xannibaad ka hor bilaabista. Hubi faahfaahinta xaqiijinta, hagaaji isku-xidhka host-ka database-ka, queue-ga, diyaarinta isticmaalaha, ama arrinta routing-ka, ka dibna mar kale isku day xaqiijinta.

## Jawaabaha Khaladka

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

## Bogagayn iyo Shaandhayn

**Query Parameters:**
```http
GET /wu/v2/customers?per_page=20&page=2&search=john&status=active
```

Halbeegyada caadiga ah:
- `per_page` - Shayada bog kasta (default: 20, ugu badnaan: 100)
- `page` - Lambarka bogga
- `search` - Ereyga raadinta
- `orderby` - Field-ka kala-saaridda
- `order` - Jihada kala-saaridda (asc/desc)
- `status` - Ku shaandhee status
- `date_created` - Ku shaandhee xadka taariikhda
