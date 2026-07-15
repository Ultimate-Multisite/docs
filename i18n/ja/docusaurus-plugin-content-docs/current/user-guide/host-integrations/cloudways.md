---
title: Cloudways 統合
sidebar_position: 3
_i18n_hash: 09425d90def2b755c27a698d78d7d4b0
---
# Cloudways 連携

## 概要 {#overview}
Cloudways は、DigitalOcean、AWS、Google Cloud など、さまざまなクラウドプロバイダー上に WordPress サイトを展開できるマネージドクラウドホスティングプラットフォームです。この連携により、Ultimate Multisite と Cloudways の間で、ドメインの自動同期と SSL 証明書管理が可能になります。

## 機能 {#features}
- ドメインの自動同期
- SSL 証明書管理
- 追加ドメインへの対応
- SSL 証明書の DNS 検証

## 要件 {#requirements}
次の定数を `wp-config.php` ファイルで定義する必要があります。

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

任意で、次も定義できます。

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'comma,separated,list,of,domains');
```

## 設定手順 {#setup-instructions}

### 1. Cloudways API 認証情報を取得する {#1-get-your-cloudways-api-credentials}

1. Cloudways dashboard にログインします
2. "Account" > "API Keys" に移動します
3. まだ持っていない場合は API key を生成します
4. メールアドレスと API key をコピーします

### 2. サーバー ID とアプリケーション ID を取得する {#2-get-your-server-and-application-ids}

1. Cloudways dashboard で "Servers" に移動します
2. WordPress マルチサイトがホストされているサーバーを選択します
3. サーバー ID は URL に表示されています: `https://platform.cloudways.com/server/{SERVER_ID}`
4. "Applications" に移動し、WordPress アプリケーションを選択します
5. アプリ ID は URL に表示されています: `https://platform.cloudways.com/server/{SERVER_ID}/application/{APP_ID}`

### 3. wp-config.php に定数を追加する {#3-add-constants-to-wp-configphp}

次の定数を `wp-config.php` ファイルに追加します。

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

