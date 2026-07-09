---
title: REST API 概述
sidebar_position: 1
_i18n_hash: cabcc173f6a77e5de94e39fff19bc2fa
---
# REST API 参考

## 基础配置

**Base URL：** `{site_url}/wp-json/wu/v2/`
**认证：** API Key 和 Secret（HTTP Basic Auth 或 URL 参数）

## 认证

### 启用 API
```php
// Enable API in Ultimate Multisite settings or programmatically
wu_save_setting('enable_api', true);
```

### 获取 API 凭据
```php
$api_key = wu_get_setting('api_key');
$api_secret = wu_get_setting('api_secret');
```

### 认证方法

**HTTP Basic Auth（推荐）：**
```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

**URL 参数：**
```bash
curl "https://yoursite.com/wp-json/wu/v2/customers?api_key=your_key&api_secret=your_secret"
```

## 核心端点

### 1. 客户 API

**基础路由：** `/customers`

**获取所有客户**
```http
GET /wu/v2/customers
```

**获取单个客户**
```http
GET /wu/v2/customers/{id}
```

**创建客户**
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

**更新客户**
```http
PUT /wu/v2/customers/{id}
Content-Type: application/json

{
    "vip": true,
    "extra_information": "VIP customer notes"
}
```

**删除客户**
```http
DELETE /wu/v2/customers/{id}
```

### 2. 站点 API

**基础路由：** `/sites`

**创建站点**
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

### 3. 会员资格 API

**基础路由：** `/memberships`

**创建会员资格**
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

### 4. 产品 API

**基础路由：** `/products`

**获取所有产品**
```http
GET /wu/v2/products
```

### 5. 支付 API

**基础路由：** `/payments`

**创建支付**
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

### 6. 域名 API

**基础路由：** `/domains`

**映射域名**
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

## 注册端点

`/register` 端点提供完整的结账/注册流程：

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

**响应：**
```json
{
    "customer": { ... },
    "membership": { ... },
    "payment": { ... },
    "site": { "id": 123 }
}
```

## 主权租户端点

Ultimate Multisite: Multi-Tenancy 1.2.0 为用于配置、检查或验证隔离租户的集成添加了主权租户 REST 覆盖。

确切的请求负载取决于已启用的主机能力，但集成应预期这些端点组：

```http
POST /wu/v2/tenants/{site_id}/bootstrap
GET /wu/v2/tenants/{site_id}/migration-status
POST /wu/v2/tenants/{site_id}/verify
DELETE /wu/v2/tenants/{site_id}
```

使用 bootstrap 端点来准备租户注册表、数据库、文件系统和路由状态。在切换生产流量之前使用迁移状态和验证端点。使用删除端点进行主权拆除，以便通过插件清理流程移除数据库凭据。

典型的迁移状态响应包括：

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

将 `ready: false` 视为上线前阻断项。检查验证详细信息，修复数据库主机绑定、队列、用户配置或路由问题，然后重试验证。

## 错误响应

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

## 分页和筛选

**查询参数：**
```http
GET /wu/v2/customers?per_page=20&page=2&search=john&status=active
```

常用参数：
- `per_page` - 每页项目数（默认：20，最大：100）
- `page` - 页码
- `search` - 搜索词
- `orderby` - 排序字段
- `order` - 排序方向（asc/desc）
- `status` - 按状态筛选
- `date_created` - 按日期范围筛选
