---
title: REST API கண்ணோட்டம்
sidebar_position: 1
_i18n_hash: 4e511d92e0002dff445f45ff05adbeda
---
# REST API குறிப்பு

## அடிப்படை அமைப்பு

**Base URL:** `{site_url}/wp-json/wu/v2/`
**அங்கீகாரம் (Authentication):** API Key & Secret (HTTP Basic Auth அல்லது URL Parameters)

## அங்கீகரிப்பு

### API-ஐ இயக்குதல்
```php
// Ultimate Multisite அமைப்புகள் அல்லது நிரல் மூலம் API-ஐ இயக்குதல்
wu_save_setting('enable_api', true);
```

### API Credentials-ஐ பெறுதல்
```php
$api_key = wu_get_setting('api_key');
$api_secret = wu_get_setting('api_secret');
```

### அங்கீகார முறைகள்

**HTTP Basic Auth (பரிந்துரைக்கப்படுகிறது):**
```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

**URL Parameters:**
```bash
curl "https://yoursite.com/wp-json/wu/v2/customers?api_key=your_key&api_secret=your_secret"
```

## முக்கிய Endpoints

### 1. வாடிக்கையாளர்கள் API

**அடிப்படை வழித்தடம் (Base Route):** `/customers`

**அனைத்து வாடிக்கையாளர்களையும் பெறுதல்**
```http
GET /wu/v2/customers
```

**ஒரு குறிப்பிட்ட வாடிக்கையாளரைப் பெறுதல்**
```http
GET /wu/v2/customers/{id}
```

**வாடிக்கையாளரை உருவாக்குதல்**
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

**வாடிக்கையாளரைக் கையாளுதல் (Update)**
```http
PUT /wu/v2/customers/{id}
Content-Type: application/json

{
    "vip": true,
    "extra_information": "VIP customer notes"
}
```

**வாடிக்கையாளரைக் நீக்குதல்**
```http
DELETE /wu/v2/customers/{id}
```

### 2. தளங்கள் API

**அடிப்படை வழித்தடம் (Base Route):** `/sites`

**தளத்தை உருவாக்குதல்**
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

### 3. உறுப்பினர் திட்டங்கள் API

**அடிப்படை வழித்தடம் (Base Route):** `/memberships`

**உறுப்பினர் திட்டத்தை உருவாக்குதல்**
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

### 4. தயாரிப்புகள் API

**அடிப்படை வழித்தடம் (Base Route):** `/products`

**அனைத்து தயாரிப்புகளையும் பெறுதல்**
```http
GET /wu/v2/products
```

### 5. பணம் செலுத்தும் API

**அடிப்படை வழித்தடம் (Base Route):** `/payments`

**பணம் செலுத்துதலை உருவாக்குதல்**
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

### 6. டொமைன்கள் API

**அடிப்படை வழித்தடம் (Base Route):** `/domains`

**டொமைனை வரைபடமாக்குதல் (Map)**
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

## பதிவு செய்யும் Endpoint

`/register` endpoint என்பது ஒரு முழுமையான checkout/பதிவு செய்யும் செயல்முறையை வழங்குகிறது:

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

**பதில் (Response):**
```json
{
    "customer": { ... },
    "membership": { ... },
    "payment": { ... },
    "site": { "id": 123 }
}
```

## பிழை பதில்கள்

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

## பக்கப் பகுப்பாய்வு மற்றும் வடிகட்டுதல்

**Query Parameters:**
```http
GET /wu/v2/customers?per_page=20&page=2&search=john&status=active
```

பொதுவான Parameters:
- `per_page` - ஒரு பக்கத்தில் உள்ள பொருட்களின் எண்ணிக்கை (இயல்புநிலை: 20, அதிகபட்சம்: 100)
- `page` - பக்க எண்
- `search` - தேடல் சொல்
- `orderby` - வரிசைப்படுத்த வேண்டிய field
- `order` - வரிசைப்படுத்தும் திசை (asc/desc)
- `status` - நிலையின் அடிப்படையில் வடிகட்டுதல்
- `date_created` - தேதி வரம்பின் அடிப்படையில் வடிகட்டுதல்
