---
title: Visión xeral da REST API
sidebar_position: 1
_i18n_hash: cabcc173f6a77e5de94e39fff19bc2fa
---
# Referencia da REST API

## Configuración base

**URL base:** `{site_url}/wp-json/wu/v2/`
**Autenticación:** chave da API e segredo (HTTP Basic Auth ou parámetros de URL)

## Autenticación

### Activar a API
```php
// Enable API in Ultimate Multisite settings or programmatically
wu_save_setting('enable_api', true);
```

### Obter credenciais da API
```php
$api_key = wu_get_setting('api_key');
$api_secret = wu_get_setting('api_secret');
```

### Métodos de autenticación

**HTTP Basic Auth (recomendado):**
```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

**Parámetros de URL:**
```bash
curl "https://yoursite.com/wp-json/wu/v2/customers?api_key=your_key&api_secret=your_secret"
```

## Endpoints principais

### 1. API de clientes

**Ruta base:** `/customers`

**Obter todos os clientes**
```http
GET /wu/v2/customers
```

**Obter un único cliente**
```http
GET /wu/v2/customers/{id}
```

**Crear cliente**
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

**Actualizar cliente**
```http
PUT /wu/v2/customers/{id}
Content-Type: application/json

{
    "vip": true,
    "extra_information": "VIP customer notes"
}
```

**Eliminar cliente**
```http
DELETE /wu/v2/customers/{id}
```

### 2. API de sitios

**Ruta base:** `/sites`

**Crear sitio**
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

### 3. API de subscricións

**Ruta base:** `/memberships`

**Crear subscrición**
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

### 4. API de produtos

**Ruta base:** `/products`

**Obter todos os produtos**
```http
GET /wu/v2/products
```

### 5. API de pagamentos

**Ruta base:** `/payments`

**Crear pagamento**
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

### 6. API de dominios

**Ruta base:** `/domains`

**Mapear dominio**
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

## Endpoint de rexistro

O endpoint `/register` proporciona un fluxo completo de checkout/rexistro:

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

## Endpoints de tenant soberano

Ultimate Multisite: Multi-Tenancy 1.2.0 engade cobertura REST para tenant soberano para integracións que aprovisionan, inspeccionan ou verifican tenants illados.

A carga útil exacta da solicitude depende da capacidade do host activada, pero as integracións deberían esperar estes grupos de endpoints:

```http
POST /wu/v2/tenants/{site_id}/bootstrap
GET /wu/v2/tenants/{site_id}/migration-status
POST /wu/v2/tenants/{site_id}/verify
DELETE /wu/v2/tenants/{site_id}
```

Usa o endpoint de bootstrap para preparar o rexistro do tenant, a base de datos, o sistema de ficheiros e o estado de enrutamento. Usa os endpoints de estado de migración e verificación antes de cambiar o tráfico de produción. Usa o endpoint de eliminación para o desmantelamento soberano, de xeito que as credenciais da base de datos se eliminen a través do fluxo de limpeza do addon.

As respostas típicas de estado de migración inclúen:

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

Trata `ready: false` como un bloqueo previo ao lanzamento. Comproba os detalles da verificación, corrixe a vinculación do host da base de datos, a cola, o aprovisionamento de usuarios ou o problema de enrutamento e logo tenta de novo a verificación.

## Respostas de erro

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

## Paxinación e filtrado

**Parámetros de consulta:**
```http
GET /wu/v2/customers?per_page=20&page=2&search=john&status=active
```

Parámetros comúns:
- `per_page` - Elementos por páxina (predeterminado: 20, máx.: 100)
- `page` - Número de páxina
- `search` - Termo de busca
- `orderby` - Campo de ordenación
- `order` - Dirección de ordenación (asc/desc)
- `status` - Filtrar por estado
- `date_created` - Filtrar por intervalo de datas
