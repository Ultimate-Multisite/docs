---
title: Přehled REST API
sidebar_position: 1
_i18n_hash: 4e511d92e0002dff445f45ff05adbeda
---
# Reference REST API

## Základní konfigurace

**Základní URL:** `{site_url}/wp-json/wu/v2/`
**Autentizace:** API klíč a tajný heslo (HTTP Basic Auth nebo parametry URL)

## Autentizace

### Aktivace API
```php
// Aktivuje API v nastavení Ultimate Multisite nebo programově
wu_save_setting('enable_api', true);
```

### Získání API údajů
```php
$api_key = wu_get_setting('api_key');
$api_secret = wu_get_setting('api_secret');
```

### Metody autentizace

**HTTP Basic Auth (Doporučeno):**
```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

**Parametry URL:**
```bash
curl "https://yoursite.com/wp-json/wu/v2/customers?api_key=your_key&api_secret=your_secret"
```

## Základní Endpoints

### 1. API zákazníků (Customers API)

**Základní cesta:** `/customers`

**Získat všechny zákazníky**
```http
GET /wu/v2/customers
```

**Získat jednoho zákazníka**
```http
GET /wu/v2/customers/{id}
```

**Vytvořit zákazníka**
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

**Aktualizovat zákazníka**
```http
PUT /wu/v2/customers/{id}
Content-Type: application/json

{
    "vip": true,
    "extra_information": "Poznámky pro VIP zákazníka"
}
```

**Smazat zákazníka**
```http
DELETE /wu/v2/customers/{id}
```

### 2. API webových stránek (Sites API)

**Základní cesta:** `/sites`

**Vytvořit webovou stránku**
```http
POST /wu/v2/sites
Content-Type: application/json

{
    "customer_id": 5,
    "membership_id": 10,
    "domain": "example.com",
    "path": "/",
    "title": "Moje nová stránka",
    "template_id": 1,
    "type": "customer_owned"
}
```

### 3. API členství (Memberships API)

**Základní cesta:** `/memberships`

**Vytvořit členství**
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

### 4. API produktů (Products API)

**Základní cesta:** `/products`

**Získat všechny produkty**
```http
GET /wu/v2/products
```

### 5. API plateb (Payments API)

**Základní cesta:** `/payments`

**Vytvořit platbu**
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

### 6. API domén (Domains API)

**Základní cesta:** `/domains`

**Mapování domény**
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

## Endpoint pro registraci

Endpoint `/register` poskytuje kompletní proces pro dokončení objednávky/registrace:

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
        "site_title": "Moje nová stránka",
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

**Odpověď:**
```json
{
    "customer": { ... },
    "membership": { ... },
    "payment": { ... },
    "site": { "id": 123 }
}
```

## Chyby při odezvě

```json
{
    "code": "wu_rest_invalid_parameter",
    "message": "Neplatná hodnota parametru",
    "data": {
        "status": 400,
        "params": {
            "email": "Neplatný formát e-mailu"
        }
    }
}
```

## Paginační parametry a filtrování

**Parametry dotazu:**
```http
GET /wu/v2/customers?per_page=20&page=2&search=john&status=active
```

Obecní parametry:
- `per_page` - Počet položek na stránce (výchozí: 20, max: 100)
- `page` - Číslo stránky
- `search` - Vyhledávací výraz
- `orderby` - Pole pro seřazení
- `order` - Směr seřazení (asc/desc)
- `status` - Filtrování podle stavu
- `date_created` - Filtrování podle rozmezí dat
