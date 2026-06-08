---
title: Преглед на REST API
sidebar_position: 1
_i18n_hash: 4e511d92e0002dff445f45ff05adbeda
---
# Справка за REST API

## Основна конфигурация

**Основен URL:** `{site_url}/wp-json/wu/v2/`
**Аутентикация:** API Ключ и Секрет (HTTP Basic Auth или Параметри в URL)

## Аутентикация

### Включване на API
```php
// Включване на API в настройките на Ultimate Multisite или програмно
wu_save_setting('enable_api', true);
```

### Получаване на API Употребяваемост
```php
$api_key = wu_get_setting('api_key');
$api_secret = wu_get_setting('api_secret');
```

### Методи за Аутентикация

**HTTP Basic Auth (Препоръчително):**
```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

**Параметри в URL:**
```bash
curl "https://yoursite.com/wp-json/wu/v2/customers?api_key=your_key&api_secret=your_secret"
```

## Основни Endpoints

### 1. API за Клиенти (Customers API)

**Основен маршрут:** `/customers`

**Получаване на всички клиенти**
```http
GET /wu/v2/customers
```

**Получаване на конкретен клиент**
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
    "extra_information": "Забележки за VIP клиент"
}
```

**Изтриване на клиент**
```http
DELETE /wu/v2/customers/{id}
```

### 2. API за Сайтове (Sites API)

**Основен маршрут:** `/sites`

**Създаване на сайт**
```http
POST /wu/v2/sites
Content-Type: application/json

{
    "customer_id": 5,
    "membership_id": 10,
    "domain": "example.com",
    "path": "/",
    "title": "Моят нов сайт",
    "template_id": 1,
    "type": "customer_owned"
}
```

### 3. API за Членства (Memberships API)

**Основен маршрут:** `/memberships`

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

### 4. API за Продукти (Products API)

**Основен маршрут:** `/products`

**Получаване на всички продукти**
```http
GET /wu/v2/products
```

### 5. API за Плащания (Payments API)

**Основен маршрут:** `/payments`

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

### 6. API за Домейни (Domains API)

**Основен маршрут:** `/domains`

**Мапиране на домейн**
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

## Endpoint за Регистрация

Endpoint-ът `/register` предоставя пълен процес на регистрация/checkout:

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
        "site_title": "Моят нов сайт",
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

## Отговори при Грешки

```json
{
    "code": "wu_rest_invalid_parameter",
    "message": "Невалидна стойност на параметър",
    "data": {
        "status": 400,
        "params": {
            "email": "Невалиден формат на имейл"
        }
    }
}
```

## Пагинация и Филтриране

**Параметри в заявката:**
```http
GET /wu/v2/customers?per_page=20&page=2&search=john&status=active
```

Общи параметри:
- `per_page` - Предметни ставки на страница (по подразбиране: 20, максимум: 100)
- `page` - Номер на страницата
- `search` - Търсещ израз
- `orderby` - Поле за сортиране
- `order` - Посока на сортиране (asc/desc)
- `status` - Филтриране по статус
- `date_created` - Филтриране по диапазон от дати
