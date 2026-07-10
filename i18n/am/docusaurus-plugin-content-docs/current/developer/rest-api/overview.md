---
title: REST API አጠቃላይ እይታ
sidebar_position: 1
_i18n_hash: cabcc173f6a77e5de94e39fff19bc2fa
---
# REST API ማጣቀሻ {#rest-api-reference}

## መሠረታዊ ውቅር {#base-configuration}

**መሠረታዊ URL:** `{site_url}/wp-json/wu/v2/`
**ማረጋገጫ:** API ቁልፍ እና ምስጢር (HTTP Basic Auth ወይም URL መለኪያዎች)

## ማረጋገጫ {#authentication}

### API አንቃ {#enable-api}
```php
// Enable API in Ultimate Multisite settings or programmatically
wu_save_setting('enable_api', true);
```

### API ማረጋገጫ መረጃዎችን ያግኙ {#get-api-credentials}
```php
$api_key = wu_get_setting('api_key');
$api_secret = wu_get_setting('api_secret');
```

### የማረጋገጫ ዘዴዎች {#authentication-methods}

**HTTP Basic Auth (የሚመከር):**
```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

**URL መለኪያዎች:**
```bash
curl "https://yoursite.com/wp-json/wu/v2/customers?api_key=your_key&api_secret=your_secret"
```

## ዋና መጨረሻ ነጥቦች {#core-endpoints}

### 1. ደንበኞች API {#1-customers-api}

**መሠረታዊ መንገድ:** `/customers`

**ሁሉንም ደንበኞች ያግኙ**
```http
GET /wu/v2/customers
```

**ነጠላ ደንበኛ ያግኙ**
```http
GET /wu/v2/customers/{id}
```

**ደንበኛ ይፍጠሩ**
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

**ደንበኛ ያዘምኑ**
```http
PUT /wu/v2/customers/{id}
Content-Type: application/json

{
    "vip": true,
    "extra_information": "VIP customer notes"
}
```

**ደንበኛ ይሰርዙ**
```http
DELETE /wu/v2/customers/{id}
```

### 2. ጣቢያዎች API {#2-sites-api}

**መሠረታዊ መንገድ:** `/sites`

**ጣቢያ ይፍጠሩ**
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

### 3. አባልነቶች API {#3-memberships-api}

**መሠረታዊ መንገድ:** `/memberships`

**አባልነት ይፍጠሩ**
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

### 4. ምርቶች API {#4-products-api}

**መሠረታዊ መንገድ:** `/products`

**ሁሉንም ምርቶች ያግኙ**
```http
GET /wu/v2/products
```

### 5. ክፍያዎች API {#5-payments-api}

**መሠረታዊ መንገድ:** `/payments`

**ክፍያ ይፍጠሩ**
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

### 6. ዶሜይኖች API {#6-domains-api}

**መሠረታዊ መንገድ:** `/domains`

**ዶሜይን ያያይዙ**
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

## የምዝገባ መጨረሻ ነጥብ {#registration-endpoint}

የ`/register` መጨረሻ ነጥብ ሙሉ የcheckout/ምዝገባ ፍሰት ያቀርባል፦

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

**ምላሽ:**
```json
{
    "customer": { ... },
    "membership": { ... },
    "payment": { ... },
    "site": { "id": 123 }
}
```

## የሉዓላዊ ተከራይ መጨረሻ ነጥቦች {#sovereign-tenant-endpoints}

Ultimate Multisite: ብዙ-ተከራይነት 1.2.0 የተነጠሉ ተከራዮችን ለሚያዘጋጁ፣ ለሚመረምሩ ወይም ለሚያረጋግጡ ውህደቶች የሉዓላዊ ተከራይ REST ሽፋን ይጨምራል።

ትክክለኛው የጥያቄ ይዘት በነቃው የአስተናጋጅ ችሎታ ላይ ይመሰረታል፣ ነገር ግን ውህደቶች እነዚህን የመጨረሻ ነጥብ ቡድኖች መጠበቅ አለባቸው፦

```http
POST /wu/v2/tenants/{site_id}/bootstrap
GET /wu/v2/tenants/{site_id}/migration-status
POST /wu/v2/tenants/{site_id}/verify
DELETE /wu/v2/tenants/{site_id}
```

የተከራይ መዝገብ፣ ዳታቤዝ፣ ፋይል ስርዓት እና የመስመር ሁኔታን ለማዘጋጀት የbootstrap መጨረሻ ነጥብን ይጠቀሙ። የproduction ትራፊክን ከመቀየርዎ በፊት የስደት ሁኔታ እና የማረጋገጫ መጨረሻ ነጥቦችን ይጠቀሙ። የዳታቤዝ ማረጋገጫ መረጃዎች በaddon የማጽዳት ፍሰት በኩል እንዲወገዱ፣ የሉዓላዊ ማፍረስ የስረዛ መጨረሻ ነጥብን ይጠቀሙ።

የተለመዱ የስደት ሁኔታ ምላሾች የሚያካትቱት፦

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

`ready: false`ን ከመጀመር በፊት እንቅፋት አድርገው ይቁጠሩት። የማረጋገጫ ዝርዝሮቹን ይመልከቱ፣ የዳታቤዝ አስተናጋጅ ማሰሪያ፣ ወረፋ፣ የተጠቃሚ ማዘጋጀት ወይም የመስመር ችግኝን ያስተካክሉ፣ ከዚያ ማረጋገጫውን እንደገና ይሞክሩ።

## የስህተት ምላሾች {#error-responses}

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

## ገጽ ማድረግ እና ማጣራት {#pagination-and-filtering}

**የጥያቄ መለኪያዎች:**
```http
GET /wu/v2/customers?per_page=20&page=2&search=john&status=active
```

የተለመዱ መለኪያዎች፦
- `per_page` - በገጽ ያሉ ንጥሎች (ነባሪ: 20፣ ከፍተኛ: 100)
- `page` - የገጽ ቁጥር
- `search` - የፍለጋ ቃል
- `orderby` - የመደርደሪያ መስክ
- `order` - የመደርደሪያ አቅጣጫ (asc/desc)
- `status` - በሁኔታ አጣራ
- `date_created` - በቀን ክልል አጣራ
