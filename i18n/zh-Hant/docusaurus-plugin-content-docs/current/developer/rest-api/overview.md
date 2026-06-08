---
title: REST API 概覽
sidebar_position: 1
_i18n_hash: 4e511d92e0002dff445f45ff05adbeda
---
# REST API 參考資料

## 基礎設定

**基礎 URL：** `{site_url}/wp-json/wu/v2/`
**驗證方式：** API Key 與 Secret (HTTP Basic Auth 或 URL 參數)

## 驗證

### 啟用 API
```php
// 在 Ultimate Multisite 設定中或程式碼中啟用 API
wu_save_setting('enable_api', true);
```

### 取得 API 憑證
```php
$api_key = wu_get_setting('api_key');
$api_secret = wu_get_setting('api_secret');
```

### 驗證方法

**HTTP Basic Auth (推薦)：**
```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

**URL 參數：**
```bash
curl "https://yoursite.com/wp-json/wu/v2/customers?api_key=your_key&api_secret=your_secret"
```

## 核心端點

### 1. 客戶端點 (Customers API)

**基礎路徑：** `/customers`

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
    "extra_information": "VIP 客戶備註"
}
```

**刪除客戶**
```http
DELETE /wu/v2/customers/{id}
```

### 2. 網站端點 (Sites API)

**基礎路徑：** `/sites`

**建立網站**
```http
POST /wu/v2/sites
Content-Type: application/json

{
    "customer_id": 5,
    "membership_id": 10,
    "domain": "example.com",
    "path": "/",
    "title": "我的新網站",
    "template_id": 1,
    "type": "customer_owned"
}
```

### 3. 會籍端點 (Memberships API)

**基礎路徑：** `/memberships`

**建立會籍**
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

### 4. 產品端點 (Products API)

**基礎路徑：** `/products`

**取得所有產品**
```http
GET /wu/v2/products
```

### 5. 付款端點 (Payments API)

**基礎路徑：** `/payments`

**建立付款記錄**
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

### 6. 網域端點 (Domains API)

**基礎路徑：** `/domains`

**映射網域**
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

## 註冊端點

`/register` 端點提供完整的註冊/結帳流程：

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
        "site_title": "我的新網站",
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

## 錯誤回應

```json
{
    "code": "wu_rest_invalid_parameter",
    "message": "無效的參數值",
    "data": {
        "status": 400,
        "params": {
            "email": "電子郵件格式無效"
        }
    }
}
```

## 分頁與篩選

**查詢參數：**
```http
GET /wu/v2/customers?per_page=20&page=2&search=john&status=active
```

常見參數：
- `per_page` - 每頁項目數 (預設：20，最大：100)
- `page` - 頁碼
- `search` - 搜尋關鍵字
- `orderby` - 排序欄位
- `order` - 排序方向 (asc/desc)
- `status` - 依狀態篩選
- `date_created` - 依日期範圍篩選
