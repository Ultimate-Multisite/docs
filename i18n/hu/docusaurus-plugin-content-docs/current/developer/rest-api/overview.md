---
title: REST API áttekintése
sidebar_position: 1
_i18n_hash: 4e511d92e0002dff445f45ff05adbeda
---
# REST API Referencia

## Alapkonfiguráció

**Alap URL:** `{site_url}/wp-json/wu/v2/`
**Hitelesítés:** API Kulcs és Titkos Jelszó (HTTP Basic Auth vagy URL Paraméterek)

## Hitelesítés

### API Aktiválása
```php
// Aktiválja az API-t az Ultimate Multisite beállításain keresztül vagy programomileg
wu_save_setting('enable_api', true);
```

### API Adatok Lekérése
```php
$api_key = wu_get_setting('api_key');
$api_secret = wu_get_setting('api_secret');
```

### Hitelesítési Módszerek

**HTTP Basic Auth (Ajánlott):**
```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

**URL Paraméterek:**
```bash
curl "https://yoursite.com/wp-json/wu/v2/customers?api_key=your_key&api_secret=your_secret"
```

## Központi Endpointek

### 1. Ügyfél API

**Alap Útvonal:** `/customers`

**Az összes ügyfél lekérése**
```http
GET /wu/v2/customers
```

**Egyetlen ügyfél lekérése**
```http
GET /wu/v2/customers/{id}
```

**Ügyfél létrehozása**
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

**Ügyfél frissítése**
```http
PUT /wu/v2/customers/{id}
Content-Type: application/json

{
    "vip": true,
    "extra_information": "VIP ügyfél jegyzet"
}
```

**Ügyfél törlése**
```http
DELETE /wu/v2/customers/{id}
```

### 2. Oldaltípus API (Sites API)

**Alap Útvonal:** `/sites`

**Oldaltípus létrehozása**
```http
POST /wu/v2/sites
Content-Type: application/json

{
    "customer_id": 5,
    "membership_id": 10,
    "domain": "example.com",
    "path": "/",
    "title": "Az új oldalak neve",
    "template_id": 1,
    "type": "customer_owned"
}
```

### 3. Tagság API (Memberships API)

**Alap Útvonal:** `/memberships`

**Tagság létrehozása**
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

### 4. Termékek API (Products API)

**Alap Útvonal:** `/products`

**Az összes termék lekérése**
```http
GET /wu/v2/products
```

### 5. Fizetési API (Payments API)

**Alap Útvonal:** `/payments`

**Fizetés létrehozása**
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

### 6. Domain API (Domains API)

**Alap Útvonal:** `/domains`

**Domain mappolása**
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

## Regisztrációs Endpoint

Az `/register` endpoint egy teljes checkout/regisztrációs folyamatot biztosít:

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
        "site_title": "Az új oldalak neve",
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

**Válasz (Response):**
```json
{
    "customer": { ... },
    "membership": { ... },
    "payment": { ... },
    "site": { "id": 123 }
}
```

## Hiba Válaszok (Error Responses)

```json
{
    "code": "wu_rest_invalid_parameter",
    "message": "Érvénytelen paraméter érték",
    "data": {
        "status": 400,
        "params": {
            "email": "Érvénytelen e-mail formátum"
        }
    }
}
```

## Oldalazítás és Szűrés (Pagination and Filtering)

**Kérdezési Paraméterek (Query Parameters):**
```http
GET /wu/v2/customers?per_page=20&page=2&search=john&status=active
```

Gyakran használt paraméterek:
- `per_page` - Elemei száma per oldal (alapértelmezett: 20, maximális: 100)
- `page` - Oldalszám
- `search` - Keresőszó
- `orderby` - Rendezési mező
- `order` - Rendezési irány (asc/desc)
- `status` - Szűrés a státusz szerint
- `date_created` - Szűrés dátumtartomány szerint
