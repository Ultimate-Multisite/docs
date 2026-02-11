---
title: クライアントアカウントページ
sidebar_position: 14
_i18n_hash: 92f8a44adfaf871b0a881fbc76bc0084
---
# あなたのクライアントのアカウントページ (v2)

_**重要な注意: 本記事はUltimate Multisiteバージョン2.xを対象としています。**_

顧客がネットワーク上でプランに加入すると、ウェブサイトとそのダッシュボードにアクセスでき、支払い、メンバーシップ、ドメイン、プラン制限などに関する重要な情報が表示されます。

このチュートリアルでは、顧客のアカウントページを案内し、顧客がその中で何を見て何を行えるかを確認します。

## アカウントページ

アカウントページは、顧客のダッシュボード内で **Account** をクリックすることでアクセスできます。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-LrGNKCDc8R.png)

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-FTDgqcwaO0.png)

顧客がクリックすると、メンバーシップ、請求先住所、請求書、ドメイン、サイト制限の概要が表示され、さらに **Site Template** を変更できるようになります（ネットワークで許可されている場合）。

彼らはまた、メンバーシップを別のプランに変更したり、提供している別のパッケージやサービスを購入したりすることもできます。各セクションを個別に見ていきましょう。

### あなたのメンバーシップ概要

顧客のウェブサイト名のすぐ下にある最初のブロックには、現在のプランとそれに購入されたサービス/パッケージの概要が表示されます。このブロックには、メンバーシップ番号、初期支払額、プランおよびサービス/パッケージの費用、そしてこのメンバーシップに対して課金された回数も表示されます。また、メンバーシップが **Active**、**Expired**、**Canceled** のいずれかであるかも確認できます。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-XNTPsXaqzp.png)

このブロックのすぐ下に、顧客は **About This Site** と **Site Limits** のブロックを見ることができます。これらのブロックには、プランに付随するすべての制限（ディスク容量、投稿数、ページ数、訪問数など）が表示されます。これらの制限は、**Ultimate Multisite > Products** の各プランページで設定できます。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-6kVmMDoiCU.png)

**Your Membership** の右側にある **Change** をクリックすると、利用可能なすべてのプランとパッケージ/サービスが表示されます。別のプランを選択すると、そのプランの制限が現在のメンバーシップの制限に代わって適用されます（ダウングレードでもアップグレードでも関係ありません）。

現在のメンバーシップに対して、ディスク容量や訪問数などのパッケージやサービスを購入する場合、メンバーシップ自体は変更されず、新しいパッケージだけが追加されます。

このメンバーシップ変更ページではクーポンコードを追加できません。顧客が最初のメンバーシップ購入時にクーポンコードを使用した場合、そのコードは新しいメンバーシップにも適用されます。

### 請求先住所の更新

アカウントページで、顧客は請求先住所を更新できます。_Billing Address_ の横にある **Update** をクリックするだけです。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-GLQ21kppU2.png)

新しいウィンドウが表示され、顧客は新しい住所を入力し、_Save Changes_ をクリックするだけです。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-Z2nY05cYvD.png)

### サイトテンプレートの変更

顧客がサイトテンプレートを変更できるようにするには、**Ultimate Multisite > Settings > Sites** に移動し、**Allow Template Switching** オプションを有効にします。

さらに、**Ultimate Multisite > Products** でプランを選択し、**Site Templates** タブに移動します。**Allow Site Templates** オプションが有効になっていること、そして **Site Template Selection Mode** で **Choose Available Site Templates** が選択されていることを確認してください。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-rjixD7iShD.png)

ウェブサイト上で利用可能なすべてのサイトテンプレートが表示されます。このプランに加入している顧客に利用可能にしたいテンプレートと、利用不可にしたいテンプレートを選択してください。この設定はチェックアウトフォームにも影響するため、**Not Available** と選択されたテンプレートは、このプランの登録ページに表示されません。

これで、顧客はアカウントページ内で **Change Site Template** をクリックできるようになります。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-5pdvAuh6h3.png)  
このプランに利用可能なすべてのサイトテンプレートのリストが顧客に表示されます。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-bQSA663xNo.png)

変更したいテンプレートを選択した後、変更を確認するよう求められます。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-6azvPydgAU.png)

確認をオンにして **Process Switch** をクリックすると、新しいサイトテンプレートが顧客のウェブサイトで使用されます。

### カスタムドメインの追加

顧客はアカウントページでこのプランにカスタムドメインを追加するオプションも持っています。カスタムドメインを使用できるようにするには、**Ultimate Multisite > Settings > Domain Mapping** に移動します。

**Enable Domain Mapping** オプションを有効にします。これにより、顧客はネットワークレベルでカスタムドメインを使用できるようになります。

また、製品単位でドメインマッピングが有効になっているかも確認してください。製品ごとにカスタムドメインの使用を制限できるためです。

**Ultimate Multisite > Products** に移動し、希望するプランを選択して **Custom Domains** タブに移動します。**Allow Custom Domains** オプションを有効にします。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-J7mrCTfet6.png)

これにより、この特定のプランに加入しているすべての顧客がカスタムドメインを使用できるようになります。次に、アカウントページで顧客は **Add Domain** をクリックしてカスタムドメインを追加できます。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-0mbLgC86SG.png)

最初に開くウィンドウには、顧客にカスタムドメインをネットワーク上で機能させるためにDNSレコードを更新する方法を説明するメッセージが表示されます。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-emhM26Abhn.png)

このメッセージは、**Ultimate Multisite > Settings > Domain Mapping > Add New Domain Instructions** で編集できます（あなたが編集）。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-6ZjI8Fk6Gw.png)

**Next Step** をクリックすると、顧客はカスタムドメイン名を追加し、そのカスタムドメインをプライマリにするかどうかを選択できます。顧客はウェブサイトに複数のカスタムドメインを使用できるため、どれをプライマリにするか選択できます。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-pSzZowjc2a.png)

**Add Domain** をクリックすると、ドメインが顧客のアカウントに追加されます。次に必要なのは、ドメインレジストラでこのカスタムドメインのDNSレコードを変更することです。

### パスワードの変更

アカウントダッシュボード内で、顧客は **Change Password** をクリックしてパスワードを変更できます。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-sihWaIk4B8.png)

新しいウィンドウが表示され、顧客は現在のパスワードを入力し、次に使用したい新しいパスワードを入力する必要があります。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-5zCgtcHfgB.png)

### 危険ゾーン

**Danger Zone** セクションには、**Delete Site** と **Delete Account** の2つのオプションがあります。これらは両方とも危険ゾーンに表示されます。なぜなら、これらの操作は不可逆的であるためです。顧客がウェブサイトまたはアカウントを削除すると、復元できません。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-FMNX249rFi.png)

顧客がこれらの2つのオプションのいずれかをクリックすると、ウェブサイトまたはアカウントを削除するオプションをオンにする必要があるウィンドウが表示され、この操作は元に戻せないことが警告されます。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-MRI6taFdJK.png)

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-itpv48GPgY.png)

ウェブサイトを削除した場合、アカウントとメンバーシップはそのまま残ります。ただし、ウェブサイト上のすべてのコンテンツは失われます。アカウントを削除した場合、すべてのウェブサイト、メンバーシップ、およびアカウントに関する情報が失われます。
