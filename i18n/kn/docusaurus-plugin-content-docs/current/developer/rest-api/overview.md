---
title: REST API ಅವಲೋಕನ
sidebar_position: 1
_i18n_hash: cabcc173f6a77e5de94e39fff19bc2fa
---
# REST API ಉಲ್ಲೇಖ

## ಮೂಲ ಸಂರಚನೆ {#base-configuration}

**ಮೂಲ URL:** `{site_url}/wp-json/wu/v2/`
**ದೃಢೀಕರಣ:** API Key ಮತ್ತು Secret (HTTP Basic Auth ಅಥವಾ URL ಪರಿಮಾಣಗಳು)

## ದೃಢೀಕರಣ {#authentication}

### API ಸಕ್ರಿಯಗೊಳಿಸಿ {#enable-api}
```php
// Enable API in Ultimate Multisite settings or programmatically
wu_save_setting('enable_api', true);
```

### API ಪ್ರಮಾಣಪತ್ರಗಳನ್ನು ಪಡೆಯಿರಿ {#get-api-credentials}
```php
$api_key = wu_get_setting('api_key');
$api_secret = wu_get_setting('api_secret');
```

### ದೃಢೀಕರಣ ವಿಧಾನಗಳು {#authentication-methods}

**HTTP Basic Auth (ಶಿಫಾರಸು):**
```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

**URL ಪರಿಮಾಣಗಳು:**
```bash
curl "https://yoursite.com/wp-json/wu/v2/customers?api_key=your_key&api_secret=your_secret"
```

## ಮುಖ್ಯ ಅಂತಿಮ ಬಿಂದುಗಳು {#core-endpoints}

### 1. ಗ್ರಾಹಕರ API {#1-customers-api}

**ಮೂಲ ಮಾರ್ಗ:** `/customers`

**ಎಲ್ಲ ಗ್ರಾಹಕರನ್ನು ಪಡೆಯಿರಿ**
```http
GET /wu/v2/customers
```

**ಒಬ್ಬ ಗ್ರಾಹಕರನ್ನು ಪಡೆಯಿರಿ**
```http
GET /wu/v2/customers/{id}
```

**ಗ್ರಾಹಕರನ್ನು ರಚಿಸಿ**
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

**ಗ್ರಾಹಕರನ್ನು ನವೀಕರಿಸಿ**
```http
PUT /wu/v2/customers/{id}
Content-Type: application/json

