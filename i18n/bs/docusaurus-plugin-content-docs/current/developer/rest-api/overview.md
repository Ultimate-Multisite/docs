---
title: Pregled REST API-ja
sidebar_position: 1
_i18n_hash: 4e511d92e0002dff445f45ff05adbeda
---
# Referenca REST API-ja

## Osnovna konfiguracija

**Osnovna adresa (Base URL):** `{site_url}/wp-json/wu/v2/`
**Autentifikacija:** API Ključ i Tajna (HTTP Basic Auth ili URL Parametri)

## Autentifikacija

### Omogućavanje API-ja
```php
// Omogućite API u postavkama Ultimate Multisite ili programski
wu_save_setting('enable_api', true);
```

### Dohvaćanje API vjerodajnica
```php
$api_key = wu_get_setting('api_key');
$api_secret = wu_get_setting('api_secret');
```

### Metode autentifikacije

**HTTP Basic Auth (Preporučeno):**
```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

**URL Parametri:**
```bash
curl "https://yoursite.com/wp-json/wu/v2/customers?api_key=your_key&api_secret=your_secret"
```

## Osnovni Endpajnti

### 1. API za kupce (Customers API)

**Osnovna ruta (Base Route):** `/customers`

**Dohvati sve kupce (Get All Customers)**
```http
GET /wu/v2/customers
```

**Dohvati jednog kupca (Get Single Customer)**
```http
GET /wu/v2/customers/{id}
```

**Kreiraj kupca (Create Customer)**
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

**Ažuriraj kupca (Update Customer)**
```http
PUT /wu/v2/customers/{id}
Content-Type: application/json

{
    "vip": true,
    "extra_information": "Napomene za VIP kupca"
}
```

**Obriši kupca (Delete Customer)**
```http
DELETE /wu/v2/customers/{id}
```

### 2. API za sajtove (Sites API)

**Osnovna ruta (Base Route):** `/sites`

**Kreiraj sajt (Create Site)**
```http
POST /wu/v2/sites
Content-Type: application/json

{
    "customer_id": 5,
    "membership_id": 10,
    "domain": "example.com",
    "path": "/",
    "title": "Moj Novi Sajt",
    "template_id": 1,
    "type": "customer_owned"
}
```

### 3. API za članstva (Memberships API)

**Osnovna ruta (Base Route):** `/memberships`

**Kreiraj članstvo (Create Membership)**
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

### 4. API za proizvode (Products API)

**Osnovna ruta (Base Route):** `/products`

**Dohvati sve proizvode (Get All Products)**
```http
GET /wu/v2/products
```

### 5. API za plaćanja (Payments API)

**Osnovna ruta (Base Route):** `/payments`

**Kreiraj plaćanje (Create Payment)**
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

### 6. API za domene (Domains API)

**Osnovna ruta (Base Route):** `/domains`

**Mapiranje domena (Map Domain)**
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

## Endpoint za registraciju

Endpoint `/register` pruža kompletan tok naplate/registracije:

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
        "site_title": "Moj Novi Sajt",
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

**Odgovor (Response):**
```json
{
    "customer": { ... },
    "membership": { ... },
    "payment": { ... },
    "site": { "id": 123 }
}
```

## Odgovori o greškama

```json
{
    "code": "wu_rest_invalid_parameter",
    "message": "Neispravna vrijednost parametra",
    "data": {
        "status": 400,
        "params": {
            "email": "Neispravan format e-maila"
        }
    }
}
```

## Paginacija i filtriranje

**Parametri upita (Query Parameters):**
```http
GET /wu/v2/customers?per_page=20&page=2&search=john&status=active
```

Uobičajeni parametri:
- `per_page` - Artikla po stranici (podrazumjetno: 20, maksimum: 100)
- `page` - Broj stranice
- `search` - Traženi pojam
- `orderby` - Polje za sortiranje
- `order` - Smjer sortiranja (asc/desc)
- `status` - Filtriranje po statusu
- `date_created` - Filtriranje po rasponu datuma
