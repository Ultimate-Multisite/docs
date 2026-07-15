---
title: コードスニペット
sidebar_position: 1
_i18n_hash: 2284b14474d86f665fa7c84cc305553e
---
# v2 用コードスニペット

基本的に、**WordPress** のコードスニペットは、本来なら専用の小さな plugin が必要になる特定の処理を行うために使います。このようなコードスニペットは、WordPress 本体または theme のファイルのいずれか（通常は theme の functions.php ファイル）に配置します。また、MU plugin として使うこともできます。

この記事では、**Ultimate Multisite v2** で使える 3 つのコードスニペットを紹介します。

  * [**Account メニュー項目の位置を変更する**](#changing-the-position-of-the-account-menu-item)

  * [**ユーザーが特定の plan に属しているか、または有効な subscription を持っているかを確認する方法**](#how-to-check-if-the-user-is-under-a-given-plan-andor-has-an-active-subscription)

  * [**マッピング済みドメインで Font-Icons の CORS 問題を修正する**](#fixing-cors-issues-with-font-icons-in-mapped-domains)

## Account メニュー項目の位置を変更する {#changing-the-position-of-the-account-menu-item}

クライアントの Dashboard 上にある Account メニュー項目の位置を変更するには、次のコードスニペットをメイン site の有効な theme の functions.php に追加するだけです。このスニペットは、mu-plugins または custom plugins のいずれかに入れることもできます。

add_filter('wu_my_account_menu_position', function() { return 10; // Tweak this value to place the menu in the desired position.

## ユーザーが特定の plan に属しているか、または有効な subscription を持っているかを確認する方法 {#how-to-check-if-the-user-is-under-a-given-plan-andor-has-an-active-subscription}

network admin として、subscription の状態や加入している plan に基づいて、選択した subscribers または end-users のグループに対して基本的な処理を実行したり、サービスや機能を利用可能にしたりする custom 関数を作成する必要がある場合があります。

これらの Ultimate Multisite ネイティブ関数が役立ちます。

ユーザーが特定の plan のメンバーかどうかを確認するには、次の関数を使用できます。

wu_has_plan($user_id, $plan_id)

subscription が有効かどうかを確認するには、次の関数を使用できます。

wu_is_active_subscriber($user_id)

以下は、現在のユーザーが特定の plan（_Plan ID 50_）に属しており、ユーザーの subscription が有効かどうかを確認するスニペットの例です。

$user_id = get_current_user_id();$plan_id = 50;if (wu_has_plan($user_id, $plan_id) && wu_is_active_subscriber($user_id)) { // USER IS MEMBER OF PLAN AND HIS SUBSCRIPTION IS ACTIVE, DO STUFF} else { // USER IS NOT A MEMBER OF PLAN -- OR -- HIS SUBSCRIPTION IS NOT ACTIVE, DO OTHER STUFF} // end if;

_**wu_has_plan**_ が機能するには「Plan ID」が必要であることに注意してください。

plan の ID を取得するには、**Ultimate Multisite > Products** に移動します。各 product の ID はテーブルの右側に表示されます。

ユーザーが加入できるのは **Plan** のみであり、Package や Service には加入できないことに注意してください。これらは **Plan** の add-on にすぎません。

![plan ID を表示している products 一覧](/img/admin/products-list.png)

## マッピング済みドメインで Font-Icons の CORS 問題を修正する {#fixing-cors-issues-with-font-icons-in-mapped-domains}
## マッピング済みドメインで Font-Icons の CORS 問題を修正する {#fixing-cors-issues-with-font-icons-in-mapped-domains-1}

ドメインを sub-site にマッピングした後、site で custom fonts の読み込みに問題が起きる場合があります。これは、サーバー設定の cross-origin ブロックが原因です。

font ファイルはほとんどの場合 CSS から直接読み込まれるため、当社の domain mapping plugin は、元のドメインではなくマッピング済みドメインを使うように URL を書き換えることができません。そのため、この問題を修正するには、サーバー設定ファイルを変更する必要があります。

以下は、Apache と NGINX でこの問題を修正するためのコードスニペットです。これらの変更には、サーバー設定ファイル（.htaccess ファイルおよび NGINX 設定ファイル）に関する高度な知識が必要です。自分で変更することに不安がある場合は、支援を依頼する際にこのページを hosting provider のサポート担当者へ送ってください。

### Apache {#apache}

.htaccess ファイルに、次を追加します。

<FilesMatch “.(ttf|ttc|otf|eot|woff|font.css|css)$”> Header set Access-Control-Allow-Origin “*”

### NGINX {#nginx}

サーバー設定ファイル（場所はサーバーによって異なります）に、次を追加します。

location ~ .(ttf|ttc|otf|eot|woff|font.css|css)$ { add_header Access-Control-Allow-Origin “*”;}
