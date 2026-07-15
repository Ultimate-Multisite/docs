---
title: REST API ikuspegi orokorra
sidebar_position: 1
_i18n_hash: cabcc173f6a77e5de94e39fff19bc2fa
---
# REST API erreferentzia

## Oinarrizko konfigurazioa {#base-configuration}

**Oinarrizko URL:** `{site_url}/wp-json/wu/v2/`
**Autentifikazioa:** API gakoa eta sekretua (HTTP Basic Auth edo URL parametroak)

## Autentifikazioa {#authentication}

### Gaitu APIa {#enable-api}
```php
// Enable API in Ultimate Multisite settings or programmatically
wu_save_setting('enable_api', true);
```

### Lortu API kredentzialak {#get-api-credentials}
```php
$api_key = wu_get_setting('api_key');
$api_secret = wu_get_setting('api_secret');
```

### Autentifikazio metodoak {#authentication-methods}

**HTTP Basic Auth (gomendatua):**
```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

**URL parametroak:**
```bash
curl "https://yoursite.com/wp-json/wu/v2/customers?api_key=your_key&api_secret=your_secret"
```

## Oinarrizko amaiera-puntuak {#core-endpoints}

### 1. Bezeroen APIa {#1-customers-api}

**Oinarrizko ibilbidea:** `/customers`

**Lortu bezero guztiak**
```http
GET /wu/v2/customers
```

**Lortu bezero bakarra**
```http
GET /wu/v2/customers/{id}
```

**Sortu bezeroa**
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

**Eguneratu bezeroa**
```http
PUT /wu/v2/customers/{id}
Content-Type: application/json

{
    "vip": true,
    "extra_information": "VIP customer notes"
}
```

**Ezabatu bezeroa**
```http
DELETE /wu/v2/customers/{id}
```

### 2. Guneen APIa {#2-sites-api}

**Oinarrizko ibilbidea:** `/sites`

**Sortu gunea**
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

### 3. Kidetzen APIa {#3-memberships-api}

**Oinarrizko ibilbidea:** `/memberships`

**Sortu kidetza**
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

### 4. Produktuen APIa {#4-products-api}

**Oinarrizko ibilbidea:** `/products`

**Lortu produktu guztiak**
```http
GET /wu/v2/products
```

### 5. Ordainketen APIa {#5-payments-api}

**Oinarrizko ibilbidea:** `/payments`

**Sortu ordainketa**
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

### 6. Domeinuen APIa {#6-domains-api}

**Oinarrizko ibilbidea:** `/domains`

**Mapatu domeinua**
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

## Erregistro amaiera-puntua {#registration-endpoint}

`/register` amaiera-puntuak checkout/erregistro fluxu osoa eskaintzen du:

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

**Erantzuna:**
```json
{
    "customer": { ... },
    "membership": { ... },
    "payment": { ... },
    "site": { "id": 123 }
}
```

## Tenant subiranoen amaiera-puntuak {#sovereign-tenant-endpoints}

Ultimate Multisite: Multi-Tenancy 1.2.0 bertsioak tenant subiranoentzako REST estaldura gehitzen du, tenant isolatuak hornitu, ikuskatu edo egiaztatzen dituzten integrazioetarako.

Eskaeraren payload zehatza gaitutako ostalari-gaitasunaren araberakoa da, baina integrazioek amaiera-puntu talde hauek espero beharko lituzkete:

```http
POST /wu/v2/tenants/{site_id}/bootstrap
GET /wu/v2/tenants/{site_id}/migration-status
POST /wu/v2/tenants/{site_id}/verify
DELETE /wu/v2/tenants/{site_id}
```

Erabili bootstrap amaiera-puntua tenant erregistroa, datu-basea, fitxategi-sistema eta bideratze egoera prestatzeko. Erabili migrazio-egoeraren eta egiaztapenaren amaiera-puntuak ekoizpen-trafikoa aldatu aurretik. Erabili ezabatze amaiera-puntua desmuntatze subiranorako, datu-base kredentzialak addon garbiketa-fluxuaren bidez kendu daitezen.

Migrazio-egoeraren ohiko erantzunek honako hau jasotzen dute:

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

Tratatu `ready: false` abiaraztearen aurreko blokeatzaile gisa. Egiaztatu egiaztapenaren xehetasunak, konpondu datu-base ostalariaren lotura, ilara, erabiltzaileen hornikuntza edo bideratze arazoa, eta saiatu berriro egiaztatzen.

## Errore erantzunak {#error-responses}

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

## Orriaketa eta iragazketa {#pagination-and-filtering}

**Kontsulta parametroak:**
```http
GET /wu/v2/customers?per_page=20&page=2&search=john&status=active
```

Parametro arruntak:
- `per_page` - Orriko elementuak (lehenetsia: 20, gehienez: 100)
- `page` - Orri zenbakia
- `search` - Bilaketa terminoa
- `orderby` - Ordenatzeko eremua
- `order` - Ordenatzeko norabidea (asc/desc)
- `status` - Iragazi egoeraren arabera
- `date_created` - Iragazi data-tartearen arabera
