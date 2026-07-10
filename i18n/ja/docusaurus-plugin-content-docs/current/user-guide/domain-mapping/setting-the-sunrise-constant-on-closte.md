---
title: ClosteでSunrise定数を設定する
sidebar_position: 16
_i18n_hash: ce55527b126282d167eec4e3a8f824ea
---
# Closte で Sunrise 定数を true に設定する {#setting-the-sunrise-constant-to-true-on-closte}

一部のホストプロバイダーは、セキュリティ上の理由で wp-config.php をロックしています。つまり、Ultimate Multisite は、ドメインマッピングやその他の機能を動作させるために必要な定数を含めるよう、このファイルを自動編集できません。Closte はそのようなホストの一つです。

ただし、Closte では安全な方法で wp-config.php に定数を追加できます。以下の手順に従うだけです。

## Closte Dashboard で {#on-the-closte-dashboard}

まず、[Closte Account にログイン](https://app.closte.com/)し、Sites メニュー項目をクリックしてから、現在作業しているサイトの Dashboard リンクをクリックします。

<!-- スクリーンショットは利用できません: Sites メニューと Dashboard リンクを表示する Closte Dashboard -->

画面左側に新しいメニュー項目がいくつか表示されます。そのメニューを使って **Settings** ページへ移動します。

<!-- スクリーンショットは利用できません: Settings オプションを表示する Closte 左サイドバーメニュー -->

次に、**Settings** で WP-Config タブを見つけ、そのタブ内の「Additional wp-config.php content」フィールドを見つけます。

<!-- スクリーンショットは利用できません: WP-Config タブと Additional wp-config.php content フィールドを表示する Closte Settings ページ -->

Ultimate Multisite のインストールでは、そのフィールドに sunrise 定数を追加する必要があります。新しい行を追加し、以下の行を貼り付けるだけです。その後、**Save All** ボタンをクリックします。

define('SUNRISE', true);

これで完了です。Ultimate Multisite のインストールウィザードに戻り、ページを更新して処理を続行してください。
