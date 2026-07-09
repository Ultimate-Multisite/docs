---
title: REST API അവലോകനം
sidebar_position: 1
_i18n_hash: cabcc173f6a77e5de94e39fff19bc2fa
---
# REST API റഫറൻസ്

## അടിസ്ഥാന ക്രമീകരണം

**അടിസ്ഥാന URL:** `{site_url}/wp-json/wu/v2/`
**പ്രാമാണീകരണം:** API Key & രഹസ്യം (HTTP Basic Auth അല്ലെങ്കിൽ URL പാരാമീറ്ററുകൾ)

## പ്രാമാണീകരണം

### API പ്രവർത്തനക്ഷമമാക്കുക
```php
// Enable API in Ultimate Multisite settings or programmatically
wu_save_setting('enable_api', true);
```

### API ക്രെഡൻഷ്യലുകൾ നേടുക
```php
$api_key = wu_get_setting('api_key');
$api_secret = wu_get_setting('api_secret');
```

### പ്രാമാണീകരണ രീതികൾ

**HTTP Basic Auth (ശുപാർശ ചെയ്യുന്നത്):**
```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

**URL പാരാമീറ്ററുകൾ:**
```bash
curl "https://yoursite.com/wp-json/wu/v2/customers?api_key=your_key&api_secret=your_secret"
```

## പ്രധാന എൻഡ്‌പോയിന്റുകൾ

### 1. ഉപഭോക്താക്കളുടെ API

**അടിസ്ഥാന റൂട്ട്:** `/customers`

**എല്ലാ ഉപഭോക്താക്കളെയും നേടുക**
```http
GET /wu/v2/customers
```

**ഒറ്റ ഉപഭോക്താവിനെ നേടുക**
```http
GET /wu/v2/customers/{id}
```

**ഉപഭോക്താവിനെ സൃഷ്ടിക്കുക**
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

**ഉപഭോക്താവിനെ അപ്‌ഡേറ്റ് ചെയ്യുക**
```http
PUT /wu/v2/customers/{id}
Content-Type: application/json

