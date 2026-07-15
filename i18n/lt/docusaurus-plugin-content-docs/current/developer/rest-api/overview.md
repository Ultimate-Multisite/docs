---
title: REST API apžvalga
sidebar_position: 1
_i18n_hash: cabcc173f6a77e5de94e39fff19bc2fa
---
# REST API nuoroda

## Pagrindinė konfigūracija {#base-configuration}

**Bazinis URL:** `{site_url}/wp-json/wu/v2/`
**Autentifikavimas:** API raktas ir slaptasis raktas (HTTP Basic Auth arba URL parametrai)

## Autentifikavimas {#authentication}

### Įjungti API {#enable-api}
```php
// Enable API in Ultimate Multisite settings or programmatically
wu_save_setting('enable_api', true);
```

### Gauti API kredencialus {#get-api-credentials}
```php
$api_key = wu_get_setting('api_key');
$api_secret = wu_get_setting('api_secret');
```

### Autentifikavimo metodai {#authentication-methods}

**HTTP Basic Auth (rekomenduojama):**
```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

**URL parametrai:**
```bash
curl "https://yoursite.com/wp-json/wu/v2/customers?api_key=your_key&api_secret=your_secret"
```

## Pagrindiniai galutiniai taškai {#core-endpoints}

### 1. Klientų API {#1-customers-api}

**Bazinis maršrutas:** `/customers`

**Gauti visus klientus**
```http
GET /wu/v2/customers
```

**Gauti vieną klientą**
```http
GET /wu/v2/customers/{id}
```

**Sukurti klientą**
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

**Atnaujinti klientą**
```http
PUT /wu/v2/customers/{id}
Content-Type: application/json

{
    "vip": true,
    "extra_information": "VIP customer notes"
}
```

**Ištrinti klientą**
```http
DELETE /wu/v2/customers/{id}
```

### 2. Svetainių API {#2-sites-api}

**Bazinis maršrutas:** `/sites`

**Sukurti svetainę**
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

### 3. Narystės API {#3-memberships-api}

**Bazinis maršrutas:** `/memberships`

**Sukurti narystę**
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

### 4. Produktų API {#4-products-api}

**Bazinis maršrutas:** `/products`

**Gauti visus produktus**
```http
GET /wu/v2/products
```

### 5. Mokėjimų API {#5-payments-api}

**Bazinis maršrutas:** `/payments`

**Sukurti mokėjimą**
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

### 6. Domenų API {#6-domains-api}

**Bazinis maršrutas:** `/domains`

**Susieti domeną**
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

## Registracijos galutinis taškas {#registration-endpoint}

Galutinis taškas `/register` suteikia visą atsiskaitymo / registracijos eigą:

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

**Atsakymas:**
```json
{
    "customer": { ... },
    "membership": { ... },
    "payment": { ... },
    "site": { "id": 123 }
}
```

## Suvereniųjų nuomininkų galutiniai taškai {#sovereign-tenant-endpoints}

Ultimate Multisite: Multi-Tenancy 1.2.0 prideda suvereniųjų nuomininkų REST aprėptį integracijoms, kurios parengia, tikrina arba patvirtina izoliuotus nuomininkus.

Tikslus užklausos turinys priklauso nuo įjungtos prieglobos galimybės, tačiau integracijos turėtų tikėtis šių galutinių taškų grupių:

```http
POST /wu/v2/tenants/{site_id}/bootstrap
GET /wu/v2/tenants/{site_id}/migration-status
POST /wu/v2/tenants/{site_id}/verify
DELETE /wu/v2/tenants/{site_id}
```

Naudokite bootstrap galutinį tašką nuomininko registrui, duomenų bazei, failų sistemai ir maršrutizavimo būsenai paruošti. Prieš perjungdami produkcinį srautą, naudokite migracijos būsenos ir patikrinimo galutinius taškus. Naudokite ištrynimo galutinį tašką suvereniajam pašalinimui, kad duomenų bazės kredencialai būtų pašalinti per priedo valymo eigą.

Tipiniai migracijos būsenos atsakymai apima:

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

Laikykite `ready: false` paleidimą blokuojančia kliūtimi. Patikrinkite patikrinimo informaciją, ištaisykite duomenų bazės host susiejimą, eilę, naudotojų parengimą arba maršrutizavimo problemą, tada pakartokite patikrinimą.

## Klaidų atsakymai {#error-responses}

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

## Puslapiavimas ir filtravimas {#pagination-and-filtering}

**Užklausos parametrai:**
```http
GET /wu/v2/customers?per_page=20&page=2&search=john&status=active
```

Dažni parametrai:
- `per_page` - Elementai puslapyje (numatyta: 20, maks.: 100)
- `page` - Puslapio numeris
- `search` - Paieškos terminas
- `orderby` - Rikiavimo laukas
- `order` - Rikiavimo kryptis (asc/desc)
- `status` - Filtruoti pagal būseną
- `date_created` - Filtruoti pagal datų intervalą
