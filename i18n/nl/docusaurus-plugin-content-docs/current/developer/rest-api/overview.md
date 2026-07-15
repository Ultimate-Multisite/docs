---
title: REST API-overzicht
sidebar_position: 1
_i18n_hash: cabcc173f6a77e5de94e39fff19bc2fa
---
# REST API-referentie

## Basisconfiguratie {#base-configuration}

**Basis-URL:** `{site_url}/wp-json/wu/v2/`
**Authenticatie:** API-sleutel en Secret (HTTP Basic Auth of URL-parameters)

## Authenticatie {#authentication}

### API inschakelen {#enable-api}
```php
// Enable API in Ultimate Multisite settings or programmatically
wu_save_setting('enable_api', true);
```

### API-gegevens ophalen {#get-api-credentials}
```php
$api_key = wu_get_setting('api_key');
$api_secret = wu_get_setting('api_secret');
```

### Authenticatiemethoden {#authentication-methods}

**HTTP Basic Auth (aanbevolen):**
```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

**URL-parameters:**
```bash
curl "https://yoursite.com/wp-json/wu/v2/customers?api_key=your_key&api_secret=your_secret"
```

## Kern-eindpunten {#core-endpoints}

### 1. Klanten-API {#1-customers-api}

**Basisroute:** `/customers`

**Alle klanten ophalen**
```http
GET /wu/v2/customers
```

**Eén klant ophalen**
```http
GET /wu/v2/customers/{id}
```

**Klant aanmaken**
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

**Klant bijwerken**
```http
PUT /wu/v2/customers/{id}
Content-Type: application/json

{
    "vip": true,
    "extra_information": "VIP customer notes"
}
```

**Klant verwijderen**
```http
DELETE /wu/v2/customers/{id}
```

### 2. Websites-API {#2-sites-api}

**Basisroute:** `/sites`

**Website aanmaken**
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

### 3. Lidmaatschappen-API {#3-memberships-api}

**Basisroute:** `/memberships`

**Lidmaatschap aanmaken**
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

### 4. Producten-API {#4-products-api}

**Basisroute:** `/products`

**Alle producten ophalen**
```http
GET /wu/v2/products
```

### 5. Betalingen-API {#5-payments-api}

**Basisroute:** `/payments`

**Betaling aanmaken**
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

### 6. Domeinen-API {#6-domains-api}

**Basisroute:** `/domains`

**Domein koppelen**
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

## Registratie-eindpunt {#registration-endpoint}

Het `/register`-eindpunt biedt een volledige afreken-/registratiestroom:

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

**Reactie:**
```json
{
    "customer": { ... },
    "membership": { ... },
    "payment": { ... },
    "site": { "id": 123 }
}
```

## Soevereine tenant-eindpunten {#sovereign-tenant-endpoints}

Ultimate Multisite: Multi-Tenancy 1.2.0 voegt soevereine tenant-REST-dekking toe voor integraties die geïsoleerde tenants inrichten, inspecteren of verifiëren.

De exacte request-payload hangt af van de ingeschakelde hostmogelijkheid, maar integraties moeten rekening houden met deze eindpuntgroepen:

```http
POST /wu/v2/tenants/{site_id}/bootstrap
GET /wu/v2/tenants/{site_id}/migration-status
POST /wu/v2/tenants/{site_id}/verify
DELETE /wu/v2/tenants/{site_id}
```

Gebruik het bootstrap-eindpunt om het tenantregister, de database, het bestandssysteem en de routingstatus voor te bereiden. Gebruik de migratiestatus- en verificatie-eindpunten voordat je productieverkeer omschakelt. Gebruik het verwijderingseindpunt voor soevereine teardown, zodat databasegegevens worden verwijderd via de opschoonflow van de add-on.

Typische reacties voor migratiestatus omvatten:

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

Behandel `ready: false` als een blokkade vóór de lancering. Controleer de verificatiedetails, los het probleem met de database-hostbinding, wachtrij, gebruikersprovisioning of routing op en probeer de verificatie vervolgens opnieuw.

## Foutreacties {#error-responses}

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

**Queryparameters:**
```http
GET /wu/v2/customers?per_page=20&page=2&search=john&status=active
```

Veelgebruikte parameters:
- `per_page` - Items per pagina (standaard: 20, max: 100)
- `page` - Paginanummer
- `search` - Zoekterm
- `orderby` - Sorteerveld
- `order` - Sorteerrichting (asc/desc)
- `status` - Filteren op status
- `date_created` - Filteren op datumbereik
