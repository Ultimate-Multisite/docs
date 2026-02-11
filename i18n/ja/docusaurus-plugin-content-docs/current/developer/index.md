---
title: 開発者ドキュメント
sidebar_position: 1
_i18n_hash: 6443e353aea8cf7592387aa5d9658951
---
# 開発者向けドキュメント

このガイドは、開発者がUltimate Multisiteに統合、拡張、またはアドオンを開発するために必要なすべてを提供します。Ultimate Multisiteは、WordPress MultisiteネットワークをWebsite-as-a-Service（WaaS）プラットフォームに変換します。

## What's Available

- **[REST API](./rest-api/overview)** — すべてのエンティティ（顧客、サイト、メンバーシップ、支払い、製品、ドメイン）に対する完全なCRUD操作をAPIキー認証で提供します
- **[Hooks Reference](./hooks/guide)** — 200以上のアクションフックと280以上のフィルターフックでライフサイクルイベントとカスタマイズを実現します
- **[Integration Guide](./integration-guide/)** — CRM統合、分析、カスタムゲートウェイ、ウェブフックの例を示します
- **[Code Examples](./code-examples/)** — 動的価格設定、サイトプロビジョニング、カスタム制限、マルチゲートウェイ処理の高度なパターンを紹介します
- **[Addon Development](./addon-development/getting-started)** — アドオンプラグイン構築のための構造化フレームワークを提供します

## Requirements

- WordPress Multisite のインストール
- PHP 7.4 以上
- Ultimate Multisite プラグインが有効化されている

## Quick Start

### Use the REST API

```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

### Hook into Events

```php
add_action('wu_customer_post_create', function($customer) {
    // React to new customer signups
});
```

### Build an Addon

```bash
# Generate addon scaffold from the template
bash create-addon.sh
```

各セクションで詳細なドキュメントと例を参照してください。
