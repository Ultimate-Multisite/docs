---
title: REST API күзәтүе
sidebar_position: 1
_i18n_hash: cabcc173f6a77e5de94e39fff19bc2fa
---
# REST API белешмәлеге

## Төп көйләү

**Төп URL:** `{site_url}/wp-json/wu/v2/`
**Аутентификация:** API ачкычы һәм сер (HTTP Basic Auth яки URL параметрлары)

## Аутентификация

### APIны эшләтү
```php
// Enable API in Ultimate Multisite settings or programmatically
wu_save_setting('enable_api', true);
```

### API таныклыкларын алу
```php
$api_key = wu_get_setting('api_key');
$api_secret = wu_get_setting('api_secret');
```

### Аутентификация ысуллары

**HTTP Basic Auth (тәкъдим ителә):**
```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

**URL параметрлары:**
```bash
curl "https://yoursite.com/wp-json/wu/v2/customers?api_key=your_key&api_secret=your_secret"
```

## Төп нокталар

### 1. Клиентлар API

**Төп маршрут:** `/customers`

**Барлык клиентларны алу**
```http
GET /wu/v2/customers
```

**Бер клиентны алу**
```http
GET /wu/v2/customers/{id}
```

**Клиент булдыру**
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

**Клиентны яңарту**
```http
PUT /wu/v2/customers/{id}
Content-Type: application/json

{
    "vip": true,
    "extra_information": "VIP customer notes"
}
```

**Клиентны бетерү**
```http
DELETE /wu/v2/customers/{id}
```

### 2. Сайтлар API

**Төп маршрут:** `/sites`

**Сайт булдыру**
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

### 3. Әгъзалыклар API

**Төп маршрут:** `/memberships`

**Әгъзалык булдыру**
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

### 4. Продуктлар API

**Төп маршрут:** `/products`

**Барлык продуктларны алу**
```http
GET /wu/v2/products
```

### 5. Түләүләр API

**Төп маршрут:** `/payments`

**Түләү булдыру**
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

### 6. Доменнар API

**Төп маршрут:** `/domains`

**Домен бәйләү**
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

## Теркәлү ноктасы

`/register` ноктасы тулы түләп рәсмиләштерү/теркәлү агымын бирә:

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

**Җавап:**
```json
{
    "customer": { ... },
    "membership": { ... },
    "payment": { ... },
    "site": { "id": 123 }
}
```

## Мөстәкыйль арендатор нокталары

Ultimate Multisite: Multi-Tenancy 1.2.0 изоляцияләнгән арендаторларны әзерли, тикшерә яки раслый торган интеграцияләр өчен мөстәкыйль арендаторлар буенча REST колачлау өсти.

Төгәл сорау йөкләмәсе эшләтелгән хост мөмкинлегенә бәйле, әмма интеграцияләр бу нокта төркемнәрен көтәргә тиеш:

```http
POST /wu/v2/tenants/{site_id}/bootstrap
GET /wu/v2/tenants/{site_id}/migration-status
POST /wu/v2/tenants/{site_id}/verify
DELETE /wu/v2/tenants/{site_id}
```

Арендатор реестрын, мәгълүмат базасын, файл системасын һәм маршрутлау халәтен әзерләү өчен bootstrap ноктасын кулланыгыз. Җитештерү трафигын күчергәнче, миграция халәте һәм раслау нокталарын кулланыгыз. Мөстәкыйль сүтеп алу өчен бетерү ноктасын кулланыгыз, шулай итеп мәгълүмат базасы таныклыклары addon чистарту агымы аша алына.

Гадәти миграция халәте җаваплары үз эченә ала:

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

`ready: false` кыйммәтен эшләтеп җибәрүгә кадәрге киртә итеп карагыз. Раслау нечкәлекләрен тикшерегез, мәгълүмат базасы хосты бәйләнешен, чиратны, кулланучы әзерләүне яки маршрутлау мәсьәләсен төзәтегез, аннары раслауны кабатлап карагыз.

## Хата җаваплары

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

## Битләү һәм сөзү

**Сорау параметрлары:**
```http
GET /wu/v2/customers?per_page=20&page=2&search=john&status=active
```

Гомуми параметрлар:
- `per_page` - Бер биттәге элементлар (килешү буенча: 20, максимум: 100)
- `page` - Бит номеры
- `search` - Эзләү термины
- `orderby` - Сортлау кыры
- `order` - Сортлау юнәлеше (asc/desc)
- `status` - Халәт буенча сөзү
- `date_created` - Дата диапазоны буенча сөзү
