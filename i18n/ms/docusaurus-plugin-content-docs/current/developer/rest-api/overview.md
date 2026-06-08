---
title: Gambaran Keseluruhan REST API
sidebar_position: 1
_i18n_hash: 4e511d92e0002dff445f45ff05adbeda
---
# Rujukan REST API

## Konfigurasi Asas

**Base URL:** `{site_url}/wp-json/wu/v2/`
**Pengesahan (Authentication):** API Key & Secret (HTTP Basic Auth atau URL Parameters)

## Pengesahan

### Aktifkan API
```php
// Aktifkan API dalam tetapan Ultimate Multisite atau secara programatik
wu_save_setting('enable_api', true);
```

### Dapatkan Kredensial API
```php
$api_key = wu_get_setting('api_key');
$api_secret = wu_get_setting('api_secret');
```

### Kaedah Pengesahan

**HTTP Basic Auth (Disyorkan):**
```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

**URL Parameters:**
```bash
curl "https://yoursite.com/wp-json/wu/v2/customers?api_key=your_key&api_secret=your_secret"
```

## Endpoint Utama

### 1. Customers API

**Base Route:** `/customers`

**Dapatkan Semua Pelanggan**
```http
GET /wu/v2/customers
```

**Dapatkan Pelanggan Tunggal**
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
    "extra_information": "Nota pelanggan VIP"
}
```

**Padam Pelanggan**
```http
DELETE /wu/v2/customers/{id}
```

### 2. Sites API

**Base Route:** `/sites`

**Cipta Tapak (Site)**
```http
POST /wu/v2/sites
Content-Type: application/json

{
    "customer_id": 5,
    "membership_id": 10,
    "domain": "example.com",
    "path": "/",
    "title": "Tapak Saya Yang Baru",
    "template_id": 1,
    "type": "customer_owned"
}
```

### 3. Memberships API

**Base Route:** `/memberships`

**Cipta Keahlian (Membership)**
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

### 4. Products API

**Base Route:** `/products`

**Dapatkan Semua Produk**
```http
GET /wu/v2/products
```

### 5. Payments API

**Base Route:** `/payments`

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

### 6. Domains API

**Base Route:** `/domains`

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

## Endpoint Pendaftaran

Endpoint `/register` menyediakan aliran checkout/pendaftaran yang lengkap:

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
        "site_title": "Tapak Saya Yang Baru",
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

## Respons Ralat

```json
{
    "code": "wu_rest_invalid_parameter",
    "message": "Nilai parameter tidak sah",
    "data": {
        "status": 400,
        "params": {
            "email": "Format emel tidak sah"
        }
    }
}
```

## Paginasi dan Penapisan

**Query Parameters:**
```http
GET /wu/v2/customers?per_page=20&page=2&search=john&status=active
```

Parameter biasa:
- `per_page` - Bilangan item per halaman (lalai: 20, maks: 100)
- `page` - Nombor halaman
- `search` - Istilah carian
- `orderby` - Medan pengisihan
- `order` - Arah pengisihan (asc/desc)
- `status` - Menapis mengikut status
- `date_created` - Menapis mengikut julat tarikh
