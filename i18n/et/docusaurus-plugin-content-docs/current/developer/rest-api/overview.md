---
title: REST API ülevaade
sidebar_position: 1
_i18n_hash: cabcc173f6a77e5de94e39fff19bc2fa
---
# REST API viide

## Põhiseadistus

**Baas-URL:** `{site_url}/wp-json/wu/v2/`
**Autentimine:** API võti ja saladus (HTTP Basic Auth või URL-i parameetrid)

## Autentimine

### Luba API
```php
// Enable API in Ultimate Multisite settings or programmatically
wu_save_setting('enable_api', true);
```

### Hangi API pääsuandmed
```php
$api_key = wu_get_setting('api_key');
$api_secret = wu_get_setting('api_secret');
```

### Autentimismeetodid

**HTTP Basic Auth (soovitatav):**
```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

**URL-i parameetrid:**
```bash
curl "https://yoursite.com/wp-json/wu/v2/customers?api_key=your_key&api_secret=your_secret"
```

## Põhilised lõpp-punktid

### 1. Klientide API

**Baasmarsruut:** `/customers`

**Hangi kõik kliendid**
```http
GET /wu/v2/customers
```

**Hangi üks klient**
```http
GET /wu/v2/customers/{id}
```

**Loo klient**
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

**Uuenda klienti**
```http
PUT /wu/v2/customers/{id}
Content-Type: application/json

{
    "vip": true,
    "extra_information": "VIP customer notes"
}
```

**Kustuta klient**
```http
DELETE /wu/v2/customers/{id}
```

### 2. Saitide API

**Baasmarsruut:** `/sites`

**Loo sait**
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

### 3. Liikmesuste API

**Baasmarsruut:** `/memberships`

**Loo liikmesus**
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

### 4. Toodete API

**Baasmarsruut:** `/products`

**Hangi kõik tooted**
```http
GET /wu/v2/products
```

### 5. Maksete API

**Baasmarsruut:** `/payments`

**Loo makse**
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

### 6. Domeenide API

**Baasmarsruut:** `/domains`

**Seo domeen**
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

## Registreerimise lõpp-punkt

Lõpp-punkt `/register` pakub täielikku ostu vormistamise / registreerimise voogu:

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

**Vastus:**
```json
{
    "customer": { ... },
    "membership": { ... },
    "payment": { ... },
    "site": { "id": 123 }
}
```

## Suveräänse rentniku lõpp-punktid

Ultimate Multisite: Multi-Tenancy 1.2.0 lisab suveräänse rentniku REST-katvuse integratsioonidele, mis varustavad, kontrollivad või verifitseerivad isoleeritud rentnikke.

Täpne päringu kasulik koormus sõltub lubatud hosti võimekusest, kuid integratsioonid peaksid arvestama nende lõpp-punktide rühmadega:

```http
POST /wu/v2/tenants/{site_id}/bootstrap
GET /wu/v2/tenants/{site_id}/migration-status
POST /wu/v2/tenants/{site_id}/verify
DELETE /wu/v2/tenants/{site_id}
```

Kasuta algkäivituse lõpp-punkti rentnike registri, andmebaasi, failisüsteemi ja marsruutimise oleku ettevalmistamiseks. Kasuta migratsiooni oleku ja verifitseerimise lõpp-punkte enne tootmisliikluse ümberlülitamist. Kasuta kustutamise lõpp-punkti suveräänseks eemaldamiseks, et andmebaasi pääsuandmed eemaldataks lisamooduli puhastusvoo kaudu.

Tüüpilised migratsiooni oleku vastused sisaldavad:

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

Käsitle väärtust `ready: false` kui lansseerimiseelset takistust. Kontrolli verifitseerimise üksikasju, paranda andmebaasi hosti sidumine, järjekord, kasutajate ettevalmistamine või marsruutimisprobleem ning proovi seejärel verifitseerimist uuesti.

## Veavastused

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

## Lehekülgede kaupa jaotamine ja filtreerimine

**Päringu parameetrid:**
```http
GET /wu/v2/customers?per_page=20&page=2&search=john&status=active
```

Levinud parameetrid:
- `per_page` - Üksused lehe kohta (vaikimisi: 20, max: 100)
- `page` - Lehekülje number
- `search` - Otsingusõna
- `orderby` - Sortimisväli
- `order` - Sortimissuund (asc/desc)
- `status` - Filtreeri oleku järgi
- `date_created` - Filtreeri kuupäevavahemiku järgi
