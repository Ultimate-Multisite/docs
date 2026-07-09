---
title: 'REST API:n yleiskatsaus'
sidebar_position: 1
_i18n_hash: cabcc173f6a77e5de94e39fff19bc2fa
---
# REST API -viite

## Peruskonfiguraatio

**Perus-URL:** `{site_url}/wp-json/wu/v2/`
**Todennus:** API-avain ja salaisuus (HTTP Basic Auth tai URL-parametrit)

## Todennus

### Ota API käyttöön
```php
// Enable API in Ultimate Multisite settings or programmatically
wu_save_setting('enable_api', true);
```

### Hanki API-tunnistetiedot
```php
$api_key = wu_get_setting('api_key');
$api_secret = wu_get_setting('api_secret');
```

### Todennusmenetelmät

**HTTP Basic Auth (suositeltu):**
```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

**URL-parametrit:**
```bash
curl "https://yoursite.com/wp-json/wu/v2/customers?api_key=your_key&api_secret=your_secret"
```

## Ydinpäätepisteet

### 1. Asiakkaiden API

**Perusreitti:** `/customers`

**Hae kaikki asiakkaat**
```http
GET /wu/v2/customers
```

**Hae yksittäinen asiakas**
```http
GET /wu/v2/customers/{id}
```

**Luo asiakas**
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

**Päivitä asiakas**
```http
PUT /wu/v2/customers/{id}
Content-Type: application/json

{
    "vip": true,
    "extra_information": "VIP customer notes"
}
```

**Poista asiakas**
```http
DELETE /wu/v2/customers/{id}
```

### 2. Sivustojen API

**Perusreitti:** `/sites`

**Luo sivusto**
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

### 3. Jäsenyyksien API

**Perusreitti:** `/memberships`

**Luo jäsenyys**
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

### 4. Tuotteiden API

**Perusreitti:** `/products`

**Hae kaikki tuotteet**
```http
GET /wu/v2/products
```

### 5. Maksujen API

**Perusreitti:** `/payments`

**Luo maksu**
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

### 6. Verkkotunnusten API

**Perusreitti:** `/domains`

**Kartoita verkkotunnus**
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

## Rekisteröinnin päätepiste

`/register`-päätepiste tarjoaa täydellisen checkout-/rekisteröintipolun:

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

**Vastaus:**
```json
{
    "customer": { ... },
    "membership": { ... },
    "payment": { ... },
    "site": { "id": 123 }
}
```

## Suvereenien asiakasympäristöjen päätepisteet

Ultimate Multisite: Moniasiakkuus 1.2.0 lisää suvereenien asiakasympäristöjen REST-kattavuuden integraatioille, jotka provisioivat, tarkastavat tai varmistavat eristettyjä asiakasympäristöjä.

Tarkka pyynnön hyötykuorma riippuu käytössä olevasta isännän ominaisuudesta, mutta integraatioiden tulisi odottaa näitä päätepisteryhmiä:

```http
POST /wu/v2/tenants/{site_id}/bootstrap
GET /wu/v2/tenants/{site_id}/migration-status
POST /wu/v2/tenants/{site_id}/verify
DELETE /wu/v2/tenants/{site_id}
```

Käytä bootstrap-päätepistettä asiakasympäristön rekisterin, tietokannan, tiedostojärjestelmän ja reititystilan valmisteluun. Käytä migraation tilan ja varmistuksen päätepisteitä ennen tuotantoliikenteen siirtämistä. Käytä poistopäätepistettä suvereeniin purkuun, jotta tietokannan tunnistetiedot poistetaan lisäosan siivousprosessin kautta.

Tyypilliset migraation tilan vastaukset sisältävät:

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

Käsittele arvoa `ready: false` julkaisua edeltävänä estäjänä. Tarkista varmistuksen tiedot, korjaa tietokannan isäntäsidonta, jono, käyttäjien provisiointi tai reititysongelma ja yritä sitten varmistusta uudelleen.

## Virhevastaukset

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

## Sivutus ja suodatus

**Kyselyparametrit:**
```http
GET /wu/v2/customers?per_page=20&page=2&search=john&status=active
```

Yleiset parametrit:
- `per_page` - Kohteita sivua kohden (oletus: 20, maksimi: 100)
- `page` - Sivunumero
- `search` - Hakutermi
- `orderby` - Lajittelukenttä
- `order` - Lajittelusuunta (asc/desc)
- `status` - Suodata tilan mukaan
- `date_created` - Suodata päivämäärävälin mukaan
