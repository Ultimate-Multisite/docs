---
title: 割引コードの作成
sidebar_position: 19
_i18n_hash: 3c7a42fff1710e14a95a32365f893dc3
---
# 割引コードの作成 (v2)

_**重要な注意: 本記事はUltimate Multisiteバージョン2.xを対象としています。**_

## 割引コードの作成と編集

割引コードを作成または編集するには、**Ultimate Multisite > Discount Codes**に移動します。

![](/img/config/discount-codes-list.png)

そこでは、既に作成した割引コードのリストが表示されます。

**Add Discount** **Code**をクリックして新しいクーポンを作成するか、既存のものをホバーして**Edit**をクリックして編集できます。

![Discount codes list with hover actions](/img/config/discount-codes-list.png)

![Add Discount Code button](/img/config/discount-codes-list.png)

クーポンコードを作成または編集するページにリダイレクトされます。この例では新しいものを作成します。

![Discount code edit page](/img/config/discount-codes-list.png)

ここで利用可能な設定を見てみましょう：

**Enter Discount Code:** これは割引コードの名前です。これは顧客がチェックアウトフォームで入力する必要があるコードではありません。

**Description:** ここでは、このクーポンの用途を簡単に説明できます。

![Discount code name and description fields](/img/config/discount-codes-list.png)

**Coupon code:** ここで、顧客がチェックアウト時に入力する必要があるコードを定義します。

![Coupon code field](/img/config/discount-codes-list.png)

**Discount:** ここで、割引コードの**割合**または**固定金額**を設定できます。

![Discount percentage or fixed amount setting](/img/config/discount-codes-list.png)

**Apply to renewals:** このオプションをオフにすると、割引コードは**最初の支払い**にのみ適用されます。その他の支払いには割引がありません。オンにすると、割引コードは今後のすべての支払いに有効になります。

**Setup fee discount:** このオプションをオフにすると、クーポンコードは注文の**セットアップ料金**に対して割引を与えません。オンにすると、クーポンコードがプランのセットアップ料金に適用する割引（割合または固定金額）を設定できます。

![Apply to renewals and setup fee discount options](/img/config/discount-codes-list.png)

**Active:** このクーポンコードを手動で有効または無効にします。

![Active toggle for discount code](/img/config/discount-codes-list.png)

**Advanced Options** では、以下の設定があります：

**Limit uses:**

  * **Uses:** ここで、割引コードが使用された回数を確認できます。

  * **Max uses:** この設定で、ユーザーが割引コードを使用できる回数を制限します。たとえば、10を設定すると、クーポンは10回しか使用できません。この制限を超えると、クーポンコードは使用できなくなります。

![Limit uses setting with uses and max uses fields](/img/config/discount-codes-list.png)**Start & expiration dates:** Here you will have the option to add a start date and/or an expiration date to your coupon.

**Start & expiration dates:** ここで、クーポンに開始日と/または有効期限を追加できます。

![Start and expiration date fields](/img/config/discount-codes-list.png)

**Limit products:** **Select products**をオンにすると、すべての製品が表示されます。手動で（オン/オフを切り替えて）どの製品がこのクーポンコードを受け入れるかを選択できます。ここでオフにされた製品は、顧客がクーポンコードを使用しようとしても変更が表示されません。

![Limit products selection toggles](/img/config/discount-codes-list.png)

これらのオプションをすべて設定したら、**Save Discount Code**をクリックしてクーポンを保存し、完了です！

![Save Discount Code button](/img/config/discount-codes-list.png)

クーポンはリストに表示され、そこから**edit or delete**をクリックできます。

![Discount code in the list with edit and delete options](/img/config/discount-codes-list.png)

### 

### URLパラメータを使用する：

価格表をカスタマイズしたり、ウェブサイトにクーポンコードページを作成したり、チェックアウトフォームに自動的に割引コードを適用したい場合は、URLパラメータを使用して行うことができます。

まず、プランの共有リンクを取得する必要があります。これを行うには、**Ultimate Multisite > Products**に移動し、プランを選択します。

**Click to Copy Shareable Link**ボタンをクリックします。これにより、この特定のプランへの共有リンクが取得できます。今回の場合、共有リンクは[_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/)_でした。

![Product page with shareable link button](/img/config/products-list.png)

この特定のプランに割引コードを適用するには、URLにパラメータ **?discount_code=XXX** を追加します。ここで **XXX** はクーポンコードです。

この例では、クーポンコード **50OFF** をこの特定の製品に適用します。

この特定のプランに50OFF割引コードを適用したURLは次のようになります：[_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/) _**?discount_code=50OFF**_。

###
