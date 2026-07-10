---
title: 登録フォームのカスタマイズ
sidebar_position: 17
_i18n_hash: 3dada0e900a1f46d950e1815ae8f5085
---
# 登録フォームのカスタマイズ {#customizing-your-registration-form}

WordPress プラットフォーム上に構築された他のすべての SaaS と差別化したネットワークに見せるため、Ultimate Multisite では **Checkout Forms** 機能を使って登録ページとログインページをカスタマイズできます。

新規顧客の獲得率を高めるためにさまざまな方法を試せる、簡単で柔軟な機能ですが、主な用途はパーソナライズされた登録フォームの作成です。この記事では、その方法を説明します。

## ログインページと登録ページ: {#login-and-registration-pages}

Ultimate Multisite をインストールすると、メインサイトにカスタムログインページと登録ページが自動的に作成されます。これらのデフォルトページは、**Ultimate Multisite > Settings > Login & Registration** ページからいつでも変更できます。

![Login and Registration 設定ページ](/img/config/settings-general.png)

ログインと登録の設定ページ全体は次のとおりです。

![Login and Registration 設定の全体ページ](/img/config/settings-login-registration-full.png)

**Login & Registration** ページでカスタマイズできる各オプションを見ていきましょう。

  * **登録を有効化:** このオプションで、ネットワーク上の登録を有効または無効にできます。オフにすると、顧客は登録できず、商品を購読できません。

  * **メール認証を有効化:** このオプションをオンにすると、無料プランまたは試用期間付きの有料プランを購読した顧客に認証メールが送信され、サイトを作成するには認証リンクをクリックする必要があります。

  * **デフォルト登録ページ:** 登録用のデフォルトページです。このページはサイト上で公開されており、登録フォーム（checkout form とも呼ばれます）を含んでいる必要があります。ここで顧客が商品を購読します。登録ページや checkout form は必要なだけ作成できますが、登録ページに checkout form のショートコードを配置する必要があります。配置しないと表示されません。

  * **カスタムログインページを使用:** デフォルトの wp-login.php ページ以外の、カスタマイズされたログインページを使用できます。このオプションをオンにすると、すぐ下の **Default login page** オプションで、ログインに使用するページを選択できます。

  * **元のログイン URL（wp-login.php）を難読化** : 元のログイン URL を隠したい場合は、このオプションをオンにできます。ブルートフォース攻撃を防ぐのに役立ちます。このオプションを有効にすると、ユーザーが元の wp-login.php リンクにアクセスしようとしたときに、Ultimate Multisite は 404 エラーを表示します。

  * **同期的なサイト公開を強制:** 顧客がネットワーク上の商品を購読した後、新しい保留中のサイトを実際のネットワークサイトに変換する必要があります。公開処理は Job Queue により非同期で行われます。このオプションを有効にすると、サインアップと同じリクエスト内で公開が実行されます。

次に、ログインと登録プロセスに関連する他のオプションを見てみましょう。同じ Login & registration ページの **Other options** のすぐ下にあります。

  * **デフォルト権限:** サインアップ処理後に、顧客が自分のサイトで持つ権限です。

  * **Jumper を有効化:** 管理画面で Jumper ショートカットを有効にします。Jumper を使うと、管理者はすべてのメニューをたどらずに、Ultimate Multisite の画面、ネットワークオブジェクト、その他の対応先へすばやく移動できます。管理インターフェースからこのクイックナビゲーションツールを隠したい場合はオフにしてください。

  * **メインサイトにもユーザーを追加:** このオプションを有効にすると、サインアップ処理後にユーザーもネットワークのメインサイトへ追加されます。このオプションを有効にすると、これらのユーザーに対するサイト上の **デフォルト権限** を設定するオプションもすぐ下に表示されます。

  * **複数 Account を有効化:** ユーザーが同じメールアドレスで、ネットワーク内の異なるサイトに Account を持てるようにします。このオプションがオフの場合、顧客は同じメールアドレスで、ネットワーク上で稼働している他のサイトに Account を作成できません。

