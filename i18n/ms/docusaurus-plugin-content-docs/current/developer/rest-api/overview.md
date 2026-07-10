---
title: Gambaran Keseluruhan REST API
sidebar_position: 1
_i18n_hash: cabcc173f6a77e5de94e39fff19bc2fa
---
# Rujukan REST API {#rest-api-reference}

## Konfigurasi Asas {#base-configuration}

**URL Asas:** `{site_url}/wp-json/wu/v2/`
**Pengesahan:** Kunci API & Rahsia (HTTP Basic Auth atau Parameter URL)

## Pengesahan {#authentication}

### Dayakan API {#enable-api}
```php
// Enable API in Ultimate Multisite settings or programmatically
wu_save_setting('enable_api', true);
```

### Dapatkan Kredensial API {#get-api-credentials}
```php
$api_key = wu_get_setting('api_key');
$api_secret = wu_get_setting('api_secret');
```

### Kaedah Pengesahan {#authentication-methods}

**HTTP Basic Auth (Disyorkan):**
```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

**Parameter URL:**
```bash
curl "https://yoursite.com/wp-json/wu/v2/customers?api_key=your_key&api_secret=your_secret"
```

## Titik Akhir Teras {#core-endpoints}

### 1. API Pelanggan {#1-customers-api}

**Laluan Asas:** `/customers`

**Dapatkan Semua Pelanggan**
```http
GET /wu/v2/customers
```

**Dapatkan Satu Pelanggan**
```http
GET /wu/v2/customers/{id}
```

**Cipta Pelanggan**
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

**Kemas Kini Pelanggan**
```http
PUT /wu/v2/customers/{id}
Content-Type: application/json

{
    "vip": true,
    "extra_information": "VIP customer notes"
}
```

**Padam Pelanggan**
```http
DELETE /wu/v2/customers/{id}
```

### 2. API Tapak {#2-sites-api}

**Laluan Asas:** `/sites`

**Cipta Tapak**
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

### 3. API Keahlian {#3-memberships-api}

**Laluan Asas:** `/memberships`

**Cipta Keahlian**
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

### 4. API Produk {#4-products-api}

**Laluan Asas:** `/products`

**Dapatkan Semua Produk**
```http
GET /wu/v2/products
```

### 5. API Pembayaran {#5-payments-api}

**Laluan Asas:** `/payments`

**Cipta Pembayaran**
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

### 6. API Domain {#6-domains-api}

**Laluan Asas:** `/domains`

**Petakan Domain**
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

## Titik Akhir Pendaftaran {#registration-endpoint}

Titik akhir `/register` menyediakan aliran pembayaran/pendaftaran yang lengkap:

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

**Respons:**
```json
{
    "customer": { ... },
    "membership": { ... },
    "payment": { ... },
    "site": { "id": 123 }
}
```

## Titik Akhir Penyewa Berdaulat {#sovereign-tenant-endpoints}

Ultimate Multisite: Multi-Tenancy 1.2.0 menambah liputan REST penyewa berdaulat untuk integrasi yang menyediakan, memeriksa, atau mengesahkan penyewa terpencil.

Payload permintaan yang tepat bergantung pada keupayaan hos yang didayakan, tetapi integrasi harus menjangkakan kumpulan titik akhir ini:

```http
POST /wu/v2/tenants/{site_id}/bootstrap
GET /wu/v2/tenants/{site_id}/migration-status
POST /wu/v2/tenants/{site_id}/verify
DELETE /wu/v2/tenants/{site_id}
```

Gunakan titik akhir bootstrap untuk menyediakan pendaftaran penyewa, database, sistem fail, dan keadaan penghalaan. Gunakan titik akhir status migrasi dan pengesahan sebelum menukar trafik produksi. Gunakan titik akhir pemadaman untuk pembongkaran berdaulat supaya kredensial database dialih keluar melalui aliran pembersihan addon.

Respons status migrasi biasa termasuk:

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

Anggap `ready: false` sebagai penyekat pra-pelancaran. Semak butiran pengesahan, baiki pengikatan hos database, baris gilir, penyediaan pengguna, atau isu penghalaan, kemudian cuba semula pengesahan.

## Respons Ralat {#error-responses}

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

## Penomboran dan Penapisan {#pagination-and-filtering}

**Parameter Pertanyaan:**
```http
GET /wu/v2/customers?per_page=20&page=2&search=john&status=active
```

Parameter biasa:
- `per_page` - Item setiap halaman (lalai: 20, maks: 100)
- `page` - Nombor halaman
- `search` - Istilah carian
- `orderby` - Medan isihan
- `order` - Arah isihan (asc/desc)
- `status` - Tapis mengikut status
- `date_created` - Tapis mengikut julat tarikh
