---
title: REST API umumiy ko‘rinishi
sidebar_position: 1
_i18n_hash: cabcc173f6a77e5de94e39fff19bc2fa
---
# REST API ma'lumotnomasi

## Asosiy konfiguratsiya {#base-configuration}

**Asosiy URL:** `{site_url}/wp-json/wu/v2/`
**Autentifikatsiya:** API Key va Secret (HTTP Basic Auth yoki URL parametrlari)

## Autentifikatsiya {#authentication}

### API ni yoqish {#enable-api}
```php
// Enable API in Ultimate Multisite settings or programmatically
wu_save_setting('enable_api', true);
```

### API hisob ma’lumotlarini olish {#get-api-credentials}
```php
$api_key = wu_get_setting('api_key');
$api_secret = wu_get_setting('api_secret');
```

### Autentifikatsiya usullari {#authentication-methods}

**HTTP Basic Auth (tavsiya etiladi):**
```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

**URL parametrlari:**
```bash
curl "https://yoursite.com/wp-json/wu/v2/customers?api_key=your_key&api_secret=your_secret"
```

## Asosiy endpointlar {#core-endpoints}

### 1. Mijozlar API {#1-customers-api}

**Asosiy marshrut:** `/customers`

**Barcha mijozlarni olish**
```http
GET /wu/v2/customers
```

**Bitta mijozni olish**
```http
GET /wu/v2/customers/{id}
```

**Mijoz yaratish**
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

**Mijozni yangilash**
```http
PUT /wu/v2/customers/{id}
Content-Type: application/json

{
    "vip": true,
    "extra_information": "VIP customer notes"
}
```

**Mijozni o‘chirish**
```http
DELETE /wu/v2/customers/{id}
```

### 2. Saytlar API {#2-sites-api}

**Asosiy marshrut:** `/sites`

**Sayt yaratish**
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

### 3. A’zoliklar API {#3-memberships-api}

**Asosiy marshrut:** `/memberships`

**A’zolik yaratish**
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

### 4. Mahsulotlar API {#4-products-api}

**Asosiy marshrut:** `/products`

**Barcha mahsulotlarni olish**
```http
GET /wu/v2/products
```

### 5. To‘lovlar API {#5-payments-api}

**Asosiy marshrut:** `/payments`

**To‘lov yaratish**
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

### 6. Domenlar API {#6-domains-api}

**Asosiy marshrut:** `/domains`

**Domenni ulash**
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

## Ro‘yxatdan o‘tish endpointi {#registration-endpoint}

`/register` endpointi to‘liq checkout/ro‘yxatdan o‘tish oqimini taqdim etadi:

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

**Javob:**
```json
{
    "customer": { ... },
    "membership": { ... },
    "payment": { ... },
    "site": { "id": 123 }
}
```

## Suveren tenant endpointlari {#sovereign-tenant-endpoints}

Ultimate Multisite: Multi-Tenancy 1.2.0 izolyatsiyalangan tenantlarni ta’minlaydigan, tekshiradigan yoki tasdiqlaydigan integratsiyalar uchun suveren tenant REST qamrovini qo‘shadi.

Aniq so‘rov yuklamasi yoqilgan host imkoniyatiga bog‘liq, lekin integratsiyalar quyidagi endpoint guruhlarini kutishi kerak:

```http
POST /wu/v2/tenants/{site_id}/bootstrap
GET /wu/v2/tenants/{site_id}/migration-status
POST /wu/v2/tenants/{site_id}/verify
DELETE /wu/v2/tenants/{site_id}
```

Tenant reyestri, ma’lumotlar bazasi, fayl tizimi va marshrutlash holatini tayyorlash uchun bootstrap endpointidan foydalaning. Ishlab chiqarish trafigini almashtirishdan oldin migratsiya holati va tasdiqlash endpointlaridan foydalaning. Ma’lumotlar bazasi hisob ma’lumotlari addon tozalash oqimi orqali olib tashlanishi uchun suveren yakuniy o‘chirishda o‘chirish endpointidan foydalaning.

Odatdagi migratsiya holati javoblari quyidagilarni o‘z ichiga oladi:

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

`ready: false` ni ishga tushirishdan oldingi to‘siq sifatida qabul qiling. Tasdiqlash tafsilotlarini tekshiring, ma’lumotlar bazasi host bog‘lanishi, navbat, foydalanuvchi ta’minoti yoki marshrutlash muammosini tuzating, so‘ng tasdiqlashni qayta urinib ko‘ring.

## Xato javoblari {#error-responses}

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

## Sahifalash va filtrlash {#pagination-and-filtering}

**So‘rov parametrlari:**
```http
GET /wu/v2/customers?per_page=20&page=2&search=john&status=active
```

Umumiy parametrlar:
- `per_page` - Har bir sahifadagi elementlar (standart: 20, maksimal: 100)
- `page` - Sahifa raqami
- `search` - Qidiruv atamasi
- `orderby` - Saralash maydoni
- `order` - Saralash yo‘nalishi (asc/desc)
- `status` - Holat bo‘yicha filtrlash
- `date_created` - Sana oralig‘i bo‘yicha filtrlash
