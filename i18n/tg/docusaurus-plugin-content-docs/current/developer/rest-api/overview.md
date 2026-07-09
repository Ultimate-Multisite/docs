---
title: Шарҳи REST API
sidebar_position: 1
_i18n_hash: cabcc173f6a77e5de94e39fff19bc2fa
---
# Маълумотномаи REST API

## Танзимоти асосӣ

**Base URL:** `{site_url}/wp-json/wu/v2/`
**Аутентификатсия:** API Key ва Secret (HTTP Basic Auth ё параметрҳои URL)

## Аутентификатсия

### Фаъол кардани API
```php
// Enable API in Ultimate Multisite settings or programmatically
wu_save_setting('enable_api', true);
```

### Гирифтани маълумоти эътимодии API
```php
$api_key = wu_get_setting('api_key');
$api_secret = wu_get_setting('api_secret');
```

### Усулҳои аутентификатсия

**HTTP Basic Auth (тавсия мешавад):**
```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

**Параметрҳои URL:**
```bash
curl "https://yoursite.com/wp-json/wu/v2/customers?api_key=your_key&api_secret=your_secret"
```

## Нуқтаҳои ниҳоии асосӣ

### 1. Customers API

**Масири асосӣ:** `/customers`

**Гирифтани ҳамаи муштариён**
```http
GET /wu/v2/customers
```

**Гирифтани як муштарӣ**
```http
GET /wu/v2/customers/{id}
```

**Эҷод кардани муштарӣ**
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

**Навсозии муштарӣ**
```http
PUT /wu/v2/customers/{id}
Content-Type: application/json

{
    "vip": true,
    "extra_information": "VIP customer notes"
}
```

**Нест кардани муштарӣ**
```http
DELETE /wu/v2/customers/{id}
```

### 2. Sites API

**Масири асосӣ:** `/sites`

**Эҷод кардани сайт**
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

### 3. Memberships API

**Масири асосӣ:** `/memberships`

**Эҷод кардани узвият**
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

### 4. Products API

**Масири асосӣ:** `/products`

**Гирифтани ҳамаи маҳсулотҳо**
```http
GET /wu/v2/products
```

### 5. Payments API

**Масири асосӣ:** `/payments`

**Эҷод кардани пардохт**
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

### 6. Domains API

**Масири асосӣ:** `/domains`

**Пайваст кардани домен**
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

## Нуқтаи ниҳоии бақайдгирӣ

Нуқтаи ниҳоии `/register` ҷараёни пурраи checkout/бақайдгириро таъмин мекунад:

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

**Ҷавоб:**
```json
{
    "customer": { ... },
    "membership": { ... },
    "payment": { ... },
    "site": { "id": 123 }
}
```

## Нуқтаҳои ниҳоии иҷорагири мустақил

Ultimate Multisite: Multi-Tenancy 1.2.0 фарогирии REST барои иҷорагири мустақилро илова мекунад, барои ҳамгироиҳое, ки иҷорагирони ҷудошударо омода, тафтиш ё тасдиқ мекунанд.

Мазмуни дақиқи дархост аз қобилияти фаъолшудаи хост вобаста аст, аммо ҳамгироиҳо бояд ин гурӯҳҳои нуқтаҳои ниҳоиро интизор шаванд:

```http
POST /wu/v2/tenants/{site_id}/bootstrap
GET /wu/v2/tenants/{site_id}/migration-status
POST /wu/v2/tenants/{site_id}/verify
DELETE /wu/v2/tenants/{site_id}
```

Нуқтаи ниҳоии bootstrap-ро барои омода кардани реестри иҷорагир, пойгоҳи додаҳо, системаи файлӣ ва ҳолати масирдиҳӣ истифода баред. Пеш аз гузаронидани трафики истеҳсолӣ, нуқтаҳои ниҳоии ҳолати муҳоҷират ва тасдиқро истифода баред. Нуқтаи ниҳоии ҳазфро барои барҳамдиҳии мустақил истифода баред, то маълумоти эътимодии пойгоҳи додаҳо тавассути ҷараёни тозакунии addon хориҷ карда шаванд.

Ҷавобҳои маъмулии ҳолати муҳоҷират инҳоро дар бар мегиранд:

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

`ready: false`-ро ҳамчун монеаи пеш аз оғоз ҳисоб кунед. Ҷузъиёти тасдиқро санҷед, пайвасткунии хости пойгоҳи додаҳо, навбат, омодасозии корбар ё мушкили масирдиҳиро ислоҳ кунед, сипас тасдиқро аз нав санҷед.

## Ҷавобҳои хато

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

## Саҳифабандӣ ва филтркунӣ

**Параметрҳои дархост:**
```http
GET /wu/v2/customers?per_page=20&page=2&search=john&status=active
```

Параметрҳои маъмул:
- `per_page` - Ашёҳо дар як саҳифа (пешфарз: 20, ҳадди аксар: 100)
- `page` - Рақами саҳифа
- `search` - Истилоҳи ҷустуҷӯ
- `orderby` - Майдони ҷудокунӣ
- `order` - Самти ҷудокунӣ (asc/desc)
- `status` - Филтр аз рӯи вазъ
- `date_created` - Филтр аз рӯи диапазони сана
