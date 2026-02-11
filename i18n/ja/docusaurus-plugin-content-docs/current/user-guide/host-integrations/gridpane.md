---
title: GridPane 統合
sidebar_position: 13
_i18n_hash: b0a6427285411feb767e828911cdd794
---
# GridPane インテグレーション

## 概要
GridPane は、真剣な WordPress プロフェッショナル向けに設計された専門的な WordPress ホスティング管理パネルです。この統合により、Ultimate Multisite と GridPane の間で自動ドメイン同期と SSL 証明書管理が可能になります。

## 機能
- 自動ドメイン同期
- SSL 証明書管理
- SUNRISE 定数の自動設定

## 要件
以下の定数を `wp-config.php` ファイルに定義する必要があります：

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'your_api_key');
define('WU_GRIDPANE_SERVER_ID', 'your_server_id');
define('WU_GRIDPANE_APP_ID', 'your_app_id');
```

## 設定手順

### 1. GridPane API 認証情報を取得

1. GridPane ダッシュボードにログイン
2. 「Settings」>「API」に移動
3. まだ持っていない場合は API キーを生成
4. API キーをコピー

### 2. サーバーとサイト ID を取得

1. GridPane ダッシュボードで「Servers」に移動
2. WordPress マルチサイトがホストされているサーバーを選択
3. サーバー ID をメモ（URL またはサーバー詳細ページに表示）
4. 「Sites」に移動し、WordPress サイトを選択
5. サイト ID をメモ（URL またはサイト詳細ページに表示）

### 3. wp-config.php に定数を追加

以下の定数を `wp-config.php` ファイルに追加してください：

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'your_api_key');
define('WU_GRIDPANE_SERVER_ID', 'your_server_id');
define('WU_GRIDPANE_APP_ID', 'your_site_id');
```

### 4. 統合を有効化

1. WordPress 管理画面で Ultimate Multisite > Settings に移動
2. 「Domain Mapping」タブに移動
3. 「Host Integrations」にスクロール
4. GridPane 統合を有効化
5. 「Save Changes」をクリック

## 動作概要

Ultimate Multisite でドメインがマッピングされるとき：

1. 統合が GridPane の API にリクエストを送信し、ドメインをサイトに追加
2. GridPane が自動的に SSL 証明書を発行
3. ドメインマッピングが削除されると、統合は GridPane からドメインを削除

統合は wp-config.php ファイル内の SUNRISE 定数も自動的に処理し、ドメインマッピングが正しく機能するようにします。

## SUNRISE 定数管理

GridPane 統合のユニークな機能の一つは、wp-config.php 内の SUNRISE 定数を自動的に元に戻し、GridPane の独自ドメインマッピングシステムとの競合を防ぐことです。これにより、両システムが問題なく連携できます。

## トラブルシューティング

### API 接続の問題
- API キーが正しいことを確認
- サーバーとサイト ID が正しいことを確認
- GridPane アカウントに必要な権限があることを確認

### SSL 証明書の問題
- GridPane が SSL 証明書を発行するまでに時間がかかる場合があります
- ドメインがサーバーの IP アドレスを正しく指していることを確認
- サイトの GridPane SSL 設定を確認

### ドメインが追加されない
- Ultimate Multisite のログでエラーメッセージを確認
- ドメインが既に GridPane に追加されていないことを確認
- ドメインの DNS レコードが正しく設定されていることを確認
