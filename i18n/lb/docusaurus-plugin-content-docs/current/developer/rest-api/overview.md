---
title: REST API Iwwerbléck
sidebar_position: 1
_i18n_hash: cabcc173f6a77e5de94e39fff19bc2fa
---
# REST API Referenz

## Basis-Konfiguratioun

**Basis-URL:** `{site_url}/wp-json/wu/v2/`
**Authentifikatioun:** API-Schlëssel & Secret (HTTP Basic Auth oder URL-Parameteren)

## Authentifikatioun

### API aktivéieren
```php
// Enable API in Ultimate Multisite settings or programmatically
wu_save_setting('enable_api', true);
```

### API-Zougangsdaten kréien
```php
$api_key = wu_get_setting('api_key');
$api_secret = wu_get_setting('api_secret');
```

### Authentifikatiounsmethoden

**HTTP Basic Auth (recommandéiert):**
```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

**URL-Parameteren:**
```bash
curl "https://yoursite.com/wp-json/wu/v2/customers?api_key=your_key&api_secret=your_secret"
```

## Kär-Endpunkten

### 1. Clienten API

**Basis-Route:** `/customers`

**All Clientë kréien**
```http
GET /wu/v2/customers
```

**Eenzelne Client kréien**
```http
GET /wu/v2/customers/{id}
```

**Client erstellen**
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

**Client aktualiséieren**
```http
PUT /wu/v2/customers/{id}
Content-Type: application/json

{
    "vip": true,
    "extra_information": "VIP customer notes"
}
```

**Client läschen**
```http
DELETE /wu/v2/customers/{id}
```

### 2. Säiten API

**Basis-Route:** `/sites`

**Säit erstellen**
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

### 3. Memberschaften API

**Basis-Route:** `/memberships`

**Memberschaft erstellen**
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

**Basis-Route:** `/products`

**All Produkter kréien**
```http
GET /wu/v2/products
```

### 5. Bezuelungen API

**Basis-Route:** `/payments`

**Bezuelung erstellen**
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

### 6. Domainen API

**Basis-Route:** `/domains`

**Domain zouuerdnen**
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

## Registréierungsendpunkt

Den `/register` Endpunkt bitt e komplette Kees-/Registréierungsfloss:

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

**Äntwert:**
```json
{
    "customer": { ... },
    "membership": { ... },
    "payment": { ... },
    "site": { "id": 123 }
}
```

## Souverän Tenant-Endpunkten

Ultimate Multisite: Multi-Tenancy 1.2.0 füügt souverän Tenant-REST-Ofdeckung fir Integratiounen derbäi, déi isoléiert Tenants bereetstellen, iwwerpréiwen oder verifizéieren.

Déi exakt Ufro-Nëtzlaascht hänkt vun der aktivéierter Host-Fäegkeet of, mee Integratioune sollten dës Endpunktgruppen erwaarden:

```http
POST /wu/v2/tenants/{site_id}/bootstrap
GET /wu/v2/tenants/{site_id}/migration-status
POST /wu/v2/tenants/{site_id}/verify
DELETE /wu/v2/tenants/{site_id}
```

Benotzt de Bootstrap-Endpunkt, fir den Tenant-Registry, d'Datebank, de Dateiesystem an de Routing-Zoustand virzebereeden. Benotzt Migratiounsstatus- a Verifizéierungsendpunkten, ier Produktiouns-Traffic ëmgeschalt gëtt. Benotzt de Läschendpunkt fir souverän Ofbau, sou datt Datebank-Zougangsdaten iwwer de Cleanup-Floss vum Addon ewechgeholl ginn.

Typesch Migratiounsstatus-Äntwerten enthalen:

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

Behandelt `ready: false` als Pre-Launch-Blocker. Kontrolléiert d'Verifizéierungsdetailer, fixéiert d'Datebank-Host-Bindung, d'Schlaang, d'Benotzer-Bereetstellung oder de Routing-Problem, a probéiert d'Verifizéierung duerno nach eng Kéier.

## Feeleräntwerten

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

## Säiteweis Opdeelung a Filteren

**Ufroparameteren:**
```http
GET /wu/v2/customers?per_page=20&page=2&search=john&status=active
```

Allgemeng Parameteren:
- `per_page` - Elementer pro Säit (Standard: 20, max: 100)
- `page` - Säitennummer
- `search` - Sichbegrëff
- `orderby` - Sortéierfeld
- `order` - Sortéierrichtung (asc/desc)
- `status` - No Status filteren
- `date_created` - No Datumsberäich filteren
