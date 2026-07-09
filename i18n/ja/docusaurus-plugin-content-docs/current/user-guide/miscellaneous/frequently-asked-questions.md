---
title: よくある質問
sidebar_position: 18
_i18n_hash: 2aae003605ca306aebc782d92f605d7c
---
# よくある質問

サポート依頼でよく寄せられる **よくある質問** をまとめました。

  * **Ultimate Multisite とは何ですか？**

Ultimate Multisite は WordPress multisite インストール向けに作られた WordPress plugin です。あなたの WordPress インストールを、[WordPress.com](https://WordPress.com) のような有料サイトネットワークに変え、クライアントが月額、四半期、年額の料金でサイトを作成できるようにします（無料プランを作成することもできます）。

  * **Ultimate Multisite は Multisite なしで動作しますか？**

いいえ。Ultimate Multisite には WordPress multisite、サブディレクトリ、またはサブドメインが必要です。

  * **Ultimate Multisite の要件は何ですか？**

Ultimate Multisite には以下が必要です。

**WordPress Version** : v5.3+（推奨：最新安定版）
**PHP Version** : 7.4.x（> 8.0 への対応は近日予定）
**MySQL Version** : v5+（推奨：バージョン 5.6。ホスティングプロバイダーで 8.0 を利用できない場合）

_Multisite（サブドメインまたはサブディレクトリ）も有効化する必要があります。_ [WordPress Multisite のインストール方法](/user-guide/getting-started/how-to-install-wordpress-multisite)。

  * **Ultimate Multisite はサブディレクトリ形式の Multisite で動作しますか？**

はい。Ultimate Multisite はサブディレクトリインストールとサブディレクトリインストールの両方に対応しています。

  * **Ultimate Multisite はサブドメイン形式の Multisite で動作しますか？**

はい。Ultimate Multisite はサブディレクトリインストールとサブドメインインストールの両方に対応しています。

  * **Ultimate Multisite を使って、ユーザーが使用できるプラグインやテーマを制限できますか？**

はい。Ultimate Multisite では、ネットワーク上の各プランで利用できるプラグインとテーマを選択できます。

  * **Ultimate Multisite を使って、ユーザーが自分のサイトで作成できる投稿数を制限できますか？**

はい。Ultimate Multisite では、ネットワーク上の **利用可能なすべての投稿タイプ** に投稿上限を設定できます。また、管理者が招待できるユーザー数、**ディスク容量、** など、さまざまな項目も制限できます。

  * **Ultimate Multisite はサイトテンプレートに対応していますか？**

はい。Ultimate Multisite では、必要なだけサイトテンプレートを作成できます。サイトテンプレートはテーマではなく、ネットワーク上の通常のサイトです。プラグインやテーマを有効化し、そのサイトテンプレートを自由にカスタマイズできます。ユーザーがそのテンプレートを選択すると、そのユーザーのサイトは、そのテンプレートのコピーとして、すべてのカスタマイズを反映した状態で作成されます。

特定のテンプレートをプランに設定することもできます。そうすることで、そのプランに登録したすべてのユーザーのサイトは、そのサイトテンプレートの複製として作成されます。

  * **Ultimate Multisite は WooCommerce と連携しますか？**

はい！

ネットワークのユーザーが WooCommerce を利用してストアを設定できるようにしたい場合、Ultimate Multisite を使えば可能です。各プラン階層でクライアントが作成できる商品の数を制限することもできます。

Ultimate Multisite のサブスクリプション支払いについては、[Ultimate Multisite: WooCommerce Integration Add-on](https://ultimatemultisite.com/addons/wp-ultimo-woocommerce/) を使用すると、Ultimate Multisite のクライアントがメインサイト上の WooCommerce ゲートウェイで支払えるようになります。これにより、WooCommerce 向けに開発された豊富な決済ゲートウェイのライブラリを活用し、Ultimate Multisite のクライアントに請求できます。

  * **WPMUDEV Pro Sites からサブスクリプションを移行する方法はありますか？**

はい。Ultimate Multisite では現在、Pro Sites ネットワークを移行するための [便利なツール](https://ultimatemultisite.com/addons/wp-ultimo-pro-sites-migrator/) を提供しています。

  * **プラン編集ページの「許可されたプラグイン」タブが空なのはなぜですか？**

Ultimate Multisite では、ネットワーク上でネットワーク有効化されていないプラグインへのアクセスのみを許可または拒否できます。プラグインがネットワーク有効化されている場合、その性質上、ネットワーク内のすべてのサイトでデフォルトで読み込まれます。

「許可されたプラグイン」タブにプラグインが表示されない場合は、目的のプラグインがネットワーク有効化されているかどうかを確認してください。

  * **独自の料金表デザインを使用できますか？**

はい。バージョン 1.4.0 以降、Ultimate Multisite はテンプレート上書きに対応しています。

  * **Ultimate Multisite は WP Engine で動作しますか？**

はい。Ultimate Multisite は以前から WP Engine に対応していましたが、ドメインマッピングを動作させるには、管理者が手動で追加手順（WP Engine パネルにドメインを追加すること）を行う必要がありました。**バージョン 1.6.0 以降は、この必要がなくなりました。** Ultimate Multisite は WP Engine API と直接連携し、マッピング後にドメインが自動的にパネルへ追加されます。

  * **おすすめのホスティングプロバイダーはどれですか？**

Ultimate Multisite はどのホスティングプロバイダーでも動作するはずです。違いは、Closte、Serverpilot、WPMUDEV、WP Engine、Cloudways、Gridpane、[Runcloud.io](http://Runcloud.io) など一部のホスティング会社では、ドメインマッピング機能との連携がより密接で、そのまま動作する点です。その他のホスティングでは、ドメインマッピングを手動で設定する必要がある場合があります。
