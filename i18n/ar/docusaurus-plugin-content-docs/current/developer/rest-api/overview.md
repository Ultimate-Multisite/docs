---
title: نظرة عامة على REST API
sidebar_position: 1
_i18n_hash: 4e511d92e0002dff445f45ff05adbeda
---
# مرجع واجهة برمجة التطبيقات

## التكوين الأساسي

**URL الأساسي:** `{site_url}/wp-json/wu/v2/`  
**المصادقة:** مفتاح API & سري (المصادقة الأساسية HTTP أو معلمات URL)

## المصادقة

### تمكين واجهة برمجة التطبيقات
```php
// تمكين واجهة برمجة التطبيقات في إعدادات Ultimate Multisite أو برمجياً
wu_save_setting('enable_api', true);
```

### الحصول على بيانات اعتماد واجهة برمجة التطبيقات
```php
$api_key = wu_get_setting('api_key');
$api_secret = wu_get_setting('api_secret');
```

### طرق المصادقة

**المصادقة الأساسية HTTP (مستحسن):**
```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

**معلمات URL:**
```bash
curl "https://yoursite.com/wp-json/wu/v2/customers?api_key=your_key&api_secret=your_secret"
```

## نقاط النهاية الأساسية

### 1. واجهة برمجة التطبيقات للعملاء

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

### 2. واجهة برمجة التطبيقات للمواقع

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

### 3. واجهة برمجة التطبيقات للأعضاء

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

### 4. واجهة برمجة التطبيقات للمنتجات

**المسار الأساسي:** `/products`

**الحصول على جميع المنتجات**
```http
GET /wu/v2/products
```

### 5. واجهة برمجة التطبيقات للمدفوعات

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

### 6. واجهة برمجة التطبيقات للنطاقات

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

## نقطة النهاية للتسجيل

توفر نقطة النهاية `/register` تدفقًا كاملًا للشراء/التسجيل:
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

## الترقيم والتصفية

**معلمات الاستعلام:**
```http
GET /wu/v2/customers?per_page=20&page=2&search=john&status=active
```

المعلمات الشائعة:
- `per_page` - عدد العناصر لكل صفحة (الافتراضي: 20، الحد الأقصى: 100)
- `page` - رقم الصفحة
- `search` - مصطلح البحث
- `orderby` - حقل الترتيب
- `order` - اتجاه الترتيب (تصاعدي/تنازلي)
- `status` - تصفية حسب الحالة
- `date_created` - تصفية حسب نطاق التاريخ
