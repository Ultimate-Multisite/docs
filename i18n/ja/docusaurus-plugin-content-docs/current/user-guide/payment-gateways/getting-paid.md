---
title: 支払いを受ける
sidebar_position: 15
_i18n_hash: 7808f514b91797f7ffb68811b12c48be
---
# 支払いを受け取る（v2） {#getting-paid-v2}

_**重要な注記: この記事は Ultimate Multisite バージョン 2.x を対象としています。**_

Ultimate Multisite には、会員制と請求のシステムが組み込まれています。請求システムが機能するように、電子商取引でよく使われる主要な決済ゲートウェイを統合しています。Ultimate Multisite のデフォルトの決済ゲートウェイは、_Stripe_、_PayPal_、手動支払いです。各アドオンをインストールすることで、_WooCommerce_、_GoCardless_、_Payfast_ を使って支払いを受け取ることもできます。

## 基本設定 {#basic-settings}

これらの決済ゲートウェイは、Ultimate Multisite の支払い設定で構成できます。**Ultimate Multisite メニュー > 設定 > 支払い** に移動すると見つかります。

![Payments パネルを表示している Ultimate Multisite の支払い設定ページ](/img/config/payments-settings-page.png)

決済ゲートウェイを設定する前に、構成できる基本的な支払い設定を確認してください。

**自動更新を強制** **:** これにより、ユーザーが選択した請求頻度に応じて、各請求サイクルの終了時に支払いが自動的に繰り返されます。

<!-- Screenshot unavailable: Force Auto-Renew toggle setting on the Payments settings page -->

Ultimate Multisite v2.13.0 は、自動更新を有効にした定期会員資格を保存する前に、有効なゲートウェイに再利用可能な更新用認証情報があるかを確認します。更新用認証情報には、ゲートウェイのサブスクリプション、請求契約、保存済みの vault token、または同等の再利用可能な支払い方法が含まれます。ゲートウェイが利用可能な認証情報が存在しないと報告した場合、Ultimate Multisite は会員資格を保存しますが、自動更新をオフにし、不足している認証情報の状態を記録します。これにより、管理者またはサポートフローが更新日前に支払いを再承認するよう顧客に依頼できます。

これにより、ゲートウェイが一回限りの支払いしか回収できない場合に、会員資格が自動更新されるように見えることを防ぎます。ゲートウェイのアドオンは、特にゲートウェイが一回限りの決済と保存済みまたはサブスクリプション型の支払いモードの両方をサポートしている場合、定期的なチェックアウトで再利用可能な認証情報が保存されることを確認する必要があります。

**支払い** **方法なしでトライアルを許可:** このオプションを有効にすると、登録手続き中にクライアントが金融情報を追加する必要はありません。これはトライアル期間が終了した時点でのみ必要になります。

<!-- Screenshot unavailable: Allow Trials Without Payment Method toggle on the Payments settings page -->

**支払い確認時に請求書を送信:** これにより、支払い後に請求書を送信するかどうかを選択できます。ユーザーは自分のサブサイト Dashboard で支払い履歴にアクセスできます。このオプションは手動ゲートウェイには適用されません。

<!-- Screenshot unavailable: Send Invoice on Payment Confirmation toggle on the Payments settings page -->

**請求書番号の方式:** ここでは、支払い参照コードまたは連番方式のいずれかを選択できます。請求書に支払い参照コードを使用する場合、設定は不要です。連番方式を使用する場合は、**次の請求書番号**（この番号は、システムで次に生成される請求書の請求書番号として使用されます。新しい請求書が作成されるたびに 1 ずつ増えます。変更して保存すると、請求書の連番を特定の値にリセットできます）と **請求書番号の接頭辞** を設定する必要があります。

<!-- Screenshot unavailable: Invoice numbering scheme dropdown with Payment Reference Code and Sequential Number options -->

<!-- Screenshot unavailable: Next invoice number and invoice number prefix fields shown when Sequential Number is selected -->

## ゲートウェイの場所: {#where-to-find-the-gateways}

同じページ（**Ultimate Multisite > 設定 > 支払い**）で決済ゲートウェイを設定できます。**有効な決済ゲートウェイ** のすぐ下に、_Stripe_、_Stripe_ _Checkout_、_PayPal_、_Manual_ が表示されます。

![Stripe、Stripe Checkout、PayPal、Manual を一覧表示している有効な決済ゲートウェイセクション](/img/config/payments-active-gateways.png)

各決済ゲートウェイの設定手順を案内する専用記事を用意しています。以下のリンクから確認できます。

支払いの詳細を表示および編集できます。

![支払い編集インターフェース](/img/admin/payment-edit.png)

支払い編集ページの全体表示はこちらです。

