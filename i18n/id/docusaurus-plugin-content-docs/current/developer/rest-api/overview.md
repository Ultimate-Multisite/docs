---
title: Ikhtisar REST API
sidebar_position: 1
_i18n_hash: cabcc173f6a77e5de94e39fff19bc2fa
---
# Referensi REST API

## Konfigurasi Dasar {#base-configuration}

**URL Dasar:** `{site_url}/wp-json/wu/v2/`
**Autentikasi:** API Key & Secret (HTTP Basic Auth atau Parameter URL)

## Autentikasi {#authentication}

### Aktifkan API {#enable-api}
```php
// Enable API in Ultimate Multisite settings or programmatically
wu_save_setting('enable_api', true);
```

### Dapatkan Kredensial API {#get-api-credentials}
```php
$api_key = wu_get_setting('api_key');
$api_secret = wu_get_setting('api_secret');
```

### Metode Autentikasi {#authentication-methods}

**HTTP Basic Auth (Direkomendasikan):**
```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

**Parameter URL:**
```bash
curl "https://yoursite.com/wp-json/wu/v2/customers?api_key=your_key&api_secret=your_secret"
```

## Titik Akhir Inti {#core-endpoints}

### 1. API Pelanggan {#1-customers-api}

**Rute Dasar:** `/customers`

**Dapatkan Semua Pelanggan**
```http
GET /wu/v2/customers
```

**Dapatkan Satu Pelanggan**
```http
GET /wu/v2/customers/{id}
```

**Buat Pelanggan**
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

**Perbarui Pelanggan**
```http
PUT /wu/v2/customers/{id}
Content-Type: application/json

{
    "vip": true,
    "extra_information": "VIP customer notes"
}
```

**Hapus Pelanggan**
```http
DELETE /wu/v2/customers/{id}
```

### 2. API Situs {#2-sites-api}

**Rute Dasar:** `/sites`

**Buat Situs**
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

### 3. API Keanggotaan {#3-memberships-api}

**Rute Dasar:** `/memberships`

**Buat Keanggotaan**
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

**Rute Dasar:** `/products`

**Dapatkan Semua Produk**
```http
GET /wu/v2/products
```

### 5. API Pembayaran {#5-payments-api}

**Rute Dasar:** `/payments`

**Buat Pembayaran**
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

**Rute Dasar:** `/domains`

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

Titik akhir `/register` menyediakan alur checkout/pendaftaran lengkap:

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

## Titik Akhir Tenant Berdaulat {#sovereign-tenant-endpoints}

Ultimate Multisite: Multi-Tenancy 1.2.0 menambahkan cakupan REST tenant berdaulat untuk integrasi yang menyediakan, memeriksa, atau memverifikasi tenant terisolasi.

Payload permintaan yang tepat bergantung pada kapabilitas host yang diaktifkan, tetapi integrasi harus mengharapkan grup titik akhir berikut:

```http
POST /wu/v2/tenants/{site_id}/bootstrap
GET /wu/v2/tenants/{site_id}/migration-status
POST /wu/v2/tenants/{site_id}/verify
DELETE /wu/v2/tenants/{site_id}
```

Gunakan titik akhir bootstrap untuk menyiapkan registri tenant, database, filesystem, dan status routing. Gunakan titik akhir status migrasi dan verifikasi sebelum mengalihkan traffic produksi. Gunakan titik akhir penghapusan untuk pembongkaran berdaulat agar kredensial database dihapus melalui alur pembersihan addon.

Respons status migrasi yang umum mencakup:

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

Perlakukan `ready: false` sebagai penghambat pra-peluncuran. Periksa detail verifikasi, perbaiki binding host database, antrean, penyediaan pengguna, atau masalah routing, lalu coba ulang verifikasi.

## Respons Error {#error-responses}

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

## Paginasi dan Pemfilteran {#pagination-and-filtering}

**Parameter Kueri:**
```http
GET /wu/v2/customers?per_page=20&page=2&search=john&status=active
```

Parameter umum:
- `per_page` - Item per halaman (default: 20, maks: 100)
- `page` - Nomor halaman
- `search` - Istilah pencarian
- `orderby` - Field pengurutan
- `order` - Arah pengurutan (asc/desc)
- `status` - Filter berdasarkan status
- `date_created` - Filter berdasarkan rentang tanggal
