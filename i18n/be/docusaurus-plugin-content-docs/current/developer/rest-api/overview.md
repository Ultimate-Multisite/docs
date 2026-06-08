---
title: Агляд REST API
sidebar_position: 1
_i18n_hash: 4e511d92e0002dff445f45ff05adbeda
---
# Адвязка REST API

## Асноўная канфігурацыя

**Асноўны URL:** `{site_url}/wp-json/wu/v2/`
**Аўтэнтычныя матэрыялы:** API Key і Secret (HTTP Basic Auth або Параметры URL)

## Аўтэнтычныя матэрыялы

### Уключэнне API
```php
// Уключэнне API ў настаўленнік Ultimate Multisite або праграмна
wu_save_setting('enable_api', true);
```

### Атримання API-дадзеных
```php
$api_key = wu_get_setting('api_key');
$api_secret = wu_get_setting('api_secret');
```

### Методы аўтэнтычвання

**HTTP Basic Auth (Рэкамендуецца):**
```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

**Папараметры URL:**
```bash
curl "https://yoursite.com/wp-json/wu/v2/customers?api_key=your_key&api_secret=your_secret"
```

## Асноўныя адрэсы (Endpoints)

### 1. API для Кліентаў (Customers API)

**Асноўны маршрут:** `/customers`

**Атрымаць усіх кліентаў**
```http
GET /wu/v2/customers
```

**Атрымаць аднаго кліента**
```http
GET /wu/v2/customers/{id}
```

**Стварыць кліента**
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

**Абнавіць кліента**
```http
PUT /wu/v2/customers/{id}
Content-Type: application/json

{
    "vip": true,
    "extra_information": "Дазначэнні для VIP-кліента"
}
```

**Умаліць кліента**
```http
DELETE /wu/v2/customers/{id}
```

### 2. API для Сайтаў (Sites API)

**Асноўны маршрут:** `/sites`

**Стварыць сайт**
```http
POST /wu/v2/sites
Content-Type: application/json

{
    "customer_id": 5,
    "membership_id": 10,
    "domain": "example.com",
    "path": "/",
    "title": "Май новы сайт",
    "template_id": 1,
    "type": "customer_owned"
}
```

### 3. API для Членства (Memberships API)

**Асноўны маршрут:** `/memberships`

**Стварыць членства**
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

### 4. API для Практактаў (Products API)

**Асноўны маршрут:** `/products`

**Атрымаць усе практыкаты**
```http
GET /wu/v2/products
```

### 5. API для Плацёжаў (Payments API)

**Асноўны маршрут:** `/payments`

**Стварыць плацёж**
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

### 6. API для Доменных імен (Domains API)

**Асноўны маршрут:** `/domains`

**Маппінг домена**
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

## Адрэс рэгіস্ট্রацыі (Registration Endpoint)

Адрэс `/register` прадугледжвае паўнавартасны працэс рэгіস্ট্রцыі/плацёжа:

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
        "site_title": "Май новы сайт",
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

**Адказ:**
```json
{
    "customer": { ... },
    "membership": { ... },
    "payment": { ... },
    "site": { "id": 123 }
}
```

## Адказ на памылкі (Error Responses)

```json
{
    "code": "wu_rest_invalid_parameter",
    "message": "Некандыцыйная значэнне параметра",
    "data": {
        "status": 400,
        "params": {
            "email": "Некандыцыйны фармат email"
        }
    }
}
```

## Пагістоўка і фільтраванне

**Папараметры zapўту:**
```http
GET /wu/v2/customers?per_page=20&page=2&search=john&status=active
```

Паўторыя параметры:
- `per_page` - Прымаўныя па ўстані (па умолчанию: 20, максімум: 100)
- `page` - Номер пастрыні
- `search` - Тэкст пошуку
- `orderby` - Пале для ўпарадкавання
- `order` - Накірунненне ўпарадкавання (asc/desc)
- `status` - Фільтраванне па статусе
- `date_created` - Фільтраванне па дыяпазоне дат
