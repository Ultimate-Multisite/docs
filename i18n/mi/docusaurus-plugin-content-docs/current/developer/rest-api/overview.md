---
title: Tirohanga Whānui ki te REST API
sidebar_position: 1
_i18n_hash: cabcc173f6a77e5de94e39fff19bc2fa
---
# Tohutoro REST API

## Whirihoranga Taketake

**URL Taketake:** `{site_url}/wp-json/wu/v2/`
**Whakamotuhēhē:** Kī API me te Mea Huna (HTTP Basic Auth, Tawhā URL rānei)

## Whakamotuhēhē

### Whakahohe API
```php
// Enable API in Ultimate Multisite settings or programmatically
wu_save_setting('enable_api', true);
```

### Tiki Taipitopito Tuakiri API
```php
$api_key = wu_get_setting('api_key');
$api_secret = wu_get_setting('api_secret');
```

### Ngā Tikanga Whakamotuhēhē

**HTTP Basic Auth (E Tūtohutia Ana):**
```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

**Ngā Tawhā URL:**
```bash
curl "https://yoursite.com/wp-json/wu/v2/customers?api_key=your_key&api_secret=your_secret"
```

## Ngā Wāhi Mutunga Matua

### 1. API Kiritaki

**Ara Taketake:** `/customers`

**Tiki Kiritaki Katoa**
```http
GET /wu/v2/customers
```

**Tiki Kiritaki Kotahi**
```http
GET /wu/v2/customers/{id}
```

**Waihanga Kiritaki**
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

**Whakahōu Kiritaki**
```http
PUT /wu/v2/customers/{id}
Content-Type: application/json

{
    "vip": true,
    "extra_information": "VIP customer notes"
}
```

**Muku Kiritaki**
```http
DELETE /wu/v2/customers/{id}
```

### 2. API Pae

**Ara Taketake:** `/sites`

**Waihanga Pae**
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

### 3. API Mema

**Ara Taketake:** `/memberships`

**Waihanga Mema**
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

### 4. API Hua

**Ara Taketake:** `/products`

**Tiki Hua Katoa**
```http
GET /wu/v2/products
```

### 5. API Utu

**Ara Taketake:** `/payments`

**Waihanga Utu**
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

### 6. API Rohe**

**Ara Taketake:** `/domains`

**Mahere Rohe**
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

## Wāhi Mutunga Rēhitatanga

Ka whakarato te wāhi mutunga `/register` i tētahi rere checkout/rēhitatanga oti:

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

**Urupare:**
```json
{
    "customer": { ... },
    "membership": { ... },
    "payment": { ... },
    "site": { "id": 123 }
}
```

## Ngā Wāhi Mutunga Kairīhi Motuhake

Ka tāpiri a Ultimate Multisite: Noho-kairīhi Maha 1.2.0 i te kapinga REST mō ngā kairīhi motuhake mō ngā whakaurunga e whakarato ana, e tirotiro ana, e manatoko ana rānei i ngā kairīhi kua wehe.

Ka whakawhirinaki te kawenga tono tōtika ki te āheinga kaihautū kua whakahohea, engari me tūmanako ngā whakaurunga ki ēnei rōpū wāhi mutunga:

```http
POST /wu/v2/tenants/{site_id}/bootstrap
GET /wu/v2/tenants/{site_id}/migration-status
POST /wu/v2/tenants/{site_id}/verify
DELETE /wu/v2/tenants/{site_id}
```

Whakamahia te wāhi mutunga bootstrap hei whakarite i te rēhita kairīhi, te pātengi raraunga, te pūnaha kōnae, me te tūāhua ararere. Whakamahia ngā wāhi mutunga tūnga hekenga me te manatoko i mua i te whakawhiti i ngā waka whakanao. Whakamahia te wāhi mutunga mukunga mō te wetewete motuhake kia tangohia ai ngā taipitopito tuakiri pātengi raraunga mā te rere whakapai addon.

Kei roto i ngā urupare tūnga hekenga angamaheni:

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

Me whakaarohia `ready: false` hei aukati i mua i te whakarewatanga. Tirohia ngā taipitopito manatoko, whakatikahia te here kaihautū pātengi raraunga, te rārangi, te whakarato kaiwhakamahi, te take ararere rānei, kātahi ka whakamātau anō i te manatoko.

## Ngā Urupare Hapa

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

## Whakawārangi Whārangi me te Tātari

**Ngā Tawhā Uiui:**
```http
GET /wu/v2/customers?per_page=20&page=2&search=john&status=active
```

Ngā tawhā noa:
- `per_page` - Ngā tūemi ia whārangi (taunoa: 20, mōrahi: 100)
- `page` - Tau whārangi
- `search` - Kupu rapu
- `orderby` - Āpure kōmaka
- `order` - Ahunga kōmaka (asc/desc)
- `status` - Tātari mā te tūnga
- `date_created` - Tātari mā te awhe rā
