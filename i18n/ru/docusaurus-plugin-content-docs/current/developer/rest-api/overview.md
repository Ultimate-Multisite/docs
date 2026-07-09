---
title: Обзор REST API
sidebar_position: 1
_i18n_hash: cabcc173f6a77e5de94e39fff19bc2fa
---
# Справочник REST API

## Базовая конфигурация

**Базовый URL:** `{site_url}/wp-json/wu/v2/`
**Аутентификация:** API-ключ и секрет (HTTP Basic Auth или параметры URL)

## Аутентификация

### Включить API
```php
// Enable API in Ultimate Multisite settings or programmatically
wu_save_setting('enable_api', true);
```

### Получить учетные данные API
```php
$api_key = wu_get_setting('api_key');
$api_secret = wu_get_setting('api_secret');
```

### Методы аутентификации

**HTTP Basic Auth (рекомендуется):**
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

## Конечная точка регистрации

Конечная точка `/register` предоставляет полный процесс оформления заказа/регистрации:

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

## Конечные точки суверенных арендаторов

Ultimate Multisite: Multi-Tenancy 1.2.0 добавляет покрытие REST для суверенных арендаторов для интеграций, которые подготавливают, проверяют или верифицируют изолированных арендаторов.

Точная полезная нагрузка запроса зависит от включенной возможности хоста, но интеграции должны ожидать следующие группы конечных точек:

```http
POST /wu/v2/tenants/{site_id}/bootstrap
GET /wu/v2/tenants/{site_id}/migration-status
POST /wu/v2/tenants/{site_id}/verify
DELETE /wu/v2/tenants/{site_id}
```

Используйте конечную точку bootstrap, чтобы подготовить реестр арендатора, базу данных, файловую систему и состояние маршрутизации. Используйте конечные точки статуса миграции и верификации перед переключением производственного трафика. Используйте конечную точку удаления для суверенного демонтажа, чтобы учетные данные базы данных удалялись через процесс очистки аддона.

Типичные ответы статуса миграции включают:

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

Рассматривайте `ready: false` как блокер перед запуском. Проверьте детали верификации, исправьте привязку хоста базы данных, очередь, подготовку пользователя или проблему маршрутизации, затем повторите верификацию.

## Ответы об ошибках

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
- `per_page` - Элементы на страницу (по умолчанию: 20, максимум: 100)
- `page` - Номер страницы
- `search` - Поисковый запрос
- `orderby` - Поле сортировки
- `order` - Направление сортировки (asc/desc)
- `status` - Фильтр по статусу
- `date_created` - Фильтр по диапазону дат
