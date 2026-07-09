---
title: Incamake ya REST API
sidebar_position: 1
_i18n_hash: cabcc173f6a77e5de94e39fff19bc2fa
---
# Indango ya REST API {#rest-api-reference}

## Iboneza Shingiro {#base-configuration}

**Base URL:** `{site_url}/wp-json/wu/v2/`
**Kwemeza umwirondoro:** API Key & Secret (HTTP Basic Auth cyangwa URL Parameters)

## Kwemeza umwirondoro {#authentication}

### Fungura API {#enable-api}
```php
// Enable API in Ultimate Multisite settings or programmatically
wu_save_setting('enable_api', true);
```

### Bona ibyangombwa bya API {#get-api-credentials}
```php
$api_key = wu_get_setting('api_key');
$api_secret = wu_get_setting('api_secret');
```

### Uburyo bwo kwemeza umwirondoro {#authentication-methods}

**HTTP Basic Auth (Bisabwa):**
```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

**URL Parameters:**
```bash
curl "https://yoursite.com/wp-json/wu/v2/customers?api_key=your_key&api_secret=your_secret"
```

## Inzira z'ibanze z'iherezo {#core-endpoints}

### 1. API y'abakiriya {#1-customers-api}

**Inzira Shingiro:** `/customers`

**Bona abakiriya bose**
```http
GET /wu/v2/customers
```

**Bona umukiriya umwe**
```http
GET /wu/v2/customers/{id}
```

**Kora umukiriya**
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

**Vugurura umukiriya**
```http
PUT /wu/v2/customers/{id}
Content-Type: application/json

{
    "vip": true,
    "extra_information": "VIP customer notes"
}
```

**Siba umukiriya**
```http
DELETE /wu/v2/customers/{id}
```

### 2. API za site {#2-sites-api}

**Inzira Shingiro:** `/sites`

**Kora site**
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

### 3. API z'ubunyamuryango {#3-memberships-api}

**Inzira Shingiro:** `/memberships`

**Kora ubunyamuryango**
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

### 4. API z'ibicuruzwa {#4-products-api}

**Inzira Shingiro:** `/products`

**Bona ibicuruzwa byose**
```http
GET /wu/v2/products
```

### 5. API z'ubwishyu {#5-payments-api}

**Inzira Shingiro:** `/payments`

**Kora ubwishyu**
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

### 6. API za domains {#6-domains-api}

**Inzira Shingiro:** `/domains`

**Huza domain**
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

## Inzira y'iherezo yo kwiyandikisha {#registration-endpoint}

Inzira y'iherezo ya `/register` itanga uruhererekane rwuzuye rwa checkout/kwiyandikisha:

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

**Igisubizo:**
```json
{
    "customer": { ... },
    "membership": { ... },
    "payment": { ... },
    "site": { "id": 123 }
}
```

## Inzira z'iherezo z'umukodesha wigenga {#sovereign-tenant-endpoints}

Ultimate Multisite: Multi-Tenancy 1.2.0 yongeramo ubwishingizi bwa REST ku bakodesha bigenga, bugenewe integrations zitunganya, zigenzura, cyangwa zemeza abakodesha batandukanye.

Ibisabwa nyabyo mu busabe biterwa n'ubushobozi bwa host bwafunguwe, ariko integrations zikwiye kwitega aya matsinda y'inzira z'iherezo:

```http
POST /wu/v2/tenants/{site_id}/bootstrap
GET /wu/v2/tenants/{site_id}/migration-status
POST /wu/v2/tenants/{site_id}/verify
DELETE /wu/v2/tenants/{site_id}
```

Koresha inzira y'iherezo ya bootstrap gutegura registry y'umukodesha, database, filesystem, n'imiterere ya routing. Koresha inzira z'iherezo z'imiterere ya migration n'igenzura mbere yo guhindurira traffic ya production. Koresha inzira y'iherezo yo gusiba mu gusenya ubwigenge kugira ngo ibyangombwa bya database bikurweho binyuze mu ruhererekane rwo gusukura rwa addon.

Ibisubizo bisanzwe by'imiterere ya migration birimo:

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

Fata `ready: false` nk'imbogamizi mbere yo gutangiza. Reba ibisobanuro by'igenzura, ukosore guhuza database host, queue, gutunganya abakoresha, cyangwa ikibazo cya routing, hanyuma wongere ugerageze igenzura.

## Ibisubizo by'amakosa {#error-responses}

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

## Gushyira ku mapaji no kuyungurura {#pagination-and-filtering}

**Query Parameters:**
```http
GET /wu/v2/customers?per_page=20&page=2&search=john&status=active
```

Ibipimo bisanzwe:
- `per_page` - Ibintu kuri buri paji (isanzwe: 20, ntarengwa: 100)
- `page` - Nomero ya paji
- `search` - Ijambo ryo gushakisha
- `orderby` - Umwanya wo gutondekanya
- `order` - Icyerekezo cyo gutondekanya (asc/desc)
- `status` - Yungurura hakurikijwe status
- `date_created` - Yungurura hakurikijwe intera y'amatariki
