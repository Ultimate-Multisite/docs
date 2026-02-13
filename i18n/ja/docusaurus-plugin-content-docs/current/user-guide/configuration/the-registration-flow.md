---
title: 登録フロー
sidebar_position: 3
_i18n_hash: 3e38d2f50683a422650956e5a3b0dff9
---
# 登録フロー (v2)

_**重要な注意: 本記事はUltimate Multisiteバージョン2.xを対象としています。**_

ユーザーはネットワークに登録する方法を複数持っています。登録フォームを使うか、事前に選択されたプランへの共有リンクを使うことができます。ここでは、利用可能なパスを使って顧客がネットワークに登録する方法と、登録後に何が起こるかを紹介します。

## 登録フォームを使用する場合：

これは標準的な登録プロセスです。**checkout form** を備えた登録ページを作成し、そこが顧客がネットワークに登録し、プランに加入する場所になります。必要に応じて、異なる登録フォームを持つ複数の登録ページを作成できます。

登録のデフォルトページは [_**yourdomain.com/register**_](http://yourdomain.com/register) ですが、**Ultimate Multisite > Settings > Login & Registration > Default Registration Page** でいつでも変更できます。

ユーザーが登録ページに到達した後（通常は **Sign in** または **Buy now** ボタンをクリックした時）、そこで登録フォームを見ることになります。

![Registration form displayed on the registration page](/img/config/checkout-forms-list.png)

必要なのは、必須項目（メール、ユーザー名、パスワードなど）をすべて入力し、プランの料金を支払うか、無料プランや試用期間付きの有料プランで支払い情報なしに登録する場合はメールアドレスを確認することです。

「Thank you」ページで、メールアドレスの確認が必要か、またはウェブサイトがすでに有効化されているかを知らせるメッセージが表示されます。

![Thank You page after registration](/img/config/checkout-form-editor.png)

メールアドレスの確認が必要な場合、メール受信箱にアクセスして確認リンクをクリックする必要があります。メールアドレスが確認されないと、ウェブサイトは有効化されません。

有料プランに登録した場合や、ネットワークでメール確認が必須でない場合、チェックアウト直後にウェブサイトが有効化され、ダッシュボードにサインインするリンクが表示されます。

![Site activated with link to sign in to dashboard](/img/config/checkout-form-editor.png)

## 共有リンクを使用する場合：

共有リンクを使った登録プロセスは基本的に登録フォームと同じですが、唯一の違いは共有リンクを使用すると、顧客がチェックアウトフォームで商品やウェブサイトテンプレートを事前に選択済み（URLパラメータでの事前選択に関するセクション参照）や、クーポンコードが追加されている場合があることです。

登録プロセスは同じです：名前、ユーザー名、メールアドレス、ウェブサイト名とタイトルなどを入力する必要がありますが、プランやサイトテンプレートはすでに事前に選択されています。

### 手動決済を使用した登録：

PayPal、Stripe、またはUltimate Multisiteやそのアドオン統合で提供される他の決済ゲートウェイを使用したくない場合、顧客に手動決済を利用できます。この方法で、ネットワークに登録後に好みの決済プロセッサで支払うための請求書を生成できます。

登録プロセスは上記と同じですが、登録ページで顧客は支払いを完了するための追加指示が記載されたメールを受け取るというメッセージを見ることになります。

![Manual payment message during registration](/img/config/settings-payment-gateways.png)

登録が完了した後、設定した支払い指示が表示され（そしてメールでも受け取ります）。

![Payment instructions shown after registration](/img/config/settings-payment-gateways.png)

支払い指示は **Ultimate Multisite > Settings > Payments** で **Manual** 支払いオプションを有効にした後、変更できます：

![Manual payment toggle with payment instructions field](/img/config/settings-payment-gateways.png)

顧客が手動決済を完了し確認を送信した後、**手動で支払いを確認**して顧客のメンバーシップとウェブサイトを有効化する必要があります。

これを行うには、**Ultimate Multisite > Payments** に移動し、顧客の支払いを見つけます。まだ **Pending** ステータスが表示されているはずです。

![Payments list with pending manual payment](/img/admin/payments-list.png)

支払い番号をクリックすると、ステータスを **Completed** に変更できます。

![Payment details page](/img/admin/payments-list.png)

![Changing payment status to Completed](/img/admin/payments-list.png)

ステータスを **Completed** に変更した後、**Activate membership** メッセージが表示されます。このオプションを **on** に切り替えて、顧客に関連付けられたメンバーシップとウェブサイトを有効化します。次に、**Save Payment** をクリックします。

![Activate membership toggle and Save Payment button](/img/admin/payments-list.png)

顧客はダッシュボードと購読したすべての機能にアクセスできるようになります。
