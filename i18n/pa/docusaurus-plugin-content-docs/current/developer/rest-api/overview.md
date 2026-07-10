---
title: REST API ਸੰਖੇਪ ਜਾਣਕਾਰੀ
sidebar_position: 1
_i18n_hash: cabcc173f6a77e5de94e39fff19bc2fa
---
# REST API ਹਵਾਲਾ {#rest-api-reference}

## ਆਧਾਰ ਸੰਰਚਨਾ {#base-configuration}

**ਆਧਾਰ URL:** `{site_url}/wp-json/wu/v2/`
**ਪ੍ਰਮਾਣੀਕਰਨ:** API ਕੁੰਜੀ ਅਤੇ ਰਾਜ਼ (HTTP Basic Auth ਜਾਂ URL ਪੈਰਾਮੀਟਰ)

## ਪ੍ਰਮਾਣੀਕਰਨ {#authentication}

### API ਸਮਰੱਥ ਕਰੋ {#enable-api}
```php
// Enable API in Ultimate Multisite settings or programmatically
wu_save_setting('enable_api', true);
```

### API ਪ੍ਰਮਾਣ-ਪੱਤਰ ਪ੍ਰਾਪਤ ਕਰੋ {#get-api-credentials}
```php
$api_key = wu_get_setting('api_key');
$api_secret = wu_get_setting('api_secret');
```

### ਪ੍ਰਮਾਣੀਕਰਨ ਢੰਗ {#authentication-methods}

**HTTP Basic Auth (ਸਿਫ਼ਾਰਸ਼ੀ):**
```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

**URL ਪੈਰਾਮੀਟਰ:**
```bash
curl "https://yoursite.com/wp-json/wu/v2/customers?api_key=your_key&api_secret=your_secret"
```

## ਮੁੱਖ ਅੰਤ-ਬਿੰਦੂ {#core-endpoints}

### 1. ਗਾਹਕ API {#1-customers-api}

**ਆਧਾਰ ਰੂਟ:** `/customers`

**ਸਾਰੇ ਗਾਹਕ ਪ੍ਰਾਪਤ ਕਰੋ**
```http
GET /wu/v2/customers
```

**ਇੱਕ ਗਾਹਕ ਪ੍ਰਾਪਤ ਕਰੋ**
```http
GET /wu/v2/customers/{id}
```

**ਗਾਹਕ ਬਣਾਓ**
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

**ਗਾਹਕ ਅੱਪਡੇਟ ਕਰੋ**
```http
PUT /wu/v2/customers/{id}
Content-Type: application/json

