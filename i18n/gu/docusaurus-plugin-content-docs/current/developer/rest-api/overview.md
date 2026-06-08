---
title: REST API નું વિવરણ
sidebar_position: 1
_i18n_hash: 4e511d92e0002dff445f45ff05adbeda
---
# REST API સંદર્ભ

## મૂળભૂત ગોઠવણી (Base Configuration)

**Base URL:** `{site_url}/wp-json/wu/v2/`
**Authentication:** API Key અને Secret (HTTP Basic Auth અથવા URL Parameters)

## પ્રમાણીકરણ (Authentication)

### API સક્ષમ કરો (Enable API)
```php
// Ultimate Multisite settings માં અથવા પ્રોગ્રામમેટિકલી API સક્ષમ કરો
wu_save_setting('enable_api', true);
```

### API credentials મેળવો (Get API Credentials)
```php
$api_key = wu_get_setting('api_key');
$api_secret = wu_get_setting('api_secret');
```

### Authentication પદ્ધતિઓ (Authentication Methods)

**HTTP Basic Auth (સલાહભર્યું):**
```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

**URL Parameters:**
```bash
curl "https://yoursite.com/wp-json/wu/v2/customers?api_key=your_key&api_secret=your_secret"
```

## મુખ્ય Endpoints (Core Endpoints)

### 1. Customers API

**Base Route:** `/customers`

**તમામ ગ્રાહકો મેળવો (Get All Customers)**
```http
GET /wu/v2/customers
```

**એક ગ્રાહક મેળવો (Get Single Customer)**
```http
GET /wu/v2/customers/{id}
```

**ગ્રાહક બનાવો (Create Customer)**
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

**ગ્રાહક અપડેટ કરો (Update Customer)**
```http
PUT /wu/v2/customers/{id}
Content-Type: application/json

{
    "vip": true,
    "extra_information": "VIP ગ્રાહક નોંધો"
}
```

**ગ્રાહક કાઢી નાખો (Delete Customer)**
```http
DELETE /wu/v2/customers/{id}
```

### 2. Sites API

**Base Route:** `/sites`

**સાઇટ બનાવો (Create Site)**
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

**Membership બનાવો (Create Membership)**
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

**તમામ પ્રોડક્ટ્સ મેળવો (Get All Products)**
```http
GET /wu/v2/products
```

### 5. Payments API

**Base Route:** `/payments`

**Payment બનાવો (Create Payment)**
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

**ડોમેન મેપ કરો (Map Domain)**
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

`/register` એન્ડપોઇન્ટ એક સંપૂર્ણ ચેકઆઉટ/રજીસ્ટ્રેશન ફ્લો પૂરો પાડે છે:

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

**Response:**
```json
{
    "customer": { ... },
    "membership": { ... },
    "payment": { ... },
    "site": { "id": 123 }
}
```

## Error Responses

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

## Pagination અને Filtering

**Query Parameters:**
```http
GET /wu/v2/customers?per_page=20&page=2&search=john&status=active
```

સામાન્ય parameters:
- `per_page` - પ્રતિ પૃષ્ઠ વસ્તુઓ (default: 20, max: 100)
- `page` - પૃષ્ઠ નંબર
- `search` - શોધ શબ્દ (Search term)
- `orderby` - સોર્ટ કરવા માટેનું ફીલ્ડ
- `order` - સોર્ટ કરવાની દિશા (asc/desc)
- `status` - સ્ટેટસ દ્વારા ફિલ્ટર કરો
- `date_created` - તારીખની રેન્જ દ્વારા ફિલ્ટર કરો
