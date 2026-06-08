---
title: Resum de l'API REST
sidebar_position: 1
_i18n_hash: 4e511d92e0002dff445f45ff05adbeda
---
# Referència de l'API REST

## Configuració Base

**URL Base:** `{site_url}/wp-json/wu/v2/`
**Autenticació:** API Key & Secret (Autenticació Básica HTTP o Paràmetres d'URL)

## Autenticació

### Activar l'API
```php
// Activar l'API a les configuracions de Ultimate Multisite o programàticament
wu_save_setting('enable_api', true);
```

### Obtenir les credencials de l'API
```php
$api_key = wu_get_setting('api_key');
$api_secret = wu_get_setting('api_secret');
```

### Mètodes d'Autenticació

**Autenticació Básica HTTP (Recomanat):**
```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

**Paràmetres d'URL:**
```bash
curl "https://yoursite.com/wp-json/wu/v2/customers?api_key=your_key&api_secret=your_secret"
```

## Endpoints Principals

### 1. API de Clients (Customers)

**Ruta Base:** `/customers`

**Obtenir tots els clients**
```http
GET /wu/v2/customers
```

**Obtenir un client específic**
```http
GET /wu/v2/customers/{id}
```

**Crear un client**
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

**Actualitzar un client**
```http
PUT /wu/v2/customers/{id}
Content-Type: application/json

{
    "vip": true,
    "extra_information": "Notes del client VIP"
}
```

**Eliminar un client**
```http
DELETE /wu/v2/customers/{id}
```

### 2. API de Sites

**Ruta Base:** `/sites`

**Crear un site**
```http
POST /wu/v2/sites
Content-Type: application/json

{
    "customer_id": 5,
    "membership_id": 10,
    "domain": "example.com",
    "path": "/",
    "title": "El meu nou site",
    "template_id": 1,
    "type": "customer_owned"
}
```

### 3. API de Membresíes (Memberships)

**Ruta Base:** `/memberships`

**Crear una membresia**
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

### 4. API de Productes

**Ruta Base:** `/products`

**Obtenir tots els productes**
```http
GET /wu/v2/products
```

### 5. API de Pagaments

**Ruta Base:** `/payments`

**Crear un pagament**
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

### 6. API de Domínis

**Ruta Base:** `/domains`

**Mapejar un domini**
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

## Endpoint de Registració

L'endpoint `/register` proporciona un flux complet de pagament/registració:

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
        "site_title": "El meu nou site",
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

## Respostes d'Error

```json
{
    "code": "wu_rest_invalid_parameter",
    "message": "Valor de paràmetre no vàlid",
    "data": {
        "status": 400,
        "params": {
            "email": "Format de correu electrònic no vàlid"
        }
    }
}
```

## Paginació i Filtratge

**Paràmetres de consulta:**
```http
GET /wu/v2/customers?per_page=20&page=2&search=john&status=active
```

Paràmetres comuns:
- `per_page` - Elements per pàgina (defecto: 20, màxim: 100)
- `page` - Número de pàgina
- `search` - Terme de cerca
- `orderby` - Camp de tria
- `order` - Direcció de tria (asc/desc)
- `status` - Filtrar per estat
- `date_created` - Filtrar per rang de dates
