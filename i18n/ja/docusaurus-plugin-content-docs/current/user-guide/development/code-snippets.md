---
title: コードスニペット
sidebar_position: 1
_i18n_hash: 5a7a9a95be84476f87a2c1ca0a4a2be5
---
# v2 用コードスニペット

基本的に、**WordPress** 用のコードスニペットは、専用の小さなプラグインが必要になる可能性のある特定のアクションを実行するために使用されます。こうしたコードスニペットは、WordPress コアまたはテーマファイル（一般的にはテーマの functions.php ファイル）に配置するか、MU プラグインとして使用できます。

この記事では、**Ultimate Multisite v2** で使用できる3つのコードスニペットを紹介します：

  * [**アカウントメニュー項目の位置を変更する**](#changing-the-position-of-the-account-menu-item)

  * [**ユーザーが特定のプランに属しているか、またはアクティブなサブスクリプションを持っているかどうかを確認する方法**](#how-to-check-if-the-user-is-under-a-given-plan-andor-has-an-active-subscription)

  * [**マッピングされたドメインでの Font-Icons の CORS 問題を修正する**](#fixing-cors-issues-with-font-icons-in-mapped-domains)

## アカウントメニュー項目の位置を変更する {#changing-the-position-of-the-account-menu-item}

クライアントのダッシュボードでアカウントメニュー項目の位置を変更するには、メインサイトのアクティブテーマの functions.php に以下のコードスニペットを追加するだけです。スニペットを mu-plugins やカスタムプラグインのいずれかに配置することもできます。

```php
add_filter('wu_my_account_menu_position', function() { return 10; // Tweak this value to place the menu in the desired position.
```

## ユーザーが特定のプランに属しているか、またはアクティブなサブスクリプションを持っているかどうかを確認する方法 {#how-to-check-if-the-user-is-under-a-given-plan-andor-has-an-active-subscription}

ネットワーク管理者として、サブスクリプションの状態とサブスクライブしているプランに基づいて、基本的なアクションを実行したり、選択されたサブスクライバーやエンドユーザーにサービス/機能を提供したりするカスタム関数を作成する必要がある場合があります。

これらの Ultimate Multisite ネイティブ関数が役立ちます。

ユーザーが特定のプランのメンバーかどうかを確認するには、次の関数を使用できます：

```php
wu_has_plan($user_id, $plan_id)
```

サブスクリプションがアクティブかどうかを確認するには、次の関数を使用できます：

```php
wu_is_active_subscriber($user_id)
```

以下は、現在のユーザーが特定のプラン（_Plan ID 50_）に属しているかどうか、およびユーザーのサブスクリプションがアクティブかどうかを確認する例です。

```php
$user_id = get_current_user_id();$plan_id = 50;if (wu_has_plan($user_id, $plan_id) && wu_is_active_subscriber($user_id)) { // USER IS MEMBER OF PLAN AND HIS SUBSCRIPTION IS ACTIVE, DO STUFF} else { // USER IS NOT A MEMBER OF PLAN -- OR -- HIS SUBSCRIPTION IS NOT ACTIVE, DO OTHER STUFF} // end if;
```

注意：_**wu_has_plan**_ は機能するために「Plan ID」を必要とします。

プランの ID を取得するには、**Ultimate Multisite > Products** に移動します。各製品の ID はテーブルの右側に表示されます。

注意：ユーザーは **Plan** にのみサブスクライブできます。パッケージやサービスにはサブスクライブできません。パッケージやサービスは **Plan** のアドオンにすぎません。

![Products list showing plan IDs](/img/admin/products-list.png)

## マッピングされたドメインでの Font-Icons の CORS 問題を修正する {#fixing-cors-issues-with-font-icons-in-mapped-domains}

ドメインをサブサイトにマッピングした後、サイトがカスタムフォントの読み込みに問題があることに気付く場合があります。これはサーバー設定のクロスオリジンブロックが原因です。

フォントファイルはほぼ常に CSS から直接読み込まれるため、当社のドメインマッピングプラグインは URL をオリジナルではなくマッピングされたドメインに書き換えることができません。そのため、問題を修正するにはサーバー設定ファイルを修正する必要があります。

以下は Apache と NGINX の問題を修正するコードスニペットです。これらの変更には、サーバー設定ファイル（.htaccess ファイルや NGINX 設定ファイル）の高度な知識が必要です。自分で変更するのが不安な場合は、ホスティングプロバイダーのサポート担当者にこのページを送ってサポートを依頼してください。

### Apache

あなたの .htaccess ファイルに次を追加してください：

```html
<FilesMatch “.(ttf|ttc|otf|eot|woff|font.css|css)$”> Header set Access-Control-Allow-Origin “*”
```

### NGINX

サーバー設定ファイル（場所はサーバーによって異なります）に次を追加してください：

```nginx
location ~ .(ttf|ttc|otf|eot|woff|font.css|css)$ { add_header Access-Control-Allow-Origin “*”;}
```
