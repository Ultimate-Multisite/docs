---
title: REST API 概要
sidebar_position: 1
_i18n_hash: cabcc173f6a77e5de94e39fff19bc2fa
---
# REST API リファレンス

## 基本設定 {#base-configuration}

**ベース URL:** `{site_url}/wp-json/wu/v2/`
**認証:** API Key とシークレット（HTTP Basic Auth または URL パラメータ）

## 認証 {#authentication}

### API を有効化 {#enable-api}
```php
// Enable API in Ultimate Multisite settings or programmatically
wu_save_setting('enable_api', true);
```

### API 認証情報を取得 {#get-api-credentials}
```php
$api_key = wu_get_setting('api_key');
$api_secret = wu_get_setting('api_secret');
```

### 認証方法 {#authentication-methods}

**HTTP Basic Auth（推奨）:**
```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

**URL パラメータ:**
```bash
curl "https://yoursite.com/wp-json/wu/v2/customers?api_key=your_key&api_secret=your_secret"
```

## コアエンドポイント {#core-endpoints}

### 1. 顧客 API {#1-customers-api}

**ベースルート:** `/customers`

**すべての顧客を取得**
```http
GET /wu/v2/customers
```

**単一の顧客を取得**
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

### 2. サイト API {#2-sites-api}

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

### 3. メンバーシップ API {#3-memberships-api}

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

### 4. 商品 API {#4-products-api}

**ベースルート:** `/products`

**すべての商品を取得**
```http
GET /wu/v2/products
```

### 5. 支払い API {#5-payments-api}

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

### 6. ドメイン API {#6-domains-api}

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

## 登録エンドポイント {#registration-endpoint}

`/register` エンドポイントは、完全な決済/登録フローを提供します。

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

## ソブリンテナントエンドポイント {#sovereign-tenant-endpoints}

Ultimate Multisite: Multi-Tenancy 1.2.0 は、分離されたテナントをプロビジョニング、検査、検証する連携向けに、ソブリンテナントの REST 対応範囲を追加します。

正確なリクエストペイロードは、有効化されているホスト機能によって異なりますが、連携では次のエンドポイントグループを想定してください。

```http
POST /wu/v2/tenants/{site_id}/bootstrap
GET /wu/v2/tenants/{site_id}/migration-status
POST /wu/v2/tenants/{site_id}/verify
DELETE /wu/v2/tenants/{site_id}
```

bootstrap エンドポイントを使用して、テナントレジストリ、データベース、ファイルシステム、ルーティング状態を準備します。本番トラフィックを切り替える前に、移行ステータスと検証エンドポイントを使用してください。ソブリンの解体には削除エンドポイントを使用し、データベース認証情報がアドオンのクリーンアップフローを通じて削除されるようにします。

一般的な移行ステータスのレスポンスには次が含まれます。

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

`ready: false` はリリース前のブロッカーとして扱ってください。検証の詳細を確認し、データベースホストのバインディング、キュー、ユーザープロビジョニング、またはルーティングの問題を修正してから、検証を再試行してください。

## エラーレスポンス {#error-responses}

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

## ページネーションと絞り込み {#pagination-and-filtering}

**クエリパラメータ:**
```http
GET /wu/v2/customers?per_page=20&page=2&search=john&status=active
```

共通パラメータ:
- `per_page` - 1ページあたりの項目数（デフォルト: 20、最大: 100）
- `page` - ページ番号
- `search` - 検索語句
- `orderby` - 並び替えフィールド
- `order` - 並び替え方向（昇順/降順）
- `status` - ステータスで絞り込み
- `date_created` - 日付範囲で絞り込み
