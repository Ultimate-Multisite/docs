---
title: סקירה כללית של REST API
sidebar_position: 1
_i18n_hash: 4e511d92e0002dff445f45ff05adbeda
---
# התיעוד של REST API

## הגדרות בסיס

**כתובת בסיס (Base URL):** `{site_url}/wp-json/wu/v2/`
**אימות (Authentication):** מפתח וסיסמה (API Key & Secret) (HTTP Basic Auth או פרמטרים ב-URL)

## אימות (Authentication)

### הפעלת ה-API
```php
// הפעלת ה-API בהגדרות של Ultimate Multisite או באופן תכנותי
wu_save_setting('enable_api', true);
```

### קבלת פרטי האימות
```php
$api_key = wu_get_setting('api_key');
$api_secret = wu_get_setting('api_secret');
```

### שיטות אימות

**HTTP Basic Auth (מומלץ):**
```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

**פרמטרים ב-URL:**
```bash
curl "https://yoursite.com/wp-json/wu/v2/customers?api_key=your_key&api_secret=your_secret"
```

## נקודות קצה מרכזיות (Core Endpoints)

### 1. API של לקוחות (Customers API)

**נתיב בסיס (Base Route):** `/customers`

**שליפת כל הלקוחות**
```http
GET /wu/v2/customers
```

**שליפת לקוח יחיד**
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

### 2. API של אתרים (Sites API)

**נתיב בסיס (Base Route):** `/sites`

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

### 3. API של מנויים (Memberships API)

**נתיב בסיס (Base Route):** `/memberships`

**יצירת מנוי**
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

### 4. API של מוצרים (Products API)

**נתיב בסיס (Base Route):** `/products`

**שליפת כל המוצרים**
```http
GET /wu/v2/products
```

### 5. API של תשלומים (Payments API)

**נתיב בסיס (Base Route):** `/payments`

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

### 6. API של דומיינים (Domains API)

**נתיב בסיס (Base Route):** `/domains`

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

## נקודת הרישום (Registration Endpoint)

נקודת הקצה `/register` מספקת תהליך מלא של קופת תשלום/רישום:

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

**תגובה (Response):**
```json
{
    "customer": { ... },
    "membership": { ... },
    "payment": { ... },
    "site": { "id": 123 }
}
```

## תגובות שגיאה (Error Responses)

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

## תג ועריכה (Pagination and Filtering)

**פרמטרים ב-Query:**
```http
GET /wu/v2/customers?per_page=20&page=2&search=john&status=active
```

פרמטרים נפוצים:
- `per_page` - מספר הפריטים לדף (ברירת מחדל: 20, מקסימום: 100)
- `page` - מספר העמוד
- `search` - מונח חיפוש
- `orderby` - שדה המיון
- `order` - כיוון המיון (asc/desc)
- `status` - סינון לפי סטטוס
- `date_created` - סינון לפי טווח תאריכים
