---
title: پوختەی REST API
sidebar_position: 1
_i18n_hash: cabcc173f6a77e5de94e39fff19bc2fa
---
# پەڕاویزی REST API {#rest-api-reference}

## ڕێکخستنی بنەڕەتی {#base-configuration}

**URLی بنەڕەت:** `{site_url}/wp-json/wu/v2/`
**ڕەسەنایەتی:** کلیلی API و نهێنی (HTTP Basic Auth یان پارامیتەرەکانی URL)

## ڕەسەنایەتی {#authentication}

### چالاککردنی API {#enable-api}
```php
// Enable API in Ultimate Multisite settings or programmatically
wu_save_setting('enable_api', true);
```

### وەرگرتنی بڕوانامەکانی API {#get-api-credentials}
```php
$api_key = wu_get_setting('api_key');
$api_secret = wu_get_setting('api_secret');
```

### شێوازەکانی ڕەسەنایەتی {#authentication-methods}

**HTTP Basic Auth (پێشنیارکراو):**
```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

**پارامیتەرەکانی URL:**
```bash
curl "https://yoursite.com/wp-json/wu/v2/customers?api_key=your_key&api_secret=your_secret"
```

## خاڵە کۆتاییە سەرەکییەکان {#core-endpoints}

### 1. APIی کڕیاران {#1-customers-api}

**ڕێڕەوی بنەڕەت:** `/customers`

**وەرگرتنی هەموو کڕیاران**
```http
GET /wu/v2/customers
```

**وەرگرتنی کڕیاری تاک**
```http
GET /wu/v2/customers/{id}
```

**دروستکردنی کڕیار**
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

**نوێکردنەوەی کڕیار**
```http
PUT /wu/v2/customers/{id}
Content-Type: application/json

{
    "vip": true,
    "extra_information": "VIP customer notes"
}
```

**سڕینەوەی کڕیار**
```http
DELETE /wu/v2/customers/{id}
```

### 2. APIی ماڵپەڕەکان {#2-sites-api}

**ڕێڕەوی بنەڕەت:** `/sites`

**دروستکردنی ماڵپەڕ**
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

### 3. APIی ئەندامێتییەکان {#3-memberships-api}

**ڕێڕەوی بنەڕەت:** `/memberships`

**دروستکردنی ئەندامێتی**
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

### 4. APIی بەرهەمەکان {#4-products-api}

**ڕێڕەوی بنەڕەت:** `/products`

**وەرگرتنی هەموو بەرهەمەکان**
```http
GET /wu/v2/products
```

### 5. APIی پارەدانەکان {#5-payments-api}

**ڕێڕەوی بنەڕەت:** `/payments`

**دروستکردنی پارەدان**
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

### 6. APIی دۆمەینەکان {#6-domains-api}

**ڕێڕەوی بنەڕەت:** `/domains`

**نەخشەکردنی دۆمەین**
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

## خاڵی کۆتایی تۆمارکردن {#registration-endpoint}

خاڵی کۆتایی `/register` پرۆسەیەکی تەواوی checkout/تۆمارکردن دابین دەکات:

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

**وەڵام:**
```json
{
    "customer": { ... },
    "membership": { ... },
    "payment": { ... },
    "site": { "id": 123 }
}
```

## خاڵە کۆتاییەکانی کرێچی سەربەخۆ {#sovereign-tenant-endpoints}

Ultimate Multisite: Multi-Tenancy 1.2.0 داپۆشینی RESTی کرێچی سەربەخۆ زیاد دەکات بۆ ئەو یەکخستنەوانەی کە کرێچییە دابڕاوەکان دابین دەکەن، پشکنینیان دەکەن، یان پشتڕاستیان دەکەنەوە.

بارە داواکارییە وردەکە پشت بە توانای خانەخوێی چالاک دەبەستێت، بەڵام یەکخستنەکان پێویستە چاوەڕێی ئەم گرووپە خاڵە کۆتاییانە بن:

```http
POST /wu/v2/tenants/{site_id}/bootstrap
GET /wu/v2/tenants/{site_id}/migration-status
POST /wu/v2/tenants/{site_id}/verify
DELETE /wu/v2/tenants/{site_id}
```

خاڵی کۆتایی bootstrap بەکاربهێنە بۆ ئامادەکردنی تۆماری کرێچی، بنکەدراوە، سیستەمی فایل، و دۆخی ڕێگەدان. خاڵە کۆتاییەکانی دۆخی کۆچکردن و پشتڕاستکردنەوە بەکاربهێنە پێش گۆڕینی هاتوچۆی بەرهەمهێنان. خاڵی کۆتایی سڕینەوە بەکاربهێنە بۆ هەڵوەشاندنەوەی سەربەخۆ تاکو بڕوانامەکانی بنکەدراوە لە ڕێگەی پرۆسەی پاککردنەوەی زیادکراوەکەوە لاببرێن.

وەڵامە ئاساییەکانی دۆخی کۆچکردن بریتین لە:

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

`ready: false` وەک ڕێگرێکی پێش-دەستپێکردن مامەڵە بکە. وردەکارییەکانی پشتڕاستکردنەوە بپشکنە، بەستنی خانەخوێی بنکەدراوە، ڕیز، دابینکردنی بەکارهێنەر، یان کێشەی ڕێگەدان چاک بکە، پاشان دووبارە پشتڕاستکردنەوە تاقی بکەوە.

## وەڵامەکانی هەڵە {#error-responses}

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

## لاپەڕەکردن و پاڵاوتن {#pagination-and-filtering}

**پارامیتەرەکانی پرسیار:**
```http
GET /wu/v2/customers?per_page=20&page=2&search=john&status=active
```

پارامیتەرە باوەکان:
- `per_page` - بڕگەکان بۆ هەر لاپەڕەیەک (بنەڕەت: 20، زۆرترین: 100)
- `page` - ژمارەی لاپەڕە
- `search` - دەستەواژەی گەڕان
- `orderby` - خانەی ڕیزکردن
- `order` - ئاراستەی ڕیزکردن (asc/desc)
- `status` - پاڵاوتن بەپێی دۆخ
- `date_created` - پاڵاوتن بەپێی مەودای بەروار
