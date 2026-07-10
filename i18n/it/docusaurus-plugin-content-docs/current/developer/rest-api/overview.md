---
title: Panoramica della REST API
sidebar_position: 1
_i18n_hash: cabcc173f6a77e5de94e39fff19bc2fa
---
# Riferimento REST API {#rest-api-reference}

## Configurazione di base {#base-configuration}

**URL di base:** `{site_url}/wp-json/wu/v2/`
**Autenticazione:** API Key e Secret (HTTP Basic Auth o parametri URL)

## Autenticazione {#authentication}

### Abilita API {#enable-api}
```php
// Enable API in Ultimate Multisite settings or programmatically
wu_save_setting('enable_api', true);
```

### Ottieni le credenziali API {#get-api-credentials}
```php
$api_key = wu_get_setting('api_key');
$api_secret = wu_get_setting('api_secret');
```

### Metodi di autenticazione {#authentication-methods}

**HTTP Basic Auth (consigliato):**
```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

**Parametri URL:**
```bash
curl "https://yoursite.com/wp-json/wu/v2/customers?api_key=your_key&api_secret=your_secret"
```

## Endpoint principali {#core-endpoints}

### 1. API Clienti {#1-customers-api}

**Route di base:** `/customers`

**Ottieni tutti i clienti**
```http
GET /wu/v2/customers
```

**Ottieni un singolo cliente**
```http
GET /wu/v2/customers/{id}
```

**Crea cliente**
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

**Aggiorna cliente**
```http
PUT /wu/v2/customers/{id}
Content-Type: application/json

{
    "vip": true,
    "extra_information": "VIP customer notes"
}
```

**Elimina cliente**
```http
DELETE /wu/v2/customers/{id}
```

### 2. API Siti {#2-sites-api}

**Route di base:** `/sites`

**Crea sito**
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

### 3. API Membership {#3-memberships-api}

**Route di base:** `/memberships`

**Crea Membership**
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

### 4. API Prodotti {#4-products-api}

**Route di base:** `/products`

**Ottieni tutti i prodotti**
```http
GET /wu/v2/products
```

### 5. API Pagamenti {#5-payments-api}

**Route di base:** `/payments`

**Crea pagamento**
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

### 6. API Domini {#6-domains-api}

**Route di base:** `/domains`

**Mappa dominio**
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

## Endpoint di registrazione {#registration-endpoint}

L'endpoint `/register` fornisce un flusso completo di checkout/registrazione:

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

**Risposta:**
```json
{
    "customer": { ... },
    "membership": { ... },
    "payment": { ... },
    "site": { "id": 123 }
}
```

## Endpoint tenant sovrani {#sovereign-tenant-endpoints}

Ultimate Multisite: Multi-Tenancy 1.2.0 aggiunge la copertura REST per tenant sovrani per integrazioni che effettuano provisioning, ispezionano o verificano tenant isolati.

Il payload esatto della richiesta dipende dalla funzionalità host abilitata, ma le integrazioni devono aspettarsi questi gruppi di endpoint:

```http
POST /wu/v2/tenants/{site_id}/bootstrap
GET /wu/v2/tenants/{site_id}/migration-status
POST /wu/v2/tenants/{site_id}/verify
DELETE /wu/v2/tenants/{site_id}
```

Usa l'endpoint di bootstrap per preparare registro tenant, database, filesystem e stato di routing. Usa gli endpoint di stato migrazione e verifica prima di deviare il traffico di produzione. Usa l'endpoint di eliminazione per lo smantellamento sovrano, in modo che le credenziali del database vengano rimosse tramite il flusso di pulizia dell'addon.

Le risposte tipiche dello stato di migrazione includono:

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

Considera `ready: false` come un blocco pre-lancio. Controlla i dettagli della verifica, risolvi il problema di binding dell'host del database, coda, provisioning utente o routing, quindi riprova la verifica.

## Risposte di errore {#error-responses}

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

## Paginazione e filtri {#pagination-and-filtering}

**Parametri query:**
```http
GET /wu/v2/customers?per_page=20&page=2&search=john&status=active
```

Parametri comuni:
- `per_page` - Elementi per pagina (predefinito: 20, max: 100)
- `page` - Numero di pagina
- `search` - Termine di ricerca
- `orderby` - Campo di ordinamento
- `order` - Direzione di ordinamento (asc/desc)
- `status` - Filtra per stato
- `date_created` - Filtra per intervallo di date
