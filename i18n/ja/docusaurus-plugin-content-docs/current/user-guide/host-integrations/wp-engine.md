---
title: WP Engine 統合
sidebar_position: 2
_i18n_hash: ceeee20432439d8afb3002dd0dd1ff12
---
# WP Engine 統合

## 概要
WP Engine は、WordPress サイトの最適化されたパフォーマンス、セキュリティ、スケーラビリティを提供するプレミアムマネージド WordPress ホスティングプラットフォームです。この統合により、Ultimate Multisite と WP Engine の間で自動ドメイン同期が可能になります。

## 機能
- 自動ドメイン同期
- マルチサイトインストールのサブドメインサポート
- WP Engine の既存システムとのシームレスな統合

## 要件
この統合は、WP Engine 上でホスティングしているかどうかを自動的に検出し、組み込みの WP Engine API を使用します。WP Engine プラグインが有効で正しく構成されている場合、追加の設定は不要です。

ただし、統合を手動で構成する必要がある場合は、`wp-config.php` ファイルに次の定数のいずれかを定義できます：

```php
define('WPE_APIKEY', 'your_api_key'); // Preferred method
// OR
define('WPE_API', 'your_api_key'); // Alternative method
```

## 設定手順

### 1. WP Engine プラグインを確認
WP Engine 上でホスティングしている場合、WP Engine プラグインはすでにインストールされ有効化されているはずです。確認してください：

1. WP Engine プラグインが有効です
2. ファイル `wp-content/mu-plugins/wpengine-common/class-wpeapi.php` が存在します

### 2. 統合を有効化
1. WordPress 管理画面で Ultimate Multisite > Settings に移動
2. 「Domain Mapping」タブに移動
3. 「Host Integrations」にスクロール
4. WP Engine 統合を有効化
5. 「Save Changes」をクリック

## 動作概要

### ドメイン同期
Ultimate Multisite でドメインがマッピングされるとき：
1. 統合は WP Engine API を使用してドメインを WP Engine インストールに追加します
2. WP Engine がドメイン設定と SSL 証明書の発行を処理します
3. ドメインマッピングが削除されると、統合は WP Engine からドメインを削除します

### サブドメインサポート
サブドメインマルチサイトインストールの場合：
1. 統合は新しいサイトが作成されるときに各サブドメインを WP Engine に追加します
2. WP Engine がサブドメイン設定を処理します
3. サイトが削除されると、統合は WP Engine からサブドメインを削除します

## 重要な注意点

### ワイルドカードドメイン
サブドメインマルチサイトインストールの場合、ワイルドカードドメイン構成をリクエストするために WP Engine サポートに連絡することを推奨します。これにより、すべてのサブドメインが個別に追加する必要なく自動的に機能します。

### SSL 証明書
WP Engine は、この統合を通じて追加されたすべてのドメインの SSL 証明書発行と更新を自動的に処理します。追加の設定は不要です。

## トラブルシューティング

### API 接続の問題
- WP Engine プラグインが有効で正しく構成されていることを確認してください
- 手動で API キーを定義した場合は、正しいことを確認してください
- API に問題がある場合は WP Engine サポートに連絡してください

### ドメインが追加されない
- Ultimate Multisite のログでエラーメッセージを確認してください
- ドメインがすでに WP Engine に追加されていないことを確認してください
- WP Engine のプランが追加しているドメイン数をサポートしていることを確認してください

### サブドメインの問題
- サブドメインが機能しない場合は、WP Engine サポートに連絡してワイルドカードドメイン構成をリクエストしてください
- メインドメインとサブドメインの DNS 設定が正しく構成されていることを確認してください
