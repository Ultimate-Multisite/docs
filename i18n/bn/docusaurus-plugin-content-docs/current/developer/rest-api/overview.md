---
title: REST API সংক্ষিপ্ত বিবরণ
sidebar_position: 1
_i18n_hash: cabcc173f6a77e5de94e39fff19bc2fa
---
# REST API রেফারেন্স

## বেস কনফিগারেশন {#base-configuration}

**বেস URL:** `{site_url}/wp-json/wu/v2/`
**প্রমাণীকরণ:** API Key ও Secret (HTTP Basic Auth বা URL প্যারামিটার)

## প্রমাণীকরণ {#authentication}

### API সক্রিয় করুন {#enable-api}
```php
// Enable API in Ultimate Multisite settings or programmatically
wu_save_setting('enable_api', true);
```

### API ক্রেডেনশিয়াল নিন {#get-api-credentials}
```php
$api_key = wu_get_setting('api_key');
$api_secret = wu_get_setting('api_secret');
```

### প্রমাণীকরণ পদ্ধতি {#authentication-methods}

**HTTP Basic Auth (প্রস্তাবিত):**
```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

**URL প্যারামিটার:**
```bash
curl "https://yoursite.com/wp-json/wu/v2/customers?api_key=your_key&api_secret=your_secret"
```

## মূল এন্ডপয়েন্ট {#core-endpoints}

### 1. গ্রাহক API {#1-customers-api}

**বেস রুট:** `/customers`

**সব গ্রাহক নিন**
```http
GET /wu/v2/customers
```

**একজন গ্রাহক নিন**
```http
GET /wu/v2/customers/{id}
```

**গ্রাহক তৈরি করুন**
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

**গ্রাহক আপডেট করুন**
```http
PUT /wu/v2/customers/{id}
Content-Type: application/json

{
    "vip": true,
    "extra_information": "VIP customer notes"
}
```

**গ্রাহক মুছুন**
```http
DELETE /wu/v2/customers/{id}
```

### 2. সাইট API {#2-sites-api}

**বেস রুট:** `/sites`

**সাইট তৈরি করুন**
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

### 3. সদস্যতা API {#3-memberships-api}

**বেস রুট:** `/memberships`

**সদস্যতা তৈরি করুন**
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

### 4. পণ্য API {#4-products-api}

**বেস রুট:** `/products`

**সব পণ্য নিন**
```http
GET /wu/v2/products
```

### 5. পেমেন্ট API {#5-payments-api}

**বেস রুট:** `/payments`

**পেমেন্ট তৈরি করুন**
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

### 6. ডোমেইন API {#6-domains-api}

**বেস রুট:** `/domains`

**ডোমেইন ম্যাপ করুন**
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

## নিবন্ধন এন্ডপয়েন্ট {#registration-endpoint}

`/register` এন্ডপয়েন্ট একটি পূর্ণাঙ্গ চেকআউট/নিবন্ধন প্রবাহ দেয়:

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

**প্রতিক্রিয়া:**
```json
{
    "customer": { ... },
    "membership": { ... },
    "payment": { ... },
    "site": { "id": 123 }
}
```

## স্বাধীন টেন্যান্ট এন্ডপয়েন্ট {#sovereign-tenant-endpoints}

Ultimate Multisite: Multi-Tenancy 1.2.0 এমন ইন্টিগ্রেশনের জন্য স্বাধীন টেন্যান্ট REST কভারেজ যোগ করে, যেগুলো বিচ্ছিন্ন টেন্যান্ট প্রভিশন, পরিদর্শন বা যাচাই করে।

সঠিক অনুরোধের পেলোড সক্রিয় হোস্ট সক্ষমতার ওপর নির্ভর করে, তবে ইন্টিগ্রেশনগুলোকে এই এন্ডপয়েন্ট গ্রুপগুলো প্রত্যাশা করা উচিত:

```http
POST /wu/v2/tenants/{site_id}/bootstrap
GET /wu/v2/tenants/{site_id}/migration-status
POST /wu/v2/tenants/{site_id}/verify
DELETE /wu/v2/tenants/{site_id}
```

টেন্যান্ট রেজিস্ট্রি, ডাটাবেস, ফাইলসিস্টেম ও রাউটিং অবস্থা প্রস্তুত করতে bootstrap এন্ডপয়েন্ট ব্যবহার করুন। প্রোডাকশন ট্রাফিক বদলানোর আগে মাইগ্রেশন স্ট্যাটাস ও যাচাইকরণ এন্ডপয়েন্ট ব্যবহার করুন। স্বাধীন টিয়ারডাউনের জন্য মুছে ফেলার এন্ডপয়েন্ট ব্যবহার করুন, যাতে addon ক্লিনআপ প্রবাহের মাধ্যমে ডাটাবেস ক্রেডেনশিয়াল সরানো হয়।

সাধারণ মাইগ্রেশন স্ট্যাটাস প্রতিক্রিয়ায় থাকে:

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

`ready: false`-কে লঞ্চের আগের বাধা হিসেবে ধরুন। যাচাইকরণের বিস্তারিত দেখুন, ডাটাবেস হোস্ট বাইন্ডিং, কিউ, ব্যবহারকারী প্রভিশনিং বা রাউটিং সমস্যা ঠিক করুন, তারপর আবার যাচাই করুন।

## ত্রুটি প্রতিক্রিয়া {#error-responses}

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

## পেজিনেশন ও ফিল্টারিং {#pagination-and-filtering}

**কোয়েরি প্যারামিটার:**
```http
GET /wu/v2/customers?per_page=20&page=2&search=john&status=active
```

সাধারণ প্যারামিটার:
- `per_page` - প্রতি পৃষ্ঠায় আইটেম (ডিফল্ট: 20, সর্বোচ্চ: 100)
- `page` - পৃষ্ঠা নম্বর
- `search` - সার্চ টার্ম
- `orderby` - সাজানোর ফিল্ড
- `order` - সাজানোর দিক (asc/desc)
- `status` - স্ট্যাটাস দিয়ে ফিল্টার করুন
- `date_created` - তারিখের পরিসর দিয়ে ফিল্টার করুন
