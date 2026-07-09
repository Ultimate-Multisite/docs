---
title: نظرة عامة على REST API
sidebar_position: 1
_i18n_hash: cabcc173f6a77e5de94e39fff19bc2fa
---
# مرجع REST API

## الإعداد الأساسي

**Base URL:** `{site_url}/wp-json/wu/v2/`
**المصادقة:** مفتاح API والسر (HTTP Basic Auth أو معاملات URL)

## المصادقة

### تفعيل API
```php
// Enable API in Ultimate Multisite settings or programmatically
wu_save_setting('enable_api', true);
```

### الحصول على بيانات اعتماد API
```php
$api_key = wu_get_setting('api_key');
$api_secret = wu_get_setting('api_secret');
```

### طرق المصادقة

**HTTP Basic Auth (موصى به):**
```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

**معاملات URL:**
```bash
curl "https://yoursite.com/wp-json/wu/v2/customers?api_key=your_key&api_secret=your_secret"
```

## نقاط النهاية الأساسية

### 1. API العملاء

**المسار الأساسي:** `/customers`

**الحصول على جميع العملاء**
```http
GET /wu/v2/customers
```

**الحصول على عميل واحد**
```http
GET /wu/v2/customers/{id}
```

**إنشاء عميل**
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

**تحديث عميل**
```http
PUT /wu/v2/customers/{id}
Content-Type: application/json

{
    "vip": true,
    "extra_information": "VIP customer notes"
}
```

**حذف عميل**
```http
DELETE /wu/v2/customers/{id}
```

### 2. API المواقع

**المسار الأساسي:** `/sites`

**إنشاء موقع**
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

### 3. API العضويات

**المسار الأساسي:** `/memberships`

**إنشاء عضوية**
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

### 4. API المنتجات

**المسار الأساسي:** `/products`

**الحصول على جميع المنتجات**
```http
GET /wu/v2/products
```

### 5. API المدفوعات

**المسار الأساسي:** `/payments`

**إنشاء دفعة**
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

### 6. API النطاقات

**المسار الأساسي:** `/domains`

**ربط نطاق**
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

## نقطة نهاية التسجيل

توفر نقطة النهاية `/register` تدفق دفع/تسجيل كاملًا:

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

**الاستجابة:**
```json
{
    "customer": { ... },
    "membership": { ... },
    "payment": { ... },
    "site": { "id": 123 }
}
```

## نقاط نهاية المستأجر السيادي

يضيف Ultimate Multisite: Multi-Tenancy 1.2.0 تغطية REST للمستأجر السيادي للتكاملات التي تنشئ مستأجرين معزولين أو تفحصهم أو تتحقق منهم.

تعتمد حمولة الطلب الدقيقة على قدرة المضيف المفعّلة، لكن ينبغي أن تتوقع التكاملات مجموعات نقاط النهاية هذه:

```http
POST /wu/v2/tenants/{site_id}/bootstrap
GET /wu/v2/tenants/{site_id}/migration-status
POST /wu/v2/tenants/{site_id}/verify
DELETE /wu/v2/tenants/{site_id}
```

استخدم نقطة نهاية bootstrap لتحضير سجل المستأجر وقاعدة البيانات ونظام الملفات وحالة التوجيه. استخدم نقاط نهاية حالة الترحيل والتحقق قبل تحويل حركة مرور الإنتاج. استخدم نقطة نهاية الحذف للتفكيك السيادي بحيث تتم إزالة بيانات اعتماد قاعدة البيانات عبر تدفق تنظيف الإضافة.

تتضمن استجابات حالة الترحيل النموذجية ما يلي:

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

تعامل مع `ready: false` كمانع قبل الإطلاق. تحقق من تفاصيل التحقق، وأصلح ربط مضيف قاعدة البيانات أو قائمة الانتظار أو توفير المستخدمين أو مشكلة التوجيه، ثم أعد محاولة التحقق.

## استجابات الأخطاء

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

## ترقيم الصفحات والتصفية

**معاملات الاستعلام:**
```http
GET /wu/v2/customers?per_page=20&page=2&search=john&status=active
```

المعاملات الشائعة:
- `per_page` - العناصر لكل صفحة (الافتراضي: 20، الحد الأقصى: 100)
- `page` - رقم الصفحة
- `search` - مصطلح البحث
- `orderby` - حقل الفرز
- `order` - اتجاه الفرز (asc/desc)
- `status` - التصفية حسب الحالة
- `date_created` - التصفية حسب نطاق التاريخ
