---
title: Scursul API REST
sidebar_position: 1
_i18n_hash: 4e511d92e0002dff445f45ff05adbeda
---
# Referință API REST

## Configurare de Bază

**URL de Bază:** `{site_url}/wp-json/wu/v2/`
**Autentificare:** Cheie API și Secret (HTTP Basic Auth sau Parametri URL)

## Autentificare

### Activarea API-ului
```php
// Activarea API-ului în setările Ultimate Multisite sau programatic
wu_save_setting('enable_api', true);
```

### Obținerea Credențialelor API
```php
$api_key = wu_get_setting('api_key');
$api_secret = wu_get_setting('api_secret');
```

### Metode de Autentificare

**HTTP Basic Auth (Recomandat):**
```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

**Parametri URL:**
```bash
curl "https://yoursite.com/wp-json/wu/v2/customers?api_key=your_key&api_secret=your_secret"
```

## Endpoints Principale

### 1. API pentru Clienți (Customers)

**Ruta de Bază:** `/customers`

**Obținerea tuturor clienților**
```http
GET /wu/v2/customers
```

**Obținerea unui client în particular**
```http
GET /wu/v2/customers/{id}
```

**Crearea unui client**
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

**Actualizarea unui client**
```http
PUT /wu/v2/customers/{id}
Content-Type: application/json

{
    "vip": true,
    "extra_information": "Note pentru client VIP"
}
```

**Ștergerea unui client**
```http
DELETE /wu/v2/customers/{id}
```

### 2. API pentru Site-uri (Sites)

**Ruta de Bază:** `/sites`

**Crearea unui site**
```http
POST /wu/v2/sites
Content-Type: application/json

{
    "customer_id": 5,
    "membership_id": 10,
    "domain": "example.com",
    "path": "/",
    "title": "Site-ul Meu Nou",
    "template_id": 1,
    "type": "customer_owned"
}
```

### 3. API pentru Abonamente (Memberships)

**Ruta de Bază:** `/memberships`

**Crearea unui abonament**
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

### 4. API pentru Produse (Products)

**Ruta de Bază:** `/products`

**Obținerea tuturor produselor**
```http
GET /wu/v2/products
```

### 5. API pentru Plăți (Payments)

**Ruta de Bază:** `/payments`

**Crearea unei plăți**
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

### 6. API pentru Domenii (Domains)

**Ruta de Bază:** `/domains`

**Maparea unui domeniu**
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

## Endpointul de Înregistrare

Endpointul `/register` oferă un flux complet de checkout/înregistrare:

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
        "site_title": "Site-ul Meu Nou",
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

## Răspunsuri de Eroare

```json
{
    "code": "wu_rest_invalid_parameter",
    "message": "Valoare de parametru invalidă",
    "data": {
        "status": 400,
        "params": {
            "email": "Format de email invalid"
        }
    }
}
```

## Paginație și Filtrare

**Parametri de Interogare:**
```http
GET /wu/v2/customers?per_page=20&page=2&search=john&status=active
```

Parametrii comuni:
- `per_page` - Numărul de elemente pe pagină (implicit: 20, maxim: 100)
- `page` - Numărul paginii
- `search` - Termenul de căutare
- `orderby` - Câmpul după care se sortează
- `order` - Direcția de sortare (asc/desc)
- `status` - Filtrare după status
- `date_created` - Filtrare după intervalul de date