カスタマイズできるログインと登録関連のオプションは以上です。編集が終わったら、設定を保存するのを忘れないでください。

## 複数の登録フォームを使用する: {#using-multiple-registration-forms}

Ultimate Multisite 2.0 には checkout form エディターがあり、さまざまなフィールドや提供商品などを持つフォームを必要なだけ作成できます。

ログインページと登録ページはいずれもショートコードで埋め込まれます。ログインページには **[wu_login_form]**、登録ページには**[wu_checkout]** を使用します。checkout form を構築または作成することで、登録ページをさらにカスタマイズできます。

この機能にアクセスするには、左サイドバーの **Checkout Forms** メニューに移動します。

![サイドバーの Checkout Forms メニュー](/img/config/checkout-forms-list.png)

このページでは、所有しているすべての checkout form を確認できます。

新しいものを作成したい場合は、ページ上部の **Add Checkout Form** をクリックするだけです。

開始点として、次の3つのオプションから選択できます。単一ステップ、複数ステップ、または空白です。その後、**Go to the Editor** をクリックします。

![単一ステップ、複数ステップ、空白のオプションを持つ Add Checkout Form](/img/config/checkout-forms-list.png)

または、フォーム名の下にあるオプションをクリックして、既存のフォームを編集または複製できます。そこには、フォームのショートコードをコピーするオプションや、フォームを削除するオプションもあります。

![編集、複製、削除を含む checkout form のホバー操作](/img/config/checkout-form-hover-actions.png)

単一ステップまたは複数ステップを選択すると、checkout form には動作に必要な基本ステップがあらかじめ入力されています。その後、必要に応じて追加ステップを加えることができます。

### Checkout Form の編集: {#editing-a-checkout-form}

前述のとおり、さまざまな目的に合わせて checkout form を作成できます。この例では登録フォームを扱います。

checkout form エディターに移動したら、フォームに名前（内部参照のみに使用）とスラッグ（たとえばショートコードの作成に使用）を付けます。

![名前とスラッグ欄を含むCheckoutフォーム編集画面](/img/config/checkout-form-name-slug.png)

フォームはステップとフィールドで構成されます。**Add New Checkout Step**をクリックすると、新しいステップを追加できます。

![Add New Checkout Stepボタン](/img/config/checkout-form-add-step.png)

モーダルウィンドウの最初のタブで、フォームのステップ内容を入力します。ID、名前、説明を設定します。これらの項目は主に内部で使用されます。

![ID、名前、説明を含むCheckoutステップ内容タブ](/img/config/checkout-form-step-content.png)

次に、ステップの表示設定を行います。**Always show**、**Only show for logged in users**、**Only show for guests**から選択できます。

![Checkoutステップの表示オプション](/img/config/checkout-form-step-visibility.png)

最後に、ステップのスタイルを設定します。これらは任意のフィールドです。

![Checkoutステップのスタイル設定](/img/config/checkout-form-step-style.png)

次に、最初のステップへフィールドを追加します。**Add New Field**をクリックし、必要なセクションの種類を選択します。

![Add New Fieldボタン](/img/config/checkout-form-add-field-button.png)![フィールドタイプ選択ドロップダウン](/img/config/checkout-form-field-type-dropdown.png)

各フィールドには、入力すべき異なるパラメータがあります。最初の項目では、**Username**フィールドを選択します。

![Usernameフィールド設定](/img/config/checkout-form-username-content.png)![Usernameフィールドのパラメータ](/img/config/checkout-form-username-visibility.png)![Usernameフィールドの追加設定](/img/config/checkout-form-username-style.png)

必要な数だけステップとフィールドを追加できます。顧客が選択できるように商品を表示するには、Pricing Tableフィールドを使用します。顧客にテンプレートを選択させたい場合は、Template Selectionフィールドを追加します。必要に応じて同様に設定してください。

![テンプレート選択フィールドを含むCheckoutフォーム編集画面](/img/config/checkout-form-with-template-field.png)

