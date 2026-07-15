---
title: REST API-oorsig
sidebar_position: 1
_i18n_hash: cabcc173f6a77e5de94e39fff19bc2fa
---
# REST API-verwysing

## Basiskonfigurasie {#base-configuration}

**Basis-URL:** `{site_url}/wp-json/wu/v2/`
**Stawing:** API-sleutel en -geheim (HTTP Basic Auth of URL-parameters)

## Stawing {#authentication}

### Aktiveer API {#enable-api}
```php
// Enable API in Ultimate Multisite settings or programmatically
wu_save_setting('enable_api', true);
```

### Kry API-geloofsbriewe {#get-api-credentials}
```php
$api_key = wu_get_setting('api_key');
$api_secret = wu_get_setting('api_secret');
```

### Stawingsmetodes {#authentication-methods}

**HTTP Basic Auth (Aanbeveel):**
```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

**URL-parameters:**
```bash
curl "https://yoursite.com/wp-json/wu/v2/customers?api_key=your_key&api_secret=your_secret"
```

## Kern-eindpunte {#core-endpoints}

### 1. Kliënte-API {#1-customers-api}

**Basisroete:** `/customers`

**Kry alle kliënte**
```http
GET /wu/v2/customers
```

**Kry enkele kliënt**
```http
GET /wu/v2/customers/{id}
```

**Skep kliënt**
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

**Dateer kliënt op**
```http
PUT /wu/v2/customers/{id}
Content-Type: application/json

{
    "vip": true,
    "extra_information": "VIP customer notes"
}
```

**Vee kliënt uit**
```http
DELETE /wu/v2/customers/{id}
```

### 2. Sites-API {#2-sites-api}

**Basisroete:** `/sites`

**Skep site**
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

### 3. Lidmaatskappe-API {#3-memberships-api}

**Basisroete:** `/memberships`

**Skep lidmaatskap**
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

### 4. Produkte-API {#4-products-api}

**Basisroete:** `/products`

**Kry alle produkte**
```http
GET /wu/v2/products
```

### 5. Betalings-API {#5-payments-api}

**Basisroete:** `/payments`

**Skep betaling**
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

### 6. Domeine-API {#6-domains-api}

**Basisroete:** `/domains`

**Karteer domein**
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

## Registrasie-eindpunt {#registration-endpoint}

Die `/register`-eindpunt bied ’n volledige afreken-/registrasievloei:

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

**Antwoord:**
```json
{
    "customer": { ... },
    "membership": { ... },
    "payment": { ... },
    "site": { "id": 123 }
}
```

## Soewereine tenant-eindpunte {#sovereign-tenant-endpoints}

Ultimate Multisite: Multi-Tenancy 1.2.0 voeg soewereine tenant REST-dekking by vir integrasies wat geïsoleerde tenants voorsien, inspekteer of verifieer.

Die presiese versoekladingsinhoud hang af van die geaktiveerde gasheervermoë, maar integrasies behoort hierdie eindpuntgroepe te verwag:

```http
POST /wu/v2/tenants/{site_id}/bootstrap
GET /wu/v2/tenants/{site_id}/migration-status
POST /wu/v2/tenants/{site_id}/verify
DELETE /wu/v2/tenants/{site_id}
```

Gebruik die bootstrap-eindpunt om die tenant-register, databasis, lêerstelsel en roeteringstoestand voor te berei. Gebruik migrasiestatus- en verifikasie-eindpunte voordat produksieverkeer oorgeskakel word. Gebruik die uitvee-eindpunt vir soewereine aftakeling sodat databasisgeloofsbriewe deur die byvoeging-opruimvloei verwyder word.

Tipiese migrasiestatusantwoorde sluit in:

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

Behandel `ready: false` as ’n voorbekendstelling-blokkeerder. Gaan die verifikasiebesonderhede na, stel die databasisgasheerbinding, tou, gebruikervoorsiening of roeteringsprobleem reg, en probeer dan weer verifieer.

## Foutantwoorde {#error-responses}

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

## Paginering en filtering {#pagination-and-filtering}

**Navraagparameters:**
```http
GET /wu/v2/customers?per_page=20&page=2&search=john&status=active
```

Algemene parameters:
- `per_page` - Items per bladsy (verstek: 20, maksimum: 100)
- `page` - Bladsynommer
- `search` - Soekterm
- `orderby` - Sorteerveld
- `order` - Sorteerrigting (asc/desc)
- `status` - Filter volgens status
- `date_created` - Filter volgens datumreeks
