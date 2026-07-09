---
title: REST API અવલોકન
sidebar_position: 1
_i18n_hash: cabcc173f6a77e5de94e39fff19bc2fa
---
# REST API સંદર્ભ

## આધારભૂત રૂપરેખાંકન

**આધાર URL:** `{site_url}/wp-json/wu/v2/`
**પ્રમાણીકરણ:** API Key અને Secret (HTTP Basic Auth અથવા URL પરિમાણો)

## પ્રમાણીકરણ

### API સક્ષમ કરો
```php
// Enable API in Ultimate Multisite settings or programmatically
wu_save_setting('enable_api', true);
```

### API ઓળખપત્રો મેળવો
```php
$api_key = wu_get_setting('api_key');
$api_secret = wu_get_setting('api_secret');
```

### પ્રમાણીકરણ પદ્ધતિઓ

**HTTP Basic Auth (ભલામણ કરેલ):**
```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

**URL પરિમાણો:**
```bash
curl "https://yoursite.com/wp-json/wu/v2/customers?api_key=your_key&api_secret=your_secret"
```

## મુખ્ય અંતબિંદુઓ

### 1. ગ્રાહકો API

**આધાર રૂટ:** `/customers`

**બધા ગ્રાહકો મેળવો**
```http
GET /wu/v2/customers
```

**એક ગ્રાહક મેળવો**
```http
GET /wu/v2/customers/{id}
```

**ગ્રાહક બનાવો**
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

**ગ્રાહક અપડેટ કરો**
```http
PUT /wu/v2/customers/{id}
Content-Type: application/json

{
    "vip": true,
    "extra_information": "VIP customer notes"
}
```

**ગ્રાહક કાઢી નાખો**
```http
DELETE /wu/v2/customers/{id}
```

### 2. સાઇટ્સ API

**આધાર રૂટ:** `/sites`

**સાઇટ બનાવો**
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

### 3. સભ્યપદો API

**આધાર રૂટ:** `/memberships`

**સભ્યપદ બનાવો**
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

### 4. ઉત્પાદનો API

**આધાર રૂટ:** `/products`

**બધા ઉત્પાદનો મેળવો**
```http
GET /wu/v2/products
```

### 5. ચુકવણીઓ API

**આધાર રૂટ:** `/payments`

**ચુકવણી બનાવો**
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

### 6. ડોમેન્સ API

**આધાર રૂટ:** `/domains`

**ડોમેન મેપ કરો**
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

## નોંધણી અંતબિંદુ

`/register` અંતબિંદુ સંપૂર્ણ checkout/નોંધણી પ્રવાહ પ્રદાન કરે છે:

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

**પ્રતિસાદ:**
```json
{
    "customer": { ... },
    "membership": { ... },
    "payment": { ... },
    "site": { "id": 123 }
}
```

## સ્વતંત્ર ટેનન્ટ અંતબિંદુઓ

Ultimate Multisite: Multi-Tenancy 1.2.0 એવા એકીકરણો માટે સ્વતંત્ર ટેનન્ટ REST આવરણ ઉમેરે છે જે અલગ કરાયેલા ટેનન્ટ્સની જોગવાઈ, તપાસ અથવા ચકાસણી કરે છે.

ચોક્કસ વિનંતી પેલોડ સક્ષમ હોસ્ટ ક્ષમતા પર આધાર રાખે છે, પરંતુ એકીકરણોએ આ અંતબિંદુ જૂથોની અપેક્ષા રાખવી જોઈએ:

```http
POST /wu/v2/tenants/{site_id}/bootstrap
GET /wu/v2/tenants/{site_id}/migration-status
POST /wu/v2/tenants/{site_id}/verify
DELETE /wu/v2/tenants/{site_id}
```

ટેનન્ટ રજિસ્ટ્રી, ડેટાબેઝ, ફાઇલસિસ્ટમ અને રૂટિંગ સ્થિતિ તૈયાર કરવા માટે bootstrap અંતબિંદુનો ઉપયોગ કરો. ઉત્પાદન ટ્રાફિક સ્વિચ કરતા પહેલાં સ્થળાંતર સ્થિતિ અને ચકાસણી અંતબિંદુઓનો ઉપયોગ કરો. સ્વતંત્ર ટિયરડાઉન માટે કાઢી નાખવાના અંતબિંદુનો ઉપયોગ કરો જેથી ડેટાબેઝ ઓળખપત્રો addon cleanup પ્રવાહ દ્વારા દૂર થાય.

સામાન્ય સ્થળાંતર સ્થિતિ પ્રતિસાદોમાં શામેલ છે:

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

`ready: false` ને પ્રી-લૉન્ચ અવરોધક તરીકે ગણો. ચકાસણી વિગતો તપાસો, ડેટાબેઝ હોસ્ટ બાઇન્ડિંગ, કતાર, વપરાશકર્તા જોગવાઈ અથવા રૂટિંગ સમસ્યા ઠીક કરો, પછી ફરીથી ચકાસણીનો પ્રયાસ કરો.

## ભૂલ પ્રતિસાદો

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

## પેજિનેશન અને ફિલ્ટરિંગ

**ક્વેરી પરિમાણો:**
```http
GET /wu/v2/customers?per_page=20&page=2&search=john&status=active
```

સામાન્ય પરિમાણો:
- `per_page` - પ્રતિ પૃષ્ઠ વસ્તુઓ (ડિફૉલ્ટ: 20, મહત્તમ: 100)
- `page` - પૃષ્ઠ નંબર
- `search` - શોધ શબ્દ
- `orderby` - સોર્ટ ફીલ્ડ
- `order` - સોર્ટ દિશા (asc/desc)
- `status` - સ્થિતિ દ્વારા ફિલ્ટર કરો
- `date_created` - તારીખ શ્રેણી દ્વારા ફિલ્ટર કરો
