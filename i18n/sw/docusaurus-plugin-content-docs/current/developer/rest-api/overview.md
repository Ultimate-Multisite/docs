---
title: Muhtasari wa REST API
sidebar_position: 1
_i18n_hash: 4e511d92e0002dff445f45ff05adbeda
---
# Rejeleo la REST API

## Mipangilio ya Msingi

**Base URL:** `{site_url}/wp-json/wu/v2/`
**Uthibitisho:** API Key & Secret (HTTP Basic Auth au URL Parameters)

## Uthibitisho wa Utambulisho

### Washa API
```php
// Washa API katika mipangilio ya Ultimate Multisite au kwa njia ya programu
wu_save_setting('enable_api', true);
```

### Pata Credentials za API
```php
$api_key = wu_get_setting('api_key');
$api_secret = wu_get_setting('api_secret');
```

### Njia za Uthibitisho wa Utambulisho

**HTTP Basic Auth (Inapendekezwa):**
```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

**URL Parameters:**
```bash
curl "https://yoursite.com/wp-json/wu/v2/customers?api_key=your_key&api_secret=your_secret"
```

## Endpoints Kuu

### 1. API ya Wateja (Customers API)

**Base Route:** `/customers`

**Pata Wateja Wote**
```http
GET /wu/v2/customers
```

**Pata Mteja Mmoja**
```http
GET /wu/v2/customers/{id}
```

**Tengeneza Mteja**
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
    "extra_information": "Vidokezo vya mteja VIP"
}
```

**Futa Mteja**
```http
DELETE /wu/v2/customers/{id}
```

### 2. API ya Vituo (Sites API)

**Base Route:** `/sites`

**Tengeneza Kituo**
```http
POST /wu/v2/sites
Content-Type: application/json

{
    "customer_id": 5,
    "membership_id": 10,
    "domain": "example.com",
    "path": "/",
    "title": "Kituo Changu Kipya",
    "template_id": 1,
    "type": "customer_owned"
}
```

### 3. API ya Uanachama (Memberships API)

**Base Route:** `/memberships`

**Tengeneza Uanachama**
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

### 4. API ya Bidhaa (Products API)

**Base Route:** `/products`

**Pata Bidhaa Zote**
```http
GET /wu/v2/products
```

### 5. API ya Malipo (Payments API)

**Base Route:** `/payments`

**Tengeneza Malipo**
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

### 6. API ya Nyanja (Domains API)

**Base Route:** `/domains`

**Unganisha Nyanja**
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

## Endpoint la Usajili (Registration Endpoint)

Endpoint la `/register` linatoa mchakato kamili wa malipo/usajili:

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
        "site_title": "Kituo Changu Kipya",
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

**Jibu (Response):**
```json
{
    "customer": { ... },
    "membership": { ... },
    "payment": { ... },
    "site": { "id": 123 }
}
```

## Majibu ya Makosa (Error Responses)

```json
{
    "code": "wu_rest_invalid_parameter",
    "message": "Thamani ya kiparametri ni mbaya",
    "data": {
        "status": 400,
        "params": {
            "email": "Muundo wa barua pepe ni mbaya"
        }
    }
}
```

## Ukurasa na Kuchuja Data (Pagination and Filtering)

**Query Parameters:**
```http
GET /wu/v2/customers?per_page=20&page=2&search=john&status=active
```

Viparametri vya kawaida:
- `per_page` - Idadi ya vitu kwa ukurasa (kiwango cha kawaida: 20, kiwango cha juu: 100)
- `page` - Namba ya ukurasa
- `search` - Neno la utafutaji
- `orderby` - Sehemu ya kupanga
- `order` - Mwelekeo wa kupanga (asc/desc)
- `status` - Kuchuja kwa kulingana na hali
- `date_created` - Kuchuja kwa kulingana na kiwango cha tarehe
