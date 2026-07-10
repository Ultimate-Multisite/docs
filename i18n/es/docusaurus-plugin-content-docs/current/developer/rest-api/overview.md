---
title: Descripción general de la REST API
sidebar_position: 1
_i18n_hash: cabcc173f6a77e5de94e39fff19bc2fa
---
# Referencia de REST API {#rest-api-reference}

## Configuración base {#base-configuration}

**URL base:** `{site_url}/wp-json/wu/v2/`
**Autenticación:** clave de API y secreto (HTTP Basic Auth o parámetros de URL)

## Autenticación {#authentication}

### Habilitar API {#enable-api}
```php
// Enable API in Ultimate Multisite settings or programmatically
wu_save_setting('enable_api', true);
```

### Obtener credenciales de API {#get-api-credentials}
```php
$api_key = wu_get_setting('api_key');
$api_secret = wu_get_setting('api_secret');
```

### Métodos de autenticación {#authentication-methods}

**HTTP Basic Auth (recomendado):**
```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

**Parámetros de URL:**
```bash
curl "https://yoursite.com/wp-json/wu/v2/customers?api_key=your_key&api_secret=your_secret"
```

## Puntos de conexión principales {#core-endpoints}

### 1. API de clientes {#1-customers-api}

**Ruta base:** `/customers`

**Obtener todos los clientes**
```http
GET /wu/v2/customers
```

**Obtener un solo cliente**
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

### 2. API de sitios {#2-sites-api}

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

### 3. API de membresías {#3-memberships-api}

**Ruta base:** `/memberships`

**Crear membresía**
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

### 4. API de productos {#4-products-api}

**Ruta base:** `/products`

**Obtener todos los productos**
```http
GET /wu/v2/products
```

### 5. API de pagos {#5-payments-api}

**Ruta base:** `/payments`

**Crear pago**
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

### 6. API de dominios {#6-domains-api}

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

## Punto de conexión de registro {#registration-endpoint}

El punto de conexión `/register` proporciona un flujo completo de checkout/registro:

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

**Respuesta:**
```json
{
    "customer": { ... },
    "membership": { ... },
    "payment": { ... },
    "site": { "id": 123 }
}
```

## Puntos de conexión de inquilino soberano {#sovereign-tenant-endpoints}

Ultimate Multisite: Multi-Tenancy 1.2.0 añade cobertura REST de inquilinos soberanos para integraciones que aprovisionan, inspeccionan o verifican inquilinos aislados.

La carga útil exacta de la solicitud depende de la capacidad del host habilitada, pero las integraciones deben esperar estos grupos de puntos de conexión:

```http
POST /wu/v2/tenants/{site_id}/bootstrap
GET /wu/v2/tenants/{site_id}/migration-status
POST /wu/v2/tenants/{site_id}/verify
DELETE /wu/v2/tenants/{site_id}
```

Usa el punto de conexión de bootstrap para preparar el registro del inquilino, la base de datos, el sistema de archivos y el estado de enrutamiento. Usa los puntos de conexión de estado de migración y verificación antes de cambiar el tráfico de producción. Usa el punto de conexión de eliminación para el desmontaje soberano, de modo que las credenciales de la base de datos se eliminen mediante el flujo de limpieza del addon.

Las respuestas típicas de estado de migración incluyen:

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

Trata `ready: false` como un bloqueo previo al lanzamiento. Revisa los detalles de verificación, corrige el enlace del host de la base de datos, la cola, el aprovisionamiento de usuarios o el problema de enrutamiento y, a continuación, vuelve a intentar la verificación.

## Respuestas de error {#error-responses}

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

## Paginación y filtrado {#pagination-and-filtering}

**Parámetros de consulta:**
```http
GET /wu/v2/customers?per_page=20&page=2&search=john&status=active
```

Parámetros comunes:
- `per_page` - Elementos por página (predeterminado: 20, máx.: 100)
- `page` - Número de página
- `search` - Término de búsqueda
- `orderby` - Campo de ordenación
- `order` - Dirección de ordenación (asc/desc)
- `status` - Filtrar por estado
- `date_created` - Filtrar por rango de fechas
