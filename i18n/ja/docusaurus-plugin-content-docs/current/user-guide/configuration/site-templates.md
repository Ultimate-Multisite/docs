---
title: サイトテンプレート
sidebar_position: 4
_i18n_hash: 05938a764a4fd230e32fa0ef39d35ebd
---
# サイトテンプレート (v2)

_**NOTE: 本記事はUltimate Multisiteバージョン2.xに関するものです。バージョン1.xを使用している場合は、**_ **この記事** _**をご覧ください。**_

Ultimate Multisiteでプレミアムネットワークを構築する際の目標は、可能な限り多くのプロセスを自動化しつつ、クライアントにウェブサイト作成時に選択できる柔軟性とさまざまなオプションを提供することです。このバランスを実現する簡単な方法の一つが、Ultimate Multisite Site Templates機能を活用することです。

## サイトテンプレートとは？

名前が示す通り、サイトテンプレートはネットワーク内で新しいサイトを作成する際のベースとして使用できるボイラープレートサイトです。

つまり、ベースサイトを作成し、さまざまなプラグインを有効化し、アクティブテーマを設定し、好きなようにカスタマイズできます。そして、顧客が新しいアカウントを作成すると、意味のあるコンテンツがないデフォルトのWordPressサイトではなく、すべてのカスタマイズとコンテンツが既に設定されたベースサイトのコピーが提供されます。

それは素晴らしいですが、どうやって新しいサイトテンプレートを作成しますか？それは可能な限りシンプルです。

## 新しいサイトテンプレートの作成と編集

サイトテンプレートはネットワーク上の通常のサイトと同じです。新しいテンプレートを作成するには、**Network Admin > Ultimate Multisite > Sites > Add Site** に移動するだけです。

**![Add site button in the Sites list page](/img/config/site-templates-list.png)**

これによりモーダルウィンドウが開き、**Site title, Site Domain/path,** および **Site type** を入力するよう求められます。**Site Type** ドロップダウンフィールドで必ず **Site Template** を選択してください。

_![Add site template modal with site type dropdown](/img/config/site-templates-list.png)_

フォームの下部に **Copy Site** トグルスイッチが表示されます。これにより、既存のサイトテンプレートをベースに新しいサイトテンプレートを作成でき、ゼロから作成するより時間を節約できます。

![Add site template modal with copy site toggle](/img/config/site-templates-list.png)

### サイトテンプレートの内容をカスタマイズする

サイトテンプレートをカスタマイズするには、ダッシュボードパネルに移動して必要な変更を行うだけです。新しい投稿やページを作成し、プラグインを有効化し、アクティブテーマを変更できます。Customizerに移動してさまざまなカスタマイズオプションを変更することも可能です。

そのすべてのデータは、顧客がそのサイトテンプレートに基づいて新しいサイトを作成するときにコピーされます。

### 高度なオプション

カスタムコーディングに慣れている場合は、Search and Replace APIを使用して、新しいサイト作成後に情報を自動的に置き換えることができます。これは、Aboutページの会社名を置き換えたり、Contactページの連絡先メールを置き換えたりする場合に便利です。

### サイトテンプレートの使用

さて、さまざまなデザイン、テーマ、設定を持つ複数のサイトテンプレートを作成しました。これらをネットワークでどのように活用しますか？

基本的に、現在使用できる2つのアプローチがあります（同時に使用することはできません）：

* 各プランに1つのサイトテンプレートを割り当てる
**または**
* サインアップ時にクライアント自身がサイトテンプレートを選択できるようにする

#### モード1：サイトテンプレートを割り当てる

このモードでは、クライアントはアカウント作成時にテンプレートを選択できません。代わりに、各プランで使用すべきテンプレートを定義します。

そのためには、**Ultimate Multisite > Products > Edit** に移動します。

![Edit product to assign site template](/img/config/product-site-templates.png)

これにより **Edit Product** ページに移動します。**Product Options** セクションで **Site template** タブを見つけ、ドロップダウンフィールドから **Assign Site Template** オプションを選択します。これにより、利用可能なサイトテンプレートのリストが表示され、製品専用に1つのサイトテンプレートのみを選択できるようになります。

![Product site template tab with assign site template option](/img/config/product-site-templates.png)

#### モード2：利用可能なサイトテンプレートを選択

このモードでは、サインアッププロセス中にクライアントに選択肢を提供します。製品設定で定義したさまざまなサイトテンプレートから選択できます。選択された製品の下でクライアントが選択できるサイトテンプレートを制限するオプションがあります。これにより、各製品の下に異なるサイトテンプレートセットを持つことができ、価格の高い製品の異なる機能や特徴を強調するのに理想的です。

**Edit Product** ページで、**Product Options** セクションの **Site template** タブを見つけ、ドロップダウンフィールドから **Choose Available Site Template** オプションを選択します。これにより、利用可能なサイトテンプレートのリストが表示され、利用可能にしたいサイトテンプレートを選択できます。Behaviorを選択して行います：**Available** を選択すると、サイトテンプレートがリストに含まれます。_**Not Available**_ を選択すると、サイトテンプレートがオプションとして表示されません。**Pre-selected** を選択すると、リストにあるサイトテンプレートのうち1つをデフォルトで選択します。

