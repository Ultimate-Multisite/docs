---
title: REST API అవలోకనం
sidebar_position: 1
_i18n_hash: 4e511d92e0002dff445f45ff05adbeda
---
# REST API రిఫరెన్స్

## బేస్ కాన్ఫిగరేషన్ (Base Configuration)

**బేస్ URL:** `{site_url}/wp-json/wu/v2/`
**Authentication:** API Key & Secret (HTTP Basic Auth లేదా URL Parameters)

## Authentication (గుర్తింపు ధృవీకరణ)

### API ని ఎనేబుల్ చేయడం
```php
// Ultimate Multisite సెట్టింగ్‌లలో లేదా ప్రోగ్రామాటిక్‌గా API ని ఎనేబుల్ చేయండి
wu_save_setting('enable_api', true);
```

### API credentials పొందడం
```php
$api_key = wu_get_setting('api_key');
$api_secret = wu_get_setting('api_secret');
```

### Authentication పద్ధతులు

**HTTP Basic Auth (సిఫార్సు చేయబడింది):**
```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

**URL Parameters:**
```bash
curl "https://yoursite.com/wp-json/wu/v2/customers?api_key=your_key&api_secret=your_secret"
```

## Core Endpoints (ప్రధాన ఎండ్‌పాయింట్‌లు)

### 1. Customers API (కస్టమర్ల API)

**Base Route:** `/customers`

**అన్ని కస్టమర్లను పొందడం (Get All Customers)**
```http
GET /wu/v2/customers
```

**ఒక కస్టమర్‌ను పొందడం (Get Single Customer)**
```http
GET /wu/v2/customers/{id}
```

**కస్టమర్‌ను సృష్టించడం (Create Customer)**
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

**కస్టమర్‌ను అప్‌డేట్ చేయడం (Update Customer)**
```http
PUT /wu/v2/customers/{id}
Content-Type: application/json

{
    "vip": true,
    "extra_information": "VIP customer notes"
}
```

**కస్టమర్‌ను తొలగించడం (Delete Customer)**
```http
DELETE /wu/v2/customers/{id}
```

### 2. Sites API (సైట్‌ల API)

**Base Route:** `/sites`

**సైట్‌ను సృష్టించడం (Create Site)**
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

### 3. Memberships API (సభ్యత్వాలు API)

**Base Route:** `/memberships`

**సభ్యత్వాన్ని సృష్టించడం (Create Membership)**
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

### 4. Products API (ఉత్పత్తుల API)

**Base Route:** `/products`

**అన్ని ఉత్పత్తులను పొందడం (Get All Products)**
```http
GET /wu/v2/products
```

### 5. Payments API (చెల్లింపులు API)

**Base Route:** `/payments`

**చెల్లింపును సృష్టించడం (Create Payment)**
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

### 6. Domains API (డొమైన్‌లు API)

**Base Route:** `/domains`

**డొమైన్‌ను మ్యాప్ చేయడం (Map Domain)**
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

## Registration Endpoint (రిజిస్ట్రేషన్ ఎండ్‌పాయింట్)

`/register` అనే endpoint అనేది పూర్తి చెక్అవుట్/రిజిస్ట్రేషన్ ఫ్లోను అందిస్తుంది:

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

**Response (సమాధానం):**
```json
{
    "customer": { ... },
    "membership": { ... },
    "payment": { ... },
    "site": { "id": 123 }
}
```

## Error Responses (ఎర్రర్ సమాధానాలు)

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

## Pagination and Filtering (పేజీలవారీగా చూపడం మరియు ఫిల్టరింగ్)

**Query Parameters (వినియోగ పారామీటర్లు):**
```http
GET /wu/v2/customers?per_page=20&page=2&search=john&status=active
```

సాధారణ పారామీటర్లు:
- `per_page` - ఒక్కో పేజీలో ఎన్ని ఐటమ్స్ చూపాలి (డిఫాల్ట్: 20, గరిష్టం: 100)
- `page` - పేజీ నంబర్
- `search` - వెతకాల్సిన టర్మ్
- `orderby` - ఏ ఫీల్డ్‌పై క్రమబద్ధీకరించాలో (Sort field)
- `order` - క్రమబద్ధీకరణ దిశ (asc/desc)
- `status` - స్టేటస్ ద్వారా ఫిల్టర్ చేయడం
- `date_created` - తేదీ పరిధి ద్వారా ఫిల్టర్ చేయడం
