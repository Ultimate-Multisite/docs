---
title: Kakaretso ea REST API
sidebar_position: 1
_i18n_hash: cabcc173f6a77e5de94e39fff19bc2fa
---
# Tshupiso ya REST API

## Tlhophiso ya Motheo {#base-configuration}

**URL ya Motheo:** `{site_url}/wp-json/wu/v2/`
**Netefatso:** API Key le Sephiri (HTTP Basic Auth kapa Dipharaemitha tsa URL)

## Netefatso {#authentication}

### Nolofalletsa API {#enable-api}
```php
// Enable API in Ultimate Multisite settings or programmatically
wu_save_setting('enable_api', true);
```

### Fumana Dintlha tsa API {#get-api-credentials}
```php
$api_key = wu_get_setting('api_key');
$api_secret = wu_get_setting('api_secret');
```

### Mekgwa ya Netefatso {#authentication-methods}

**HTTP Basic Auth (E kgothaletswa):**
```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

**Dipharaemitha tsa URL:**
```bash
curl "https://yoursite.com/wp-json/wu/v2/customers?api_key=your_key&api_secret=your_secret"
```

## Dintlha tsa Pheletso tsa Mantlha {#core-endpoints}

### 1. API ya Bareki {#1-customers-api}

**Tsela ya Motheo:** `/customers`

**Fumana Bareki Bohle**
```http
GET /wu/v2/customers
```

**Fumana Moreki a le Mong**
```http
GET /wu/v2/customers/{id}
```

**Theha Moreki**
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

**Ntjhafatsa Moreki**
```http
PUT /wu/v2/customers/{id}
Content-Type: application/json

{
    "vip": true,
    "extra_information": "VIP customer notes"
}
```

**Hlakola Moreki**
```http
DELETE /wu/v2/customers/{id}
```

### 2. API ya Disaete {#2-sites-api}

**Tsela ya Motheo:** `/sites`

**Theha Saete**
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

### 3. API ya Botho {#3-memberships-api}

**Tsela ya Motheo:** `/memberships`

**Theha Botho**
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

### 4. API ya Dihlahiswa {#4-products-api}

**Tsela ya Motheo:** `/products`

**Fumana Dihlahiswa Tsohle**
```http
GET /wu/v2/products
```

### 5. API ya Ditefo {#5-payments-api}

**Tsela ya Motheo:** `/payments`

**Theha Tefo**
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

### 6. API ya Didomain {#6-domains-api}

**Tsela ya Motheo:** `/domains`

**Mapha Domain**
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

## Ntlha ya Pheletso ya Ngodiso {#registration-endpoint}

Ntlha ya pheletso ya `/register` e fana ka phallo e feletseng ya checkout/ngodiso:

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

**Karabo:**
```json
{
    "customer": { ... },
    "membership": { ... },
    "payment": { ... },
    "site": { "id": 123 }
}
```

## Dintlha tsa Pheletso tsa Bahiri ba Ikemetseng {#sovereign-tenant-endpoints}

Ultimate Multisite: Multi-Tenancy 1.2.0 e eketsa kgaso ya REST bakeng sa bahiri ba ikemetseng bakeng sa dikopanyo tse fanang, tse hlahlobang, kapa tse netefatsang bahiri ba arotsweng.

Payload e nepahetseng ya kopo e itshetlehile ka bokgoni ba host bo nolofaditsweng, empa dikopanyo di lokela ho lebella dihlopha tsena tsa dintlha tsa pheletso:

```http
POST /wu/v2/tenants/{site_id}/bootstrap
GET /wu/v2/tenants/{site_id}/migration-status
POST /wu/v2/tenants/{site_id}/verify
DELETE /wu/v2/tenants/{site_id}
```

Sebedisa ntlha ya pheletso ya bootstrap ho lokisa rejisetara ya mohiri, database, filesystem, le boemo ba routing. Sebedisa dintlha tsa pheletso tsa boemo ba phalliso le netefatso pele o fetisetsa sephethephethe sa tlhahiso. Sebedisa ntlha ya pheletso ya ho hlakola bakeng sa ho qhaqha ha boikemelo hore dintlha tsa database di tloswe ka phallo ya ho hlwekisa ya addon.

Dikarabo tse tlwaelehileng tsa boemo ba phalliso di kenyeletsa:

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

Tshwara `ready: false` jwalo ka thibelo ya pele ho phatlalatso. Hlahloba dintlha tsa netefatso, lokisa tlamahano ya host ya database, queue, phepelo ya mosebedisi, kapa bothata ba routing, ebe o leka netefatso hape.

## Dikarabo tsa Diphoso {#error-responses}

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

## Pagination le ho Sefa {#pagination-and-filtering}

**Dipharaemitha tsa Potso:**
```http
GET /wu/v2/customers?per_page=20&page=2&search=john&status=active
```

Dipharaemitha tse tlwaelehileng:
- `per_page` - Dintho ka leqephe (ya kamehla: 20, boholo: 100)
- `page` - Nomoro ya leqephe
- `search` - Lereo la ho batla
- `orderby` - Lebala la ho hlophisa
- `order` - Tataiso ya ho hlophisa (asc/desc)
- `status` - Sefa ka boemo
- `date_created` - Sefa ka sebaka sa matsatsi
