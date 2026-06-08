---
title: REST API चा परिचय
sidebar_position: 1
_i18n_hash: 4e511d92e0002dff445f45ff05adbeda
---
# REST API संदर्भ

## मूलभूत कॉन्फिगरेशन (Base Configuration)

**बेस URL:** `{site_url}/wp-json/wu/v2/`
**Authentication:** API Key आणि Secret (HTTP Basic Auth किंवा URL Parameters)

## Authentication

### API सक्षम करा (Enable API)
```php
// Ultimate Multisite सेटिंग्जमध्ये किंवा प्रोग्रामॅटिकली API सक्षम करा
wu_save_setting('enable_api', true);
```

### API क्रेडेंशियल्स मिळवा (Get API Credentials)
```php
$api_key = wu_get_setting('api_key');
$api_secret = wu_get_setting('api_secret');
```

### Authentication पद्धती (Authentication Methods)

**HTTP Basic Auth (शिफारस केलेले):**
```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

**URL Parameters:**
```bash
curl "https://yoursite.com/wp-json/wu/v2/customers?api_key=your_key&api_secret=your_secret"
```

## मुख्य Endpoints (Core Endpoints)

### १. Customers API

**Base Route:** `/customers`

**सर्व ग्राहक मिळवा (Get All Customers)**
```http
GET /wu/v2/customers
```

**एक विशिष्ट ग्राहक मिळवा (Get Single Customer)**
```http
GET /wu/v2/customers/{id}
```

**ग्राहक तयार करा (Create Customer)**
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

**ग्राहक अपडेट करा (Update Customer)**
```http
PUT /wu/v2/customers/{id}
Content-Type: application/json

{
    "vip": true,
    "extra_information": "VIP ग्राहक नोट्स"
}
```

**ग्राहक हटवा (Delete Customer)**
```http
DELETE /wu/v2/customers/{id}
```

### २. Sites API

**Base Route:** `/sites`

**साइट तयार करा (Create Site)**
```http
POST /wu/v2/sites
Content-Type: application/json

{
    "customer_id": 5,
    "membership_id": 10,
    "domain": "example.com",
    "path": "/",
    "title": "माझी नवीन साइट",
    "template_id": 1,
    "type": "customer_owned"
}
```

### ३. Memberships API

**Base Route:** `/memberships`

**सदस्यता तयार करा (Create Membership)**
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

### ४. Products API

**Base Route:** `/products`

**सर्व उत्पादने मिळवा (Get All Products)**
```http
GET /wu/v2/products
```

### ५. Payments API

**Base Route:** `/payments`

**पayment तयार करा (Create Payment)**
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

### ६. Domains API

**Base Route:** `/domains`

**डोमेन मॅप करा (Map Domain)**
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

## Registration Endpoint

`/register` endpoint संपूर्ण चेकआउट/नोंदणी प्रक्रिया (checkout/registration flow) प्रदान करतो:

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
        "site_title": "माझी नवीन साइट",
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

**Response:**
```json
{
    "customer": { ... },
    "membership": { ... },
    "payment": { ... },
    "site": { "id": 123 }
}
```

## त्रुटी प्रतिसाद (Error Responses)

```json
{
    "code": "wu_rest_invalid_parameter",
    "message": "अवैध पॅरामीटर मूल्य (Invalid parameter value)",
    "data": {
        "status": 400,
        "params": {
            "email": "अवैध ईमेल स्वरूप (Invalid email format)"
        }
    }
}
```

## Pagination आणि Filtering

**Query Parameters:**
```http
GET /wu/v2/customers?per_page=20&page=2&search=john&status=active
```

सामान्य पॅरामीटर्स (Common parameters):
- `per_page` - प्रति पृष्ठ आयटम (Items per page) (डीफॉल्ट: 20, कमाल: 100)
- `page` - पृष्ठ क्रमांक (Page number)
- `search` - शोध संज्ञा (Search term)
- `orderby` - क्रमवारी लावण्यासाठी फील्ड (Sort field)
- `order` - क्रमवारी दिशा (Sort direction) (asc/desc)
- `status` - status नुसार फिल्टर करा (Filter by status)
- `date_created` - तारखेच्या श्रेणीनुसार फिल्टर करा (Filter by date range)
