---
title: REST API ଅବଲୋକନ
sidebar_position: 1
_i18n_hash: cabcc173f6a77e5de94e39fff19bc2fa
---
# REST API ସନ୍ଦର୍ଭ

## ମୂଳ ବିନ୍ୟାସ

**ମୂଳ URL:** `{site_url}/wp-json/wu/v2/`
**ପ୍ରମାଣୀକରଣ:** API Key ଓ Secret (HTTP Basic Auth କିମ୍ବା URL ପାରାମିଟର)

## ପ୍ରମାଣୀକରଣ

### API ସକ୍ଷମ କରନ୍ତୁ
```php
// Enable API in Ultimate Multisite settings or programmatically
wu_save_setting('enable_api', true);
```

### API ପରିଚୟତଥ୍ୟ ପାଆନ୍ତୁ
```php
$api_key = wu_get_setting('api_key');
$api_secret = wu_get_setting('api_secret');
```

### ପ୍ରମାଣୀକରଣ ପଦ୍ଧତି

**HTTP Basic Auth (ସୁପାରିଶିତ):**
```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

**URL ପାରାମିଟର:**
```bash
curl "https://yoursite.com/wp-json/wu/v2/customers?api_key=your_key&api_secret=your_secret"
```

## ମୁଖ୍ୟ ଶେଷବିନ୍ଦୁ

### 1. ଗ୍ରାହକ API

**ମୂଳ ରୁଟ୍:** `/customers`

**ସମସ୍ତ ଗ୍ରାହକ ପାଆନ୍ତୁ**
```http
GET /wu/v2/customers
```

**ଏକକ ଗ୍ରାହକ ପାଆନ୍ତୁ**
```http
GET /wu/v2/customers/{id}
```

**ଗ୍ରାହକ ସୃଷ୍ଟି କରନ୍ତୁ**
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

**ଗ୍ରାହକ ଅଦ୍ୟତନ କରନ୍ତୁ**
```http
PUT /wu/v2/customers/{id}
Content-Type: application/json

