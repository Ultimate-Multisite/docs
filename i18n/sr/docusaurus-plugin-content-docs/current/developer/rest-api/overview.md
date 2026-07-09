---
title: Преглед REST API-ја
sidebar_position: 1
_i18n_hash: cabcc173f6a77e5de94e39fff19bc2fa
---
# Референца за REST API {#rest-api-reference}

## Основна конфигурација {#base-configuration}

**Основни URL:** `{site_url}/wp-json/wu/v2/`
**Аутентификација:** API кључ и тајна (HTTP Basic Auth или URL параметри)

## Аутентификација {#authentication}

### Омогућите API {#enable-api}
```php
// Enable API in Ultimate Multisite settings or programmatically
wu_save_setting('enable_api', true);
```

### Добијте API акредитиве {#get-api-credentials}
```php
$api_key = wu_get_setting('api_key');
$api_secret = wu_get_setting('api_secret');
```

### Методе аутентификације {#authentication-methods}

**HTTP Basic Auth (препоручено):**
```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

**URL параметри:**
```bash
curl "https://yoursite.com/wp-json/wu/v2/customers?api_key=your_key&api_secret=your_secret"
```

## Основне крајње тачке {#core-endpoints}

### 1. API за клијенте {#1-customers-api}

**Основна рута:** `/customers`

**Преузмите све клијенте**
```http
GET /wu/v2/customers
```

**Преузмите једног клијента**
```http
GET /wu/v2/customers/{id}
```

**Креирајте клијента**
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

**Ажурирајте клијента**
```http
PUT /wu/v2/customers/{id}
Content-Type: application/json

{
    "vip": true,
    "extra_information": "VIP customer notes"
}
```

**Обришите клијента**
```http
DELETE /wu/v2/customers/{id}
```

### 2. API за сајтове {#2-sites-api}

**Основна рута:** `/sites`

**Креирајте сајт**
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

### 3. API за чланства {#3-memberships-api}

**Основна рута:** `/memberships`

**Креирајте чланство**
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

### 4. API за производе {#4-products-api}

**Основна рута:** `/products`

**Преузмите све производе**
```http
GET /wu/v2/products
```

### 5. API за плаћања {#5-payments-api}

**Основна рута:** `/payments`

**Креирајте плаћање**
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

### 6. API за домене {#6-domains-api}

**Основна рута:** `/domains`

**Мапирајте домен**
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

## Крајња тачка за регистрацију {#registration-endpoint}

Крајња тачка `/register` обезбеђује комплетан ток плаћања/регистрације:

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

## Крајње тачке сувереног станара {#sovereign-tenant-endpoints}

Ultimate Multisite: Multi-Tenancy 1.2.0 додаје REST покривеност за сувереног станара за интеграције које обезбеђују, прегледају или верификују изоловане станаре.

Тачан садржај захтева зависи од омогућене могућности хоста, али интеграције треба да очекују ове групе крајњих тачака:

```http
POST /wu/v2/tenants/{site_id}/bootstrap
GET /wu/v2/tenants/{site_id}/migration-status
POST /wu/v2/tenants/{site_id}/verify
DELETE /wu/v2/tenants/{site_id}
```

Користите bootstrap крајњу тачку да припремите регистар станара, базу података, систем датотека и стање рутирања. Користите крајње тачке за статус миграције и верификацију пре пребацивања продукционог саобраћаја. Користите крајњу тачку за брисање за суверено уклањање, тако да се акредитиви базе података уклоне кроз ток чишћења додатка.

Типични одговори статуса миграције укључују:

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

Третирајте `ready: false` као блокатор пре покретања. Проверите детаље верификације, поправите повезивање хоста базе података, ред, обезбеђивање корисника или проблем са рутирањем, затим поново покушајте верификацију.

## Одговори о грешкама {#error-responses}

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

**Параметри упита:**
```http
GET /wu/v2/customers?per_page=20&page=2&search=john&status=active
```

Уобичајени параметри:
- `per_page` - Ставке по страници (подразумевано: 20, максимум: 100)
- `page` - Број странице
- `search` - Термин претраге
- `orderby` - Поље за сортирање
- `order` - Смер сортирања (asc/desc)
- `status` - Филтрирање по статусу
- `date_created` - Филтрирање по опсегу датума
