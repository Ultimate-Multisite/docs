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

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-UUtLaJgx7R.png)

### Stripe と Stripe Checkout の違い:

**Stripe:** この方法では、チェックアウト時にクレジットカード番号を入力するスペースが表示されます。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-k73ZUl1hTW.png)

**Stripe Checkout:** この方法では、チェックアウト時に顧客をStripe Checkoutページにリダイレクトします。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-PCZ16DhYrj.png)

Stripe APIキーの取得

Stripeを支払いゲートウェイとして有効にしたら、**Stripe Publishable Key** と **Stripe Secret Key** のフィールドに値を入力する必要があります。これはStripeアカウントにログインして取得できます。

_**注意:** **Sandbox mode** を有効にして、支払い方法が機能しているかテストできます。_

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-dhnvBN03ii.png)

Stripeダッシュボードで、右上隅の **Developers** をクリックし、左メニューの **API Keys** を選択します。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-HVqsu1SXuE.png)

**Test Data**（本番サイトで統合が機能しているかテストするため）を使用するかどうかを選択できます。変更するには、**Viewing test data** トグルを切り替えます。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-kdVC3W8Bsr.png)

**Publishable key** と **Secret key** の **Token** 列から値をコピーし、Ultimate Multisite Stripe Gateway フィールドに貼り付けます。その後、**Save Changes** をクリックします。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-JyAifSGNOn.png)

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-4rFGxkXr1K.png)

## Stripe Webhook の設定

Stripeは、**あなたのStripeアカウント** でイベントが発生するたびにUltimate Multisiteに通知するWebhookイベントを送信します。

**Developers** をクリックし、左メニューから **Webhooks** を選択します。その後、右側で **Add endpoint** をクリックします。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-LmYsdylNdd.png)

**Endpoint URL** が必要です。Ultimate Multisiteは自動的にエンドポイントURLを生成し、**Ultimate Multisite Stripe Gateway** セクションの **Webhook Listener URL** フィールドのすぐ下に表示されます。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-sZrCX9OZaw.png)

**Copy** エンドポイントURLをコピーし、Stripeの **Endpoint URL** フィールドに **paste** します。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-tMlomo8gx1.png)

次に **Event** を選択します。このオプションでは、**Select all events** ボックスにチェックを入れ、**Add events** をクリックするだけです。その後、**Add Endpoint** をクリックして変更を保存します。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-Hv8KzaGMrq.png)

これで完了です。Stripeの支払い統合が完了しました！
