---
title: REST API کا جائزہ
sidebar_position: 1
_i18n_hash: cabcc173f6a77e5de94e39fff19bc2fa
---
# REST API حوالہ

## بنیادی ترتیب {#base-configuration}

**بنیادی URL:** `{site_url}/wp-json/wu/v2/`
**توثیق:** API کلید اور خفیہ (HTTP Basic Auth یا URL پیرامیٹرز)

## توثیق {#authentication}

### API فعال کریں {#enable-api}
```php
// Enable API in Ultimate Multisite settings or programmatically
wu_save_setting('enable_api', true);
```

### API اسناد حاصل کریں {#get-api-credentials}
```php
$api_key = wu_get_setting('api_key');
$api_secret = wu_get_setting('api_secret');
```

### توثیق کے طریقے {#authentication-methods}

**HTTP Basic Auth (تجویز کردہ):**
```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

**URL پیرامیٹرز:**
```bash
curl "https://yoursite.com/wp-json/wu/v2/customers?api_key=your_key&api_secret=your_secret"
```

## بنیادی endpoints {#core-endpoints}

### 1. صارفین API {#1-customers-api}

**بنیادی روٹ:** `/customers`

**تمام صارفین حاصل کریں**
```http
GET /wu/v2/customers
```

**ایک صارف حاصل کریں**
```http
GET /wu/v2/customers/{id}
```

**صارف بنائیں**
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

**صارف اپ ڈیٹ کریں**
```http
PUT /wu/v2/customers/{id}
Content-Type: application/json

{
    "vip": true,
    "extra_information": "VIP customer notes"
}
```

**صارف حذف کریں**
```http
DELETE /wu/v2/customers/{id}
```

### 2. سائٹس API {#2-sites-api}

**بنیادی روٹ:** `/sites`

**سائٹ بنائیں**
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

### 3. رکنیتیں API {#3-memberships-api}

**بنیادی روٹ:** `/memberships`

**رکنیت بنائیں**
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

### 4. مصنوعات API {#4-products-api}

**بنیادی روٹ:** `/products`

**تمام مصنوعات حاصل کریں**
```http
GET /wu/v2/products
```

### 5. ادائیگیاں API {#5-payments-api}

**بنیادی روٹ:** `/payments`

**ادائیگی بنائیں**
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

### 6. ڈومینز API {#6-domains-api}

**بنیادی روٹ:** `/domains`

**ڈومین میپ کریں**
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

## رجسٹریشن endpoint {#registration-endpoint}

`/register` endpoint ایک مکمل checkout/رجسٹریشن بہاؤ فراہم کرتا ہے:

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

**جواب:**
```json
{
    "customer": { ... },
    "membership": { ... },
    "payment": { ... },
    "site": { "id": 123 }
}
```

## خود مختار Tenant endpoints {#sovereign-tenant-endpoints}

Ultimate Multisite: Multi-Tenancy 1.2.0 انضمامات کے لیے خود مختار tenant REST کوریج شامل کرتا ہے جو الگ تھلگ tenants فراہم، معائنہ، یا تصدیق کرتے ہیں۔

درخواست کا درست payload فعال host صلاحیت پر منحصر ہے، لیکن انضمامات کو ان endpoint گروپس کی توقع کرنی چاہیے:

```http
POST /wu/v2/tenants/{site_id}/bootstrap
GET /wu/v2/tenants/{site_id}/migration-status
POST /wu/v2/tenants/{site_id}/verify
DELETE /wu/v2/tenants/{site_id}
```

tenant رجسٹری، ڈیٹابیس، فائل سسٹم، اور روٹنگ حالت تیار کرنے کے لیے bootstrap endpoint استعمال کریں۔ پیداوار ٹریفک منتقل کرنے سے پہلے migration status اور verification endpoints استعمال کریں۔ خود مختار teardown کے لیے deletion endpoint استعمال کریں تاکہ ڈیٹابیس اسناد addon cleanup بہاؤ کے ذریعے ہٹا دی جائیں۔

عام migration status جوابات میں شامل ہیں:

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

`ready: false` کو آغاز سے پہلے کی رکاوٹ سمجھیں۔ verification تفصیلات چیک کریں، ڈیٹابیس host binding، queue، user provisioning، یا routing مسئلہ درست کریں، پھر verification دوبارہ کوشش کریں۔

## خرابی کے جوابات {#error-responses}

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

## صفحہ بندی اور فلٹرنگ {#pagination-and-filtering}

**Query Parameters:**
```http
GET /wu/v2/customers?per_page=20&page=2&search=john&status=active
```

عام پیرامیٹرز:
- `per_page` - فی صفحہ آئٹمز (طے شدہ: 20، زیادہ سے زیادہ: 100)
- `page` - صفحہ نمبر
- `search` - تلاش کی اصطلاح
- `orderby` - ترتیب دینے کا فیلڈ
- `order` - ترتیب کی سمت (asc/desc)
- `status` - status کے لحاظ سے فلٹر کریں
- `date_created` - تاریخ کی حد کے لحاظ سے فلٹر کریں
