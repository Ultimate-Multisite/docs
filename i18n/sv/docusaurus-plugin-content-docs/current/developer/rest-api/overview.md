---
title: Översikt över REST API
sidebar_position: 1
_i18n_hash: 4e511d92e0002dff445f45ff05adbeda
---
# REST API Referens

## Grundkonfiguration

**Bas-URL:** `{site_url}/wp-json/wu/v2/`
**Autentisering:** API Key & Secret (HTTP Basic Auth eller URL-parametrar)

## Autentisering

### Aktivera API
```php
// Aktivera API i Ultimate Multisite-inställningarna eller programmeringsmässigt
wu_save_setting('enable_api', true);
```

### Hämta API-uppgifter
```php
$api_key = wu_get_setting('api_key');
$api_secret = wu_get_setting('api_secret');
```

### Autentiseringsmetoder

**HTTP Basic Auth (Rekommenderas):**
```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

**URL-parametrar:**
```bash
curl "https://yoursite.com/wp-json/wu/v2/customers?api_key=your_key&api_secret=your_secret"
```

## Kärn-endpoints

### 1. Kunder API

**Bas-rutt:** `/customers`

**Hämta alla kunder**
```http
GET /wu/v2/customers
```

**Hämta enskild kund**
```http
GET /wu/v2/customers/{id}
```

**Skapa kund**
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

**Uppdatera kund**
```http
PUT /wu/v2/customers/{id}
Content-Type: application/json

{
    "vip": true,
    "extra_information": "VIP-kundanteckningar"
}
```

**Ta bort kund**
```http
DELETE /wu/v2/customers/{id}
```

### 2. Webbplatser API

**Bas-rutt:** `/sites`

**Skapa webbplats**
```http
POST /wu/v2/sites
Content-Type: application/json

{
    "customer_id": 5,
    "membership_id": 10,
    "domain": "example.com",
    "path": "/",
    "title": "Min nya webbplats",
    "template_id": 1,
    "type": "customer_owned"
}
```

### 3. Medlemskap API

**Bas-rutt:** `/memberships`

**Skapa medlemskap**
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

### 4. Produkter API

**Bas-rutt:** `/products`

**Hämta alla produkter**
```http
GET /wu/v2/products
```

### 5. Betalningar API

**Bas-rutt:** `/payments`

**Skapa betalning**
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

### 6. Domäner API

**Bas-rutt:** `/domains`

**Mappa domän**
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

## Registrerings-endpoint

Endpointet `/register` hanterar hela flödet för kassa/registrering:

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
        "site_title": "Min nya webbplats",
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

## Felmeddelanden

```json
{
    "code": "wu_rest_invalid_parameter",
    "message": "Ogiltigt parametervärde",
    "data": {
        "status": 400,
        "params": {
            "email": "Ogiltigt e-postformat"
        }
    }
}
```

## Paginering och Filtrering

**Query-parametrar:**
```http
GET /wu/v2/customers?per_page=20&page=2&search=john&status=active
```

Vanliga parametrar:
- `per_page` - Antal poster per sida (standard: 20, max: 100)
- `page` - Sidanummer
- `search` - Sökterm
- `orderby` - Fält att sortera efter
- `order` - Sorteringsriktning (asc/desc)
- `status` - Filtrera efter status
- `date_created` - Filtrera efter datumintervall
