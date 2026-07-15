---
title: REST API-Überblick
sidebar_position: 1
_i18n_hash: cabcc173f6a77e5de94e39fff19bc2fa
---
# REST-API-Referenz

## Basiskonfiguration {#base-configuration}

**Basis-URL:** `{site_url}/wp-json/wu/v2/`
**Authentifizierung:** API-Schlüssel & Secret (HTTP Basic Auth oder URL-Parameter)

## Authentifizierung {#authentication}

### API aktivieren {#enable-api}
```php
// Enable API in Ultimate Multisite settings or programmatically
wu_save_setting('enable_api', true);
```

### API-Zugangsdaten abrufen {#get-api-credentials}
```php
$api_key = wu_get_setting('api_key');
$api_secret = wu_get_setting('api_secret');
```

### Authentifizierungsmethoden {#authentication-methods}

**HTTP Basic Auth (empfohlen):**
```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

**URL-Parameter:**
```bash
curl "https://yoursite.com/wp-json/wu/v2/customers?api_key=your_key&api_secret=your_secret"
```

## Kern-Endpunkte {#core-endpoints}

### 1. Kunden-API {#1-customers-api}

**Basisroute:** `/customers`

**Alle Kunden abrufen**
```http
GET /wu/v2/customers
```

**Einzelnen Kunden abrufen**
```http
GET /wu/v2/customers/{id}
```

**Kunden erstellen**
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

**Kunden aktualisieren**
```http
PUT /wu/v2/customers/{id}
Content-Type: application/json

{
    "vip": true,
    "extra_information": "VIP customer notes"
}
```

**Kunden löschen**
```http
DELETE /wu/v2/customers/{id}
```

### 2. Websites-API {#2-sites-api}

**Basisroute:** `/sites`

**Website erstellen**
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

### 3. Mitgliedschaften-API {#3-memberships-api}

**Basisroute:** `/memberships`

**Mitgliedschaft erstellen**
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

**Basisroute:** `/products`

**Alle Produkte abrufen**
```http
GET /wu/v2/products
```

### 5. Zahlungen-API {#5-payments-api}

**Basisroute:** `/payments`

**Zahlung erstellen**
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

### 6. Domains-API {#6-domains-api}

**Basisroute:** `/domains`

**Domain zuordnen**
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

## Registrierungs-Endpunkt {#registration-endpoint}

Der `/register`-Endpunkt bietet einen vollständigen Checkout-/Registrierungsablauf:

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

**Antwort:**
```json
{
    "customer": { ... },
    "membership": { ... },
    "payment": { ... },
    "site": { "id": 123 }
}
```

## Sovereign-Tenant-Endpunkte {#sovereign-tenant-endpoints}

Ultimate Multisite: Multi-Tenancy 1.2.0 fügt souveräne Tenant-REST-Abdeckung für Integrationen hinzu, die isolierte Tenants bereitstellen, prüfen oder verifizieren.

Die genaue Anfrage-Nutzlast hängt von der aktivierten Host-Fähigkeit ab, aber Integrationen sollten diese Endpunktgruppen erwarten:

```http
POST /wu/v2/tenants/{site_id}/bootstrap
GET /wu/v2/tenants/{site_id}/migration-status
POST /wu/v2/tenants/{site_id}/verify
DELETE /wu/v2/tenants/{site_id}
```

Verwende den Bootstrap-Endpunkt, um Tenant-Registry, Datenbank, Dateisystem und Routing-Zustand vorzubereiten. Verwende die Migrationsstatus- und Verifizierungs-Endpunkte, bevor du Produktions-Traffic umschaltest. Verwende den Lösch-Endpunkt für den souveränen Abbau, damit Datenbank-Zugangsdaten über den Add-on-Bereinigungsablauf entfernt werden.

Typische Migrationsstatus-Antworten umfassen:

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

Behandle `ready: false` als Blocker vor dem Launch. Prüfe die Verifizierungsdetails, behebe das Datenbank-Host-Binding, die Queue, die Benutzerbereitstellung oder das Routing-Problem und versuche die Verifizierung anschließend erneut.

## Fehlerantworten {#error-responses}

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

## Paginierung und Filterung {#pagination-and-filtering}

**Abfrageparameter:**
```http
GET /wu/v2/customers?per_page=20&page=2&search=john&status=active
```

Häufige Parameter:
- `per_page` - Elemente pro Seite (Standard: 20, max.: 100)
- `page` - Seitennummer
- `search` - Suchbegriff
- `orderby` - Sortierfeld
- `order` - Sortierrichtung (asc/desc)
- `status` - Nach Status filtern
- `date_created` - Nach Datumsbereich filtern
