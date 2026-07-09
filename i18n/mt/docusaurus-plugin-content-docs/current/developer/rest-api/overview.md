---
title: Ħarsa ġenerali lejn REST API
sidebar_position: 1
_i18n_hash: cabcc173f6a77e5de94e39fff19bc2fa
---
# Referenza tal-REST API

## Konfigurazzjoni Bażi

**Base URL:** `{site_url}/wp-json/wu/v2/`
**Awtentikazzjoni:** API Key u Secret (HTTP Basic Auth jew Parametri tal-URL)

## Awtentikazzjoni

### Ippermetti l-API
```php
// Enable API in Ultimate Multisite settings or programmatically
wu_save_setting('enable_api', true);
```

### Ikseb il-Kredenzjali tal-API
```php
$api_key = wu_get_setting('api_key');
$api_secret = wu_get_setting('api_secret');
```

### Metodi ta' Awtentikazzjoni

**HTTP Basic Auth (Rakkomandat):**
```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

**Parametri tal-URL:**
```bash
curl "https://yoursite.com/wp-json/wu/v2/customers?api_key=your_key&api_secret=your_secret"
```

## Punti Finali Ewlenin

### 1. API tal-Klijenti

**Rotta Bażi:** `/customers`

**Ikseb il-Klijenti Kollha**
```http
GET /wu/v2/customers
```

**Ikseb Klijent Wieħed**
```http
GET /wu/v2/customers/{id}
```

**Oħloq Klijent**
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

**Aġġorna Klijent**
```http
PUT /wu/v2/customers/{id}
Content-Type: application/json

{
    "vip": true,
    "extra_information": "VIP customer notes"
}
```

**Ħassar Klijent**
```http
DELETE /wu/v2/customers/{id}
```

### 2. API tas-Siti

**Rotta Bażi:** `/sites`

**Oħloq Sit**
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

### 3. API tas-Sħubijiet

**Rotta Bażi:** `/memberships`

**Oħloq Sħubija**
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

### 4. API tal-Prodotti

**Rotta Bażi:** `/products`

**Ikseb il-Prodotti Kollha**
```http
GET /wu/v2/products
```

### 5. API tal-Ħlasijiet

**Rotta Bażi:** `/payments`

**Oħloq Ħlas**
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

### 6. API tad-Dominji

**Rotta Bażi:** `/domains`

**Immappja Dominju**
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

## Punt Finali tar-Reġistrazzjoni

Il-punt finali `/register` jipprovdi proċess sħiħ ta' ħlas/reġistrazzjoni:

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

**Rispons:**
```json
{
    "customer": { ... },
    "membership": { ... },
    "payment": { ... },
    "site": { "id": 123 }
}
```

## Punti Finali tat-Tenant Sovran

Ultimate Multisite: Multi-Tenancy 1.2.0 iżid kopertura REST għal tenant sovran għal integrazzjonijiet li jipproviżjonaw, jispezzjonaw, jew jivverifikaw tenants iżolati.

Il-payload eżatt tat-talba jiddependi fuq il-kapaċità tal-host li tkun attivata, iżda l-integrazzjonijiet għandhom jistennew dawn il-gruppi ta' punti finali:

```http
POST /wu/v2/tenants/{site_id}/bootstrap
GET /wu/v2/tenants/{site_id}/migration-status
POST /wu/v2/tenants/{site_id}/verify
DELETE /wu/v2/tenants/{site_id}
```

Uża l-punt finali bootstrap biex tipprepara r-reġistru tat-tenant, id-database, is-sistema tal-fajls, u l-istat tar-routing. Uża l-punti finali tal-istatus tal-migrazzjoni u tal-verifika qabel taqleb it-traffiku tal-produzzjoni. Uża l-punt finali tat-tħassir għal teardown sovran sabiex il-kredenzjali tad-database jitneħħew permezz tal-fluss tat-tindif tal-addon.

Risposti tipiċi tal-istatus tal-migrazzjoni jinkludu:

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

Ittratta `ready: false` bħala ostaklu qabel it-tnedija. Iċċekkja d-dettalji tal-verifika, irranġa l-irbit tal-host tad-database, il-kju, il-proviżjonament tal-utent, jew il-problema tar-routing, imbagħad erġa' pprova l-verifika.

## Risposti ta' Żball

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

## Paġinazzjoni u Ffiltrar

**Parametri tal-Mistoqsija:**
```http
GET /wu/v2/customers?per_page=20&page=2&search=john&status=active
```

Parametri komuni:
- `per_page` - Oġġetti għal kull paġna (default: 20, massimu: 100)
- `page` - Numru tal-paġna
- `search` - Terminu tat-tfittxija
- `orderby` - Qasam tal-issortjar
- `order` - Direzzjoni tal-issortjar (asc/desc)
- `status` - Iffiltra skont l-istatus
- `date_created` - Iffiltra skont firxa ta' dati
