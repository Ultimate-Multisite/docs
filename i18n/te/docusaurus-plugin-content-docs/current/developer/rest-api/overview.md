---
title: REST API అవలోకనం
sidebar_position: 1
_i18n_hash: cabcc173f6a77e5de94e39fff19bc2fa
---
# REST API సూచిక {#rest-api-reference}

## ప్రాథమిక కాన్ఫిగరేషన్ {#base-configuration}

**ప్రాథమిక URL:** `{site_url}/wp-json/wu/v2/`
**ప్రమాణీకరణ:** API కీ & రహస్యం (HTTP Basic Auth లేదా URL పరామితులు)

## ప్రమాణీకరణ {#authentication}

### APIని ప్రారంభించండి {#enable-api}
```php
// Enable API in Ultimate Multisite settings or programmatically
wu_save_setting('enable_api', true);
```

### API ఆధారాలను పొందండి {#get-api-credentials}
```php
$api_key = wu_get_setting('api_key');
$api_secret = wu_get_setting('api_secret');
```

### ప్రమాణీకరణ పద్ధతులు {#authentication-methods}

**HTTP Basic Auth (సిఫార్సు చేయబడింది):**
```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

**URL పరామితులు:**
```bash
curl "https://yoursite.com/wp-json/wu/v2/customers?api_key=your_key&api_secret=your_secret"
```

## ప్రధాన అంతిమ బిందువులు {#core-endpoints}

### 1. వినియోగదారుల API {#1-customers-api}

**ప్రాథమిక మార్గం:** `/customers`

**అన్ని వినియోగదారులను పొందండి**
```http
GET /wu/v2/customers
```

**ఒక్క వినియోగదారును పొందండి**
```http
GET /wu/v2/customers/{id}
```

**వినియోగదారును సృష్టించండి**
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

**వినియోగదారును నవీకరించండి**
```http
PUT /wu/v2/customers/{id}
Content-Type: application/json

{
    "vip": true,
    "extra_information": "VIP customer notes"
}
```

**వినియోగదారును తొలగించండి**
```http
DELETE /wu/v2/customers/{id}
```

### 2. సైట్ల API {#2-sites-api}

**ప్రాథమిక మార్గం:** `/sites`

**సైట్‌ను సృష్టించండి**
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

### 3. సభ్యత్వాల API {#3-memberships-api}

**ప్రాథమిక మార్గం:** `/memberships`

**సభ్యత్వాన్ని సృష్టించండి**
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

### 4. ఉత్పత్తుల API {#4-products-api}

**ప్రాథమిక మార్గం:** `/products`

**అన్ని ఉత్పత్తులను పొందండి**
```http
GET /wu/v2/products
```

### 5. చెల్లింపుల API {#5-payments-api}

**ప్రాథమిక మార్గం:** `/payments`

**చెల్లింపును సృష్టించండి**
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

### 6. డొమైన్‌ల API {#6-domains-api}

**ప్రాథమిక మార్గం:** `/domains`

**డొమైన్‌ను మ్యాప్ చేయండి**
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

## నమోదు అంతిమ బిందువు {#registration-endpoint}

`/register` అంతిమ బిందువు పూర్తి checkout/నమోదు ప్రవాహాన్ని అందిస్తుంది:

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

**ప్రతిస్పందన:**
```json
{
    "customer": { ... },
    "membership": { ... },
    "payment": { ... },
    "site": { "id": 123 }
}
```

## స్వతంత్ర టెనెంట్ అంతిమ బిందువులు {#sovereign-tenant-endpoints}

Ultimate Multisite: Multi-Tenancy 1.2.0 వేరుచేసిన టెనెంట్‌లను కేటాయించే, పరిశీలించే, లేదా ధృవీకరించే ఇంటిగ్రేషన్‌ల కోసం స్వతంత్ర టెనెంట్ REST కవరేజ్‌ను జోడిస్తుంది.

ఖచ్చితమైన అభ్యర్థన పేలోడ్ ప్రారంభించిన హోస్ట్ సామర్థ్యంపై ఆధారపడి ఉంటుంది, కానీ ఇంటిగ్రేషన్‌లు ఈ అంతిమ బిందువు సమూహాలను ఆశించాలి:

```http
POST /wu/v2/tenants/{site_id}/bootstrap
GET /wu/v2/tenants/{site_id}/migration-status
POST /wu/v2/tenants/{site_id}/verify
DELETE /wu/v2/tenants/{site_id}
```

టెనెంట్ రిజిస్ట్రీ, డేటాబేస్, ఫైల్ సిస్టమ్, మరియు రూటింగ్ స్థితిని సిద్ధం చేయడానికి bootstrap అంతిమ బిందువును ఉపయోగించండి. ఉత్పత్తి ట్రాఫిక్‌ను మార్చే ముందు మైగ్రేషన్ స్థితి మరియు ధృవీకరణ అంతిమ బిందువులను ఉపయోగించండి. డేటాబేస్ ఆధారాలు addon శుభ్రపరిచే ప్రవాహం ద్వారా తొలగించబడేలా స్వతంత్ర తొలగింపుకు తొలగింపు అంతిమ బిందువును ఉపయోగించండి.

సాధారణ మైగ్రేషన్ స్థితి ప్రతిస్పందనల్లో ఇవి ఉంటాయి:

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

`ready: false`ను ప్రారంభానికి ముందు అడ్డంకిగా పరిగణించండి. ధృవీకరణ వివరాలను తనిఖీ చేయండి, డేటాబేస్ హోస్ట్ బైండింగ్, క్యూ, వినియోగదారు కేటాయింపు, లేదా రూటింగ్ సమస్యను పరిష్కరించి, తర్వాత ధృవీకరణను మళ్లీ ప్రయత్నించండి.

## లోప ప్రతిస్పందనలు {#error-responses}

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

## పేజినేషన్ మరియు ఫిల్టరింగ్ {#pagination-and-filtering}

**క్వెరీ పరామితులు:**
```http
GET /wu/v2/customers?per_page=20&page=2&search=john&status=active
```

సాధారణ పరామితులు:
- `per_page` - ప్రతి పేజీకి అంశాలు (డిఫాల్ట్: 20, గరిష్ఠం: 100)
- `page` - పేజీ సంఖ్య
- `search` - శోధన పదం
- `orderby` - క్రమబద్ధీకరణ ఫీల్డ్
- `order` - క్రమబద్ధీకరణ దిశ (asc/desc)
- `status` - స్థితి ఆధారంగా ఫిల్టర్ చేయండి
- `date_created` - తేదీ పరిధి ఆధారంగా ఫిల్టర్ చేయండి
