---
title: Přehled REST API
sidebar_position: 1
_i18n_hash: cabcc173f6a77e5de94e39fff19bc2fa
---
# Referenční příručka REST API {#rest-api-reference}

## Základní konfigurace {#base-configuration}

**Základní URL:** `{site_url}/wp-json/wu/v2/`
**Ověření:** API Key a Secret (HTTP Basic Auth nebo parametry URL)

## Ověření {#authentication}

### Povolit API {#enable-api}
```php
// Enable API in Ultimate Multisite settings or programmatically
wu_save_setting('enable_api', true);
```

### Získat přihlašovací údaje API {#get-api-credentials}
```php
$api_key = wu_get_setting('api_key');
$api_secret = wu_get_setting('api_secret');
```

### Metody ověření {#authentication-methods}

**HTTP Basic Auth (doporučeno):**
```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

**Parametry URL:**
```bash
curl "https://yoursite.com/wp-json/wu/v2/customers?api_key=your_key&api_secret=your_secret"
```

## Základní endpointy {#core-endpoints}

### 1. Customers API {#1-customers-api}

**Základní trasa:** `/customers`

**Získat všechny zákazníky**
```http
GET /wu/v2/customers
```

**Získat jednoho zákazníka**
```http
GET /wu/v2/customers/{id}
```

**Vytvořit zákazníka**
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

**Aktualizovat zákazníka**
```http
PUT /wu/v2/customers/{id}
Content-Type: application/json

{
    "vip": true,
    "extra_information": "VIP customer notes"
}
```

**Smazat zákazníka**
```http
DELETE /wu/v2/customers/{id}
```

### 2. Sites API {#2-sites-api}

**Základní trasa:** `/sites`

**Vytvořit web**
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

### 3. Memberships API {#3-memberships-api}

**Základní trasa:** `/memberships`

**Vytvořit členství**
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

### 4. Products API {#4-products-api}

**Základní trasa:** `/products`

**Získat všechny produkty**
```http
GET /wu/v2/products
```

### 5. Payments API {#5-payments-api}

**Základní trasa:** `/payments`

**Vytvořit platbu**
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

### 6. Domains API {#6-domains-api}

**Základní trasa:** `/domains`

**Namapovat doménu**
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

## Registrační endpoint {#registration-endpoint}

Endpoint `/register` poskytuje kompletní tok checkout/registrace:

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

**Odpověď:**
```json
{
    "customer": { ... },
    "membership": { ... },
    "payment": { ... },
    "site": { "id": 123 }
}
```

## Endpointy suverénních tenantů {#sovereign-tenant-endpoints}

Ultimate Multisite: Multi-Tenancy 1.2.0 přidává REST pokrytí suverénních tenantů pro integrace, které zřizují, kontrolují nebo ověřují izolované tenanty.

Přesný payload požadavku závisí na povolené schopnosti hostitele, ale integrace by měly očekávat tyto skupiny endpointů:

```http
POST /wu/v2/tenants/{site_id}/bootstrap
GET /wu/v2/tenants/{site_id}/migration-status
POST /wu/v2/tenants/{site_id}/verify
DELETE /wu/v2/tenants/{site_id}
```

Použijte bootstrap endpoint k přípravě registru tenantů, databáze, souborového systému a stavu směrování. Použijte endpointy stavu migrace a ověření před přepnutím produkčního provozu. Použijte endpoint pro smazání pro suverénní odstranění, aby byly přihlašovací údaje k databázi odstraněny prostřednictvím toku čištění addonu.

Typické odpovědi stavu migrace zahrnují:

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

Považujte `ready: false` za blokátor před spuštěním. Zkontrolujte podrobnosti ověření, opravte navázání hostitele databáze, frontu, zřizování uživatelů nebo problém se směrováním a poté ověření zopakujte.

## Chybové odpovědi {#error-responses}

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

## Stránkování a filtrování {#pagination-and-filtering}

**Parametry dotazu:**
```http
GET /wu/v2/customers?per_page=20&page=2&search=john&status=active
```

Běžné parametry:
- `per_page` - Položky na stránku (výchozí: 20, max.: 100)
- `page` - Číslo stránky
- `search` - Hledaný výraz
- `orderby` - Pole řazení
- `order` - Směr řazení (asc/desc)
- `status` - Filtrovat podle stavu
- `date_created` - Filtrovat podle rozsahu dat
