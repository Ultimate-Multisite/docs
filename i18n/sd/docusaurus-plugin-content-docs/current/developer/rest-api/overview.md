---
title: REST API جو جائزو
sidebar_position: 1
_i18n_hash: cabcc173f6a77e5de94e39fff19bc2fa
---
# REST API حوالو

## بنيادي ترتيب {#base-configuration}

**بنيادي URL:** `{site_url}/wp-json/wu/v2/`
**تصديق:** API Key ۽ Secret (HTTP Basic Auth يا URL Parameters)

## تصديق {#authentication}

### API فعال ڪريو {#enable-api}
```php
// Enable API in Ultimate Multisite settings or programmatically
wu_save_setting('enable_api', true);
```

### API سندون حاصل ڪريو {#get-api-credentials}
```php
$api_key = wu_get_setting('api_key');
$api_secret = wu_get_setting('api_secret');
```

### تصديق جا طريقا {#authentication-methods}

**HTTP Basic Auth (سفارش ڪيل):**
```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

**URL Parameters:**
```bash
curl "https://yoursite.com/wp-json/wu/v2/customers?api_key=your_key&api_secret=your_secret"
```

## بنيادي آخري نقطا {#core-endpoints}

### 1. گراهڪن جي API {#1-customers-api}

**بنيادي رستو:** `/customers`

**سڀ گراهڪ حاصل ڪريو**
```http
GET /wu/v2/customers
```

**هڪ گراهڪ حاصل ڪريو**
```http
GET /wu/v2/customers/{id}
```

**گراهڪ ٺاهيو**
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

**گراهڪ اپڊيٽ ڪريو**
```http
PUT /wu/v2/customers/{id}
Content-Type: application/json

{
    "vip": true,
    "extra_information": "VIP customer notes"
}
```

**گراهڪ حذف ڪريو**
```http
DELETE /wu/v2/customers/{id}
```

### 2. سائيٽن جي API {#2-sites-api}

**بنيادي رستو:** `/sites`

**سائيٽ ٺاهيو**
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

### 3. رڪنيتن جي API {#3-memberships-api}

**بنيادي رستو:** `/memberships`

**رڪنيت ٺاهيو**
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

### 4. شين جي API {#4-products-api}

**بنيادي رستو:** `/products`

**سڀ شيون حاصل ڪريو**
```http
GET /wu/v2/products
```

### 5. ادائيگين جي API {#5-payments-api}

**بنيادي رستو:** `/payments`

**ادائيگي ٺاهيو**
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

### 6. ڊومينن جي API {#6-domains-api}

**بنيادي رستو:** `/domains`

**ڊومين ميپ ڪريو**
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

## رجسٽريشن جو آخري نقطو {#registration-endpoint}

`/register` آخري نقطو مڪمل checkout/رجسٽريشن وهڪرو فراهم ڪري ٿو:

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

**جواب:**
```json
{
    "customer": { ... },
    "membership": { ... },
    "payment": { ... },
    "site": { "id": 123 }
}
```

## خودمختيار ڀاڙيدار آخري نقطا {#sovereign-tenant-endpoints}

Ultimate Multisite: Multi-Tenancy 1.2.0 انهن انٽيگريشنز لاءِ خودمختيار ڀاڙيدار REST ڪوريج شامل ڪري ٿو، جيڪي الڳ ڪيل ڀاڙيدارن کي مهيا، جانچ، يا تصديق ڪن ٿيون.

درخواست جو درست payload فعال ڪيل ميزبان صلاحيت تي دارومدار رکي ٿو، پر انٽيگريشنز کي انهن endpoint گروپن جي اميد رکڻ گهرجي:

```http
POST /wu/v2/tenants/{site_id}/bootstrap
GET /wu/v2/tenants/{site_id}/migration-status
POST /wu/v2/tenants/{site_id}/verify
DELETE /wu/v2/tenants/{site_id}
```

tenant رجسٽري، database، filesystem، ۽ routing حالت تيار ڪرڻ لاءِ bootstrap آخري نقطو استعمال ڪريو. پيداوار واري traffic مٽائڻ کان اڳ migration status ۽ verification آخري نقطا استعمال ڪريو. خودمختيار ختم ڪرڻ لاءِ deletion آخري نقطو استعمال ڪريو ته جيئن database سندون addon cleanup وهڪري ذريعي هٽايون وڃن.

عام migration status جوابن ۾ شامل آهن:

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

`ready: false` کي لانچ کان اڳ روڪ طور وٺو. verification تفصيل چيڪ ڪريو، database host binding، queue، user provisioning، يا routing مسئلو درست ڪريو، پوءِ verification ٻيهر ڪوشش ڪريو.

## نقص وارا جواب {#error-responses}

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

## صفحا بندي ۽ فلٽرنگ {#pagination-and-filtering}

**Query Parameters:**
```http
GET /wu/v2/customers?per_page=20&page=2&search=john&status=active
```

عام parameter:
- `per_page` - هر صفحي تي شيون (default: 20، max: 100)
- `page` - صفحي جو نمبر
- `search` - ڳولا جو اصطلاح
- `orderby` - ترتيب ڏيڻ وارو field
- `order` - ترتيب جو رخ (asc/desc)
- `status` - status موجب فلٽر ڪريو
- `date_created` - تاريخي حد موجب فلٽر ڪريو
