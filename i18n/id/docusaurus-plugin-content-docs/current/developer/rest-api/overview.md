---
title: Gambaran Umum REST API
sidebar_position: 1
_i18n_hash: 4e511d92e0002dff445f45ff05adbeda
---
# Referensi REST API

## Konfigurasi Dasar

**URL Dasar:** `{site_url}/wp-json/wu/v2/`
**Otentikasi:** API Key & Secret (HTTP Basic Auth atau Parameter URL)

## Otentikasi

### Mengaktifkan API
```php
// Aktifkan API di pengaturan Ultimate Multisite atau secara terprogram
wu_save_setting('enable_api', true);
```

### Mendapatkan Kredensial API
```php
$api_key = wu_get_setting('api_key');
$api_secret = wu_get_setting('api_secret');
```

### Metode Otentikasi

**HTTP Basic Auth (Direkomendasikan):**
```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

**Parameter URL:**
```bash
curl "https://yoursite.com/wp-json/wu/v2/customers?api_key=your_key&api_secret=your_secret"
```

## Endpoint Inti

### 1. API Pelanggan (Customers)

**Rute Dasar:** `/customers`

**Mengambil Semua Pelanggan**
```http
GET /wu/v2/customers
```

**Mengambil Pelanggan Tunggal**
```http
GET /wu/v2/customers/{id}
```

**Membuat Pelanggan**
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

**Memperbarui Pelanggan**
```http
PUT /wu/v2/customers/{id}
Content-Type: application/json

{
    "vip": true,
    "extra_information": "Catatan pelanggan VIP"
}
```

**Menghapus Pelanggan**
```http
DELETE /wu/v2/customers/{id}
```

### 2. API Situs (Sites)

**Rute Dasar:** `/sites`

**Membuat Situs**
```http
POST /wu/v2/sites
Content-Type: application/json

{
    "customer_id": 5,
    "membership_id": 10,
    "domain": "example.com",
    "path": "/",
    "title": "Situs Baru Saya",
    "template_id": 1,
    "type": "customer_owned"
}
```

### 3. API Keanggotaan (Memberships)

**Rute Dasar:** `/memberships`

**Membuat Keanggotaan**
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

### 4. API Produk (Products)

**Rute Dasar:** `/products`

**Mengambil Semua Produk**
```http
GET /wu/v2/products
```

### 5. API Pembayaran (Payments)

**Rute Dasar:** `/payments`

**Membuat Pembayaran**
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

### 6. API Domain (Domains)

**Rute Dasar:** `/domains`

**Memetakan Domain**
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

## Endpoint Registrasi

Endpoint `/register` menyediakan alur checkout/registrasi lengkap:

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
        "site_title": "Situs Baru Saya",
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

## Respons Error

```json
{
    "code": "wu_rest_invalid_parameter",
    "message": "Nilai parameter tidak valid",
    "data": {
        "status": 400,
        "params": {
            "email": "Format email tidak valid"
        }
    }
}
```

## Paginasi dan Pemfilteran

**Parameter Kueri:**
```http
GET /wu/v2/customers?per_page=20&page=2&search=john&status=active
```

Parameter umum:
- `per_page` - Jumlah item per halaman (default: 20, maks: 100)
- `page` - Nomor halaman
- `search` - Istilah pencarian
- `orderby` - Field pengurutan
- `order` - Arah pengurutan (asc/desc)
- `status` - Filter berdasarkan status
- `date_created` - Filter berdasarkan rentang tanggal
