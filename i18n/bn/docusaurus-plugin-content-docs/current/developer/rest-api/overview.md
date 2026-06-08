---
title: REST API রূপরেখা
sidebar_position: 1
_i18n_hash: 4e511d92e0002dff445f45ff05adbeda
---
# REST API রেফারেন্স

## বেস কনফিগারেশন

**বেস URL:** `{site_url}/wp-json/wu/v2/`
**অথেন্টিকেশন:** API Key এবং Secret (HTTP Basic Auth বা URL Parameters)

## অথেন্টিকেশন

### API সক্রিয় করা
```php
// Ultimate Multisite সেটিংসে বা প্রোগ্রাম্যাটিকভাবে API সক্রিয় করুন
wu_save_setting('enable_api', true);
```

### API ক্রেডেনশিয়াল পাওয়া
```php
$api_key = wu_get_setting('api_key');
$api_secret = wu_get_setting('api_secret');
```

### অথেন্টিকেশনের পদ্ধতি

**HTTP Basic Auth (পছন্দনীয়):**
```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

**URL প্যারামিটার:**
```bash
curl "https://yoursite.com/wp-json/wu/v2/customers?api_key=your_key&api_secret=your_secret"
```

## কোর এন্ডপয়েন্টগুলো

### ১. Customers API

**বেস রুট:** `/customers`

**সব গ্রাহক পাওয়া (Get All Customers)**
```http
GET /wu/v2/customers
```

**একটি নির্দিষ্ট গ্রাহক পাওয়া (Get Single Customer)**
```http
GET /wu/v2/customers/{id}
```

**গ্রাহক তৈরি করা (Create Customer)**
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

**গ্রাহক আপডেট করা (Update Customer)**
```http
PUT /wu/v2/customers/{id}
Content-Type: application/json

{
    "vip": true,
    "extra_information": "VIP customer notes"
}
```

**গ্রাহক মুছে ফেলা (Delete Customer)**
```http
DELETE /wu/v2/customers/{id}
```

### ২. Sites API

**বেস রুট:** `/sites`

**সাইট তৈরি করা (Create Site)**
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

### ৩. Memberships API

**বেস রুট:** `/memberships`

**মেম্বারশিপ তৈরি করা (Create Membership)**
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

### ৪. Products API

**বেস রুট:** `/products`

**সব প্রোডাক্ট পাওয়া (Get All Products)**
```http
GET /wu/v2/products
```

### ৫. Payments API

**বেস রুট:** `/payments`

**পেমেন্ট তৈরি করা (Create Payment)**
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

### ৬. Domains API

**বেস রুট:** `/domains`

**ডোমেইন ম্যাপ করা (Map Domain)**
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

## রেজিস্ট্রেশন এন্ডপয়েন্ট

`/register` এন্ডপয়েন্টটি একটি সম্পূর্ণ চেকআউট/রেজিস্ট্রেশন ফ্লো প্রদান করে:

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

**রেসপন্স:**
```json
{
    "customer": { ... },
    "membership": { ... },
    "payment": { ... },
    "site": { "id": 123 }
}
```

## ত্রুটি রেসপন্স (Error Responses)

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

## পেজিনেশন এবং ফিল্টারিং

**কোয়েরি প্যারামিটার:**
```http
GET /wu/v2/customers?per_page=20&page=2&search=john&status=active
```

সাধারণ প্যারামিটারগুলো:
- `per_page` - প্রতি পৃষ্ঠায় আইটেমের সংখ্যা (ডিফল্ট: 20, সর্বোচ্চ: 100)
- `page` - পৃষ্ঠা নম্বর
- `search` - সার্চ করার শব্দ
- `orderby` - সাজানোর ফিল্ড
- `order` - সাজানোর দিক (asc/desc)
- `status` - স্ট্যাটাস অনুযায়ী ফিল্টার করা
- `date_created` - তারিখের পরিসর অনুযায়ী ফিল্টার করা
