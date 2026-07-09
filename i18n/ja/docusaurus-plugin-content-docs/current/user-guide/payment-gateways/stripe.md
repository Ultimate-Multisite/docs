---
title: Stripe の設定
sidebar_position: 6
_i18n_hash: a73a808f5976fbabb54e2c9889334d00
---
# Stripe Gateway の設定（v2） {#setting-up-the-stripe-gateway-v2}

_**重要な注意: この記事は Ultimate Multisite バージョン 2.x を対象としています。**_

支払い設定ページでは、Stripe、Stripe Checkout、PayPal、手動の最大 4 つの支払い方法を有効化できます。この記事では、**Stripe** との連携方法を説明します。

## Stripe の有効化 {#enabling-stripe}

ネットワークで Stripe を利用可能な支払いゲートウェイとして有効化するには、**Ultimate Multisite > 設定 > 支払い** に移動し、有効な支払いゲートウェイセクションで **Stripe** または **Stripe Checkout** の横にあるトグルにチェックを入れます。

![有効な支払いゲートウェイで Stripe を有効化](/img/config/settings-payment-gateways.png)

### Stripe と Stripe Checkout の違い: {#stripe-vs-stripe-checkout}

**Stripe:** この方法では、支払い手続き中にクレジットカード番号を入力する欄が表示されます。

![支払い手続き中の Stripe インラインクレジットカード欄](/img/config/settings-payment-gateways.png)

**Stripe Checkout:** この方法では、支払い手続き中に顧客を Stripe Checkout ページへリダイレクトします。

![支払い手続き中の Stripe Checkout リダイレクトページ](/img/config/settings-payment-gateways.png)

Stripe API キーの取得

Stripe を支払いゲートウェイとして有効化したら、**Stripe Publishable Key** と **Stripe Secret Key** の欄に入力する必要があります。これは Stripe Account にログインして取得できます。

_**注意:** 支払い方法が機能しているかをテストするために、**サンドボックスモード** を有効化できます。_

![Stripe API キー欄とサンドボックスモードのトグル](/img/config/settings-payment-gateways.png)

Stripe Dashboard で、右上の **開発者** をクリックし、左メニューの **API キー** をクリックします。

![API キーがある Stripe Dashboard の開発者セクション](/img/config/settings-payment-gateways.png)

**テストデータ** を使用して、本番サイトで連携が機能しているかをテストすることも、使用しないこともできます。変更するには、**テストデータを表示** トグルを切り替えます。

![Stripe のテストデータ表示トグル](/img/config/settings-payment-gateways.png)

**Token** 列から **Publishable key** と **Secret key** の値をコピーし、Ultimate Multisite Stripe Gateway の欄に貼り付けます。その後、**変更を保存** をクリックします。

![Stripe の公開可能キーとシークレットキーの値](/img/config/settings-payment-gateways.png)

![Ultimate Multisite 設定に Stripe キーを貼り付け](/img/config/settings-payment-gateways.png)

## Stripe Webhook の設定 {#setting-up-stripe-webhook}

Stripe は、**あなたの Stripe Account** でイベントが発生するたびに Ultimate Multisite へ通知する Webhook イベントを送信します。

**開発者** をクリックし、左メニューの **Webhook** 項目を選択します。次に右側の **エンドポイントを追加** *。* をクリックします。

![エンドポイントを追加ボタンがある Stripe Webhook ページ](/img/config/settings-payment-gateways.png)

**エンドポイント URL** *。* が必要です。Ultimate Multisite はエンドポイント URL を自動生成します。これは **Ultimate Multisite Stripe Gateway** セクションの **Webhook Listener URL** 欄のすぐ下で確認できます_。_

![Stripe Gateway 設定の Webhook Listener URL 欄](/img/config/settings-payment-gateways.png)

エンドポイント URL を **コピー** し、Stripe の **エンドポイント URL** 欄に **貼り付け** ます。

![Stripe Webhook 設定にエンドポイント URL を貼り付け](/img/config/settings-payment-gateways.png)

次に **イベント** *。* を選択します。このオプションでは、**すべてのイベントを選択** ボックスにチェックを入れ、**イベントを追加** をクリックするだけです。その後、**エンドポイントを追加** をクリックして変更を保存します。

![すべてのイベントを選択して Stripe エンドポイントを追加](/img/config/settings-payment-gateways.png)

これで、Stripe 支払い連携は完了です！
