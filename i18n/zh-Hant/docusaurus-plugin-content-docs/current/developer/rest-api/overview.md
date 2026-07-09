---
title: REST API 概觀
sidebar_position: 1
_i18n_hash: cabcc173f6a77e5de94e39fff19bc2fa
---
# REST API 參考 {#rest-api-reference}

## 基本設定 {#base-configuration}

**Base URL：** `{site_url}/wp-json/wu/v2/`
**Authentication：** API Key 與 Secret（HTTP Basic Auth 或 URL 參數）

## Authentication {#authentication}

### 啟用 API {#enable-api}
```php
// Enable API in Ultimate Multisite settings or programmatically
wu_save_setting('enable_api', true);
```

### 取得 API 憑證 {#get-api-credentials}
```php
$api_key = wu_get_setting('api_key');
$api_secret = wu_get_setting('api_secret');
```

### Authentication 方法 {#authentication-methods}

**HTTP Basic Auth（建議）：**
```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

**URL 參數：**
```bash
curl "https://yoursite.com/wp-json/wu/v2/customers?api_key=your_key&api_secret=your_secret"
```

## 核心端點 {#core-endpoints}

### 1. Customers API {#1-customers-api}

**Base Route：** `/customers`

**取得所有客戶**
```http
GET /wu/v2/customers
```

**取得單一客戶**
```http
GET /wu/v2/customers/{id}
```

**建立客戶**
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

**更新客戶**
```http
PUT /wu/v2/customers/{id}
Content-Type: application/json

{
    "vip": true,
    "extra_information": "VIP customer notes"
}
```

**刪除客戶**
```http
DELETE /wu/v2/customers/{id}
```

### 2. Sites API {#2-sites-api}

**Base Route：** `/sites`

**建立網站**
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

### 3. Memberships API {#3-memberships-api}

**Base Route：** `/memberships`

**建立會員資格**
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

### 4. Products API {#4-products-api}

**Base Route：** `/products`

**取得所有產品**
```http
GET /wu/v2/products
```

### 5. Payments API {#5-payments-api}

**Base Route：** `/payments`

**建立付款**
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

### 6. Domains API {#6-domains-api}

**Base Route：** `/domains`

**對應網域**
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

## 註冊端點 {#registration-endpoint}

`/register` 端點提供完整的結帳／註冊流程：

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

**回應：**
```json
{
    "customer": { ... },
    "membership": { ... },
    "payment": { ... },
    "site": { "id": 123 }
}
```

## Sovereign Tenant 端點 {#sovereign-tenant-endpoints}

Ultimate Multisite: Multi-Tenancy 1.2.0 為會佈建、檢查或驗證隔離租戶的整合新增 sovereign tenant REST 涵蓋範圍。

確切的請求承載取決於已啟用的主機功能，但整合應預期以下端點群組：

```http
POST /wu/v2/tenants/{site_id}/bootstrap
GET /wu/v2/tenants/{site_id}/migration-status
POST /wu/v2/tenants/{site_id}/verify
DELETE /wu/v2/tenants/{site_id}
```

使用 bootstrap 端點來準備租戶登錄、資料庫、檔案系統與路由狀態。在切換正式環境流量前，使用遷移狀態與驗證端點。使用刪除端點進行 sovereign 拆除，讓資料庫憑證透過 addon 清理流程移除。

典型的遷移狀態回應包括：

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

將 `ready: false` 視為上線前阻斷因素。檢查驗證詳細資料，修正資料庫主機繫結、佇列、使用者佈建或路由問題，然後重試驗證。

## 錯誤回應 {#error-responses}

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

## 分頁與篩選 {#pagination-and-filtering}

**查詢參數：**
```http
GET /wu/v2/customers?per_page=20&page=2&search=john&status=active
```

常見參數：
- `per_page` - 每頁項目數（預設：20，最大：100）
- `page` - 頁碼
- `search` - 搜尋詞
- `orderby` - 排序欄位
- `order` - 排序方向（asc/desc）
- `status` - 依狀態篩選
- `date_created` - 依日期範圍篩選
