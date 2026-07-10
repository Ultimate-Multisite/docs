---
title: メンバーシップのキャンセル
sidebar_position: 2
_i18n_hash: a34353ea4630d9815bde4ca7bcfeb95d
---
# メンバーシップのキャンセル（v2） {#canceling-a-membership-v2}

_**重要な注意: この記事は Ultimate Multisite バージョン 2.x を対象としています。**_

顧客側でメンバーシップをキャンセルするのはとても簡単です。

ユーザーがメンバーシップをキャンセルしたい場合は、まず ****Account**** ページにアクセスする必要があります。

そこで、**危険ゾーン** に移動し、**Account を削除** をクリックします。

![Account ページの危険ゾーンと Account を削除ボタン](/img/account-page/danger-zone.png)

確認を求めるモジュールが開きます。**Account 削除を確認** オプションをオンにして、**Account を削除** をクリックします。

![Account 削除確認ダイアログ](/img/account-page/delete-account-confirm.png)

これにより、ユーザーはサイトからログアウトされ、ネットワーク上のメンバーシップがキャンセルされます。同時に、そのサイトもネットワークから削除されます。

![Account 削除後にログアウト](/img/account-page/logged-out-after-delete.png)

![メンバーシップキャンセルの確認](/img/account-page/membership-canceled.png)

**重要:** この操作で顧客がネットワークから除外されるわけではありません。顧客には複数のメンバーシップが紐づいている場合も、メンバーシップがまったく紐づいていない場合もあるためです。

![キャンセル後も顧客はネットワークに存在する](/img/admin/customer-after-cancel.png)

![有効なメンバーシップがない顧客](/img/admin/memberships-customer-empty.png)
