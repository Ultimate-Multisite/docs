---
title: REST API pārskats
sidebar_position: 1
_i18n_hash: cabcc173f6a77e5de94e39fff19bc2fa
---
# REST API atsauce

## Pamata konfigurācija {#base-configuration}

**Pamata URL:** `{site_url}/wp-json/wu/v2/`
**Autentifikācija:** API atslēga un noslēpums (HTTP Basic Auth vai URL parametri)

## Autentifikācija {#authentication}

### Iespējot API {#enable-api}
```php
// Enable API in Ultimate Multisite settings or programmatically
wu_save_setting('enable_api', true);
```

### Iegūt API akreditācijas datus {#get-api-credentials}
```php
$api_key = wu_get_setting('api_key');
$api_secret = wu_get_setting('api_secret');
```

### Autentifikācijas metodes {#authentication-methods}

**HTTP Basic Auth (ieteicams):**
```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

**URL parametri:**
```bash
curl "https://yoursite.com/wp-json/wu/v2/customers?api_key=your_key&api_secret=your_secret"
```

## Galvenie galapunkti {#core-endpoints}

### 1. Klientu API {#1-customers-api}

**Pamata maršruts:** `/customers`

**Iegūt visus klientus**
```http
GET /wu/v2/customers
```

**Iegūt vienu klientu**
```http
GET /wu/v2/customers/{id}
```

**Izveidot klientu**
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

**Atjaunināt klientu**
```http
PUT /wu/v2/customers/{id}
Content-Type: application/json

{
    "vip": true,
    "extra_information": "VIP customer notes"
}
```

**Dzēst klientu**
```http
DELETE /wu/v2/customers/{id}
```

### 2. Vietņu API {#2-sites-api}

**Pamata maršruts:** `/sites`

**Izveidot vietni**
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

### 3. Dalību API {#3-memberships-api}

**Pamata maršruts:** `/memberships`

**Izveidot dalību**
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

### 4. Produktu API {#4-products-api}

**Pamata maršruts:** `/products`

**Iegūt visus produktus**
```http
GET /wu/v2/products
```

### 5. Maksājumu API {#5-payments-api}

**Pamata maršruts:** `/payments`

**Izveidot maksājumu**
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

### 6. Domēnu API {#6-domains-api}

**Pamata maršruts:** `/domains`

**Kartēt domēnu**
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

## Reģistrācijas galapunkts {#registration-endpoint}

Galapunkts `/register` nodrošina pilnu checkout/reģistrācijas plūsmu:

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

**Atbilde:**
```json
{
    "customer": { ... },
    "membership": { ... },
    "payment": { ... },
    "site": { "id": 123 }
}
```

## Suverēno tenantu galapunkti {#sovereign-tenant-endpoints}

Ultimate Multisite: Multi-Tenancy 1.2.0 pievieno suverēno tenantu REST pārklājumu integrācijām, kas izveido, pārbauda vai verificē izolētus tenantus.

Precīza pieprasījuma slodze ir atkarīga no iespējotās resursdatora iespējas, bet integrācijām jārēķinās ar šādām galapunktu grupām:

```http
POST /wu/v2/tenants/{site_id}/bootstrap
GET /wu/v2/tenants/{site_id}/migration-status
POST /wu/v2/tenants/{site_id}/verify
DELETE /wu/v2/tenants/{site_id}
```

Izmantojiet bootstrap galapunktu, lai sagatavotu tenantu reģistru, datubāzi, failu sistēmu un maršrutēšanas stāvokli. Izmantojiet migrācijas statusa un verifikācijas galapunktus pirms ražošanas datplūsmas pārslēgšanas. Izmantojiet dzēšanas galapunktu suverēnai noņemšanai, lai datubāzes akreditācijas dati tiktu noņemti, izmantojot papildinājuma tīrīšanas plūsmu.

Tipiskas migrācijas statusa atbildes ietver:

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

Uztveriet `ready: false` kā pirms palaišanas bloķētāju. Pārbaudiet verifikācijas informāciju, izlabojiet datubāzes resursdatora piesaisti, rindu, lietotāju nodrošināšanu vai maršrutēšanas problēmu, pēc tam atkārtojiet verifikāciju.

## Kļūdu atbildes {#error-responses}

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

## Lapošana un filtrēšana {#pagination-and-filtering}

**Vaicājuma parametri:**
```http
GET /wu/v2/customers?per_page=20&page=2&search=john&status=active
```

Biežākie parametri:
- `per_page` - Vienumi lapā (noklusējums: 20, maks.: 100)
- `page` - Lapas numurs
- `search` - Meklēšanas termins
- `orderby` - Kārtošanas lauks
- `order` - Kārtošanas virziens (asc/desc)
- `status` - Filtrēt pēc statusa
- `date_created` - Filtrēt pēc datumu diapazona
