---
title: REST API अवलोकन
sidebar_position: 1
_i18n_hash: cabcc173f6a77e5de94e39fff19bc2fa
---
# REST API सन्दर्भ

## आधारभूत कन्फिगरेसन {#base-configuration}

**आधार URL:** `{site_url}/wp-json/wu/v2/`
**प्रमाणीकरण:** API Key र Secret (HTTP Basic Auth वा URL प्यारामिटरहरू)

## प्रमाणीकरण {#authentication}

### API सक्षम गर्नुहोस् {#enable-api}
```php
// Enable API in Ultimate Multisite settings or programmatically
wu_save_setting('enable_api', true);
```

### API प्रमाणहरू प्राप्त गर्नुहोस् {#get-api-credentials}
```php
$api_key = wu_get_setting('api_key');
$api_secret = wu_get_setting('api_secret');
```

### प्रमाणीकरण विधिहरू {#authentication-methods}

**HTTP Basic Auth (सिफारिस गरिएको):**
```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

**URL प्यारामिटरहरू:**
```bash
curl "https://yoursite.com/wp-json/wu/v2/customers?api_key=your_key&api_secret=your_secret"
```

## मुख्य अन्त्यबिन्दुहरू {#core-endpoints}

### 1. ग्राहक API {#1-customers-api}

**आधार मार्ग:** `/customers`

**सबै ग्राहकहरू प्राप्त गर्नुहोस्**
```http
GET /wu/v2/customers
```

**एकल ग्राहक प्राप्त गर्नुहोस्**
```http
GET /wu/v2/customers/{id}
```

**ग्राहक सिर्जना गर्नुहोस्**
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

**ग्राहक अद्यावधिक गर्नुहोस्**
```http
PUT /wu/v2/customers/{id}
Content-Type: application/json

{
    "vip": true,
    "extra_information": "VIP customer notes"
}
```

**ग्राहक मेटाउनुहोस्**
```http
DELETE /wu/v2/customers/{id}
```

### 2. साइटहरू API {#2-sites-api}

**आधार मार्ग:** `/sites`

**साइट सिर्जना गर्नुहोस्**
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

### 3. सदस्यताहरू API {#3-memberships-api}

**आधार मार्ग:** `/memberships`

**सदस्यता सिर्जना गर्नुहोस्**
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

### 4. उत्पादनहरू API {#4-products-api}

**आधार मार्ग:** `/products`

**सबै उत्पादनहरू प्राप्त गर्नुहोस्**
```http
GET /wu/v2/products
```

### 5. भुक्तानीहरू API {#5-payments-api}

**आधार मार्ग:** `/payments`

**भुक्तानी सिर्जना गर्नुहोस्**
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

### 6. डोमेनहरू API {#6-domains-api}

**आधार मार्ग:** `/domains`

**डोमेन म्याप गर्नुहोस्**
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

## दर्ता अन्त्यबिन्दु {#registration-endpoint}

`/register` अन्त्यबिन्दुले पूर्ण चेकआउट/दर्ता प्रवाह प्रदान गर्छ:

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

## स्वायत्त टेनेन्ट अन्त्यबिन्दुहरू {#sovereign-tenant-endpoints}

Ultimate Multisite: Multi-Tenancy 1.2.0 ले पृथक टेनेन्टहरू प्रावधान गर्ने, निरीक्षण गर्ने, वा प्रमाणित गर्ने एकीकरणहरूका लागि स्वायत्त टेनेन्ट REST कभरेज थप्छ।

ठ्याक्कै अनुरोध पेलोड सक्षम गरिएको होस्ट क्षमतामा निर्भर हुन्छ, तर एकीकरणहरूले यी अन्त्यबिन्दु समूहहरूको अपेक्षा गर्नुपर्छ:

```http
POST /wu/v2/tenants/{site_id}/bootstrap
GET /wu/v2/tenants/{site_id}/migration-status
POST /wu/v2/tenants/{site_id}/verify
DELETE /wu/v2/tenants/{site_id}
```

टेनेन्ट रजिस्ट्री, डेटाबेस, फाइल प्रणाली, र राउटिङ अवस्था तयार गर्न बुटस्ट्र्याप अन्त्यबिन्दु प्रयोग गर्नुहोस्। उत्पादन ट्राफिक स्विच गर्नुअघि माइग्रेसन स्थिति र प्रमाणीकरण अन्त्यबिन्दुहरू प्रयोग गर्नुहोस्। स्वायत्त टियरडाउनका लागि मेटाउने अन्त्यबिन्दु प्रयोग गर्नुहोस् ताकि डेटाबेस प्रमाणहरू एडअन सफाइ प्रवाहमार्फत हटाइन्छन्।

सामान्य माइग्रेसन स्थिति प्रतिक्रियाहरूमा समावेश हुन्छन्:

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

`ready: false` लाई प्रि-लन्च अवरोधका रूपमा लिनुहोस्। प्रमाणीकरण विवरणहरू जाँच गर्नुहोस्, डेटाबेस होस्ट बाइन्डिङ, क्यु, प्रयोगकर्ता प्रावधान, वा राउटिङ समस्या समाधान गर्नुहोस्, त्यसपछि प्रमाणीकरण पुनः प्रयास गर्नुहोस्।

## त्रुटि प्रतिक्रियाहरू {#error-responses}

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

## पृष्ठांकन र फिल्टरिङ {#pagination-and-filtering}

**क्वेरी प्यारामिटरहरू:**
```http
GET /wu/v2/customers?per_page=20&page=2&search=john&status=active
```

सामान्य प्यारामिटरहरू:
- `per_page` - प्रति पृष्ठ वस्तुहरू (पूर्वनिर्धारित: 20, अधिकतम: 100)
- `page` - पृष्ठ नम्बर
- `search` - खोज शब्द
- `orderby` - क्रमबद्ध गर्ने फिल्ड
- `order` - क्रमबद्ध दिशा (asc/desc)
- `status` - अवस्थाअनुसार फिल्टर गर्नुहोस्
- `date_created` - मिति दायराअनुसार फिल्टर गर्नुहोस्
