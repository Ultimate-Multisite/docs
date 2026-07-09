---
title: REST API Genel Bakış
sidebar_position: 1
_i18n_hash: cabcc173f6a77e5de94e39fff19bc2fa
---
# REST API Referansı

## Temel Yapılandırma

**Temel URL:** `{site_url}/wp-json/wu/v2/`
**Kimlik Doğrulama:** API Anahtarı ve Gizli Anahtar (HTTP Basic Auth veya URL Parametreleri)

## Kimlik Doğrulama

### API'yi Etkinleştir
```php
// Enable API in Ultimate Multisite settings or programmatically
wu_save_setting('enable_api', true);
```

### API Kimlik Bilgilerini Al
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

## Temel Uç Noktalar

### 1. Müşteriler API

**Temel Rota:** `/customers`

**Tüm Müşterileri Al**
```http
GET /wu/v2/customers
```

**Tek Bir Müşteriyi Al**
```http
GET /wu/v2/customers/{id}
```

**Müşteri Oluştur**
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

**Müşteriyi Güncelle**
```http
PUT /wu/v2/customers/{id}
Content-Type: application/json

{
    "vip": true,
    "extra_information": "VIP customer notes"
}
```

**Müşteriyi Sil**
```http
DELETE /wu/v2/customers/{id}
```

### 2. Siteler API

**Temel Rota:** `/sites`

**Site Oluştur**
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

### 3. Üyelikler API

**Temel Rota:** `/memberships`

**Üyelik Oluştur**
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

### 4. Ürünler API

**Temel Rota:** `/products`

**Tüm Ürünleri Al**
```http
GET /wu/v2/products
```

### 5. Ödemeler API

**Temel Rota:** `/payments`

**Ödeme Oluştur**
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

### 6. Alan Adları API

**Temel Rota:** `/domains`

**Alan Adı Eşle**
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

## Kayıt Uç Noktası

`/register` uç noktası eksiksiz bir ödeme/kayıt akışı sağlar:

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

**Yanıt:**
```json
{
    "customer": { ... },
    "membership": { ... },
    "payment": { ... },
    "site": { "id": 123 }
}
```

## Egemen Kiracı Uç Noktaları

Ultimate Multisite: Multi-Tenancy 1.2.0, yalıtılmış kiracıları sağlayan, inceleyen veya doğrulayan entegrasyonlar için egemen kiracı REST kapsamı ekler.

Kesin istek yükü, etkinleştirilmiş barındırıcı yeteneğine bağlıdır, ancak entegrasyonlar şu uç nokta gruplarını beklemelidir:

```http
POST /wu/v2/tenants/{site_id}/bootstrap
GET /wu/v2/tenants/{site_id}/migration-status
POST /wu/v2/tenants/{site_id}/verify
DELETE /wu/v2/tenants/{site_id}
```

Kiracı kayıt defterini, veritabanını, dosya sistemini ve yönlendirme durumunu hazırlamak için bootstrap uç noktasını kullanın. Üretim trafiğini değiştirmeden önce geçiş durumu ve doğrulama uç noktalarını kullanın. Veritabanı kimlik bilgilerinin eklenti temizleme akışı aracılığıyla kaldırılması için egemen sökme işleminde silme uç noktasını kullanın.

Tipik geçiş durumu yanıtları şunları içerir:

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

`ready: false` değerini yayın öncesi engelleyici olarak ele alın. Doğrulama ayrıntılarını kontrol edin; veritabanı host bağlamasını, kuyruğu, kullanıcı sağlamayı veya yönlendirme sorununu düzeltin, ardından doğrulamayı yeniden deneyin.

## Hata Yanıtları

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

## Sayfalama ve Filtreleme

**Sorgu Parametreleri:**
```http
GET /wu/v2/customers?per_page=20&page=2&search=john&status=active
```

Yaygın parametreler:
- `per_page` - Sayfa başına öğe (varsayılan: 20, maks: 100)
- `page` - Sayfa numarası
- `search` - Arama terimi
- `orderby` - Sıralama alanı
- `order` - Sıralama yönü (asc/desc)
- `status` - Duruma göre filtrele
- `date_created` - Tarih aralığına göre filtrele
