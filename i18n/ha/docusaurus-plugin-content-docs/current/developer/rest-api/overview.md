---
title: Bayani Gabaɗaya na REST API
sidebar_position: 1
_i18n_hash: cabcc173f6a77e5de94e39fff19bc2fa
---
# Manazartar REST API

## Daidaitawar Tushe

**Base URL:** `{site_url}/wp-json/wu/v2/`
**Authentication:** API Key & Secret (HTTP Basic Auth ko URL Parameters)

## Authentication

### Kunna API
```php
// Enable API in Ultimate Multisite settings or programmatically
wu_save_setting('enable_api', true);
```

### Samu Takardun Shaidar API
```php
$api_key = wu_get_setting('api_key');
$api_secret = wu_get_setting('api_secret');
```

### Hanyoyin Authentication

**HTTP Basic Auth (An ba da shawara):**
```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

**URL Parameters:**
```bash
curl "https://yoursite.com/wp-json/wu/v2/customers?api_key=your_key&api_secret=your_secret"
```

## Muhimman Endpoints

### 1. Customers API

**Base Route:** `/customers`

**Samu Duk Customers**
```http
GET /wu/v2/customers
```

**Samu Customer Guda**
```http
GET /wu/v2/customers/{id}
```

**Ƙirƙiri Customer**
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

**Sabunta Customer**
```http
PUT /wu/v2/customers/{id}
Content-Type: application/json

{
    "vip": true,
    "extra_information": "VIP customer notes"
}
```

**Share Customer**
```http
DELETE /wu/v2/customers/{id}
```

### 2. Sites API

**Base Route:** `/sites`

**Ƙirƙiri Site**
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

**Base Route:** `/memberships`

**Ƙirƙiri Membership**
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

**Base Route:** `/products`

**Samu Duk Products**
```http
GET /wu/v2/products
```

### 5. Payments API

**Base Route:** `/payments`

**Ƙirƙiri Payment**
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

**Base Route:** `/domains`

**Haɗa Domain**
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

## Endpoint na Rajista

Endpoint ɗin `/register` yana samar da cikakken tsarin checkout/rajista:

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

**Amsa:**
```json
{
    "customer": { ... },
    "membership": { ... },
    "payment": { ... },
    "site": { "id": 123 }
}
```

## Endpoints na Sovereign Tenant

Ultimate Multisite: Multi-Tenancy 1.2.0 yana ƙara rufin REST na sovereign tenant don haɗe-haɗe da ke tanada, dubawa, ko tabbatar da tenants masu keɓewa.

Ainihin nauyin buƙata ya dogara da ikon host da aka kunna, amma haɗe-haɗe ya kamata su yi tsammanin waɗannan rukunin endpoint:

```http
POST /wu/v2/tenants/{site_id}/bootstrap
GET /wu/v2/tenants/{site_id}/migration-status
POST /wu/v2/tenants/{site_id}/verify
DELETE /wu/v2/tenants/{site_id}
```

Yi amfani da endpoint na bootstrap don shirya rajistar tenant, database, filesystem, da yanayin routing. Yi amfani da endpoints na matsayin migration da tabbatarwa kafin sauya zirga-zirgar production. Yi amfani da endpoint na sharewa don rushewar sovereign domin a cire bayanan shaidar database ta hanyar tsarin tsabtace addon.

Amsoshin matsayin migration na yau da kullum sun haɗa da:

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

Ɗauki `ready: false` a matsayin abin toshewa kafin ƙaddamarwa. Duba cikakkun bayanan tabbatarwa, gyara haɗin host na database, queue, tanadar user, ko matsalar routing, sannan sake gwada tabbatarwa.

## Amsoshin Kuskure

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

## Raba Shafuka da Tacewa

**Query Parameters:**
```http
GET /wu/v2/customers?per_page=20&page=2&search=john&status=active
```

Sigogi na gama gari:
- `per_page` - Abubuwa a kowane shafi (tsoho: 20, mafi yawa: 100)
- `page` - Lambar shafi
- `search` - Kalmar nema
- `orderby` - Filin jera
- `order` - Hanyar jera (asc/desc)
- `status` - Tace bisa status
- `date_created` - Tace bisa zangon kwanan wata
