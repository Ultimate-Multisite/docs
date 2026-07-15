---
title: نمای کلی REST API
sidebar_position: 1
_i18n_hash: cabcc173f6a77e5de94e39fff19bc2fa
---
# مرجع REST API

## پیکربندی پایه {#base-configuration}

**URL پایه:** `{site_url}/wp-json/wu/v2/`
**احراز هویت:** API Key و Secret (HTTP Basic Auth یا پارامترهای URL)

## احراز هویت {#authentication}

### فعال‌سازی API {#enable-api}
```php
// Enable API in Ultimate Multisite settings or programmatically
wu_save_setting('enable_api', true);
```

### دریافت اعتبارنامه‌های API {#get-api-credentials}
```php
$api_key = wu_get_setting('api_key');
$api_secret = wu_get_setting('api_secret');
```

### روش‌های احراز هویت {#authentication-methods}

**HTTP Basic Auth (توصیه‌شده):**
```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

**پارامترهای URL:**
```bash
curl "https://yoursite.com/wp-json/wu/v2/customers?api_key=your_key&api_secret=your_secret"
```

## نقاط پایانی اصلی {#core-endpoints}

### 1. API مشتریان {#1-customers-api}

**مسیر پایه:** `/customers`

**دریافت همه مشتریان**
```http
GET /wu/v2/customers
```

**دریافت یک مشتری**
```http
GET /wu/v2/customers/{id}
```

**ایجاد مشتری**
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

**به‌روزرسانی مشتری**
```http
PUT /wu/v2/customers/{id}
Content-Type: application/json

{
    "vip": true,
    "extra_information": "VIP customer notes"
}
```

**حذف مشتری**
```http
DELETE /wu/v2/customers/{id}
```

### 2. API سایت‌ها {#2-sites-api}

**مسیر پایه:** `/sites`

**ایجاد سایت**
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

### 3. API عضویت‌ها {#3-memberships-api}

**مسیر پایه:** `/memberships`

**ایجاد عضویت**
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

### 4. API محصولات {#4-products-api}

**مسیر پایه:** `/products`

**دریافت همه محصولات**
```http
GET /wu/v2/products
```

### 5. API پرداخت‌ها {#5-payments-api}

**مسیر پایه:** `/payments`

**ایجاد پرداخت**
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

### 6. API دامنه‌ها {#6-domains-api}

**مسیر پایه:** `/domains`

**نگاشت دامنه**
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

## نقطه پایانی ثبت‌نام {#registration-endpoint}

نقطه پایانی `/register` یک جریان کامل پرداخت/ثبت‌نام ارائه می‌دهد:

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

**پاسخ:**
```json
{
    "customer": { ... },
    "membership": { ... },
    "payment": { ... },
    "site": { "id": 123 }
}
```

## نقاط پایانی مستأجر مستقل {#sovereign-tenant-endpoints}

Ultimate Multisite: Multi-Tenancy 1.2.0 پوشش REST مستأجر مستقل را برای یکپارچه‌سازی‌هایی اضافه می‌کند که مستأجران ایزوله را فراهم‌سازی، بررسی یا تأیید می‌کنند.

محتوای دقیق درخواست به قابلیت میزبان فعال‌شده بستگی دارد، اما یکپارچه‌سازی‌ها باید انتظار این گروه‌های نقطه پایانی را داشته باشند:

```http
POST /wu/v2/tenants/{site_id}/bootstrap
GET /wu/v2/tenants/{site_id}/migration-status
POST /wu/v2/tenants/{site_id}/verify
DELETE /wu/v2/tenants/{site_id}
```

از نقطه پایانی bootstrap برای آماده‌سازی رجیستری مستأجر، پایگاه داده، سیستم فایل و وضعیت مسیریابی استفاده کنید. پیش از تغییر ترافیک تولید، از نقاط پایانی وضعیت مهاجرت و تأیید استفاده کنید. از نقطه پایانی حذف برای برچیدن مستقل استفاده کنید تا اعتبارنامه‌های پایگاه داده از طریق جریان پاک‌سازی افزونه حذف شوند.

پاسخ‌های معمول وضعیت مهاجرت شامل موارد زیر هستند:

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

`ready: false` را به‌عنوان یک مانع پیش از راه‌اندازی در نظر بگیرید. جزئیات تأیید را بررسی کنید، مشکل اتصال میزبان پایگاه داده، صف، فراهم‌سازی کاربر یا مسیریابی را برطرف کنید، سپس تأیید را دوباره امتحان کنید.

## پاسخ‌های خطا {#error-responses}

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

## صفحه‌بندی و فیلتر کردن {#pagination-and-filtering}

**پارامترهای پرس‌وجو:**
```http
GET /wu/v2/customers?per_page=20&page=2&search=john&status=active
```

پارامترهای رایج:
- `per_page` - آیتم‌ها در هر صفحه (پیش‌فرض: 20، حداکثر: 100)
- `page` - شماره صفحه
- `search` - عبارت جست‌وجو
- `orderby` - فیلد مرتب‌سازی
- `order` - جهت مرتب‌سازی (asc/desc)
- `status` - فیلتر بر اساس وضعیت
- `date_created` - فیلتر بر اساس بازه تاریخ
