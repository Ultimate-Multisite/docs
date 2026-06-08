---
title: CyberPanel Integration
sidebar_position: 21
_i18n_hash: d0607874b556c583dac2aaa33ba1dc1d
---
# CyberPanel連携

本ガイドでは、Ultimate MultisiteのCyberPanel連携の設定方法を説明します。これにより、ネットワーク内でマッピングされたドメインが、CyberPanelの仮想ホストとして自動的に追加（および削除）され、オプションでLet's Encryptによる自動SSLプロビジョニングも行われます。

## 機能概要

*   Ultimate Multisiteでドメインがマッピングされると、連携機能がCyberPanel APIを呼び出し、そのドメインの仮想ホストを作成します。
*   ドメインマッピングが削除されると、連携機能がAPIを呼び出し、対応する仮想ホストを削除します。
*   自動SSLが有効になっている場合、仮想ホストが作成された直後に、連携機能がLet's Encrypt証明書の発行をトリガーします。
*   オプションで、「ドメインマッピング設定」の「wwwサブドメインの自動作成」設定に応じて、`www.`エイリアスを追加/削除します。

## 前提条件

*   WordPressサーバーから到達可能な、稼働中のCyberPanelインスタンス（v2.3以降を推奨）が必要です。
*   WordPressネットワークのルートをすでにホストしているCyberPanel上の既存のウェブサイトが必要です。本連携機能は、このサーバーに新しい仮想ホストをアタッチします。
*   CyberPanel APIへのアクセスが有効になっている必要があります。認証には、CyberPanelの管理者ユーザー名とパスワードを使用します。
*   自動SSLが証明書を発行するためには、マッピングされたドメインのDNSレコードが、事前にサーバーのIPアドレスを指している必要があります。

## 要件

