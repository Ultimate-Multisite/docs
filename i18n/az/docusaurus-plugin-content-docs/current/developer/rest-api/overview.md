---
title: REST API icmalı
sidebar_position: 1
_i18n_hash: cabcc173f6a77e5de94e39fff19bc2fa
---
# REST API İstinadı {#rest-api-reference}

## Əsas Konfiqurasiya {#base-configuration}

**Əsas URL:** `{site_url}/wp-json/wu/v2/`
**Autentifikasiya:** API Açarı və Secret (HTTP Basic Auth və ya URL Parametrləri)

## Autentifikasiya {#authentication}

### API-ni Aktivləşdir {#enable-api}
```php
// Enable API in Ultimate Multisite settings or programmatically
wu_save_setting('enable_api', true);
```

### API Məlumatlarını Əldə Et {#get-api-credentials}
```php
$api_key = wu_get_setting('api_key');
$api_secret = wu_get_setting('api_secret');
```

### Autentifikasiya Üsulları {#authentication-methods}

**HTTP Basic Auth (Tövsiyə olunur):**
```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

**URL Parametrləri:**
```bash
curl "https://yoursite.com/wp-json/wu/v2/customers?api_key=your_key&api_secret=your_secret"
```

## Əsas Son Nöqtələr {#core-endpoints}

### 1. Müştərilər API-si {#1-customers-api}

**Əsas Marşrut:** `/customers`

**Bütün Müştəriləri Əldə Et**
```http
GET /wu/v2/customers
```

**Tək Müştərini Əldə Et**
```http
GET /wu/v2/customers/{id}
```

**Müştəri Yarat**
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

**Müştərini Yenilə**
```http
PUT /wu/v2/customers/{id}
Content-Type: application/json

{
    "vip": true,
    "extra_information": "VIP customer notes"
}
```

**Müştərini Sil**
```http
DELETE /wu/v2/customers/{id}
```

### 2. Saytlar API-si {#2-sites-api}

**Əsas Marşrut:** `/sites`

**Sayt Yarat**
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

### 3. Üzvlüklər API-si {#3-memberships-api}

**Əsas Marşrut:** `/memberships`

**Üzvlük Yarat**
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

### 4. Məhsullar API-si {#4-products-api}

**Əsas Marşrut:** `/products`

**Bütün Məhsulları Əldə Et**
```http
GET /wu/v2/products
```

### 5. Ödənişlər API-si {#5-payments-api}

**Əsas Marşrut:** `/payments`

**Ödəniş Yarat**
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

### 6. Domenlər API-si {#6-domains-api}

**Əsas Marşrut:** `/domains`

**Domeni Xəritələ**
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

## Qeydiyyat Son Nöqtəsi {#registration-endpoint}

`/register` son nöqtəsi tam checkout/qeydiyyat axını təmin edir:

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

**Cavab:**
```json
{
    "customer": { ... },
    "membership": { ... },
    "payment": { ... },
    "site": { "id": 123 }
}
```

## Suveren Tenant Son Nöqtələri {#sovereign-tenant-endpoints}

Ultimate Multisite: Multi-Tenancy 1.2.0 təcrid olunmuş tenant-ları təmin edən, yoxlayan və ya doğrulayan inteqrasiyalar üçün suveren tenant REST əhatəsini əlavə edir.

Dəqiq sorğu yükü aktivləşdirilmiş host imkanından asılıdır, lakin inteqrasiyalar bu son nöqtə qruplarını gözləməlidir:

```http
POST /wu/v2/tenants/{site_id}/bootstrap
GET /wu/v2/tenants/{site_id}/migration-status
POST /wu/v2/tenants/{site_id}/verify
DELETE /wu/v2/tenants/{site_id}
```

Tenant reyestrini, verilənlər bazasını, fayl sistemini və marşrutlaşdırma vəziyyətini hazırlamaq üçün bootstrap son nöqtəsindən istifadə edin. Production trafikini keçirməzdən əvvəl miqrasiya statusu və doğrulama son nöqtələrindən istifadə edin. Suveren söküntü üçün silmə son nöqtəsindən istifadə edin ki, verilənlər bazası məlumatları addon təmizləmə axını vasitəsilə silinsin.

Tipik miqrasiya statusu cavablarına daxildir:

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

`ready: false` dəyərini işə salınmadan əvvəl bloklayıcı kimi qəbul edin. Doğrulama təfərrüatlarını yoxlayın, verilənlər bazası host bağlanmasını, növbəni, istifadəçi təminatını və ya marşrutlaşdırma problemini düzəldin, sonra doğrulamanı yenidən sınayın.

## Xəta Cavabları {#error-responses}

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

## Səhifələmə və Filtrləmə {#pagination-and-filtering}

**Sorğu Parametrləri:**
```http
GET /wu/v2/customers?per_page=20&page=2&search=john&status=active
```

Ümumi parametrlər:
- `per_page` - Hər səhifədə elementlər (standart: 20, maksimum: 100)
- `page` - Səhifə nömrəsi
- `search` - Axtarış termini
- `orderby` - Sıralama sahəsi
- `order` - Sıralama istiqaməti (asc/desc)
- `status` - Statusa görə filtrlə
- `date_created` - Tarix aralığına görə filtrlə
