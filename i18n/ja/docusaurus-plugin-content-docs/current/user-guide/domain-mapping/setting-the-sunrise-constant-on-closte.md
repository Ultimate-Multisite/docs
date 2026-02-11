---
title: Closteで日の出定数を設定する
sidebar_position: 16
_i18n_hash: e579b8554057b98fef08a0f2bd2a0e82
---
# Setting the Sunrise constant to true on Closte

一部のホストプロバイダーはセキュリティ上の理由で wp-config.php をロックします。これは、Ultimate Multisite がドメインマッピングやその他の機能を動作させるために必要な定数を自動的にファイルに追加できないことを意味します。Closte はそのようなホストの一つです。

しかし、Closte は wp-config.php に安全に定数を追加する方法を提供しています。以下の手順に従うだけです。

## On the Closte dashboard

まず、[Closte アカウントにログイン](https://app.closte.com/)、Sites メニュー項目をクリックし、現在作業中のサイトの Dashboard リンクをクリックします：

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-dPRIeofCDK.png)

画面左側に新しいメニュー項目が表示されます。そのメニューを使って **Settings** ページに移動してください：

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-JmSwHIOaGz.png)

次に、**Settings** で WP-Config タブを見つけ、そのタブ内の「Additional wp-config.php content」フィールドを探します：

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-FqVEnSTIu9.png)

Ultimate Multisite をインストールする際は、そのフィールドに sunrise 定数を追加する必要があります。新しい行を追加し、以下の行を貼り付けます。その後、**Save All** ボタンをクリックしてください。

define('SUNRISE', true);

これで完了です。Ultimate Multisite のインストールウィザードに戻り、ページをリフレッシュしてプロセスを続行してください。
