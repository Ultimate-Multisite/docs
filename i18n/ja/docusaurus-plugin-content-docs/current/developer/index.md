---
title: 開発者向けドキュメント
sidebar_position: 1
_i18n_hash: 93892019464929842d9a6f4fdfdecbe7
---
# 開発者向けドキュメント

このガイドでは、Ultimate Multisite との連携、拡張、または Ultimate Multisite 向け addon の開発に必要な情報を開発者向けにまとめています。Ultimate Multisite は WordPress Multisite ネットワークを Website-as-a-Service（WaaS）プラットフォームに変換します。

## 利用できるもの {#whats-available}

- **[REST API](./rest-api/overview)** — API key 認証付きで、すべてのエンティティ（顧客、サイト、メンバーシップ、支払い、商品、ドメイン）に対する完全な CRUD 操作
- **[フックリファレンス](./hooks/guide)** — ライフサイクルイベントとカスタマイズのための 200 以上の action hook と 280 以上の filter hook
- **[連携ガイド](./integration-guide/)** — CRM 連携、分析、カスタムゲートウェイ、webhook の例
- **[コード例](./code-examples/)** — 動的価格設定、サイトプロビジョニング、カスタム制限、複数ゲートウェイ処理の高度なパターン
- **[Addon 開発](./addon-development/getting-started)** — addon プラグインを構築するための構造化されたフレームワーク

## 要件 {#requirements}

- WordPress Multisite のインストール
- PHP 7.4 以上
- Ultimate Multisite プラグインが有効化されていること

## Composer / Bedrock インストール {#composer--bedrock-installation}

Ultimate Multisite は [Packagist](https://packagist.org/packages/ultimate-multisite/ultimate-multisite) で `ultimate-multisite/ultimate-multisite` として利用できます。これは [Bedrock](https://roots.io/bedrock/) ベースの WordPress 構成や、その他の Composer 管理環境で推奨されるインストール方法です。

```bash
composer require ultimate-multisite/ultimate-multisite
```

:::note パッケージ名の変更（v2.6.1+）
Composer パッケージは v2.6.1 で `devstone/ultimate-multisite` から `ultimate-multisite/ultimate-multisite` に変更されました。`composer.json` が古いベンダー名を参照している場合は、require エントリーを更新して `composer update` を実行してください。
:::

インストール後、ネットワーク管理からプラグインをネットワーク有効化してください。

```bash
wp plugin activate ultimate-multisite --network
```

または、Bedrock の autoloader 経由で must-use プラグインとして読み込む場合は、`wp_ultimo_skip_network_active_check` filter を使用して有効化ガードを回避してください。

```php
add_filter( 'wp_ultimo_skip_network_active_check', '__return_true' );
```

## クイックスタート {#quick-start}

### REST API を使用する {#use-the-rest-api}

```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

### イベントにフックする {#hook-into-events}

```php
add_action('wu_customer_post_create', function($customer) {
    // React to new customer signups
});
```

### Addon を構築する {#build-an-addon}

```bash
# Generate addon scaffold from the template
bash create-addon.sh
```

詳細なドキュメントと例については、各セクションを参照してください。
