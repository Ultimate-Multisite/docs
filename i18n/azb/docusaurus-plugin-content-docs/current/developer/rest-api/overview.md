---
title: REST API گؤرونتوسو
sidebar_position: 1
_i18n_hash: cabcc173f6a77e5de94e39fff19bc2fa
---
# REST API قایناقچاسی

## پایه تنظیمات {#base-configuration}

**پایه URL:** `{site_url}/wp-json/wu/v2/`
**کیملیک دوغرولاماسی:** API Key و Secret (HTTP Basic Auth یا URL پارامترلری)

## کیملیک دوغرولاماسی {#authentication}

### API-نی فعال ائدین {#enable-api}
```php
// Enable API in Ultimate Multisite settings or programmatically
wu_save_setting('enable_api', true);
```

### API کیملیک بیلگی‌لرینی آلین {#get-api-credentials}
```php
$api_key = wu_get_setting('api_key');
$api_secret = wu_get_setting('api_secret');
```

### کیملیک دوغرولاما یوللاری {#authentication-methods}

**HTTP Basic Auth (توصیه اولونان):**
```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

**URL پارامترلری:**
```bash
curl "https://yoursite.com/wp-json/wu/v2/customers?api_key=your_key&api_secret=your_secret"
```

## اساسی اوج‌نوختلر {#core-endpoints}

### 1. موشتری‌لر API {#1-customers-api}

**پایه مسیر:** `/customers`

**بوتون موشتری‌لری آلین**
```http
GET /wu/v2/customers
```

**تک موشتری‌نی آلین**
```http
GET /wu/v2/customers/{id}
```

**موشتری یارادین**
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

**موشتری‌نی یئنیله‌یین**
```http
PUT /wu/v2/customers/{id}
Content-Type: application/json

{
    "vip": true,
    "extra_information": "VIP customer notes"
}
```

**موشتری‌نی سیلین**
```http
DELETE /wu/v2/customers/{id}
```

### 2. سایتلر API {#2-sites-api}

**پایه مسیر:** `/sites`

**سایت یارادین**
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

### 3. عضویت‌لر API {#3-memberships-api}

**پایه مسیر:** `/memberships`

**عضویت یارادین**
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

### 4. محصوللار API {#4-products-api}

**پایه مسیر:** `/products`

**بوتون محصوللاری آلین**
```http
GET /wu/v2/products
```

### 5. اودمه‌لر API {#5-payments-api}

**پایه مسیر:** `/payments`

**اودمه یارادین**
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

### 6. دامنه‌لر API {#6-domains-api}

**پایه مسیر:** `/domains`

**دامنه‌نی نقشه‌له‌یین**
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

## قئیدیات اوج‌نوختسی {#registration-endpoint}

`/register` اوج‌نوختسی تام checkout/قئیدیات آخشینی وئریر:

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

**جاواب:**
```json
{
    "customer": { ... },
    "membership": { ... },
    "payment": { ... },
    "site": { "id": 123 }
}
```

## مستقل کرایه‌چی اوج‌نوختلری {#sovereign-tenant-endpoints}

Ultimate Multisite: چوخ‌کرایه‌چیلیک 1.2.0، آیری ساخلا‌نان کرایه‌چی‌لری یارادان، یوخلایان یا دؤغرولایان بیرلشدیرمه‌لر اوچون مستقل کرایه‌چی REST اؤرتویونو آرتیریر.

دقیق ایسته‌ک یاریوکو، فعال ائدیلمیش میزبان قابلیتی‌نه باغلیدیر، اما بیرلشدیرمه‌لر بو اوج‌نوخته قروپلارینی گؤزله‌مه‌لیدیر:

```http
POST /wu/v2/tenants/{site_id}/bootstrap
GET /wu/v2/tenants/{site_id}/migration-status
POST /wu/v2/tenants/{site_id}/verify
DELETE /wu/v2/tenants/{site_id}
```

کرایه‌چی قئید دفترینی، داده‌بانکینی، فایل سیستمی‌نی و یؤنلندیرمه دورومونو حاضیرلاماق اوچون bootstrap اوج‌نوختسیندن ایشلدین. تولید ترافیکینی دگیشدیرمه‌دن اؤنجه کؤچورمه دورومو و دؤغرولاما اوج‌نوختلریندن ایشلدین. مستقل سؤکمه اوچون سیلمه اوج‌نوختسیندن ایشلدین تا داده‌بانکی کیملیک بیلگی‌لری addon تمیزلمه آخیسی ایله سیلینسین.

معمول کؤچورمه دورومو جاوابلارینا بونلار داخیلدیر:

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

`ready: false`-ی یاییما چیخیشدان قاباق بیر انگل کیمی قبول ائدین. دؤغرولاما آیری‌نتیلارینی یوخلایین، داده‌بانکی میزبان باغلاماسینی، نؤوبه‌نی، ایستیفاده‌چی یارادیلماسینی یا یؤنلندیرمه مسئله‌سینی دوزلدین، سونرا دؤغرولامانی یئنه سینایین.

## خطا جاوابلاری {#error-responses}

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

## صفحه‌لمه و فیلترلمه {#pagination-and-filtering}

**سورغو پارامترلری:**
```http
GET /wu/v2/customers?per_page=20&page=2&search=john&status=active
```

اورتاق پارامترلر:
- `per_page` - هر صفحه‌ده آیتم‌لر (وارساییلان: 20، مکسیموم: 100)
- `page` - صفحه نؤمره‌سی
- `search` - آختاریش سؤزو
- `orderby` - سیرالاما ساحه‌سی
- `order` - سیرالاما یؤنو (asc/desc)
- `status` - دوروما گؤره فیلترله
- `date_created` - تاریخ آرا‌لیغینا گؤره فیلترله
