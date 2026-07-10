---
title: REST API অৱলোকন
sidebar_position: 1
_i18n_hash: cabcc173f6a77e5de94e39fff19bc2fa
---
# REST API ৰেফাৰেন্স {#rest-api-reference}

## ভিত্তি কনফিগাৰেচন {#base-configuration}

**ভিত্তি URL:** `{site_url}/wp-json/wu/v2/`
**প্ৰমাণীকৰণ:** API Key আৰু Secret (HTTP Basic Auth বা URL Parameters)

## প্ৰমাণীকৰণ {#authentication}

### API সক্ৰিয় কৰক {#enable-api}
```php
// Enable API in Ultimate Multisite settings or programmatically
wu_save_setting('enable_api', true);
```

### API ক্ৰেডেনচিয়েল লাভ কৰক {#get-api-credentials}
```php
$api_key = wu_get_setting('api_key');
$api_secret = wu_get_setting('api_secret');
```

### প্ৰমাণীকৰণ পদ্ধতিসমূহ {#authentication-methods}

**HTTP Basic Auth (পৰামৰ্শিত):**
```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

**URL Parameters:**
```bash
curl "https://yoursite.com/wp-json/wu/v2/customers?api_key=your_key&api_secret=your_secret"
```

## মূল এণ্ডপইণ্টসমূহ {#core-endpoints}

### 1. গ্ৰাহক API {#1-customers-api}

**ভিত্তি ৰুট:** `/customers`

**সকলো গ্ৰাহক লাভ কৰক**
```http
GET /wu/v2/customers
```

**এজন গ্ৰাহক লাভ কৰক**
```http
GET /wu/v2/customers/{id}
```

**গ্ৰাহক সৃষ্টি কৰক**
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

**গ্ৰাহক আপডেট কৰক**
```http
PUT /wu/v2/customers/{id}
Content-Type: application/json

{
    "vip": true,
    "extra_information": "VIP customer notes"
}
```

**গ্ৰাহক মচি পেলাওক**
```http
DELETE /wu/v2/customers/{id}
```

### 2. ছাইটসমূহৰ API {#2-sites-api}

**ভিত্তি ৰুট:** `/sites`

**ছাইট সৃষ্টি কৰক**
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

### 3. সদস্যপদসমূহৰ API {#3-memberships-api}

**ভিত্তি ৰুট:** `/memberships`

**সদস্যপদ সৃষ্টি কৰক**
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

### 4. প্ৰডাক্টসমূহৰ API {#4-products-api}

**ভিত্তি ৰুট:** `/products`

**সকলো প্ৰডাক্ট লাভ কৰক**
```http
GET /wu/v2/products
```

### 5. পেমেণ্টসমূহৰ API {#5-payments-api}

**ভিত্তি ৰুট:** `/payments`

**পেমেণ্ট সৃষ্টি কৰক**
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

### 6. ডমেইনসমূহৰ API {#6-domains-api}

**ভিত্তি ৰুট:** `/domains`

**ডমেইন মেপ কৰক**
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

## পঞ্জীয়ন এণ্ডপইণ্ট {#registration-endpoint}

`/register` এণ্ডপইণ্টে এটা সম্পূৰ্ণ ক্ৰয়-সম্পূৰ্ণকৰণ/পঞ্জীয়ন প্ৰবাহ প্ৰদান কৰে:

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

**প্ৰতিক্ৰিয়া:**
```json
{
    "customer": { ... },
    "membership": { ... },
    "payment": { ... },
    "site": { "id": 123 }
}
```

## সাৰ্বভৌম টেনেণ্ট এণ্ডপইণ্টসমূহ {#sovereign-tenant-endpoints}

Ultimate Multisite: Multi-Tenancy 1.2.0-এ পৃথক কৰা টেনেণ্ট প্ৰভিজন, পৰিদৰ্শন, বা যাচাই কৰা সংহতিসমূহৰ বাবে সাৰ্বভৌম টেনেণ্ট REST সমৰ্থন যোগ কৰে।

সঠিক অনুৰোধ পে’ল’ড সক্ৰিয় কৰা হ’ষ্ট ক্ষমতাৰ ওপৰত নিৰ্ভৰ কৰে, কিন্তু সংহতিসমূহে এই এণ্ডপইণ্ট গোটসমূহ আশা কৰিব লাগে:

```http
POST /wu/v2/tenants/{site_id}/bootstrap
GET /wu/v2/tenants/{site_id}/migration-status
POST /wu/v2/tenants/{site_id}/verify
DELETE /wu/v2/tenants/{site_id}
```

টেনেণ্ট ৰেজিষ্ট্ৰী, ডাটাবেছ, ফাইলচিষ্টেম, আৰু ৰাউটিং অৱস্থা প্ৰস্তুত কৰিবলৈ bootstrap এণ্ডপইণ্ট ব্যৱহাৰ কৰক। উৎপাদন ট্ৰেফিক সলনি কৰাৰ আগতে migration status আৰু verification এণ্ডপইণ্ট ব্যৱহাৰ কৰক। সাৰ্বভৌম ভাঙি পেলোৱাৰ বাবে deletion এণ্ডপইণ্ট ব্যৱহাৰ কৰক যাতে ডাটাবেছ ক্ৰেডেনচিয়েলসমূহ অ্যাডঅন পৰিষ্কাৰকৰণ প্ৰবাহৰ জৰিয়তে আঁতৰোৱা হয়।

সাধাৰণ migration status প্ৰতিক্ৰিয়াসমূহত অন্তৰ্ভুক্ত থাকে:

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

`ready: false`-ক আৰম্ভণিৰ পূৰ্বৰ বাধা হিচাপে গণ্য কৰক। যাচাইৰ বিৱৰণ পৰীক্ষা কৰক, ডাটাবেছ হ’ষ্ট বাইণ্ডিং, কিউ, ব্যৱহাৰকাৰী প্ৰভিজনিং, বা ৰাউটিং সমস্যা ঠিক কৰক, তাৰ পিছত পুনৰ যাচাই চেষ্টা কৰক।

## ত্ৰুটি প্ৰতিক্ৰিয়াসমূহ {#error-responses}

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

## পৃষ্ঠাবিভাজন আৰু ফিল্টাৰিং {#pagination-and-filtering}

**কুৱেৰী পেৰামিটাৰসমূহ:**
```http
GET /wu/v2/customers?per_page=20&page=2&search=john&status=active
```

সাধাৰণ পেৰামিটাৰসমূহ:
- `per_page` - প্ৰতি পৃষ্ঠাৰ আইটেম (ডিফল্ট: 20, সৰ্বাধিক: 100)
- `page` - পৃষ্ঠা নম্বৰ
- `search` - সন্ধান শব্দ
- `orderby` - ছৰ্ট ক্ষেত্ৰ
- `order` - ছৰ্ট দিশ (asc/desc)
- `status` - অৱস্থা অনুসৰি ফিল্টাৰ কৰক
- `date_created` - তাৰিখ পৰিসৰ অনুসৰি ফিল্টাৰ কৰক
