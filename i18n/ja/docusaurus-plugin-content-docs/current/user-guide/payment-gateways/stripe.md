---
title: Stripe の設定
sidebar_position: 6
_i18n_hash: 44043734d0965a10c4e4b848dfed3f0b
---
# Stripeゲートウェイの設定 (v2)

_**重要な注意: 本記事はUltimate Multisiteバージョン2.xを対象としています。**_

支払い設定ページでは最大4つの支払い方法を有効にできます: Stripe、Stripe Checkout、PayPal、Manual。この記事では **Stripe** の統合方法を紹介します。

## Stripeの有効化

ネットワークでStripeを利用可能な支払いゲートウェイとして有効にするには、**Ultimate Multisite > Settings > Payments** に移動し、Active Payment Gateways セクションの **Stripe** または **Stripe Checkout** の横にあるトグルをオンにします。

![Enabling Stripe in active payment gateways](/img/config/settings-payment-gateways.png)

### Stripe と Stripe Checkout の違い:

**Stripe:** この方法では、チェックアウト時にクレジットカード番号を入力するスペースが表示されます。

![Stripe inline credit card field during checkout](/img/config/settings-payment-gateways.png)

**Stripe Checkout:** この方法では、チェックアウト時に顧客をStripe Checkoutページにリダイレクトします。

![Stripe Checkout redirect page during checkout](/img/config/settings-payment-gateways.png)

Stripe APIキーの取得

Stripeを支払いゲートウェイとして有効にしたら、**Stripe Publishable Key** と **Stripe Secret Key** のフィールドに値を入力する必要があります。これはStripeアカウントにログインして取得できます。

_**注意:** **Sandbox mode** を有効にして、支払い方法が機能しているかテストできます。_

![Stripe API key fields and sandbox mode toggle](/img/config/settings-payment-gateways.png)

Stripeダッシュボードで、右上隅の **Developers** をクリックし、左メニューの **API Keys** を選択します。

![Stripe dashboard Developers section with API Keys](/img/config/settings-payment-gateways.png)

**Test Data**（本番サイトで統合が機能しているかテストするため）を使用するかどうかを選択できます。変更するには、**Viewing test data** トグルを切り替えます。

![Stripe Viewing test data toggle](/img/config/settings-payment-gateways.png)

**Publishable key** と **Secret key** の **Token** 列から値をコピーし、Ultimate Multisite Stripe Gateway フィールドに貼り付けます。その後、**Save Changes** をクリックします。

![Stripe publishable and secret key values](/img/config/settings-payment-gateways.png)

![Pasting Stripe keys in Ultimate Multisite settings](/img/config/settings-payment-gateways.png)

## Stripe Webhook の設定

Stripeは、**あなたのStripeアカウント** でイベントが発生するたびにUltimate Multisiteに通知するWebhookイベントを送信します。

**Developers** をクリックし、左メニューから **Webhooks** を選択します。その後、右側で **Add endpoint** をクリックします。

![Stripe Webhooks page with Add endpoint button](/img/config/settings-payment-gateways.png)

**Endpoint URL** が必要です。Ultimate Multisiteは自動的にエンドポイントURLを生成し、**Ultimate Multisite Stripe Gateway** セクションの **Webhook Listener URL** フィールドのすぐ下に表示されます。

![Webhook Listener URL field in Stripe gateway settings](/img/config/settings-payment-gateways.png)

**Copy** エンドポイントURLをコピーし、Stripeの **Endpoint URL** フィールドに **paste** します。

![Pasting endpoint URL in Stripe webhook setup](/img/config/settings-payment-gateways.png)

次に **Event** を選択します。このオプションでは、**Select all events** ボックスにチェックを入れ、**Add events** をクリックするだけです。その後、**Add Endpoint** をクリックして変更を保存します。

![Selecting all events and adding the Stripe endpoint](/img/config/settings-payment-gateways.png)

これで完了です。Stripeの支払い統合が完了しました！
