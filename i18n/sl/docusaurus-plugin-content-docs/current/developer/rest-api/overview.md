---
title: Pregled REST API-ja
sidebar_position: 1
_i18n_hash: cabcc173f6a77e5de94e39fff19bc2fa
---
# Referenca REST API

## Osnovna konfiguracija

**Osnovni URL:** `{site_url}/wp-json/wu/v2/`
**Avtentikacija:** API ključ in skrivnost (HTTP Basic Auth ali URL parametri)

## Avtentikacija

### Omogoči API
```php
// Enable API in Ultimate Multisite settings or programmatically
wu_save_setting('enable_api', true);
```

### Pridobi API poverilnice
```php
$api_key = wu_get_setting('api_key');
$api_secret = wu_get_setting('api_secret');
```

### Metode avtentikacije

**HTTP Basic Auth (priporočeno):**
```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

**URL parametri:**
```bash
curl "https://yoursite.com/wp-json/wu/v2/customers?api_key=your_key&api_secret=your_secret"
```

## Osnovni endpointi

### 1. API za stranke

**Osnovna pot:** `/customers`

**Pridobi vse stranke**
```http
GET /wu/v2/customers
```

**Pridobi posamezno stranko**
```http
GET /wu/v2/customers/{id}
```

**Ustvari stranko**
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

**Posodobi stranko**
```http
PUT /wu/v2/customers/{id}
Content-Type: application/json

{
    "vip": true,
    "extra_information": "VIP customer notes"
}
```

**Izbriši stranko**
```http
DELETE /wu/v2/customers/{id}
```

### 2. API za spletna mesta

**Osnovna pot:** `/sites`

**Ustvari spletno mesto**
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

### 3. API za članstva

**Osnovna pot:** `/memberships`

**Ustvari članstvo**
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

### 4. API za izdelke

**Osnovna pot:** `/products`

**Pridobi vse izdelke**
```http
GET /wu/v2/products
```

### 5. API za plačila

**Osnovna pot:** `/payments`

**Ustvari plačilo**
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

### 6. API za domene

**Osnovna pot:** `/domains`

**Preslikaj domeno**
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

## Endpoint za registracijo

Endpoint `/register` zagotavlja celoten potek zaključka nakupa/registracije:

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

**Odgovor:**
```json
{
    "customer": { ... },
    "membership": { ... },
    "payment": { ... },
    "site": { "id": 123 }
}
```

## Endpointi za suverene najemnike

Ultimate Multisite: Multi-Tenancy 1.2.0 dodaja REST podporo za suverene najemnike za integracije, ki zagotavljajo, pregledujejo ali preverjajo izolirane najemnike.

Natančen nabor podatkov zahteve je odvisen od omogočene zmogljivosti gostitelja, vendar naj integracije pričakujejo te skupine endpointov:

```http
POST /wu/v2/tenants/{site_id}/bootstrap
GET /wu/v2/tenants/{site_id}/migration-status
POST /wu/v2/tenants/{site_id}/verify
DELETE /wu/v2/tenants/{site_id}
```

Uporabite bootstrap endpoint za pripravo registra najemnika, podatkovne zbirke, datotečnega sistema in stanja usmerjanja. Uporabite endpointe za stanje migracije in preverjanje, preden preklopite produkcijski promet. Uporabite endpoint za brisanje za suvereno odstranitev, da se poverilnice podatkovne zbirke odstranijo prek poteka čiščenja dodatka.

Tipični odgovori stanja migracije vključujejo:

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

`ready: false` obravnavajte kot blokado pred zagonom. Preverite podrobnosti preverjanja, odpravite težavo z vezavo gostitelja podatkovne zbirke, čakalno vrsto, zagotavljanjem uporabnikov ali usmerjanjem, nato znova poskusite preverjanje.

## Odgovori o napakah

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

## Paginacija in filtriranje

**Parametri poizvedbe:**
```http
GET /wu/v2/customers?per_page=20&page=2&search=john&status=active
```

Pogosti parametri:
- `per_page` - Elementi na stran (privzeto: 20, največ: 100)
- `page` - Številka strani
- `search` - Iskalni izraz
- `orderby` - Polje za razvrščanje
- `order` - Smer razvrščanja (asc/desc)
- `status` - Filtriraj po statusu
- `date_created` - Filtriraj po časovnem razponu
