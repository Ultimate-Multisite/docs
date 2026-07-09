---
title: GitHub スニペット
sidebar_position: 3
_i18n_hash: c643f3d76aace8c15fd224b984af6633
---
# GitHub repository にある Ultimate Multisite snippets の使い方

GitHub repository には、Ultimate Multisite ユーザーからよく要望されるコード snippet が用意されています。たとえば、サインアップページに Google Analytics script を追加したり、管理 Dashboard から meta box を非表示にしたりする小さな機能を追加できます。

この記事では、これらのコードの使い方、より具体的には配置場所を説明します。

snippets は以下のリンクで確認できます。

https://github.com/next-press/wp-ultimo-snippets/

コードを追加する方法は 2 つあります

  1. theme の functions.php ファイルに追加する。

  2. Must-Use Plugins（mu-plugins）

# theme の functions.php ファイルに snippet を追加する方法

  1. WordPress Network 管理 Dashboard にログインし、Themes >Theme Editor に移動します（下の screenshot を参照）。

  2. "Edit Themes" ページで、画面右上にある dropdown field で active theme が選択されていることを確認します（下の screenshot の #3）。

  3. "Theme Files" セクションの functions.php ファイルをクリックしてファイルを読み込みます。下部までスクロールし、GitHub repository から取得した Ultimate Multisite snippet を貼り付けます。

<!-- Screenshot unavailable: WordPress Theme Editor showing functions.php file editing -->

# Must-Use Plugins（mu-plugins）の作成方法

WordPress には、"Must-Use Plugins"、略して "mu-plugins" と呼ばれるカスタム機能を読み込める機能があります。

これらの特別な mu-plugins は、他の通常の plugin より前に読み込まれ、無効化できません。マルチサイトネットワークでは、これらの mu-plugins 内のコードがインストール内のすべてのサイトで読み込まれます。

1\. FTP または SSH を使用して、WordPress インストールのファイルシステムにアクセスします。

2\. WordPress インストールの wp-content ディレクトリ内に、mu-plugins という名前の新しいディレクトリを作成します。

<!-- Screenshot unavailable: File manager showing wp-content directory with mu-plugins folder -->

3\. Notepad または任意のコードエディターを使用して、コンピューター上に wu-snippet.php という名前の新しい PHP ファイルを作成します。

4\. GitHub repository から取得した Ultimate Multisite コード snippet をファイルに配置して保存します。mu plugin にラベルを付けるために、このコードをコード snippet の先頭に追加することもできます。
