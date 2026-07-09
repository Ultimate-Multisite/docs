---
title: Przegląd REST API
sidebar_position: 1
_i18n_hash: cabcc173f6a77e5de94e39fff19bc2fa
---
# Dokumentacja REST API {#rest-api-reference}

## Konfiguracja bazowa {#base-configuration}

**Bazowy URL:** `{site_url}/wp-json/wu/v2/`
**Uwierzytelnianie:** klucz API i sekret (HTTP Basic Auth lub parametry URL)

## Uwierzytelnianie {#authentication}

### Włącz API {#enable-api}
```php
// Enable API in Ultimate Multisite settings or programmatically
wu_save_setting('enable_api', true);
```

### Uzyskaj dane uwierzytelniające API {#get-api-credentials}
```php
$api_key = wu_get_setting('api_key');
$api_secret = wu_get_setting('api_secret');
```

### Metody uwierzytelniania {#authentication-methods}

**HTTP Basic Auth (zalecane):**
```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

**Parametry URL:**
```bash
curl "https://yoursite.com/wp-json/wu/v2/customers?api_key=your_key&api_secret=your_secret"
```

## Główne endpointy {#core-endpoints}

### 1. API klientów {#1-customers-api}

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

**Zaktualizuj klienta**
```http
PUT /wu/v2/customers/{id}
Content-Type: application/json

{
    "vip": true,
    "extra_information": "VIP customer notes"
}
```

**Usuń klienta**
```http
DELETE /wu/v2/customers/{id}
```

### 2. API witryn {#2-sites-api}

**Trasa bazowa:** `/sites`

**Utwórz witrynę**
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

### 3. API członkostw {#3-memberships-api}

**Trasa bazowa:** `/memberships`

**Utwórz członkostwo**
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

### 4. API produktów {#4-products-api}

**Trasa bazowa:** `/products`

**Pobierz wszystkie produkty**
```http
GET /wu/v2/products
```

### 5. API płatności {#5-payments-api}

**Trasa bazowa:** `/payments`

**Utwórz płatność**
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

### 6. API domen {#6-domains-api}

**Trasa bazowa:** `/domains`

**Zmapuj domenę**
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

## Endpoint rejestracji {#registration-endpoint}

Endpoint `/register` zapewnia kompletny przepływ finalizacji zakupu/rejestracji:

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

**Odpowiedź:**
```json
{
    "customer": { ... },
    "membership": { ... },
    "payment": { ... },
    "site": { "id": 123 }
}
```

## Endpointy suwerennego dzierżawcy {#sovereign-tenant-endpoints}

Ultimate Multisite: Multi-Tenancy 1.2.0 dodaje obsługę REST dla suwerennego dzierżawcy na potrzeby integracji, które provisionują, sprawdzają lub weryfikują izolowanych dzierżawców.

Dokładny ładunek żądania zależy od włączonej funkcjonalności hosta, ale integracje powinny oczekiwać tych grup endpointów:

```http
POST /wu/v2/tenants/{site_id}/bootstrap
GET /wu/v2/tenants/{site_id}/migration-status
POST /wu/v2/tenants/{site_id}/verify
DELETE /wu/v2/tenants/{site_id}
```

Użyj endpointu bootstrap, aby przygotować rejestr dzierżawców, bazę danych, system plików i stan routingu. Użyj endpointów statusu migracji i weryfikacji przed przełączeniem ruchu produkcyjnego. Użyj endpointu usuwania do suwerennego demontażu, aby dane uwierzytelniające bazy danych zostały usunięte przez przepływ czyszczenia dodatku.

Typowe odpowiedzi statusu migracji obejmują:

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

Traktuj `ready: false` jako blokadę przed uruchomieniem. Sprawdź szczegóły weryfikacji, napraw powiązanie hosta bazy danych, kolejkę, provisionowanie użytkowników lub problem z routingiem, a następnie ponów weryfikację.

## Odpowiedzi błędów {#error-responses}

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

## Paginacja i filtrowanie {#pagination-and-filtering}

**Parametry zapytania:**
```http
GET /wu/v2/customers?per_page=20&page=2&search=john&status=active
```

Typowe parametry:
- `per_page` - Elementy na stronę (domyślnie: 20, maks.: 100)
- `page` - Numer strony
- `search` - Szukany termin
- `orderby` - Pole sortowania
- `order` - Kierunek sortowania (asc/desc)
- `status` - Filtruj według statusu
- `date_created` - Filtruj według zakresu dat