![Choose available site templates with behavior options](/img/config/product-site-templates.png)

### デフォルトモード：チェックアウトフォームでのサイトテンプレート選択

すべてのサイトテンプレートを登録時に利用可能にしたい場合、または各製品でサイトテンプレートを割り当てたり指定したりする追加作業を行いたくない場合は、**Checkout Form** でサイトテンプレート選択を設定できます。これを行うには、**Ultimate Multisite > Checkout Forms** に移動し、設定したいフォームの下にある **Edit** をクリックします。

![Checkout forms list page](/img/config/checkout-forms-list.png)

これにより **Edit Checkout Form** ページが表示されます。**Template Selection** フィールドを見つけ、下の **Edit** をクリックします。

![Checkout form editor with template selection field](/img/config/checkout-form-editor.png)

モーダルウィンドウが表示されます。**Template Sites** フィールドの下で、登録時に利用可能にしたいすべてのサイトテンプレートを選択してリストアップできます。ここで指定したサイトテンプレートは、ユーザーが選択した製品に関係なく利用可能になります。

![Template sites field in checkout form editor](/img/config/checkout-form-step.png)

### サイトテンプレートオプション

Ultimate Multisite設定でオン/オフできる他のサイトテンプレート機能があります。

![Site template options in Ultimate Multisite settings](/img/config/settings-sites.png)

#### テンプレート切替を許可

このオプションを有効にすると、クライアントはアカウントとサイトが作成された後に、サインアッププロセスで選択したテンプレートを切り替えることができます。これはクライアントの視点から有用で、後で元の選択が特定のニーズに最適でないことが判明した場合にテンプレートを再選択できるためです。

#### ユーザーが自分のサイトをテンプレートとして使用できるようにする

サブサイトユーザーは自分のサイトを構築・デザインする時間を費やしたため、別のサブサイトを作成する際に利用可能なサイトテンプレートの1つとしてクローンして使用したい場合があります。このオプションにより、それを実現できます。

#### テンプレート複製時にメディアをコピー

このオプションをチェックすると、テンプレートサイトにアップロードされたメディアが新しく作成されたサイトにコピーされます。これは各プランで上書きできます。

#### **検索エンジンがサイトテンプレートをインデックスしないようにする**

この記事で説明したサイトテンプレートはボイラープレートですが、ネットワークの一部であるため、検索エンジンが見つけることができます。このオプションにより、検索エンジンがサイトテンプレートをインデックスできないように隠すことができます。

## 自動検索と置換でサイトテンプレートを事前入力する

Ultimate Multisiteの最も強力な機能の1つは、登録フォームに任意のテキスト、色、選択フィールドを追加できることです。このデータを取得したら、選択したサイトテンプレートの特定の部分にコンテンツを事前入力できます。新しいサイトが公開されると、Ultimate Multisiteは登録時に入力された実際の情報でプレースホルダーを置き換えます。

例として、登録時にエンドユーザーの会社名を取得し、ホームページに自動的に会社名を表示したい場合。テンプレートサイトのホームページに、画像のようにプレースホルダーを追加する必要があります（プレースホルダーは二重波括弧で囲む必要があります - {{placeholder_name}}）。

![Homepage with placeholder text in curly braces](/img/config/site-templates-list.png)

次に、チェックアウトフォームに対応する登録フィールドを追加してデータを取得します：

![Checkout form with matching registration field](/img/config/checkout-form-editor.png)

顧客は登録時にそのフィールドに入力できるようになります。

![Registration field filled by customer](/img/config/checkout-form-step.png)

![Preview of the registration form](/img/config/checkout-form-editor.png)

Ultimate Multisiteは、顧客が提供したデータでプレースホルダーを自動的に置き換えます。

![Placeholders replaced with customer data on the site](/img/config/site-templates-list.png)

### 「プレースホルダーでいっぱいのテンプレート」問題の解決

これらはすべて素晴らしいですが、見た目が悪い問題に直面します。顧客が閲覧できるサイトテンプレートが、あまり情報を伝えない見た目の悪いプレースホルダーでいっぱいになります。

これを解決するために、プレースホルダーに偽の値を設定するオプションを提供し、顧客が閲覧している間にそれらの値を使用してテンプレートサイトの内容を検索して置換します。

**Ultimate Multisite > Settings > Sites** に移動し、サイドバーで **Edit Placeholders** リンクをクリックすると、テンプレートプレースホルダーエディタにアクセスできます。

![Placeholder settings under Sites settings page](/img/config/settings-sites.png)

これにより、プレースホルダーのコンテンツエディタに移動し、プレースホルダーとそれぞれのコンテンツを追加できます。

![Template placeholders content editor](/img/config/settings-sites.png)
