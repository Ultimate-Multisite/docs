---
title: REST API Baxışı
sidebar_position: 1
_i18n_hash: 4e511d92e0002dff445f45ff05adbeda
---
# REST API Referansı

## Əsas Konfiqurasiya

**Əsas URL:** `{site_url}/wp-json/wu/v2/`
**Kimlik Doğrulama:** API Key & Secret (HTTP Basic Auth və ya URL Parametrləri)

## Kimlik Doğrulama

### API-ni Aktivləşdirmək
```php
// API-ni Ultimate Multisite ayarlarında və ya proqramatik şəkildə aktivləşdirin
wu_save_setting('enable_api', true);
```

### API Giriş Məlumatlarını Almaq
```php
$api_key = wu_get_setting('api_key');
$api_secret = wu_get_setting('api_secret');
```

### Kimlik Doğrulama Metodları

**HTTP Basic Auth (Tövsiyə olunur):**
```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

**URL Parametrləri:**
```bash
curl "https://yoursite.com/wp-json/wu/v2/customers?api_key=your_key&api_secret=your_secret"
```

## Əsas Endpointlər

### 1. Müştərilər API-si

**Əsas Yol:** `/customers`

**Bütün Müştəriləri Almaq**
```http
GET /wu/v2/customers
```

**Tək Müştəriləri Almaq**
```http
GET /wu/v2/customers/{id}
```

**Müştəri Yaratmaq**
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

**Müştəridə Dəyişiklik Etmək (Update)**
```http
PUT /wu/v2/customers/{id}
Content-Type: application/json

{
    "vip": true,
    "extra_information": "VIP müştəri qeydləri"
}
```

**Müştəridi Silmək**
```http
DELETE /wu/v2/customers/{id}
```

### 2. Saytlar API-si

**Əsas Yol:** `/sites`

**Sayt Yaratmaq**
```http
POST /wu/v2/sites
Content-Type: application/json

{
    "customer_id": 5,
    "membership_id": 10,
    "domain": "example.com",
    "path": "/",
    "title": "Mənim Yeni Saytım",
    "template_id": 1,
    "type": "customer_owned"
}
```

### 3. Üçüncü Tərəf (Memberships) API-si

**Əsas Yol:** `/memberships`

**Üçüncü Tərəf Yaratmaq**
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

### 4. Məhsullar API-si

**Əsas Yol:** `/products`

**Bütün Məhsulları Almaq**
```http
GET /wu/v2/products
```

### 5. Ödənişlər API-si

**Əsas Yol:** `/payments`

**Ödəniş Yaratmaq**
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

### 6. Domenlər API-si

**Əsas Yol:** `/domains`

**Domen Mərhələləndirməsi (Map Domain)**
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

## Qeydiyyat Endpointi

`/register` endpointi tam bir checkout/qeydiyyat axını təmin edir:

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
        "site_title": "Mənim Yeni Saytım",
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

**Cavab (Response):**
```json
{
    "customer": { ... },
    "membership": { ... },
    "payment": { ... },
    "site": { "id": 123 }
}
```

## Xəta Cavabları

```json
{
    "code": "wu_rest_invalid_parameter",
    "message": "Parametr dəyəri yanlışdır",
    "data": {
        "status": 400,
        "params": {
            "email": "Yanlış email formatı"
        }
    }
}
```

## Səhifələndirmə və Filtirləmə

**Query Parametrləri:**
```http
GET /wu/v2/customers?per_page=20&page=2&search=john&status=active
```

Ümumi parametrlər:
- `per_page` - Səhifə başına element sayı (default: 20, maksimum: 100)
- `page` - Səhifə nömrəsi
- `search` - Axtarış termini
- `orderby` - Sıralama sahəsi
- `order` - Sıralama istiqaməti (asc/desc)
- `status` - Statusa görə filtrləmə
- `date_created` - Tarix aralığı ilə filtrləmə
