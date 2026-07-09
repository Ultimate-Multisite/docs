---
title: Uhlolojikelele lwe-REST API
sidebar_position: 1
_i18n_hash: cabcc173f6a77e5de94e39fff19bc2fa
---
# Inkomba ye-REST API

## Ukulungiselelwa Okuyisisekelo

**Base URL:** `{site_url}/wp-json/wu/v2/`
**Ukuqinisekisa:** API Key & Secret (HTTP Basic Auth noma URL Parameters)

## Ukuqinisekisa

### Nika amandla i-API
```php
// Enable API in Ultimate Multisite settings or programmatically
wu_save_setting('enable_api', true);
```

### Thola Imininingwane ye-API
```php
$api_key = wu_get_setting('api_key');
$api_secret = wu_get_setting('api_secret');
```

### Izindlela Zokuqinisekisa

**HTTP Basic Auth (Kunconyiwe):**
```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

**URL Parameters:**
```bash
curl "https://yoursite.com/wp-json/wu/v2/customers?api_key=your_key&api_secret=your_secret"
```

## Ama-endpoint Ayinhloko

### 1. Customers API

**Umzila Oyisisekelo:** `/customers`

**Thola Wonke Amakhasimende**
```http
GET /wu/v2/customers
```

**Thola Ikhasimende Elilodwa**
```http
GET /wu/v2/customers/{id}
```

**Dala Ikhasimende**
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

**Buyekeza Ikhasimende**
```http
PUT /wu/v2/customers/{id}
Content-Type: application/json

{
    "vip": true,
    "extra_information": "VIP customer notes"
}
```

**Susa Ikhasimende**
```http
DELETE /wu/v2/customers/{id}
```

### 2. Sites API

**Umzila Oyisisekelo:** `/sites`

**Dala Isayithi**
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

### 3. Memberships API

**Umzila Oyisisekelo:** `/memberships`

**Dala Ubulungu**
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

### 4. Products API

**Umzila Oyisisekelo:** `/products`

**Thola Yonke Imikhiqizo**
```http
GET /wu/v2/products
```

### 5. Payments API

**Umzila Oyisisekelo:** `/payments`

**Dala Inkokhelo**
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

### 6. Domains API

**Umzila Oyisisekelo:** `/domains`

**Xhumanisa Isizinda**
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

## I-endpoint Yokubhalisa

I-endpoint ethi `/register` ihlinzeka ngokugeleza okuphelele kwe-checkout/ukubhalisa:

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

**Impendulo:**
```json
{
    "customer": { ... },
    "membership": { ... },
    "payment": { ... },
    "site": { "id": 123 }
}
```

## Ama-endpoint e-Sovereign Tenant

Ultimate Multisite: Multi-Tenancy 1.2.0 yengeza ukumbozwa kwe-REST kwe-sovereign tenant ukuze kube nokuhlanganiswa okuhlinzeka, okuhlola, noma okuqinisekisa ama-tenant ahlukanisiwe.

I-payload yesicelo eqondile incike ekhonweni le-host elinikwe amandla, kodwa ukuhlanganiswa kufanele kulindele lawa maqembu ama-endpoint:

```http
POST /wu/v2/tenants/{site_id}/bootstrap
GET /wu/v2/tenants/{site_id}/migration-status
POST /wu/v2/tenants/{site_id}/verify
DELETE /wu/v2/tenants/{site_id}
```

Sebenzisa i-endpoint ye-bootstrap ukulungiselela irejista ye-tenant, database, filesystem, nesimo se-routing. Sebenzisa ama-endpoint esimo sokufuduka nokuqinisekisa ngaphambi kokushintsha ithrafikhi yokukhiqiza. Sebenzisa i-endpoint yokususa ekudilizeni kwe-sovereign ukuze imininingwane ye-database isuswe ngokugeleza kokuhlanza kwe-addon.

Izimpendulo ezivamile zesimo sokufuduka zifaka:

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

Phatha `ready: false` njengesivimbi sangaphambi kokwethula. Hlola imininingwane yokuqinisekisa, lungisa ukubophezela kwe-database host, ulayini, ukuhlinzekwa komsebenzisi, noma inkinga ye-routing, bese uzama ukuqinisekisa futhi.

## Izimpendulo Zamaphutha

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

## Ukuhlukanisa Ngamakhasi Nokuhlunga

**Amapharamitha Ombuzo:**
```http
GET /wu/v2/customers?per_page=20&page=2&search=john&status=active
```

Amapharamitha avamile:
- `per_page` - Izinto ngekhasi ngalinye (okuzenzakalelayo: 20, ubuningi: 100)
- `page` - Inombolo yekhasi
- `search` - Igama lokusesha
- `orderby` - Inkambu yokuhlela
- `order` - Isiqondiso sokuhlela (asc/desc)
- `status` - Hlunga ngesimo
- `date_created` - Hlunga ngobubanzi bedethi