![支払い編集の全体インターフェース](/img/admin/payment-edit-full.png)

決済ゲートウェイ設定の全体表示もこちらです。

![決済ゲートウェイ設定の全体ページ](/img/config/settings-payments-gateways-full.png)

**Stripe ゲートウェイの設定**

**PayPal ゲートウェイの設定**** **

**手動支払いの設定**

ここで、_WooCommerce_、_GoCardless_、または _Payfast_ を決済ゲートウェイとして使用したい場合は、**それぞれのアドオンをインストールして構成** する必要があります。

### WooCommerce アドオンのインストール方法: {#how-to-install-the-woocommerce-add-on}

一部の国では _Stripe_ と _PayPal_ が利用できず、Ultimate Multisite ユーザーが当プラグインを効果的に利用するうえで制限や妨げになることを理解しています。そのため、非常に人気のある電子商取引プラグインである _WooCommerce_ を統合するアドオンを作成しました。世界中の開発者が、さまざまな決済ゲートウェイを統合するためのアドオンを作成しています。これを活用して、Ultimate Multisite の請求システムで利用できる決済ゲートウェイを拡張しました。

_**重要:** Ultimate Multisite: WooCommerce Integration には、少なくともメインサイトで WooCommerce が有効化されている必要があります。_

まず、アドオンページに移動してください。**Ultimate Multisite > 設定** に移動すると見つかります。**アドオン** テーブルが表示されるはずです。**アドオンを確認** をクリックします。

<!-- Screenshot unavailable: Add-ons table on the Ultimate Multisite Settings sidebar with the Check our Add-ons link -->

**アドオンを確認** をクリックすると、アドオンページにリダイレクトされます。ここで、すべての Ultimate Multisite アドオンを確認できます。**Ultimate Multisite: WooCommerce Integration** アドオンをクリックします。

![WooCommerce Integration を含む Ultimate Multisite アドオンを一覧表示しているアドオンページ](/img/addons/addons-page.png)

アドオンの詳細が表示されたウィンドウがポップアップします。**Install Now**をクリックしてください。

<!-- スクリーンショット利用不可: Install NowボタンがあるUltimate Multisite WooCommerce Integrationアドオンの詳細ダイアログ -->

インストールが完了すると、プラグインページにリダイレクトされます。ここで**Network Activate**をクリックすると、WooCommerceアドオンがネットワークで有効化されます。

<!-- スクリーンショット利用不可: WooCommerce IntegrationアドオンのNetwork Activateリンクがあるプラグインページ -->

有効化後、まだWebサイトにWooCommerceプラグインをインストールして有効化していない場合は、リマインダーが表示されます。

<!-- スクリーンショット利用不可: WooCommerceプラグインをインストールして有効化するよう管理者に促す管理通知 -->

WooCommerce Integrationアドオンの詳細を読むには、**ここをクリック**してください。

### GoCardlessアドオンのインストール方法: {#how-to-install-the-gocardless-add-on}

_GoCardless_アドオンのインストール手順は、_WooCommerce_アドオンとほぼ同じです。アドオンページに移動し、**Ultimate Multisite: GoCardless Gateway**アドオンを選択してください。

<!-- スクリーンショット利用不可: Ultimate Multisite GoCardless Gatewayアドオンが強調表示されたアドオンページ -->

アドオンウィンドウがポップアップします。**Install Now**をクリックしてください。

<!-- スクリーンショット利用不可: Install NowボタンがあるUltimate Multisite GoCardless Gatewayアドオンの詳細ダイアログ -->

インストールが完了すると、プラグインページにリダイレクトされます。ここで**Network Activate**をクリックすると、_GoCardless_アドオンがネットワークで有効化されます。

<!-- スクリーンショット利用不可: GoCardless GatewayアドオンのNetwork Activateリンクがあるプラグインページ -->

_GoCardless_ゲートウェイの始め方については、**この記事をお読みください**。

### Payfastアドオンのインストール方法: {#how-to-install-the-payfast-add-on}

アドオンページに移動し、**Ultimate Multisite: Payfast Gateway**アドオンを選択してください。

<!-- スクリーンショット利用不可: Ultimate Multisite Payfast Gatewayアドオンが強調表示されたアドオンページ -->

アドオンウィンドウがポップアップします。**Install Now.**をクリックしてください。

<!-- スクリーンショット利用不可: Install NowボタンがあるUltimate Multisite Payfast Gatewayアドオンの詳細ダイアログ -->

インストールが完了すると、プラグインページにリダイレクトされます。ここで**Network Activate**をクリックすると、_Payfast_アドオンがネットワークで有効化されます。

<!-- スクリーンショット利用不可: Payfast GatewayアドオンのNetwork Activateリンクがあるプラグインページ -->
