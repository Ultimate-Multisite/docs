---
title: Pregled REST API-ja
sidebar_position: 1
_i18n_hash: cabcc173f6a77e5de94e39fff19bc2fa
---
# Referenca za REST API

## Osnovna konfiguracija {#base-configuration}

**Osnovni URL:** `{site_url}/wp-json/wu/v2/`
**Autentikacija:** API ključ i tajna (HTTP Basic Auth ili URL parametri)

## Autentikacija {#authentication}

### Omogući API {#enable-api}
```php
// Enable API in Ultimate Multisite settings or programmatically
wu_save_setting('enable_api', true);
```

### Dohvati API vjerodajnice {#get-api-credentials}
```php
$api_key = wu_get_setting('api_key');
$api_secret = wu_get_setting('api_secret');
```

### Metode autentikacije {#authentication-methods}

**HTTP Basic Auth (preporučeno):**
```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

**URL parametri:**
```bash
curl "https://yoursite.com/wp-json/wu/v2/customers?api_key=your_key&api_secret=your_secret"
```

## Glavne krajnje točke {#core-endpoints}

### 1. API za korisnike {#1-customers-api}

**Osnovna ruta:** `/customers`

**Dohvati sve korisnike**
```http
GET /wu/v2/customers
```

**Dohvati jednog korisnika**
```http
GET /wu/v2/customers/{id}
```

**Stvori korisnika**
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

**Ažuriraj korisnika**
```http
PUT /wu/v2/customers/{id}
Content-Type: application/json

{
    "vip": true,
    "extra_information": "VIP customer notes"
}
```

**Izbriši korisnika**
```http
DELETE /wu/v2/customers/{id}
```

### 2. API za web-mjesta {#2-sites-api}

**Osnovna ruta:** `/sites`

**Stvori web-mjesto**
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

### 3. API za članstva {#3-memberships-api}

**Osnovna ruta:** `/memberships`

**Stvori članstvo**
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

### 4. API za proizvode {#4-products-api}

**Osnovna ruta:** `/products`

**Dohvati sve proizvode**
```http
GET /wu/v2/products
```

### 5. API za plaćanja {#5-payments-api}

**Osnovna ruta:** `/payments`

**Stvori plaćanje**
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

### 6. API za domene {#6-domains-api}

**Osnovna ruta:** `/domains`

**Mapiraj domenu**
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

## Krajnja točka za registraciju {#registration-endpoint}

Krajnja točka `/register` pruža potpuni tijek naplate/registracije:

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

**Odgovor:**
```json
{
    "customer": { ... },
    "membership": { ... },
    "payment": { ... },
    "site": { "id": 123 }
}
```

## Krajnje točke za suverene tenante {#sovereign-tenant-endpoints}

Ultimate Multisite: Multi-Tenancy 1.2.0 dodaje REST pokrivenost za suverene tenante za integracije koje pripremaju, pregledavaju ili provjeravaju izolirane tenante.

Točno opterećenje zahtjeva ovisi o omogućenoj sposobnosti hosta, ali integracije bi trebale očekivati ove skupine krajnjih točaka:

```http
POST /wu/v2/tenants/{site_id}/bootstrap
GET /wu/v2/tenants/{site_id}/migration-status
POST /wu/v2/tenants/{site_id}/verify
DELETE /wu/v2/tenants/{site_id}
```

Upotrijebite krajnju točku bootstrap za pripremu registra tenanta, baze podataka, datotečnog sustava i stanja usmjeravanja. Upotrijebite krajnje točke statusa migracije i provjere prije prebacivanja produkcijskog prometa. Upotrijebite krajnju točku za brisanje za suvereno uklanjanje kako bi se vjerodajnice baze podataka uklonile kroz tijek čišćenja dodatka.

Tipični odgovori statusa migracije uključuju:

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

Tretirajte `ready: false` kao blokator prije pokretanja. Provjerite pojedinosti provjere, ispravite povezivanje hosta baze podataka, red čekanja, pripremu korisnika ili problem s usmjeravanjem, zatim ponovno pokušajte provjeru.

## Odgovori o pogreškama {#error-responses}

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

## Paginacija i filtriranje {#pagination-and-filtering}

**Parametri upita:**
```http
GET /wu/v2/customers?per_page=20&page=2&search=john&status=active
```

Uobičajeni parametri:
- `per_page` - Stavke po stranici (zadano: 20, maks.: 100)
- `page` - Broj stranice
- `search` - Pojam za pretraživanje
- `orderby` - Polje za sortiranje
- `order` - Smjer sortiranja (asc/desc)
- `status` - Filtriraj prema statusu
- `date_created` - Filtriraj prema rasponu datuma
