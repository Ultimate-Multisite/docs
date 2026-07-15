---
title: Përmbledhje e REST API
sidebar_position: 1
_i18n_hash: cabcc173f6a77e5de94e39fff19bc2fa
---
# Referenca e REST API

## Konfigurimi bazë {#base-configuration}

**URL bazë:** `{site_url}/wp-json/wu/v2/`
**Autentikimi:** Çelësi API dhe sekreti (HTTP Basic Auth ose parametrat URL)

## Autentikimi {#authentication}

### Aktivizo API {#enable-api}
```php
// Enable API in Ultimate Multisite settings or programmatically
wu_save_setting('enable_api', true);
```

### Merr kredencialet API {#get-api-credentials}
```php
$api_key = wu_get_setting('api_key');
$api_secret = wu_get_setting('api_secret');
```

### Metodat e autentikimit {#authentication-methods}

**HTTP Basic Auth (Rekomandohet):**
```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

**Parametrat URL:**
```bash
curl "https://yoursite.com/wp-json/wu/v2/customers?api_key=your_key&api_secret=your_secret"
```

## Pikat fundore kryesore {#core-endpoints}

### 1. API e klientëve {#1-customers-api}

**Rruga bazë:** `/customers`

**Merr të gjithë klientët**
```http
GET /wu/v2/customers
```

**Merr një klient të vetëm**
```http
GET /wu/v2/customers/{id}
```

**Krijo klient**
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

**Përditëso klient**
```http
PUT /wu/v2/customers/{id}
Content-Type: application/json

{
    "vip": true,
    "extra_information": "VIP customer notes"
}
```

**Fshi klient**
```http
DELETE /wu/v2/customers/{id}
```

### 2. API e faqeve {#2-sites-api}

**Rruga bazë:** `/sites`

**Krijo faqe**
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

### 3. API e anëtarësimeve {#3-memberships-api}

**Rruga bazë:** `/memberships`

**Krijo anëtarësim**
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

### 4. API e produkteve {#4-products-api}

**Rruga bazë:** `/products`

**Merr të gjitha produktet**
```http
GET /wu/v2/products
```

### 5. API e pagesave {#5-payments-api}

**Rruga bazë:** `/payments`

**Krijo pagesë**
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

### 6. API e domeneve {#6-domains-api}

**Rruga bazë:** `/domains`

**Mapo domenin**
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

## Pika fundore e regjistrimit {#registration-endpoint}

Pika fundore `/register` ofron një rrjedhë të plotë pagese/regjistrimi:

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

**Përgjigja:**
```json
{
    "customer": { ... },
    "membership": { ... },
    "payment": { ... },
    "site": { "id": 123 }
}
```

## Pikat fundore të tenantëve sovranë {#sovereign-tenant-endpoints}

Ultimate Multisite: Multi-Tenancy 1.2.0 shton mbulim REST për tenantë sovranë për integrime që sigurojnë, inspektojnë ose verifikojnë tenantë të izoluar.

Ngarkesa e saktë e kërkesës varet nga aftësia e aktivizuar e host-it, por integrimet duhet të presin këto grupe pikash fundore:

```http
POST /wu/v2/tenants/{site_id}/bootstrap
GET /wu/v2/tenants/{site_id}/migration-status
POST /wu/v2/tenants/{site_id}/verify
DELETE /wu/v2/tenants/{site_id}
```

Përdorni pikën fundore të bootstrap-it për të përgatitur regjistrin e tenantit, bazën e të dhënave, sistemin e skedarëve dhe gjendjen e rrugëzimit. Përdorni pikat fundore të statusit të migrimit dhe verifikimit përpara se të kaloni trafikun e prodhimit. Përdorni pikën fundore të fshirjes për çmontimin sovran, në mënyrë që kredencialet e bazës së të dhënave të hiqen përmes rrjedhës së pastrimit të addon-it.

Përgjigjet tipike të statusit të migrimit përfshijnë:

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

Trajtojeni `ready: false` si bllokues para nisjes. Kontrolloni detajet e verifikimit, rregulloni lidhjen e host-it të bazës së të dhënave, radhën, sigurimin e përdoruesit ose problemin e rrugëzimit, pastaj riprovoni verifikimin.

## Përgjigjet e gabimeve {#error-responses}

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

## Faqosja dhe filtrimi {#pagination-and-filtering}

**Parametrat e kërkesës:**
```http
GET /wu/v2/customers?per_page=20&page=2&search=john&status=active
```

Parametrat e zakonshëm:
- `per_page` - Artikuj për faqe (parazgjedhja: 20, maksimumi: 100)
- `page` - Numri i faqes
- `search` - Termi i kërkimit
- `orderby` - Fusha e renditjes
- `order` - Drejtimi i renditjes (asc/desc)
- `status` - Filtro sipas statusit
- `date_created` - Filtro sipas intervalit të datave
