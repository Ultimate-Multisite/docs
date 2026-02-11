---
title: Panoramica dell'API REST
sidebar_position: 1
_i18n_hash: 4e511d92e0002dff445f45ff05adbeda
---
# Riferimento API REST

## Configurazione di base

**URL di base:** `{site_url}/wp-json/wu/v2/`
**Autenticazione:** API Key & Secret (HTTP Basic Auth o Parametri URL)

## Autenticazione

### Abilita API
```php
// Enable API in Ultimate Multisite settings or programmatically
wu_save_setting('enable_api', true);
```

### Ottieni credenziali API
```php
$api_key = wu_get_setting('api_key');
$api_secret = wu_get_setting('api_secret');
```

### Metodi di autenticazione

**Autenticazione HTTP Basic (Consigliata):**
```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

**Parametri URL:**
```bash
curl "https://yoursite.com/wp-json/wu/v2/customers?api_key=your_key&api_secret=your_secret"
```

## Endpoint principali

### 1. API Clienti

**Percorso di base:** `/customers`

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

### 2. API Siti

**Percorso di base:** `/sites`

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

### 3. API Abbonamenti

**Percorso di base:** `/memberships`

**Crea abbonamento**
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

### 4. API Prodotti

**Percorso di base:** `/products`

**Ottieni tutti i prodotti**
```http
GET /wu/v2/products
```

### 5. API Pagamenti

**Percorso di base:** `/payments`

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

### 6. API Domini

**Percorso di base:** `/domains`

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

## Endpoint di registrazione

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

## Risposte di errore

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

## Paginazione e filtraggio

**Parametri di query:**
```http
GET /wu/v2/customers?per_page=20&page=2&search=john&status=active
```

Parametri comuni:
- `per_page` - Elementi per pagina (predefinito: 20, massimo: 100)
- `page` - Numero di pagina
- `search` - Termine di ricerca
- `orderby` - Campo di ordinamento
- `order` - Direzione di ordinamento (asc/desc)
- `status` - Filtra per stato
- `date_created` - Filtra per intervallo di data
