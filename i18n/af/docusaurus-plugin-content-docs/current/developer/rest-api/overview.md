---
title: Oorsig van die REST API
sidebar_position: 1
_i18n_hash: 4e511d92e0002dff445f45ff05adbeda
---
# REST API Verwysing

## Basiese Konfigurasie

**Basiese URL:** `{site_url}/wp-json/wu/v2/`
**Autentisering:** API Sleutel & Geheim (HTTP Basic Auth of URL Parameters)

## Autentisering

### API Aktiveer
```php
// Aktiveer API in Ultimate Multisite instellings of programmeermatig
wu_save_setting('enable_api', true);
```

### Haal API Credensiale
```php
$api_key = wu_get_setting('api_key');
$api_secret = wu_get_setting('api_secret');
```

### Autentisering Metodes

**HTTP Basic Auth (Aanbeveel):**
```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

**URL Parameters:**
```bash
curl "https://yoursite.com/wp-json/wu/v2/customers?api_key=your_key&api_secret=your_secret"
```

## Kern Eindpunte

### 1. Klante API

**Basering:** `/customers`

**Haal Alle Klante**
```http
GET /wu/v2/customers
```

**Haal Enkele Klant**
```http
GET /wu/v2/customers/{id}
```

**Skep Klant**
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

**Pas Klant aan**
```http
PUT /wu/v2/customers/{id}
Content-Type: application/json

{
    "vip": true,
    "extra_information": "VIP klant notas"
}
```

**Verwyder Klant**
```http
DELETE /wu/v2/customers/{id}
```

### 2. Sites API

**Basering:** `/sites`

**Skep Site**
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

### 3. Lidmaatskaps API

**Basering:** `/memberships`

**Skep Lidmaatskap**
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

### 4. Produkte API

**Basering:** `/products`

**Haal Alle Produkte**
```http
GET /wu/v2/products
```

### 5. Betalings API

**Basering:** `/payments`

**Skep Betaling**
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

### 6. Domeine API

**Basering:** `/domains`

**Koppel Domein**
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

## Registrasie Eindpunt

Die `/register` eindpunt bied 'n volledige kassa/registrasie proses:

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

**Antwoord:**
```json
{
    "customer": { ... },
    "membership": { ... },
    "payment": { ... },
    "site": { "id": 123 }
}
```

## Foutantwoorde

```json
{
    "code": "wu_rest_invalid_parameter",
    "message": "Ongeldige parameterwaarde",
    "data": {
        "status": 400,
        "params": {
            "email": "Ongeldige e-posformaat"
        }
    }
}
```

## Paginasering en Filtrering

**Navraagparameters:**
```http
GET /wu/v2/customers?per_page=20&page=2&search=john&status=active
```

Algemene parameters:
- `per_page` - Items per bladsy (standaard: 20, maks: 100)
- `page` - Bladsynommer
- `search` - Soekterm
- `orderby` - Sorteerveld
- `order` - Sorteerrigting (asc/desc)
- `status` - Filter volgens status
- `date_created` - Filter volgens datumbereik
