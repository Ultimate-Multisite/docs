---
title: 登録フォームのカスタマイズ
sidebar_position: 17
_i18n_hash: f060f881656e229e05b8d6f83a85bd84
---
# 登録フォームのカスタマイズ

WordPressプラットフォーム上で構築された他のすべてのSaaSと差別化するために、Ultimate Multisiteは**Checkout Forms**機能を使用して登録ページとログインページをカスタマイズできます。

Checkout Formsは、新規顧客の獲得を試みる際にさまざまなアプローチを試すための簡単で柔軟な方法ですが、主にパーソナライズされた登録フォームを作成するために使用されます。この記事では、その方法を紹介します。

## ログインと登録ページ:

Ultimate Multisiteをインストールすると、メインサイトにカスタムログインと登録ページが自動的に作成されます。これらのデフォルトページは、**Ultimate Multisite > Settings > Login & Registration**ページに移動していつでも変更できます。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-K3a5Ol4prD.png)

**Login & Registration**ページでカスタマイズできる各オプションを見てみましょう：

- **Enable registration:** このオプションは、ネットワーク上の登録を有効または無効にします。オフにすると、顧客は登録して製品にサブスクライブできません。

- **Enable email verification:** このオプションをオンにすると、無料プランまたはトライアル期間付きの有料プランにサブスクライブした顧客は確認メールを受け取り、ウェブサイトが作成されるために確認リンクをクリックする必要があります。

- **Default registration page:** これは登録のデフォルトページです。このページはウェブサイトに公開され、登録フォーム（チェックアウトフォームとも呼ばれます）を持っている必要があります。クライアントはこのフォームで製品にサブスクライブします。必要に応じて任意の数の登録ページとチェックアウトフォームを作成できますが、登録ページにチェックアウトフォームのショートコードを配置しないと表示されません。

- **Use custom login page:** このオプションにより、デフォルトのwp-login.phpページではなくカスタマイズされたログインページを使用できます。オンにすると、**Default login page**オプション（その下）でログインに使用するページを選択できます。

- **Obfuscate the original login url (wp-login.php)** : 元のログインURLを隠したい場合は、このオプションをオンにします。ブルートフォース攻撃を防ぐのに有効です。オンにすると、Ultimate Multisiteは元のwp-login.phpリンクにアクセスしようとしたユーザーに404エラーを表示します。

- **Force synchronous site publication:** ネットワーク上で顧客が製品にサブスクライブすると、新しい保留中のサイトを実際のネットワークサイトに変換する必要があります。公開プロセスはジョブキューを介して非同期で行われます。このオプションを有効にすると、サインアップと同じリクエストで公開が行われます。

次に、ログインと登録プロセスにまだ関連する他のオプションを見てみましょう。これらは同じ**Login & registration**ページの**Other options**のすぐ下にあります：

- **Default role:** これはサインアッププロセス後に顧客がウェブサイトで持つロールです。

- **Add users to the main site as well:** このオプションを有効にすると、サインアッププロセス後にユーザーをネットワークのメインサイトにも追加します。このオプションを有効にすると、これらのユーザーの**default role**を設定するオプションもその下に表示されます。

- **Enable multiple accounts:** 同じメールアドレスでネットワーク内の異なるサイトにアカウントを持つことを許可します。オフにすると、顧客は同じメールアドレスでネットワーク上の他のウェブサイトにアカウントを作成できません。

これで、カスタマイズできるログインと登録に関連するすべてのオプションです！編集が完了したら設定を保存するのを忘れないでください。

## 複数の登録フォームを使用する:

Ultimate Multisite 2.0は、任意の数のフォームを作成できるチェックアウトフォームエディタを提供します。さまざまなフィールドや提供される製品などを設定できます。

ログインページと登録ページの両方にはショートコードが埋め込まれています：ログインページでは**[wu_login_form]**、登録ページでは**[wu_checkout]**です。チェックアウトフォームを作成または構築して、登録ページをさらにカスタマイズできます。

この機能にアクセスするには、左側のサイドバーで**Checkout Forms**メニューに移動します。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-vvxvSRGAfu.png)

このページでは、作成済みのすべてのチェックアウトフォームが表示されます。

新しいフォームを作成するには、ページ上部の**Add Checkout Form**をクリックします。

開始点として、シングルステップ、マルチステップ、または空白の3つのオプションから選択できます。次に、**Go to the Editor**をクリックします。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-OVx7AlxoX5.png)

または、既存のフォームを編集または複製するには、名前の下にあるオプションをクリックします。そこで、フォームのショートコードをコピーするオプションやフォームを削除するオプションも見つかります。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-LdsdAu67WF.png)

シングルステップまたはマルチステップを選択すると、チェックアウトフォームはすでに基本ステップで事前に入力されています。必要に応じて追加ステップを追加できます。

### チェックアウトフォームの編集:

