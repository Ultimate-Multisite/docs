---
title: REST API 概览
sidebar_position: 1
_i18n_hash: 4e511d92e0002dff445f45ff05adbeda
---
# REST API 参考

## 基础配置

**基础 URL:** `{site_url}/wp-json/wu/v2/`  
**身份验证:** API Key & Secret (HTTP Basic Auth or URL Parameters)

## 身份验证

### 启用 API
```php
// Enable API in Ultimate Multisite settings or programmatically
wu_save_setting('enable_api', true);
```

### 获取 API 凭证
```php
$api_key = wu_get_setting('api_key');
$api_secret = wu_get_setting('api_secret');
```

### 认证方法

**HTTP Basic Auth (推荐):**
```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

**URL 参数:**
```bash
curl "https://yoursite.com/wp-json/wu/v2/customers?api_key=your_key&api_secret=your_secret"
```

## 核心端点

### 1. 客户 API

**基础路由:** `/customers`

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

**基础路由:** `/sites`

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

### 3. 会员 API

**基础路由:** `/memberships`

**创建会员**
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

**基础路由:** `/products`

**获取所有产品**
```http
GET /wu/v2/products
```

### 5. 支付 API

**基础路由:** `/payments`

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

**基础路由:** `/domains`

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

The `/register` endpoint provides a complete checkout/registration flow:
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

**响应:**
```json
{
    "customer": { ... },
    "membership": { ... },
    "payment": { ... },
    "site": { "id": 123 }
}
```

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

## 分页与过滤

**查询参数:**
```http
GET /wu/v2/customers?per_page=20&page=2&search=john&status=active
```

常用参数:
- `per_page` - 每页项目数 (默认: 20, 最大: 100)
- `page` - 页码
- `search` - 搜索词
- `orderby` - 排序字段
- `order` - 排序方向 (升序/降序)
- `status` - 按状态过滤
- `date_created` - 按创建日期范围过滤
