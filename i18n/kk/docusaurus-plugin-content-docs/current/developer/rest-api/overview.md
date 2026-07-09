---
title: REST API шолуы
sidebar_position: 1
_i18n_hash: cabcc173f6a77e5de94e39fff19bc2fa
---
# REST API анықтамалығы {#rest-api-reference}

## Негізгі конфигурация {#base-configuration}

**Негізгі URL:** `{site_url}/wp-json/wu/v2/`
**Аутентификация:** API кілті және құпиясы (HTTP Basic Auth немесе URL параметрлері)

## Аутентификация {#authentication}

### API қосу {#enable-api}
```php
// Enable API in Ultimate Multisite settings or programmatically
wu_save_setting('enable_api', true);
```

### API деректерін алу {#get-api-credentials}
```php
$api_key = wu_get_setting('api_key');
$api_secret = wu_get_setting('api_secret');
```

### Аутентификация әдістері {#authentication-methods}

**HTTP Basic Auth (ұсынылады):**
```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

**URL параметрлері:**
```bash
curl "https://yoursite.com/wp-json/wu/v2/customers?api_key=your_key&api_secret=your_secret"
```

## Негізгі соңғы нүктелер {#core-endpoints}

### 1. Клиенттер API {#1-customers-api}

**Негізгі маршрут:** `/customers`

**Барлық клиенттерді алу**
```http
GET /wu/v2/customers
```

**Бір клиентті алу**
```http
GET /wu/v2/customers/{id}
```

**Клиент жасау**
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

**Клиентті жаңарту**
```http
PUT /wu/v2/customers/{id}
Content-Type: application/json

{
    "vip": true,
    "extra_information": "VIP customer notes"
}
```

**Клиентті жою**
```http
DELETE /wu/v2/customers/{id}
```

### 2. Сайттар API {#2-sites-api}

**Негізгі маршрут:** `/sites`

**Сайт жасау**
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

### 3. Мүшеліктер API {#3-memberships-api}

**Негізгі маршрут:** `/memberships`

**Мүшелік жасау**
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

### 4. Өнімдер API {#4-products-api}

**Негізгі маршрут:** `/products`

**Барлық өнімдерді алу**
```http
GET /wu/v2/products
```

### 5. Төлемдер API {#5-payments-api}

**Негізгі маршрут:** `/payments`

**Төлем жасау**
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

### 6. Домендер API {#6-domains-api}

**Негізгі маршрут:** `/domains`

**Доменді байланыстыру**
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

## Тіркелу соңғы нүктесі {#registration-endpoint}

`/register` соңғы нүктесі толық төлем рәсімдеу/тіркелу ағынын ұсынады:

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

**Жауап:**
```json
{
    "customer": { ... },
    "membership": { ... },
    "payment": { ... },
    "site": { "id": 123 }
}
```

## Егемен тенант соңғы нүктелері {#sovereign-tenant-endpoints}

Ultimate Multisite: Multi-Tenancy 1.2.0 оқшауланған тенанттарды қамтамасыз ететін, тексеретін немесе растайтын интеграциялар үшін егемен тенанттарға арналған REST қамтуын қосады.

Нақты сұрау жүктемесі қосылған хост мүмкіндігіне байланысты, бірақ интеграциялар мына соңғы нүкте топтарын күтуі керек:

```http
POST /wu/v2/tenants/{site_id}/bootstrap
GET /wu/v2/tenants/{site_id}/migration-status
POST /wu/v2/tenants/{site_id}/verify
DELETE /wu/v2/tenants/{site_id}
```

Тенант тізілімін, дерекқорды, файлдық жүйені және маршруттау күйін дайындау үшін bootstrap соңғы нүктесін пайдаланыңыз. Өндірістік трафикті ауыстырмас бұрын көшіру күйі мен растау соңғы нүктелерін пайдаланыңыз. Егемен бөлшектеу үшін жою соңғы нүктесін пайдаланыңыз, сонда дерекқор деректері addon тазалау ағыны арқылы жойылады.

Әдеттегі көшіру күйі жауаптары мыналарды қамтиды:

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

`ready: false` мәнін іске қосу алдындағы бөгет ретінде қарастырыңыз. Растау мәліметтерін тексеріңіз, дерекқор хостын байланыстыру, кезек, пайдаланушыны қамтамасыз ету немесе маршруттау мәселесін түзетіңіз, содан кейін растауды қайталаңыз.

## Қате жауаптары {#error-responses}

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

## Беттерге бөлу және сүзу {#pagination-and-filtering}

**Сұрау параметрлері:**
```http
GET /wu/v2/customers?per_page=20&page=2&search=john&status=active
```

Жалпы параметрлер:
- `per_page` - Бір беттегі элементтер (әдепкі: 20, ең көбі: 100)
- `page` - Бет нөмірі
- `search` - Іздеу сөзі
- `orderby` - Сұрыптау өрісі
- `order` - Сұрыптау бағыты (asc/desc)
- `status` - Күй бойынша сүзу
- `date_created` - Күн ауқымы бойынша сүзу
