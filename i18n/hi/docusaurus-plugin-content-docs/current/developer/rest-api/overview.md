---
title: REST API अवलोकन
sidebar_position: 1
_i18n_hash: cabcc173f6a77e5de94e39fff19bc2fa
---
# REST API संदर्भ

## आधार विन्यास

**आधार URL:** `{site_url}/wp-json/wu/v2/`
**प्रमाणीकरण:** API कुंजी और गुप्त कुंजी (HTTP Basic Auth या URL पैरामीटर)

## प्रमाणीकरण

### API सक्षम करें
```php
// Enable API in Ultimate Multisite settings or programmatically
wu_save_setting('enable_api', true);
```

### API क्रेडेंशियल प्राप्त करें
```php
$api_key = wu_get_setting('api_key');
$api_secret = wu_get_setting('api_secret');
```

### प्रमाणीकरण विधियाँ

**HTTP Basic Auth (अनुशंसित):**
```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

**URL पैरामीटर:**
```bash
curl "https://yoursite.com/wp-json/wu/v2/customers?api_key=your_key&api_secret=your_secret"
```

## मुख्य एंडपॉइंट

### 1. ग्राहक API

**आधार रूट:** `/customers`

**सभी ग्राहक प्राप्त करें**
```http
GET /wu/v2/customers
```

**एक ग्राहक प्राप्त करें**
```http
GET /wu/v2/customers/{id}
```

**ग्राहक बनाएँ**
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
    "extra_information": "VIP customer notes"
}
```

**ग्राहक हटाएँ**
```http
DELETE /wu/v2/customers/{id}
```

### 2. साइट API

**आधार रूट:** `/sites`

**साइट बनाएँ**
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

### 3. सदस्यता API

**आधार रूट:** `/memberships`

**सदस्यता बनाएँ**
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

### 4. उत्पाद API

**आधार रूट:** `/products`

**सभी उत्पाद प्राप्त करें**
```http
GET /wu/v2/products
```

### 5. भुगतान API

**आधार रूट:** `/payments`

**भुगतान बनाएँ**
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

### 6. डोमेन API

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

## पंजीकरण एंडपॉइंट

`/register` एंडपॉइंट पूरा भुगतान/पंजीकरण प्रवाह प्रदान करता है:

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

**प्रतिक्रिया:**
```json
{
    "customer": { ... },
    "membership": { ... },
    "payment": { ... },
    "site": { "id": 123 }
}
```

## संप्रभु किरायेदार एंडपॉइंट

Ultimate Multisite: Multi-Tenancy 1.2.0 उन एकीकरणों के लिए संप्रभु किरायेदार REST कवरेज जोड़ता है, जो अलग-थलग किरायेदारों का प्रावधान, निरीक्षण या सत्यापन करते हैं।

सटीक अनुरोध पेलोड सक्षम होस्ट क्षमता पर निर्भर करता है, लेकिन एकीकरणों को इन एंडपॉइंट समूहों की अपेक्षा करनी चाहिए:

```http
POST /wu/v2/tenants/{site_id}/bootstrap
GET /wu/v2/tenants/{site_id}/migration-status
POST /wu/v2/tenants/{site_id}/verify
DELETE /wu/v2/tenants/{site_id}
```

किरायेदार रजिस्ट्री, डेटाबेस, फ़ाइल सिस्टम और रूटिंग स्थिति तैयार करने के लिए बूटस्ट्रैप एंडपॉइंट का उपयोग करें। उत्पादन ट्रैफ़िक स्विच करने से पहले माइग्रेशन स्थिति और सत्यापन एंडपॉइंट का उपयोग करें। संप्रभु हटाने के लिए deletion एंडपॉइंट का उपयोग करें, ताकि डेटाबेस क्रेडेंशियल addon सफ़ाई प्रवाह के माध्यम से हटाए जाएँ।

सामान्य माइग्रेशन स्थिति प्रतिक्रियाओं में शामिल हैं:

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

`ready: false` को लॉन्च से पहले अवरोधक मानें। सत्यापन विवरण जाँचें, डेटाबेस होस्ट बाइंडिंग, कतार, उपयोगकर्ता प्रावधान या रूटिंग समस्या ठीक करें, फिर सत्यापन दोबारा आज़माएँ।

## त्रुटि प्रतिक्रियाएँ

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

## पृष्ठांकन और फ़िल्टरिंग

**क्वेरी पैरामीटर:**
```http
GET /wu/v2/customers?per_page=20&page=2&search=john&status=active
```

सामान्य पैरामीटर:
- `per_page` - प्रति पृष्ठ आइटम (डिफ़ॉल्ट: 20, अधिकतम: 100)
- `page` - पृष्ठ संख्या
- `search` - खोज शब्द
- `orderby` - क्रमबद्ध करने वाला फ़ील्ड
- `order` - क्रम दिशा (asc/desc)
- `status` - स्थिति के आधार पर फ़िल्टर करें
- `date_created` - तिथि सीमा के आधार पर फ़िल्टर करें
