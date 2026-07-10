---
title: Prehľad REST API
sidebar_position: 1
_i18n_hash: cabcc173f6a77e5de94e39fff19bc2fa
---
# Referencia REST API {#rest-api-reference}

## Základná konfigurácia {#base-configuration}

**Základná URL:** `{site_url}/wp-json/wu/v2/`
**Autentifikácia:** API kľúč a tajomstvo (HTTP Basic Auth alebo parametre URL)

## Autentifikácia {#authentication}

### Povoliť API {#enable-api}
```php
// Enable API in Ultimate Multisite settings or programmatically
wu_save_setting('enable_api', true);
```

### Získať prihlasovacie údaje API {#get-api-credentials}
```php
$api_key = wu_get_setting('api_key');
$api_secret = wu_get_setting('api_secret');
```

### Metódy autentifikácie {#authentication-methods}

**HTTP Basic Auth (odporúčané):**
```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

**Parametre URL:**
```bash
curl "https://yoursite.com/wp-json/wu/v2/customers?api_key=your_key&api_secret=your_secret"
```

## Hlavné koncové body {#core-endpoints}

### 1. API zákazníkov {#1-customers-api}

**Základná trasa:** `/customers`

**Získať všetkých zákazníkov**
```http
GET /wu/v2/customers
```

**Získať jedného zákazníka**
```http
GET /wu/v2/customers/{id}
```

**Vytvoriť zákazníka**
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

**Aktualizovať zákazníka**
```http
PUT /wu/v2/customers/{id}
Content-Type: application/json

{
    "vip": true,
    "extra_information": "VIP customer notes"
}
```

**Odstrániť zákazníka**
```http
DELETE /wu/v2/customers/{id}
```

### 2. API stránok {#2-sites-api}

**Základná trasa:** `/sites`

**Vytvoriť stránku**
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

### 3. API členstiev {#3-memberships-api}

**Základná trasa:** `/memberships`

**Vytvoriť členstvo**
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

### 4. API produktov {#4-products-api}

**Základná trasa:** `/products`

**Získať všetky produkty**
```http
GET /wu/v2/products
```

### 5. API platieb {#5-payments-api}

**Základná trasa:** `/payments`

**Vytvoriť platbu**
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

### 6. API domén {#6-domains-api}

**Základná trasa:** `/domains`

**Namapovať doménu**
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

## Registračný koncový bod {#registration-endpoint}

Koncový bod `/register` poskytuje kompletný priebeh pokladne/registrácie:

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

**Odpoveď:**
```json
{
    "customer": { ... },
    "membership": { ... },
    "payment": { ... },
    "site": { "id": 123 }
}
```

## Koncové body suverénneho tenanta {#sovereign-tenant-endpoints}

Ultimate Multisite: Multi-Tenancy 1.2.0 pridáva REST pokrytie suverénneho tenanta pre integrácie, ktoré poskytujú, kontrolujú alebo overujú izolovaných tenantov.

Presné telo požiadavky závisí od povolenej schopnosti hostiteľa, ale integrácie by mali očakávať tieto skupiny koncových bodov:

```http
POST /wu/v2/tenants/{site_id}/bootstrap
GET /wu/v2/tenants/{site_id}/migration-status
POST /wu/v2/tenants/{site_id}/verify
DELETE /wu/v2/tenants/{site_id}
```

Použite bootstrap koncový bod na prípravu registra tenanta, databázy, súborového systému a stavu smerovania. Pred prepnutím produkčnej prevádzky použite koncové body stavu migrácie a overenia. Koncový bod odstránenia použite na suverénne zrušenie, aby sa prihlasovacie údaje databázy odstránili cez tok čistenia addonu.

Typické odpovede stavu migrácie zahŕňajú:

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

Hodnotu `ready: false` považujte za blokátor pred spustením. Skontrolujte podrobnosti overenia, opravte väzbu databázového hostiteľa, front, poskytovanie používateľov alebo problém so smerovaním a potom overenie zopakujte.

## Chybové odpovede {#error-responses}

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

## Stránkovanie a filtrovanie {#pagination-and-filtering}

**Parametre dotazu:**
```http
GET /wu/v2/customers?per_page=20&page=2&search=john&status=active
```

Bežné parametre:
- `per_page` - Položky na stránku (predvolené: 20, max: 100)
- `page` - Číslo stránky
- `search` - Hľadaný výraz
- `orderby` - Pole zoradenia
- `order` - Smer zoradenia (asc/desc)
- `status` - Filtrovať podľa stavu
- `date_created` - Filtrovať podľa rozsahu dátumov
