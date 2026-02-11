---
title: Visão geral da API REST
sidebar_position: 1
_i18n_hash: 4e511d92e0002dff445f45ff05adbeda
---
# Referência da API REST

## Configuração Base

**URL Base:** `{site_url}/wp-json/wu/v2/`  
**Autenticação:** Chave e Segredo da API (Autenticação Básica HTTP ou Parâmetros de URL)

## Autenticação

### Habilitar API
```php
// Enable API in Ultimate Multisite settings or programmatically
wu_save_setting('enable_api', true);
```

### Obter Credenciais da API
```php
$api_key = wu_get_setting('api_key');
$api_secret = wu_get_setting('api_secret');
```

### Métodos de Autenticação

**Autenticação Básica HTTP (Recomendado):**
```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

**Parâmetros de URL:**
```bash
curl "https://yoursite.com/wp-json/wu/v2/customers?api_key=your_key&api_secret=your_secret"
```

## Endpoints Principais

### 1. API de Clientes

**Rota Base:** `/customers`

**Obter Todos os Clientes**
```http
GET /wu/v2/customers
```

**Obter Cliente Único**
```http
GET /wu/v2/customers/{id}
```

**Criar Cliente**
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

**Atualizar Cliente**
```http
PUT /wu/v2/customers/{id}
Content-Type: application/json

{
    "vip": true,
    "extra_information": "VIP customer notes"
}
```

**Excluir Cliente**
```http
DELETE /wu/v2/customers/{id}
```

### 2. API de Sites

**Rota Base:** `/sites`

**Criar Site**
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

### 3. API de Associações

**Rota Base:** `/memberships`

**Criar Associação**
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

### 4. API de Produtos

**Rota Base:** `/products`

**Obter Todos os Produtos**
```http
GET /wu/v2/products
```

### 5. API de Pagamentos

**Rota Base:** `/payments`

**Criar Pagamento**
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

### 6. API de Domínios

**Rota Base:** `/domains`

**Mapear Domínio**
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

## Endpoint de Registro

O endpoint `/register` fornece um fluxo completo de checkout/registro:
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

## Respostas de Erro
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

## Paginação e Filtragem

**Parâmetros de Consulta:**
```http
GET /wu/v2/customers?per_page=20&page=2&search=john&status=active
```

Parâmetros comuns:
- `per_page` - Itens por página (padrão: 20, máximo: 100)
- `page` - Número da página
- `search` - Termo de busca
- `orderby` - Campo de ordenação
- `order` - Direção da ordenação (asc/desc)
- `status` - Filtrar por status
- `date_created` - Filtrar por intervalo de data
