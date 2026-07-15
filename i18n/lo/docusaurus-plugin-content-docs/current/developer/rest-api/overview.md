---
title: ພາບລວມ REST API
sidebar_position: 1
_i18n_hash: cabcc173f6a77e5de94e39fff19bc2fa
---
# ອ້າງອີງ REST API

## ການກຳນົດຄ່າພື້ນຖານ {#base-configuration}

**Base URL:** `{site_url}/wp-json/wu/v2/`
**ການຢືນຢັນຕົວຕົນ:** API Key ແລະ Secret (HTTP Basic Auth ຫຼື ພາລາມິເຕີ URL)

## ການຢືນຢັນຕົວຕົນ {#authentication}

### ເປີດໃຊ້ API {#enable-api}
```php
// Enable API in Ultimate Multisite settings or programmatically
wu_save_setting('enable_api', true);
```

### ຮັບຂໍ້ມູນຢືນຢັນ API {#get-api-credentials}
```php
$api_key = wu_get_setting('api_key');
$api_secret = wu_get_setting('api_secret');
```

### ວິທີການຢືນຢັນຕົວຕົນ {#authentication-methods}

**HTTP Basic Auth (ແນະນຳ):**
```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

**ພາລາມິເຕີ URL:**
```bash
curl "https://yoursite.com/wp-json/wu/v2/customers?api_key=your_key&api_secret=your_secret"
```

## ຈຸດປາຍທາງຫຼັກ {#core-endpoints}

### 1. API ລູກຄ້າ {#1-customers-api}

**ເສັ້ນທາງພື້ນຖານ:** `/customers`

**ຮັບລູກຄ້າທັງໝົດ**
```http
GET /wu/v2/customers
```

**ຮັບລູກຄ້າລາຍດຽວ**
```http
GET /wu/v2/customers/{id}
```

**ສ້າງລູກຄ້າ**
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

**ອັບເດດລູກຄ້າ**
```http
PUT /wu/v2/customers/{id}
Content-Type: application/json

{
    "vip": true,
    "extra_information": "VIP customer notes"
}
```

**ລຶບລູກຄ້າ**
```http
DELETE /wu/v2/customers/{id}
```

### 2. API ເວັບໄຊ {#2-sites-api}

**ເສັ້ນທາງພື້ນຖານ:** `/sites`

**ສ້າງເວັບໄຊ**
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

### 3. API ສະມາຊິກພາບ {#3-memberships-api}

**ເສັ້ນທາງພື້ນຖານ:** `/memberships`

**ສ້າງສະມາຊິກພາບ**
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

### 4. API ຜະລິດຕະພັນ {#4-products-api}

**ເສັ້ນທາງພື້ນຖານ:** `/products`

**ຮັບຜະລິດຕະພັນທັງໝົດ**
```http
GET /wu/v2/products
```

### 5. API ການຊຳລະເງິນ {#5-payments-api}

**ເສັ້ນທາງພື້ນຖານ:** `/payments`

**ສ້າງການຊຳລະເງິນ**
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

### 6. API ໂດເມນ {#6-domains-api}

**ເສັ້ນທາງພື້ນຖານ:** `/domains`

**ຈັບຄູ່ໂດເມນ**
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

## ຈຸດປາຍທາງການລົງທະບຽນ {#registration-endpoint}

ຈຸດປາຍທາງ `/register` ສະໜອງຂັ້ນຕອນ checkout/ການລົງທະບຽນທີ່ຄົບຖ້ວນ:

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

**ການຕອບກັບ:**
```json
{
    "customer": { ... },
    "membership": { ... },
    "payment": { ... },
    "site": { "id": 123 }
}
```

## ຈຸດປາຍທາງ Tenant ແບບອະທິປະໄຕ {#sovereign-tenant-endpoints}

Ultimate Multisite: Multi-Tenancy 1.2.0 ເພີ່ມການຄອບຄຸມ REST ສຳລັບ tenant ແບບອະທິປະໄຕ ສຳລັບການເຊື່ອມໂຍງທີ່ຈັດສັນ, ກວດສອບ, ຫຼື ຢືນຢັນ tenant ທີ່ແຍກອອກ.

payload ຄຳຂໍທີ່ແນ່ນອນຂຶ້ນກັບຄວາມສາມາດຂອງ host ທີ່ເປີດໃຊ້, ແຕ່ການເຊື່ອມໂຍງຄວນຄາດຫວັງກຸ່ມຈຸດປາຍທາງເຫຼົ່ານີ້:

```http
POST /wu/v2/tenants/{site_id}/bootstrap
GET /wu/v2/tenants/{site_id}/migration-status
POST /wu/v2/tenants/{site_id}/verify
DELETE /wu/v2/tenants/{site_id}
```

ໃຊ້ຈຸດປາຍທາງ bootstrap ເພື່ອກະກຽມທະບຽນ tenant, ຖານຂໍ້ມູນ, ລະບົບໄຟລ໌, ແລະ ສະຖານະການກຳນົດເສັ້ນທາງ. ໃຊ້ຈຸດປາຍທາງສະຖານະການຍ້າຍ ແລະ ການຢືນຢັນ ກ່ອນສະຫຼັບການເຂົ້າຊົມ production. ໃຊ້ຈຸດປາຍທາງການລຶບສຳລັບການຮື້ຖອນແບບອະທິປະໄຕ ເພື່ອໃຫ້ຂໍ້ມູນຢືນຢັນຖານຂໍ້ມູນຖືກລຶບອອກຜ່ານຂັ້ນຕອນລ້າງຂໍ້ມູນຂອງ addon.

ການຕອບກັບສະຖານະການຍ້າຍໂດຍທົ່ວໄປປະກອບມີ:

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

ຖືວ່າ `ready: false` ເປັນຕົວກີດຂວາງກ່ອນເປີດໃຊ້ງານ. ກວດສອບລາຍລະອຽດການຢືນຢັນ, ແກ້ໄຂການຜູກກັບ host ຖານຂໍ້ມູນ, queue, ການຈັດສັນຜູ້ໃຊ້, ຫຼື ບັນຫາການກຳນົດເສັ້ນທາງ, ແລ້ວລອງຢືນຢັນອີກຄັ້ງ.

## ການຕອບກັບຂໍ້ຜິດພາດ {#error-responses}

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

## ການແບ່ງໜ້າ ແລະ ການກັ່ນຕອງ {#pagination-and-filtering}

**ພາລາມິເຕີຄຳຖາມ:**
```http
GET /wu/v2/customers?per_page=20&page=2&search=john&status=active
```

ພາລາມິເຕີທົ່ວໄປ:
- `per_page` - ລາຍການຕໍ່ໜ້າ (ຄ່າເລີ່ມຕົ້ນ: 20, ສູງສຸດ: 100)
- `page` - ເລກໜ້າ
- `search` - ຄຳຄົ້ນຫາ
- `orderby` - ຟິວສຳລັບຈັດລຽງ
- `order` - ທິດທາງການຈັດລຽງ (asc/desc)
- `status` - ກັ່ນຕອງຕາມສະຖານະ
- `date_created` - ກັ່ນຕອງຕາມຊ່ວງວັນທີ
