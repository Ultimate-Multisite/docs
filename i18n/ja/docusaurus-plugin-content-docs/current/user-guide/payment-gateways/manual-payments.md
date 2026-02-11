---
title: 手動決済の設定
sidebar_position: 20
_i18n_hash: a780a809c96da21ceb3ec6bb67a016d7
---
# マニュアル決済の設定 (v2)

_**重要な注意: 本記事はUltimate Multisiteバージョン2.xに関するものです。**_

マニュアル決済は、**Stripe**や**PayPal**が利用できない場合に、ユーザーに他の決済方法を提供する手段です。銀行振込や送金、またはユーザーがローカルで利用できるその他の決済方法が該当します。

## マニュアル決済を有効にする方法

マニュアル決済の設定は非常に簡単です。決済ゲートウェイで有効にし、ユーザーが決済を送る方法に関する詳細な指示を入力するだけです。

まず、**Ultimate Multisite > Settings > Payments** に移動します。**Payment Gateways** の下で **Manual** をオンに切り替えると、**Payment Instructions** ボックスが表示されます。

このボックスに、顧客が決済を行うために必要な情報を追加します。例えば、銀行口座情報や決済確認を送るためのメールアドレスなどです。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-U0K40VsARU.png)

設定後、**Save Settings** をクリックするだけで完了です。ユーザーがネットワークに登録すると、購入完了のための指示を受け取る旨のメッセージが表示されます。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-drAYOHh331.png)

また、**Thank You** ページでも決済指示が記載されたメッセージが表示されます。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-Nf6HTYbu2g.png)

## マニュアル決済の確認

マニュアル決済を確認するには、左側のバーにある **Payments** メニューに移動します。そこでネットワーク内のすべての決済とその詳細（**status** を含む）を確認できます。マニュアル決済は手動で変更するまで常に **Pending** 状態になります。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-C3U9LgT2Ev.png)

**reference code** をクリックして決済ページに入ります。このページでは、参照ID、商品、タイムスタンプなど、保留中の決済に関するすべての詳細が確認できます。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-sXfbxcYFs6.png)

右側の列で決済のステータスを変更できます。**Completed** に変更し、**Activate Membership** オプションをオンにすると、顧客のサイトが有効化され、メンバーシップがアクティブになります。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-q5hHRxdhfg.png)
