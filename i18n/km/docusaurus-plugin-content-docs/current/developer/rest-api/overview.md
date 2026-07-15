---
title: ទិដ្ឋភាពទូទៅនៃ REST API
sidebar_position: 1
_i18n_hash: cabcc173f6a77e5de94e39fff19bc2fa
---
# ឯកសារយោង REST API

## ការកំណត់រចនាសម្ព័ន្ធមូលដ្ឋាន {#base-configuration}

**URL មូលដ្ឋាន:** `{site_url}/wp-json/wu/v2/`
**ការផ្ទៀងផ្ទាត់អត្តសញ្ញាណ:** API Key និង Secret (HTTP Basic Auth ឬ URL Parameters)

## ការផ្ទៀងផ្ទាត់អត្តសញ្ញាណ {#authentication}

### បើក API {#enable-api}
```php
// Enable API in Ultimate Multisite settings or programmatically
wu_save_setting('enable_api', true);
```

### ទទួលព័ត៌មានសម្គាល់ API {#get-api-credentials}
```php
$api_key = wu_get_setting('api_key');
$api_secret = wu_get_setting('api_secret');
```

### វិធីសាស្ត្រផ្ទៀងផ្ទាត់អត្តសញ្ញាណ {#authentication-methods}

**HTTP Basic Auth (បានណែនាំ):**
```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

**URL Parameters:**
```bash
curl "https://yoursite.com/wp-json/wu/v2/customers?api_key=your_key&api_secret=your_secret"
```

## Endpoint ស្នូល {#core-endpoints}

### 1. Customers API {#1-customers-api}

**ផ្លូវមូលដ្ឋាន:** `/customers`

**ទទួលអតិថិជនទាំងអស់**
```http
GET /wu/v2/customers
```

**ទទួលអតិថិជនម្នាក់**
```http
GET /wu/v2/customers/{id}
```

**បង្កើតអតិថិជន**
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

**ធ្វើបច្ចុប្បន្នភាពអតិថិជន**
```http
PUT /wu/v2/customers/{id}
Content-Type: application/json

{
    "vip": true,
    "extra_information": "VIP customer notes"
}
```

**លុបអតិថិជន**
```http
DELETE /wu/v2/customers/{id}
```

### 2. Sites API {#2-sites-api}

**ផ្លូវមូលដ្ឋាន:** `/sites`

**បង្កើត site**
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

### 3. Memberships API {#3-memberships-api}

**ផ្លូវមូលដ្ឋាន:** `/memberships`

**បង្កើត membership**
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

### 4. Products API {#4-products-api}

**ផ្លូវមូលដ្ឋាន:** `/products`

**ទទួលផលិតផលទាំងអស់**
```http
GET /wu/v2/products
```

### 5. Payments API {#5-payments-api}

**ផ្លូវមូលដ្ឋាន:** `/payments`

**បង្កើតការទូទាត់**
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

### 6. Domains API {#6-domains-api}

**ផ្លូវមូលដ្ឋាន:** `/domains`

**ភ្ជាប់ domain**
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

## Endpoint ចុះឈ្មោះ {#registration-endpoint}

Endpoint `/register` ផ្តល់លំហូរ checkout/ចុះឈ្មោះពេញលេញ៖

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

**ការឆ្លើយតប:**
```json
{
    "customer": { ... },
    "membership": { ... },
    "payment": { ... },
    "site": { "id": 123 }
}
```

## Endpoint សម្រាប់ Tenant ឯករាជ្យ {#sovereign-tenant-endpoints}

Ultimate Multisite: Multi-Tenancy 1.2.0 បន្ថែមការគាំទ្រ REST សម្រាប់ tenant ឯករាជ្យ ដល់ការរួមបញ្ចូលដែលផ្តល់ រៀបចំពិនិត្យ ឬផ្ទៀងផ្ទាត់ tenant ដាច់ដោយឡែក។

payload សំណើជាក់លាក់ អាស្រ័យលើសមត្ថភាព host ដែលបានបើក ប៉ុន្តែការរួមបញ្ចូលគួររំពឹងក្រុម endpoint ទាំងនេះ៖

```http
POST /wu/v2/tenants/{site_id}/bootstrap
GET /wu/v2/tenants/{site_id}/migration-status
POST /wu/v2/tenants/{site_id}/verify
DELETE /wu/v2/tenants/{site_id}
```

ប្រើ endpoint bootstrap ដើម្បីរៀបចំ registry របស់ tenant, database, filesystem និងស្ថានភាព routing។ ប្រើ endpoint ស្ថានភាព migration និងការផ្ទៀងផ្ទាត់ មុនពេលប្តូរចរាចរណ៍ production។ ប្រើ endpoint លុប សម្រាប់ការរុះរើ tenant ឯករាជ្យ ដើម្បីឱ្យព័ត៌មានសម្គាល់ database ត្រូវបានដកចេញតាមលំហូរសម្អាត addon។

ការឆ្លើយតបស្ថានភាព migration ទូទៅរួមមាន៖

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

ចាត់ទុក `ready: false` ជាឧបសគ្គមុនបើកដំណើរការ។ ពិនិត្យព័ត៌មានលម្អិតនៃការផ្ទៀងផ្ទាត់ កែបញ្ហា database host binding, queue, user provisioning ឬ routing រួចសាកល្បងផ្ទៀងផ្ទាត់ម្តងទៀត។

## ការឆ្លើយតបកំហុស {#error-responses}

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

## ការបែងចែកទំព័រ និងការច្រោះ {#pagination-and-filtering}

**Query Parameters:**
```http
GET /wu/v2/customers?per_page=20&page=2&search=john&status=active
```

ប៉ារ៉ាម៉ែត្រទូទៅ៖
- `per_page` - ចំនួនធាតុក្នុងមួយទំព័រ (លំនាំដើម៖ 20, អតិបរមា៖ 100)
- `page` - លេខទំព័រ
- `search` - ពាក្យស្វែងរក
- `orderby` - វាលតម្រៀប
- `order` - ទិសដៅតម្រៀប (asc/desc)
- `status` - ច្រោះតាមស្ថានភាព
- `date_created` - ច្រោះតាមចន្លោះកាលបរិច្ឆេទ
