---
title: アドオン Sunrise File Loader
sidebar_position: 5
_i18n_hash: 2b24e0c6cf53f4dab0334db99a3b267b
---
# Addon Sunrise File Loader

Ultimate Multisite 2.8.0 には、アドオンやカスタムの MU-plugin 統合機能向けに、WordPress のサンライズブートストラップ中に実行されるサニライズ拡張ローダーが追加されました。これにより、生成された `wp-content/sunrise.php` ファイルを直接編集する必要がなくなります。

## 利用シーン

カスタムドメインルーティング、ホスト固有のリクエスト処理、または初期のネットワークブートストラップ調整など、通常のプラグインのロードより前に統合を実行する必要がある場合に、サンライズ拡張を利用してください。

通常の統合には、通常の WordPress プラグイン、MU-plugin、およびドキュメントに記載されている Ultimate Multisite のフックを使用することを推奨します。サンライズコードは非常に早い段階で実行されるため、小さく、防御的で、依存関係のないコードに留めるようにしてください。

## ファイルの命名規則

アドオンディレクトリ内に、`ultimate-multisite-` で始まる名前の PHP ファイル `sunrise.php` を作成してください。

```text
wp-content/plugins/ultimate-multisite-example-addon/sunrise.php
```

ローダーは、以下のパターンでプラグインディレクトリをスキャンします。

```text
wp-content/plugins/ultimate-multisite-*/sunrise.php
```

一致したファイルは、アドオンのパスのアルファベット順にロードされます。

## ファイルの配置場所

ファイルは、サンライズの動作を所有するアドオンのルートディレクトリに配置してください。

```text
wp-content/
└── plugins/
    └── ultimate-multisite-example-addon/
        ├── ultimate-multisite-example-addon.php
        └── sunrise.php
```

このスキャンは、現在の `WP_PLUGIN_DIR` の値ではなく、`WP_CONTENT_DIR` を基準として解決されます。これにより、マルチテナンシーやその他の初期ブートストラップコードがサンライズ中にプラグインディレクトリ定数を変更しても、発見プロセスが安定します。

生成された `wp-content/sunrise.php` ファイルを直接編集しないでください。このローダーを使用することで、Ultimate Multisite がインストールおよび更新するコアのサンライズファイルをフォークすることなく、カスタムコードでサンライズの動作を拡張できます。

## 利用可能なフックとフィルター

アドオンのサンライズファイルは、Ultimate Multisite のドメインマッピングがロードされた後、WordPress が `ms_loaded` を発火する前に実行されます。この時点で、サンライズファイルは以下のことができます。

- `$current_site` および `$current_blog` の読み取りまたは上書きを行うこと。
- データベース設定がロードされた後、`$wpdb` にアクセスすること。
- 必要に応じて、`BLOG_ID_CURRENT_SITE` のようなサンライズ時の定数を定義すること。
- マルチテナンシー統合で使用されるルーティング状態を含む、Ultimate Multisite のサンライズヘルパーの状態を読み取ること。

Ultimate Multisite は、サンライズローダーの処理が完了した後、`wu_sunrise_loaded` を発火します。このアクションは、サンライズブートストラップが完了した後、しかしサンライズのライフサイクルに属するコードに使用してください。

サンライズフェーズで既にロードされている関数のみを呼び出してください。データベースを大量に使う処理、テンプレートのレンダリング、HTTP リクエスト、および通常のプラグインロード順序が完了したことを前提とするコードは避けてください。

## 最小限の例

```php
<?php
/**
 * カスタムホスト統合のためのサンライズ拡張。
 */

if (! defined('ABSPATH')) {
    exit;
}

if (isset($current_blog) && $current_blog instanceof stdClass) {
    // ms_loaded の前に、早期ルーティングや定数を調整します。
}
```

ファイルをデプロイした後、マッピングされたドメインとマッピングされていないメインサイトの URL の両方をロードし、両方のパスが正しくブートストラップされることを確認してください。
