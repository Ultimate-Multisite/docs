---
title: Επισκόπηση REST API
sidebar_position: 1
_i18n_hash: cabcc173f6a77e5de94e39fff19bc2fa
---
# Αναφορά REST API

## Βασική διαμόρφωση

**Βασικό URL:** `{site_url}/wp-json/wu/v2/`
**Έλεγχος ταυτότητας:** API Key & Secret (HTTP Basic Auth ή παράμετροι URL)

## Έλεγχος ταυτότητας

### Ενεργοποίηση API
```php
// Enable API in Ultimate Multisite settings or programmatically
wu_save_setting('enable_api', true);
```

### Λήψη διαπιστευτηρίων API
```php
$api_key = wu_get_setting('api_key');
$api_secret = wu_get_setting('api_secret');
```

### Μέθοδοι ελέγχου ταυτότητας

**HTTP Basic Auth (Συνιστάται):**
```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

**Παράμετροι URL:**
```bash
curl "https://yoursite.com/wp-json/wu/v2/customers?api_key=your_key&api_secret=your_secret"
```

## Κύρια τελικά σημεία

### 1. API πελατών

**Βασική διαδρομή:** `/customers`

**Λήψη όλων των πελατών**
```http
GET /wu/v2/customers
```

**Λήψη μεμονωμένου πελάτη**
```http
GET /wu/v2/customers/{id}
```

**Δημιουργία πελάτη**
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

**Ενημέρωση πελάτη**
```http
PUT /wu/v2/customers/{id}
Content-Type: application/json

{
    "vip": true,
    "extra_information": "VIP customer notes"
}
```

**Διαγραφή πελάτη**
```http
DELETE /wu/v2/customers/{id}
```

### 2. API ιστότοπων

**Βασική διαδρομή:** `/sites`

**Δημιουργία ιστότοπου**
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

### 3. API συνδρομών

**Βασική διαδρομή:** `/memberships`

**Δημιουργία συνδρομής**
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

### 4. API προϊόντων

**Βασική διαδρομή:** `/products`

**Λήψη όλων των προϊόντων**
```http
GET /wu/v2/products
```

### 5. API πληρωμών

**Βασική διαδρομή:** `/payments`

**Δημιουργία πληρωμής**
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

### 6. API τομέων

**Βασική διαδρομή:** `/domains`

**Αντιστοίχιση τομέα**
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

## Τελικό σημείο εγγραφής

Το τελικό σημείο `/register` παρέχει μια πλήρη ροή checkout/εγγραφής:

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

**Απόκριση:**
```json
{
    "customer": { ... },
    "membership": { ... },
    "payment": { ... },
    "site": { "id": 123 }
}
```

## Τελικά σημεία κυρίαρχων μισθωτών

Το Ultimate Multisite: Multi-Tenancy 1.2.0 προσθέτει κάλυψη REST για κυρίαρχους μισθωτές για ενσωματώσεις που παρέχουν, επιθεωρούν ή επαληθεύουν απομονωμένους μισθωτές.

Το ακριβές ωφέλιμο φορτίο αιτήματος εξαρτάται από την ενεργοποιημένη δυνατότητα του host, αλλά οι ενσωματώσεις θα πρέπει να αναμένουν αυτές τις ομάδες τελικών σημείων:

```http
POST /wu/v2/tenants/{site_id}/bootstrap
GET /wu/v2/tenants/{site_id}/migration-status
POST /wu/v2/tenants/{site_id}/verify
DELETE /wu/v2/tenants/{site_id}
```

Χρησιμοποιήστε το τελικό σημείο bootstrap για να προετοιμάσετε το μητρώο μισθωτή, τη βάση δεδομένων, το σύστημα αρχείων και την κατάσταση δρομολόγησης. Χρησιμοποιήστε τα τελικά σημεία κατάστασης μετεγκατάστασης και επαλήθευσης πριν αλλάξετε την παραγωγική κίνηση. Χρησιμοποιήστε το τελικό σημείο διαγραφής για κυρίαρχη κατάργηση, ώστε τα διαπιστευτήρια βάσης δεδομένων να αφαιρεθούν μέσω της ροής εκκαθάρισης του addon.

Οι τυπικές αποκρίσεις κατάστασης μετεγκατάστασης περιλαμβάνουν:

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

Αντιμετωπίστε το `ready: false` ως εμπόδιο πριν από την κυκλοφορία. Ελέγξτε τις λεπτομέρειες επαλήθευσης, διορθώστε τη σύνδεση host της βάσης δεδομένων, την ουρά, την παροχή χρηστών ή το ζήτημα δρομολόγησης και, στη συνέχεια, δοκιμάστε ξανά την επαλήθευση.

## Αποκρίσεις σφαλμάτων

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

## Σελιδοποίηση και φιλτράρισμα

**Παράμετροι ερωτήματος:**
```http
GET /wu/v2/customers?per_page=20&page=2&search=john&status=active
```

Συνήθεις παράμετροι:
- `per_page` - Στοιχεία ανά σελίδα (προεπιλογή: 20, μέγιστο: 100)
- `page` - Αριθμός σελίδας
- `search` - Όρος αναζήτησης
- `orderby` - Πεδίο ταξινόμησης
- `order` - Κατεύθυνση ταξινόμησης (asc/desc)
- `status` - Φιλτράρισμα κατά κατάσταση
- `date_created` - Φιλτράρισμα κατά εύρος ημερομηνιών
