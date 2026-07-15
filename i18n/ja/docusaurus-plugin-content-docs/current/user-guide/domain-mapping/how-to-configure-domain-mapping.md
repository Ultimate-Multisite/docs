---
title: ドメインマッピングの設定方法
sidebar_position: 6
_i18n_hash: 5e3edfad8e0d51fa677f5c6f40a105e4
---
# ドメインマッピングの設定方法 (v2)

_**重要な注意: この記事は Ultimate Multisite バージョン 2.x を対象としています。**_

プレミアムネットワークの最も強力な機能のひとつは、クライアントが自分のサイトにトップレベルドメインを紐づけられることです。結局、どちらがよりプロらしく見えるでしょうか。[_**joesbikeshop.yournetwork.com**_](http://joesbikeshop.yournetwork.com) それとも [_**joesbikeshop.com**_](http://joesbikeshop.com) でしょうか。そのため Ultimate Multisite では、サードパーティ製プラグインを使わなくても、この機能を標準で提供しています。

## ドメインマッピングとは？ {#whats-domain-mapping}

名前のとおり、ドメインマッピングとは、カスタムドメインへのリクエストを受け取り、そのドメインが紐づけられたネットワーク内の該当サイトへ対応付ける Ultimate Multisite の機能です。

### Ultimate Multisite ネットワークでドメインマッピングを設定する方法 {#how-to-setup-domain-mapping-on-your-ultimate-multisite-network}

ドメインマッピングを動作させるには、いくつかの設定が必要です。ありがたいことに、Ultimate Multisite が手間のかかる作業を自動化するため、要件を簡単に満たせます。

Ultimate Multisite のインストール中、ウィザードは **sunrise.php** を指定フォルダーへ自動的にコピーしてインストールします。**この手順が完了するまで、ウィザードは先へ進ませません**。

<!-- Screenshot unavailable: Ultimate Multisite installation wizard with sunrise.php step -->

つまり、Ultimate Multisite のインストールウィザードがネットワークの設定を完了すれば、すぐにカスタムドメインのマッピングを開始できます。

Ultimate Multisite のドメインマッピングは必須ではありません。WordPress Multisite 標準のドメインマッピング機能、または他のドメインマッピングソリューションを使用する選択肢もあります。

他のドメインマッピングソリューションを使うために Ultimate Multisite のドメインマッピングを無効化する必要がある場合は、**Ultimate Multisite > 設定 > ドメインマッピング** でこの機能を無効化できます。

![管理者リダイレクト、マッピングメッセージ、DNS オプションを表示するドメインマッピング設定ページ](/img/config/domain-mapping-settings.png)

このオプションのすぐ下には、**Force Admin Redirect** オプションもあります。このオプションでは、顧客がカスタムドメインとサブドメインの両方で管理 Dashboard にアクセスできるか、どちらか一方だけにするかを制御できます。

**Force redirect to mapped domain** を選択すると、顧客はカスタムドメインでのみ管理 Dashboard にアクセスできます。

**Force redirect to** **network domain** オプションはその正反対です。顧客がカスタムドメインでサインインしようとしても、サブドメインでのみ Dashboard へのアクセスが許可されます。

そして **Allow access to the admin by both mapped domain domain and network domain** オプションでは、サブドメインとカスタムドメインの両方で管理 Dashboard にアクセスできます。

![3つのリダイレクトオプションを表示して展開された管理者リダイレクトのドロップダウン](/img/config/domain-mapping-redirect-options.png)

カスタムドメインをマッピングする方法は2つあります。ひとつ目は、スーパー管理者としてネットワーク管理 Dashboard からドメイン名をマッピングする方法です。ふたつ目は、サブサイトの管理 Dashboard の Account ページから行う方法です。

ただし、ネットワーク内のいずれかのサブサイトにカスタムドメインをマッピングし始める前に、そのドメイン名の **DNS 設定** が正しく構成されていることを確認する必要があります。

###

### ドメインの DNS 設定が正しく構成されていることを確認する {#making-sure-the-domain-dns-settings-are-properly-configured}

マッピングを機能させるには、マッピングしようとしているドメインがネットワークの IP アドレスを指していることを確認する必要があります。必要なのはネットワークの IP アドレス、つまり Ultimate Multisite がインストールされているドメインの IP アドレスであり、マッピングしたいカスタムドメインの IP アドレスではありません。特定のドメインの IP アドレスを調べるには、たとえば [Site24x7](https://www.site24x7.com/find-ip-address-of-web-site.html) の利用をおすすめします。

ドメインを正しくマッピングするには、**DNS** 設定に、その **IP アドレス** を指す **A RECORD** を追加する必要があります。DNS 管理はドメイン登録事業者によって大きく異なりますが、XXXX をご利用のドメイン登録事業者に置き換えて「 _XXXX で A Record を作成_ 」のように検索すれば、オンラインに多くのチュートリアルがあります（例: 「 _GoDaddy で A Record を作成_ 」）。

うまく動作させるのが難しい場合は、**ドメイン登録事業者のサポートに連絡**してください。この部分について支援してもらえます。

クライアントが自分のドメインをマッピングできるようにする予定なら、この部分の作業はクライアント自身が行う必要があります。A Record を作成できない場合は、登録事業者のサポート窓口を案内してください。

### Super Admin としてカスタムドメイン名をマッピングする {#mapping-custom-domain-name-as-super-admin}

ネットワークでスーパー管理者としてログインしている場合、**Ultimate Multisite > Domains** に移動すると、カスタムドメイン名を簡単に追加および管理できます。

![Ultimate Multisite の Domains 一覧ページ](/img/admin/domains-list.png)

このページでは、上部の **Add Domain** ボタンをクリックできます。するとモーダルウィンドウが表示され、**カスタムドメイン名**、そのカスタムドメイン名を適用したい **サブサイト** を設定して入力し、それを **プライマリドメイン** 名として設定するかどうかを決められます（**1つのサブサイトに複数のドメイン名をマッピング**できる点に注意してください）。

![ドメイン名、サイト選択、プライマリドメイン切り替えを含む Add Domain モーダル](/img/admin/domain-add-modal.png)

すべての情報を入力したら、下部の **Add Existing Domain** ボタンをクリックできます。

これにより、カスタムドメインの DNS 情報を確認して取得する処理が開始されます。ページ下部にはログも表示され、進行中の処理を追跡できます。この処理が完了するまで数分かかる場合があります。

Ultimate Multisite v2.13.0 では、サイト単位のドメインとして扱うべきホスト上に新しいサイトが作成されたとき、内部ドメインレコードも自動で作成されます。ホストがネットワークのプライマリドメインである場合、または **サイトURL** フィールドで設定された共有チェックアウトフォーム用のベースドメインのいずれかである場合は、自動的なマップ済みドメインレコードの作成はスキップされ、その共有ベースドメインを使用するすべてのサイトで引き続き利用できます。

顧客が Domain Seller v1.3.0 以降で新しいドメインを登録すると、Ultimate Multisite は既定で、登録されたドメインを顧客のネットワークサイトに自動でマッピングします。管理者は、プライマリドメインのフラグ、有効化状態、SSL の扱いなどのオプションを調整したい場合を除き、登録成功後に別のマップ済みドメインレコードを追加する必要はなくなりました。

すべてが正しく設定されていれば、**ステージ** またはステータスは **DNS確認中** から **準備完了** に変わるはずです。

<!-- Screenshot unavailable: Domain row showing the Checking DNS stage in the domains list -->

<!-- Screenshot unavailable: Domain row showing the Ready stage with the green status indicator -->

ドメイン名をクリックすると、その中にいくつかのオプションが表示されます。簡単に見てみましょう。

![ステージ、サイト、有効、プライマリ、SSL の切り替えがあるドメイン詳細ページ](/img/admin/domain-edit.png)

**ステージ:** これはドメインが現在どの段階にあるかを示します。ドメインを最初に追加したときは、おそらく **DNS確認中** ステージになります。この処理では DNS エントリーを確認し、それらが正しいことを検証します。その後、ドメインは **SSL確認中** ステージに移ります。Ultimate Multisite はドメインに SSL があるかどうかを確認し、ドメインを **準備完了** または **準備完了（SSLなし）** に分類します。

**サイト:** このドメインに関連付けられているサブドメインです。マップ済みドメインには、この特定のサイトのコンテンツが表示されます。

**有効:** このオプションをオンまたはオフに切り替えて、ドメインを有効化または無効化できます。

**プライマリドメインですか?:** 顧客は各サイトに対して複数のマップ済みドメインを持つことができます。この特定のサイトのプライマリドメインにするかどうかを選択するには、このオプションを使用します。

**安全ですか?:** Ultimate Multisite はドメインを有効にする前に SSL 証明書があるかどうかを確認しますが、SSL 証明書ありまたはなしでドメインを読み込むよう手動で選択できます。Webサイトに SSL 証明書がない状態で SSL を強制して読み込もうとすると、エラーが発生する可能性があることに注意してください。

### Subsite ユーザーとしてカスタムドメイン名をマッピングする {#mapping-custom-domain-name-as-subsite-user}

Subsite の管理者も、自分の Subsite 管理画面からカスタムドメイン名をマッピングできます。

まず、**ドメインマッピング** 設定でこのオプションを有効にしていることを確認する必要があります。下のスクリーンショットを参照してください。

<!-- Screenshot unavailable: Domain mapping settings allowing subsite users to map domains via Customer DNS Management toggle -->

このオプションは、**プラン** レベル、または **Ultimate Multisite > 製品** の製品オプションでも設定または構成できます。

![製品編集ページのカスタムドメインセクション](/img/config/product-custom-domains.png)

これらのオプションのいずれかが有効で、Subsite ユーザーがカスタムドメイン名をマッピングできる場合、Subsite ユーザーには **Account** ページの下に **ドメイン** というメタボックスが表示されるはずです。

<!-- Screenshot unavailable: Domains metabox on the subsite Account page with Add Domain button -->

ユーザーが **ドメインを追加** ボタンをクリックすると、いくつかの手順が記載されたモーダルウィンドウが表示されます。

<!-- Screenshot unavailable: Add Domain modal showing DNS A-record instructions for subsite users -->

その後、ユーザーは **次のステップ** をクリックして、カスタムドメイン名の追加に進めます。また、これをプライマリドメインにするかどうかも選択できます。

<!-- Screenshot unavailable: Add Domain form with custom domain name field and primary domain toggle -->

<!-- Screenshot unavailable: Add Domain confirmation step that triggers DNS verification -->

**ドメインを追加** をクリックすると、カスタムドメインの DNS 情報を検証して取得する処理が開始されます。

### ドメイン同期について {#about-domain-syncing}

ドメイン同期とは、Ultimate Multisite がカスタムドメイン名をアドオンドメインとしてホスティングアカウントに追加し、**ドメインマッピングが機能するようにする** 処理です。

ホスティングプロバイダーが Ultimate Multisite のドメインマッピング機能と連携している場合、ドメイン同期は自動で行われます。現在、対応しているホスティングプロバイダーは _Runcloud、Closte、WP Engine、Gridpane、WPMU Dev、Cloudways、_ および _Cpanel_ です。

ホストプロバイダー連携が有効な場合、Ultimate Multisite は新しく作成されたサイトに対して、プロバイダー側の DNS またはサブドメイン作成タスクをキューに追加することもできます。そのタスクを受け取る連携がない場合は、何もしないキュー項目を避けるため、バックグラウンドジョブはスキップされます。マップ済みドメインの DNS と SSL の確認は、通常のドメインステージ処理を通じて引き続き実行されます。

この連携は、Ultimate Multisite 設定の **連携** タブで有効化する必要があります。

![ホスティングプロバイダーを表示している Ultimate Multisite 設定の連携タブ](/img/config/integrations-tab.png)

<!-- Screenshot unavailable: Hosting provider Configuration links on the Integrations settings tab -->

_ホスティングプロバイダーが上記のいずれにも該当しない場合は、**ドメイン名をホスティングアカウントに手動で同期または追加する必要があります**。_
