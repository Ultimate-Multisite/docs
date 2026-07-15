---
title: Översikt över REST API
sidebar_position: 1
_i18n_hash: cabcc173f6a77e5de94e39fff19bc2fa
---
# REST API-referens

## Baskonfiguration {#base-configuration}

**Bas-URL:** `{site_url}/wp-json/wu/v2/`
**Autentisering:** API-nyckel och hemlighet (HTTP Basic Auth eller URL-parametrar)

## Autentisering {#authentication}

### Aktivera API {#enable-api}
```php
// Enable API in Ultimate Multisite settings or programmatically
wu_save_setting('enable_api', true);
```

### Hämta API-autentiseringsuppgifter {#get-api-credentials}
```php
$api_key = wu_get_setting('api_key');
$api_secret = wu_get_setting('api_secret');
```

### Autentiseringsmetoder {#authentication-methods}

**HTTP Basic Auth (rekommenderas):**
```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

**URL-parametrar:**
```bash
curl "https://yoursite.com/wp-json/wu/v2/customers?api_key=your_key&api_secret=your_secret"
```

## Kärnslutpunkter {#core-endpoints}

### 1. Kund-API {#1-customers-api}

**Basrutt:** `/customers`

**Hämta alla kunder**
```http
GET /wu/v2/customers
```

**Hämta en enskild kund**
```http
GET /wu/v2/customers/{id}
```

**Skapa kund**
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

**Uppdatera kund**
```http
PUT /wu/v2/customers/{id}
Content-Type: application/json

{
    "vip": true,
    "extra_information": "VIP customer notes"
}
```

**Ta bort kund**
```http
DELETE /wu/v2/customers/{id}
```

### 2. Webbplats-API {#2-sites-api}

**Basrutt:** `/sites`

**Skapa webbplats**
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

### 3. Medlemskaps-API {#3-memberships-api}

**Basrutt:** `/memberships`

**Skapa medlemskap**
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

### 4. Produkt-API {#4-products-api}

**Basrutt:** `/products`

**Hämta alla produkter**
```http
GET /wu/v2/products
```

### 5. Betalnings-API {#5-payments-api}

**Basrutt:** `/payments`

**Skapa betalning**
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

### 6. Domän-API {#6-domains-api}

**Basrutt:** `/domains`

**Mappa domän**
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

## Registreringsslutpunkt {#registration-endpoint}

Slutpunkten `/register` tillhandahåller ett komplett kassa-/registreringsflöde:

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

## Slutpunkter för suveräna klientmiljöer {#sovereign-tenant-endpoints}

Ultimate Multisite: Multi-Tenancy 1.2.0 lägger till REST-täckning för suveräna klientmiljöer för integrationer som tillhandahåller, inspekterar eller verifierar isolerade klientmiljöer.

Den exakta nyttolasten för begäran beror på den aktiverade värdfunktionaliteten, men integrationer bör förvänta sig dessa slutpunktsgrupper:

```http
POST /wu/v2/tenants/{site_id}/bootstrap
GET /wu/v2/tenants/{site_id}/migration-status
POST /wu/v2/tenants/{site_id}/verify
DELETE /wu/v2/tenants/{site_id}
```

Använd bootstrap-slutpunkten för att förbereda klientmiljöregistret, databasen, filsystemet och routingtillståndet. Använd slutpunkterna för migreringsstatus och verifiering innan du växlar produktionstrafik. Använd borttagningsslutpunkten för suverän nedmontering så att databasautentiseringsuppgifter tas bort genom tilläggets rensningsflöde.

Typiska svar för migreringsstatus inkluderar:

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

Behandla `ready: false` som en blockerare före lansering. Kontrollera verifieringsdetaljerna, åtgärda problemet med databasens värdbindning, kön, användartillhandahållandet eller routingen och försök sedan verifiera igen.

## Felsvar {#error-responses}

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

## Paginering och filtrering {#pagination-and-filtering}

**Frågeparametrar:**
```http
GET /wu/v2/customers?per_page=20&page=2&search=john&status=active
```

Vanliga parametrar:
- `per_page` - Objekt per sida (standard: 20, max: 100)
- `page` - Sidnummer
- `search` - Sökterm
- `orderby` - Sorteringsfält
- `order` - Sorteringsriktning (asc/desc)
- `status` - Filtrera efter status
- `date_created` - Filtrera efter datumintervall
