---
title: REST API आढावा
sidebar_position: 1
_i18n_hash: cabcc173f6a77e5de94e39fff19bc2fa
---
# REST API संदर्भ {#rest-api-reference}

## मूलभूत कॉन्फिगरेशन {#base-configuration}

**मूलभूत URL:** `{site_url}/wp-json/wu/v2/`
**प्रमाणीकरण:** API Key आणि Secret (HTTP Basic Auth किंवा URL पॅरामीटर्स)

## प्रमाणीकरण {#authentication}

### API सक्षम करा {#enable-api}
```php
// Enable API in Ultimate Multisite settings or programmatically
wu_save_setting('enable_api', true);
```

### API क्रेडेन्शियल्स मिळवा {#get-api-credentials}
```php
$api_key = wu_get_setting('api_key');
$api_secret = wu_get_setting('api_secret');
```

### प्रमाणीकरण पद्धती {#authentication-methods}

**HTTP Basic Auth (शिफारस केलेले):**
```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

**URL पॅरामीटर्स:**
```bash
curl "https://yoursite.com/wp-json/wu/v2/customers?api_key=your_key&api_secret=your_secret"
```

## मुख्य एंडपॉइंट्स {#core-endpoints}

### 1. ग्राहक API {#1-customers-api}

**मूलभूत मार्ग:** `/customers`

**सर्व ग्राहक मिळवा**
```http
GET /wu/v2/customers
```

**एक ग्राहक मिळवा**
```http
GET /wu/v2/customers/{id}
```

**ग्राहक तयार करा**
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

**ग्राहक अद्ययावत करा**
```http
PUT /wu/v2/customers/{id}
Content-Type: application/json

{
    "vip": true,
    "extra_information": "VIP customer notes"
}
```

**ग्राहक हटवा**
```http
DELETE /wu/v2/customers/{id}
```

### 2. साइट्स API {#2-sites-api}

**मूलभूत मार्ग:** `/sites`

**साइट तयार करा**
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

### 3. सदस्यत्वे API {#3-memberships-api}

**मूलभूत मार्ग:** `/memberships`

**सदस्यत्व तयार करा**
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

### 4. उत्पादने API {#4-products-api}

**मूलभूत मार्ग:** `/products`

**सर्व उत्पादने मिळवा**
```http
GET /wu/v2/products
```

### 5. देयके API {#5-payments-api}

**मूलभूत मार्ग:** `/payments`

**देयक तयार करा**
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

### 6. डोमेन्स API {#6-domains-api}

**मूलभूत मार्ग:** `/domains`

**डोमेन मॅप करा**
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

## नोंदणी एंडपॉइंट {#registration-endpoint}

`/register` एंडपॉइंट संपूर्ण checkout/नोंदणी प्रवाह पुरवतो:

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

**प्रतिसाद:**
```json
{
    "customer": { ... },
    "membership": { ... },
    "payment": { ... },
    "site": { "id": 123 }
}
```

## सार्वभौम भाडेकरू एंडपॉइंट्स {#sovereign-tenant-endpoints}

Ultimate Multisite: Multi-Tenancy 1.2.0 अशा इंटिग्रेशन्ससाठी सार्वभौम भाडेकरू REST कव्हरेज जोडते, जे विलग भाडेकरू प्रोव्हिजन, तपासणी किंवा पडताळणी करतात.

अचूक विनंती पेलोड सक्षम केलेल्या होस्ट क्षमतेवर अवलंबून असतो, परंतु इंटिग्रेशन्सनी या एंडपॉइंट गटांची अपेक्षा करावी:

```http
POST /wu/v2/tenants/{site_id}/bootstrap
GET /wu/v2/tenants/{site_id}/migration-status
POST /wu/v2/tenants/{site_id}/verify
DELETE /wu/v2/tenants/{site_id}
```

भाडेकरू रजिस्ट्री, डेटाबेस, फाइलसिस्टम आणि रूटिंग स्थिती तयार करण्यासाठी bootstrap एंडपॉइंट वापरा. उत्पादन ट्रॅफिक स्विच करण्यापूर्वी मायग्रेशन स्थिती आणि पडताळणी एंडपॉइंट्स वापरा. सार्वभौम टीअरडाउनसाठी deletion एंडपॉइंट वापरा, जेणेकरून addon cleanup प्रवाहाद्वारे डेटाबेस क्रेडेन्शियल्स काढली जातील.

सामान्य मायग्रेशन स्थिती प्रतिसादांमध्ये समाविष्ट असते:

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

`ready: false` ला प्री-लाँच ब्लॉकर म्हणून माना. पडताळणी तपशील तपासा, डेटाबेस होस्ट बाइंडिंग, रांग, वापरकर्ता प्रोव्हिजनिंग किंवा रूटिंग समस्या दुरुस्त करा, नंतर पुन्हा पडताळणी करा.

## त्रुटी प्रतिसाद {#error-responses}

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

## पृष्ठांकन आणि फिल्टरिंग {#pagination-and-filtering}

**क्वेरी पॅरामीटर्स:**
```http
GET /wu/v2/customers?per_page=20&page=2&search=john&status=active
```

सामान्य पॅरामीटर्स:
- `per_page` - प्रति पृष्ठ आयटम (डीफॉल्ट: 20, कमाल: 100)
- `page` - पृष्ठ क्रमांक
- `search` - शोध संज्ञा
- `orderby` - क्रमवारी फील्ड
- `order` - क्रमवारी दिशा (asc/desc)
- `status` - स्थितीनुसार फिल्टर करा
- `date_created` - तारीख श्रेणीनुसार फिल्टर करा
