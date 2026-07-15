---
title: REST API მიმოხილვა
sidebar_position: 1
_i18n_hash: cabcc173f6a77e5de94e39fff19bc2fa
---
# REST API ცნობარი

## საბაზისო კონფიგურაცია {#base-configuration}

**საბაზისო URL:** `{site_url}/wp-json/wu/v2/`
**ავთენტიფიკაცია:** API Key და Secret (HTTP Basic Auth ან URL პარამეტრები)

## ავთენტიფიკაცია {#authentication}

### API-ს ჩართვა {#enable-api}
```php
// Enable API in Ultimate Multisite settings or programmatically
wu_save_setting('enable_api', true);
```

### API სერტიფიკატების მიღება {#get-api-credentials}
```php
$api_key = wu_get_setting('api_key');
$api_secret = wu_get_setting('api_secret');
```

### ავთენტიფიკაციის მეთოდები {#authentication-methods}

**HTTP Basic Auth (რეკომენდებულია):**
```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

**URL პარამეტრები:**
```bash
curl "https://yoursite.com/wp-json/wu/v2/customers?api_key=your_key&api_secret=your_secret"
```

## ძირითადი endpoint-ები {#core-endpoints}

### 1. მომხმარებლების API {#1-customers-api}

**საბაზისო მარშრუტი:** `/customers`

**ყველა მომხმარებლის მიღება**
```http
GET /wu/v2/customers
```

**ერთი მომხმარებლის მიღება**
```http
GET /wu/v2/customers/{id}
```

**მომხმარებლის შექმნა**
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

**მომხმარებლის განახლება**
```http
PUT /wu/v2/customers/{id}
Content-Type: application/json

{
    "vip": true,
    "extra_information": "VIP customer notes"
}
```

**მომხმარებლის წაშლა**
```http
DELETE /wu/v2/customers/{id}
```

### 2. საიტების API {#2-sites-api}

**საბაზისო მარშრუტი:** `/sites`

**საიტის შექმნა**
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

### 3. წევრობების API {#3-memberships-api}

**საბაზისო მარშრუტი:** `/memberships`

**წევრობის შექმნა**
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

### 4. პროდუქტების API {#4-products-api}

**საბაზისო მარშრუტი:** `/products`

**ყველა პროდუქტის მიღება**
```http
GET /wu/v2/products
```

### 5. გადახდების API {#5-payments-api}

**საბაზისო მარშრუტი:** `/payments`

**გადახდის შექმნა**
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

### 6. დომენების API {#6-domains-api}

**საბაზისო მარშრუტი:** `/domains`

**დომენის მიბმა**
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

## რეგისტრაციის endpoint {#registration-endpoint}

`/register` endpoint უზრუნველყოფს სრულ გადახდის/რეგისტრაციის პროცესს:

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

**პასუხი:**
```json
{
    "customer": { ... },
    "membership": { ... },
    "payment": { ... },
    "site": { "id": 123 }
}
```

## სუვერენული tenant-ების endpoint-ები {#sovereign-tenant-endpoints}

Ultimate Multisite: Multi-Tenancy 1.2.0 ამატებს სუვერენული tenant-ების REST დაფარვას ინტეგრაციებისთვის, რომლებიც იზოლირებულ tenant-ებს ამზადებენ, ამოწმებენ ან ადასტურებენ.

ზუსტი მოთხოვნის payload დამოკიდებულია ჩართული ჰოსტის შესაძლებლობაზე, მაგრამ ინტეგრაციებმა უნდა მოელოდნენ ამ endpoint ჯგუფებს:

```http
POST /wu/v2/tenants/{site_id}/bootstrap
GET /wu/v2/tenants/{site_id}/migration-status
POST /wu/v2/tenants/{site_id}/verify
DELETE /wu/v2/tenants/{site_id}
```

გამოიყენეთ bootstrap endpoint tenant-ის რეესტრის, მონაცემთა ბაზის, ფაილური სისტემისა და მარშრუტიზაციის მდგომარეობის მოსამზადებლად. გამოიყენეთ მიგრაციის სტატუსისა და დადასტურების endpoint-ები საწარმოო ტრაფიკის გადართვამდე. გამოიყენეთ წაშლის endpoint სუვერენული დაშლისთვის, რათა მონაცემთა ბაზის სერტიფიკატები addon-ის გასუფთავების პროცესით წაიშალოს.

მიგრაციის სტატუსის ტიპური პასუხები მოიცავს:

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

`ready: false` მიიჩნიეთ გაშვებამდე ბლოკერად. შეამოწმეთ დადასტურების დეტალები, გამოასწორეთ მონაცემთა ბაზის ჰოსტის binding, queue, მომხმარებლის provision-ინგი ან მარშრუტიზაციის პრობლემა, შემდეგ ხელახლა სცადეთ დადასტურება.

## შეცდომის პასუხები {#error-responses}

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

## გვერდებად დაყოფა და გაფილტვრა {#pagination-and-filtering}

**მოთხოვნის პარამეტრები:**
```http
GET /wu/v2/customers?per_page=20&page=2&search=john&status=active
```

საერთო პარამეტრები:
- `per_page` - ელემენტები თითო გვერდზე (ნაგულისხმევი: 20, მაქს.: 100)
- `page` - გვერდის ნომერი
- `search` - საძიებო ტერმინი
- `orderby` - დალაგების ველი
- `order` - დალაგების მიმართულება (asc/desc)
- `status` - გაფილტვრა სტატუსის მიხედვით
- `date_created` - გაფილტვრა თარიღების დიაპაზონის მიხედვით
