---
title: Akopọ REST API
sidebar_position: 1
_i18n_hash: cabcc173f6a77e5de94e39fff19bc2fa
---
# Ìtọ́kasí REST API

## Ìṣètò Ìpìlẹ̀ {#base-configuration}

**URL Ìpìlẹ̀:** `{site_url}/wp-json/wu/v2/`
**Ìjẹ́rìísí:** Bọtini API & Aṣírí (HTTP Basic Auth tàbí Parameters URL)

## Ìjẹ́rìísí {#authentication}

### Mú API ṣiṣẹ́ {#enable-api}
```php
// Enable API in Ultimate Multisite settings or programmatically
wu_save_setting('enable_api', true);
```

### Gba Àwọn Ẹ̀rí API {#get-api-credentials}
```php
$api_key = wu_get_setting('api_key');
$api_secret = wu_get_setting('api_secret');
```

### Àwọn Ọ̀nà Ìjẹ́rìísí {#authentication-methods}

**HTTP Basic Auth (A ṣe àbá):**
```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

**Parameters URL:**
```bash
curl "https://yoursite.com/wp-json/wu/v2/customers?api_key=your_key&api_secret=your_secret"
```

## Àwọn Ojuami Ìparí Pàtàkì {#core-endpoints}

### 1. API Àwọn Oníbàárà {#1-customers-api}

**Ọ̀nà Ìpìlẹ̀:** `/customers`

**Gba Gbogbo Àwọn Oníbàárà**
```http
GET /wu/v2/customers
```

**Gba Oníbàárà Kan Ṣoṣo**
```http
GET /wu/v2/customers/{id}
```

**Ṣẹ̀dá Oníbàárà**
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

**Ṣe Àfikún Oníbàárà**
```http
PUT /wu/v2/customers/{id}
Content-Type: application/json

{
    "vip": true,
    "extra_information": "VIP customer notes"
}
```

**Pa Oníbàárà Rẹ́**
```http
DELETE /wu/v2/customers/{id}
```

### 2. API Àwọn Ojúlé {#2-sites-api}

**Ọ̀nà Ìpìlẹ̀:** `/sites`

**Ṣẹ̀dá Ojúlé**
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

### 3. API Àwọn Ọmọ ẹgbẹ́ {#3-memberships-api}

**Ọ̀nà Ìpìlẹ̀:** `/memberships`

**Ṣẹ̀dá Ọmọ ẹgbẹ́**
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

### 4. API Àwọn Ọjà {#4-products-api}

**Ọ̀nà Ìpìlẹ̀:** `/products`

**Gba Gbogbo Àwọn Ọjà**
```http
GET /wu/v2/products
```

### 5. API Àwọn Ìsanwó {#5-payments-api}

**Ọ̀nà Ìpìlẹ̀:** `/payments`

**Ṣẹ̀dá Ìsanwó**
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

### 6. API Àwọn Domain {#6-domains-api}

**Ọ̀nà Ìpìlẹ̀:** `/domains`

**So Domain pọ̀**
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

## Ojuami Ìparí Ìforúkọsílẹ̀ {#registration-endpoint}

Ojuami ìparí `/register` ń pèsè checkout/ìforúkọsílẹ̀ tó pé:

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

**Ìdáhùn:**
```json
{
    "customer": { ... },
    "membership": { ... },
    "payment": { ... },
    "site": { "id": 123 }
}
```

## Àwọn Ojuami Ìparí Ayálégbé Aláṣẹ-ara {#sovereign-tenant-endpoints}

Ultimate Multisite: Ọ̀pọ̀-Ayálégbé 1.2.0 ṣàfikún ìbòjúmu REST fún ayálégbé aláṣẹ-ara fún àwọn ìṣepọ̀ tó ń pèsè, ṣàyẹ̀wò, tàbí jẹ́rìí sí àwọn ayálégbé tí a yà sọ́tọ̀.

Ẹrù ìbéèrè gangan dá lórí agbára host tí a ti mú ṣiṣẹ́, ṣùgbọ́n àwọn ìṣepọ̀ gbọ́dọ̀ retí àwọn ẹgbẹ́ ojuami ìparí wọ̀nyí:

```http
POST /wu/v2/tenants/{site_id}/bootstrap
GET /wu/v2/tenants/{site_id}/migration-status
POST /wu/v2/tenants/{site_id}/verify
DELETE /wu/v2/tenants/{site_id}
```

Lo ojuami ìparí bootstrap láti pèsè ìforúkọsílẹ̀ ayálégbé, database, filesystem, àti ipò routing. Lo àwọn ojuami ìparí ipò ìṣílọ àti ìjẹ́rìísí kí o tó yí traffic production padà. Lo ojuami ìparí ìparẹ́ fún ìtúká aláṣẹ-ara kí a lè yọ àwọn ẹ̀rí database kúrò nípasẹ̀ ìṣàn ìmúmọ́ addon.

Àwọn ìdáhùn ipò ìṣílọ aṣojúṣe maa ń ní:

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

Ka `ready: false` sí ohun ìdènà ṣáájú ìfilọlẹ̀. Ṣàyẹ̀wò àwọn àlàyé ìjẹ́rìísí, tún ìsopọ̀ host database, queue, ìpèsè oníṣe, tàbí ìṣòro routing ṣe, lẹ́yìn náà tún ìjẹ́rìísí gbìyànjú.

## Àwọn Ìdáhùn Àṣìṣe {#error-responses}

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

## Ìpín sí Ojú-ìwé àti Ìyàn {#pagination-and-filtering}

**Parameters Ìbéèrè:**
```http
GET /wu/v2/customers?per_page=20&page=2&search=john&status=active
```

Àwọn parameters tó wọ́pọ̀:
- `per_page` - Àwọn ohun kan fún ojú-ìwé kọ̀ọ̀kan (àiyipada: 20, pọ̀jù: 100)
- `page` - Nọ́mbà ojú-ìwé
- `search` - Ọ̀rọ̀ ìṣàwárí
- `orderby` - Pápá ìtòlẹ́sẹẹsẹ
- `order` - Ìtọ́sọ́nà ìtòlẹ́sẹẹsẹ (asc/desc)
- `status` - Yàn gẹ́gẹ́ bí ipò
- `date_created` - Yàn gẹ́gẹ́ bí ààlà ọjọ́
