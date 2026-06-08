---
title: Γενική Επισκόπηση REST API
sidebar_position: 1
_i18n_hash: 4e511d92e0002dff445f45ff05adbeda
---
# Αναφορά REST API

## Βασική Διαμόρφωση

**Βασική Διεύθυνση (Base URL):** `{site_url}/wp-json/wu/v2/`
**Εauthentിക്കποίηση:** API Key & Secret (HTTP Basic Auth ή Παράμετροι URL)

## Εauthentിക്കποίηση

### Ενεργοποίηση API
```php
// Ενεργοποίηση του API στις ρυθμίσεις του Ultimate Multisite ή μέσω κώδικα
wu_save_setting('enable_api', true);
```

### Λήψη Δεδομένων Εauthentικότητας API
```php
$api_key = wu_get_setting('api_key');
$api_secret = wu_get_setting('api_secret');
```

### Μέθοδοι Εauthentικότητας

**HTTP Basic Auth (Συνιστάται):**
```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

**Παράμετροι URL:**
```bash
curl "https://yoursite.com/wp-json/wu/v2/customers?api_key=your_key&api_secret=your_secret"
```

## Βασικοί Endpoints

### 1. API Πελατών (Customers API)

**Βασική Διαδρομή (Base Route):** `/customers`

**Λήψη Όλων των Πελατών**
```http
GET /wu/v2/customers
```

**Λήψη Ένα Μοναδικού Πελάτη**
```http
GET /wu/v2/customers/{id}
```

**Δημιουργία Πελάτη**
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

**Ενημέρωση Πελάτη**
```http
PUT /wu/v2/customers/{id}
Content-Type: application/json

{
    "vip": true,
    "extra_information": "Σημειώσεις για VIP πελάτη"
}
```

**Διαγραφή Πελάτη**
```http
DELETE /wu/v2/customers/{id}
```

### 2. API Ιστοσελίδων (Sites API)

**Βασική Διαδρομή (Base Route):** `/sites`

**Δημιουργία Ιστοσελίδας**
```http
POST /wu/v2/sites
Content-Type: application/json

{
    "customer_id": 5,
    "membership_id": 10,
    "domain": "example.com",
    "path": "/",
    "title": "Η Νέα Ιστοσελίδα μου",
    "template_id": 1,
    "type": "customer_owned"
}
```

### 3. API Μητρησιויות (Memberships API)

**Βασική Διαδρομή (Base Route):** `/memberships`

**Δημιουργία Μητρησμίας**
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

### 4. API Προϊόντων (Products API)

**Βασική Διαδρομή (Base Route):** `/products`

**Λήψη Όλων των Προϊόντων**
```http
GET /wu/v2/products
```

### 5. API Πληρωμών (Payments API)

**Βασική Διαδρομή (Base Route):** `/payments`

**Δημιουργία Πληρωμής**
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

### 6. API Τομέων (Domains API)

**Βασική Διαδρομή (Base Route):** `/domains`

**Εκ매핑 Τομέα**
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

## Endpoint Εγγραφής (Registration Endpoint)

Το endpoint `/register` παρέχει μια πλήρη ροή checkout/εγγραφής:

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
        "site_title": "Η Νέα Ιστοσελίδα μου",
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

**Απάντηση (Response):**
```json
{
    "customer": { ... },
    "membership": { ... },
    "payment": { ... },
    "site": { "id": 123 }
}
```

## Απαντήσεις Σφάλματος (Error Responses)

```json
{
    "code": "wu_rest_invalid_parameter",
    "message": "Μη έγκυρη τιμή παραμέτρου",
    "data": {
        "status": 400,
        "params": {
            "email": "Μη έγκυρο μορφότυπο email"
        }
    }
}
```

## Paginação και Φιλτράρισμα (Pagination and Filtering)

**Παράμετροι Ερωτήματος (Query Parameters):**
```http
GET /wu/v2/customers?per_page=20&page=2&search=john&status=active
```

Συχνές παράμετροι:
- `per_page` - Πληροφορίες ανά σελίδα (default: 20, max: 100)
- `page` - Αριθμός σελίδας
- `search` - Όρος αναζήτησης
- `orderby` - Πεδίο ταξινόμησης
- `order` - Κατεύθυνση ταξινόμησης (asc/desc)
- `status` - Φιλτράρισμα βάσει status
- `date_created` - Φιλτράρισμα βάσει εύρους ημερομης
