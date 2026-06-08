---
title: مروری بر REST API
sidebar_position: 1
_i18n_hash: 4e511d92e0002dff445f45ff05adbeda
---
# مرجع REST API

## پیکربندی پایه

**Base URL:** `{site_url}/wp-json/wu/v2/`
**احراز هویت:** کلید و راز API (HTTP Basic Auth یا پارامترهای URL)

## احراز هویت

### فعال‌سازی API
```php
// Enable API in Ultimate Multisite settings or programmatically
wu_save_setting('enable_api', true);
```

### دریافت اعتبارنامه API
```php
$api_key = wu_get_setting('api_key');
$api_secret = wu_get_setting('api_secret');
```

### روش‌های احراز هویت

**HTTP Basic Auth (توصیه شده):**
```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

**پارامترهای URL:**
```bash
curl "https://yoursite.com/wp-json/wu/v2/customers?api_key=your_key&api_secret=your_secret"
```

## Endpoints اصلی

### ۱. API مشتریان (Customers API)

**مسیر پایه:** `/customers`

**دریافت همه مشتریان**
```http
GET /wu/v2/customers
```

**دریافت یک مشتری خاص**
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

### ۲. API سایت‌ها (Sites API)

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

### ۳. API عضویت‌ها (Memberships API)

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

### ۴. API محصولات (Products API)

**مسیر پایه:** `/products`

**دریافت همه محصولات**
```http
GET /wu/v2/products
```

### ۵. API پرداخت‌ها (Payments API)

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

### ۶. API دامنه‌ها (Domains API)

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

## Endpoint ثبت‌نام

Endpoint `/register` یک جریان کامل از فرآیند پرداخت/ثبت‌نام را فراهم می‌کند:

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

**پاسخ (Response):**
```json
{
    "customer": { ... },
    "membership": { ... },
    "payment": { ... },
    "site": { "id": 123 }
}
```

## پاسخ‌های خطا (Error Responses)

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

## صفحه‌بندی و فیلتر کردن

**پارامترهای Query:**
```http
GET /wu/v2/customers?per_page=20&page=2&search=john&status=active
```

پارامترهای رایج:
- `per_page` - تعداد آیتم‌ها در هر صفحه (پیش‌فرض: ۲۰، حداکثر: ۱۰۰)
- `page` - شماره صفحه
- `search` - عبارت جستجو
- `orderby` - فیلد مرتب‌سازی
- `order` - جهت مرتب‌سازی (asc/desc)
- `status` - فیلتر بر اساس وضعیت
- `date_created` - فیلتر بر اساس بازه تاریخ
