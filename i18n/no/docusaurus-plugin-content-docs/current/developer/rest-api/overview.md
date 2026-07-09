---
title: REST API-oversikt
sidebar_position: 1
_i18n_hash: cabcc173f6a77e5de94e39fff19bc2fa
---
# REST API-referanse

## Grunnkonfigurasjon

**Basis-URL:** `{site_url}/wp-json/wu/v2/`
**Autentisering:** API-nøkkel og hemmelighet (HTTP Basic Auth eller URL-parametere)

## Autentisering

### Aktiver API
```php
// Enable API in Ultimate Multisite settings or programmatically
wu_save_setting('enable_api', true);
```

### Hent API-legitimasjon
```php
$api_key = wu_get_setting('api_key');
$api_secret = wu_get_setting('api_secret');
```

### Autentiseringsmetoder

**HTTP Basic Auth (anbefalt):**
```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

**URL-parametere:**
```bash
curl "https://yoursite.com/wp-json/wu/v2/customers?api_key=your_key&api_secret=your_secret"
```

## Kjerneendepunkter

### 1. Kunde-API

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
    "extra_information": "VIP customer notes"
}
```

**Slett kunde**
```http
DELETE /wu/v2/customers/{id}
```

### 2. Nettsteds-API

**Basisrute:** `/sites`

**Opprett nettsted**
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

### 3. Medlemskaps-API

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

### 4. Produkt-API

**Basisrute:** `/products`

**Hent alle produkter**
```http
GET /wu/v2/products
```

### 5. Betalings-API

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

### 6. Domene-API

**Basisrute:** `/domains`

**Koble domene**
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

Endepunktet `/register` gir en komplett betalings- og registreringsflyt:

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

**Svar:**
```json
{
    "customer": { ... },
    "membership": { ... },
    "payment": { ... },
    "site": { "id": 123 }
}
```

## Endepunkter for suveren leietaker

Ultimate Multisite: Multi-Tenancy 1.2.0 legger til REST-dekning for suverene leietakere for integrasjoner som klargjør, inspiserer eller verifiserer isolerte leietakere.

Den nøyaktige forespørselslasten avhenger av den aktiverte vertskapasiteten, men integrasjoner bør forvente disse endepunktsgruppene:

```http
POST /wu/v2/tenants/{site_id}/bootstrap
GET /wu/v2/tenants/{site_id}/migration-status
POST /wu/v2/tenants/{site_id}/verify
DELETE /wu/v2/tenants/{site_id}
```

Bruk bootstrap-endepunktet til å forberede leietakerregister, database, filsystem og rutingtilstand. Bruk migreringsstatus- og verifiseringsendepunkter før du bytter produksjonstrafikk. Bruk sletteendepunktet for suveren nedbygging, slik at databaselegitimasjon fjernes gjennom addon-oppryddingsflyten.

Typiske svar for migreringsstatus inkluderer:

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

Behandle `ready: false` som en blokkering før lansering. Kontroller verifiseringsdetaljene, fiks databasevertbindingen, køen, brukerklargjøringen eller rutingproblemet, og prøv deretter verifisering på nytt.

## Feilsvar

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

## Paginering og filtrering

**Spørringsparametere:**
```http
GET /wu/v2/customers?per_page=20&page=2&search=john&status=active
```

Vanlige parametere:
- `per_page` - Elementer per side (standard: 20, maks: 100)
- `page` - Sidetall
- `search` - Søkeord
- `orderby` - Sorteringsfelt
- `order` - Sorteringsretning (asc/desc)
- `status` - Filtrer etter status
- `date_created` - Filtrer etter datointervall
