---
title: REST API አጠቃላይ እይታ
sidebar_position: 1
_i18n_hash: 4e511d92e0002dff445f45ff05adbeda
---
# REST API መመሪያ

## መሰረታዊ ቅንብሮች

**Base URL:** `{site_url}/wp-json/wu/v2/`
**Authentication:** API Key & Secret (HTTP Basic Auth ወይም URL Parameters)

## ማረጋገጫ (Authentication)

### APIን ማብራት
```php
// Ultimate Multisite settings ውስጥ ወይም በፕሮግራም አማካኝነት APIን ያብሩ
wu_save_setting('enable_api', true);
```

### የAPI መለያ መረጃዎችን ማግኘት
```php
$api_key = wu_get_setting('api_key');
$api_secret = wu_get_setting('api_secret');
```

### የማረጋገጫ ዘዴዎች

**HTTP Basic Auth (የሚመከር):**
```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

**URL Parameters:**
```bash
curl "https://yoursite.com/wp-json/wu/v2/customers?api_key=your_key&api_secret=your_secret"
```

## ዋና ዋና የመድረሻ ነጥቦች (Core Endpoints)

### 1. Customers API

**Base Route:** `/customers`

**ሁሉንም ደንበኞች ማግኘት**
```http
GET /wu/v2/customers
```

**የተወሰነ ደንበኛን ማግኘት**
```http
GET /wu/v2/customers/{id}
```

**ደንበኛ መፍጠር**
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

**ደንበኛን ማዘመን**
```http
PUT /wu/v2/customers/{id}
Content-Type: application/json

{
    "vip": true,
    "extra_information": "VIP customer notes"
}
```

**ደንበኛን መሰረዝ**
```http
DELETE /wu/v2/customers/{id}
```

### 2. Sites API

**Base Route:** `/sites`

**site መፍጠር**
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

### 3. Memberships API

**Base Route:** `/memberships`

**የተቋቋመነት ደረጃ (Membership) መፍጠር**
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

### 4. Products API

**Base Route:** `/products`

**ሁሉንም ምርቶች ማግኘት**
```http
GET /wu/v2/products
```

### 5. Payments API

**Base Route:** `/payments`

**ክፍያ መፍጠር**
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

### 6. Domains API

**Base Route:** `/domains`

**Domain መመደብ**
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

## የንብረት ምዝገባ የመድረሻ ነጥብ (Registration Endpoint)

የ`/register` የመድረሻ ነጥብ ሙሉ የቼክአውት/የምዝገባ ፍሰት ይሰጣል፡

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

**መልስ (Response):**
```json
{
    "customer": { ... },
    "membership": { ... },
    "payment": { ... },
    "site": { "id": 123 }
}
```

## የስህተት ምላሾች (Error Responses)

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

## ገጽታ አቀራረብ እና ማጣራት (Pagination and Filtering)

**የጥያቄ መለኪያዎች (Query Parameters):**
```http
GET /wu/v2/customers?per_page=20&page=2&search=john&status=active
```

የተለመዱ መለኪያዎች፡
- `per_page` - በገጽ የሚታዩ ዕቃዎች ብዛት (በቅድፋት: 20, ከፍተኛው: 100)
- `page` - የገጽ ቁጥር
- `search` - የፍለጋ ቃል
- `orderby` - የማደራጀት መስክ
- `order` - የማደራጀት አቅጣጫ (asc/desc)
- `status` - በሁኔታ (status) መጣራት
- `date_created` - በቀን ክልል መጣራት