{
    "vip": true,
    "extra_information": "VIP customer notes"
}
```

**ଗ୍ରାହକ ବିଲୋପ କରନ୍ତୁ**
```http
DELETE /wu/v2/customers/{id}
```

### 2. ୱେବସାଇଟ୍ API

**ମୂଳ ରୁଟ୍:** `/sites`

**ୱେବସାଇଟ୍ ସୃଷ୍ଟି କରନ୍ତୁ**
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

### 3. ସଦସ୍ୟତା API

**ମୂଳ ରୁଟ୍:** `/memberships`

**ସଦସ୍ୟତା ସୃଷ୍ଟି କରନ୍ତୁ**
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

### 4. ଉତ୍ପାଦ API

**ମୂଳ ରୁଟ୍:** `/products`

**ସମସ୍ତ ଉତ୍ପାଦ ପାଆନ୍ତୁ**
```http
GET /wu/v2/products
```

### 5. ଦେୟ API

**ମୂଳ ରୁଟ୍:** `/payments`

**ଦେୟ ସୃଷ୍ଟି କରନ୍ତୁ**
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

### 6. ଡୋମେନ୍ API

**ମୂଳ ରୁଟ୍:** `/domains`

**ଡୋମେନ୍ ମ୍ୟାପ୍ କରନ୍ତୁ**
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

## ପଞ୍ଜୀକରଣ ଶେଷବିନ୍ଦୁ

`/register` ଶେଷବିନ୍ଦୁ ଏକ ସମ୍ପୂର୍ଣ୍ଣ କ୍ରୟ-ସମାପ୍ତି/ପଞ୍ଜୀକରଣ ପ୍ରବାହ ଦେଇଥାଏ:

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

**ପ୍ରତିକ୍ରିୟା:**
```json
{
    "customer": { ... },
    "membership": { ... },
    "payment": { ... },
    "site": { "id": 123 }
}
```

## ସ୍ୱାଧୀନ ଭଡ଼ାଟିଆ ଶେଷବିନ୍ଦୁ

Ultimate Multisite: Multi-Tenancy 1.2.0 ଏମିତି ଇଣ୍ଟିଗ୍ରେସନ୍ ପାଇଁ ସ୍ୱାଧୀନ ଭଡ଼ାଟିଆ REST କଭରେଜ୍ ଯୋଡ଼େ, ଯେଉଁମାନେ ଅଲଗା ଭଡ଼ାଟିଆଙ୍କୁ ପ୍ରସ୍ତୁତ, ଯାଞ୍ଚ କିମ୍ବା ସତ୍ୟାପନ କରନ୍ତି।

ନିଖୁଟ ଅନୁରୋଧ payload ସକ୍ଷମ ହୋଷ୍ଟ କ୍ଷମତା ଉପରେ ନିର୍ଭର କରେ, କିନ୍ତୁ ଇଣ୍ଟିଗ୍ରେସନ୍‌ଗୁଡ଼ିକ ଏହି ଶେଷବିନ୍ଦୁ ଗୋଷ୍ଠୀଗୁଡ଼ିକ ଆଶା କରିବା ଉଚିତ:

```http
POST /wu/v2/tenants/{site_id}/bootstrap
GET /wu/v2/tenants/{site_id}/migration-status
POST /wu/v2/tenants/{site_id}/verify
DELETE /wu/v2/tenants/{site_id}
```

ଭଡ଼ାଟିଆ ରେଜିଷ୍ଟ୍ରି, ଡାଟାବେସ୍, ଫାଇଲ୍ ସିଷ୍ଟମ୍ ଓ ରାଉଟିଂ ସ୍ଥିତି ପ୍ରସ୍ତୁତ କରିବାକୁ bootstrap ଶେଷବିନ୍ଦୁ ବ୍ୟବହାର କରନ୍ତୁ। ଉତ୍ପାଦନ ଟ୍ରାଫିକ୍ ସ୍ୱିଚ୍ କରିବା ପୂର୍ବରୁ migration status ଓ verification ଶେଷବିନ୍ଦୁ ବ୍ୟବହାର କରନ୍ତୁ। ସ୍ୱାଧୀନ teardown ପାଇଁ deletion ଶେଷବିନ୍ଦୁ ବ୍ୟବହାର କରନ୍ତୁ, ଯାହାଦ୍ୱାରା addon cleanup flow ମାଧ୍ୟମରେ ଡାଟାବେସ୍ ପରିଚୟତଥ୍ୟ ହଟାଯାଏ।

ସାଧାରଣ migration status ପ୍ରତିକ୍ରିୟାରେ ଏଗୁଡ଼ିକ ଥାଏ:

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

`ready: false` କୁ ପ୍ରାରମ୍ଭ ପୂର୍ବ ଅବରୋଧ ଭାବେ ଧରନ୍ତୁ। verification ବିବରଣୀ ଯାଞ୍ଚ କରନ୍ତୁ, ଡାଟାବେସ୍ host binding, queue, user provisioning କିମ୍ବା routing ସମସ୍ୟା ଠିକ୍ କରନ୍ତୁ, ତାପରେ ପୁଣି verification ଚେଷ୍ଟା କରନ୍ତୁ।

## ତ୍ରୁଟି ପ୍ରତିକ୍ରିୟା

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

## ପୃଷ୍ଠାଙ୍କନ ଓ ଫିଲ୍ଟରିଂ

**କ୍ୱେରି ପାରାମିଟର:**
```http
GET /wu/v2/customers?per_page=20&page=2&search=john&status=active
```

ସାଧାରଣ ପାରାମିଟର:
- `per_page` - ପ୍ରତି ପୃଷ୍ଠାରେ ଆଇଟମ୍ (ଡିଫଲ୍ଟ: 20, ସର୍ବାଧିକ: 100)
- `page` - ପୃଷ୍ଠା ସଂଖ୍ୟା
- `search` - ସନ୍ଧାନ ଶବ୍ଦ
- `orderby` - sort field
- `order` - sort direction (asc/desc)
- `status` - ସ୍ଥିତି ଅନୁସାରେ ଫିଲ୍ଟର
- `date_created` - ତାରିଖ ପରିସର ଅନୁସାରେ ଫିଲ୍ଟର
