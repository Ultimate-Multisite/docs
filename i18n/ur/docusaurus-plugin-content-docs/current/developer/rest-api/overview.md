---
title: REST API کا جائزہ
sidebar_position: 1
_i18n_hash: 4e511d92e0002dff445f45ff05adbeda
---
# REST API ریفرنس

## بنیادی سیٹنگز (Base Configuration)

**بنیادی URL:** `{site_url}/wp-json/wu/v2/`
**Authentication:** API Key اور Secret (HTTP Basic Auth یا URL Parameters)

## Authentication

### API کو فعال کرنا (Enable API)
```php
// Ultimate Multisite کی سیٹنگز میں یا پروگرام کے ذریعے API کو فعال کریں
wu_save_setting('enable_api', true);
```

### API کی Credentials حاصل کرنا (Get API Credentials)
```php
$api_key = wu_get_setting('api_key');
$api_secret = wu_get_setting('api_secret');
```

### Authentication کے طریقے (Authentication Methods)

**HTTP Basic Auth (بہتر طریقہ):**
```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

**URL Parameters:**
```bash
curl "https://yoursite.com/wp-json/wu/v2/customers?api_key=your_key&api_secret=your_secret"
```

## مرکزی Endpoints (Core Endpoints)

### 1. Customers API

**بنیادی راستہ (Base Route):** `/customers`

**تمام صارفین حاصل کرنا (Get All Customers)**
```http
GET /wu/v2/customers
```

**ایک مخصوص صارف حاصل کرنا (Get Single Customer)**
```http
GET /wu/v2/customers/{id}
```

**صارف بنانا (Create Customer)**
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

**صارف کو اپ ڈیٹ کرنا (Update Customer)**
```http
PUT /wu/v2/customers/{id}
Content-Type: application/json

{
    "vip": true,
    "extra_information": "VIP customer notes"
}
```

**صارف کو حذف کرنا (Delete Customer)**
```http
DELETE /wu/v2/customers/{id}
```

### 2. Sites API

**بنیادی راستہ (Base Route):** `/sites`

**سائٹ بنانا (Create Site)**
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

### 3. Memberships API

**بنیادی راستہ (Base Route):** `/memberships`

**Membership بنانا (Create Membership)**
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

### 4. Products API

**بنیادی راستہ (Base Route):** `/products`

**تمام مصنوعات حاصل کرنا (Get All Products)**
```http
GET /wu/v2/products
```

### 5. Payments API

**بنیادی راستہ (Base Route):** `/payments`

**Payment بنانا (Create Payment)**
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

### 6. Domains API

**بنیادی راستہ (Base Route):** `/domains`

**Domain Map کرنا (Map Domain)**
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

## Registration Endpoint

`/register` اینڈ پوائنٹ ایک مکمل چیک آؤٹ/رجسٹریشن فلو فراہم کرتا ہے:

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

**Response:**
```json
{
    "customer": { ... },
    "membership": { ... },
    "payment": { ... },
    "site": { "id": 123 }
}
```

## Error Responses

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

## Pagination اور Filtering

**Query Parameters:**
```http
GET /wu/v2/customers?per_page=20&page=2&search=john&status=active
```

عام پیرامیٹرز (Common parameters):
- `per_page` - فی پیج آئٹمز (ڈیفالٹ: 20، زیادہ سے زیادہ: 100)
- `page` - پیج نمبر
- `search` - تلاش کا لفظ (Search term)
- `orderby` - ترتیب دینے کا فیلڈ (Sort field)
- `order` - ترتیب کی سمت (asc/desc)
- `status` - اسٹیٹس کے لحاظ سے فلٹر کرنا
- `date_created` - تاریخ کی حد (date range)
