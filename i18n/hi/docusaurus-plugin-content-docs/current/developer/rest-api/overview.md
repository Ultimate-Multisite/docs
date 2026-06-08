---
title: REST API अवलोकन
sidebar_position: 1
_i18n_hash: 4e511d92e0002dff445f45ff05adbeda
---
# REST API संदर्भ

## आधार कॉन्फ़िगरेशन

**आधार URL:** `{site_url}/wp-json/wu/v2/`
**प्रमाणीकरण (Authentication):** API Key और Secret (HTTP Basic Auth या URL Parameters)

## प्रमाणीकरण

### API सक्षम करें
```php
// Ultimate Multisite सेटिंग्स में या प्रोग्रामेटिक रूप से API सक्षम करें
wu_save_setting('enable_api', true);
```

### API क्रेडेंशियल प्राप्त करें
```php
$api_key = wu_get_setting('api_key');
$api_secret = wu_get_setting('api_secret');
```

### प्रमाणीकरण के तरीके

**HTTP Basic Auth (अनुशंसित):**
```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

**URL Parameters:**
```bash
curl "https://yoursite.com/wp-json/wu/v2/customers?api_key=your_key&api_secret=your_secret"
```

## मुख्य एंडपॉइंट्स

### 1. ग्राहकों का API (Customers API)

**आधार रूट:** `/customers`

**सभी ग्राहकों को प्राप्त करें**
```http
GET /wu/v2/customers
```

**एक विशिष्ट ग्राहक को प्राप्त करें**
```http
GET /wu/v2/customers/{id}
```

**ग्राहक बनाएं**
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

**ग्राहक अपडेट करें**
```http
PUT /wu/v2/customers/{id}
Content-Type: application/json

{
    "vip": true,
    "extra_information": "VIP ग्राहक नोट्स"
}
```

**ग्राहक हटाएं**
```http
DELETE /wu/v2/customers/{id}
```

### 2. साइट्स API (Sites API)

**आधार रूट:** `/sites`

**साइट बनाएं**
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

### 3. सदस्यता API (Memberships API)

**आधार रूट:** `/memberships`

**सदस्यता बनाएं**
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

### 4. उत्पाद API (Products API)

**आधार रूट:** `/products`

**सभी उत्पाद प्राप्त करें**
```http
GET /wu/v2/products
```

### 5. भुगतान API (Payments API)

**आधार रूट:** `/payments`

**भुगतान बनाएं**
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

### 6. डोमेन API (Domains API)

**आधार रूट:** `/domains`

**डोमेन मैप करें**
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

## पंजीकरण एंडपॉइंट (Registration Endpoint)

`/register` एंडपॉइंट एक संपूर्ण चेकआउट/पंजीकरण प्रवाह (checkout/registration flow) प्रदान करता है:

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

**प्रतिक्रिया (Response):**
```json
{
    "customer": { ... },
    "membership": { ... },
    "payment": { ... },
    "site": { "id": 123 }
}
```

## त्रुटि प्रतिक्रियाएँ (Error Responses)

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

## पेजिंग और फ़िल्टरिंग (Pagination and Filtering)

**क्वेरी पैरामीटर्स (Query Parameters):**
```http
GET /wu/v2/customers?per_page=20&page=2&search=john&status=active
```

सामान्य पैरामीटर्स:
- `per_page` - प्रति पृष्ठ आइटम (डिफ़ॉल्ट: 20, अधिकतम: 100)
- `page` - पृष्ठ संख्या
- `search` - खोज शब्द
- `orderby` - सॉर्ट करने का फ़ील्ड
- `order` - सॉर्ट करने की दिशा (asc/desc)
- `status` - स्थिति के अनुसार फ़िल्टर करें
- `date_created` - तिथि सीमा के अनुसार फ़िल्टर करें
