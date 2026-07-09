---
title: Ringkesan REST API
sidebar_position: 1
_i18n_hash: cabcc173f6a77e5de94e39fff19bc2fa
---
# Referensi REST API

## Konfigurasi Dhasar

**Base URL:** `{site_url}/wp-json/wu/v2/`
**Autentikasi:** API Key & Secret (HTTP Basic Auth utawa Parameter URL)

## Autentikasi

### Aktifake API
```php
// Enable API in Ultimate Multisite settings or programmatically
wu_save_setting('enable_api', true);
```

### Entuk Kredensial API
```php
$api_key = wu_get_setting('api_key');
$api_secret = wu_get_setting('api_secret');
```

### Cara Autentikasi

**HTTP Basic Auth (Disaranake):**
```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

**Parameter URL:**
```bash
curl "https://yoursite.com/wp-json/wu/v2/customers?api_key=your_key&api_secret=your_secret"
```

## Titik Pungkasan Inti

### 1. API Pelanggan

**Rute Dhasar:** `/customers`

**Entuk Kabeh Pelanggan**
```http
GET /wu/v2/customers
```

**Entuk Pelanggan Tunggal**
```http
GET /wu/v2/customers/{id}
```

**Gawe Pelanggan**
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

**Nganyari Pelanggan**
```http
PUT /wu/v2/customers/{id}
Content-Type: application/json

{
    "vip": true,
    "extra_information": "VIP customer notes"
}
```

**Mbusak Pelanggan**
```http
DELETE /wu/v2/customers/{id}
```

### 2. API Situs

**Rute Dhasar:** `/sites`

**Gawe Situs**
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

### 3. API Keanggotaan

**Rute Dhasar:** `/memberships`

**Gawe Keanggotaan**
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

### 4. API Produk

**Rute Dhasar:** `/products`

**Entuk Kabeh Produk**
```http
GET /wu/v2/products
```

### 5. API Pembayaran

**Rute Dhasar:** `/payments`

**Gawe Pembayaran**
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

### 6. API Domain

**Rute Dhasar:** `/domains`

**Map Domain**
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

## Titik Pungkasan Registrasi

Titik pungkasan `/register` nyedhiyakake alur pambayaran/registrasi lengkap:

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

**Tanggapan:**
```json
{
    "customer": { ... },
    "membership": { ... },
    "payment": { ... },
    "site": { "id": 123 }
}
```

## Titik Pungkasan Penyewa Mandiri

Ultimate Multisite: Multi-Tenancy 1.2.0 nambah jangkauan REST penyewa mandiri kanggo integrasi sing nyedhiyakake, mriksa, utawa verifikasi penyewa terisolasi.

Muatan panjaluk sing pas gumantung marang kapabilitas host sing diaktifake, nanging integrasi kudu nyana klompok titik pungkasan iki:

```http
POST /wu/v2/tenants/{site_id}/bootstrap
GET /wu/v2/tenants/{site_id}/migration-status
POST /wu/v2/tenants/{site_id}/verify
DELETE /wu/v2/tenants/{site_id}
```

Gunakake titik pungkasan bootstrap kanggo nyiapake registri penyewa, basis data, sistem berkas, lan kahanan routing. Gunakake titik pungkasan status migrasi lan verifikasi sadurunge ngalih lalu lintas produksi. Gunakake titik pungkasan pambusakan kanggo teardown mandiri supaya kredensial basis data dibusak liwat alur reresik addon.

Tanggapan status migrasi sing umum kalebu:

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

Anggep `ready: false` minangka pangalang sadurunge peluncuran. Priksa rincian verifikasi, dandani ikatan host basis data, antrean, panyedhiyan pangguna, utawa masalah routing, banjur coba maneh verifikasi.

## Tanggapan Kasalahan

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

## Paginasi lan Penyaringan

**Parameter Pitakon:**
```http
GET /wu/v2/customers?per_page=20&page=2&search=john&status=active
```

Parameter umum:
- `per_page` - Item saben kaca (gawan: 20, maksimal: 100)
- `page` - Nomer kaca
- `search` - Tembung telusuran
- `orderby` - Kolom urutan
- `order` - Arah urutan (asc/desc)
- `status` - Saring miturut status
- `date_created` - Saring miturut rentang tanggal