{
    "vip": true,
    "extra_information": "VIP customer notes"
}
```

**ഉപഭോക്താവിനെ ഇല്ലാതാക്കുക**
```http
DELETE /wu/v2/customers/{id}
```

### 2. സൈറ്റുകളുടെ API

**അടിസ്ഥാന റൂട്ട്:** `/sites`

**സൈറ്റ് സൃഷ്ടിക്കുക**
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

### 3. മെമ്പർഷിപ്പുകളുടെ API

**അടിസ്ഥാന റൂട്ട്:** `/memberships`

**മെമ്പർഷിപ്പ് സൃഷ്ടിക്കുക**
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

### 4. ഉൽപ്പന്നങ്ങളുടെ API

**അടിസ്ഥാന റൂട്ട്:** `/products`

**എല്ലാ ഉൽപ്പന്നങ്ങളും നേടുക**
```http
GET /wu/v2/products
```

### 5. പേയ്‌മെന്റുകളുടെ API

**അടിസ്ഥാന റൂട്ട്:** `/payments`

**പേയ്‌മെന്റ് സൃഷ്ടിക്കുക**
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

### 6. ഡൊമെയ്‌നുകളുടെ API

**അടിസ്ഥാന റൂട്ട്:** `/domains`

**ഡൊമെയ്ൻ മാപ്പ് ചെയ്യുക**
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

## രജിസ്ട്രേഷൻ എൻഡ്‌പോയിന്റ്

`/register` എൻഡ്‌പോയിന്റ് പൂർണ്ണമായ checkout/രജിസ്ട്രേഷൻ പ്രവാഹം നൽകുന്നു:

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

**പ്രതികരണം:**
```json
{
    "customer": { ... },
    "membership": { ... },
    "payment": { ... },
    "site": { "id": 123 }
}
```

## സ്വതന്ത്ര ടെനന്റ് എൻഡ്‌പോയിന്റുകൾ

Ultimate Multisite: Multi-Tenancy 1.2.0 ഒറ്റപ്പെട്ട ടെനന്റുകൾ സൃഷ്ടിക്കാനും പരിശോധിക്കാനും സ്ഥിരീകരിക്കാനും ഉപയോഗിക്കുന്ന ഇന്റഗ്രേഷനുകൾക്കായി സ്വതന്ത്ര ടെനന്റ് REST പിന്തുണ ചേർക്കുന്നു.

കൃത്യമായ അഭ്യർത്ഥന payload പ്രവർത്തനക്ഷമമാക്കിയ ഹോസ്റ്റ് ശേഷിയെ ആശ്രയിച്ചിരിക്കും. എന്നാൽ ഇന്റഗ്രേഷനുകൾ ഈ എൻഡ്‌പോയിന്റ് ഗ്രൂപ്പുകൾ പ്രതീക്ഷിക്കണം:

```http
POST /wu/v2/tenants/{site_id}/bootstrap
GET /wu/v2/tenants/{site_id}/migration-status
POST /wu/v2/tenants/{site_id}/verify
DELETE /wu/v2/tenants/{site_id}
```

ടെനന്റ് രജിസ്ട്രി, ഡാറ്റാബേസ്, ഫയൽസിസ്റ്റം, റൂട്ടിംഗ് സ്ഥിതി എന്നിവ തയ്യാറാക്കാൻ bootstrap എൻഡ്‌പോയിന്റ് ഉപയോഗിക്കുക. പ്രൊഡക്ഷൻ ട്രാഫിക് മാറ്റുന്നതിന് മുമ്പ് മൈഗ്രേഷൻ നിലയും സ്ഥിരീകരണ എൻഡ്‌പോയിന്റുകളും ഉപയോഗിക്കുക. സ്വതന്ത്ര teardown-ന് ഇല്ലാതാക്കൽ എൻഡ്‌പോയിന്റ് ഉപയോഗിക്കുക, അതിലൂടെ addon cleanup പ്രവാഹത്തിലൂടെ ഡാറ്റാബേസ് ക്രെഡൻഷ്യലുകൾ നീക്കം ചെയ്യപ്പെടും.

സാധാരണ മൈഗ്രേഷൻ നിലാ പ്രതികരണങ്ങളിൽ ഉൾപ്പെടുന്നത്:

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

`ready: false` പ്രീ-ലോഞ്ച് തടസ്സമായി പരിഗണിക്കുക. സ്ഥിരീകരണ വിശദാംശങ്ങൾ പരിശോധിച്ച് ഡാറ്റാബേസ് ഹോസ്റ്റ് binding, queue, ഉപയോക്തൃ provisioning, അല്ലെങ്കിൽ റൂട്ടിംഗ് പ്രശ്നം പരിഹരിക്കുക. ശേഷം സ്ഥിരീകരണം വീണ്ടും ശ്രമിക്കുക.

## പിശക് പ്രതികരണങ്ങൾ

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

## പേജിനേഷനും ഫിൽട്ടറിംഗും

**ക്വറി പാരാമീറ്ററുകൾ:**
```http
GET /wu/v2/customers?per_page=20&page=2&search=john&status=active
```

സാധാരണ പാരാമീറ്ററുകൾ:
- `per_page` - ഓരോ പേജിലുമുള്ള ഇനങ്ങൾ (ഡിഫോൾട്ട്: 20, പരമാവധി: 100)
- `page` - പേജ് നമ്പർ
- `search` - തിരയൽ പദം
- `orderby` - സോർട്ട് ഫീൽഡ്
- `order` - സോർട്ട് ദിശ (asc/desc)
- `status` - നില അനുസരിച്ച് ഫിൽട്ടർ ചെയ്യുക
- `date_created` - തീയതി പരിധി അനുസരിച്ച് ഫിൽട്ടർ ചെയ്യുക
