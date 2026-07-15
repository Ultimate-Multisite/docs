---
title: REST API-ի ակնարկ
sidebar_position: 1
_i18n_hash: cabcc173f6a77e5de94e39fff19bc2fa
---
# REST API տեղեկատու

## Հիմնական կազմաձևում {#base-configuration}

**Հիմնական URL:** `{site_url}/wp-json/wu/v2/`
**Նույնականացում:** API բանալի և գաղտնիք (HTTP Basic Auth կամ URL պարամետրեր)

## Նույնականացում {#authentication}

### Միացնել API-ը {#enable-api}
```php
// Enable API in Ultimate Multisite settings or programmatically
wu_save_setting('enable_api', true);
```

### Ստանալ API հավատարմագրերը {#get-api-credentials}
```php
$api_key = wu_get_setting('api_key');
$api_secret = wu_get_setting('api_secret');
```

### Նույնականացման մեթոդներ {#authentication-methods}

**HTTP Basic Auth (խորհուրդ է տրվում):**
```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

**URL պարամետրեր:**
```bash
curl "https://yoursite.com/wp-json/wu/v2/customers?api_key=your_key&api_secret=your_secret"
```

## Հիմնական վերջնակետեր {#core-endpoints}

### 1. Հաճախորդների API {#1-customers-api}

**Հիմնական երթուղի:** `/customers`

**Ստանալ բոլոր հաճախորդներին**
```http
GET /wu/v2/customers
```

**Ստանալ մեկ հաճախորդ**
```http
GET /wu/v2/customers/{id}
```

**Ստեղծել հաճախորդ**
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

**Թարմացնել հաճախորդը**
```http
PUT /wu/v2/customers/{id}
Content-Type: application/json

{
    "vip": true,
    "extra_information": "VIP customer notes"
}
```

**Ջնջել հաճախորդը**
```http
DELETE /wu/v2/customers/{id}
```

### 2. Կայքերի API {#2-sites-api}

**Հիմնական երթուղի:** `/sites`

**Ստեղծել կայք**
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

### 3. Անդամակցությունների API {#3-memberships-api}

**Հիմնական երթուղի:** `/memberships`

**Ստեղծել անդամակցություն**
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

### 4. Ապրանքների API {#4-products-api}

**Հիմնական երթուղի:** `/products`

**Ստանալ բոլոր ապրանքները**
```http
GET /wu/v2/products
```

### 5. Վճարումների API {#5-payments-api}

**Հիմնական երթուղի:** `/payments`

**Ստեղծել վճարում**
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

### 6. Դոմենների API {#6-domains-api}

**Հիմնական երթուղի:** `/domains`

**Կցել դոմեն**
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

## Գրանցման վերջնակետ {#registration-endpoint}

`/register` վերջնակետը տրամադրում է ամբողջական checkout/գրանցման հոսք.

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

**Պատասխան:**
```json
{
    "customer": { ... },
    "membership": { ... },
    "payment": { ... },
    "site": { "id": 123 }
}
```

## Ինքնիշխան վարձակալների վերջնակետեր {#sovereign-tenant-endpoints}

Ultimate Multisite: Multi-Tenancy 1.2.0-ը ավելացնում է ինքնիշխան վարձակալների REST ծածկույթ այն ինտեգրումների համար, որոնք տրամադրում, ստուգում կամ հաստատում են մեկուսացված վարձակալներին։

Ճշգրիտ հարցման payload-ը կախված է միացված հոստի հնարավորությունից, բայց ինտեգրումները պետք է ակնկալեն այս վերջնակետերի խմբերը.

```http
POST /wu/v2/tenants/{site_id}/bootstrap
GET /wu/v2/tenants/{site_id}/migration-status
POST /wu/v2/tenants/{site_id}/verify
DELETE /wu/v2/tenants/{site_id}
```

Օգտագործեք bootstrap վերջնակետը՝ վարձակալի ռեեստրը, տվյալների բազան, ֆայլային համակարգը և երթուղավորման վիճակը պատրաստելու համար։ Օգտագործեք միգրացիայի կարգավիճակի և հաստատման վերջնակետերը՝ նախքան արտադրական թրաֆիկը փոխելը։ Օգտագործեք ջնջման վերջնակետը ինքնիշխան ապակազմակերպման համար, որպեսզի տվյալների բազայի հավատարմագրերը հեռացվեն addon-ի մաքրման հոսքի միջոցով։

Միգրացիայի կարգավիճակի տիպիկ պատասխանները ներառում են.

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

`ready: false`-ը դիտարկեք որպես մեկնարկից առաջ արգելափակող գործոն։ Ստուգեք հաստատման մանրամասները, շտկեք տվյալների բազայի հոստի կապակցումը, հերթը, օգտատերերի տրամադրումը կամ երթուղավորման խնդիրը, ապա կրկին փորձեք հաստատումը։

## Սխալի պատասխաններ {#error-responses}

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

## Էջավորում և ֆիլտրում {#pagination-and-filtering}

**Հարցման պարամետրեր:**
```http
GET /wu/v2/customers?per_page=20&page=2&search=john&status=active
```

Ընդհանուր պարամետրեր.
- `per_page` - Տարրեր մեկ էջում (կանխադրված՝ 20, առավելագույնը՝ 100)
- `page` - Էջի համար
- `search` - Որոնման տերմին
- `orderby` - Դասավորման դաշտ
- `order` - Դասավորման ուղղություն (asc/desc)
- `status` - Ֆիլտրել ըստ կարգավիճակի
- `date_created` - Ֆիլտրել ըստ ամսաթվերի միջակայքի
