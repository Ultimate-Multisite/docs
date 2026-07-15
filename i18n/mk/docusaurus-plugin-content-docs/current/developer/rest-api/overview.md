---
title: Преглед на REST API
sidebar_position: 1
_i18n_hash: cabcc173f6a77e5de94e39fff19bc2fa
---
# Референца за REST API

## Основна конфигурација {#base-configuration}

**Основен URL:** `{site_url}/wp-json/wu/v2/`
**Автентикација:** API Key & Secret (HTTP Basic Auth или URL параметри)

## Автентикација {#authentication}

### Овозможи API {#enable-api}
```php
// Enable API in Ultimate Multisite settings or programmatically
wu_save_setting('enable_api', true);
```

### Добиј API акредитиви {#get-api-credentials}
```php
$api_key = wu_get_setting('api_key');
$api_secret = wu_get_setting('api_secret');
```

### Методи за автентикација {#authentication-methods}

**HTTP Basic Auth (препорачано):**
```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

**URL параметри:**
```bash
curl "https://yoursite.com/wp-json/wu/v2/customers?api_key=your_key&api_secret=your_secret"
```

## Главни endpoint-и {#core-endpoints}

### 1. API за клиенти {#1-customers-api}

**Основна рута:** `/customers`

**Добиј ги сите клиенти**
```http
GET /wu/v2/customers
```

**Добиј еден клиент**
```http
GET /wu/v2/customers/{id}
```

**Креирај клиент**
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

**Ажурирај клиент**
```http
PUT /wu/v2/customers/{id}
Content-Type: application/json

{
    "vip": true,
    "extra_information": "VIP customer notes"
}
```

**Избриши клиент**
```http
DELETE /wu/v2/customers/{id}
```

### 2. API за сајтови {#2-sites-api}

**Основна рута:** `/sites`

**Креирај сајт**
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

### 3. API за членства {#3-memberships-api}

**Основна рута:** `/memberships`

**Креирај членство**
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

### 4. API за производи {#4-products-api}

**Основна рута:** `/products`

**Добиј ги сите производи**
```http
GET /wu/v2/products
```

### 5. API за плаќања {#5-payments-api}

**Основна рута:** `/payments`

**Креирај плаќање**
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

### 6. API за домени {#6-domains-api}

**Основна рута:** `/domains`

**Мапирај домен**
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

## Endpoint за регистрација {#registration-endpoint}

Endpoint-от `/register` обезбедува целосен тек за checkout/регистрација:

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

**Одговор:**
```json
{
    "customer": { ... },
    "membership": { ... },
    "payment": { ... },
    "site": { "id": 123 }
}
```

## Endpoint-и за суверени закупци {#sovereign-tenant-endpoints}

Ultimate Multisite: Multi-Tenancy 1.2.0 додава REST покриеност за суверени закупци за интеграции што обезбедуваат, прегледуваат или проверуваат изолирани закупци.

Точниот payload на барањето зависи од овозможената способност на host-от, но интеграциите треба да ги очекуваат овие групи endpoint-и:

```http
POST /wu/v2/tenants/{site_id}/bootstrap
GET /wu/v2/tenants/{site_id}/migration-status
POST /wu/v2/tenants/{site_id}/verify
DELETE /wu/v2/tenants/{site_id}
```

Користете го bootstrap endpoint-от за да ја подготвите состојбата на регистарот на закупецот, базата на податоци, датотечниот систем и рутирањето. Користете ги endpoint-ите за статус на миграција и проверка пред да го префрлите продукцискиот сообраќај. Користете го endpoint-от за бришење за суверено расклопување, за акредитивите на базата на податоци да се отстранат преку текот за чистење на додатокот.

Типичните одговори за статус на миграција вклучуваат:

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

Третирајте го `ready: false` како блокатор пред лансирање. Проверете ги деталите за верификација, поправете го поврзувањето со host-от на базата на податоци, редицата, обезбедувањето корисници или проблемот со рутирањето, потоа повторно обидете се со верификација.

## Одговори за грешки {#error-responses}

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

## Пагинација и филтрирање {#pagination-and-filtering}

**Параметри за пребарување:**
```http
GET /wu/v2/customers?per_page=20&page=2&search=john&status=active
```

Вообичаени параметри:
- `per_page` - Ставки по страница (стандардно: 20, максимум: 100)
- `page` - Број на страница
- `search` - Термин за пребарување
- `orderby` - Поле за сортирање
- `order` - Насока на сортирање (asc/desc)
- `status` - Филтрирај по статус
- `date_created` - Филтрирај по опсег на датуми
