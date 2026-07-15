---
title: WordPress Multisiteのインストール方法
sidebar_position: 2
_i18n_hash: 81ac2c706ca3b3b48bacaf85039d4753
---
# WordPress Multisite をインストールするには？

WordPress Multisite を使うと、1つのインストール上にサイトのネットワークを持てます。これは組み込み機能ですが、初期状態では有効ではありません。

:::tip
Ultimate Multisite には、このプロセス全体を自動化する **[組み込みの Multisite Setup Wizard](./multisite-setup-wizard)** が含まれています。Ultimate Multisite をインストール済みの場合は、以下の手動手順に従う代わりにウィザードの使用をおすすめします。
:::

Ultimate Multisite はネットワーク専用プラグインのため、このチュートリアルでは WordPress Multisite を手動でインストールして設定する方法を学びます。この文章は、WPBeginner の [WordPress Multisite Network のインストールと設定方法](https://www.wpbeginner.com/wp-tutorials/how-to-install-and-setup-wordpress-multisite-network/) を基にしています。

**Multisite ネットワークを作成する前に注意すべきこと:**

  * 良い WordPress ホスティングを用意しましょう。ネットワーク上のサイトは同じサーバーリソースを共有します。

  * 低トラフィックのサイトが数個だけの場合は、共有ホスティングで十分な場合が多いです。

  * ほとんどの **Managed WordPress ホスティングプロバイダー** は、Multisite を標準で提供しています（Multisite がすでに有効化・設定された状態で WordPress をインストールしてくれます）。これは WP Engine、Closte、Cloudways などが該当します。利用中のホスティングプロバイダーが該当するか不明な場合は、このチュートリアルを進める前にサポートへ問い合わせてください。

  * WordPress のインストールや、FTP を使ったファイル編集に慣れておくことも重要です。

_**重要**_ **:** 既存の WordPress サイトで Multisite ネットワークを設定する場合は、次のことを忘れないでください。

  * WordPress サイトの完全なバックアップを作成する

  * プラグインページに移動し、一括操作から _無効化_ を選択して _適用_ をクリックし、サイト上のすべてのプラグインを無効化する

<!-- Screenshot unavailable: WordPress plugins page showing bulk deactivate action -->

Multisite を有効にするには、まず FTP クライアントまたは cPanel ファイルマネージャーを使ってサイトに接続し、wp-config.php ファイルを編集用に開きます。

_*That’s all, stop editing! Happy blogging.*_ の行の前に、次のコードスニペットを追加します。

define('WP_ALLOW_MULTISITE', true);

wp-config.php ファイルを保存し、サーバーへ再アップロードします。

サイトで Multisite 機能が有効になったので、次にネットワークを設定します。

**ツール » ネットワーク設定** に移動します

<!-- Screenshot unavailable: WordPress Tools menu showing Network Setup option -->

次に、ネットワーク内のサイトで使用するドメイン構造を WordPress に指定します。サブドメインまたはサブディレクトリです。

サブドメインを選択する場合は、ドメインマッピングのために DNS 設定を変更し、Multisite ネットワーク用に _**ワイルドカードサブドメイン**_ を設定していることを確認する必要があります。

ネットワーク設定に戻り、ネットワークのタイトルを入力し、ネットワーク管理者メールアドレスが正しいことを確認します。続行するには _インストール_ をクリックします。

<!-- Screenshot unavailable: WordPress Network Setup page with network title and admin email fields -->

WordPress から提供されたこのコードを _**wp-config.php**_ に追加します。

define('MULTISITE', true); define('SUBDOMAIN_INSTALL', true); define('DOMAIN_CURRENT_SITE', 'multisite.local'); define('PATH_CURRENT_SITE', '/'); define('SITE_ID_CURRENT_SITE', 1); define('BLOG_ID_CURRENT_SITE', 1);

また、WordPress から提供されたこのコードを _**.htaccess**_ ファイルに追加します。

RewriteEngine On RewriteBase / RewriteRule ^index.php$ - [L]

# add a trailing slash to /wp-admin

RewriteRule ^wp-admin$ wp-admin/ [R=301,L]

RewriteCond %{REQUEST_FILENAME} -f [OR] RewriteCond %{REQUEST_FILENAME} -d RewriteRule ^ - [L] RewriteRule ^(wp-(content|admin|includes)._) $1 [L] RewriteRule ^(._.php)$ $1 [L] RewriteRule . index.php [L]

FTP クライアントまたはファイルマネージャー（たとえば cPanel のようなものを使用している場合）を使って、これら2つのファイルにコードをコピーして貼り付けます。

最後に、Multisite ネットワークへアクセスするために WordPress サイトへ再ログインします。

**Ultimate Multisite をインストールする前に、WordPress Multisite インストール環境でサブサイトを作成できることをテストし、確認することが重要です。**

サブサイトを作成するには:

  1. Webサイトの wp-admin を開きます

  2. 参加サイト > サイト（/wp-admin/network/sites.php）へ移動します

  3. 上部の新規追加をクリックします

  4. すべての項目に入力します。

  * サイトアドレス — “www” は絶対に使用しないでください

  * サブドメイン: [siteaddress.yourdomain.com](http://siteaddress.yourdomain.com)

  * サブディレクトリ: [yourdomain.com/siteaddress](http://yourdomain.com/siteaddress)

  * サイトタイトル — サイトのタイトルです。後で変更できます

  * 管理者メールアドレス — サブサイトの初期管理者ユーザーとして設定されます

![WordPress Multisite の新規サイト追加フォーム](/img/admin/sites-list.png)

項目への入力が完了したら、「サイトを追加」ボタンをクリックします。新しいサブサイトが作成されたら、そのサブサイトへアクセスし、正常に機能していることを確認します。

## よくある問題: {#common-problems}

### 1\. 新しいサイトは作成できるが、アクセスできない。 {#1-i-can-create-new-sites-but-they-are-not-accessible}

サブドメインを選択した場合は、Multisite ネットワーク用にワイルドカードサブドメインも設定する必要があります。

そのためには、Webサイトのホスティングアカウントのコントロールパネル Dashboard に移動します（例: ホスティングプロバイダーに応じて cPanel/Plesk/Direct Admin など）。

「ドメイン」または「サブドメイン」のオプションを探します。一部のコントロールパネルでは「ドメイン管理」と表示されています。

サブドメイン欄にアスタリスク（*）を入力します。その後、サブドメインを追加する対象のドメイン名を選択するよう求められるはずです。

選択したドメイン名のドキュメントルートは自動的に検出されます。ワイルドカードサブドメインを追加するには、_作成_ または _保存_ ボタンをクリックします。エントリーは「*.[mydomain.com](http://mydomain.com)」のようになります。
