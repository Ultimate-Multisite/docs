---
title: Yfirlit yfir REST API
sidebar_position: 1
_i18n_hash: cabcc173f6a77e5de94e39fff19bc2fa
---
# REST API tilvísun

## Grunnstillingar {#base-configuration}

**Grunn-URL:** `{site_url}/wp-json/wu/v2/`
**Auðkenning:** API-lykill og leyndarmál (HTTP Basic Auth eða URL-færibreytur)

## Auðkenning {#authentication}

### Virkja API {#enable-api}
```php
// Enable API in Ultimate Multisite settings or programmatically
wu_save_setting('enable_api', true);
```

### Sækja API-auðkenni {#get-api-credentials}
```php
$api_key = wu_get_setting('api_key');
$api_secret = wu_get_setting('api_secret');
```

### Auðkenningaraðferðir {#authentication-methods}

**HTTP Basic Auth (mælt með):**
```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

**URL-færibreytur:**
```bash
curl "https://yoursite.com/wp-json/wu/v2/customers?api_key=your_key&api_secret=your_secret"
```

## Kjarnaendapunktar {#core-endpoints}

### 1. Viðskiptavina-API {#1-customers-api}

**Grunnleið:** `/customers`

**Sækja alla viðskiptavini**
```http
GET /wu/v2/customers
```

**Sækja einn viðskiptavin**
```http
GET /wu/v2/customers/{id}
```

**Búa til viðskiptavin**
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

**Uppfæra viðskiptavin**
```http
PUT /wu/v2/customers/{id}
Content-Type: application/json

{
    "vip": true,
    "extra_information": "VIP customer notes"
}
```

**Eyða viðskiptavin**
```http
DELETE /wu/v2/customers/{id}
```

### 2. Vefja-API {#2-sites-api}

**Grunnleið:** `/sites`

**Búa til vef**
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

### 3. Aðildar-API {#3-memberships-api}

**Grunnleið:** `/memberships`

**Búa til aðild**
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

### 4. Vöru-API {#4-products-api}

**Grunnleið:** `/products`

**Sækja allar vörur**
```http
GET /wu/v2/products
```

### 5. Greiðslu-API {#5-payments-api}

**Grunnleið:** `/payments`

**Búa til greiðslu**
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

### 6. Léna-API {#6-domains-api}

**Grunnleið:** `/domains`

**Tengja lén**
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

## Skráningarendapunktur {#registration-endpoint}

Endapunkturinn `/register` veitir heilt checkout-/skráningarflæði:

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

## Endapunktar fyrir fullvalda leigjendur {#sovereign-tenant-endpoints}

Ultimate Multisite: Multi-Tenancy 1.2.0 bætir við REST-umfjöllun um fullvalda leigjendur fyrir samþættingar sem útvega, skoða eða staðfesta einangraða leigjendur.

Nákvæmt beiðniinnihald fer eftir virkjuðum eiginleika hýsilsins, en samþættingar ættu að búast við þessum endapunktahópum:

```http
POST /wu/v2/tenants/{site_id}/bootstrap
GET /wu/v2/tenants/{site_id}/migration-status
POST /wu/v2/tenants/{site_id}/verify
DELETE /wu/v2/tenants/{site_id}
```

Notaðu bootstrap-endapunktinn til að undirbúa skrá leigjanda, gagnagrunn, skráakerfi og stöðu leiðar. Notaðu endapunkta fyrir flutningsstöðu og staðfestingu áður en framleiðsluumferð er færð yfir. Notaðu eyðingarendapunktinn fyrir fullvalda niðurrif svo gagnagrunnsauðkenni séu fjarlægð í gegnum hreinsunarflæði viðbótarinnar.

Dæmigerð svör um flutningsstöðu innihalda:

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

Líttu á `ready: false` sem hindrun fyrir ræsingu. Athugaðu staðfestingarupplýsingarnar, lagaðu bindingu gagnagrunnshýsils, biðröð, útvegun notenda eða leiðarvandamál og reyndu síðan staðfestingu aftur.

## Villusvör {#error-responses}

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

## Síðuskipting og síun {#pagination-and-filtering}

**Fyrirspurnarfæribreytur:**
```http
GET /wu/v2/customers?per_page=20&page=2&search=john&status=active
```

Algengar færibreytur:
- `per_page` - Atriði á hverri síðu (sjálfgefið: 20, hámark: 100)
- `page` - Síðunúmer
- `search` - Leitarorð
- `orderby` - Röðunarsvið
- `order` - Röðunarstefna (asc/desc)
- `status` - Sía eftir stöðu
- `date_created` - Sía eftir dagsetningarbili