前述のように、さまざまな目的のチェックアウトフォームを作成できます。この例では、登録フォームを作成します。

チェックアウトフォームエディタに移動したら、フォームに名前（内部参照のみで使用）とスラッグ（例：ショートコード作成に使用）を付けます。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-RvbtUn4r3w.png)

フォームはステップとフィールドで構成されます。**Add New Checkout Step**をクリックして新しいステップを追加できます。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-9Wgpw8DTj9.png)

モーダルウィンドウの最初のタブで、フォームステップの内容を入力します。ID、名前、説明を付けます。これらは主に内部で使用されます。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-lr6RKlgll1.png)

次に、ステップの表示設定を行います。**Always show**、**Only show for logged in users**、**Only show for guests**のいずれかを選択できます。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-0Q6LxP9E90.png)

最後に、ステップスタイルを設定します。これらはオプションのフィールドです。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-WmBuHXYH7N.png)

次に、最初のステップにフィールドを追加します。**Add New Field**をクリックし、希望するセクションタイプを選択します。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-vM8n8QuTzk.png)![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-HkNUp6cWRG.png)

各フィールドには入力すべきパラメータが異なります。最初の入力では**Username**フィールドを選択します。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-PFaP6RufZU.png)![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-U6Mm10qIeF.png)![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-Lr1mEi1DlH.png)

必要に応じて任意の数のステップとフィールドを追加できます。顧客が選択できるように製品を表示するには、Pricing Tableフィールドを使用します。クライアントにテンプレートを選択させたい場合は、Template Selectionフィールドを追加します。その他も同様です。

**Note:** チェックアウトフォームを作成した後に製品を作成する場合は、Pricing tableセクションに製品を追加する必要があります。追加しないと、顧客に登録ページで製品が表示されません。

**Note 2:** username、email、password、site title、site URL、order summary、payment、submit buttonは、チェックアウトフォームを作成する際に必須フィールドです。

チェックアウトフォームを作成中は、プレビューボタンを使用してクライアントがフォームをどのように見るか確認できます。既存ユーザーとして、または訪問者として表示を切り替えることもできます。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-3zPxZNqzkG.png)![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-YXZp7n5Nuw.png)

最後に、**Advanced Options**で**Thank You**ページのメッセージを設定したり、コンバージョン追跡用のスニペットを追加したり、チェックアウトフォームにカスタムCSSを追加したり、特定の国に制限したりできます。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-TVQ9EUbGJ6.png)

右側の列でこのオプションを切り替えてチェックアウトフォームを手動で有効または無効にしたり、フォームを完全に削除したりできます。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-N5wdel1IIp.png)

チェックアウトフォームを保存するのを忘れないでください！

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-rJPV89yQZt.png)

フォームのショートコードを取得するには、**Generate Shortcode**をクリックし、モーダルウィンドウに表示された結果をコピーします。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-RTJclNTnJZ.png)

**Note:** このショートコードを登録ページに追加して、チェックアウトフォームを表示させる必要があります。

## URLパラメータで製品とテンプレートを事前選択する:

製品のカスタマイズされた価格表を作成し、チェックアウトフォームで顧客が価格表またはテンプレートページから選択した製品またはテンプレートを事前に選択したい場合は、URLパラメータを使用できます。

### **プランの場合:**

**Ultimate Multisite > Products > Select a plan**に移動します。ページ上部に**Click to copy Shareable Link**ボタンが表示されます。これは、チェックアウトフォームでこの特定のプランを事前に選択するために使用できるリンクです。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-bUyOlBEfNj.png)

この共有リンクは**Plans**にのみ有効です。パッケージやサービスには共有リンクを使用できません。

### テンプレートの場合:

チェックアウトフォームでサイトテンプレートを事前に選択したい場合は、登録ページURLに**?template_id=X**パラメータを使用できます。Xは**site template ID number**に置き換える必要があります。この番号を取得するには、**Ultimate Multisite > Sites**に移動します。

使用したいサイトテンプレートのすぐ下にある**Manage**をクリックします。SITE ID番号が表示されます。この番号を使用して、チェックアウトフォームでこの特定のサイトテンプレートを事前に選択します。ここではURLパラメータは**?template_id=2**です。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-JEgVAVNYMu.png)

ネットワークサイトが[**www.mynetwork.com**](http://www.mynetwork.com)で、登録ページ（チェックアウトフォーム付き）が**/register**ページにあるとします。このサイトテンプレートが事前に選択された完全なURLは、[**www.mynetwork.com/register/?template**](http://www.mynetwork.com/register/?template)**_id=2**のようになります。

さらに、製品とテンプレートの両方をチェックアウトフォームで事前に選択したい場合は、プランの共有リンクをコピーし、末尾にテンプレートパラメータを貼り付けます。これにより、[**www.mynetwork.com/register/premium-plan/?template**](http://www.mynetwork.com/register/premium-plan/?template)**_id=2**のようになります。
