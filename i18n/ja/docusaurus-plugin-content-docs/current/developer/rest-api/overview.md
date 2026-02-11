---
title: REST API の概要
sidebar_position: 1
_i18n_hash: 4e511d92e0002dff445f45ff05adbeda
---
# REST API 参照

## 基本設定

**ベースURL:** `{site_url}/wp-json/wu/v2/`  
**認証:** APIキー & シークレット（HTTP Basic AuthまたはURLパラメータ）

## 認証

### APIを有効化
```php
// Enable API in Ultimate Multisite settings or programmatically
wu_save_setting('enable_api', true);
```

### API認証情報を取得
```php
$api_key = wu_get_setting('api_key');
$api_secret = wu_get_setting('api_secret');
```

### 認証方法

**HTTP Basic Auth（推奨）:**
```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

**URLパラメータ:**
```bash
curl "https://yoursite.com/wp-json/wu/v2/customers?api_key=your_key&api_secret=your_secret"
```

## コアエンドポイント

### 1. 顧客API

**ベースルート:** `/customers`

**すべての顧客を取得**
```http
GET /wu/v2/customers
```

**単一顧客を取得**
```http
GET /wu/v2/customers/{id}
```

**顧客を作成**
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

**顧客を更新**
```http
PUT /wu/v2/customers/{id}
Content-Type: application/json

{
    "vip": true,
    "extra_information": "VIP customer notes"
}
```

**顧客を削除**
```http
DELETE /wu/v2/customers/{id}
```

### 2. サイトAPI

**ベースルート:** `/sites`

**サイトを作成**
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

### 3. メンバーシップAPI

**ベースルート:** `/memberships`

**メンバーシップを作成**
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

### 4. 製品API

**ベースルート:** `/products`

**すべての製品を取得**
```http
GET /wu/v2/products
```

### 5. 支払いAPI

**ベースルート:** `/payments`

**支払いを作成**
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

### 6. ドメインAPI

**ベースルート:** `/domains`

**ドメインをマップ**
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

## 登録エンドポイント

`/register` エンドポイントは、完全なチェックアウト/登録フローを提供します:
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

**レスポンス:**
```json
{
    "customer": { ... },
    "membership": { ... },
    "payment": { ... },
    "site": { "id": 123 }
}
```

## エラーレスポンス

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

## ページネーションとフィルタリング

**クエリパラメータ:**
```http
GET /wu/v2/customers?per_page=20&page=2&search=john&status=active
```

一般的なパラメータ:
- `per_page` - ページあたりのアイテム数（デフォルト: 20、最大: 100）
- `page` - ページ番号
- `search` - 検索語
- `orderby` - ソートフィールド
- `order` - ソート方向（asc/desc）
- `status` - ステータスでフィルタ
- `date_created` - 日付範囲でフィルタ
