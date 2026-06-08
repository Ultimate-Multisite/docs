---
title: REST API അവലോകനം
sidebar_position: 1
_i18n_hash: 4e511d92e0002dff445f45ff05adbeda
---
# REST API റഫറൻസ്

## അടിസ്ഥാന കോൺഫിഗറേഷൻ (Base Configuration)

**Base URL:** `{site_url}/wp-json/wu/v2/`
**Authentication:** API Key & Secret (HTTP Basic Auth അല്ലെങ്കിൽ URL Parameters)

## Authentication (ആധികാരികത)

### API പ്രവർത്തനക്ഷമമാക്കുക (Enable API)
```php
// Ultimate Multisite സജ്ജീകരണങ്ങളിൽ അല്ലെങ്കിൽ കോഡിംഗിലൂടെ API പ്രവർത്തനക്ഷമമാക്കുക
wu_save_setting('enable_api', true);
```

### API Credentials നേടുക (Get API Credentials)
```php
$api_key = wu_get_setting('api_key');
$api_secret = wu_get_setting('api_secret');
```

### Authentication രീതികൾ (Authentication Methods)

**HTTP Basic Auth (ശുപാർശ ചെയ്യുന്നത്):**
```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

**URL Parameters:**
```bash
curl "https://yoursite.com/wp-json/wu/v2/customers?api_key=your_key&api_secret=your_secret"
```

## പ്രധാന എൻഡ്‌പോയിന്റുകൾ (Core Endpoints)

### 1. Customers API (ഉപഭോക്താക്കൾ)

**Base Route:** `/customers`

**എല്ലാ ഉപഭോക്താക്കളെയും നേടുക (Get All Customers)**
```http
GET /wu/v2/customers
```

**ഒരു ഉപഭോക്താവിനെ നേടുക (Get Single Customer)**
```http
GET /wu/v2/customers/{id}
```

**ഉപഭോക്താവിനെ സൃഷ്ടിക്കുക (Create Customer)**
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

**ഉപഭോക്താവിനെ അപ്ഡേറ്റ് ചെയ്യുക (Update Customer)**
```http
PUT /wu/v2/customers/{id}
Content-Type: application/json

{
    "vip": true,
    "extra_information": "VIP customer notes"
}
```

**ഉപഭോക്താവിനെ ഡിലീറ്റ് ചെയ്യുക (Delete Customer)**
```http
DELETE /wu/v2/customers/{id}
```

### 2. Sites API (സൈറ്റുകൾ)

**Base Route:** `/sites`

**സൈറ്റ് സൃഷ്ടിക്കുക (Create Site)**
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

### 3. Memberships API (Membership)

**Base Route:** `/memberships`

**Membership സൃഷ്ടിക്കുക (Create Membership)**
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

### 4. Products API (ഉൽപ്പന്നങ്ങൾ)

**Base Route:** `/products`

**എല്ലാ ഉൽപ്പന്നങ്ങളെയും നേടുക (Get All Products)**
```http
GET /wu/v2/products
```

### 5. Payments API (പണമിടപാടുകൾ)

**Base Route:** `/payments`

**പണം അടച്ചതായി രേഖപ്പെടുത്തുക (Create Payment)**
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

### 6. Domains API (ഡൊമെയ്‌നുകൾ)

**Base Route:** `/domains`

**ഡൊമെയ്ൻ മാപ്പ് ചെയ്യുക (Map Domain)**
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

## Registration Endpoint (രജിസ്ട്രേഷൻ എൻഡ്‌പോയിന്റ്)

`/register` എൻഡ്‌പോയിന്റ് ഒരു പൂർണ്ണമായ checkout/രജിസ്ട്രേഷൻ പ്രവാഹം നൽകുന്നു:

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

**Response (പ്രതികരണം):**
```json
{
    "customer": { ... },
    "membership": { ... },
    "payment": { ... },
    "site": { "id": 123 }
}
```

## Error Responses (പിഴവ് പ്രതികരണങ്ങൾ)

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

## Pagination and Filtering (പേജിനേഷൻ, ഫിൽട്ടറിംഗ്)

**Query Parameters (ക്വറി പാരാമീറ്ററുകൾ):**
```http
GET /wu/v2/customers?per_page=20&page=2&search=john&status=active
```

സാധാരണയായി ഉപയോഗിക്കുന്ന പാരാമീറ്ററുകൾ:
- `per_page` - ഒരു പേജിലെ ഇനങ്ങളുടെ എണ്ണം (default: 20, max: 100)
- `page` - പേജ് നമ്പർ
- `search` - തിരയേണ്ട വാക്ക് (Search term)
- `orderby` - ക്രമീകരിക്കേണ്ട ഫീൽഡ് (Sort field)
- `order` - ക്രമീകരണ ദിശ (asc/desc)
- `status` - സ്റ്റാറ്റസ് അനുസരിച്ച് ഫിൽട്ടർ ചെയ്യുക
- `date_created` - തീയതിയുടെ പരിധി അനുസരിച്ച് ഫിൽട്ടർ ചെയ്യുക
