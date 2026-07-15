---
title: Forbhreathnú ar REST API
sidebar_position: 1
_i18n_hash: cabcc173f6a77e5de94e39fff19bc2fa
---
# Tagairt REST API

## Bunchumraíocht {#base-configuration}

**Base URL:** `{site_url}/wp-json/wu/v2/`
**Fíordheimhniú:** API Key & Secret (HTTP Basic Auth nó Paraiméadair URL)

## Fíordheimhniú {#authentication}

### Cumasaigh API {#enable-api}
```php
// Enable API in Ultimate Multisite settings or programmatically
wu_save_setting('enable_api', true);
```

### Faigh Dintiúir API {#get-api-credentials}
```php
$api_key = wu_get_setting('api_key');
$api_secret = wu_get_setting('api_secret');
```

### Modhanna Fíordheimhnithe {#authentication-methods}

**HTTP Basic Auth (Molta):**
```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

**Paraiméadair URL:**
```bash
curl "https://yoursite.com/wp-json/wu/v2/customers?api_key=your_key&api_secret=your_secret"
```

## Príomhchríochphointí {#core-endpoints}

### 1. API Custaiméirí {#1-customers-api}

**Bunbhealach:** `/customers`

**Faigh Gach Custaiméir**
```http
GET /wu/v2/customers
```

**Faigh Custaiméir Aonair**
```http
GET /wu/v2/customers/{id}
```

**Cruthaigh Custaiméir**
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

**Nuashonraigh Custaiméir**
```http
PUT /wu/v2/customers/{id}
Content-Type: application/json

{
    "vip": true,
    "extra_information": "VIP customer notes"
}
```

**Scrios Custaiméir**
```http
DELETE /wu/v2/customers/{id}
```

### 2. API Suíomhanna {#2-sites-api}

**Bunbhealach:** `/sites`

**Cruthaigh Suíomh**
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

### 3. API Ballraíochtaí {#3-memberships-api}

**Bunbhealach:** `/memberships`

**Cruthaigh Ballraíocht**
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

### 4. API Táirgí {#4-products-api}

**Bunbhealach:** `/products`

**Faigh Gach Táirge**
```http
GET /wu/v2/products
```

### 5. API Íocaíochtaí {#5-payments-api}

**Bunbhealach:** `/payments`

**Cruthaigh Íocaíocht**
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

### 6. API Fearann {#6-domains-api}

**Bunbhealach:** `/domains`

**Mapáil Fearann**
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

## Críochphointe Clárúcháin {#registration-endpoint}

Soláthraíonn an críochphointe `/register` sreabhadh iomlán seiceála amach/clárúcháin:

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

**Freagairt:**
```json
{
    "customer": { ... },
    "membership": { ... },
    "payment": { ... },
    "site": { "id": 123 }
}
```

## Críochphointí Tionóntaí Ceannasacha {#sovereign-tenant-endpoints}

Cuireann Ultimate Multisite: Multi-Tenancy 1.2.0 clúdach REST do thionóntaí ceannasacha leis le haghaidh comhtháthuithe a dhéanann soláthar, iniúchadh, nó fíorú ar thionóntaí leithlisithe.

Braitheann an pálasta iarratais cruinn ar chumas cumasaithe an óstaigh, ach ba cheart do chomhtháthuithe a bheith ag súil leis na grúpaí críochphointí seo:

```http
POST /wu/v2/tenants/{site_id}/bootstrap
GET /wu/v2/tenants/{site_id}/migration-status
POST /wu/v2/tenants/{site_id}/verify
DELETE /wu/v2/tenants/{site_id}
```

Úsáid an críochphointe bootstrap chun staid chlárlann, bhunachar sonraí, chóras comhad, agus ródaithe an tionónta a ullmhú. Úsáid críochphointí stádais imirce agus fíoraithe sula n-aistrítear trácht táirgthe. Úsáid an críochphointe scriosta le haghaidh díchoimisiúnú ceannasach ionas go mbainfear dintiúir bunachair sonraí tríd an sreabhadh glanta breiseáin.

Áirítear ar ghnáthfhreagairtí stádais imirce:

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

Caith le `ready: false` mar bhacóir réamh-sheolta. Seiceáil sonraí an fhíoraithe, ceartaigh ceangal óstaigh an bhunachair sonraí, an ciú, soláthar úsáideora, nó fadhb ródaithe, ansin déan an fíorú arís.

## Freagairtí Earráide {#error-responses}

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

## Leathanachú agus Scagadh {#pagination-and-filtering}

**Paraiméadair Iarratais:**
```http
GET /wu/v2/customers?per_page=20&page=2&search=john&status=active
```

Paraiméadair choitianta:
- `per_page` - Míreanna in aghaidh an leathanaigh (réamhshocrú: 20, uasmhéid: 100)
- `page` - Uimhir leathanaigh
- `search` - Téarma cuardaigh
- `orderby` - Réimse sórtála
- `order` - Treo sórtála (asc/desc)
- `status` - Scag de réir stádais
- `date_created` - Scag de réir raon dátaí
