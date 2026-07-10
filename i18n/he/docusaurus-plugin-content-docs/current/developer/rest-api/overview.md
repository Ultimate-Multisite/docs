---
title: סקירת REST API
sidebar_position: 1
_i18n_hash: cabcc173f6a77e5de94e39fff19bc2fa
---
# מדריך REST API {#rest-api-reference}

## תצורת בסיס {#base-configuration}

**Base URL:** `{site_url}/wp-json/wu/v2/`
**אימות:** מפתח API וסוד (HTTP Basic Auth או פרמטרים ב-URL)

## אימות {#authentication}

### הפעלת API {#enable-api}
```php
// Enable API in Ultimate Multisite settings or programmatically
wu_save_setting('enable_api', true);
```

### קבלת פרטי גישה ל-API {#get-api-credentials}
```php
$api_key = wu_get_setting('api_key');
$api_secret = wu_get_setting('api_secret');
```

### שיטות אימות {#authentication-methods}

**HTTP Basic Auth (מומלץ):**
```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

**פרמטרים ב-URL:**
```bash
curl "https://yoursite.com/wp-json/wu/v2/customers?api_key=your_key&api_secret=your_secret"
```

## נקודות קצה מרכזיות {#core-endpoints}

### 1. API לקוחות {#1-customers-api}

**נתיב בסיס:** `/customers`

**קבלת כל הלקוחות**
```http
GET /wu/v2/customers
```

**קבלת לקוח יחיד**
```http
GET /wu/v2/customers/{id}
```

**יצירת לקוח**
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

**עדכון לקוח**
```http
PUT /wu/v2/customers/{id}
Content-Type: application/json

{
    "vip": true,
    "extra_information": "VIP customer notes"
}
```

**מחיקת לקוח**
```http
DELETE /wu/v2/customers/{id}
```

### 2. API אתרים {#2-sites-api}

**נתיב בסיס:** `/sites`

**יצירת אתר**
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

### 3. API חברויות {#3-memberships-api}

**נתיב בסיס:** `/memberships`

**יצירת חברות**
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

### 4. API מוצרים {#4-products-api}

**נתיב בסיס:** `/products`

**קבלת כל המוצרים**
```http
GET /wu/v2/products
```

### 5. API תשלומים {#5-payments-api}

**נתיב בסיס:** `/payments`

**יצירת תשלום**
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

### 6. API דומיינים {#6-domains-api}

**נתיב בסיס:** `/domains`

**מיפוי דומיין**
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

## נקודת קצה להרשמה {#registration-endpoint}

נקודת הקצה `/register` מספקת תהליך תשלום/הרשמה מלא:

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

**תגובה:**
```json
{
    "customer": { ... },
    "membership": { ... },
    "payment": { ... },
    "site": { "id": 123 }
}
```

## נקודות קצה לדיירים ריבוניים {#sovereign-tenant-endpoints}

Ultimate Multisite: Multi-Tenancy 1.2.0 מוסיף כיסוי REST לדיירים ריבוניים עבור אינטגרציות שמקצות, בודקות או מאמתות דיירים מבודדים.

מטען הבקשה המדויק תלוי ביכולת המארח המופעלת, אך אינטגרציות צריכות לצפות לקבוצות נקודות הקצה האלה:

```http
POST /wu/v2/tenants/{site_id}/bootstrap
GET /wu/v2/tenants/{site_id}/migration-status
POST /wu/v2/tenants/{site_id}/verify
DELETE /wu/v2/tenants/{site_id}
```

השתמשו בנקודת הקצה של bootstrap כדי להכין את מצב מרשם הדיירים, מסד הנתונים, מערכת הקבצים והניתוב. השתמשו בנקודות הקצה של מצב ההגירה והאימות לפני החלפת תעבורת הייצור. השתמשו בנקודת הקצה למחיקה עבור פירוק ריבוני כדי שפרטי הגישה למסד הנתונים יוסרו דרך תהליך הניקוי של התוסף.

תגובות אופייניות של מצב הגירה כוללות:

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

התייחסו אל `ready: false` כחסם טרום-השקה. בדקו את פרטי האימות, תקנו את קישור מארח מסד הנתונים, התור, הקצאת המשתמשים או בעיית הניתוב, ואז נסו שוב את האימות.

## תגובות שגיאה {#error-responses}

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

## עימוד וסינון {#pagination-and-filtering}

**פרמטרי שאילתה:**
```http
GET /wu/v2/customers?per_page=20&page=2&search=john&status=active
```

פרמטרים נפוצים:
- `per_page` - פריטים לעמוד (ברירת מחדל: 20, מקסימום: 100)
- `page` - מספר עמוד
- `search` - מונח חיפוש
- `orderby` - שדה מיון
- `order` - כיוון מיון (asc/desc)
- `status` - סינון לפי סטטוס
- `date_created` - סינון לפי טווח תאריכים
