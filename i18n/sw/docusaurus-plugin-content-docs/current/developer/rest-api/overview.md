---
title: Muhtasari wa REST API
sidebar_position: 1
_i18n_hash: cabcc173f6a77e5de94e39fff19bc2fa
---
# Rejeleo la REST API {#rest-api-reference}

## Usanidi wa Msingi {#base-configuration}

**URL ya Msingi:** `{site_url}/wp-json/wu/v2/`
**Uthibitishaji:** Ufunguo wa API na Siri (HTTP Basic Auth au Vigezo vya URL)

## Uthibitishaji {#authentication}

### Washa API {#enable-api}
```php
// Enable API in Ultimate Multisite settings or programmatically
wu_save_setting('enable_api', true);
```

### Pata Vitambulisho vya API {#get-api-credentials}
```php
$api_key = wu_get_setting('api_key');
$api_secret = wu_get_setting('api_secret');
```

### Mbinu za Uthibitishaji {#authentication-methods}

**HTTP Basic Auth (Inapendekezwa):**
```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

**Vigezo vya URL:**
```bash
curl "https://yoursite.com/wp-json/wu/v2/customers?api_key=your_key&api_secret=your_secret"
```

## Endpointi Kuu {#core-endpoints}

### 1. API ya Wateja {#1-customers-api}

**Njia ya Msingi:** `/customers`

**Pata Wateja Wote**
```http
GET /wu/v2/customers
```

**Pata Mteja Mmoja**
```http
GET /wu/v2/customers/{id}
```

**Unda Mteja**
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

**Sasisha Mteja**
```http
PUT /wu/v2/customers/{id}
Content-Type: application/json

{
    "vip": true,
    "extra_information": "VIP customer notes"
}
```

**Futa Mteja**
```http
DELETE /wu/v2/customers/{id}
```

### 2. API ya Site {#2-sites-api}

**Njia ya Msingi:** `/sites`

**Unda Site**
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

### 3. API ya Uanachama {#3-memberships-api}

**Njia ya Msingi:** `/memberships`

**Unda Uanachama**
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

### 4. API ya Bidhaa {#4-products-api}

**Njia ya Msingi:** `/products`

**Pata Bidhaa Zote**
```http
GET /wu/v2/products
```

### 5. API ya Malipo {#5-payments-api}

**Njia ya Msingi:** `/payments`

**Unda Malipo**
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

### 6. API ya Vikoa {#6-domains-api}

**Njia ya Msingi:** `/domains`

**Unganisha Kikoa**
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

## Endpointi ya Usajili {#registration-endpoint}

Endpointi ya `/register` hutoa mtiririko kamili wa checkout/usajili:

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

**Jibu:**
```json
{
    "customer": { ... },
    "membership": { ... },
    "payment": { ... },
    "site": { "id": 123 }
}
```

## Endpointi za Mpangaji Huru {#sovereign-tenant-endpoints}

Ultimate Multisite: Multi-Tenancy 1.2.0 huongeza ufunikaji wa REST kwa wapangaji huru kwa miunganisho inayotoa, kukagua, au kuthibitisha wapangaji waliotengwa.

Mzigo halisi wa ombi hutegemea uwezo wa host uliowezeshwa, lakini miunganisho inapaswa kutarajia makundi haya ya endpointi:

```http
POST /wu/v2/tenants/{site_id}/bootstrap
GET /wu/v2/tenants/{site_id}/migration-status
POST /wu/v2/tenants/{site_id}/verify
DELETE /wu/v2/tenants/{site_id}
```

Tumia endpointi ya bootstrap kuandaa rejista ya mpangaji, hifadhidata, mfumo wa faili, na hali ya uelekezaji. Tumia endpointi za hali ya uhamishaji na uthibitishaji kabla ya kubadilisha trafiki ya uzalishaji. Tumia endpointi ya ufutaji kwa ubomoaji huru ili vitambulisho vya hifadhidata viondolewe kupitia mtiririko wa usafishaji wa addon.

Majibu ya kawaida ya hali ya uhamishaji yanajumuisha:

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

Chukulia `ready: false` kama kizuizi cha kabla ya uzinduzi. Kagua maelezo ya uthibitishaji, rekebisha ufungaji wa host ya hifadhidata, foleni, utoaji wa watumiaji, au tatizo la uelekezaji, kisha jaribu tena uthibitishaji.

## Majibu ya Hitilafu {#error-responses}

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

## Uwekaji Kurasa na Uchujaji {#pagination-and-filtering}

**Vigezo vya Hoja:**
```http
GET /wu/v2/customers?per_page=20&page=2&search=john&status=active
```

Vigezo vya kawaida:
- `per_page` - Vipengee kwa kila ukurasa (chaguomsingi: 20, upeo wa juu: 100)
- `page` - Nambari ya ukurasa
- `search` - Neno la kutafuta
- `orderby` - Sehemu ya kupanga
- `order` - Mwelekeo wa kupanga (asc/desc)
- `status` - Chuja kwa hali
- `date_created` - Chuja kwa kipindi cha tarehe
