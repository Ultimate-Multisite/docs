---
title: 割引コードの作成
sidebar_position: 19
_i18n_hash: 3c7a42fff1710e14a95a32365f893dc3
---
# 割引コードの作成 (v2)

_**重要な注意: 本記事はUltimate Multisiteバージョン2.xを対象としています。**_

## 割引コードの作成と編集

割引コードを作成または編集するには、**Ultimate Multisite > Discount Codes**に移動します。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-G2iYAraljI.png)

そこでは、既に作成した割引コードのリストが表示されます。

**Add Discount** **Code**をクリックして新しいクーポンを作成するか、既存のものをホバーして**Edit**をクリックして編集できます。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-nl6H0I06Jl.png)

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-3puhU5xCFF.png)

クーポンコードを作成または編集するページにリダイレクトされます。この例では新しいものを作成します。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-9dup6xM4Cx.png)

ここで利用可能な設定を見てみましょう：

**Enter Discount Code:** これは割引コードの名前です。これは顧客がチェックアウトフォームで入力する必要があるコードではありません。

**Description:** ここでは、このクーポンの用途を簡単に説明できます。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-V97PvPqtmK.png)

**Coupon code:** ここで、顧客がチェックアウト時に入力する必要があるコードを定義します。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-En58UdF3b7.png)

**Discount:** ここで、割引コードの**割合**または**固定金額**を設定できます。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-96cicxcs7f.png)

**Apply to renewals:** このオプションをオフにすると、割引コードは**最初の支払い**にのみ適用されます。その他の支払いには割引がありません。オンにすると、割引コードは今後のすべての支払いに有効になります。

**Setup fee discount:** このオプションをオフにすると、クーポンコードは注文の**セットアップ料金**に対して割引を与えません。オンにすると、クーポンコードがプランのセットアップ料金に適用する割引（割合または固定金額）を設定できます。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-zDYmcgHcoq.png)

**Active:** このクーポンコードを手動で有効または無効にします。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-rwNFfGobBB.png)

**Advanced Options** では、以下の設定があります：

**Limit uses:**

  * **Uses:** ここで、割引コードが使用された回数を確認できます。

  * **Max uses:** この設定で、ユーザーが割引コードを使用できる回数を制限します。たとえば、10を設定すると、クーポンは10回しか使用できません。この制限を超えると、クーポンコードは使用できなくなります。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-zx4xudymt2.png)

**Start & expiration dates:** ここで、クーポンに開始日と/または有効期限を追加できます。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-AyTJkzxz9W.png)

**Limit products:** **Select products**をオンにすると、すべての製品が表示されます。手動で（オン/オフを切り替えて）どの製品がこのクーポンコードを受け入れるかを選択できます。ここでオフにされた製品は、顧客がクーポンコードを使用しようとしても変更が表示されません。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-OHK9Bgsaq7.png)

これらのオプションをすべて設定したら、**Save Discount Code**をクリックしてクーポンを保存し、完了です！

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-wAAoviDov8.png)

クーポンはリストに表示され、そこから**edit or delete**をクリックできます。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-ySn575AxqX.png)

### 

### URLパラメータを使用する：

価格表をカスタマイズしたり、ウェブサイトにクーポンコードページを作成したり、チェックアウトフォームに自動的に割引コードを適用したい場合は、URLパラメータを使用して行うことができます。

まず、プランの共有リンクを取得する必要があります。これを行うには、**Ultimate Multisite > Products**に移動し、プランを選択します。

**Click to Copy Shareable Link**ボタンをクリックします。これにより、この特定のプランへの共有リンクが取得できます。今回の場合、共有リンクは[_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/)_でした。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-TecoStCUYi.png)

この特定のプランに割引コードを適用するには、URLにパラメータ **?discount_code=XXX** を追加します。ここで **XXX** はクーポンコードです。

この例では、クーポンコード **50OFF** をこの特定の製品に適用します。

この特定のプランに50OFF割引コードを適用したURLは次のようになります：[_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/) _**?discount_code=50OFF**_。

###
