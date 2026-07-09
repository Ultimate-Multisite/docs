---
title: REST API тойм
sidebar_position: 1
_i18n_hash: cabcc173f6a77e5de94e39fff19bc2fa
---
# REST API лавлах

## Үндсэн тохиргоо

**Үндсэн URL:** `{site_url}/wp-json/wu/v2/`
**Баталгаажуулалт:** API түлхүүр ба нууц (HTTP Basic Auth эсвэл URL параметрүүд)

## Баталгаажуулалт

### API идэвхжүүлэх
```php
// Enable API in Ultimate Multisite settings or programmatically
wu_save_setting('enable_api', true);
```

### API итгэмжлэл авах
```php
$api_key = wu_get_setting('api_key');
$api_secret = wu_get_setting('api_secret');
```

### Баталгаажуулалтын аргууд

**HTTP Basic Auth (Зөвлөмжтэй):**
```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

**URL параметрүүд:**
```bash
curl "https://yoursite.com/wp-json/wu/v2/customers?api_key=your_key&api_secret=your_secret"
```

## Үндсэн endpoint-ууд

### 1. Хэрэглэгчдийн API

**Үндсэн маршрут:** `/customers`

**Бүх хэрэглэгчийг авах**
```http
GET /wu/v2/customers
```

**Нэг хэрэглэгч авах**
```http
GET /wu/v2/customers/{id}
```

**Хэрэглэгч үүсгэх**
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

**Хэрэглэгч шинэчлэх**
```http
PUT /wu/v2/customers/{id}
Content-Type: application/json

{
    "vip": true,
    "extra_information": "VIP customer notes"
}
```

**Хэрэглэгч устгах**
```http
DELETE /wu/v2/customers/{id}
```

### 2. Сайтуудын API

**Үндсэн маршрут:** `/sites`

**Сайт үүсгэх**
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

### 3. Гишүүнчлэлүүдийн API

**Үндсэн маршрут:** `/memberships`

**Гишүүнчлэл үүсгэх**
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

### 4. Бүтээгдэхүүнүүдийн API

**Үндсэн маршрут:** `/products`

**Бүх бүтээгдэхүүнийг авах**
```http
GET /wu/v2/products
```

### 5. Төлбөрүүдийн API

**Үндсэн маршрут:** `/payments`

**Төлбөр үүсгэх**
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

### 6. Домэйнүүдийн API

**Үндсэн маршрут:** `/domains`

**Домэйн холбох**
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

## Бүртгэлийн endpoint

`/register` endpoint нь бүрэн checkout/бүртгэлийн урсгалыг хангана:

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

**Хариу:**
```json
{
    "customer": { ... },
    "membership": { ... },
    "payment": { ... },
    "site": { "id": 123 }
}
```

## Бүрэн эрхт tenant endpoint-ууд

Ultimate Multisite: Multi-Tenancy 1.2.0 нь тусгаарлагдсан tenant-уудыг provision хийх, шалгах эсвэл баталгаажуулах интеграцуудад зориулсан бүрэн эрхт tenant REST хамрах хүрээг нэмдэг.

Яг хүсэлтийн payload нь идэвхжүүлсэн хостын capability-аас хамаарна, гэхдээ интеграцууд дараах endpoint бүлгүүдийг хүлээх ёстой:

```http
POST /wu/v2/tenants/{site_id}/bootstrap
GET /wu/v2/tenants/{site_id}/migration-status
POST /wu/v2/tenants/{site_id}/verify
DELETE /wu/v2/tenants/{site_id}
```

Tenant бүртгэл, өгөгдлийн сан, файлын систем болон routing төлөвийг бэлтгэхийн тулд bootstrap endpoint-ыг ашиглана. Production traffic шилжүүлэхээс өмнө migration status болон verification endpoint-уудыг ашиглана. Өгөгдлийн сангийн итгэмжлэлүүдийг addon цэвэрлэгээний урсгалаар устгахын тулд бүрэн эрхт teardown-д устгах endpoint-ыг ашиглана.

Ердийн migration status хариунууд нь дараахыг агуулна:

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

`ready: false`-г нээлтийн өмнөх blocker гэж үзнэ. Баталгаажуулалтын дэлгэрэнгүйг шалгаж, өгөгдлийн сангийн хост холболт, дараалал, хэрэглэгч provision хийх эсвэл routing асуудлыг зассаны дараа баталгаажуулалтыг дахин оролдоно уу.

## Алдааны хариунууд

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

## Хуудаслалт ба шүүлт

**Query параметрүүд:**
```http
GET /wu/v2/customers?per_page=20&page=2&search=john&status=active
```

Нийтлэг параметрүүд:
- `per_page` - Нэг хуудсанд байх зүйлс (анхдагч: 20, дээд: 100)
- `page` - Хуудасны дугаар
- `search` - Хайлтын үг
- `orderby` - Эрэмбэлэх талбар
- `order` - Эрэмбэлэх чиглэл (asc/desc)
- `status` - Төлвөөр шүүх
- `date_created` - Огнооны хүрээгээр шүүх
