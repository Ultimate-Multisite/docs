---
title: REST API கண்ணோட்டம்
sidebar_position: 1
_i18n_hash: cabcc173f6a77e5de94e39fff19bc2fa
---
# REST API குறிப்பு

## அடிப்படை கட்டமைப்பு

**அடிப்படை URL:** `{site_url}/wp-json/wu/v2/`
**அங்கீகாரம்:** API Key மற்றும் ரகசியம் (HTTP Basic Auth அல்லது URL அளவுருக்கள்)

## அங்கீகாரம்

### API-ஐ இயக்கு
```php
// Enable API in Ultimate Multisite settings or programmatically
wu_save_setting('enable_api', true);
```

### API சான்றுகளைப் பெறுக
```php
$api_key = wu_get_setting('api_key');
$api_secret = wu_get_setting('api_secret');
```

### அங்கீகார முறைகள்

**HTTP Basic Auth (பரிந்துரைக்கப்படுகிறது):**
```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

**URL அளவுருக்கள்:**
```bash
curl "https://yoursite.com/wp-json/wu/v2/customers?api_key=your_key&api_secret=your_secret"
```

## முதன்மை முடிவுப்புள்ளிகள்

### 1. வாடிக்கையாளர்கள் API

**அடிப்படை வழி:** `/customers`

**அனைத்து வாடிக்கையாளர்களையும் பெறுக**
```http
GET /wu/v2/customers
```

**ஒற்றை வாடிக்கையாளரைப் பெறுக**
```http
GET /wu/v2/customers/{id}
```

**வாடிக்கையாளரை உருவாக்கு**
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

**வாடிக்கையாளரைப் புதுப்பி**
```http
PUT /wu/v2/customers/{id}
Content-Type: application/json

{
    "vip": true,
    "extra_information": "VIP customer notes"
}
```

**வாடிக்கையாளரை நீக்கு**
```http
DELETE /wu/v2/customers/{id}
```

### 2. தளங்கள் API

**அடிப்படை வழி:** `/sites`

**தளத்தை உருவாக்கு**
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

### 3. உறுப்பினர் சேர்க்கைகள் API

**அடிப்படை வழி:** `/memberships`

**உறுப்பினர் சேர்க்கையை உருவாக்கு**
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

**அடிப்படை வழி:** `/products`

**அனைத்து தயாரிப்புகளையும் பெறுக**
```http
GET /wu/v2/products
```

### 5. கட்டணங்கள் API

**அடிப்படை வழி:** `/payments`

**கட்டணத்தை உருவாக்கு**
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

**அடிப்படை வழி:** `/domains`

**டொமைனை இணை**
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

## பதிவுசெய்தல் முடிவுப்புள்ளி

`/register` முடிவுப்புள்ளி முழுமையான checkout/பதிவுசெய்தல் ஓட்டத்தை வழங்குகிறது:

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

**பதில்:**
```json
{
    "customer": { ... },
    "membership": { ... },
    "payment": { ... },
    "site": { "id": 123 }
}
```

## சுயாட்சி tenant முடிவுப்புள்ளிகள்

Ultimate Multisite: Multi-Tenancy 1.2.0 தனிமைப்படுத்தப்பட்ட tenant-களை வழங்க, ஆய்வு செய்ய அல்லது சரிபார்க்கும் ஒருங்கிணைப்புகளுக்கான சுயாட்சி tenant REST கவரேஜைச் சேர்க்கிறது.

துல்லியமான கோரிக்கை payload இயக்கப்பட்ட host திறனைப் பொறுத்தது. ஆனால் ஒருங்கிணைப்புகள் இந்த முடிவுப்புள்ளி குழுக்களை எதிர்பார்க்க வேண்டும்:

```http
POST /wu/v2/tenants/{site_id}/bootstrap
GET /wu/v2/tenants/{site_id}/migration-status
POST /wu/v2/tenants/{site_id}/verify
DELETE /wu/v2/tenants/{site_id}
```

tenant பதிவகம், தரவுத்தளம், கோப்பு முறைமை மற்றும் வழிமாற்று நிலையைத் தயாரிக்க bootstrap முடிவுப்புள்ளியைப் பயன்படுத்தவும். production போக்குவரத்தை மாற்றுவதற்கு முன் migration status மற்றும் verification முடிவுப்புள்ளிகளைப் பயன்படுத்தவும். sovereign teardown-க்கு deletion முடிவுப்புள்ளியைப் பயன்படுத்தவும்; இதனால் தரவுத்தள சான்றுகள் addon cleanup ஓட்டம் மூலம் அகற்றப்படும்.

சாதாரண migration status பதில்களில் அடங்குபவை:

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

`ready: false` என்பதை வெளியீட்டுக்கு முன் தடையாகக் கருதவும். சரிபார்ப்பு விவரங்களைப் பார்த்து, தரவுத்தள host binding, queue, பயனர் provisioning அல்லது routing சிக்கலைச் சரிசெய்து, பின்னர் verification-ஐ மீண்டும் முயலவும்.

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

## பக்கமாக்கல் மற்றும் வடிகட்டல்

**வினவல் அளவுருக்கள்:**
```http
GET /wu/v2/customers?per_page=20&page=2&search=john&status=active
```

பொதுவான அளவுருக்கள்:
- `per_page` - ஒவ்வொரு பக்கத்திற்குமான உருப்படிகள் (இயல்புநிலை: 20, அதிகபட்சம்: 100)
- `page` - பக்க எண்
- `search` - தேடல் சொல்
- `orderby` - வரிசைப்படுத்தும் புலம்
- `order` - வரிசை திசை (asc/desc)
- `status` - நிலை அடிப்படையில் வடிகட்டு
- `date_created` - தேதி வரம்பு அடிப்படையில் வடிகட்டு
