---
title: よくある質問
sidebar_position: 18
_i18n_hash: 7a5b3130600e6d8eeeecee2d8cb03b2c
---
# よくある質問

以下は、サポートリクエストでよく寄せられる **よくある質問** です。

  * **Ultimate Multisiteとは何ですか？**

Ultimate Multisiteは、WordPressマルチサイトインストール用に作られたWordPressプラグインで、WordPressインストールをプレミアムネットワークに変換します – [WordPress.com](https://WordPress.com)のように – クライアントが月額、四半期、または年額料金でサイトを作成できるようにします（無料プランも作成できます）。

  * **Ultimate MultisiteはMultisiteなしで動作しますか？**

いいえ。Ultimate MultisiteはWordPressマルチサイト、サブディレクトリ、またはサブドメインが必要です。

  * **Ultimate Multisiteの要件は何ですか？**

Ultimate Multisiteは以下を必要とします：

**WordPressバージョン** : v5.3+ (推奨: 最新安定版)  
**PHPバージョン** : 7.4.x (8.0以降のサポートは近日公開予定)  
**MySQLバージョン** : v5+ (推奨: バージョン5.6、ホスティングプロバイダーで8.0が利用できない場合に備えて)

*_Multisite（サブドメインまたはサブディレクトリ）も有効化する必要があります。_* [How to Install WordPress Multisite](/user-guide/getting-started/how-to-install-wordpress-multisite).

  * **Ultimate Multisiteはサブディレクトリを使用したマルチサイトで動作しますか？**

はい。Ultimate Multisiteは両方のサブディレクトリインストールとサブディレクトリインストールをサポートします。

  * **Ultimate Multisiteはサブドメインを使用したマルチサイトで動作しますか？**

はい。Ultimate Multisiteは両方のサブディレクトリインストールとサブドメインインストールをサポートします。

  * **Ultimate Multisiteを使用して、ユーザーが使用できるプラグインとテーマを制限できますか？**

はい。Ultimate Multisiteを使用すると、ネットワーク上の各プランで利用可能なプラグインとテーマを選択できます。

  * **Ultimate Multisiteを使用して、ユーザーが自分のサイトで作成できる投稿数を制限できますか？**

はい。Ultimate Multisiteを使用すると、ネットワーク上の**利用可能なすべての投稿タイプ**に対して投稿クォータを設定できます。また、管理者が招待できるユーザー数、**ディスク容量**、その他多くの項目を制限できます。

  * **Ultimate Multisiteはサイトテンプレートをサポートしていますか？**

はい。Ultimate Multisiteを使用すると、必要な数だけサイトテンプレートを作成できます。サイトテンプレートはテーマではなく、ネットワーク上の通常のサイトです。プラグインやテーマを有効化し、好きなようにカスタマイズできます。ユーザーがそのテンプレートを選択すると、彼または彼女のサイトはそのテンプレートのコピーとして作成され、すべてのカスタマイズが適用されます。

また、特定のプランに対して特定のテンプレートを設定することもできます。これにより、そのプランにサインアップしたすべてのユーザーは、サイトがそのサイトテンプレートの複製として作成されます。

  * **Ultimate MultisiteはWooCommerceと統合できますか？**

はい！ネットワークユーザーにWooCommerceを利用可能にし、店舗を設定できるようにしたい場合、Ultimate Multisiteを使用すれば可能です。各プラン階層でクライアントが作成できる製品数を制限することもできます。

Ultimate Multisiteのサブスクリプション支払いに関しては、[Ultimate Multisite: WooCommerce Integration Add-on](https://ultimatemultisite.com/addons/wp-ultimo-woocommerce/)を使用して、Ultimate MultisiteクライアントがメインサイトのWooCommerceゲートウェイを使用して支払えるようにできます。この方法で、WooCommerce向けに開発された膨大な支払いゲートウェイライブラリを活用し、Ultimate Multisiteクライアントに請求できます。

  * **WPMUDEV Pro Sitesからサブスクリプションを移行する方法はありますか？**

はい、Ultimate Multisiteは現在、Pro Sitesネットワークを移行するための[便利なツール](https://ultimatemultisite.com/addons/wp-ultimo-pro-sites-migrator/)を提供しています。

  * **プラン編集ページで「許可されたプラグイン」タブが空になっている理由は何ですか？**

Ultimate Multisiteは、ネットワークで有効化されていないプラグインに対してのみアクセスを許可または拒否できます。プラグインがネットワークで有効化されている場合、その性質上、ネットワーク上のすべてのサイトでデフォルトで読み込まれます。

「許可されたプラグイン」タブにプラグインが表示されない場合は、目的のプラグインがネットワークで有効かどうかを確認してください。

  * **自分の価格表デザインを使用できますか？**

はい。バージョン1.4.0以降、Ultimate Multisiteはテンプレートの上書きをサポートしています。

  * **Ultimate MultisiteはWP Engineで動作しますか？**

はい。Ultimate Multisiteは常にWP Engineでサポートされていましたが、ドメインマッピングを機能させるには管理者が手動で追加（WP Engineパネルにドメインを追加）する必要がありました。**バージョン1.6.0以降はこの状況は変わりました。** Ultimate MultisiteはWP Engine APIと直接統合され、マッピング後にドメインが自動的にパネルに追加されます。

  * **どのホスティングプロバイダーを推奨しますか？**

Ultimate Multisiteは任意のホスティングプロバイダーで動作するはずです。唯一の違いは、Closte、Serverpilot、WPMUDEV、WP Engine、Cloudways、Gridpane、[Runcloud.io](http://Runcloud.io)などの一部のホスティング会社は、ドメインマッピング機能の統合がより緊密で、すぐに動作します。その他のホスティングでは、ドメインマッピングを手動で設定する必要があります。