{
    "vip": true,
    "extra_information": "VIP customer notes"
}
```

**ಗ್ರಾಹಕರನ್ನು ಅಳಿಸಿ**
```http
DELETE /wu/v2/customers/{id}
```

### 2. ತಾಣಗಳ API {#2-sites-api}

**ಮೂಲ ಮಾರ್ಗ:** `/sites`

**ತಾಣವನ್ನು ರಚಿಸಿ**
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

### 3. ಸದಸ್ಯತ್ವಗಳ API {#3-memberships-api}

**ಮೂಲ ಮಾರ್ಗ:** `/memberships`

**ಸದಸ್ಯತ್ವವನ್ನು ರಚಿಸಿ**
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

### 4. ಉತ್ಪನ್ನಗಳ API {#4-products-api}

**ಮೂಲ ಮಾರ್ಗ:** `/products`

**ಎಲ್ಲ ಉತ್ಪನ್ನಗಳನ್ನು ಪಡೆಯಿರಿ**
```http
GET /wu/v2/products
```

### 5. ಪಾವತಿಗಳ API {#5-payments-api}

**ಮೂಲ ಮಾರ್ಗ:** `/payments`

**ಪಾವತಿಯನ್ನು ರಚಿಸಿ**
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

### 6. ಡೊಮೇನ್‌ಗಳ API {#6-domains-api}

**ಮೂಲ ಮಾರ್ಗ:** `/domains`

**ಡೊಮೇನ್ ನಕ್ಷೆ ಮಾಡಿ**
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

## ನೋಂದಣಿ ಅಂತಿಮ ಬಿಂದು {#registration-endpoint}

`/register` ಅಂತಿಮ ಬಿಂದುವು ಸಂಪೂರ್ಣ ಚೆಕ್‌ಔಟ್/ನೋಂದಣಿ ಹರಿವನ್ನು ಒದಗಿಸುತ್ತದೆ:

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

**ಪ್ರತಿಕ್ರಿಯೆ:**
```json
{
    "customer": { ... },
    "membership": { ... },
    "payment": { ... },
    "site": { "id": 123 }
}
```

## ಸ್ವಾಯತ್ತ ಟೆನಂಟ್ ಅಂತಿಮ ಬಿಂದುಗಳು {#sovereign-tenant-endpoints}

Ultimate Multisite: Multi-Tenancy 1.2.0 ಪ್ರತ್ಯೇಕ ಟೆನಂಟ್‌ಗಳನ್ನು ಒದಗಿಸುವ, ಪರಿಶೀಲಿಸುವ ಅಥವಾ ದೃಢಪಡಿಸುವ ಏಕೀಕರಣಗಳಿಗಾಗಿ ಸ್ವಾಯತ್ತ ಟೆನಂಟ್ REST ವ್ಯಾಪ್ತಿಯನ್ನು ಸೇರಿಸುತ್ತದೆ.

ನಿಖರವಾದ ವಿನಂತಿ ಪೇಲೋಡ್ ಸಕ್ರಿಯಗೊಳಿಸಿದ ಹೋಸ್ಟ್ ಸಾಮರ್ಥ್ಯವನ್ನು ಅವಲಂಬಿಸುತ್ತದೆ, ಆದರೆ ಏಕೀಕರಣಗಳು ಈ ಅಂತಿಮ ಬಿಂದು ಗುಂಪುಗಳನ್ನು ನಿರೀಕ್ಷಿಸಬೇಕು:

```http
POST /wu/v2/tenants/{site_id}/bootstrap
GET /wu/v2/tenants/{site_id}/migration-status
POST /wu/v2/tenants/{site_id}/verify
DELETE /wu/v2/tenants/{site_id}
```

ಟೆನಂಟ್ ರಿಜಿಸ್ಟ್ರಿ, ಡೇಟಾಬೇಸ್, ಫೈಲ್‌ಸಿಸ್ಟಮ್ ಮತ್ತು ರೌಟಿಂಗ್ ಸ್ಥಿತಿಯನ್ನು ಸಿದ್ಧಪಡಿಸಲು bootstrap ಅಂತಿಮ ಬಿಂದುವನ್ನು ಬಳಸಿ. ಉತ್ಪಾದನಾ ಟ್ರಾಫಿಕ್ ಬದಲಾಯಿಸುವ ಮೊದಲು ವಲಸೆ ಸ್ಥಿತಿ ಮತ್ತು ದೃಢೀಕರಣ ಅಂತಿಮ ಬಿಂದುಗಳನ್ನು ಬಳಸಿ. ಸ್ವಾಯತ್ತ ತೆರವುಗೊಳಿಸುವಿಕೆಗೆ ಅಳಿಸುವ ಅಂತಿಮ ಬಿಂದುವನ್ನು ಬಳಸಿ, ಇದರಿಂದ ಡೇಟಾಬೇಸ್ ಪ್ರಮಾಣಪತ್ರಗಳು addon ಸ್ವಚ್ಛತಾ ಹರಿವಿನ ಮೂಲಕ ತೆಗೆದುಹಾಕಲ್ಪಡುತ್ತವೆ.

ಸಾಮಾನ್ಯ ವಲಸೆ ಸ್ಥಿತಿ ಪ್ರತಿಕ್ರಿಯೆಗಳು ಇವುಗಳನ್ನು ಒಳಗೊಂಡಿರುತ್ತವೆ:

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

`ready: false` ಅನ್ನು ಬಿಡುಗಡೆಗೂ ಮುಂಚಿನ ತಡೆ ಎಂದು ಪರಿಗಣಿಸಿ. ದೃಢೀಕರಣ ವಿವರಗಳನ್ನು ಪರಿಶೀಲಿಸಿ, ಡೇಟಾಬೇಸ್ ಹೋಸ್ಟ್ ಬೈಂಡಿಂಗ್, ಕ್ಯೂ, ಬಳಕೆದಾರ ಒದಗಿಸುವಿಕೆ ಅಥವಾ ರೌಟಿಂಗ್ ಸಮಸ್ಯೆಯನ್ನು ಸರಿಪಡಿಸಿ, ನಂತರ ದೃಢೀಕರಣವನ್ನು ಮರುಪ್ರಯತ್ನಿಸಿ.

## ದೋಷ ಪ್ರತಿಕ್ರಿಯೆಗಳು {#error-responses}

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

## ಪುಟೀಕರಣ ಮತ್ತು ಶೋಧನೆ {#pagination-and-filtering}

**ಪ್ರಶ್ನಾ ಪರಿಮಾಣಗಳು:**
```http
GET /wu/v2/customers?per_page=20&page=2&search=john&status=active
```

ಸಾಮಾನ್ಯ ಪರಿಮಾಣಗಳು:
- `per_page` - ಪ್ರತಿ ಪುಟದ ಅಂಶಗಳು (ಡೀಫಾಲ್ಟ್: 20, ಗರಿಷ್ಠ: 100)
- `page` - ಪುಟ ಸಂಖ್ಯೆ
- `search` - ಹುಡುಕಾಟ ಪದ
- `orderby` - ವಿಂಗಡಿಸುವ ಕ್ಷೇತ್ರ
- `order` - ವಿಂಗಡಿಸುವ ದಿಕ್ಕು (asc/desc)
- `status` - ಸ್ಥಿತಿಯ ಮೂಲಕ ಫಿಲ್ಟರ್ ಮಾಡಿ
- `date_created` - ದಿನಾಂಕ ವ್ಯಾಪ್ತಿಯ ಮೂಲಕ ಫಿಲ್ಟರ್ ಮಾಡಿ
