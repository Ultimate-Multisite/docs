---
title: ภาพรวม REST API
sidebar_position: 1
_i18n_hash: cabcc173f6a77e5de94e39fff19bc2fa
---
# เอกสารอ้างอิง REST API

## การกำหนดค่าพื้นฐาน {#base-configuration}

**Base URL:** `{site_url}/wp-json/wu/v2/`
**การยืนยันตัวตน:** API Key และ Secret (HTTP Basic Auth หรือพารามิเตอร์ URL)

## การยืนยันตัวตน {#authentication}

### เปิดใช้งาน API {#enable-api}
```php
// Enable API in Ultimate Multisite settings or programmatically
wu_save_setting('enable_api', true);
```

### รับข้อมูลรับรอง API {#get-api-credentials}
```php
$api_key = wu_get_setting('api_key');
$api_secret = wu_get_setting('api_secret');
```

### วิธีการยืนยันตัวตน {#authentication-methods}

**HTTP Basic Auth (แนะนำ):**
```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

**พารามิเตอร์ URL:**
```bash
curl "https://yoursite.com/wp-json/wu/v2/customers?api_key=your_key&api_secret=your_secret"
```

## Endpoint หลัก {#core-endpoints}

### 1. API ลูกค้า {#1-customers-api}

**Base Route:** `/customers`

**รับลูกค้าทั้งหมด**
```http
GET /wu/v2/customers
```

**รับลูกค้ารายเดียว**
```http
GET /wu/v2/customers/{id}
```

**สร้างลูกค้า**
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

**อัปเดตลูกค้า**
```http
PUT /wu/v2/customers/{id}
Content-Type: application/json

{
    "vip": true,
    "extra_information": "VIP customer notes"
}
```

**ลบลูกค้า**
```http
DELETE /wu/v2/customers/{id}
```

### 2. API เว็บไซต์ {#2-sites-api}

**Base Route:** `/sites`

**สร้างเว็บไซต์**
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

### 3. API สมาชิกภาพ {#3-memberships-api}

**Base Route:** `/memberships`

**สร้างสมาชิกภาพ**
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

### 4. API ผลิตภัณฑ์ {#4-products-api}

**Base Route:** `/products`

**รับผลิตภัณฑ์ทั้งหมด**
```http
GET /wu/v2/products
```

### 5. API การชำระเงิน {#5-payments-api}

**Base Route:** `/payments`

**สร้างการชำระเงิน**
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

### 6. API โดเมน {#6-domains-api}

**Base Route:** `/domains`

**แมปโดเมน**
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

## Endpoint การลงทะเบียน {#registration-endpoint}

Endpoint `/register` มอบขั้นตอน checkout/การลงทะเบียนที่สมบูรณ์:

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

**การตอบกลับ:**
```json
{
    "customer": { ... },
    "membership": { ... },
    "payment": { ... },
    "site": { "id": 123 }
}
```

## Endpoint ผู้เช่าแบบอธิปไตย {#sovereign-tenant-endpoints}

Ultimate Multisite: Multi-Tenancy 1.2.0 เพิ่มการครอบคลุม REST สำหรับผู้เช่าแบบอธิปไตย สำหรับการเชื่อมต่อที่จัดเตรียม ตรวจสอบ หรือยืนยันผู้เช่าที่แยกอิสระ

payload คำขอที่แน่นอนขึ้นอยู่กับความสามารถของโฮสต์ที่เปิดใช้งาน แต่การเชื่อมต่อควรคาดหวังกลุ่ม endpoint เหล่านี้:

```http
POST /wu/v2/tenants/{site_id}/bootstrap
GET /wu/v2/tenants/{site_id}/migration-status
POST /wu/v2/tenants/{site_id}/verify
DELETE /wu/v2/tenants/{site_id}
```

ใช้ endpoint bootstrap เพื่อเตรียมรีจิสทรีผู้เช่า ฐานข้อมูล ระบบไฟล์ และสถานะการกำหนดเส้นทาง ใช้ endpoint สถานะการย้ายข้อมูลและการยืนยันก่อนสลับทราฟฟิกการใช้งานจริง ใช้ endpoint การลบสำหรับการรื้อถอนแบบอธิปไตย เพื่อให้ข้อมูลรับรองฐานข้อมูลถูกนำออกผ่านขั้นตอนการล้างข้อมูลของ addon

การตอบกลับสถานะการย้ายข้อมูลโดยทั่วไปประกอบด้วย:

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

ให้ถือว่า `ready: false` เป็นตัวขัดขวางก่อนเปิดตัว ตรวจสอบรายละเอียดการยืนยัน แก้ไขการผูกโฮสต์ฐานข้อมูล คิว การจัดเตรียมผู้ใช้ หรือปัญหาการกำหนดเส้นทาง แล้วลองยืนยันอีกครั้ง

## การตอบกลับข้อผิดพลาด {#error-responses}

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

## การแบ่งหน้าและการกรอง {#pagination-and-filtering}

**พารามิเตอร์ Query:**
```http
GET /wu/v2/customers?per_page=20&page=2&search=john&status=active
```

พารามิเตอร์ทั่วไป:
- `per_page` - รายการต่อหน้า (ค่าเริ่มต้น: 20, สูงสุด: 100)
- `page` - หมายเลขหน้า
- `search` - คำค้นหา
- `orderby` - ฟิลด์สำหรับจัดเรียง
- `order` - ทิศทางการจัดเรียง (asc/desc)
- `status` - กรองตามสถานะ
- `date_created` - กรองตามช่วงวันที่
