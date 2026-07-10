---
title: Nêrîna giştî ya REST API
sidebar_position: 1
_i18n_hash: cabcc173f6a77e5de94e39fff19bc2fa
---
# Referansa REST API {#rest-api-reference}

## Veavakirina Bingehîn {#base-configuration}

**URL-a Bingehîn:** `{site_url}/wp-json/wu/v2/`
**Piştrastkirin:** API Key & Secret (HTTP Basic Auth an Parametreyên URL)

## Piştrastkirin {#authentication}

### API Çalak Bike {#enable-api}
```php
// Enable API in Ultimate Multisite settings or programmatically
wu_save_setting('enable_api', true);
```

### Agahiyên API Bistîne {#get-api-credentials}
```php
$api_key = wu_get_setting('api_key');
$api_secret = wu_get_setting('api_secret');
```

### Rêbazên Piştrastkirinê {#authentication-methods}

**HTTP Basic Auth (Tê Pêşniyarkirin):**
```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

**Parametreyên URL:**
```bash
curl "https://yoursite.com/wp-json/wu/v2/customers?api_key=your_key&api_secret=your_secret"
```

## Xalên Dawî yên Bingehîn {#core-endpoints}

### 1. API-ya Xerîdaran {#1-customers-api}

**Rêya Bingehîn:** `/customers`

**Hemû Xerîdaran Bistîne**
```http
GET /wu/v2/customers
```

**Xerîdarek Tenê Bistîne**
```http
GET /wu/v2/customers/{id}
```

**Xerîdar Çêbike**
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

**Xerîdar Nû Bike**
```http
PUT /wu/v2/customers/{id}
Content-Type: application/json

{
    "vip": true,
    "extra_information": "VIP customer notes"
}
```

**Xerîdar Jê Bibe**
```http
DELETE /wu/v2/customers/{id}
```

### 2. API-ya Malperan {#2-sites-api}

**Rêya Bingehîn:** `/sites`

**Malper Çêbike**
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

### 3. API-ya Endamtiyan {#3-memberships-api}

**Rêya Bingehîn:** `/memberships`

**Endamtî Çêbike**
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

### 4. API-ya Berheman {#4-products-api}

**Rêya Bingehîn:** `/products`

**Hemû Berheman Bistîne**
```http
GET /wu/v2/products
```

### 5. API-ya Peredanê {#5-payments-api}

**Rêya Bingehîn:** `/payments`

**Peredan Çêbike**
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

### 6. API-ya Domênan {#6-domains-api}

**Rêya Bingehîn:** `/domains`

**Domên Girê Bide**
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

## Xala Dawî ya Tomarkirinê {#registration-endpoint}

Xala dawî ya `/register` herikîna temam a checkout/tomarkirinê peyda dike:

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

**Bersiv:**
```json
{
    "customer": { ... },
    "membership": { ... },
    "payment": { ... },
    "site": { "id": 123 }
}
```

## Xalên Dawî yên Kirêdarên Serbixwe {#sovereign-tenant-endpoints}

Ultimate Multisite: Multi-Tenancy 1.2.0 ji bo entegrasyonên ku kirêdarên veqetandî amade dikin, dinêrin an piştrast dikin, girtina REST a kirêdarên serbixwe zêde dike.

Bargeha daxwazê ya rast li gorî şiyana host a çalak ve girêdayî ye, lê entegrasyon divê van komên xalên dawî hêvî bikin:

```http
POST /wu/v2/tenants/{site_id}/bootstrap
GET /wu/v2/tenants/{site_id}/migration-status
POST /wu/v2/tenants/{site_id}/verify
DELETE /wu/v2/tenants/{site_id}
```

Xala dawî ya bootstrap bi kar bîne da ku tomara kirêdar, danegir, pergala pelan û rewşa rêkirinê amade bikî. Berî guhertina trafîka hilberînê, xalên dawî yên rewşa koçkirinê û piştrastkirinê bi kar bîne. Ji bo hilweşandina serbixwe xala dawî ya jêbirinê bi kar bîne, da ku agahiyên danegirê bi herikîna paqijkirina addon werin rakirin.

Bersivên asayî yên rewşa koçkirinê ev in:

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

`ready: false` wek astengiyeke berî destpêkirinê bihesibîne. Hûrgiliyên piştrastkirinê kontrol bike, girêdana host a danegirê, rêz, amadekirina bikarhêner an pirsgirêka rêkirinê rast bike, paşê dîsa piştrastkirinê biceribîne.

## Bersivên Çewtiyan {#error-responses}

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

## Rûpelkirin û Parzûnkirin {#pagination-and-filtering}

**Parametreyên Lêpirsînê:**
```http
GET /wu/v2/customers?per_page=20&page=2&search=john&status=active
```

Parametreyên hevpar:
- `per_page` - Hêmanên ji bo her rûpelê (standard: 20, herî zêde: 100)
- `page` - Hejmara rûpelê
- `search` - Peyva lêgerînê
- `orderby` - Qada rêzkirinê
- `order` - Aliyê rêzkirinê (asc/desc)
- `status` - Li gorî rewşê parzûn bike
- `date_created` - Li gorî navbera dîrokê parzûn bike
