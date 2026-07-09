---
title: Sealladh farsaing air REST API
sidebar_position: 1
_i18n_hash: cabcc173f6a77e5de94e39fff19bc2fa
---
# Iomradh REST API

## Rèiteachadh Bunaiteach

**Base URL:** `{site_url}/wp-json/wu/v2/`
**Dearbhadh:** Iuchair API & Secret (HTTP Basic Auth no Paramadairean URL)

## Dearbhadh

### Cuir API an comas
```php
// Enable API in Ultimate Multisite settings or programmatically
wu_save_setting('enable_api', true);
```

### Faigh teisteanasan API
```php
$api_key = wu_get_setting('api_key');
$api_secret = wu_get_setting('api_secret');
```

### Dòighean dearbhaidh

**HTTP Basic Auth (Air a mholadh):**
```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

**Paramadairean URL:**
```bash
curl "https://yoursite.com/wp-json/wu/v2/customers?api_key=your_key&api_secret=your_secret"
```

## Prìomh phuingean-crìche

### 1. API luchd-ceannach

**Slighe bhunaiteach:** `/customers`

**Faigh a h-uile neach-ceannach**
```http
GET /wu/v2/customers
```

**Faigh aon neach-ceannach**
```http
GET /wu/v2/customers/{id}
```

**Cruthaich neach-ceannach**
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

**Ùraich neach-ceannach**
```http
PUT /wu/v2/customers/{id}
Content-Type: application/json

{
    "vip": true,
    "extra_information": "VIP customer notes"
}
```

**Sguab às neach-ceannach**
```http
DELETE /wu/v2/customers/{id}
```

### 2. API làraichean

**Slighe bhunaiteach:** `/sites`

**Cruthaich làrach**
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

### 3. API ballrachdan

**Slighe bhunaiteach:** `/memberships`

**Cruthaich ballrachd**
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

### 4. API batharan

**Slighe bhunaiteach:** `/products`

**Faigh a h-uile bathar**
```http
GET /wu/v2/products
```

### 5. API pàighidhean

**Slighe bhunaiteach:** `/payments`

**Cruthaich pàigheadh**
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

### 6. API àrainnean

**Slighe bhunaiteach:** `/domains`

**Mapaich àrainn**
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

## Puing-crìche clàraidh

Tha am puing-crìche `/register` a’ toirt seachad sruth checkout/clàraidh coileanta:

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

**Freagairt:**
```json
{
    "customer": { ... },
    "membership": { ... },
    "payment": { ... },
    "site": { "id": 123 }
}
```

## Puingean-crìche luchd-màil uachdaranach

Bidh Ultimate Multisite: Multi-Tenancy 1.2.0 a’ cur còmhdach REST luchd-màil uachdaranach ris airson amalachadh a bhios a’ solarachadh, a’ sgrùdadh, no a’ dearbhadh luchd-màil iomallach.

Tha an payload iarrtais mionaideach an urra ris a’ chomas host a tha an comas, ach bu chòir do dh’amalachaidhean a bhith an dùil ris na buidhnean phuingean-crìche seo:

```http
POST /wu/v2/tenants/{site_id}/bootstrap
GET /wu/v2/tenants/{site_id}/migration-status
POST /wu/v2/tenants/{site_id}/verify
DELETE /wu/v2/tenants/{site_id}
```

Cleachd am puing-crìche bootstrap gus clàr-luchd-màil, stòr-dàta, siostam fhaidhlichean, agus staid sligheachaidh ullachadh. Cleachd puingean-crìche inbhe imrich agus dearbhaidh mus tèid trafaig riochdachaidh atharrachadh. Cleachd am puing-crìche sguabaidh às airson teardown uachdaranach gus an tèid teisteanasan stòr-dàta a thoirt air falbh tro shruth glanaidh an addon.

Tha freagairtean àbhaisteach inbhe imrich a’ gabhail a-steach:

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

Làimhsich `ready: false` mar bhacadh ro-chur-air-bhog. Thoir sùil air mion-fhiosrachadh an dearbhaidh, càraich ceangal host an stòr-dàta, a’ chiudha, solarachadh luchd-cleachdaidh, no duilgheadas sligheachaidh, agus an uair sin feuch dearbhadh a-rithist.

## Freagairtean mearachd

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

## Duilleagachadh agus sìoladh

**Paramadairean ceiste:**
```http
GET /wu/v2/customers?per_page=20&page=2&search=john&status=active
```

Paramadairean cumanta:
- `per_page` - Nithean gach duilleag (bunaiteach: 20, as motha: 100)
- `page` - Àireamh na duilleige
- `search` - Teirm-luirg
- `orderby` - Raon seòrsachaidh
- `order` - Stiùireadh seòrsachaidh (asc/desc)
- `status` - Sìolaich a rèir inbhe
- `date_created` - Sìolaich a rèir raon cinn-latha
