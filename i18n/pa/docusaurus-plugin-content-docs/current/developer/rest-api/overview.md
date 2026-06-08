---
title: REST API ਦਾ ਸੰਖੇਪ ਜਾਣਕਾਰੀ
sidebar_position: 1
_i18n_hash: 4e511d92e0002dff445f45ff05adbeda
---
# REST API ਦਾ ਹਵਾਲਾ (Reference)

## ਬੇਸ ਕਨਫਿਗਰੇਸ਼ਨ (Base Configuration)

**Base URL:** `{site_url}/wp-json/wu/v2/`
**Authentication:** API Key ਅਤੇ Secret (HTTP Basic Auth ਜਾਂ URL Parameters)

## ਪ੍ਰਮਾਣਿਕਤਾ (Authentication)

### API ਨੂੰ ਐਨੇਬਲ ਕਰਨਾ
```php
// Ultimate Multisite ਸੈਟਿੰਗਸ ਵਿੱਚ ਜਾਂ ਕੋਡ ਰਾਹੀਂ API ਨੂੰ ਐਨੇਬਲ ਕਰੋ
wu_save_setting('enable_api', true);
```

### API ਕ੍ਰੈਡੈਂਸ਼ੀਅਲਸ ਪ੍ਰਾਪਤ ਕਰਨਾ
```php
$api_key = wu_get_setting('api_key');
$api_secret = wu_get_setting('api_secret');
```

### ਪ੍ਰਮਾਣਿਕਤਾ ਦੇ ਤਰੀਕੇ (Authentication Methods)

**HTTP Basic Auth (ਸਿਫਾਰਸ਼ ਕੀਤਾ ਜਾਂਦਾ ਹੈ):**
```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

**URL Parameters:**
```bash
curl "https://yoursite.com/wp-json/wu/v2/customers?api_key=your_key&api_secret=your_secret"
```

## ਮੁੱਖ ਐਂਡਪੁਆਇੰਟਸ (Core Endpoints)

### 1. ਗਾਹਕ API (Customers API)

**Base Route:** `/customers`

**ਸਾਰੇ ਗਾਹਕਾਂ ਨੂੰ ਪ੍ਰਾਪਤ ਕਰਨਾ (Get All Customers)**
```http
GET /wu/v2/customers
```

**ਇੱਕ ਗਾਹਕ ਨੂੰ ਪ੍ਰਾਪਤ ਕਰਨਾ (Get Single Customer)**
```http
GET /wu/v2/customers/{id}
```

**ਗਾਹਕ ਬਣਾਉਣਾ (Create Customer)**
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

**ਗਾਹਕ ਨੂੰ ਅਪਡੇਟ ਕਰਨਾ (Update Customer)**
```http
PUT /wu/v2/customers/{id}
Content-Type: application/json

{
    "vip": true,
    "extra_information": "VIP ਗਾਹਕ ਨੋਟਸ"
}
```

**ਗਾਹਕ ਨੂੰ ਮਿਟਾਉਣਾ (Delete Customer)**
```http
DELETE /wu/v2/customers/{id}
```

### 2. ਸਾਈਟਾਂ API (Sites API)

**Base Route:** `/sites`

**ਸਾਈਟ ਬਣਾਉਣਾ (Create Site)**
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

### 3. ਮੈਂਬਰਸ਼ਿਪ API (Memberships API)

**Base Route:** `/memberships`

**ਮੈਂਬਰਸ਼ਿਪ ਬਣਾਉਣਾ (Create Membership)**
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

### 4. ਪ੍ਰੋਡਕਟਸ API (Products API)

**Base Route:** `/products`

**ਸਾਰੇ ਪ੍ਰੋਡਕਟਸ ਨੂੰ ਪ੍ਰਾਪਤ ਕਰਨਾ (Get All Products)**
```http
GET /wu/v2/products
```

### 5. ਭੁਗਤਾਨ API (Payments API)

**Base Route:** `/payments`

**ਭੁਗਤਾਨ ਬਣਾਉਣਾ (Create Payment)**
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

### 6. ਡੋਮੇਨ API (Domains API)

**Base Route:** `/domains`

**ਡੋਮੇਨ ਮੈਪ ਕਰਨਾ (Map Domain)**
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

## ਰਜਿਸਟ੍ਰੇਸ਼ਨ ਐਂਡਪੁਆਇੰਟ (Registration Endpoint)

`/register` ਐਂਡਪੁਆਇੰਟ ਇੱਕ ਪੂਰਾ ਚੈੱਕਆਉਟ/ਰਜਿਸਟ੍ਰੇਸ਼ਨ ਫਲੋ ਪ੍ਰਦਾਨ ਕਰਦਾ ਹੈ:

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

**ਜਵਾਬ (Response):**
```json
{
    "customer": { ... },
    "membership": { ... },
    "payment": { ... },
    "site": { "id": 123 }
}
```

## ਗਲਤੀ ਦੇ ਜਵਾਬ (Error Responses)

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

## ਪੇਜੇਸ਼ਨ ਅਤੇ ਫਿਲਟਰਿੰਗ (Pagination and Filtering)

**Query Parameters:**
```http
GET /wu/v2/customers?per_page=20&page=2&search=john&status=active
```

ਆਮ ਪੈਰਾਮੀਟਰਸ (Common parameters):
- `per_page` - ਪ੍ਰਤੀ ਪੰਨਾ ਆਈਟਮਾਂ ਦੀ ਗਿਣਤੀ (default: 20, max: 100)
- `page` - ਪੰਨੇ ਦਾ ਨੰਬਰ
- `search` - ਖੋਜਣ ਵਾਲਾ ਸ਼ਬਦ (Search term)
- `orderby` - ਸੌਰਟ ਕਰਨ ਵਾਲਾ ਫੀਲਡ
- `order` - ਸੌਰਟ ਕਰਨ ਦੀ ਦਿਸ਼ਾ (asc/desc)
- `status` - ਸਟੇਟਸ ਅਨੁਸਾਰ ਫਿਲਟਰ ਕਰੋ
- `date_created` - ਤਰੀਕਾ ਸੀਮਾ (date range) ਅਨੁਸਾਰ ਫਿਲਟਰ ਕਰੋ
