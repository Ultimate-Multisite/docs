---
title: Apèsi jeneral sou REST API
sidebar_position: 1
_i18n_hash: cabcc173f6a77e5de94e39fff19bc2fa
---
# Referans REST API

## Konfigirasyon Baz {#base-configuration}

**URL Baz:** `{site_url}/wp-json/wu/v2/`
**Otantifikasyon:** Kle API ak Sekrè (HTTP Basic Auth oswa Paramèt URL)

## Otantifikasyon {#authentication}

### Aktive API {#enable-api}
```php
// Enable API in Ultimate Multisite settings or programmatically
wu_save_setting('enable_api', true);
```

### Jwenn Idantifyan API {#get-api-credentials}
```php
$api_key = wu_get_setting('api_key');
$api_secret = wu_get_setting('api_secret');
```

### Metòd Otantifikasyon {#authentication-methods}

**HTTP Basic Auth (Rekòmande):**
```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

**Paramèt URL:**
```bash
curl "https://yoursite.com/wp-json/wu/v2/customers?api_key=your_key&api_secret=your_secret"
```

## Pwen Final Prensipal yo {#core-endpoints}

### 1. API Kliyan {#1-customers-api}

**Wout Baz:** `/customers`

**Jwenn Tout Kliyan yo**
```http
GET /wu/v2/customers
```

**Jwenn Yon Sèl Kliyan**
```http
GET /wu/v2/customers/{id}
```

**Kreye Kliyan**
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

**Mete Kliyan Ajou**
```http
PUT /wu/v2/customers/{id}
Content-Type: application/json

{
    "vip": true,
    "extra_information": "VIP customer notes"
}
```

**Efase Kliyan**
```http
DELETE /wu/v2/customers/{id}
```

### 2. API Sit yo {#2-sites-api}

**Wout Baz:** `/sites`

**Kreye Sit**
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

### 3. API Abònman yo {#3-memberships-api}

**Wout Baz:** `/memberships`

**Kreye Abònman**
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

### 4. API Pwodwi yo {#4-products-api}

**Wout Baz:** `/products`

**Jwenn Tout Pwodwi yo**
```http
GET /wu/v2/products
```

### 5. API Peman yo {#5-payments-api}

**Wout Baz:** `/payments`

**Kreye Peman**
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

### 6. API Domèn yo {#6-domains-api}

**Wout Baz:** `/domains`

**Mape Domèn**
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

## Pwen Final Enskripsyon {#registration-endpoint}

Pwen final `/register` la bay yon koule checkout/enskripsyon konplè:

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

**Repons:**
```json
{
    "customer": { ... },
    "membership": { ... },
    "payment": { ... },
    "site": { "id": 123 }
}
```

## Pwen Final Lokatè Souvren yo {#sovereign-tenant-endpoints}

Ultimate Multisite: Multi-Tenancy 1.2.0 ajoute kouvèti REST pou lokatè souvren pou entegrasyon ki pwovizyone, enspekte, oswa verifye lokatè izole yo.

Chaj demann egzak la depann de kapasite host ki aktive a, men entegrasyon yo ta dwe atann gwoup pwen final sa yo:

```http
POST /wu/v2/tenants/{site_id}/bootstrap
GET /wu/v2/tenants/{site_id}/migration-status
POST /wu/v2/tenants/{site_id}/verify
DELETE /wu/v2/tenants/{site_id}
```

Sèvi ak pwen final bootstrap la pou prepare rejis lokatè a, baz done, sistèm fichye, ak eta routaj la. Sèvi ak pwen final estati migrasyon ak verifikasyon yo anvan ou chanje trafik pwodiksyon an. Sèvi ak pwen final efasman an pou demantèlman souvren pou yo retire idantifyan baz done yo atravè koule netwayaj modil siplemantè a.

Repons tipik pou estati migrasyon gen ladan:

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

Trete `ready: false` kòm yon blokaj anvan lansman. Tcheke detay verifikasyon yo, korije atachman host baz done a, keu a, pwovizyon itilizatè a, oswa pwoblèm routaj la, epi eseye verifikasyon ankò.

## Repons Erè {#error-responses}

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

## Pajinen ak Filtraj {#pagination-and-filtering}

**Paramèt Rekèt:**
```http
GET /wu/v2/customers?per_page=20&page=2&search=john&status=active
```

Paramèt komen:
- `per_page` - Atik pa paj (defo: 20, maksimòm: 100)
- `page` - Nimewo paj
- `search` - Tèm rechèch
- `orderby` - Chan tri
- `order` - Direksyon tri (asc/desc)
- `status` - Filtre pa estati
- `date_created` - Filtre pa entèval dat
