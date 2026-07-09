---
title: Prezentare generală a REST API
sidebar_position: 1
_i18n_hash: cabcc173f6a77e5de94e39fff19bc2fa
---
# Referință REST API

## Configurație de bază

**URL de bază:** `{site_url}/wp-json/wu/v2/`
**Autentificare:** cheie API și secret (HTTP Basic Auth sau parametri URL)

## Autentificare

### Activează API
```php
// Enable API in Ultimate Multisite settings or programmatically
wu_save_setting('enable_api', true);
```

### Obține credențialele API
```php
$api_key = wu_get_setting('api_key');
$api_secret = wu_get_setting('api_secret');
```

### Metode de autentificare

**HTTP Basic Auth (recomandat):**
```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

**Parametri URL:**
```bash
curl "https://yoursite.com/wp-json/wu/v2/customers?api_key=your_key&api_secret=your_secret"
```

## Endpoint-uri principale

### 1. API pentru clienți

**Rută de bază:** `/customers`

**Obține toți clienții**
```http
GET /wu/v2/customers
```

**Obține un singur client**
```http
GET /wu/v2/customers/{id}
```

**Creează client**
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

**Actualizează client**
```http
PUT /wu/v2/customers/{id}
Content-Type: application/json

{
    "vip": true,
    "extra_information": "VIP customer notes"
}
```

**Șterge client**
```http
DELETE /wu/v2/customers/{id}
```

### 2. API pentru site-uri

**Rută de bază:** `/sites`

**Creează site**
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

### 3. API pentru abonamente

**Rută de bază:** `/memberships`

**Creează abonament**
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

### 4. API pentru produse

**Rută de bază:** `/products`

**Obține toate produsele**
```http
GET /wu/v2/products
```

### 5. API pentru plăți

**Rută de bază:** `/payments`

**Creează plată**
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

### 6. API pentru domenii

**Rută de bază:** `/domains`

**Mapează domeniu**
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

## Endpoint de înregistrare

Endpoint-ul `/register` oferă un flux complet de checkout/înregistrare:

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

**Răspuns:**
```json
{
    "customer": { ... },
    "membership": { ... },
    "payment": { ... },
    "site": { "id": 123 }
}
```

## Endpoint-uri pentru tenant suveran

Ultimate Multisite: Multi-Tenancy 1.2.0 adaugă acoperire REST pentru tenant suveran pentru integrări care provizionează, inspectează sau verifică tenant-uri izolate.

Payload-ul exact al cererii depinde de capabilitatea de host activată, dar integrările ar trebui să se aștepte la aceste grupuri de endpoint-uri:

```http
POST /wu/v2/tenants/{site_id}/bootstrap
GET /wu/v2/tenants/{site_id}/migration-status
POST /wu/v2/tenants/{site_id}/verify
DELETE /wu/v2/tenants/{site_id}
```

Folosește endpoint-ul de bootstrap pentru a pregăti registrul tenant-ului, baza de date, sistemul de fișiere și starea de rutare. Folosește endpoint-urile de stare a migrării și de verificare înainte de a comuta traficul de producție. Folosește endpoint-ul de ștergere pentru dezafectarea suverană, astfel încât credențialele bazei de date să fie eliminate prin fluxul de curățare al addon-ului.

Răspunsurile tipice privind starea migrării includ:

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

Tratează `ready: false` ca pe un blocaj înainte de lansare. Verifică detaliile de verificare, remediază legarea host-ului bazei de date, coada, provizionarea utilizatorilor sau problema de rutare, apoi reîncearcă verificarea.

## Răspunsuri de eroare

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

## Paginare și filtrare

**Parametri de interogare:**
```http
GET /wu/v2/customers?per_page=20&page=2&search=john&status=active
```

Parametri comuni:
- `per_page` - Elemente pe pagină (implicit: 20, max.: 100)
- `page` - Numărul paginii
- `search` - Termen de căutare
- `orderby` - Câmp de sortare
- `order` - Direcția de sortare (asc/desc)
- `status` - Filtrează după stare
- `date_created` - Filtrează după interval de date
