---
title: Przegląd REST API
sidebar_position: 1
_i18n_hash: 4e511d92e0002dff445f45ff05adbeda
---
# Odniesienie do REST API

## Konfiguracja bazowa

**URL bazowy:** `{site_url}/wp-json/wu/v2/`
**Uwierzytelnianie:** Klucz API i Secret (HTTP Basic Auth lub Parametry URL)

## Uwierzytelnianie

### Włączenie API
```php
// Włącz API w ustawieniach Ultimate Multisite lub programowo
wu_save_setting('enable_api', true);
```

### Pobieranie poświadczeń API
```php
$api_key = wu_get_setting('api_key');
$api_secret = wu_get_setting('api_secret');
```

### Metody uwierzytelniania

**HTTP Basic Auth (Zalecane):**
```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

**Parametry URL:**
```bash
curl "https://yoursite.com/wp-json/wu/v2/customers?api_key=your_key&api_secret=your_secret"
```

## Główne Endpunkty

### 1. API Klientów (Customers API)

**Trasa bazowa:** `/customers`

**Pobierz wszystkich klientów**
```http
GET /wu/v2/customers
```

**Pobierz pojedynczego klienta**
```http
GET /wu/v2/customers/{id}
```

**Utwórz klienta**
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

**Aktualizacja klienta**
```http
PUT /wu/v2/customers/{id}
Content-Type: application/json

{
    "vip": true,
    "extra_information": "Uwagi dla klienta VIP"
}
```

**Usunięcie klienta**
```http
DELETE /wu/v2/customers/{id}
```

### 2. API Stron (Sites API)

**Trasa bazowa:** `/sites`

**Utworzenie strony**
```http
POST /wu/v2/sites
Content-Type: application/json

{
    "customer_id": 5,
    "membership_id": 10,
    "domain": "example.com",
    "path": "/",
    "title": "Moja Nowa Strona",
    "template_id": 1,
    "type": "customer_owned"
}
```

### 3. API Członkostwa (Memberships API)

**Trasa bazowa:** `/memberships`

**Utworzenie członkostwa**
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

### 4. API Produktów (Products API)

**Trasa bazowa:** `/products`

**Pobierz wszystkie produkty**
```http
GET /wu/v2/products
```

### 5. API Płatności (Payments API)

**Trasa bazowa:** `/payments`

**Utworzenie płatności**
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

### 6. API Domen (Domains API)

**Trasa bazowa:** `/domains`

**Mapowanie domeny**
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

## Endpoint Rejestracyjny

Endpoint `/register` zapewnia pełny proces rejestracji/checkout:

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
        "site_title": "Moja Nowa Strona",
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

**Odpowiedź:**
```json
{
    "customer": { ... },
    "membership": { ... },
    "payment": { ... },
    "site": { "id": 123 }
}
```

## Odpowiedzi o błędach

```json
{
    "code": "wu_rest_invalid_parameter",
    "message": "Nieprawidłowa wartość parametru",
    "data": {
        "status": 400,
        "params": {
            "email": "Nieprawidłowy format adresu e-mail"
        }
    }
}
```

## Paginacja i filtrowanie

**Parametry zapytania:**
```http
GET /wu/v2/customers?per_page=20&page=2&search=john&status=active
```

Często używane parametry:
- `per_page` - Liczba elementów na stronie (domyślnie: 20, max: 100)
- `page` - Numer strony
- `search` - Termin wyszukiwania
- `orderby` - Pole sortowania
- `order` - Kierunek sortowania (asc/desc)
- `status` - Filtrowanie po statusie
- `date_created` - Filtrowanie po zakresie dat
