---
title: Visão geral da REST API
sidebar_position: 1
_i18n_hash: cabcc173f6a77e5de94e39fff19bc2fa
---
# Referência da REST API

## Configuração base

**URL base:** `{site_url}/wp-json/wu/v2/`
**Autenticação:** chave de API e segredo (HTTP Basic Auth ou parâmetros de URL)

## Autenticação

### Ativar API
```php
// Enable API in Ultimate Multisite settings or programmatically
wu_save_setting('enable_api', true);
```

### Obter credenciais da API
```php
$api_key = wu_get_setting('api_key');
$api_secret = wu_get_setting('api_secret');
```

### Métodos de autenticação

**HTTP Basic Auth (recomendado):**
```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

**Parâmetros de URL:**
```bash
curl "https://yoursite.com/wp-json/wu/v2/customers?api_key=your_key&api_secret=your_secret"
```

## Pontos de extremidade principais

### 1. API de clientes

**Rota base:** `/customers`

**Obter todos os clientes**
```http
GET /wu/v2/customers
```

**Obter cliente individual**
```http
GET /wu/v2/customers/{id}
```

**Criar cliente**
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

**Atualizar cliente**
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

### 2. API de sites

**Rota base:** `/sites`

**Criar site**
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

### 3. API de associações

**Rota base:** `/memberships`

**Criar associação**
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

**Rota base:** `/products`

**Obter todos os produtos**
```http
GET /wu/v2/products
```

### 5. API de pagamentos

**Rota base:** `/payments`

**Criar pagamento**
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

### 6. API de domínios

**Rota base:** `/domains`

**Mapear domínio**
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

## Ponto de extremidade de registo

O ponto de extremidade `/register` fornece um fluxo completo de checkout/registo:

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

## Pontos de extremidade de locatários soberanos

Ultimate Multisite: Multi-Tenancy 1.2.0 adiciona cobertura REST para locatários soberanos em integrações que provisionam, inspecionam ou verificam locatários isolados.

A carga útil exata da solicitação depende da capacidade do host ativada, mas as integrações devem esperar estes grupos de pontos de extremidade:

```http
POST /wu/v2/tenants/{site_id}/bootstrap
GET /wu/v2/tenants/{site_id}/migration-status
POST /wu/v2/tenants/{site_id}/verify
DELETE /wu/v2/tenants/{site_id}
```

Use o ponto de extremidade de bootstrap para preparar o registo de locatários, a base de dados, o sistema de ficheiros e o estado de encaminhamento. Use os pontos de extremidade de estado de migração e verificação antes de mudar o tráfego de produção. Use o ponto de extremidade de eliminação para a desmontagem soberana, para que as credenciais da base de dados sejam removidas através do fluxo de limpeza do addon.

As respostas típicas de estado de migração incluem:

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

Trate `ready: false` como um bloqueador de pré-lançamento. Verifique os detalhes de verificação, corrija a vinculação do host da base de dados, a fila, o provisionamento de utilizadores ou o problema de encaminhamento e, em seguida, tente novamente a verificação.

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

## Paginação e filtragem

**Parâmetros de consulta:**
```http
GET /wu/v2/customers?per_page=20&page=2&search=john&status=active
```

Parâmetros comuns:
- `per_page` - Itens por página (predefinição: 20, máx.: 100)
- `page` - Número da página
- `search` - Termo de pesquisa
- `orderby` - Campo de ordenação
- `order` - Direção de ordenação (asc/desc)
- `status` - Filtrar por estado
- `date_created` - Filtrar por intervalo de datas
