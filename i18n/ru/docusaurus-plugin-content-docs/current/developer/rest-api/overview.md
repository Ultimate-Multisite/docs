---
title: Обзор REST API
sidebar_position: 1
_i18n_hash: 4e511d92e0002dff445f45ff05adbeda
---
# Справочник REST API

## Базовая конфигурация

**Базовый URL:** `{site_url}/wp-json/wu/v2/`
**Аутентификация:** API Key & Secret (HTTP Basic Auth or URL Parameters)

## Аутентификация

### Enable API
```php
// Enable API in Ultimate Multisite settings or programmatically
wu_save_setting('enable_api', true);
```

### Get API Credentials
```php
$api_key = wu_get_setting('api_key');
$api_secret = wu_get_setting('api_secret');
```

### Методы аутентификации

**HTTP Basic Auth (Рекомендуется):**
```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

**Параметры URL:**
```bash
curl "https://yoursite.com/wp-json/wu/v2/customers?api_key=your_key&api_secret=your_secret"
```

## Основные конечные точки

### 1. API клиентов

**Базовый маршрут:** `/customers`

**Получить всех клиентов**
```http
GET /wu/v2/customers
```

**Получить одного клиента**
```http
GET /wu/v2/customers/{id}
```

**Создать клиента**
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

**Обновить клиента**
```http
PUT /wu/v2/customers/{id}
Content-Type: application/json

{
    "vip": true,
    "extra_information": "VIP customer notes"
}
```

**Удалить клиента**
```http
DELETE /wu/v2/customers/{id}
```

### 2. API сайтов

**Базовый маршрут:** `/sites`

**Создать сайт**
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

**Базовый маршрут:** `/memberships`

**Создать членство**
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

### 4. API продуктов

**Базовый маршрут:** `/products`

**Получить все продукты**
```http
GET /wu/v2/products
```

### 5. API платежей

**Базовый маршрут:** `/payments`

**Создать платеж**
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

### 6. API доменов

**Базовый маршрут:** `/domains`

**Сопоставить домен**
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

## Точка доступа регистрации

Точка доступа `/register` обеспечивает полный процесс оформления/регистрации:

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

**Ответ:**
```json
{
    "customer": { ... },
    "membership": { ... },
    "payment": { ... },
    "site": { "id": 123 }
}
```

## Ошибки ответа

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

## Пагинация и фильтрация

**Параметры запроса:**
```http
GET /wu/v2/customers?per_page=20&page=2&search=john&status=active
```

Общие параметры:
- `per_page` - Элементы на странице (по умолчанию: 20, максимум: 100)
- `page` - Номер страницы
- `search` - Термин поиска
- `orderby` - Поле сортировки
- `order` - Направление сортировки (asc/desc)
- `status` - Фильтр по статусу
- `date_created` - Фильтр по диапазону дат
