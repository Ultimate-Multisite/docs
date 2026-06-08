---
title: REST API Genel Bakış
sidebar_position: 1
_i18n_hash: 4e511d92e0002dff445f45ff05adbeda
---
# REST API Referansı

## Temel Yapılandırma

**Base URL:** `{site_url}/wp-json/wu/v2/`
**Kimlik Doğrulama:** API Key & Secret (HTTP Basic Auth veya URL Parametreleri)

## Kimlik Doğrulama

### API'yi Etkinleştirme
```php
// Ultimate Multisite ayarlarından veya programatik olarak API'yi etkinleştirir
wu_save_setting('enable_api', true);
```

### API Kimlik Bilgilerini Alma
```php
$api_key = wu_get_setting('api_key');
$api_secret = wu_get_setting('api_secret');
```

### Kimlik Doğrulama Yöntemleri

**HTTP Basic Auth (Önerilen):**
```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

**URL Parametreleri:**
```bash
curl "https://yoursite.com/wp-json/wu/v2/customers?api_key=your_key&api_secret=your_secret"
```

## Temel Uç Noktalar (Core Endpoints)

### 1. Müşteriler API'si (Customers API)

**Temel Rota:** `/customers`

**Tüm Müşterileri Alma**
```http
GET /wu/v2/customers
```

**Tek Bir Müşteriyi Alma**
```http
GET /wu/v2/customers/{id}
```

**Müşteri Oluşturma**
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

**Müşteriyi Güncelleme**
```http
PUT /wu/v2/customers/{id}
Content-Type: application/json

{
    "vip": true,
    "extra_information": "VIP müşteri notları"
}
```

**Müşteriyi Silme**
```http
DELETE /wu/v2/customers/{id}
```

### 2. Siteler API'si (Sites API)

**Temel Rota:** `/sites`

**Site Oluşturma**
```http
POST /wu/v2/sites
Content-Type: application/json

{
    "customer_id": 5,
    "membership_id": 10,
    "domain": "example.com",
    "path": "/",
    "title": "Yeni Sitem",
    "template_id": 1,
    "type": "customer_owned"
}
```

### 3. Üyelikler API'si (Memberships API)

**Temel Rota:** `/memberships`

**Üyelik Oluşturma**
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

### 4. Ürünler API'si (Products API)

**Temel Rota:** `/products`

**Tüm Ürünleri Alma**
```http
GET /wu/v2/products
```

### 5. Ödemeler API'si (Payments API)

**Temel Rota:** `/payments`

**Ödeme Oluşturma**
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

### 6. Alan Adları API'si (Domains API)

**Temel Rota:** `/domains`

**Alan Adı Eşleme**
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

## Kayıt Uç Noktası (Registration Endpoint)

`/register` uç noktası, eksiksiz bir ödeme/kayıt akışı sağlar:

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
        "site_title": "Yeni Sitem",
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

**Yanıt (Response):**
```json
{
    "customer": { ... },
    "membership": { ... },
    "payment": { ... },
    "site": { "id": 123 }
}
```

## Hata Yanıtları (Error Responses)

```json
{
    "code": "wu_rest_invalid_parameter",
    "message": "Geçersiz parametre değeri",
    "data": {
        "status": 400,
        "params": {
            "email": "Geçersiz e-posta formatı"
        }
    }
}
```

## Sayfalama ve Filtreleme (Pagination and Filtering)

**Query Parametreleri:**
```http
GET /wu/v2/customers?per_page=20&page=2&search=john&status=active
```

Yaygın parametreler:
- `per_page` - Sayfa başına öğe sayısı (varsayılan: 20, maksimum: 100)
- `page` - Sayfa numarası
- `search` - Arama terimi
- `orderby` - Sıralama alanı
- `order` - Sıralama yönü (asc/desc)
- `status` - Duruma göre filtreleme
- `date_created` - Tarih aralığına göre filtreleme
