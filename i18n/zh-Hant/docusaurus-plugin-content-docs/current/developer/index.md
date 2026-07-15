---
title: 開發者文件
sidebar_position: 1
_i18n_hash: 93892019464929842d9a6f4fdfdecbe7
---
# 開發者文件

本指南為開發人員提供了所有必要的資源，用於整合、擴展或為 Ultimate Multisite 開發附加元件 (addons)。Ultimate Multisite 將 WordPress Multisite 網路轉變為一個網站即服務 (Website-as-a-Service, WaaS) 平台。

## 可用資源 {#whats-available}

- **[REST API](./rest-api/overview)** — 完整的 CRUD 操作，涵蓋所有實體（客戶、網站、會員資格、付款、產品、網域），並支援 API key 驗證。
- **[Hooks Reference](./hooks/guide)** — 包含 200 個以上的 Action 鉤子和 280 個以上的 Filter 鉤子，用於處理生命週期事件和客製化。
- **[Integration Guide](./integration-guide/)** — 提供了 CRM 整合、分析、自訂閘道 (custom gateways) 和 Webhooks 的範例。
- **[Code Examples](./code-examples/)** — 關於動態定價、網站配置、自訂限制和多閘道處理的高階模式範例。
- **[Addon Development](./addon-development/getting-started)** — 建立附加元件外掛的結構化框架。

## 必要條件 {#requirements}

- WordPress Multisite 安裝
- PHP 7.4 或更高版本
- 已啟用 Ultimate Multisite 外掛

## Composer / Bedrock 安裝 {#composer--bedrock-installation}

Ultimate Multisite 可在 [Packagist](https://packagist.org/packages/ultimate-multisite/ultimate-multisite) 上以 `ultimate-multisite/ultimate-multisite` 的名稱取得。對於基於 [Bedrock](https://roots.io/bedrock/)-的 WordPress 設定和其他由 Composer 管理的環境，這是推薦的安裝方法。

```bash
composer require ultimate-multisite/ultimate-multisite
```

:::note 已更名套件 (v2.6.1+)
在 v2.6.1 版本中，Composer 套件已從 `devstone/ultimate-multisite` 更名為 `ultimate-multisite/ultimate-multisite`。如果您的 `composer.json` 引用了舊的 vendor 名稱，請更新 require 條目並執行 `composer update`。
:::

安裝完成後，請透過 Network Admin 啟用外掛：

```bash
wp plugin activate ultimate-multisite --network
```

或者，如果您是透過 Bedrock 的 autoloader 將外掛作為必須使用外掛 (must-use plugin) 載入，請使用 `wp_ultimo_skip_network_active_check` filter 來繞過啟用檢查：

```php
add_filter( 'wp_ultimo_skip_network_active_check', '__return_true' );
```

## 快速入門 {#quick-start}

### 使用 REST API {#use-the-rest-api}

```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

### 鉤入事件 (Hook into Events) {#hook-into-events}

```php
add_action('wu_customer_post_create', function($customer) {
    // 響應新的客戶註冊
});
```

### 建立附加元件 {#build-an-addon}

```bash
# 從範本生成附加元件骨架
bash create-addon.sh
```

請參閱各個區塊以獲取詳細文件和範例。
