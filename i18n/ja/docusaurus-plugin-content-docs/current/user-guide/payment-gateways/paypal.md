---
title: PayPal の設定
sidebar_position: 10
_i18n_hash: 894ca1f2ca4ca589f3ef49c131e330d5
---
# PayPal ゲートウェイの設定（v2） {#setting-up-the-paypal-gateway-v2}

_**重要な注意: この記事は Ultimate Multisite バージョン 2.x を対象としています。**_

支払い設定ページでは、Stripe、Stripe Checkout、PayPal、Manual の最大4つの支払い方法を有効化できます。この記事では、**PayPal** との連携方法を説明します。

Stripe と同様に、PayPal はオンライン決済で広く使われており、特に WordPress サイトでよく利用されています。この記事では、ネットワークで利用できる支払い方法として PayPal を使用する方法を案内します。

この連携に必要な API 認証情報を取得するには、**PayPal Business account** が必要です。

## ネットワークで PayPal を有効化する {#enabling-paypal-on-your-network}

ネットワークで利用可能な支払い方法として PayPal を有効化するには、**Ultimate Multisite > Settings > Payments** タブに移動し、PayPal の横にあるチェックボックスをオンにします。

![有効な支払いゲートウェイで PayPal を有効化](/img/config/settings-payment-gateways.png)

## ガイド付きセットアップウィザードを使用する {#using-the-guided-setup-wizard}

Ultimate Multisite 2.10.0 では、支払いゲートウェイ設定にガイド付き PayPal セットアップウィザードが追加されました。PayPal を有効化した後、**Ultimate Multisite > Settings > Payments** のウィザードを使用して、ゲートウェイの接続方法を選択し、保存前にまだ必要な認証情報を確認します。

ウィザードは2つの設定方法に対応しています。

* **手動での認証情報入力**: すでに PayPal API 認証情報を持っている場合、アカウントで OAuth 設定を利用できない場合、または PayPal から認証情報を自分でコピーしたい場合は、この方法を使用します。PayPal フィールドに API Username、API Password、API Signature を入力し、支払い設定を保存します。
* **OAuth 接続ゲート**: OAuth オプションが利用可能で、インストール環境で有効になっている場合にのみ、この方法を使用します。ウィザードは機能フラグの背後で OAuth フローを表示するため、フラグのないネットワークでは手動での認証情報入力フィールドを引き続き使用します。

ウィザードに OAuth オプションが表示されない場合は、以下の手動での認証情報入力フローを完了してください。ゲートウェイは、以前の Ultimate Multisite 2.x リリースと同じ PayPal Business API 認証情報で動作します。

## PayPal API 認証情報を取得する {#getting-the-paypal-api-credentials}

PayPal を支払いゲートウェイとして有効化したら、PayPal API **Username**、PayPal API **Password**、PayPal API **Signature** の各フィールドに入力する必要があります。

これは、PayPal の [Live](https://www.paypal.com/home) または [Sandbox](https://www.sandbox.paypal.com/home) アカウントにログインして取得できます。

（**sandbox mode** を使用して支払いをテストし、ゲートウェイが正しく設定されているか確認できます。該当するセクションをオンに切り替えるだけです。）

![PayPal API 認証情報フィールドと sandbox mode 切り替え](/img/config/settings-payment-gateways.png)

PayPal アカウントの API Signature または Certificate 認証情報をリクエストするには:

  1. [Account Settings](https://www.paypal.com/businessmanage/account/accountAccess) に移動します。

  2. **API access** セクションで、**Update** をクリックします。
![API access セクションがある PayPal Account Settings](/img/config/settings-payment-gateways.png)

  3. **NVP/SOAP API integration (Classic)** の下で、**Manage API credentials** をクリックします。
![PayPal NVP/SOAP API integration Manage API credentials](/img/config/settings-payment-gateways.png)

     * すでに API Signature または Certificate を生成している場合は、認証情報を確認できるページにリダイレクトされます。

     * _**注:** PayPal アカウントの確認を求められた場合は、画面上の指示に従ってください。_

  4. 次のオプションのいずれか _1つ_ を選択し、**Agree and Submit** をクリックします。

     * **Request API Signature** – API Signature 認証を使用する場合に選択します。

     * **Request API Certificate** – API Certificate 認証を使用する場合に選択します。

  5. PayPal は API 認証情報を次のように生成します。
![PayPal が生成した API 認証情報](/img/config/settings-payment-gateways.png)

     * **API Signature credentials** には、API Username、API Password、Signature が含まれ、有効期限はありません。これらの値は、セキュリティ強化のためデフォルトで非表示になっています。**Show/Hide** をクリックすると表示と非表示を切り替えられます。完了したら **Done** をクリックします。

     * **API Certificate credentials** には、API Username、API Password、Certificate が含まれ、3年後に自動的に期限切れになります。**Download Certificate** をクリックして、API Certificate をデスクトップに保存します。

以上で、PayPal 支払い連携は完了です。

PayPal 設定について質問がある場合は、PayPal の [Help Center](https://www.paypal.com/br/smarthelp/home) を参照してください。