以下の定数を`wp-config.php`ファイルに定義する必要があります。

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'your_admin_username');
define('WU_CYBERPANEL_PASSWORD', 'your_admin_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

オプションで、以下の定数も定義できます。

```php
define('WU_CYBERPANEL_AUTO_SSL', true);          // デフォルト: true — ドメイン作成後にLet's Encrypt SSLを発行
define('WU_CYBERPANEL_PHP_VERSION', 'PHP 8.2');  // デフォルト: PHP 8.2
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com'); // SSL証明書の連絡先として使用
```

## 設定手順

### 1. CyberPanel APIの有効化

1.  管理者としてCyberPanelダッシュボードにログインします。
2.  **Security** > **SSL** に移動し、CyberPanelインターフェース自体でSSLが有効になっていることを確認してください（セキュアなAPI呼び出しに必須です）。
3.  CyberPanel APIは、デフォルトで`https://your-server-ip:8090/api/`で利用可能です。管理者ユーザーの場合、有効化のための追加手順は不要です。

### 2. wp-config.phpに定数を追加する

以下の定数を、`wp-config.php`ファイルの`/* That's all, stop editing! */`行の前に追記してください。

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'admin');
define('WU_CYBERPANEL_PASSWORD', 'your_secure_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

自動SSLを有効にする場合（推奨）：

```php
define('WU_CYBERPANEL_AUTO_SSL', true);
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com');
```

### 3. 連携機能の有効化

1.  WordPressネットワーク管理画面で、**Ultimate Multisite** > **Settings** に移動します。
2.  **Domain Mapping** タブに移動します。
3.  **Host Integrations** までスクロールダウンします。
4.  **CyberPanel** 連携機能を有効にします。
5.  **Save Changes** をクリックします。

### 4. 接続性の確認

設定ウィザード内にある組み込みの接続テストを使用します。

1.  **Ultimate Multisite** > **Settings** > **Domain Mapping** > **Host Integrations** > **CyberPanel** に移動します。
2.  **Test Connection** をクリックします。
3.  成功メッセージが表示され、プラグインがCyberPanel APIに到達し、正しく認証できることが確認できます。

## 仕組み

### ドメインマッピング

Ultimate Multisiteでドメインがマッピングされると：

1.  連携機能が、CyberPanelホストの`/api/createWebsite`に対して`POST`リクエストを送信します。
2.  CyberPanelは、設定されたパッケージの下に、そのドメインの新しい仮想ホストを作成します。
3.  ドキュメントルートは、WordPressネットワークのルートディレクトリを指すように設定されます。
4.  ドメインマッピングが削除されると、連携機能は`/api/deleteWebsite`を呼び出し、仮想ホストをクリーンアップします。

### 自動SSL

`WU_CYBERPANEL_AUTO_SSL`が`true`の場合：

1.  仮想ホストが作成された後、連携機能がそのドメインに対して`/api/issueSSL`を呼び出します。
2.  CyberPanelは、ACME HTTP-01チャレンジを使用してLet's Encrypt証明書を要求します。
3.  証明書は、有効期限が切れる前にCyberPanelによって自動的に更新されます。

> **重要:** Let's Encryptがドメインを検証するためには、DNSがサーバーのIPアドレスに完全に伝播している必要があります。マッピング直後にSSLの発行に失敗した場合は、DNSの伝播を待ってから、CyberPanelダッシュボードの**SSL** > **Manage SSL** からSSLを再トリガーしてください。

### wwwサブドメイン

ドメインマッピング設定で「wwwサブドメインの自動作成」が有効になっている場合、連携機能は`www.<ドメイン>`の仮想ホストエイリアスも作成し、自動SSLが有効な場合は、アペックス（ルート）とwwwの両方のバリアントをカバーする証明書を発行します。

### メールフォワーダー

[Ultimate Multisite: Emails](../../addons/ultimate-multisite-emails/)アドオンが有効になっている場合、CyberPanelは顧客向けのメールフォワーダーも提供できます。フォワーダーは、完全なメールボックスを作成することなく、ドメインアドレスから別の受信箱へメッセージを転送します。これは、`info@customer-domain.test`や`support@customer-domain.test`のようなエイリアスに便利です。

顧客向けにフォワーダーを有効にする前に：

1.  上記のCyberPanel定数が設定されており、接続テストが成功していることを確認してください。
2.  Emailsアドオンの設定で、CyberPanelのメールプロバイダーを有効にします。
3.  フォワーダーを作成する前に、顧客ドメインがCyberPanelにすでに存在することを確認してください。
4.  本番環境のプランでこの機能を提供する前に、テストフォワーダーを作成し、それを通じてメッセージを送信して確認してください。

フォワーダーの作成に失敗した場合は、まずUltimate Multisiteのアクティビティログを確認し、次にCyberPanelで送信元ドメインが存在すること、およびAPIユーザーがメール管理権限を持っていることを確認してください。

## 設定リファレンス

| 定数 | 必須 | デフォルト | 説明 |
|---|---|---|---|
| `WU_CYBERPANEL_HOST` | はい | — | ポートを含むCyberPanelインスタンスの完全なURL。例: `https://cp.example.com:8090` |
| `WU_CYBERPANEL_USERNAME` | はい | — | CyberPanelの管理者ユーザー名 |
| `WU_CYBERPANEL_PASSWORD` | はい | — | CyberPanelの管理者パスワード |
| `WU_CYBERPANEL_PACKAGE` | はい | `Default` | 新しい仮想ホストに割り当てるCyberPanelのホスティングパッケージ |
| `WU_CYBERPANEL_AUTO_SSL` | いいえ | `true` | ドメイン作成後にLet's Encrypt SSL証明書を発行するかどうか |
| `WU_CYBERPANEL_PHP_VERSION` | いいえ | `PHP 8.2` | 新しい仮想ホストのPHPバージョン（CyberPanelにインストールされているバージョンと一致させる必要があります） |
| `WU_CYBERPANEL_EMAIL` | いいえ | — | SSL証明書登録用の連絡先メールアドレス |

## 重要な注意点

*   CyberPanelのAPIはセッションベースのトークン認証を使用します。連携機能は、各API呼び出し時にトークンの取得を自動的に処理します。
*   CyberPanelの管理者アカウントには、ウェブサイトの作成および削除の権限が必要です。
*   CyberPanelはデフォルトでポート`8090`で動作します。サーバーにファイアウォールを使用している場合は、このポートがWordPressアプリケーションサーバーからアクセス可能であることを確認してください。
*   本連携機能はDNSレコードを管理しません。Ultimate Multisiteでドメインをマッピングする前に、ドメインのDNSをサーバーのIPアドレスに向ける必要があります。
*   OpenLiteSpeed (OLS) を使用する場合、仮想ホストの変更後には、自動的にグレースフルな再起動がトリガーされます。手動での介入は不要です。

## トラブルシューティング

### API接続が拒否された場合

*   サーバーのファイアウォールでポート`8090`が開いているか確認してください。
*   `WU_CYBERPANEL_HOST`の値に、正しいプロトコル（`https://`）とポートが含まれているか確認してください。
*   CyberPanelのSSL証明書が有効であることを確認してください。自己署名証明書はTLS検証の失敗を引き起こす可能性があります。`WU_CYBERPANEL_VERIFY_SSL`を`false`に設定するのは、信頼できるプライベートネットワーク環境でのみ行ってください。

### 認証エラー

*   `WU_CYBERPANEL_USERNAME`と`WU_CYBERPANEL_PASSWORD`が正しいか、CyberPanelに直接ログインして確認してください。
*   CyberPanelは、繰り返しログインに失敗するとアカウントをロックします。ロックアウトが発生した場合は、CyberPanelの**Security** > **Brute Force Monitor**を確認してください。

### ドメインが作成されない場合

*   Ultimate Multisiteのアクティビティログ（**Ultimate Multisite** > **Activity Logs**）でAPIのエラーメッセージを確認してください。
*   `WU_CYBERPANEL_PACKAGE`で定義されたパッケージがCyberPanelに存在するか確認してください（**Packages** > **List Packages**）。
*   ドメインがCyberPanel内ですでにウェブサイトとして登録されていないか確認してください。重複したウェブサイトの作成はエラーを返します。

### SSL証明書が発行されない場合

*   DNSが完全に伝播しているか確認してください：`dig +short your-domain.com`を実行すると、サーバーのIPアドレスが返ってくるはずです。
*   Let's Encryptはレート制限を設けています。同じドメインに対して最近複数の証明書を発行した場合、再試行する前に待ってください。
*   証明書発行の失敗に関する詳細については、**Logs** > **Error Logs** のCyberPanel SSLログを確認してください。
*   代替策として、CyberPanelから手動でSSLを発行できます：**SSL** > **Manage SSL** > ドメインを選択 > **Issue SSL**。

## 参照

*   CyberPanel APIドキュメント: https://docs.cyberpanel.net/docs/category/api
*   CyberPanel SSL管理: https://docs.cyberpanel.net/docs/cyberpanel/SSL/manageSSL
*   Let's Encryptのレート制限: https://letsencrypt.org/docs/rate-limits/
