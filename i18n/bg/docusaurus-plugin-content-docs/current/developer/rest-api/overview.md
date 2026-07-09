---
title: Общ преглед на REST API
sidebar_position: 1
_i18n_hash: cabcc173f6a77e5de94e39fff19bc2fa
---
# Справочник за REST API

## Базова конфигурация

**Базов URL:** `{site_url}/wp-json/wu/v2/`
**Удостоверяване:** API ключ и Secret (HTTP Basic Auth или URL параметри)

## Удостоверяване

### Активиране на API
```php
// Enable API in Ultimate Multisite settings or programmatically
wu_save_setting('enable_api', true);
```

### Получаване на API идентификационни данни
```php
$api_key = wu_get_setting('api_key');
$api_secret = wu_get_setting('api_secret');
```

### Методи за удостоверяване

**HTTP Basic Auth (препоръчително):**
```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

**URL параметри:**
```bash
curl "https://yoursite.com/wp-json/wu/v2/customers?api_key=your_key&api_secret=your_secret"
```

## Основни крайни точки

### 1. API за клиенти

**Базов маршрут:** `/customers`

**Получаване на всички клиенти**
```http
GET /wu/v2/customers
```

**Получаване на един клиент**
```http
GET /wu/v2/customers/{id}
```

**Създаване на клиент**
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

**Актуализиране на клиент**
```http
PUT /wu/v2/customers/{id}
Content-Type: application/json

{
    "vip": true,
    "extra_information": "VIP customer notes"
}
```

**Изтриване на клиент**
```http
DELETE /wu/v2/customers/{id}
```

### 2. API за сайтове

**Базов маршрут:** `/sites`

**Създаване на сайт**
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

### 3. API за членства

**Базов маршрут:** `/memberships`

**Създаване на членство**
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

### 4. API за продукти

**Базов маршрут:** `/products`

**Получаване на всички продукти**
```http
GET /wu/v2/products
```

### 5. API за плащания

**Базов маршрут:** `/payments`

**Създаване на плащане**
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

### 6. API за домейни

**Базов маршрут:** `/domains`

**Свързване на домейн**
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

## Крайна точка за регистрация

Крайната точка `/register` предоставя цялостен поток за поръчка/регистрация:

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

**Отговор:**
```json
{
    "customer": { ... },
    "membership": { ... },
    "payment": { ... },
    "site": { "id": 123 }
}
```

## Крайни точки за суверенни наематели

Ultimate Multisite: Multi-Tenancy 1.2.0 добавя REST покритие за суверенни наематели за интеграции, които предоставят, инспектират или проверяват изолирани наематели.

Точният payload на заявката зависи от активираната възможност на хоста, но интеграциите трябва да очакват тези групи крайни точки:

```http
POST /wu/v2/tenants/{site_id}/bootstrap
GET /wu/v2/tenants/{site_id}/migration-status
POST /wu/v2/tenants/{site_id}/verify
DELETE /wu/v2/tenants/{site_id}
```

Използвайте крайната точка за bootstrap, за да подготвите регистъра на наемателя, базата данни, файловата система и състоянието на маршрутизацията. Използвайте крайните точки за състояние на миграцията и проверка, преди да превключите производствения трафик. Използвайте крайната точка за изтриване за суверенно премахване, така че идентификационните данни за базата данни да бъдат премахнати чрез потока за почистване на addon.

Типичните отговори за състояние на миграцията включват:

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

Третирайте `ready: false` като блокер преди стартиране. Проверете подробностите от верификацията, поправете обвързването на хоста на базата данни, опашката, предоставянето на потребители или проблема с маршрутизацията, след което опитайте верификацията отново.

## Отговори с грешки

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

## Пагинация и филтриране

**Параметри на заявката:**
```http
GET /wu/v2/customers?per_page=20&page=2&search=john&status=active
```

Често срещани параметри:
- `per_page` - Елементи на страница (по подразбиране: 20, макс.: 100)
- `page` - Номер на страница
- `search` - Термин за търсене
- `orderby` - Поле за сортиране
- `order` - Посока на сортиране (asc/desc)
- `status` - Филтриране по състояние
- `date_created` - Филтриране по диапазон от дати
