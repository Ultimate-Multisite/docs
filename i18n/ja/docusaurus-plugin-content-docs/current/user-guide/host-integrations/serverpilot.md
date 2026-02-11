---
title: ServerPilot 統合
sidebar_position: 16
_i18n_hash: fdbdebe91bc1687b519dc0986de244d3
---
# ServerPilot 統合

## 概要
ServerPilot は、DigitalOcean、Amazon、Google、またはその他のサーバープロバイダーのサーバー上で WordPress やその他の PHP ウェブサイトをホストするためのクラウドサービスです。この統合により、Ultimate Multisite と ServerPilot の間で自動ドメイン同期と SSL 証明書管理が可能になります。

## 機能
- 自動ドメイン同期
- Let's Encrypt を使用した SSL 証明書管理
- 自動 SSL 更新

## 要件
以下の定数を `wp-config.php` ファイルに定義する必要があります：

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

## 設定手順

### 1. ServerPilot API 認証情報を取得する

1. ServerPilot ダッシュボードにログインする  
2. 「Account」>「API」に移動する  
3. まだ持っていない場合は、新しい API キーを作成する  
4. Client ID と API キーをコピーする  

### 2. アプリ ID を取得する

1. ServerPilot ダッシュボードで「Apps」に移動する  
2. WordPress マルチサイトがホストされているアプリを選択する  
3. アプリ ID は URL に表示されます: `https://manage.serverpilot.io/apps/{APP_ID}`  

### 3. wp-config.php に定数を追加する

以下の定数を `wp-config.php` ファイルに追加してください：

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

### 4. 統合を有効にする

1. WordPress 管理画面で Ultimate Multisite > Settings に移動する  
2. 「Domain Mapping」タブに移動する  
3. 「Host Integrations」にスクロールダウンする  
4. ServerPilot 統合を有効にする  
5. 「Save Changes」をクリックする  

## 動作概要

### ドメイン同期

Ultimate Multisite でドメインがマッピングされるとき：

1. 統合は ServerPilot から現在のドメインリストを取得する  
2. 新しいドメインをリストに追加する（該当する場合は www バージョンも）  
3. 更新されたリストを API 経由で ServerPilot に送信する  
4. ServerPilot はアプリケーションのドメインリストを更新する  

### SSL 証明書管理

ドメインが同期された後：

1. 統合は自動的にアプリケーションの AutoSSL を有効にする  
2. ServerPilot は Let's Encrypt を使用して SSL 証明書の発行とインストールを処理する  
3. ServerPilot は SSL 証明書の自動更新も処理する  

## SSL 証明書検証

統合は ServerPilot が SSL 証明書を発行・インストールするまでに時間がかかる可能性があるため、ServerPilot 用の SSL 証明書検証試行回数を増やすように設定されています。デフォルトでは最大 5 回試行しますが、フィルタを使用して調整できます。

## トラブルシューティング

### API 接続の問題

- Client ID と API キーが正しいことを確認する  
- App ID が正しいことを確認する  
- ServerPilot アカウントに必要な権限があることを確認する  

### SSL 証明書の問題

- ServerPilot は SSL 証明書を発行する前に、ドメインがサーバーを指す有効な DNS レコードを持っている必要があります  
- SSL 証明書が発行されない場合は、ドメインがサーバーの IP アドレスを正しく指しているか確認してください  
- ServerPilot が SSL 証明書を発行・インストールするまでに時間がかかる場合があります（通常 5〜15 分）  

### ドメインが追加されない

- Ultimate Multisite のログにエラーメッセージがないか確認する  
- ドメインが既に ServerPilot に追加されていないことを確認する  
- 追加しているドメイン数が ServerPilot のプランでサポートされていることを確認する  

### ドメインの削除

現在、ServerPilot API には個別ドメインを削除する方法がありません。  
Ultimate Multisite でドメインマッピングが削除されると、統合は ServerPilot のドメインリストを更新し、削除されたドメインを除外します
