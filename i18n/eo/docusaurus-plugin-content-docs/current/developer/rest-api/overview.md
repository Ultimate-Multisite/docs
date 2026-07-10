---
title: Superrigardo pri REST API
sidebar_position: 1
_i18n_hash: cabcc173f6a77e5de94e39fff19bc2fa
---
# Referenco de REST API {#rest-api-reference}

## Baza Agordo {#base-configuration}

**Baza URL:** `{site_url}/wp-json/wu/v2/`
**Aŭtentikigo:** API-ŝlosilo kaj Sekreto (HTTP Basic Auth aŭ URL-parametroj)

## Aŭtentikigo {#authentication}

### Ebligi API {#enable-api}
```php
// Enable API in Ultimate Multisite settings or programmatically
wu_save_setting('enable_api', true);
```

### Akiri API-akreditaĵojn {#get-api-credentials}
```php
$api_key = wu_get_setting('api_key');
$api_secret = wu_get_setting('api_secret');
```

### Aŭtentikigaj Metodoj {#authentication-methods}

**HTTP Basic Auth (Rekomendita):**
```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

**URL-parametroj:**
```bash
curl "https://yoursite.com/wp-json/wu/v2/customers?api_key=your_key&api_secret=your_secret"
```

## Kernaj Finpunktoj {#core-endpoints}

### 1. Klientoj API {#1-customers-api}

**Baza Itinero:** `/customers`

**Akiri Ĉiujn Klientojn**
```http
GET /wu/v2/customers
```

**Akiri Unuopan Klienton**
```http
GET /wu/v2/customers/{id}
```

**Krei Klienton**
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

**Ĝisdatigi Klienton**
```http
PUT /wu/v2/customers/{id}
Content-Type: application/json

{
    "vip": true,
    "extra_information": "VIP customer notes"
}
```

**Forigi Klienton**
```http
DELETE /wu/v2/customers/{id}
```

### 2. Retejoj API {#2-sites-api}

**Baza Itinero:** `/sites`

**Krei Retejon**
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

### 3. Membrecoj API {#3-memberships-api}

**Baza Itinero:** `/memberships`

**Krei Membrecon**
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

### 4. Produktoj API {#4-products-api}

**Baza Itinero:** `/products`

**Akiri Ĉiujn Produktojn**
```http
GET /wu/v2/products
```

### 5. Pagoj API {#5-payments-api}

**Baza Itinero:** `/payments`

**Krei Pagon**
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

### 6. Domajnoj API {#6-domains-api}

**Baza Itinero:** `/domains`

**Mapi Domajnon**
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

## Registrada Finpunkto {#registration-endpoint}

La finpunkto `/register` provizas kompletan checkout/registradan fluon:

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

**Respondo:**
```json
{
    "customer": { ... },
    "membership": { ... },
    "payment": { ... },
    "site": { "id": 123 }
}
```

## Finpunktoj por Suverenaj Luantoj {#sovereign-tenant-endpoints}

Ultimate Multisite: Plurluanteco 1.2.0 aldonas suveren-luantan REST-kovradon por integriĝoj kiuj provizas, inspektas aŭ kontrolas izolitajn luantojn.

La ĝusta petoŝarĝo dependas de la ebligita gastiga kapablo, sed integriĝoj devus atendi ĉi tiujn finpunktajn grupojn:

```http
POST /wu/v2/tenants/{site_id}/bootstrap
GET /wu/v2/tenants/{site_id}/migration-status
POST /wu/v2/tenants/{site_id}/verify
DELETE /wu/v2/tenants/{site_id}
```

Uzu la bootstrap-finpunkton por prepari la luantan registron, datumbazon, dosiersistemon kaj vojigan staton. Uzu migradan staton kaj kontrolajn finpunktojn antaŭ ol ŝalti produktadan trafikon. Uzu la forigan finpunkton por suverena malmuntado, por ke datumbazaj akreditaĵoj estu forigitaj per la addon-puriga fluo.

Tipaj respondoj pri migrada stato inkluzivas:

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

Traktu `ready: false` kiel antaŭlanĉan blokilon. Kontrolu la konfirmo-detalojn, riparu la datumbazan gastigantan ligon, vicon, uzantan provizadon aŭ vojigan problemon, poste reprovu konfirmon.

## Eraraj Respondoj {#error-responses}

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

## Paĝigo kaj Filtrado {#pagination-and-filtering}

**Demandaj Parametroj:**
```http
GET /wu/v2/customers?per_page=20&page=2&search=john&status=active
```

Komunaj parametroj:
- `per_page` - Eroj por paĝo (defaŭlte: 20, maksimume: 100)
- `page` - Paĝnumero
- `search` - Serĉtermino
- `orderby` - Ordiga kampo
- `order` - Ordiga direkto (asc/desc)
- `status` - Filtri laŭ stato
- `date_created` - Filtri laŭ datintervalo
