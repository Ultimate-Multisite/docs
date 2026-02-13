---
title: プランのダウングレード
sidebar_position: 7
_i18n_hash: 6513875b161bca42a0dc0612f40b0ce5
---
# プランのダウングレード (v2)

_**重要な注意: 本記事はUltimate Multisiteバージョン2.xに関するものです。**_

プランまたはサブスクリプションのダウングレードは、クライアントが予算が限られている、またはサブサイトを運営するために多くのリソースが不要だと判断した場合に行う一般的な操作です。

## プランのダウングレード方法

クライアントはサブサイトの管理ダッシュボードにログインし、アカウントページの **Change** をクリックすることで、いつでもプランをダウングレードできます。

![Account page with Change button under membership](/img/admin/memberships-list.png)

**Change** ボタンをクリックすると、ユーザー/クライアントはチェックアウトページにリダイレクトされ、サブスクリプションを変更したいプランを選択できます。

![Checkout page showing plan options for downgrade](/img/admin/memberships-list.png)

この例では、プランを **Premium** から **Free** にダウングレードしています。

進行するには、ユーザーは **Complete Checkout** ボタンをクリックするだけです。すると、会員の変更が保留中である旨のメッセージとともにアカウントページに戻ります。変更は顧客の **next billing cycle** で有効になります。

![Account page showing pending membership change message](/img/admin/memberships-list.png)

### ユーザーがプランをダウングレードしたときに起こること

プランをダウングレードしても、ユーザーのサブサイトにある既存の設定は変更されないことに注意してください。

サイトテンプレートを変更するとサブサイトが完全に消去・リセットされるため、プランのダウングレードは自動的にサイトテンプレートを変更しません。これは不要なデータ損失を防ぐためです。したがって、ディスク容量、テーマ、プラグインなどは投稿を除き、変更されません。

各プランで設定した制限やクォータが主な懸念事項であることは理解していますが、設定を削除または変更した場合にユーザーのサブサイトに与える損害を考慮する必要があります。

プランで設定された制限を超える投稿については、3つのオプションがあります: **Keep the posts as it** *,* **Move the posts to trash** *,* or **Move the posts to draft** *.* これらは Ultimate Multisite の設定で構成できます。

![Post limit exceeded options in Ultimate Multisite settings](/img/config/settings-sites.png)

### 支払いに関して起こること

バージョン2.0では、比例計算に関して支払いの調整は不要になりました。

これは、システムが既存の会員の **billing cycle** が完了するまで待ち、新しいプラン/会員が有効になるためです。新しい会員の新しい請求額は自動的に適用され、次の請求サイクルで請求されます。
