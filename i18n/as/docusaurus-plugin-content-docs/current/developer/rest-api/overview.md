---
title: REST API ৰ বিৱৰণ
sidebar_position: 1
_i18n_hash: 4e511d92e0002dff445f45ff05adbeda
---
# REST API গাইডলাইন

## বেছ কনফিগাৰেচন (Base Configuration)

**বেছ URL:** `{site_url}/wp-json/wu/v2/`
**Authentication:** API Key আৰু Secret (HTTP Basic Auth বা URL Parameters)

## Authentication (প্ৰমাণীকৰণ)

### API সক্ষম কৰা (Enable API)
```php
// Ultimate Multisite সেটিংসত বা কোডৰ জৰিয়তে API সক্ষম কৰক
wu_save_setting('enable_api', true);
```

### API Credentials পোৱা (Get API Credentials)
```php
$api_key = wu_get_setting('api_key');
$api_secret = wu_get_setting('api_secret');
```

### Authentication পদ্ধতিসমূহ (Authentication Methods)

**HTTP Basic Auth (পৰমপৰ্শৱৰ্তী):**
```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

**URL Parameters:**
```bash
curl "https://yoursite.com/wp-json/wu/v2/customers?api_key=your_key&api_secret=your_secret"
```

## মূল Endpoints (Core Endpoints)

### ১. Customers API (ग्राहक API)

**বেছ ৰুট (Base Route):** `/customers`

**সকলো ग्राहक পোৱা (Get All Customers)**
```http
GET /wu/v2/customers
```

**এটা বিশেষ গ্রাহক পোৱা (Get Single Customer)**
```http
GET /wu/v2/customers/{id}
```

**নতুন গ্রাহক সৃষ্টি কৰা (Create Customer)**
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

**গ্রাহক আপডেট কৰা (Update Customer)**
```http
PUT /wu/v2/customers/{id}
Content-Type: application/json

{
    "vip": true,
    "extra_information": "VIP customer notes"
}
```

**গ্রাহক ডিলিট কৰা (Delete Customer)**
```http
DELETE /wu/v2/customers/{id}
```

### ২. Sites API (Website API)

**বেছ ৰুট (Base Route):** `/sites`

**নতুন Site সৃষ্টি কৰা (Create Site)**
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

### ৩. Memberships API (সদukti API)

**বেছ ৰুট (Base Route):** `/memberships`

**সদukti সৃষ্টি কৰা (Create Membership)**
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

### ৪. Products API (প্ৰোডাক্ট API)

**বেছ ৰুট (Base Route):** `/products`

**সকলো প্ৰোডাক্ট পোৱা (Get All Products)**
```http
GET /wu/v2/products
```

### ৫. Payments API (পেমেন্ট API)

**বেছ ৰুট (Base Route):** `/payments`

**পেমেন্ট সৃষ্টি কৰা (Create Payment)**
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

### ৬. Domains API (ডোমেইন API)

**বেছ ৰুট (Base Route):** `/domains`

**ডোমেইন ম্যাপ কৰা (Map Domain)**
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

## Registration Endpoint (নিবন্ধন Endpoints)

`/register` endpoint-এ এটা সম্পূৰ্ণ checkout/নিবন্ধন প্ৰবাহ (flow) দিয়ে:

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

**Response (প্ৰতিক্ৰিয়া):**
```json
{
    "customer": { ... },
    "membership": { ... },
    "payment": { ... },
    "site": { "id": 123 }
}
```

## Error Responses (ভুল প্ৰতিক্ৰিয়া)

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

## Pagination আৰু Filtering (পৃষ্ঠা আৰু ছাঁকা)

**Query Parameters (প্ৰশ্ন পৰিমান):**
```http
GET /wu/v2/customers?per_page=20&page=2&search=john&status=active
```

সাধাৰণ পৰিমানসমূহ (Common parameters):
- `per_page` - এটা পৃষ্ঠাৰ বাবে কিত্ৰমান আইটেম (default: 20, max: 100)
- `page` - পৃষ্ঠাৰ সংখ্যা
- `search` - বিচৰা শব্দ (Search term)
- `orderby` - ক'তকৈ সৰ্বাধিক কৰিব (Sort field)
- `order` - সৰ্বাধিক কৰাৰ দিশ (asc/desc)
- `status` - স্থিতি অনুসৰি ছাঁকা (Filter by status)
- `date_created` - তাৰিখৰ সীমা অনুসৰি ছাঁকা (Filter by date range)
