---
title: Nchịkọta REST API
sidebar_position: 1
_i18n_hash: cabcc173f6a77e5de94e39fff19bc2fa
---
# Ntụaka REST API

## Nhazi Ntọala

**URL Ntọala:** `{site_url}/wp-json/wu/v2/`
**Nyocha njirimara:** Igodo API & Nzuzo (HTTP Basic Auth ma ọ bụ Paramita URL)

## Nyocha njirimara

### Kwado API
```php
// Enable API in Ultimate Multisite settings or programmatically
wu_save_setting('enable_api', true);
```

### Nweta Nkọwa Njirimara API
```php
$api_key = wu_get_setting('api_key');
$api_secret = wu_get_setting('api_secret');
```

### Ụzọ Nyocha Njirimara

**HTTP Basic Auth (Akwadoro):**
```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

**Paramita URL:**
```bash
curl "https://yoursite.com/wp-json/wu/v2/customers?api_key=your_key&api_secret=your_secret"
```

## Endpoint Ndị Isi

### 1. API Ndị Ahịa

**Ụzọ Ntọala:** `/customers`

**Nweta Ndị Ahịa Niile**
```http
GET /wu/v2/customers
```

**Nweta Otu Onye Ahịa**
```http
GET /wu/v2/customers/{id}
```

**Mepụta Onye Ahịa**
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

**Melite Onye Ahịa**
```http
PUT /wu/v2/customers/{id}
Content-Type: application/json

{
    "vip": true,
    "extra_information": "VIP customer notes"
}
```

**Hichapụ Onye Ahịa**
```http
DELETE /wu/v2/customers/{id}
```

### 2. API Saịtị

**Ụzọ Ntọala:** `/sites`

**Mepụta Saịtị**
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

### 3. API Ndị Otu**

**Ụzọ Ntọala:** `/memberships`

**Mepụta Otu**
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

### 4. API Ngwaahịa

**Ụzọ Ntọala:** `/products`

**Nweta Ngwaahịa Niile**
```http
GET /wu/v2/products
```

### 5. API Ịkwụ Ụgwọ

**Ụzọ Ntọala:** `/payments`

**Mepụta Ịkwụ Ụgwọ**
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

### 6. API Domen

**Ụzọ Ntọala:** `/domains`

**Jikọọ Domen**
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

## Endpoint Ndebanye Aha

Endpoint `/register` na-enye usoro checkout/ndebanye aha zuru ezu:

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

**Nzaghachi:**
```json
{
    "customer": { ... },
    "membership": { ... },
    "payment": { ... },
    "site": { "id": 123 }
}
```

## Endpoint Ndị Tenant Nwere Ọchịchị Onwe Ha

Ultimate Multisite: Multi-Tenancy 1.2.0 na-agbakwunye mkpuchi REST maka tenant nwere ọchịchị onwe ha maka njikọ ndị na-enye, na-enyocha, ma ọ bụ na-akwado tenant ndị e kewapụrụ iche.

Payload arịrịọ ziri ezi dabere na ikike host e kwadoro, mana njikọ kwesịrị ịtụ anya otu endpoint ndị a:

```http
POST /wu/v2/tenants/{site_id}/bootstrap
GET /wu/v2/tenants/{site_id}/migration-status
POST /wu/v2/tenants/{site_id}/verify
DELETE /wu/v2/tenants/{site_id}
```

Jiri endpoint bootstrap kwadebe ndekọ tenant, database, filesystem, na ọnọdụ ntụgharị ụzọ. Jiri endpoint ọnọdụ mbufe na nkwenye tupu ịgbanwee okporo ụzọ mmepụta. Jiri endpoint nhichapụ maka iwepụ sovereign ka ewepụ credentials database site n’usoro nhicha addon.

Nzaghachi ọnọdụ mbufe a na-ahụkarị gụnyere:

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

Were `ready: false` dị ka ihe mgbochi tupu mmalite. Lelee nkọwa nkwenye, dozie njikọ host database, queue, inye onye ọrụ, ma ọ bụ nsogbu ntụgharị ụzọ, mgbe ahụ nwaa nkwenye ọzọ.

## Nzaghachi Mperi

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

## Nkewa Peeji na Nzacha

**Paramita Ajụjụ:**
```http
GET /wu/v2/customers?per_page=20&page=2&search=john&status=active
```

Paramita ndị a na-ejikarị:
- `per_page` - Ihe n’otu peeji (ndabara: 20, kacha: 100)
- `page` - Nọmba peeji
- `search` - Okwu ọchụchọ
- `orderby` - Field nhazi
- `order` - Ntuziaka nhazi (asc/desc)
- `status` - Zacha site na status
- `date_created` - Zacha site na oke ụbọchị
