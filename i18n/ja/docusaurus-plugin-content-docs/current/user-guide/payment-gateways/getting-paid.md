---
title: 報酬を受け取る
sidebar_position: 15
_i18n_hash: b7e644488bb1bef802e024319be88725
---
# 支払いを受け取る (v2)

_**重要な注意: 本記事はUltimate Multisiteバージョン2.xを対象としています。**_

Ultimate Multisiteには組み込みのメンバーシップと請求システムがあります。請求システムを機能させるために、eコマースで一般的に使用される最も一般的な決済ゲートウェイを統合しました。Ultimate Multisiteのデフォルトの決済ゲートウェイは_Stripe_、_PayPal_、およびManual Paymentです。_WooCommerce_、_GoCardless_、および_Payfast_を使用して、各アドオンをインストールすることで支払いを受け取ることもできます。

## 基本設定

これらの決済ゲートウェイは、Ultimate Multisiteの支払い設定で構成できます。**Ultimate Multisiteメニュー > 設定 > 支払い**に移動して見つけることができます。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-42sl37Fn5G.png)

決済ゲートウェイを設定する前に、構成できる基本的な支払い設定を確認してください。

**Force auto-rene** **w:** これにより、ユーザーが選択した請求頻度に応じて、支払いが各請求サイクルの終了時に自動的に再発行されることが保証されます。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-Og3iJwLdmn.png)

**Allow trials without payment** **method:** このオプションを有効にすると、クライアントは登録プロセス中に金融情報を追加する必要がありません。試用期間が終了した時点でのみ必要になります。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-aA5Olqe9M9.png)

**Send invoice on payment confirmation:** 支払い後に請求書を送付するかどうかを選択できます。ユーザーはサブサイトのダッシュボードで支払い履歴にアクセスできます。このオプションはManual Gatewayには適用されません。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-RGupao7GvW.png)

**Invoice numbering scheme:** ここでは、支払い参照コードまたは連番スキームのいずれかを選択できます。請求書に支払い参照コードを使用する場合は、設定は不要です。連番スキームを使用する場合は、**next invoice number**（この番号はシステムで生成される次の請求書の請求書番号として使用されます。新しい請求書が作成されるたびに1ずつ増加します。変更して保存すると、連番を特定の値にリセットできます）と**invoice number prefix**を設定する必要があります。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-mP0949Eawa.png)

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-oD5LaLaw7t.png)

## ゲートウェイの場所

決済ゲートウェイは同じページ（**Ultimate Multisite > Settings > Payments**）で設定できます。**active payment gateways**の直下に、_Stripe_、_Stripe Checkout_、_PayPal_、および Manual を確認できます。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-g9RMYx84r5.png)

各決済ゲートウェイに関する専用記事があり、設定手順を案内します。リンクは以下にあります。

**Stripeゲートウェイの設定**

**PayPalゲートウェイの設定**

**手動決済の設定**

今、_WooCommerce_、_GoCardless_、または_Payfast_を決済ゲートウェイとして使用したい場合は、**install and configure their add-ons**する必要があります。

### WooCommerceアドオンのインストール方法

_Stripe_ と _PayPal_ が一部の国で利用できないため、Ultimate Multisiteユーザーがプラグインを効果的に使用できないことがあります。そこで、非常に人気のあるeコマースプラグインである_WooCommerce_を統合するアドオンを作成しました。世界中の開発者がさまざまな決済ゲートウェイを統合するアドオンを作成しました。この機会を利用して、Ultimate Multisite請求システムで使用できる決済ゲートウェイを拡張しました。

**重要:** Ultimate Multisite: WooCommerce Integrationは、少なくともメインサイトでWooCommerceが有効化されている必要があります。

まず、アドオンページに移動してください。**Ultimate Multisite > Settings**に移動すると見つけることができます。**Add-ons**テーブルが表示されます。**Check our Add-ons**をクリックしてください。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-WtOkJNuCsj.png)

**Check our Add-ons**をクリックすると、アドオンページにリダイレクトされます。ここでは、すべてのUltimate Multisiteアドオンが表示されます。**Ultimate Multisite: WooCommerce Integration**アドオンをクリックしてください。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-BmLWqj4yjt.png)

アドオンの詳細が表示されたウィンドウがポップアップします。**Install Now**をクリックしてください。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-fGaxHyPtsv.png)

インストールが完了すると、プラグインページにリダイレクトされます。ここで**Network Activate**をクリックすると、WooCommerceアドオンがネットワーク上で有効化されます。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-TM2lYtgyM7.png)

有効化後、まだWooCommerceプラグインがウェブサイトにインストールされていない場合は、リマインダーが表示されます。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-VwIGoJhzqc.png)

WooCommerce Integrationアドオンの詳細を読むには、**ここをクリック**してください。

### GoCardlessアドオンのインストール方法

_GoCardless_アドオンのインストール手順は、_WooCommerce_アドオンとほぼ同じです。アドオンページに移動し、**Ultimate Multisite: GoCardless Gateway**アドオンを選択してください。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-BmLWqj4yjt.png)

アドオンウィンドウがポップアップします。**Install Now**をクリックしてください。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-YIpPgP4VVo.png)

インストールが完了すると、プラグインページにリダイレクトされます。ここで**Network Activate**をクリックすると、_GoCardless_アドオンがネットワーク上で有効化されます。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-FGurJpzaF0.png)

_GoCardless_ゲートウェイの開始方法を学ぶには、**この記事を読む**。

### Payfastアドオンのインストール方法

アドオンページに移動し、**Ultimate Multisite: Payfast Gateway**アドオンを選択してください。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-BmLWqj4yjt.png)

アドオンウィンドウがポップアップします。**Install Now.**をクリックしてください。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-1jpCakOHNy.png)

インストールが完了すると、プラグインページにリダイレクトされます。ここで**Network Activate**をクリックすると、_Payfast_アドオンがネットワーク上で有効化されます。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-49OQHBwPxk.png)
