---
title: Conspectus REST API
sidebar_position: 1
_i18n_hash: cabcc173f6a77e5de94e39fff19bc2fa
---
# Relatio REST API {#rest-api-reference}

## Configuratio Basis {#base-configuration}

**URL Basis:** `{site_url}/wp-json/wu/v2/`
**Authenticatio:** API Key & Secret (HTTP Basic Auth aut URL Parametri)

## Authenticatio {#authentication}

### API Activare {#enable-api}
```php
// Enable API in Ultimate Multisite settings or programmatically
wu_save_setting('enable_api', true);
```

### API Credentials Accipere {#get-api-credentials}
```php
$api_key = wu_get_setting('api_key');
$api_secret = wu_get_setting('api_secret');
```

### Methodi Authenticationis {#authentication-methods}

**HTTP Basic Auth (Commendatum):**
```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

**URL Parametri:**
```bash
curl "https://yoursite.com/wp-json/wu/v2/customers?api_key=your_key&api_secret=your_secret"
```

## Endpointa Principalia {#core-endpoints}

### 1. API Clientium {#1-customers-api}

**Iter Basis:** `/customers`

**Omnes Clientes Accipere**
```http
GET /wu/v2/customers
```

**Unum Clientem Accipere**
```http
GET /wu/v2/customers/{id}
```

**Clientem Creare**
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

**Clientem Renovare**
```http
PUT /wu/v2/customers/{id}
Content-Type: application/json

{
    "vip": true,
    "extra_information": "VIP customer notes"
}
```

**Clientem Delere**
```http
DELETE /wu/v2/customers/{id}
```

### 2. API Sitorum {#2-sites-api}

**Iter Basis:** `/sites`

**Situm Creare**
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

### 3. API Membershipum {#3-memberships-api}

**Iter Basis:** `/memberships`

**Membership Creare**
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

### 4. API Productorum {#4-products-api}

**Iter Basis:** `/products`

**Omnia Producta Accipere**
```http
GET /wu/v2/products
```

### 5. API Solutionum {#5-payments-api}

**Iter Basis:** `/payments`

**Solutionem Creare**
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

### 6. API Dominiorum {#6-domains-api}

**Iter Basis:** `/domains`

**Dominium Mappare**
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

## Endpoint Registrationis {#registration-endpoint}

Endpoint `/register` integrum fluxum checkout/registrationis praebet:

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

**Responsum:**
```json
{
    "customer": { ... },
    "membership": { ... },
    "payment": { ... },
    "site": { "id": 123 }
}
```

## Endpointa Tenantium Sui Iuris {#sovereign-tenant-endpoints}

Ultimate Multisite: Multi-Tenancy 1.2.0 addit tegumentum REST tenantium sui iuris pro integrationibus quae tenantes segregatos provisionant, inspiciunt, aut verificent.

Exactum onus petitionis pendet ex facultate hospitis activa, sed integrationes hos greges endpointorum exspectare debent:

```http
POST /wu/v2/tenants/{site_id}/bootstrap
GET /wu/v2/tenants/{site_id}/migration-status
POST /wu/v2/tenants/{site_id}/verify
DELETE /wu/v2/tenants/{site_id}
```

Utere endpoint bootstrap ad registrum tenantis, basin datorum, systema fasciculorum, et statum itinerationis praeparanda. Utere endpointis status migrationis et verificationis antequam commeatum productionis commutes. Utere endpoint deletionis ad dissolutionem sui iuris, ut credentialia basis datorum per fluxum purgationis addon removeantur.

Responsa typica status migrationis includunt:

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

Tracta `ready: false` ut impedimentum ante emissionem. Inspice singula verificationis, corrige ligamen hospitis basis datorum, caudam, provisioning usoris, aut quaestionem itinerationis, deinde verificationem iterum tenta.

## Responsa Errorum {#error-responses}

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

## Paginatio et Filtratio {#pagination-and-filtering}

**Parametri Quaestionis:**
```http
GET /wu/v2/customers?per_page=20&page=2&search=john&status=active
```

Parametri communes:
- `per_page` - Res per paginam (praedefinitum: 20, maximum: 100)
- `page` - Numerus paginae
- `search` - Terminus quaerendi
- `orderby` - Campus ordinationis
- `order` - Directio ordinationis (asc/desc)
- `status` - Filtrare secundum statum
- `date_created` - Filtrare secundum intervallum datorum
