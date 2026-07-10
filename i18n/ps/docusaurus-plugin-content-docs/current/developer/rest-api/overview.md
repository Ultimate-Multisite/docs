---
title: د REST API عمومي کتنه
sidebar_position: 1
_i18n_hash: cabcc173f6a77e5de94e39fff19bc2fa
---
# د REST API ماخذ {#rest-api-reference}

## بنسټیزه امستنه {#base-configuration}

**بنسټیز URL:** `{site_url}/wp-json/wu/v2/`
**کره‌کتنه:** API Key او Secret (HTTP Basic Auth یا URL Parameters)

## کره‌کتنه {#authentication}

### API فعال کړئ {#enable-api}
```php
// Enable API in Ultimate Multisite settings or programmatically
wu_save_setting('enable_api', true);
```

### د API اسناد ترلاسه کړئ {#get-api-credentials}
```php
$api_key = wu_get_setting('api_key');
$api_secret = wu_get_setting('api_secret');
```

### د کره‌کتنې طریقې {#authentication-methods}

**HTTP Basic Auth (سپارښتل شوی):**
```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

**URL Parameters:**
```bash
curl "https://yoursite.com/wp-json/wu/v2/customers?api_key=your_key&api_secret=your_secret"
```

## اصلي endpoints {#core-endpoints}

### 1. د پېرودونکو API {#1-customers-api}

**بنسټیزه لار:** `/customers`

**ټول پېرودونکي ترلاسه کړئ**
```http
GET /wu/v2/customers
```

**یو پېرودونکی ترلاسه کړئ**
```http
GET /wu/v2/customers/{id}
```

**پېرودونکی جوړ کړئ**
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

**پېرودونکی تازه کړئ**
```http
PUT /wu/v2/customers/{id}
Content-Type: application/json

{
    "vip": true,
    "extra_information": "VIP customer notes"
}
```

**پېرودونکی ړنګ کړئ**
```http
DELETE /wu/v2/customers/{id}
```

### 2. د وېبپاڼو API {#2-sites-api}

**بنسټیزه لار:** `/sites`

**وېبپاڼه جوړه کړئ**
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

### 3. د غړیتوبونو API {#3-memberships-api}

**بنسټیزه لار:** `/memberships`

**غړیتوب جوړ کړئ**
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

### 4. د محصولاتو API {#4-products-api}

**بنسټیزه لار:** `/products`

**ټول محصولات ترلاسه کړئ**
```http
GET /wu/v2/products
```

### 5. د تادیاتو API {#5-payments-api}

**بنسټیزه لار:** `/payments`

**تادیه جوړه کړئ**
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

### 6. د ډومېنونو API {#6-domains-api}

**بنسټیزه لار:** `/domains`

**ډومېن ونښلوئ**
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

## د نوم‌لیکنې endpoint {#registration-endpoint}

د `/register` endpoint د checkout/نوم‌لیکنې بشپړ جریان برابروي:

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

**ځواب:**
```json
{
    "customer": { ... },
    "membership": { ... },
    "payment": { ... },
    "site": { "id": 123 }
}
```

## د خپلواک کرایه‌دار endpoints {#sovereign-tenant-endpoints}

Ultimate Multisite: Multi-Tenancy 1.2.0 د هغو ادغامونو لپاره د خپلواک کرایه‌دار REST پوښښ زیاتوي چې جلا کرایه‌داران برابروي، معاینه کوي، یا تاییدوي.

د دقیقې غوښتنې payload د فعال شوي کوربه وړتیا پورې تړاو لري، خو ادغامونه باید د دغو endpoint ډلو تمه ولري:

```http
POST /wu/v2/tenants/{site_id}/bootstrap
GET /wu/v2/tenants/{site_id}/migration-status
POST /wu/v2/tenants/{site_id}/verify
DELETE /wu/v2/tenants/{site_id}
```

د bootstrap endpoint وکاروئ څو د کرایه‌دار ثبت، ډیټابېس، فایل‌سیسټم، او routing حالت چمتو کړئ. د تولیدي ترافیک له اړولو مخکې د کډوالۍ حالت او تایید endpoints وکاروئ. د خپلواک ړنګولو لپاره د ړنګولو endpoint وکاروئ څو د ډیټابېس اسناد د addon پاکولو جریان له لارې لرې شي.

د کډوالۍ د حالت عام ځوابونه پکې شامل دي:

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

`ready: false` د مخکې له پیل خنډ په توګه وګڼئ. د تایید جزئیات وګورئ، د ډیټابېس کوربه تړاو، کتار، د کاروونکي برابرول، یا routing ستونزه حل کړئ، بیا تایید بیا وازمویئ.

## د تېروتنې ځوابونه {#error-responses}

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

## پاڼې‌وېش او چاڼ {#pagination-and-filtering}

**د پوښتنې پارامترونه:**
```http
GET /wu/v2/customers?per_page=20&page=2&search=john&status=active
```

عام پارامترونه:
- `per_page` - په هره پاڼه کې توکي (اصلي: 20، اعظمي: 100)
- `page` - د پاڼې شمېره
- `search` - د لټون اصطلاح
- `orderby` - د ترتیب ډګر
- `order` - د ترتیب لوری (asc/desc)
- `status` - د حالت له مخې چاڼ
- `date_created` - د نېټې د لړ له مخې چاڼ
