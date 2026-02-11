---
title: GitHub Snippets
sidebar_position: 3
_i18n_hash: fad95473848ba3a1089d657550a45182
---
# GitHubリポジトリでUltimate Multisiteスニペットを使用する方法

GitHubリポジトリには、Ultimate Multisiteユーザーから頻繁にリクエストされる、サインアップページにGoogle Analyticsスクリプトを追加したり、管理ダッシュボードからメタボックスを非表示にしたりするような小さな機能を追加するためのコードスニペットが用意されています。

この記事では、これらのコードをどのように使用し、具体的にはどこに配置するかを紹介します。

スニペットは以下のリンクで確認できます。

https://github.com/next-press/wp-ultimo-snippets/

コードを追加する方法は2つあります。

1. テーマのfunctions.phpファイルに追加する。
2. Must-Use Plugins（mu-plugins）

# テーマのfunctions.phpファイルにスニペットを追加する方法

1. WordPressネットワーク管理ダッシュボードにログインし、Themes > Theme Editorに移動します（下のスクリーンショット参照）。

2. 「Edit Themes」ページで、画面右上にあるドロップダウンフィールドでアクティブなテーマが選択されていることを確認してください（下のスクリーンショットの#3参照）。

3. 「Theme Files」セクションのfunctions.phpファイルをクリックしてファイルを読み込みます。下部までスクロールし、GitHubリポジトリから取得したUltimate Multisiteスニペットを貼り付けます。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-image.png)

# Must-Use Plugins（mu-plugins）の作成方法

WordPressには「Must-Use Plugins」、略して「mu-plugins」と呼ばれるカスタム機能をロードできる機能があります。

これらの特殊なmu-pluginsは、他のすべての通常プラグインよりも前にロードされ、無効化できません。マルチサイトネットワークでは、これらのmu-plugins内のコードはインストール内のすべてのサイトでロードされます。

1. FTPまたはSSHを使用して、WordPressインストールのファイルシステムにアクセスします。

2. WordPressインストールのwp-contentディレクトリ内に、mu-pluginsという名前の新しいディレクトリを作成します。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-image.png)

3. Notepadまたは任意のコードエディタを使用して、コンピュータ上にwu-snippet.phpという名前の新しいPHPファイルを作成します。

4. GitHubリポジトリから取得したUltimate Multisiteコードスニペットをファイルに貼り付けて保存します。コードスニペットの上部にこのコードを追加して、muプラグインにラベルを付けることもできます。
