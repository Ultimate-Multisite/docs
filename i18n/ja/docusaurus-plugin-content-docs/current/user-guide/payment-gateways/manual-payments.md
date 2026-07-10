---
title: 手動支払いの設定
sidebar_position: 20
_i18n_hash: 98210a45c3d3af7368f60d7593235163
---
# 手動支払いの設定（v2） {#setting-up-manual-payments-v2}

_**重要な注意: この記事は Ultimate Multisite バージョン 2.x を対象としています。**_

手動支払いは、ユーザーが **Stripe** または **PayPal** を利用できない場合に、他の支払い方法を提供するための方法です。電信送金、銀行振込、またはユーザーの地域で利用できるその他の支払い方法を利用できます。

## 手動支払いを有効にする方法 {#how-to-enable-manual-payments}

手動支払いの設定はとても簡単です。支払いゲートウェイで有効にし、ユーザーが支払いを送る方法について詳しい手順を入力するだけです。

まず、**Ultimate Multisite > Settings > Payments** に移動します。**Payment Gateways** の下で、**Manual** をオンに切り替えます。すると **Payment Instructions** ボックスが表示されます。

このボックスに、顧客が支払いを行うために必要な情報を追加します。たとえば、銀行口座情報や、顧客が支払い確認を送信するためのメールアドレスを記載できます。

![Payment Instructions テキストエリア付きの手動支払いゲートウェイ切り替え](/img/config/manual-gateway-expanded.png)

手動ゲートウェイ設定画面は次のとおりです。

![手動ゲートウェイ設定](/img/config/manual-gateway-settings.png)

設定後、**Save Settings** をクリックすれば完了です。ユーザーがネットワークに登録すると、購入を完了するための手順を受け取ることを知らせるメッセージが表示されます。

![ユーザーが支払い手順を受け取ることを伝える登録確認メッセージ](/img/frontend/registration-manual-notice.png)

また、**Thank You** ページにも、支払い手順を含むメッセージが表示されます。

<!-- Screenshot unavailable: Thank You page showing payment instructions after checkout -->

## 手動支払いを確認する {#confirming-manual-payments}

手動支払いを確認するには、左側のバーにある **Payments** メニューに移動します。ここでは、ネットワーク上のすべての支払いとその詳細を確認できます。**status** も含まれます。手動支払いは、手動で変更するまで常に **Pending** ステータスになります。

![保留中の手動支払いを表示する支払い一覧](/img/admin/payments-list.png)

**reference code** をクリックして支払いページに入ります。このページには、参照 ID、製品、タイムスタンプなど、保留中の支払いに関するすべての詳細があります。

![参照コード、製品、合計を表示する支払い詳細ページ](/img/admin/payment-edit.png)

右側の列で、支払いのステータスを変更できます。これを **Completed** に変更し、**Activate Membership** オプションをオンに切り替えると、顧客のサイトが有効になり、メンバーシップも有効になります。

![Status が Completed に設定され、Activate Membership が切り替えられた支払い編集ページ](/img/admin/payment-activate-membership.png)
