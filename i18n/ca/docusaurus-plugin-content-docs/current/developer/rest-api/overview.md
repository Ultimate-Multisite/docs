---
title: Visió general de l'API REST
sidebar_position: 1
_i18n_hash: cabcc173f6a77e5de94e39fff19bc2fa
---
# Referència de l'API REST

## Configuració base {#base-configuration}

**URL base:** `{site_url}/wp-json/wu/v2/`
**Autenticació:** clau i secret de l'API (HTTP Basic Auth o paràmetres d'URL)

## Autenticació {#authentication}

### Activa l'API {#enable-api}
```php
// Enable API in Ultimate Multisite settings or programmatically
wu_save_setting('enable_api', true);
```

### Obté les credencials de l'API {#get-api-credentials}
```php
$api_key = wu_get_setting('api_key');
$api_secret = wu_get_setting('api_secret');
```

### Mètodes d'autenticació {#authentication-methods}

**HTTP Basic Auth (recomanat):**
```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

**Paràmetres d'URL:**
```bash
curl "https://yoursite.com/wp-json/wu/v2/customers?api_key=your_key&api_secret=your_secret"
```

## Punts d'accés principals {#core-endpoints}

### 1. API de clients {#1-customers-api}

**Ruta base:** `/customers`

**Obtén tots els clients**
```http
GET /wu/v2/customers
```

**Obtén un sol client**
```http
GET /wu/v2/customers/{id}
```

**Crea un client**
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

**Actualitza un client**
```http
PUT /wu/v2/customers/{id}
Content-Type: application/json

{
    "vip": true,
    "extra_information": "VIP customer notes"
}
```

**Suprimeix un client**
```http
DELETE /wu/v2/customers/{id}
```

### 2. API de llocs {#2-sites-api}

**Ruta base:** `/sites`

**Crea un lloc**
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

### 3. API de membresies {#3-memberships-api}

**Ruta base:** `/memberships`

**Crea una membresia**
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

### 4. API de productes {#4-products-api}

**Ruta base:** `/products`

**Obtén tots els productes**
```http
GET /wu/v2/products
```

### 5. API de pagaments {#5-payments-api}

**Ruta base:** `/payments`

**Crea un pagament**
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

### 6. API de dominis {#6-domains-api}

**Ruta base:** `/domains`

**Assigna un domini**
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

## Punt d'accés de registre {#registration-endpoint}

El punt d'accés `/register` proporciona un flux complet de pagament/registre:

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

**Resposta:**
```json
{
    "customer": { ... },
    "membership": { ... },
    "payment": { ... },
    "site": { "id": 123 }
}
```

## Punts d'accés d'inquilí sobirà {#sovereign-tenant-endpoints}

Ultimate Multisite: Multi-Tenancy 1.2.0 afegeix cobertura REST d'inquilí sobirà per a integracions que proveeixen, inspeccionen o verifiquen inquilins aïllats.

La càrrega útil exacta de la sol·licitud depèn de la capacitat d'amfitrió activada, però les integracions haurien d'esperar aquests grups de punts d'accés:

```http
POST /wu/v2/tenants/{site_id}/bootstrap
GET /wu/v2/tenants/{site_id}/migration-status
POST /wu/v2/tenants/{site_id}/verify
DELETE /wu/v2/tenants/{site_id}
```

Utilitza el punt d'accés de bootstrap per preparar el registre d'inquilins, la base de dades, el sistema de fitxers i l'estat d'encaminament. Utilitza els punts d'accés d'estat de migració i verificació abans de canviar el trànsit de producció. Utilitza el punt d'accés de supressió per al desmuntatge sobirà perquè les credencials de la base de dades s'eliminin mitjançant el flux de neteja de l'addon.

Les respostes típiques d'estat de migració inclouen:

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

Tracta `ready: false` com un bloquejador previ al llançament. Comprova els detalls de verificació, corregeix l'associació de l'amfitrió de la base de dades, la cua, el proveïment d'usuaris o el problema d'encaminament, i després torna a provar la verificació.

## Respostes d'error {#error-responses}

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

## Paginació i filtratge {#pagination-and-filtering}

**Paràmetres de consulta:**
```http
GET /wu/v2/customers?per_page=20&page=2&search=john&status=active
```

Paràmetres comuns:
- `per_page` - Elements per pàgina (per defecte: 20, màx.: 100)
- `page` - Número de pàgina
- `search` - Terme de cerca
- `orderby` - Camp d'ordenació
- `order` - Direcció d'ordenació (asc/desc)
- `status` - Filtra per estat
- `date_created` - Filtra per interval de dates
