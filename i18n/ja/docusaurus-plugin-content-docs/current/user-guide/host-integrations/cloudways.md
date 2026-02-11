---
title: Cloudways統合
sidebar_position: 3
_i18n_hash: 931ac98efe704dc50c74537ea2676529
---
# Cloudways インテグレーション

## 概要
Cloudways は、DigitalOcean、AWS、Google Cloud などのさまざまなクラウドプロバイダー上で WordPress サイトをデプロイできるマネージドクラウドホスティングプラットフォームです。この統合により、Ultimate Multisite と Cloudways の間で自動ドメイン同期と SSL 証明書管理が可能になります。

## 機能
- 自動ドメイン同期
- SSL 証明書管理
- 追加ドメインのサポート
- SSL 証明書の DNS 検証

## 要件
以下の定数を `wp-config.php` ファイルに定義する必要があります。

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

オプションで、次のように定義することもできます。

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'comma,separated,list,of,domains');
```

## 設定手順

### 1. Cloudways API 認証情報を取得する

1. Cloudways ダッシュボードにログイン
2. 「Account」>「API Keys」へ移動
3. まだ持っていない場合は API キーを生成
4. メールアドレスと API キーをコピー

### 2. サーバーとアプリケーション ID を取得する

1. Cloudways ダッシュボードで「Servers」へ移動
2. WordPress マルチサイトがホストされているサーバーを選択
3. サーバー ID は URL に表示されます: `https://platform.cloudways.com/server/{SERVER_ID}`
4. 「Applications」へ移動し、WordPress アプリケーションを選択
5. アプリケーション ID は URL に表示されます: `https://platform.cloudways.com/server/{SERVER_ID}/application/{APP_ID}`

### 3. `wp-config.php` に定数を追加

`wp-config.php` ファイルに次の定数を追加します。

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

追加ドメインを常に含めたい場合は：

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'domain1.com,domain2.com,*.wildcard.com');
```

### 4. 統合を有効にする

1. WordPress 管理画面で Ultimate Multisite > Settings へ移動
2. 「Domain Mapping」タブへ移動
3. 「Host Integrations」までスクロール
4. Cloudways 統合を有効にする
5. 「Save Changes」をクリック

## 動作概要

### ドメイン同期

Ultimate Multisite でドメインがマッピングされると：

1. 統合は現在マッピングされているすべてのドメインを取得
2. 新しいドメインをリストに追加（該当する場合は www バージョンも追加）
3. 完全なリストを API 経由で Cloudways に送信
4. Cloudways はアプリケーションのドメインエイリアスを更新

注：Cloudways API は毎回完全なドメインリストを送信する必要があります。個別に追加または削除は行いません。

### SSL 証明書管理

ドメインが同期された後：

1. 統合は DNS レコードがサーバーを指しているドメインを確認
2. それらのドメインに対して Let's Encrypt SSL 証明書をインストールするよう Cloudways にリクエスト
3. Cloudways が SSL 証明書の発行とインストールを処理

## 追加ドメイン

`WU_CLOUDWAYS_EXTRA_DOMAINS` 定数を使用すると、Cloudways への同期時に常に含める追加ドメインを指定できます。これは次のような場合に便利です：

- Ultimate Multisite で管理されていないドメイン
- ワイルドカードドメイン（例：`*.example.com`）
- 開発またはステージングドメイン

## トラブルシューティング

### API 接続の問題
- メールアドレスと API キーが正しいことを確認
- サーバー ID とアプリケーション ID が正しいことを確認
- Cloudways アカウントに必要な権限があることを確認

### SSL 証明書の問題
- Cloudways は SSL 証明書を発行する前に、ドメインがサーバーを指す有効な DNS レコードを持っている必要があります
- 統合は SSL 証明書をリクエストする前に DNS レコードを検証します
- SSL 証明書が発行されない場合は、ドメインがサーバーの IP アドレスを正しく指しているか確認

### ドメインが追加されない
- Ultimate Multisite のログでエラーメッセージを確認
- ドメインがすでに Cloudways に追加されていないか確認
- Cloudways プランが追加しようとしているドメイン数をサポートしているか確認
