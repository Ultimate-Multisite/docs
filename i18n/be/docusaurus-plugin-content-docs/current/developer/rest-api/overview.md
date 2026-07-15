---
title: Агляд REST API
sidebar_position: 1
_i18n_hash: cabcc173f6a77e5de94e39fff19bc2fa
---
# Даведнік REST API

## Базавая канфігурацыя {#base-configuration}

**Базавы URL:** `{site_url}/wp-json/wu/v2/`
**Аўтэнтыфікацыя:** ключ API і сакрэт (HTTP Basic Auth або параметры URL)

## Аўтэнтыфікацыя {#authentication}

### Уключыць API {#enable-api}
```php
// Enable API in Ultimate Multisite settings or programmatically
wu_save_setting('enable_api', true);
```

### Атрымаць уліковыя даныя API {#get-api-credentials}
```php
$api_key = wu_get_setting('api_key');
$api_secret = wu_get_setting('api_secret');
```

### Метады аўтэнтыфікацыі {#authentication-methods}

**HTTP Basic Auth (рэкамендуецца):**
```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

**Параметры URL:**
```bash
curl "https://yoursite.com/wp-json/wu/v2/customers?api_key=your_key&api_secret=your_secret"
```

## Асноўныя канцавыя пункты {#core-endpoints}

### 1. API кліентаў {#1-customers-api}

**Базавы маршрут:** `/customers`

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
    "extra_information": "VIP customer notes"
}
```

**Выдаліць кліента**
```http
DELETE /wu/v2/customers/{id}
```

### 2. API сайтаў {#2-sites-api}

**Базавы маршрут:** `/sites`

**Стварыць сайт**
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

### 3. API членстваў {#3-memberships-api}

**Базавы маршрут:** `/memberships`

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

### 4. API прадуктаў {#4-products-api}

**Базавы маршрут:** `/products`

**Атрымаць усе прадукты**
```http
GET /wu/v2/products
```

### 5. API плацяжоў {#5-payments-api}

**Базавы маршрут:** `/payments`

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

### 6. API даменаў {#6-domains-api}

**Базавы маршрут:** `/domains`

**Прывязаць дамен**
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

## Канцавы пункт рэгістрацыі {#registration-endpoint}

Канцавы пункт `/register` забяспечвае поўны працэс афармлення замовы/рэгістрацыі:

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

**Адказ:**
```json
{
    "customer": { ... },
    "membership": { ... },
    "payment": { ... },
    "site": { "id": 123 }
}
```

## Канцавыя пункты суверэннага арандатара {#sovereign-tenant-endpoints}

Ultimate Multisite: Multi-Tenancy 1.2.0 дадае ахоп REST для суверэннага арандатара для інтэграцый, якія прадастаўляюць, правяраюць або верыфікуюць ізаляваных арандатараў.

Дакладная карысная нагрузка запыту залежыць ад уключанай магчымасці хоста, але інтэграцыі павінны чакаць гэтыя групы канцавых пунктаў:

```http
POST /wu/v2/tenants/{site_id}/bootstrap
GET /wu/v2/tenants/{site_id}/migration-status
POST /wu/v2/tenants/{site_id}/verify
DELETE /wu/v2/tenants/{site_id}
```

Выкарыстоўвайце канцавы пункт bootstrap, каб падрыхтаваць рэестр арандатара, базу даных, файлавую сістэму і стан маршрутызацыі. Выкарыстоўвайце канцавыя пункты стану міграцыі і верыфікацыі перад пераключэннем вытворчага трафіку. Выкарыстоўвайце канцавы пункт выдалення для суверэннага дэмантажу, каб уліковыя даныя базы даных былі выдалены праз працэс ачысткі дадатку.

Тыповыя адказы стану міграцыі ўключаюць:

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

Разглядайце `ready: false` як блакіроўку перад запускам. Праверце падрабязнасці верыфікацыі, выпраўце прывязку хоста базы даных, чаргу, прадастаўленне карыстальнікаў або праблему маршрутызацыі, а потым паўтарыце верыфікацыю.

## Адказы з памылкамі {#error-responses}

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

## Пагінацыя і фільтрацыя {#pagination-and-filtering}

**Параметры запыту:**
```http
GET /wu/v2/customers?per_page=20&page=2&search=john&status=active
```

Агульныя параметры:
- `per_page` - Элементы на старонку (прадвызначана: 20, макс.: 100)
- `page` - Нумар старонкі
- `search` - Пошукавы тэрмін
- `orderby` - Поле сартавання
- `order` - Напрамак сартавання (asc/desc)
- `status` - Фільтраваць паводле стану
- `date_created` - Фільтраваць паводле дыяпазону дат
