---
title: REST API ಪರಿಚಯ
sidebar_position: 1
_i18n_hash: 4e511d92e0002dff445f45ff05adbeda
---
# REST API ವಿವರಣೆ

## ಮೂಲ ಸೆಟಪ್ (Base Configuration)

**Base URL:** `{site_url}/wp-json/wu/v2/`
**Authentication:** API Key ಮತ್ತು Secret (HTTP Basic Auth ಅಥವಾ URL Parameters)

## प्रमाणीकरण (Authentication)

### API ಅನ್ನು ಸಕ್ರಿಯಗೊಳಿಸುವುದು (Enable API)
```php
// Ultimate Multisite ಸೆಟ್ಟಿಂಗ್‌ಗಳಲ್ಲಿ ಅಥವಾ ಪ್ರೋಗ್ರಾಮ್ಯಾಟಿಕ್‌ವಾಗಿ API ಅನ್ನು ಸಕ್ರಿಯಗೊಳಿಸಿ
wu_save_setting('enable_api', true);
```

### API ವಿವರಗಳನ್ನು ಪಡೆಯುವುದು (Get API Credentials)
```php
$api_key = wu_get_setting('api_key');
$api_secret = wu_get_setting('api_secret');
```

### प्रमाणीकरण ವಿಧಾನಗಳು (Authentication Methods)

**HTTP Basic Auth (ಶಿಫಾರಸು ಮಾಡಲಾಗಿದೆ):**
```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

**URL Parameters:**
```bash
curl "https://yoursite.com/wp-json/wu/v2/customers?api_key=your_key&api_secret=your_secret"
```

## ಮುಖ್ಯ ಎಂಡ್‌ಪಾಯಿಂಟ್‌ಗಳು (Core Endpoints)

### 1. ಗ್ರಾಹಕರು API (Customers API)

**Base Route:** `/customers`

**ಎಲ್ಲಾ ಗ್ರಾಹಕರನ್ನು ಪಡೆಯುವುದು (Get All Customers)**
```http
GET /wu/v2/customers
```

**ಒಬ್ಬ ಗ್ರಾಹಕರನ್ನು ಪಡೆಯುವುದು (Get Single Customer)**
```http
GET /wu/v2/customers/{id}
```

**ಗ್ರಾಹಕರನ್ನು ರಚಿಸುವುದು (Create Customer)**
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

**ಗ್ರಾಹಕರನ್ನು ನವೀಕರಿಸುವುದು (Update Customer)**
```http
PUT /wu/v2/customers/{id}
Content-Type: application/json

{
    "vip": true,
    "extra_information": "VIP customer notes"
}
```

**ಗ್ರಾಹಕರನ್ನು ಅಳಿಸುವುದು (Delete Customer)**
```http
DELETE /wu/v2/customers/{id}
```

### 2. ಸೈಟ್‌ಗಳು API (Sites API)

**Base Route:** `/sites`

**ಸೈಟ್ ರಚಿಸುವುದು (Create Site)**
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

### 3. ಸದಸ್ಯತ್ವಗಳು API (Memberships API)

**Base Route:** `/memberships`

**ಸದಸ್ಯತ್ವವನ್ನು ರಚಿಸುವುದು (Create Membership)**
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

### 4. ಉತ್ಪನ್ನಗಳು API (Products API)

**Base Route:** `/products`

**ಎಲ್ಲಾ ಉತ್ಪನ್ನಗಳನ್ನು ಪಡೆಯುವುದು (Get All Products)**
```http
GET /wu/v2/products
```

### 5. ಪಾವತಿಗಳು API (Payments API)

**Base Route:** `/payments`

**ಪಾವತಿಯನ್ನು ರಚಿಸುವುದು (Create Payment)**
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

### 6. ಡೊಮೇನ್‌ಗಳು API (Domains API)

**Base Route:** `/domains`

**ಡೊಮೇನ್ ಮ್ಯಾಪಿಂಗ್ (Map Domain)**
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

## ನೋಂದಣಿ ಎಂಡ್‌ಪಾಯಿಂಟ್ (Registration Endpoint)

`/register` ಎಂಡ್‌ಪಾಯಿಂಟ್ ಸಂಪೂರ್ಣ ಚೆಕ್‌ಔಟ್/ನೋಂದಣಿ ಪ್ರಕ್ರಿಯೆಯನ್ನು ಒದಗಿಸುತ್ತದೆ:

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

**ಪ್ರತಿಕ್ರಿಯೆ (Response):**
```json
{
    "customer": { ... },
    "membership": { ... },
    "payment": { ... },
    "site": { "id": 123 }
}
```

## ದೋಷ ಪ್ರತಿಕ್ರಿಯೆಗಳು (Error Responses)

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

## ಪುಟೀಕರಣ ಮತ್ತು ಫಿಲ್ಟರಿಂಗ್ (Pagination and Filtering)

**Query Parameters:**
```http
GET /wu/v2/customers?per_page=20&page=2&search=john&status=active
```

ಸಾಮಾನ್ಯ ಪ್ಯಾರಾಮೀಟರ್‌ಗಳು (Common parameters):
- `per_page` - ಪ್ರತಿ ಪುಟದಲ್ಲಿನ ಐಟಂಗಳು (default: 20, max: 100)
- `page` - ಪುಟ ಸಂಖ್ಯೆ
- `search` - ಹುಡುಕಾಟ ಪದ (Search term)
- `orderby` - ಆಯೋಜಿಸಲು ಫೀಲ್ಡ್ (Sort field)
- `order` - ಆಯೋಜಿಸುವ ದಿಕ್ಕು (asc/desc)
- `status` - ಸ್ಟೇಟಸ್ ಮೂಲಕ ಫಿಲ್ಟರ್ ಮಾಡಿ
- `date_created` - ದಿನಾಂಕದ ವ್ಯಾಪ್ತಿಯ ಮೂಲಕ ಫಿಲ್ಟರ್ ಮಾಡಿ
