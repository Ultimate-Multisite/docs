---
title: Ihtisar REST API
sidebar_position: 1
_i18n_hash: cabcc173f6a77e5de94e39fff19bc2fa
---
# Rujukan REST API

## Konfigurasi Dasar

**Base URL:** `{site_url}/wp-json/wu/v2/`
**Auténtikasi:** Konci API & Secret (HTTP Basic Auth atawa Parameter URL)

## Auténtikasi

### Aktipkeun API
```php
// Enable API in Ultimate Multisite settings or programmatically
wu_save_setting('enable_api', true);
```

### Kéngingkeun Kredénsial API
```php
$api_key = wu_get_setting('api_key');
$api_secret = wu_get_setting('api_secret');
```

### Métode Auténtikasi

**HTTP Basic Auth (Disarankeun):**
```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

**Parameter URL:**
```bash
curl "https://yoursite.com/wp-json/wu/v2/customers?api_key=your_key&api_secret=your_secret"
```

## Titik Tungtung Inti

### 1. API Palanggan

**Rute Dasar:** `/customers`

**Kéngingkeun Sadaya Palanggan**
```http
GET /wu/v2/customers
```

**Kéngingkeun Hiji Palanggan**
```http
GET /wu/v2/customers/{id}
```

**Jieun Palanggan**
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

**Apdet Palanggan**
```http
PUT /wu/v2/customers/{id}
Content-Type: application/json

{
    "vip": true,
    "extra_information": "VIP customer notes"
}
```

**Pupus Palanggan**
```http
DELETE /wu/v2/customers/{id}
```

### 2. API Situs

**Rute Dasar:** `/sites`

**Jieun Situs**
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

### 3. API Kaanggotaan

**Rute Dasar:** `/memberships`

**Jieun Kaanggotaan**
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

**Rute Dasar:** `/products`

**Kéngingkeun Sadaya Produk**
```http
GET /wu/v2/products
```

### 5. API Pangmayaran

**Rute Dasar:** `/payments`

**Jieun Pangmayaran**
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

**Rute Dasar:** `/domains`

**Peta Domain**
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

## Titik Tungtung Pendaptaran

Titik tungtung `/register` nyayogikeun alur checkout/pendaptaran anu lengkep:

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

**Réspon:**
```json
{
    "customer": { ... },
    "membership": { ... },
    "payment": { ... },
    "site": { "id": 123 }
}
```

## Titik Tungtung Tenant Mandiri

Ultimate Multisite: Multi-Tenancy 1.2.0 nambihan cakupan REST tenant mandiri pikeun integrasi anu nyayagikeun, mariksa, atawa mastikeun tenant anu diisolasi.

Payload pamundut anu pasti gumantung kana kamampuhan host anu diaktipkeun, tapi integrasi kudu nyangka kelompok titik tungtung ieu:

```http
POST /wu/v2/tenants/{site_id}/bootstrap
GET /wu/v2/tenants/{site_id}/migration-status
POST /wu/v2/tenants/{site_id}/verify
DELETE /wu/v2/tenants/{site_id}
```

Paké titik tungtung bootstrap pikeun nyiapkeun registry tenant, database, filesystem, jeung kaayaan routing. Paké titik tungtung status migrasi jeung vérifikasi saméméh ngalihkeun lalu lintas produksi. Paké titik tungtung mupus pikeun ngabongkar tenant mandiri sangkan kredénsial database dipiceun ngaliwatan alur beberesih addon.

Réspon status migrasi ilaharna ngawengku:

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

Anggap `ready: false` minangka panghalang saméméh peluncuran. Pariksa rinci vérifikasi, benerkeun pangiket host database, antrian, panyayagaan pamaké, atawa masalah routing, tuluy cobian deui vérifikasi.

## Réspon Kasalahan

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

## Paginasi jeung Nyaring

**Parameter Query:**
```http
GET /wu/v2/customers?per_page=20&page=2&search=john&status=active
```

Parameter umum:
- `per_page` - Item per kaca (standar: 20, maks: 100)
- `page` - Nomer kaca
- `search` - Istilah pamilarian
- `orderby` - Widang urutkeun
- `order` - Arah urutan (asc/desc)
- `status` - Saring dumasar status
- `date_created` - Saring dumasar rentang tanggal
