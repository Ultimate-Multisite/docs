---
title: REST API အကျဉ်းချုပ်
sidebar_position: 1
_i18n_hash: cabcc173f6a77e5de94e39fff19bc2fa
---
# REST API ကိုးကားချက် {#rest-api-reference}

## အခြေခံ ပြင်ဆင်သတ်မှတ်မှု {#base-configuration}

**အခြေခံ URL:** `{site_url}/wp-json/wu/v2/`
**အထောက်အထားစစ်ဆေးခြင်း:** API ကီးနှင့် လျှို့ဝှက်ကီး (HTTP Basic Auth သို့မဟုတ် URL ပါရာမီတာများ)

## အထောက်အထားစစ်ဆေးခြင်း {#authentication}

### API ဖွင့်ရန် {#enable-api}
```php
// Enable API in Ultimate Multisite settings or programmatically
wu_save_setting('enable_api', true);
```

### API အထောက်အထားများ ရယူရန် {#get-api-credentials}
```php
$api_key = wu_get_setting('api_key');
$api_secret = wu_get_setting('api_secret');
```

### အထောက်အထားစစ်ဆေးနည်းများ {#authentication-methods}

**HTTP Basic Auth (အကြံပြု):**
```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

**URL ပါရာမီတာများ:**
```bash
curl "https://yoursite.com/wp-json/wu/v2/customers?api_key=your_key&api_secret=your_secret"
```

## အဓိက အဆုံးမှတ်များ {#core-endpoints}

### 1. ဖောက်သည်များ API {#1-customers-api}

**အခြေခံ လမ်းကြောင်း:** `/customers`

**ဖောက်သည်အားလုံး ရယူရန်**
```http
GET /wu/v2/customers
```

**ဖောက်သည်တစ်ဦး ရယူရန်**
```http
GET /wu/v2/customers/{id}
```

**ဖောက်သည် ဖန်တီးရန်**
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

**ဖောက်သည် အပ်ဒိတ်လုပ်ရန်**
```http
PUT /wu/v2/customers/{id}
Content-Type: application/json

{
    "vip": true,
    "extra_information": "VIP customer notes"
}
```

**ဖောက်သည် ဖျက်ရန်**
```http
DELETE /wu/v2/customers/{id}
```

### 2. ဆိုက်များ API {#2-sites-api}

**အခြေခံ လမ်းကြောင်း:** `/sites`

**ဆိုက် ဖန်တီးရန်**
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

### 3. အဖွဲ့ဝင်မှုများ API {#3-memberships-api}

**အခြေခံ လမ်းကြောင်း:** `/memberships`

**အဖွဲ့ဝင်မှု ဖန်တီးရန်**
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

### 4. ထုတ်ကုန်များ API {#4-products-api}

**အခြေခံ လမ်းကြောင်း:** `/products`

**ထုတ်ကုန်အားလုံး ရယူရန်**
```http
GET /wu/v2/products
```

### 5. ငွေပေးချေမှုများ API {#5-payments-api}

**အခြေခံ လမ်းကြောင်း:** `/payments`

**ငွေပေးချေမှု ဖန်တီးရန်**
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

### 6. ဒိုမိန်းများ API {#6-domains-api}

**အခြေခံ လမ်းကြောင်း:** `/domains`

**ဒိုမိန်း ချိတ်ဆက်ရန်**
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

## မှတ်ပုံတင်ခြင်း အဆုံးမှတ် {#registration-endpoint}

`/register` အဆုံးမှတ်သည် checkout/မှတ်ပုံတင်ခြင်း လုပ်ငန်းစဉ် အပြည့်အစုံကို ပေးသည်-

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

**တုံ့ပြန်ချက်:**
```json
{
    "customer": { ... },
    "membership": { ... },
    "payment": { ... },
    "site": { "id": 123 }
}
```

## Sovereign Tenant အဆုံးမှတ်များ {#sovereign-tenant-endpoints}

Ultimate Multisite: Multi-Tenancy 1.2.0 သည် သီးခြားခွဲထားသော tenants များကို provision လုပ်ရန်၊ စစ်ဆေးကြည့်ရှုရန် သို့မဟုတ် အတည်ပြုရန် အသုံးပြုသော ချိတ်ဆက်မှုများအတွက် sovereign tenant REST လွှမ်းခြုံမှုကို ထည့်ပေးသည်။

တိကျသော တောင်းဆိုချက် payload သည် ဖွင့်ထားသော host စွမ်းရည်အပေါ် မူတည်သော်လည်း ချိတ်ဆက်မှုများသည် အောက်ပါ အဆုံးမှတ်အုပ်စုများကို မျှော်လင့်ထားသင့်သည်-

```http
POST /wu/v2/tenants/{site_id}/bootstrap
GET /wu/v2/tenants/{site_id}/migration-status
POST /wu/v2/tenants/{site_id}/verify
DELETE /wu/v2/tenants/{site_id}
```

tenant registry၊ database၊ filesystem နှင့် routing အခြေအနေကို ပြင်ဆင်ရန် bootstrap အဆုံးမှတ်ကို အသုံးပြုပါ။ production traffic မပြောင်းမီ migration status နှင့် verification အဆုံးမှတ်များကို အသုံးပြုပါ။ database အထောက်အထားများကို addon cleanup flow မှတစ်ဆင့် ဖယ်ရှားနိုင်ရန် sovereign teardown အတွက် deletion အဆုံးမှတ်ကို အသုံးပြုပါ။

ပုံမှန် migration status တုံ့ပြန်ချက်များတွင် အောက်ပါတို့ ပါဝင်သည်-

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

`ready: false` ကို မထုတ်လွှင့်မီ တားဆီးချက်အဖြစ် သတ်မှတ်ပါ။ verification အသေးစိတ်များကို စစ်ဆေးပါ၊ database host binding၊ queue၊ user provisioning သို့မဟုတ် routing ပြဿနာကို ပြင်ဆင်ပြီးနောက် verification ကို ပြန်လည်ကြိုးစားပါ။

## အမှား တုံ့ပြန်ချက်များ {#error-responses}

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

## စာမျက်နှာခွဲခြင်းနှင့် စစ်ထုတ်ခြင်း {#pagination-and-filtering}

**Query ပါရာမီတာများ:**
```http
GET /wu/v2/customers?per_page=20&page=2&search=john&status=active
```

အသုံးများသော ပါရာမီတာများ-
- `per_page` - စာမျက်နှာတစ်မျက်နှာရှိ အရာများ (မူလတန်ဖိုး: 20၊ အများဆုံး: 100)
- `page` - စာမျက်နှာ နံပါတ်
- `search` - ရှာဖွေမည့် စကားလုံး
- `orderby` - စီရန် field
- `order` - စီစဉ်မှု ဦးတည်ချက် (asc/desc)
- `status` - status အလိုက် စစ်ထုတ်ရန်
- `date_created` - ရက်စွဲ အပိုင်းအခြားအလိုက် စစ်ထုတ်ရန်
