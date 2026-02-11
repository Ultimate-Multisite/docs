---
title: RunCloud 統合
sidebar_position: 13
_i18n_hash: 05a61d871e286ae6c87bc7653377dee4
---
# RunCloud統合

## 概要
RunCloud はクラウドベースのサーバー管理プラットフォームで、独自のクラウドサーバー上でウェブアプリケーションを簡単にデプロイおよび管理できます。この統合により、Ultimate Multisite と RunCloud の間で自動ドメイン同期と SSL 証明書管理が可能になります。

## 機能
- 自動ドメイン同期
- SSL 証明書管理
- マッピングが削除されたときにドメインを削除

## 要件
以下の定数を `wp-config.php` ファイルに定義する必要があります。

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

## セットアップ手順

### 1. RunCloud API 認証情報を取得する

1. RunCloud ダッシュボードにログイン
2. 右上のプロフィール画像をクリックし「User Profile」を選択
3. メニューから「API」を選択
4. まだキーが無い場合は「Generate API Key」をクリック
5. API Key と API Secret をコピー

### 2. サーバーとアプリ ID を取得する

1. RunCloud ダッシュボードで「Servers」を選択
2. WordPress マルチサイトがホストされているサーバーを選択
3. サーバー ID は URL に表示されます: `https://manage.runcloud.io/servers/{SERVER_ID}`
4. 「Web Applications」に移動し、WordPress アプリケーションを選択
5. アプリ ID は URL に表示されます: `https://manage.runcloud.io/servers/{SERVER_ID}/apps/{APP_ID}`

### 3. `wp-config.php` に定数を追加

以下の定数を `wp-config.php` ファイルに追加します。

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

### 4. 統合を有効化

1. WordPress 管理画面で Ultimate Multisite > Settings に移動
2. 「Domain Mapping」タブへ移動
3. 「Host Integrations」までスクロール
4. RunCloud 統合を有効化
5. 「Save Changes」をクリック

## 動作概要

Ultimate Multisite でドメインがマッピングされると：

1. 統合は RunCloud の API にリクエストを送信し、アプリにドメインを追加します
2. ドメインが正常に追加された場合、統合は SSL 証明書を再デプロイします
3. ドメインマッピングが削除されると、統合は RunCloud からドメインを削除します

サブドメインインストールの場合、統合はネットワークに新しいサイトが追加されると RunCloud でサブドメインを自動的に作成します。

## トラブルシューティング

### API 接続の問題
- API 認証情報が正しいか確認
- サーバー ID とアプリ ID が正しいか確認
- RunCloud アカウントに必要な権限があるか確認

### SSL 証明書の問題
- RunCloud が SSL 証明書を発行するまでに時間がかかる場合があります
- ドメインがサーバーの IP アドレスを正しく指しているか確認
- アプリの RunCloud SSL 設定を確認

### ドメインが追加されない
- Ultimate Multisite のログでエラーメッセージを確認
- ドメインが既に RunCloud に追加されていないか確認
- RunCloud プランが複数ドメインをサポートしているか確認