{
    "vip": true,
    "extra_information": "VIP customer notes"
}
```

**ਗਾਹਕ ਮਿਟਾਓ**
```http
DELETE /wu/v2/customers/{id}
```

### 2. ਸਾਈਟਾਂ API {#2-sites-api}

**ਆਧਾਰ ਰੂਟ:** `/sites`

**ਸਾਈਟ ਬਣਾਓ**
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

### 3. ਮੈਂਬਰਸ਼ਿਪਾਂ API {#3-memberships-api}

**ਆਧਾਰ ਰੂਟ:** `/memberships`

**ਮੈਂਬਰਸ਼ਿਪ ਬਣਾਓ**
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

### 4. ਉਤਪਾਦ API {#4-products-api}

**ਆਧਾਰ ਰੂਟ:** `/products`

**ਸਾਰੇ ਉਤਪਾਦ ਪ੍ਰਾਪਤ ਕਰੋ**
```http
GET /wu/v2/products
```

### 5. ਭੁਗਤਾਨ API {#5-payments-api}

**ਆਧਾਰ ਰੂਟ:** `/payments`

**ਭੁਗਤਾਨ ਬਣਾਓ**
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

### 6. ਡੋਮੇਨ API {#6-domains-api}

**ਆਧਾਰ ਰੂਟ:** `/domains`

**ਡੋਮੇਨ ਮੈਪ ਕਰੋ**
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

## ਰਜਿਸਟ੍ਰੇਸ਼ਨ ਅੰਤ-ਬਿੰਦੂ {#registration-endpoint}

`/register` ਅੰਤ-ਬਿੰਦੂ ਪੂਰਾ checkout/ਰਜਿਸਟ੍ਰੇਸ਼ਨ ਪ੍ਰਵਾਹ ਪ੍ਰਦਾਨ ਕਰਦਾ ਹੈ:

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

**ਜਵਾਬ:**
```json
{
    "customer": { ... },
    "membership": { ... },
    "payment": { ... },
    "site": { "id": 123 }
}
```

## ਸਵੈ-ਸਰਬਭੌਮ ਕਿਰਾਏਦਾਰ ਅੰਤ-ਬਿੰਦੂ {#sovereign-tenant-endpoints}

Ultimate Multisite: Multi-Tenancy 1.2.0 ਉਹਨਾਂ ਇੰਟੀਗ੍ਰੇਸ਼ਨਾਂ ਲਈ ਸਵੈ-ਸਰਬਭੌਮ ਕਿਰਾਏਦਾਰ REST ਕਵਰੇਜ ਜੋੜਦਾ ਹੈ ਜੋ ਅਲੱਗ-ਥਲੱਗ ਕਿਰਾਏਦਾਰਾਂ ਨੂੰ ਪ੍ਰਾਵਿਜ਼ਨ, ਜਾਂਚ ਜਾਂ ਤਸਦੀਕ ਕਰਦੇ ਹਨ।

ਸਟੀਕ ਬੇਨਤੀ ਪੇਲੋਡ ਸਮਰੱਥ ਹੋਸਟ ਸਮਰੱਥਾ ਉੱਤੇ ਨਿਰਭਰ ਕਰਦਾ ਹੈ, ਪਰ ਇੰਟੀਗ੍ਰੇਸ਼ਨਾਂ ਨੂੰ ਇਨ੍ਹਾਂ ਅੰਤ-ਬਿੰਦੂ ਸਮੂਹਾਂ ਦੀ ਉਮੀਦ ਕਰਨੀ ਚਾਹੀਦੀ ਹੈ:

```http
POST /wu/v2/tenants/{site_id}/bootstrap
GET /wu/v2/tenants/{site_id}/migration-status
POST /wu/v2/tenants/{site_id}/verify
DELETE /wu/v2/tenants/{site_id}
```

ਕਿਰਾਏਦਾਰ ਰਜਿਸਟਰੀ, ਡਾਟਾਬੇਸ, ਫਾਈਲ ਸਿਸਟਮ ਅਤੇ ਰੂਟਿੰਗ ਸਥਿਤੀ ਤਿਆਰ ਕਰਨ ਲਈ bootstrap ਅੰਤ-ਬਿੰਦੂ ਵਰਤੋ। ਉਤਪਾਦਨ ਟ੍ਰੈਫਿਕ ਸਵਿੱਚ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ migration status ਅਤੇ verification ਅੰਤ-ਬਿੰਦੂ ਵਰਤੋ। ਸਵੈ-ਸਰਬਭੌਮ ਵਿਘਟਨ ਲਈ deletion ਅੰਤ-ਬਿੰਦੂ ਵਰਤੋ ਤਾਂ ਜੋ ਡਾਟਾਬੇਸ ਪ੍ਰਮਾਣ-ਪੱਤਰ addon cleanup ਪ੍ਰਵਾਹ ਰਾਹੀਂ ਹਟਾਏ ਜਾਣ।

ਆਮ migration status ਜਵਾਬਾਂ ਵਿੱਚ ਸ਼ਾਮਲ ਹੁੰਦੇ ਹਨ:

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

`ready: false` ਨੂੰ ਪ੍ਰੀ-ਲਾਂਚ ਰੋਕ ਵਜੋਂ ਮੰਨੋ। verification ਵੇਰਵਿਆਂ ਦੀ ਜਾਂਚ ਕਰੋ, ਡਾਟਾਬੇਸ ਹੋਸਟ ਬਾਈਂਡਿੰਗ, ਕਤਾਰ, ਵਰਤੋਂਕਾਰ ਪ੍ਰਾਵਿਜ਼ਨਿੰਗ ਜਾਂ ਰੂਟਿੰਗ ਸਮੱਸਿਆ ਠੀਕ ਕਰੋ, ਫਿਰ verification ਮੁੜ ਕੋਸ਼ਿਸ਼ ਕਰੋ।

## ਗਲਤੀ ਜਵਾਬ {#error-responses}

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

## ਪੇਜੀਨੇਸ਼ਨ ਅਤੇ ਫਿਲਟਰਿੰਗ {#pagination-and-filtering}

**ਕੁਐਰੀ ਪੈਰਾਮੀਟਰ:**
```http
GET /wu/v2/customers?per_page=20&page=2&search=john&status=active
```

ਆਮ ਪੈਰਾਮੀਟਰ:
- `per_page` - ਪ੍ਰਤੀ ਪੰਨਾ ਆਈਟਮਾਂ (ਮੂਲ: 20, ਅਧਿਕਤਮ: 100)
- `page` - ਪੰਨਾ ਨੰਬਰ
- `search` - ਖੋਜ ਸ਼ਬਦ
- `orderby` - ਛਾਂਟਣ ਵਾਲਾ ਖੇਤਰ
- `order` - ਛਾਂਟਣ ਦੀ ਦਿਸ਼ਾ (asc/desc)
- `status` - ਸਥਿਤੀ ਅਨੁਸਾਰ ਫਿਲਟਰ ਕਰੋ
- `date_created` - ਮਿਤੀ ਦੀ ਸੀਮਾ ਅਨੁਸਾਰ ਫਿਲਟਰ ਕਰੋ
