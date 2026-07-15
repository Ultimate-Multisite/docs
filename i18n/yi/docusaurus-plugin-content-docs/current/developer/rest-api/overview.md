---
title: REST API איבערבליק
sidebar_position: 1
_i18n_hash: cabcc173f6a77e5de94e39fff19bc2fa
---
# REST API רעפֿערענץ

## באַזע־קאָנפֿיגוראַציע {#base-configuration}

**באַזע URL:** `{site_url}/wp-json/wu/v2/`
**אָטענטיפֿיקאַציע:** API שליסל און געהיים (HTTP Basic Auth אָדער URL פּאַראַמעטערס)

## אָטענטיפֿיקאַציע {#authentication}

### אַקטיווירן API {#enable-api}
```php
// Enable API in Ultimate Multisite settings or programmatically
wu_save_setting('enable_api', true);
```

### באַקומען API קרעדענציאַלן {#get-api-credentials}
```php
$api_key = wu_get_setting('api_key');
$api_secret = wu_get_setting('api_secret');
```

### אָטענטיפֿיקאַציע־מעטאָדן {#authentication-methods}

**HTTP Basic Auth (רעקאָמענדירט):**
```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

**URL פּאַראַמעטערס:**
```bash
curl "https://yoursite.com/wp-json/wu/v2/customers?api_key=your_key&api_secret=your_secret"
```

## עיקר־ענדפּוינטן {#core-endpoints}

### 1. קונים API {#1-customers-api}

**באַזע־רוטע:** `/customers`

**באַקומען אַלע קונים**
```http
GET /wu/v2/customers
```

**באַקומען איין קונה**
```http
GET /wu/v2/customers/{id}
```

**שאַפֿן קונה**
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

**דערהייַנטיקן קונה**
```http
PUT /wu/v2/customers/{id}
Content-Type: application/json

{
    "vip": true,
    "extra_information": "VIP customer notes"
}
```

**מעקן קונה**
```http
DELETE /wu/v2/customers/{id}
```

### 2. פלעצער API {#2-sites-api}

**באַזע־רוטע:** `/sites`

**שאַפֿן פּלאַץ**
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

### 3. מיטגלידערשאַפֿטן API {#3-memberships-api}

**באַזע־רוטע:** `/memberships`

**שאַפֿן מיטגלידערשאַפֿט**
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

### 4. פּראָדוקטן API {#4-products-api}

**באַזע־רוטע:** `/products`

**באַקומען אַלע פּראָדוקטן**
```http
GET /wu/v2/products
```

### 5. צאָלונגען API {#5-payments-api}

**באַזע־רוטע:** `/payments`

**שאַפֿן צאָלונג**
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

### 6. דאָמיינס API {#6-domains-api}

**באַזע־רוטע:** `/domains`

**צובינדן דאָמיין**
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

## רעגיסטראַציע־ענדפּוינט {#registration-endpoint}

דער `/register` ענדפּוינט גיט אַ גאַנצן טשעקאַוט/רעגיסטראַציע־פֿלוס:

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

**ענטפֿער:**
```json
{
    "customer": { ... },
    "membership": { ... },
    "payment": { ... },
    "site": { "id": 123 }
}
```

## זעלבשטענדיקע טענאַנט־ענדפּוינטן {#sovereign-tenant-endpoints}

Ultimate Multisite: מולטי־טענאַנסי 1.2.0 לייגט צו זעלבשטענדיקע טענאַנט REST דעקונג פֿאַר אינטעגראַציעס וואָס צושטעלן, דורכקוקן, אָדער באַשטעטיקן איזאָלירטע טענאַנטן.

די פּינקטלעכע אָנפֿרעג־לאָדונג ווענדט זיך אין דער אַקטיווירטער האָסט־מעגלעכקייט, אָבער אינטעגראַציעס זאָלן דערוואַרטן די דאָזיקע ענדפּוינט־גרופּעס:

```http
POST /wu/v2/tenants/{site_id}/bootstrap
GET /wu/v2/tenants/{site_id}/migration-status
POST /wu/v2/tenants/{site_id}/verify
DELETE /wu/v2/tenants/{site_id}
```

נוצט דעם בוטסטראַפּ־ענדפּוינט צו צוגרייטן טענאַנט־רעגיסטרי, דאַטאַבאַזע, טעקע־סיסטעם, און רוטינג־צושטאַנד. נוצט מיגראַציע־סטאַטוס און באַשטעטיקונג־ענדפּוינטן איידער איר איבערשאַלט פּראָדוקציע־פֿאַרקער. נוצט דעם מעק־ענדפּוינט פֿאַר זעלבשטענדיקן אָפּבוי, כּדי דאַטאַבאַזע־קרעדענציאַלן זאָלן ווערן אַוועקגענומען דורך דעם addon אויפֿרוימונג־פֿלוס.

טיפּישע מיגראַציע־סטאַטוס־ענטפֿערס נעמען אַרײַן:

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

באַהאַנדלט `ready: false` ווי אַ פֿאַר־לאָנטש בלאָקירונג. קאָנטראָלירט די באַשטעטיקונג־פּרטים, פֿאַררעכט דעם דאַטאַבאַזע־האָסט־צובינד, ריי, באַניצער־צושטעלונג, אָדער רוטינג־פּראָבלעם, און פּרוּווט דערנאָך ווידער באַשטעטיקונג.

## טעות־ענטפֿערס {#error-responses}

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

## פּאַגינאַציע און פֿילטערונג {#pagination-and-filtering}

**אָנפֿרעג־פּאַראַמעטערס:**
```http
GET /wu/v2/customers?per_page=20&page=2&search=john&status=active
```

געוויינטלעכע פּאַראַמעטערס:
- `per_page` - זאַכן פּער זײַט (פעליק: 20, מאַקס: 100)
- `page` - זײַט־נומער
- `search` - זוך־טערמין
- `orderby` - סאָרטיר־פֿעלד
- `order` - סאָרטיר־ריכטונג (asc/desc)
- `status` - פֿילטערן לויט סטאַטוס
- `date_created` - פֿילטערן לויט דאַטע־ריי
