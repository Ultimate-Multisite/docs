---
title: WordPress Multisiteのインストール方法
sidebar_position: 2
_i18n_hash: 5572d2dd71ac4dc48427cd0f11545726
---
# WordPress Multisite をインストールするには？

WordPress Multisite を使用すると、単一のインストールでサイトのネットワークを構築できます。これは組み込み機能ですが、デフォルトでは有効になっていません。

:::tip
Ultimate Multisite には、**[組み込みの Multisite Setup Wizard](./multisite-setup-wizard)** が含まれており、プロセス全体を自動化します。Ultimate Multisite をインストール済みの場合は、以下の手動手順ではなくウィザードを使用することを推奨します。
:::

Ultimate Multisite はネットワーク専用プラグインですので、このチュートリアルでは WordPress Multisite を手動でインストールおよび設定する方法を学びます。このテキストは WPBeginner の [How to Install and Setup WordPress Multisite Network](https://www.wpbeginner.com/wp-tutorials/how-to-install-and-setup-wordpress-multisite-network/) をベースにしています。

**マルチサイトネットワークを作成する前に注意すべき点:**

- 良い WordPress ホスティングを利用してください！ネットワーク上のサイトは同じサーバーリソースを共有します。
- サイトが数個でトラフィックが少ない場合は、共有ホスティングで十分でしょう。
- ほとんどの **Managed WordPress ホスティングプロバイダー** は、Multisite をデフォルトで有効にしてインストールします（WP Engine、Closte、Cloudways など）。ホスティングプロバイダーがこの機能を提供しているか不明な場合は、チュートリアルを進める前にサポートに問い合わせてください。
- FTP を使って WordPress をインストールし、ファイルを編集することに慣れておくと便利です。

_**重要**_: 既存の WordPress サイトでマルチサイトネットワークを設定する場合は、以下を忘れないでください：

- WordPress サイトの完全バックアップを作成してください。
- プラグインページに移動し、バルクアクションから _Deactivate_ を選択して _Apply_ をクリックして、サイト上のすべてのプラグインを無効化してください。

<!-- Screenshot unavailable: WordPress plugins page showing bulk deactivate action -->

Multisite を有効にするには、まず FTP クライアントまたは cPanel ファイルマネージャーを使用してサイトに接続し、wp-config.php ファイルを編集モードで開きます。

「_*That’s all, stop editing! Happy blogging.*_」行の前に、以下のコードスニペットを追加してください：

```php
define('WP_ALLOW_MULTISITE', true);
```

wp-config.php ファイルを保存し、サーバーにアップロードしてください。

サイトでマルチサイト機能が有効になったら、ネットワークの設定に進みます。

**Tools » Network Setup** に移動します

<!-- Screenshot unavailable: WordPress Tools menu showing Network Setup option -->

次に、ネットワーク内のサイトで使用するドメイン構造（サブドメインかサブディレクトリか）を WordPress に伝える必要があります。

サブドメインを選択した場合は、ドメインマッピングの DNS 設定を変更し、マルチサイトネットワークに **ワイルドカードサブドメイン** を設定してください。

Network Setup に戻り、ネットワークのタイトルを入力し、Network admin email のメールアドレスが正しいことを確認してください。続行するには _Install_ をクリックします。

<!-- Screenshot unavailable: WordPress Network Setup page with network title and admin email fields -->

WordPress が提供する以下のコードを _**wp-config.php**_ に追加してください：

```php
define('MULTISITE', true);
define('SUBDOMAIN_INSTALL', true);
define('DOMAIN_CURRENT_SITE', 'multisite.local');
define('PATH_CURRENT_SITE', '/');
define('SITE_ID_CURRENT_SITE', 1);
define('BLOG_ID_CURRENT_SITE', 1);
```

また、WordPress が提供する以下のコードを _**.htaccess**_ ファイルに追加してください：

```apache
RewriteEngine On
RewriteBase /
RewriteRule ^index.php$ - [L]

# add a trailing slash to /wp-admin
RewriteRule ^wp-admin$ wp-admin/ [R=301,L]

RewriteCond %{REQUEST_FILENAME} -f [OR]
RewriteCond %{REQUEST_FILENAME} -d
RewriteRule ^ - [L]
RewriteRule ^(wp-(content|admin|includes)._) $1 [L]
RewriteRule ^(._.php)$ $1 [L]
RewriteRule . index.php [L]
```

FTP クライアントまたはファイルマネージャー（例：cPanel）を使用して、これらの2つのファイルにコードをコピー＆ペーストしてください。

最後に、WordPress サイトに再ログインしてマルチサイトネットワークにアクセスしてください。

**Ultimate Multisite をインストールする前に、WordPress Multisite インストールでサブサイトを作成できることをテストし、確認することが重要です。**

サブサイトを作成するには：

1. サイトの wp-admin を開きます
2. My Sites > Sites (/wp-admin/network/sites.php) に移動します
3. 上部の Add New をクリックします
4. すべてのフィールドに入力します：

   * Site Address — 「www」は使用しないでください
   * Subdomain: [siteaddress.yourdomain.com](http://siteaddress.yourdomain.com)
   * Subdirectory: [yourdomain.com/siteaddress](http://yourdomain.com/siteaddress)
   * Site Title — サイトのタイトル（後で変更可能）
   * Admin Email — サブサイトの初期管理者ユーザーとして設定

![Add new site form in WordPress Multisite](/img/admin/sites-list.png)

フィールドに入力したら、"Add site" ボタンをクリックします。新しいサブサイトが作成されたら、アクセスしてサブサイトが機能していることを確認してください。

## よくある問題：

### 1\. 新しいサイトを作成できるが、アクセスできない。

サブドメインを選択した場合は、マルチサイトネットワークにワイルドカードサブドメインを設定する必要があります。

そのためには、ウェブサイトのホスティングアカウントのコントロールパネルダッシュボード（例：cPanel/Plesk/Direct Admin）に移動します。

「Domains」または「Subdomains」のオプションを探します。いくつかのコントロールパネルでは「Domain administration」と表示されます。

サブドメインフィールドにアスタリスク (*) を入力します。次に、サブドメインを追加したいドメイン名を選択するよう求められます。

選択したドメイン名のドキュメントルートが自動的に検出されます。_Create_ または _Save_ ボタンをクリックしてワイルドカードサブドメインを追加します。エントリは「*.[mydomain.com](http://mydomain.com)」のようになります。
