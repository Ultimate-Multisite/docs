---
title: REST API အကျဉ်းချုပ်
sidebar_position: 1
_i18n_hash: 4e511d92e0002dff445f45ff05adbeda
---
# REST API ကို အသုံးပြုပုံ အကိုးအကား

## အခြေခံ စနစ်ဖွဲ့စည်းမှု (Base Configuration)

**Base URL:** `{site_url}/wp-json/wu/v2/`
**Authentication:** API Key နှင့် Secret (HTTP Basic Auth သို့မဟုတ် URL Parameters)

## Authentication (အကောင့်ဝင်ခြင်း)

### API ကို ဖွင့်ခြင်း
```php
// Ultimate Multisite settings တွင် သို့မဟုတ် programmatically ဖြင့် API ကို ဖွင့်ပါ
wu_save_setting('enable_api', true);
```

### API Credentials များကို ရယူခြင်း
```php
$api_key = wu_get_setting('api_key');
$api_secret = wu_get_setting('api_secret');
```

### Authentication နည်းလမ်းများ

**HTTP Basic Auth (အကြံပြုသည်):**
```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

**URL Parameters:**
```bash
curl "https://yoursite.com/wp-json/wu/v2/customers?api_key=your_key&api_secret=your_secret"
```

## အဓိက Endpoints များ

### ၁။ Customers API (ဖောက်သည်များ)

**Base Route:** `/customers`

**ဖောက်သည်အားလုံးကို ရယူခြင်း**
```http
GET /wu/v2/customers
```

**ဖောက်သည်တစ်ဦးတည်းကို ရယူခြင်း**
```http
GET /wu/v2/customers/{id}
```

**ဖောက်သည်အသစ် ဖန်တီးခြင်း**
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

**ဖောက်သည်ကို အဆင့်မြှင့်ခြင်း (Update)**
```http
PUT /wu/v2/customers/{id}
Content-Type: application/json

{
    "vip": true,
    "extra_information": "VIP customer notes"
}
```

**ဖောက်သည်ကို ဖျက်ခြင်း**
```http
DELETE /wu/v2/customers/{id}
```

### ၂။ Sites API (ဝဘ်ဆိုဒ်များ)

**Base Route:** `/sites`

**ဝဘ်ဆိုဒ်အသစ် ဖန်တီးခြင်း**
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

### ၃။ Memberships API (အဖွဲ့ဝင်အဆင့်အတန်းများ)

**Base Route:** `/memberships`

**အဖွဲ့ဝင်အဆင့်အတန်းအသစ် ဖန်တီးခြင်း**
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

### ၄။ Products API (ထုတ်ကုန်များ)

**Base Route:** `/products`

**ထုတ်ကုန်အားလုံးကို ရယူခြင်း**
```http
GET /wu/v2/products
```

### ၅။ Payments API (ငွေပေးချေမှုများ)

**Base Route:** `/payments`

**ငွေပေးချေမှုအသစ် ဖန်တီးခြင်း**
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

### ၆။ Domains API (ဒိုမိန်းများ)

**Base Route:** `/domains`

**Domain ကို ချိတ်ဆက်ခြင်း (Map Domain)**
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

## Registration Endpoint (မှတ်ပုံတင်ခြင်း အဆုံးသတ်နေရာ)

`/register` endpoint သည် checkout/မှတ်ပုံတင်ခြင်း လုပ်ငန်းစဉ်တစ်ခုလုံးကို ပံ့ပိုးပေးသည်-

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

**Response (ပြန်ရမည့်အချက်အလက်):**
```json
{
    "customer": { ... },
    "membership": { ... },
    "payment": { ... },
    "site": { "id": 123 }
}
```

## Error Responses (အမှားအကြောင်းပြန်မှုများ)

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

## Pagination နှင့် Filtering (စာမျက်နှာခွဲခြင်းနှင့် စစ်ထုတ်ခြင်း)

**Query Parameters (မေးခွန်းအချက်များ):**
```http
GET /wu/v2/customers?per_page=20&page=2&search=john&status=active
```

အသုံးများသော parameters များ-
- `per_page` - စာမျက်နှာတစ်ခုစီတွင် ပါဝင်မည့် ပစ္စည်းအရေအတွက် (default: 20, အများဆုံး: 100)
- `page` - စာမျက်နှာနံပါတ်
- `search` - ရှာဖွေလိုသည့် စကားလုံး
- `orderby` - စီစဉ်လိုသည့် field
- `order` - စီစဉ်သည့် ဦးတည်ချက် (asc/desc)
- `status` - အခြေအနေအလိုက် စစ်ထုတ်ခြင်း
- `date_created` - ရက်စွဲအကွာအဝေးအလိုက် စစ်ထုတ်ခြင်း
