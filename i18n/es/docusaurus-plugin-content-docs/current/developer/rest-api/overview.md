---
title: Visión general de la API REST
sidebar_position: 1
_i18n_hash: 4e511d92e0002dff445f45ff05adbeda
---
# Referencia de la API REST

## Configuración Base

**URL Base:** `{site_url}/wp-json/wu/v2/`
**Autenticación:** API Key & Secret (HTTP Basic Auth o Parámetros de URL)

## Autenticación

### Habilitar API
```php
// Enable API in Ultimate Multisite settings or programmatically
wu_save_setting('enable_api', true);
```

### Obtener Credenciales de API
```php
$api_key = wu_get_setting('api_key');
$api_secret = wu_get_setting('api_secret');
```

### Métodos de Autenticación

**Autenticación Básica HTTP (Recomendado):**
```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

**Parámetros de URL:**
```bash
curl "https://yoursite.com/wp-json/wu/v2/customers?api_key=your_key&api_secret=your_secret"
```

## Puntos finales principales

### 1. API de Clientes

**Ruta Base:** `/customers`

**Obtener Todos los Clientes**
```http
GET /wu/v2/customers
```

**Obtener Cliente Único**
```http
GET /wu/v2/customers/{id}
```

**Crear Cliente**
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

**Actualizar Cliente**
```http
PUT /wu/v2/customers/{id}
Content-Type: application/json

{
    "vip": true,
    "extra_information": "VIP customer notes"
}
```

**Eliminar Cliente**
```http
DELETE /wu/v2/customers/{id}
```

### 2. API de Sitios

**Ruta Base:** `/sites`

**Crear Sitio**
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

### 3. API de Membresías

**Ruta Base:** `/memberships`

**Crear Membresía**
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

### 4. API de Productos

**Ruta Base:** `/products`

**Obtener Todos los Productos**
```http
GET /wu/v2/products
```

### 5. API de Pagos

**Ruta Base:** `/payments`

**Crear Pago**
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

### 6. API de Dominios

**Ruta Base:** `/domains`

**Mapear Dominio**
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

## Punto final de Registro

El punto final `/register` proporciona un flujo completo de pago/registro:

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

## Respuestas de Error

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

## Paginación y Filtrado

**Parámetros de Consulta:**
```http
GET /wu/v2/customers?per_page=20&page=2&search=john&status=active
```

Parámetros comunes:
- `per_page` - Elementos por página (predeterminado: 20, máximo: 100)
- `page` - Número de página
- `search` - Término de búsqueda
- `orderby` - Campo de ordenación
- `order` - Dirección de ordenación (asc/desc)
- `status` - Filtrar por estado
- `date_created` - Filtrar por rango de fechas
