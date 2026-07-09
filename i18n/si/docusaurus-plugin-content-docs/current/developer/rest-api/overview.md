---
title: REST API දළ විශ්ලේෂණය
sidebar_position: 1
_i18n_hash: cabcc173f6a77e5de94e39fff19bc2fa
---
# REST API යොමුව

## මූලික වින්‍යාසය

**මූලික URL:** `{site_url}/wp-json/wu/v2/`
**සත්‍යාපනය:** API Key සහ Secret (HTTP Basic Auth හෝ URL පරාමිති)

## සත්‍යාපනය

### API සක්‍රීය කරන්න
```php
// Enable API in Ultimate Multisite settings or programmatically
wu_save_setting('enable_api', true);
```

### API අක්තපත්‍ර ලබා ගන්න
```php
$api_key = wu_get_setting('api_key');
$api_secret = wu_get_setting('api_secret');
```

### සත්‍යාපන ක්‍රම

**HTTP Basic Auth (නිර්දේශිත):**
```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

**URL පරාමිති:**
```bash
curl "https://yoursite.com/wp-json/wu/v2/customers?api_key=your_key&api_secret=your_secret"
```

## ප්‍රධාන අන්ත ලක්ෂ්‍ය

### 1. පාරිභෝගික API

**මූලික මාර්ගය:** `/customers`

**සියලු පාරිභෝගිකයන් ලබා ගන්න**
```http
GET /wu/v2/customers
```

**තනි පාරිභෝගිකයෙකු ලබා ගන්න**
```http
GET /wu/v2/customers/{id}
```

**පාරිභෝගිකයෙකු සාදන්න**
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

**පාරිභෝගිකයෙකු යාවත්කාලීන කරන්න**
```http
PUT /wu/v2/customers/{id}
Content-Type: application/json

{
    "vip": true,
    "extra_information": "VIP customer notes"
}
```

**පාරිභෝගිකයෙකු මකන්න**
```http
DELETE /wu/v2/customers/{id}
```

### 2. අඩවි API

**මූලික මාර්ගය:** `/sites`

**අඩවියක් සාදන්න**
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

### 3. සාමාජිකත්ව API

**මූලික මාර්ගය:** `/memberships`

**සාමාජිකත්වයක් සාදන්න**
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

### 4. නිෂ්පාදන API

**මූලික මාර්ගය:** `/products`

**සියලු නිෂ්පාදන ලබා ගන්න**
```http
GET /wu/v2/products
```

### 5. ගෙවීම් API

**මූලික මාර්ගය:** `/payments`

**ගෙවීමක් සාදන්න**
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

### 6. වසම් API

**මූලික මාර්ගය:** `/domains`

**වසමක් සිතියම්ගත කරන්න**
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

## ලියාපදිංචි අන්ත ලක්ෂ්‍යය

`/register` අන්ත ලක්ෂ්‍යය සම්පූර්ණ checkout/ලියාපදිංචි ප්‍රවාහයක් සපයයි:

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

**ප්‍රතිචාරය:**
```json
{
    "customer": { ... },
    "membership": { ... },
    "payment": { ... },
    "site": { "id": 123 }
}
```

## ස්වාධීන කුලීකරු අන්ත ලක්ෂ්‍ය

Ultimate Multisite: Multi-Tenancy 1.2.0 හුදකලා කුලීකරුවන් සපයන, පරීක්ෂා කරන, හෝ තහවුරු කරන ඒකාබද්ධ කිරීම් සඳහා ස්වාධීන කුලීකරු REST ආවරණය එක් කරයි.

නිශ්චිත ඉල්ලීම් payload එක සක්‍රීය කර ඇති සත්කාරක හැකියාව මත රඳා පවතී, නමුත් ඒකාබද්ධ කිරීම් මෙම අන්ත ලක්ෂ්‍ය කණ්ඩායම් අපේක්ෂා කළ යුතුය:

```http
POST /wu/v2/tenants/{site_id}/bootstrap
GET /wu/v2/tenants/{site_id}/migration-status
POST /wu/v2/tenants/{site_id}/verify
DELETE /wu/v2/tenants/{site_id}
```

කුලීකරු ලියාපදිංචිය, දත්ත සමුදාය, ගොනු පද්ධතිය, සහ මාර්ගගත කිරීමේ තත්ත්වය සකස් කිරීමට bootstrap අන්ත ලක්ෂ්‍යය භාවිතා කරන්න. නිෂ්පාදන traffic මාරු කිරීමට පෙර migration status සහ තහවුරු කිරීමේ අන්ත ලක්ෂ්‍ය භාවිතා කරන්න. දත්ත සමුදා අක්තපත්‍ර addon පිරිසිදු කිරීමේ ප්‍රවාහය හරහා ඉවත් වන ලෙස ස්වාධීන ඉවත් කිරීම සඳහා මකාදැමීමේ අන්ත ලක්ෂ්‍යය භාවිතා කරන්න.

සාමාන්‍ය migration status ප්‍රතිචාර ඇතුළත් වන්නේ:

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

`ready: false` පූර්ව-දියත් කිරීමේ අවහිරකයක් ලෙස සලකන්න. තහවුරු කිරීමේ විස්තර පරීක්ෂා කර, දත්ත සමුදා සත්කාරක බැඳීම, පෝලිම, පරිශීලක සැපයීම, හෝ මාර්ගගත කිරීමේ ගැටලුව විසඳා, පසුව නැවත තහවුරු කරන්න.

## දෝෂ ප්‍රතිචාර

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

## පිටුකරණය සහ පෙරීම

**විමසුම් පරාමිති:**
```http
GET /wu/v2/customers?per_page=20&page=2&search=john&status=active
```

පොදු පරාමිති:
- `per_page` - පිටුවකට අයිතම (පෙරනිමි: 20, උපරිම: 100)
- `page` - පිටු අංකය
- `search` - සෙවුම් පදය
- `orderby` - අනුපිළිවෙල සැකසීමේ ක්ෂේත්‍රය
- `order` - අනුපිළිවෙල දිශාව (asc/desc)
- `status` - තත්ත්වය අනුව පෙරන්න
- `date_created` - දින පරාසය අනුව පෙරන්න
