---
title: Огляд REST API
sidebar_position: 1
_i18n_hash: 4e511d92e0002dff445f45ff05adbeda
---
# Довідник REST API

## Базова конфігурація

**Базовий URL:** `{site_url}/wp-json/wu/v2/`
**Аутентифікація:** API Key та Secret (HTTP Basic Auth або URL Parameters)

## Аутентифікація

### Увімкнути API
```php
// Увімкнути API в налаштуваннях Ultimate Multisite або програмно
wu_save_setting('enable_api', true);
```

### Отримання облікових даних API
```php
$api_key = wu_get_setting('api_key');
$api_secret = wu_get_setting('api_secret');
```

### Методи аутентифікації

**HTTP Basic Auth (Рекомендовано):**
```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

**URL Parameters:**
```bash
curl "https://yoursite.com/wp-json/wu/v2/customers?api_key=your_key&api_secret=your_secret"
```

## Основні кінцеві точки

### 1. Customers API (Клієнти)

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
    "extra_information": "Примітки щодо VIP-клієнта"
}
```

**Видалити клієнта**
```http
DELETE /wu/v2/customers/{id}
```

### 2. Sites API (Сайти)

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
    "title": "Мій новий сайт",
    "template_id": 1,
    "type": "customer_owned"
}
```

### 3. Memberships API (Членства)

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

### 4. Products API (Продукти)

**Базовий маршрут:** `/products`

**Отримати всі продукти**
```http
GET /wu/v2/products
```

### 5. Payments API (Платежі)

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

### 6. Domains API (Домени)

**Базовий маршрут:** `/domains`

**Мапування домену**
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

## Endpoint реєстрації

Endpoint `/register` забезпечує повний процес оформлення замовлення/реєстрації:

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
        "site_title": "Мій новий сайт",
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

## Відповіді про помилки

```json
{
    "code": "wu_rest_invalid_parameter",
    "message": "Недійсне значення параметра",
    "data": {
        "status": 400,
        "params": {
            "email": "Недійсний формат email"
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
- `per_page` - Кількість елементів на сторінці (за замовчуванням: 20, максимум: 100)
- `page` - Номер сторінки
- `search` - Пошуковий запит
- `orderby` - Поле для сортування
- `order` - Напрямок сортування (asc/desc)
- `status` - Фільтрація за статусом
- `date_created` - Фільтрація за діапазоном дат
