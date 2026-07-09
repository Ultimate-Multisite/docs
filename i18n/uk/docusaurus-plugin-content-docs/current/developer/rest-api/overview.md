---
title: Огляд REST API
sidebar_position: 1
_i18n_hash: cabcc173f6a77e5de94e39fff19bc2fa
---
# Довідник REST API

## Базова конфігурація

**Базовий URL:** `{site_url}/wp-json/wu/v2/`
**Автентифікація:** API-ключ і секрет (HTTP Basic Auth або параметри URL)

## Автентифікація

### Увімкнути API
```php
// Enable API in Ultimate Multisite settings or programmatically
wu_save_setting('enable_api', true);
```

### Отримати облікові дані API
```php
$api_key = wu_get_setting('api_key');
$api_secret = wu_get_setting('api_secret');
```

### Методи автентифікації

**HTTP Basic Auth (рекомендовано):**
```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

**Параметри URL:**
```bash
curl "https://yoursite.com/wp-json/wu/v2/customers?api_key=your_key&api_secret=your_secret"
```

## Основні кінцеві точки

### 1. API клієнтів

**Базовий маршрут:** `/customers`

**Отримати всіх клієнтів**
```http
GET /wu/v2/customers
```

**Отримати одного клієнта**
```http
GET /wu/v2/customers/{id}
```

**Створити клієнта**
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

**Оновити клієнта**
```http
PUT /wu/v2/customers/{id}
Content-Type: application/json

{
    "vip": true,
    "extra_information": "VIP customer notes"
}
```

**Видалити клієнта**
```http
DELETE /wu/v2/customers/{id}
```

### 2. API сайтів

**Базовий маршрут:** `/sites`

**Створити сайт**
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

### 3. API членств

**Базовий маршрут:** `/memberships`

**Створити членство**
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

### 4. API продуктів

**Базовий маршрут:** `/products`

**Отримати всі продукти**
```http
GET /wu/v2/products
```

### 5. API платежів

**Базовий маршрут:** `/payments`

**Створити платіж**
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

### 6. API доменів

**Базовий маршрут:** `/domains`

**Зіставити домен**
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

## Кінцева точка реєстрації

Кінцева точка `/register` забезпечує повний процес checkout/реєстрації:

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

**Відповідь:**
```json
{
    "customer": { ... },
    "membership": { ... },
    "payment": { ... },
    "site": { "id": 123 }
}
```

## Кінцеві точки суверенних орендарів

Ultimate Multisite: Multi-Tenancy 1.2.0 додає покриття REST для суверенних орендарів для інтеграцій, які надають, перевіряють або верифікують ізольованих орендарів.

Точне корисне навантаження запиту залежить від увімкненої можливості хоста, але інтеграції мають очікувати такі групи кінцевих точок:

```http
POST /wu/v2/tenants/{site_id}/bootstrap
GET /wu/v2/tenants/{site_id}/migration-status
POST /wu/v2/tenants/{site_id}/verify
DELETE /wu/v2/tenants/{site_id}
```

Використовуйте кінцеву точку bootstrap, щоб підготувати реєстр орендаря, базу даних, файлову систему і стан маршрутизації. Використовуйте кінцеві точки статусу міграції та верифікації перед перемиканням робочого трафіку. Використовуйте кінцеву точку видалення для суверенного демонтажу, щоб облікові дані бази даних були видалені через потік очищення аддона.

Типові відповіді статусу міграції містять:

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

Сприймайте `ready: false` як блокер перед запуском. Перевірте подробиці верифікації, виправте прив’язку хоста бази даних, чергу, надання користувачів або проблему маршрутизації, а потім повторіть верифікацію.

## Відповіді про помилки

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

## Пагінація та фільтрація

**Параметри запиту:**
```http
GET /wu/v2/customers?per_page=20&page=2&search=john&status=active
```

Поширені параметри:
- `per_page` - Елементів на сторінку (за замовчуванням: 20, максимум: 100)
- `page` - Номер сторінки
- `search` - Пошуковий термін
- `orderby` - Поле сортування
- `order` - Напрям сортування (asc/desc)
- `status` - Фільтрувати за статусом
- `date_created` - Фільтрувати за діапазоном дат