_**注:** Checkoutフォームを作成した後に商品を作成した場合は、Pricing tableセクションにその商品を追加する必要があります。追加しない場合、その商品は登録ページで顧客に表示されません。_

_**注2:** ユーザー名、メールアドレス、パスワード、サイトタイトル、サイトURL、注文概要、支払い、送信ボタンは、Checkoutフォームを作成するための必須フィールドです。_

Checkoutフォームの作業中は、いつでもPreviewボタンを使って、顧客にフォームがどのように表示されるかを確認できます。既存ユーザーとしての表示と訪問者としての表示を切り替えることもできます。

![Checkoutフォーム編集画面のPreviewボタン](/img/config/checkout-form-preview-button.png)![訪問者または既存ユーザーとしてのCheckoutフォームプレビュー](/img/config/checkout-form-preview-modal.png)

最後に、**Advanced Options**では、**Thank You**ページのメッセージ、コンバージョン計測用スニペット、Checkoutフォーム用のカスタムCSS、または特定の国への制限を設定できます。

![Thank Youページ、コンバージョン計測、カスタムCSSを含むAdvanced Options](/img/config/checkout-form-advanced.png)

右カラムのこのオプションを切り替えることで、Checkoutフォームを手動で有効化または無効化できます。また、フォームを完全に削除することもできます。

![Checkoutフォームの有効化切り替えと削除オプション](/img/config/checkout-form-active.png)

Checkoutフォームを保存するのを忘れないでください。

![Save Checkout Formボタン](/img/config/checkout-form-save.png)

フォームのショートコードを取得するには、**Generate Shortcode**をクリックし、モーダルウィンドウに表示された結果をコピーします。

![コピーするショートコードを含むGenerate Shortcodeモーダル](/img/config/checkout-form-editor.png)

_**注:** このCheckoutフォームを登録ページに追加するには、このショートコードを登録ページに追加する必要があります。_

## URLパラメータで商品とテンプレートを事前選択する: {#pre-selecting-products-and-templates-via-url-parameters}

商品のためのカスタマイズされた価格表を作成し、価格表またはテンプレートページで顧客が選んだ商品またはテンプレートをCheckoutフォームで事前選択したい場合は、URLパラメータを使用できます。

### **プランの場合:** {#for-plans}

**Ultimate Multisite > Products > Select a plan**へ移動します。ページ上部に**Click to copy Shareable Link**ボタンが表示されます。これは、Checkoutフォームでこの特定のプランを事前選択するために使用できるリンクです。

![共有可能リンクボタンを含む商品ページ](/img/config/products-list.png)

この共有可能リンクは**Plans**にのみ有効です。パッケージやサービスには共有可能リンクを使用できません。

### テンプレートの場合: {#for-templates}

Checkoutフォームでサイトテンプレートを事前選択したい場合は、登録ページのURLでパラメータ **?template_id=X** を使用できます。「X」は**サイトテンプレートID番号**に置き換える必要があります。この番号を取得するには、**Ultimate Multisite > Sites**へ移動します。

使用したいサイトテンプレートのすぐ下にある**Manage**をクリックします。SITE ID番号が表示されます。この特定のサイトテンプレートをCheckoutフォームで事前選択するには、その番号を使用してください。ここでの例では、URLパラメータは **?template_id=2** になります。

![サイトテンプレートIDを示すサイト一覧](/img/config/site-templates-list.png)

ネットワークWebサイトが[**www.mynetwork.com**](http://www.mynetwork.com)で、Checkoutフォームを含む登録ページが **/register** ページにあるとします。このサイトテンプレートが事前選択された完全なURLは、[**www.mynetwork.com/register/?template**](http://www.mynetwork.com/register/?template)**_id=2** のようになります。

必要であれば、Checkoutフォームで商品とテンプレートの両方を事前選択できます。プランの共有可能リンクをコピーし、末尾にテンプレートパラメータを貼り付けるだけです。[**www.mynetwork.com/register/premium-plan/?template**](http://www.mynetwork.com/register/premium-plan/?template)**_id=2** のようになります。
