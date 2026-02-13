---
title: プランのアップグレード
sidebar_position: 11
_i18n_hash: b0c02a1c1b12946cb507e8486e0d74e3
---
# プランのアップグレード (v2)

_**重要なお知らせ：この記事はUltimate Multisiteバージョン2.xに関するものです。**_

お客様はいつでもプランをアップグレードできます。別のプランにアップグレードするか、ネットワークで提供している追加サービスやパッケージを購入できます。

このチュートリアルでは、プランのアップグレード方法とアップグレード後に何が起こるかを説明します。

プランをアップグレードするには、お客様はダッシュボードにアクセスし、**Account** ページへ移動してください。

![Customer dashboard with Account page link](/img/admin/memberships-list.png)

Account ページでは、現在のメンバーシップとそれに関連付けられたプランが表示されます。別のプランにアップグレードするには、**Your Membership** セクションの右上にある **Change** をクリックしてください。

![Your Membership section with Change button](/img/admin/memberships-list.png)

すべての利用可能なプランが表示されるチェックアウトフォームにリダイレクトされます。

また、**現在のプランで利用可能なサービスとパッケージ** も確認できます。プランをアップグレードせずに、特定のサービスやパッケージ（例：無制限の訪問数やディスク容量）を購入したい場合に便利です。

![Checkout form showing available plans and packages](/img/admin/memberships-list.png)

購入したい商品を選択すると、既存のクレジットを除いた現在の支払額と、次回請求日までに請求される金額が表示されます。

通常、商品が別のプランで、支払いがメンバーシップ料金の間に行われる場合、最初のプランで支払った金額のクレジットが付与されます。

![Upgrade payment summary with credit and next billing amount](/img/admin/memberships-list.png)

現在のサブスクリプションに変更がないプランやパッケージを選択した場合、変更がない旨のメッセージが表示されます。

![Message when selected plan does not change the subscription](/img/admin/memberships-list.png)

チェックアウトが完了すると、新しい商品が顧客のアカウントに追加され、新しい商品の制限や機能（訪問数、ディスク容量、投稿数など）が即座に適用されます。

## 

## 

## アップグレードとダウングレードのパス

各商品には **Up & Downgrades** タブがあります。そのタブの最初のオプションは **Plan Group** というフィールドです。

**Plan groups** は、特定のプランが同じ「ファミリー」に属していることをUltimate Multisiteに知らせ、アップグレード/ダウングレードのパスオプションを構築するために使用されます。

![Up and Downgrades tab with Plan Group field](/img/config/product-upgrades.png)

例えば、**Free plan**、**Basic Plan**、**Premium Plan** が利用可能です。**Free Plan** に登録しているユーザーが **Premium Plan** のみへアップグレードできるようにし、**Basic Plan** をアップグレードオプションとして表示させたくない場合、Free と Premium の両方に同じプラングループ名を割り当てるだけです（以下のスクリーンショット参照）。

![Free Plan with High End plan group assigned](/img/config/product-upgrades.png)

![Premium Plan with High End plan group assigned](/img/config/product-upgrades.png)

これにより、ネットワーク内に **High End** というプランファミリーがあることをUltimate Multisiteに伝えます。アップグレードやダウングレードを提供する際、同じファミリーのプランのみがユーザーにオプションとして提示されます。
