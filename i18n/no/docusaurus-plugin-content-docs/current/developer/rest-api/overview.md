---
title: Oversikt over REST API
sidebar_position: 1
_i18n_hash: 4e511d92e0002dff445f45ff05adbeda
---
# REST API Referanse

## Basisinnstillinger

**Basis-URL:** `{site_url}/wp-json/wu/v2/`
**Autentisering:** API Nøkkel og Hemmelighet (HTTP Basic Auth eller URL Parametere)

## Autentisering

### Aktivere API
```php
// Aktiver API i Ultimate Multisite-innstillingene eller programmeringsmessig
wu_save_setting('enable_api', true);
```

### Hente API-legitimasjon
```php
$api_key = wu_get_setting('api_key');
$api_secret = wu_get_setting('api_secret');
```

### Autentiseringsmetoder

**HTTP Basic Auth (Anbefalt):**
```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

**URL Parametere:**
```bash
curl "https://yoursite.com/wp-json/wu/v2/customers?api_key=your_key&api_secret=your_secret"
```

## Kjernepunkter (Core Endpoints)

### 1. Kunder API

**Basisrute:** `/customers`

**Hent alle kunder**
```http
GET /wu/v2/customers
```

**Hent én kunde**
```http
GET /wu/v2/customers/{id}
```

**Opprett kunde**
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

**Oppdater kunde**
```http
PUT /wu/v2/customers/{id}
Content-Type: application/json

{
    "vip": true,
    "extra_information": "VIP kunde merknader"
}
```

**Slett kunde**
```http
DELETE /wu/v2/customers/{id}
```

### 2. Steder API

**Basisrute:** `/sites`

**Opprett sted**
```http
POST /wu/v2/sites
Content-Type: application/json

{
    "customer_id": 5,
    "membership_id": 10,
    "domain": "example.com",
    "path": "/",
    "title": "Mitt nye sted",
    "template_id": 1,
    "type": "customer_owned"
}
```

### 3. Medlemskap API

**Basisrute:** `/memberships`

**Opprett medlemskap**
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

### 4. Produkter API

**Basisrute:** `/products`

**Hent alle produkter**
```http
GET /wu/v2/products
```

### 5. Betalinger API

**Basisrute:** `/payments`

**Opprett betaling**
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

### 6. Domener API

**Basisrute:** `/domains`

**Mappe domene**
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

## Registreringsendepunkt

Endepunktet `/register` gir en komplett kasse-/registreringsflyt:

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
        "site_title": "Mitt nye sted",
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

**Svar:**
```json
{
    "customer": { ... },
    "membership": { ... },
    "payment": { ... },
    "site": { "id": 123 }
}
```

## Feilmeldinger

```json
{
    "code": "wu_rest_invalid_parameter",
    "message": "Ugyldig parameterverdi",
    "data": {
        "status": 400,
        "params": {
            "email": "Ugyldig e-postformat"
        }
    }
}
```

## Paginering og filtrering

**Spørringsparametere:**
```http
GET /wu/v2/customers?per_page=20&page=2&search=john&status=active
```

Vanlige parametere:
- `per_page` - Antall elementer per side (standard: 20, maks: 100)
- `page` - Sidenummer
- `search` - Søkeord
- `orderby` - Felt for sortering
- `order` - Sorteringsretning (asc/desc)
- `status` - Filtrer etter status
- `date_created` - Filtrer etter datoområde
