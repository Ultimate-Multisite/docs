---
title: REST API Overzicht
sidebar_position: 1
_i18n_hash: 4e511d92e0002dff445f45ff05adbeda
---
# REST API Referentie

## Basisconfiguratie

**Basis-URL:** `{site_url}/wp-json/wu/v2/`  
**Authenticatie:** API-sleutel & Geheim (HTTP Basic Auth of URL-parameters)

## Authenticatie

### API inschakelen
```php
// API inschakelen in Ultimate Multisite-instellingen of programmatisch
wu_save_setting('enable_api', true);
```

### API-gegevens ophalen
```php
$api_key = wu_get_setting('api_key');
$api_secret = wu_get_setting('api_secret');
```

### Authenticatiemethoden

**HTTP Basic Auth (Aanbevolen):**
```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

**URL-parameters:**
```bash
curl "https://yoursite.com/wp-json/wu/v2/customers?api_key=your_key&api_secret=your_secret"
```

## Kernpunten

### 1. Klanten API

**Basisroute:** `/customers`

**Alle klanten ophalen**
```http
GET /wu/v2/customers
```

**Enkel klant ophalen**
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

### 2. Sites API

**Basisroute:** `/sites`

**Site aanmaken**
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

### 3. Lidmaatschappen API

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

### 4. Producten API

**Basisroute:** `/products`

**Alle producten ophalen**
```http
GET /wu/v2/products
```

### 5. Betalingen API

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

### 6. Domeinen API

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

## Registratie-eindpunt

De `/register`-eindpunt biedt een volledige afreken-/registratieflow:

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

**Respons:**
```json
{
    "customer": { ... },
    "membership": { ... },
    "payment": { ... },
    "site": { "id": 123 }
}
```

## Foutresponsen

```json
{
    "code": "wu_rest_invalid_parameter",
    "message": "Ongeldige parameterwaarde",
    "data": {
        "status": 400,
        "params": {
            "email": "Ongeldig e-mailadresformaat"
        }
    }
}
```

## Pagina- en filteren

**Query-parameters:**
```http
GET /wu/v2/customers?per_page=20&page=2&search=john&status=active
```

Veelvoorkomende parameters:
- `per_page` - Items per pagina (standaard: 20, maximaal: 100)
- `page` - Pagina nummer
- `search` - Zoeksleutel
- `orderby` - Sorteerveld
- `order` - Sorteer richting (asc/desc)
- `status` - Filter op status
- `date_created` - Filter op datum bereik
