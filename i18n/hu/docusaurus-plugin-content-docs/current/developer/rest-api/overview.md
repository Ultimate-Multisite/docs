---
title: REST API áttekintés
sidebar_position: 1
_i18n_hash: cabcc173f6a77e5de94e39fff19bc2fa
---
# REST API referencia {#rest-api-reference}

## Alapkonfiguráció {#base-configuration}

**Alap URL:** `{site_url}/wp-json/wu/v2/`
**Hitelesítés:** API-kulcs és titkos kulcs (HTTP Basic Auth vagy URL-paraméterek)

## Hitelesítés {#authentication}

### API engedélyezése {#enable-api}
```php
// Enable API in Ultimate Multisite settings or programmatically
wu_save_setting('enable_api', true);
```

### API-hitelesítő adatok lekérése {#get-api-credentials}
```php
$api_key = wu_get_setting('api_key');
$api_secret = wu_get_setting('api_secret');
```

### Hitelesítési módszerek {#authentication-methods}

**HTTP Basic Auth (ajánlott):**
```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

**URL-paraméterek:**
```bash
curl "https://yoursite.com/wp-json/wu/v2/customers?api_key=your_key&api_secret=your_secret"
```

## Alapvető végpontok {#core-endpoints}

### 1. Ügyfelek API {#1-customers-api}

**Alapútvonal:** `/customers`

**Összes ügyfél lekérése**
```http
GET /wu/v2/customers
```

**Egyetlen ügyfél lekérése**
```http
GET /wu/v2/customers/{id}
```

**Ügyfél létrehozása**
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

**Ügyfél frissítése**
```http
PUT /wu/v2/customers/{id}
Content-Type: application/json

{
    "vip": true,
    "extra_information": "VIP customer notes"
}
```

**Ügyfél törlése**
```http
DELETE /wu/v2/customers/{id}
```

### 2. Webhelyek API {#2-sites-api}

**Alapútvonal:** `/sites`

**Webhely létrehozása**
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

### 3. Tagságok API {#3-memberships-api}

**Alapútvonal:** `/memberships`

**Tagság létrehozása**
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

### 4. Termékek API {#4-products-api}

**Alapútvonal:** `/products`

**Összes termék lekérése**
```http
GET /wu/v2/products
```

### 5. Fizetések API {#5-payments-api}

**Alapútvonal:** `/payments`

**Fizetés létrehozása**
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

### 6. Domainek API {#6-domains-api}

**Alapútvonal:** `/domains`

**Domain hozzárendelése**
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

## Regisztrációs végpont {#registration-endpoint}

A `/register` végpont teljes checkout/regisztrációs folyamatot biztosít:

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

**Válasz:**
```json
{
    "customer": { ... },
    "membership": { ... },
    "payment": { ... },
    "site": { "id": 123 }
}
```

## Szuverén tenant végpontok {#sovereign-tenant-endpoints}

Ultimate Multisite: Multi-Tenancy 1.2.0 szuverén tenant REST-lefedettséget ad azokhoz az integrációkhoz, amelyek izolált tenantokat hoznak létre, vizsgálnak vagy ellenőriznek.

A pontos kérés payloadja az engedélyezett hosztképességtől függ, de az integrációknak ezekkel a végpontcsoportokkal kell számolniuk:

```http
POST /wu/v2/tenants/{site_id}/bootstrap
GET /wu/v2/tenants/{site_id}/migration-status
POST /wu/v2/tenants/{site_id}/verify
DELETE /wu/v2/tenants/{site_id}
```

Használd a bootstrap végpontot a tenant-nyilvántartás, az adatbázis, a fájlrendszer és az útválasztási állapot előkészítéséhez. Használd a migrációs állapot- és ellenőrzési végpontokat, mielőtt átkapcsolod az éles forgalmat. Használd a törlési végpontot a szuverén lebontáshoz, hogy az adatbázis-hitelesítő adatok az addon tisztítási folyamatán keresztül legyenek eltávolítva.

A tipikus migrációs állapotválaszok a következőket tartalmazzák:

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

A `ready: false` értéket indítás előtti blokkolóként kezeld. Ellenőrizd az ellenőrzési részleteket, javítsd az adatbázis hosztkötését, a sort, a felhasználók létrehozását vagy az útválasztási problémát, majd próbáld újra az ellenőrzést.

## Hibaválaszok {#error-responses}

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

## Lapozás és szűrés {#pagination-and-filtering}

**Lekérdezési paraméterek:**
```http
GET /wu/v2/customers?per_page=20&page=2&search=john&status=active
```

Gyakori paraméterek:
- `per_page` - Elemek oldalanként (alapértelmezett: 20, maximum: 100)
- `page` - Oldalszám
- `search` - Keresési kifejezés
- `orderby` - Rendezési mező
- `order` - Rendezési irány (asc/desc)
- `status` - Szűrés állapot alapján
- `date_created` - Szűrés dátumtartomány alapján