Cloudways のエイリアス一覧に常に保持したい追加の **外部** ドメイン（マルチサイトネットワーク外）がある場合:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'extradomain1.com,extradomain2.com');
```

:::warning 自分のネットワークのワイルドカードは含めないでください
`WU_CLOUDWAYS_EXTRA_DOMAINS` に `*.your-network.com`（または自分のネットワークのサブドメインパターン）を追加**しないでください**。これによりテナントごとの SSL 証明書が発行されなくなる理由については、下の [重要 — ワイルドカード SSL の落とし穴](#important--wildcard-ssl-pitfall) を参照してください。
:::

### 4. 連携を有効化する {#4-enable-the-integration}

1. WordPress 管理画面で Ultimate Multisite > Settings に移動します
2. "Domain Mapping" タブに移動します
3. "Host Integrations" まで下へスクロールします
4. Cloudways 連携を有効化します
5. "Save Changes" をクリックします

## 仕組み {#how-it-works}

### ドメイン同期 {#domain-syncing}

Ultimate Multisite でドメインがマッピングされると:

1. 連携は現在マッピングされているすべてのドメインを取得します
2. 新しいドメインを一覧に追加します（該当する場合は www 版も一緒に追加します）
3. API 経由で完全な一覧を Cloudways に送信します
4. Cloudways がアプリケーションのドメインエイリアスを更新します

注: Cloudways API では、個別のドメインを追加または削除するだけでなく、毎回ドメインの完全な一覧を送信する必要があります。

### SSL 証明書管理 {#ssl-certificate-management}

ドメインが同期された後:

1. 連携は、サーバーを指す有効な DNS レコードを持つドメインを確認します
2. それらのドメインに Let's Encrypt SSL 証明書をインストールするよう Cloudways にリクエストを送信します
3. Cloudways が SSL 証明書の発行とインストールを処理します

連携は常に Cloudways に対して **標準**（非ワイルドカード）の Let's Encrypt 証明書をリクエストします。`WU_CLOUDWAYS_EXTRA_DOMAINS` にワイルドカードパターンが指定されている場合、SSL リクエストの前に先頭の `*.` は削除されます。この連携がワイルドカード自体をインストールすることはありません。Cloudways でワイルドカード証明書を使用するには手動でインストールする必要がありますが、そうするとマッピングされたカスタムドメインごとの Let's Encrypt 発行がブロックされます（下の落とし穴を参照）。

## 追加ドメイン {#extra-domains}

`WU_CLOUDWAYS_EXTRA_DOMAINS` 定数を使用すると、Cloudways アプリケーションのエイリアス一覧に常に保持したい追加の **外部** ドメインを指定できます。次の用途に使用します。

- Ultimate Multisite で管理されていない外部ドメイン（例: 同じ Cloudways アプリケーションを共有する別のマーケティングサイト）
- アプリケーションのエイリアス一覧に保持したいパーク済みドメインまたはステージングドメイン

この定数を自分のネットワークのサブドメインワイルドカード（例: `*.your-network.com`）に使用**しないでください**。下のワイルドカード SSL の落とし穴を参照してください。

## 重要 — ワイルドカード SSL の落とし穴 {#important--wildcard-ssl-pitfall}

Cloudways のデフォルト設定に従う際によくある間違いは、`*.your-network.com` のようなワイルドカードを `WU_CLOUDWAYS_EXTRA_DOMAINS` に追加すること、またはそのワイルドカード用に Cloudways のワイルドカード SSL 証明書を手動でインストールすることです。

**これを行うと、Cloudways は Ultimate Multisite がマッピングするテナントごとのカスタムドメインに対して Let's Encrypt 証明書の発行を拒否します。** Cloudways は毎回アプリケーション上の有効な SSL 証明書を置き換えます。既存のワイルドカード証明書がアプリケーション上にあると、この連携が依存するドメインごとの Let's Encrypt 発行がブロックされます。

### Ultimate Multisite ネットワーク向けの推奨 Cloudways SSL 設定 {#recommended-cloudways-ssl-setup-for-an-ultimate-multisite-network}

1. Cloudways アプリケーションの **SSL Certificate** タブで、`your-network.com` と `www.your-network.com` のみを対象にする **標準の
   Let's Encrypt 証明書** をインストールします。ワイルドカードは**使用しません**。
2. `*.your-network.com`（または自分のネットワークのサブドメインパターン）は
   `WU_CLOUDWAYS_EXTRA_DOMAINS` に入れ**ないでください**。この定数は **外部** ドメイン専用にしてください。
3. テナントごとのサブドメインワイルドカードは **DNS** レベルでのみ作成します（`*.your-network.com` を Cloudways サーバー IP に向ける `A` レコード）。これによりサブサイトが解決されます。個別にマッピングされたカスタムドメインの SSL は、その後この連携により Let's Encrypt 経由で自動発行されます。

テナントのカスタムドメインで SSL がないまま止まっている場合は、Cloudways の SSL タブを確認してください。そこで
ワイルドカード証明書が有効になっている場合は削除し、メインネットワークドメインのみを対象にした標準の Let's Encrypt
証明書を再発行し、`WU_CLOUDWAYS_EXTRA_DOMAINS` からワイルドカード項目を削除してください。その後、ドメインマッピングを再実行するか、次回の実行を待つと、
連携機能がドメインごとの証明書を再び発行し始めます。

## トラブルシューティング {#troubleshooting}

### API 接続の問題 {#api-connection-issues}
- メールアドレスと API キーが正しいことを確認してください
- サーバー ID とアプリケーション ID が正しいことを確認してください
- Cloudways Account に必要な権限があることを確認してください

### SSL 証明書の問題 {#ssl-certificate-issues}
- Cloudways では、SSL 証明書を発行する前に、ドメインにサーバーを指す有効な DNS レコードが必要です
- 連携機能は、SSL 証明書をリクエストする前に DNS レコードを検証します
- SSL 証明書が発行されない場合は、ドメインがサーバーの IP アドレスを正しく指していることを確認してください
- **テナントごとのカスタムドメインが SSL なしで止まっていますか？** Cloudways アプリケーションの SSL 証明書タブを確認してください。ワイルドカード証明書（手動でインストールされたもの、または `*.your-network.com` を対象にしたもの）が有効な場合、Cloudways は個別にマッピングされたカスタムドメインに対して Let's Encrypt 証明書を発行しません。メインネットワークドメイン（`your-network.com`、`www.your-network.com`）のみを対象にした標準の Let's Encrypt 証明書に置き換え、`WU_CLOUDWAYS_EXTRA_DOMAINS` からワイルドカード項目を削除してください。その後、ドメインマッピングを再実行するか、次回の実行を待つと、連携機能がドメインごとの証明書をリクエストします。

### ドメインが追加されない {#domain-not-added}
- エラーメッセージがないか Ultimate Multisite のログを確認してください
- そのドメインが Cloudways にすでに追加されていないことを確認してください
- 追加しようとしているドメイン数を Cloudways プランがサポートしていることを確認してください
