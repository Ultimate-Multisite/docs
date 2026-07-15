---
title: REST API umumy syn
sidebar_position: 1
_i18n_hash: cabcc173f6a77e5de94e39fff19bc2fa
---
# REST API salgylanmasy

## Esasy konfigurasiýa {#base-configuration}

**Esasy URL:** `{site_url}/wp-json/wu/v2/`
**Autentifikasiýa:** API açary we gizlin açar (HTTP Basic Auth ýa-da URL parametrleri)

## Autentifikasiýa {#authentication}

### API-ni işjeňleşdirmek {#enable-api}
```php
// Enable API in Ultimate Multisite settings or programmatically
wu_save_setting('enable_api', true);
```

### API maglumatlaryny almak {#get-api-credentials}
```php
$api_key = wu_get_setting('api_key');
$api_secret = wu_get_setting('api_secret');
```

### Autentifikasiýa usullary {#authentication-methods}

**HTTP Basic Auth (maslahat berilýär):**
```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

**URL parametrleri:**
```bash
curl "https://yoursite.com/wp-json/wu/v2/customers?api_key=your_key&api_secret=your_secret"
```

## Esasy endpointler {#core-endpoints}

### 1. Müşderiler API-si {#1-customers-api}

**Esasy ugur:** `/customers`

**Ähli müşderileri almak**
```http
GET /wu/v2/customers
```

**Ýeke müşderini almak**
```http
GET /wu/v2/customers/{id}
```

**Müşderi döretmek**
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

**Müşderini täzelemek**
```http
PUT /wu/v2/customers/{id}
Content-Type: application/json

{
    "vip": true,
    "extra_information": "VIP customer notes"
}
```

**Müşderini pozmak**
```http
DELETE /wu/v2/customers/{id}
```

### 2. Saýtlar API-si {#2-sites-api}

**Esasy ugur:** `/sites`

**Saýt döretmek**
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

### 3. Agzalyklar API-si {#3-memberships-api}

**Esasy ugur:** `/memberships`

**Agzalyk döretmek**
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

### 4. Önümler API-si {#4-products-api}

**Esasy ugur:** `/products`

**Ähli önümleri almak**
```http
GET /wu/v2/products
```

### 5. Tölegler API-si {#5-payments-api}

**Esasy ugur:** `/payments`

**Töleg döretmek**
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

### 6. Domenler API-si {#6-domains-api}

**Esasy ugur:** `/domains`

**Domeni baglamak**
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

## Hasaba alyş endpointi {#registration-endpoint}

`/register` endpointi doly checkout/hasaba alyş akymyny üpjün edýär:

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

**Jogap:**
```json
{
    "customer": { ... },
    "membership": { ... },
    "payment": { ... },
    "site": { "id": 123 }
}
```

## Özbaşdak tenant endpointleri {#sovereign-tenant-endpoints}

Ultimate Multisite: Multi-Tenancy 1.2.0 izolirlenen tenantlary üpjün edýän, barlaýan ýa-da tassyklanýan integrasiýalar üçin özbaşdak tenant REST örtügini goşýar.

Takyk haýyş payload-y işjeňleşdirilen host mümkinçiliklerine bagly, ýöne integrasiýalar şu endpoint toparlaryna garaşmalydyr:

```http
POST /wu/v2/tenants/{site_id}/bootstrap
GET /wu/v2/tenants/{site_id}/migration-status
POST /wu/v2/tenants/{site_id}/verify
DELETE /wu/v2/tenants/{site_id}
```

Tenant registrini, maglumatlar binýadyny, faýl ulgamyny we marşrutlama ýagdaýyny taýýarlamak üçin bootstrap endpointini ulanyň. Önümçilik traffigini geçirmezden öň migrasiýa ýagdaýy we tassyklama endpointlerini ulanyň. Maglumatlar binýadynyň giriş maglumatlary addon arassalama akymy arkaly aýrylar ýaly, özbaşdak sökmek üçin pozmak endpointini ulanyň.

Adaty migrasiýa ýagdaýy jogaplary şulary öz içine alýar:

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

`ready: false` ýagdaýyny işe goýberişden öňki päsgelçilik hökmünde kabul ediň. Tassyklama jikme-jikliklerini barlaň, maglumatlar binýadynyň host baglanyşygyny, nobaty, ulanyjy üpjünçiligini ýa-da marşrutlama meselesini düzediň, soňra tassyklamany gaýtadan synanyşyň.

## Ýalňyşlyk jogaplary {#error-responses}

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

## Sahypalama we filtrleme {#pagination-and-filtering}

**Sorag parametrleri:**
```http
GET /wu/v2/customers?per_page=20&page=2&search=john&status=active
```

Umumy parametrler:
- `per_page` - Her sahypadaky elementler (deslapky: 20, iň köp: 100)
- `page` - Sahypa belgisi
- `search` - Gözleg termini
- `orderby` - Tertipleme meýdany
- `order` - Tertipleme ugry (asc/desc)
- `status` - Ýagdaý boýunça filtrlemek
- `date_created` - Sene aralygy boýunça filtrlemek
