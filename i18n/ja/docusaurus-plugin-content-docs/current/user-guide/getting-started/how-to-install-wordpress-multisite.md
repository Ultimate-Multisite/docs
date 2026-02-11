---
title: WordPress マルチサイトのインストール方法
sidebar_position: 2
_i18n_hash: ce5929a52ea69f8a4b769f6eab46445c
---
# WordPress Multisite をインストールするには？

WordPress Multisite を使用すると、単一のインストールでサイトのネットワークを構築できます。これは組み込み機能ですが、デフォルトでは有効になっていません。

Ultimate Multisite はネットワーク専用プラグインですので、このチュートリアルでは WordPress Multisite のインストールと設定方法を学びます。このテキストは WPBeginner の「[How to Install and Setup WordPress Multisite Network](https://www.wpbeginner.com/wp-tutorials/how-to-install-and-setup-wordpress-multisite-network/)」をベースにしています。

**マルチサイトネットワークを作成する前に注意すべき点：**

- 良い WordPress ホスティングを選びましょう！ネットワーク上のサイトは同じサーバーリソースを共有します。
- 低トラフィックのサイトが数個だけの場合は、共有ホスティングで十分でしょう。
- ほとんどの **Managed WordPress hosting providers** は、Multisite をデフォルトで有効にしてインストールします（WP Engine、Closte、Cloudways など）。ホストプロバイダーがこのような設定かどうか不明な場合は、チュートリアルを進める前にサポートに問い合わせてください。
- FTP を使った WordPress のインストールやファイル編集に慣れておくと便利です。

_**重要**_ **:** 既存の WordPress サイトでマルチサイトネットワークを設定する場合は、以下を忘れないでください：

- WordPress サイトの完全バックアップを作成する
- プラグインページに移動し、バルクアクションから _Deactivate_ を選択して _Apply_ をクリックし、サイト上のすべてのプラグインを停止する

[![](https://downloads.intercomcdn.com/i/o/141065015/09f448a371b8cab63280777c/Multisite+1.png)](https://downloads.intercomcdn.com/i/o/141065015/09f448a371b8cab63280777c/Multisite+1.png)

Multisite を有効にするには、まず FTP クライアントまたは cPanel ファイルマネージャーでサイトに接続し、wp-config.php ファイルを編集モードで開きます。

_*That’s all, stop editing! Happy blogging.*_ 行の前に、以下のコードスニペットを追加してください：

```php
define('WP_ALLOW_MULTISITE', true);
```

wp-config.php ファイルを保存し、サーバーにアップロードします。

サイトでマルチサイト機能が有効になったら、ネットワークの設定に進みます。

**Tools » Network Setup** に移動します

[![](https://downloads.intercomcdn.com/i/o/141065542/5bb9b19a52ece96c52b659d8/Multisite+3.png)](https://downloads.intercomcdn.com/i/o/141065542/5bb9b19a52ece96c52b659d8/Multisite+3.png)

次に、ネットワーク内のサイトで使用するドメイン構造（サブドメインかサブディレクトリか）を WordPress に伝える必要があります。

サブドメインを選択した場合は、ドメインマッピングの DNS 設定を変更し、マルチサイトネットワークに _**ワイルドカードサブドメイン**_ を設定する必要があります。

Network Setup に戻り、ネットワークのタイトルを入力し、Network admin email のメールアドレスが正しいことを確認してください。続行するには _Install_ をクリックします。

[![](https://downloads.intercomcdn.com/i/o/141066037/fd8a063b69988be1c372dac6/Multisite+4.png)](https://downloads.intercomcdn.com/i/o/141066037/fd8a063b69988be1c372dac6/Multisite+4.png)

WordPress が提供する以下のコードを _**wp-config.php**_ に追加します：

```php
define('MULTISITE', true); define('SUBDOMAIN_INSTALL', true); define('DOMAIN_CURRENT_SITE', 'multisite.local'); define('PATH_CURRENT_SITE', '/'); define('SITE_ID_CURRENT_SITE', 1); define('BLOG_ID_CURRENT_SITE', 1);
```

また、WordPress が提供する以下のコードを _**.htaccess**_ ファイルに追加します：

```apache
RewriteEngine On RewriteBase / RewriteRule ^index.php$ - [L]

# add a trailing slash to /wp-admin
RewriteRule ^wp-admin$ wp-admin/ [R=301,L]

RewriteCond %{REQUEST_FILENAME} -f [OR] RewriteCond %{REQUEST_FILENAME} -d RewriteRule ^ - [L] RewriteRule ^(wp-(content|admin|includes)._) $1 [L] RewriteRule ^(._.php)$ $1 [L] RewriteRule . index.php [L]
```

FTP クライアントまたはファイルマネージャー（例：cPanel）を使用して、これらの 2 つのファイルにコードをコピー＆ペーストします。

最後に、WordPress サイトに再ログインしてマルチサイトネットワークにアクセスします。

**Ultimate Multisite をインストールする前に、WordPress Multisite でサブサイトを作成できることを確認しておくことが重要です。**

サブサイトを作成するには：

1. サイトの wp-admin を開く
2. My Sites > Sites (/wp-admin/network/sites.php) に移動する
3. 上部の Add New をクリックする
4. すべての項目を入力する：

   * Site Address — 「www」を使用しないでください
   * Subdomain: [siteaddress.yourdomain.com](http://siteaddress.yourdomain.com)
   * Subdirectory: [yourdomain.com/siteaddress](http://yourdomain.com/siteaddress)
   * Site Title — サイトのタイトル（後で変更可能）
   * Admin Email — サブサイトの初期管理者ユーザーとして設定

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-hrA3XtntYQ.png)

項目を入力したら「Add site」ボタンをクリックします。新しいサブサイトが作成されたら、アクセスして機能していることを確認してください。

## よくある問題：

### 1\. 新しいサイトを作成できるが、アクセスできない。

サブドメインを選択した場合は、マルチサイトネットワークにワイルドカードサブドメインを設定する必要があります。

そのためには、ウェブサイトのホスティングアカウントのコントロールパネルダッシュボード（例：cPanel/Plesk/Direct Admin）に移動します。

「Domains」または「Subdomains」のオプションを探します。一部のコントロールパネルでは「Domain administration」と表示されることがあります。

サブドメイン欄にアスタリスク (*) を入力します。次に、サブドメインを追加したいドメイン名を選択するよう求められます。

選択したドメイン名のドキュメントルートが自動的に検出されます。_Create_ または _Save_ ボタンをクリックしてワイルドカードサブドメインを追加します。エントリは「*.[mydomain.com](http://mydomain.com)」のようになります。
