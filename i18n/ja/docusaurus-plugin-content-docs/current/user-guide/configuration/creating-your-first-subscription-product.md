---
title: 最初のサブスクリプション製品を作成する
sidebar_position: 6
_i18n_hash: 0df17700c38413389d0678786906ad26
---
# 最初のサブスクリプション製品を作成する (v2)

_**重要な注意: 本記事はUltimate Multisite 2.xユーザーのみ対象です。1.xをご利用の場合は**_ **_**こちらの記事を参照してください**_**。_

ネットワークを稼働させ、潜在的なユーザーにサービスを販売開始するには、さまざまなサブスクリプションオプションが必要です。これらの製品はどのように作成しますか？提供できる製品の種類は何ですか？本記事では、製品に関する知っておくべきすべてを解説します。

## Product Type

Ultimate Multisiteでは、クライアントに対して2種類の製品を提供できます: **plans** と **add-ons** **(Order Bump)**。Add-onsはさらに2種類に分けられます: **packages** と **services**。次にそれらの違いと特徴を見ていきます。

  * **Plans** : Ultimate Multisiteの基本製品です。クライアントはプランに紐付けられている場合にのみメンバーシップを持つことができます。プランは、プランの設定に応じて1つ以上のサイトをクライアントに提供し、製品編集ページで設定した制限を適用します。

  * **Packages** : Ultimate Multisiteのプラン機能に直接影響を与えるアドオンです。制限を変更したり、クライアントが購入した元のプランに新しいリソース、プラグイン、テーマを追加します。たとえば、基本プランが月1,000訪問を許可している場合、訪問数を10,000に拡張するパッケージを提供できます。

  * **Services**: Ultimate Multisiteの機能を変更しないアドオンです。購入したプランに加えて、クライアントのために実行するタスクです。たとえば、顧客が単一サイトを許可するプランを購入し、さらにそのサイトのデザインを行う追加サービスを支払う場合があります。

## Managing Products

多くの人にとって、Ultimate Multisiteの**Products**タブ（Ultimate Multisite > Products）は、従来のホスティング環境でのプランに相当します。

Ultimate Multisite内でProductsタブは、特定の製品またはサービスに適用される構造と制限を定義します。これらの構造は、製品またはサービスの説明、価格、税金、権限にまで拡張されます。

このセクションでは、Ultimate Multisiteの不可欠な基盤を理解するためのガイドを提供します。

![Products list page](/img/config/products-list.png)

## Adding Products

プラン、パッケージ、サービスのいずれにせよ、新しいアイテムを定義するエントリーポイントは **Ultimate Multisite > Products > Add Product** です。

![Add Product button](/img/config/product-add-button.png)

インターフェースには2つの主要なセクションがあります。左側には製品の定義を支援する複数のタブがあり、右側には製品の基本価格、アクティブ状態、製品画像を定義するいくつかのセクションがあります。

![Product edit page overview](/img/config/product-edit-full.png)

### Description

基本製品情報は、製品名と説明を入力することで定義できます。これらの識別子は、プランや価格選択、請求書、アップグレードなど、製品情報が必要な場所で表示されます。

![Product description section](/img/config/product-description.png)

### Pricing Type

インターフェースの右側で、基本価格を定義できます。

![Pricing and save section](/img/config/product-pricing-save.png)

Ultimate Multisiteは3種類の価格設定タイプをサポートしています。**paid** オプションは、ネットワーク管理者に製品の価格と請求頻度に関する情報を入力させます。

### Pricing

価格コンポーネントは、基本製品価格と請求間隔を定義します。

![Pricing and save section](/img/config/product-pricing-save.png)

したがって、$29.99の価格で1か月の設定の場合、毎月$29.99が請求されます。同様に、$89.97の価格で3か月の設定の場合、四半期ごとにその金額が請求されます。

### Billing Cycles

請求サイクルセクションは、前述の請求間隔の頻度を指定し、一般的には契約や固定期間の観点から理解されます。

![Pricing and save section](/img/config/product-pricing-save.png)

たとえば、$29.99の製品価格で1か月の間隔と12回の請求サイクルが設定されている場合、次の12か月間、製品に対して毎月$29.99が請求されます。言い換えれば、この設定は12か月間毎月$29.99の固定価格期間を確立し、その後請求を停止します。

### Trial Period

トライアルオプションを有効にすると、ネットワーク管理者は製品のトライアル期間を定義できます。

![Pricing and save section](/img/config/product-pricing-save.png)

トライアル期間中、顧客は製品を自由に使用でき、トライアル期間が終了するまで請求されません。

### Setup Fee

プランにセットアップ料金を適用することもできます。

![Pricing and save section](/img/config/product-pricing-save.png)

これは、クライアントが最初の請求時に（価格プランに加えて）このセクションで定義した料金に相当する追加金額を支払うことを意味します。

### Active

アクティブトグルは、製品が新規サインアップの顧客に利用可能かどうかを実質的に定義します。

![Active toggle](/img/config/product-active.png)

このプランに既存の顧客がいる場合、トグルを無効状態に設定すると、実質的にプランを将来のサインアップから除外します。**プランに既存の顧客は、新しいプランに移行またはプランから除外されるまで請求を継続します**。

### Product Image

**Upload Image** ボタンは、ネットワーク管理者がメディアライブラリを使用して製品画像を選択またはアップロードできるようにします。

![Product image section](/img/config/product-image.png)

### Delete

**Delete Product** ボタンは、製品をシステムから削除します。製品が公開された後に表示されます。

![Delete product section](/img/config/product-delete.png)

他の削除とは異なり、製品はゴミ箱状態に置かれません。したがって、一度削除すると操作は不可逆です。

### Product Options

基本レベルの製品情報が定義されたら、製品オプションはネットワーク管理者が製品の特定属性をさらに定義するのを支援します。

#### General

**General** タブは、他の製品固有タブに適用されない製品の一般属性を定義します。

![General tab](/img/config/product-general-tab.png)

自明の**product slug** は、製品がURLやUltimate Multisiteの他の領域で識別されるスラッグを定義します。

Ultimate Multisiteは、Plan、Package、Serviceという複数の製品タイプをサポートしています。**Product Options** タブは、指定された製品タイプに応じて動的に調整されます。

**Customer Role** は、サイトが作成されたときに顧客に割り当てられる役割を指定します。ほとんどのネットワーク管理者にとって、これはUltimate MultisiteのデフォルトまたはAdministratorになります。Ultimate Multisiteのデフォルトロールは **Ultimate Multisite > Settings > Login & Registration** で設定できます。

![Customer role settings](/img/config/product-customer-role-settings.png)

#### Up & Downgrades

このタブは、顧客が特定の階層内で利用できるアップグレードとダウングレードのパスを指定します。

この概念を理解するために、ニッチなUltimate Multisiteインストールが顧客に学習管理ソリューションを提供する例を考えてみましょう。この目的のために、3つのプラン（Basic、Plus、Premium）が定義され、各プランに対して特定のプラグインが有効化されます（プラグインの有効化手順は後述）。

Ultimate MultisiteインストールがビジネスウェブサイトやeCommerceウェブサイトもサービス対象とする場合、これらのプランは異なるプラグインのインストールと有効化を必要とする可能性があります。

この程度では、eLearning顧客がeCommerceプランに移行するのを許可するのは望ましくなく、問題が生じる可能性があります。これらのプラン、価格設定、制限が適切に合わない可能性があるためです。

したがって、顧客の移行パスを制限し、事象を防止するために、ネットワーク管理者はプラングループを定義し、そのグループ内で顧客が移行できるプランを指定できます。

![Up and Downgrades tab](/img/config/product-upgrades.png)

プラングループを定義するには、**plan group** リスト内で互換性のあるプランを指定します。**product order** は、プランが最低から最高へとどのように順序付けされ表示されるかを決定します。

Ultimate Multisiteには、適切なアドオン製品とサービスをプランに追加できる **order bump** 機能も含まれています。これらは、チェックアウト時またはアップグレード時にプランに追加できる追加アイテムとして顧客に提供されます。

#### Price Variations

価格バリエーションは、ネットワーク管理者が期間に応じて代替価格階層を指定できるようにします。この設定により、3か月、6か月、または年間の価格階層を設定でき、またはユースケースに応じて他の期間と頻度を設定できます。

![Price Variations tab](/img/config/product-price-variations.png)

価格バリエーションを設定するには、**enable price variations** トグルをアクティブにし、**Add new Price Variation** ボタンをクリックします。

バリエーションを入力するには、期間、期間、価格を設定します。追加のバリエーションは、ボタンを再度クリックして入力できます。

![Price Variations tab](/img/config/product-price-variations.png)

#### Taxes

**Taxes** タブは、**Ultimate Multisite > Settings > Taxes** で指定された税設定、特に定義された税率と一致します。税金を有効にし、適用可能な税率を定義するには、**Ultimate Multisite: Settings** のドキュメントを参照してください。

![Taxes tab](/img/config/product-taxes.png)

前の例では、カリフォルニア州（米国）の顧客に適用される7.25％のローカル税率を定義しました。

**Ultimate Multisite > Settings > Manage Tax Rates** で税率が定義されると、製品レベルで選択可能になります。

![Taxes tab](/img/config/product-taxes.png)

製品が課税対象であることを示すには、**Is Taxable** トグルをアクティブにし、税カテゴリドロップダウンから適用可能な税率を選択します。

#### Site Templates

本質的に、サイトテンプレートは、サブスクリプション開始時に顧客のサイトにクローンされる完全なWordPressウェブサイトです。

![Site Templates tab](/img/config/product-site-templates.png)

ネットワーク管理者は、テンプレートサイトを通常のWordPressサイトとして作成・構成し、テーマ、プラグイン、コンテンツを有効化・設定します。テンプレートサイトはそのまま顧客にクローンされます。

このタブは、ネットワーク管理者が新しいサブスクリプション時にサイトテンプレートの動作を指定できるようにします。サイトテンプレートを使用するには、**allow site templates** トグルをアクティブにします。

**site template selection mode** は、サブスクリプションプロセス中のサイトテンプレートの動作を定義します。

**D** **efault** 設定は、チェックアウトフォームの手順に従います。ネットワーク管理者がチェックアウトプロセスでテンプレート選択ステップを定義し、そのステップがテンプレートで定義されている場合、この設定はチェックアウトステップで設定された指示を尊重します。

**A** **ssign Site Template** を指定すると、指定されたテンプレートの選択が強制されます。したがって、チェックアウトプロセスのテンプレート選択ステップは削除されます。

最後に、**C** **hoose Available Site Templates** は、チェックアウトステップで指定されたテンプレートをこの設定で選択されたテンプレートで上書きします。事前に選択されたテンプレートを定義して、顧客の選択を支援することもできます。

最終的に、ネットワーク管理者がチェックアウトステップでテンプレート選択を行いたい場合は、' _default_ ' の設定で十分です。代わりにテンプレート選択を削除・ロックし、プラン設定に委ねるには、' _assign new template_ ' または ' _choose available site templates_ ' のオプションが望ましい場合があります。

#### Sites

**Sites** タブは、Ultimate Multisiteの制限機能の一部です。

![Sites tab](/img/config/product-sites.png)

この設定は、顧客がメンバーシップで作成できるサイトの最大数を指定します。

制限を有効にするには、**limit sites** トグルをアクティブにし、**site allowance** フィールドにサイトの最大数を指定します。

#### Visits

**Visits** タブは、Ultimate Multisiteの制限システムの一部です。この設定は、顧客のサイトへのユニーク訪問者の計算とその後のスロットリングを可能にします。

![Visits tab](/img/config/product-visits.png)

マーケティングの観点から、ネットワーク管理者はこの設定を利用して、制限に達した際に顧客にプランをアップグレードさせる手段として活用できます。この設定は、サイトへの過剰なトラフィックを抑制し、システムリソースを保護するのにも役立ちます。

この機能を利用するには、**limit unique visits** トグルをアクティブにし、**unique visits quota** フィールドにユニーク訪問者の最大数を指定します。

この制限に達すると、Ultimate Multisiteは顧客のサイトへのサービスを停止し、制限を超えたことを示すメッセージを表示します。

#### Users

Ultimate Multisiteの「Users」制限は、ネットワーク管理者が作成できるユーザー数と役割に割り当てられるユーザー数に制限を課すことを可能にします。

![Users tab](/img/config/product-users.png)

制限機能を有効にするには、**limit user** トグルを右にスライドさせてアクティブにします。

次に、制限対象となる各役割について、隣のトグルをアクティブにし、適切なフィールドに最大上限を設定します。

#### Post Types

**Post Types** タブは、ネットワーク管理者がWordPress内の豊富な投稿タイプに対して細かい制限を課すことを可能にします。

![Post Types tab](/img/config/product-post-types.png)

WordPressの構造上、投稿と投稿タイプはそのコア機能の重要な要素であるため、Ultimate Multisiteの制限システムは、ネットワーク管理者が制限を設定・維持するのを支援するよう設計されています。

この制限サブシステムを有効にするには、**limit post types** トグルを右にスライドさせてアクティブにします。

次に、制限対象となる各投稿タイプについて、右にスライドさせてオンにし、適切なフィールドに最大上限を指定します。

#### Disk Space

**Disk Space** タブは、ネットワーク管理者が顧客が消費するスペースを制限できるようにします。

![Disk Space tab](/img/config/product-disk-space.png)

通常、WordPressマルチサイトでは、コアファイルはすべてのサイトで共有され、メディアファイルとアップロード用に作成された個別ディレクトリに対して、これらの設定と制限が適用されます。

ディスク使用量の制限を有効にするには、**limit disk size per site** トグルを右にスライドさせてアクティブにします。

次に、**disk space allowanc** e フィールドに最大上限をメガバイト単位で指定します。

#### Custom Domain

このオプションをトグルすると、このプランでカスタムドメインを許可できます。

![Custom Domains tab](/img/config/product-custom-domains.png)

#### Themes

製品オプション内の **Themes** タブは、ネットワーク管理者がテーマを顧客に選択可能にし、必要に応じてテーマの状態を強制できるようにします。

_**注意: テーマを顧客に利用可能にするには、ネットワーク管理者がネットワーク有効化している必要があります。**_

![Themes tab](/img/config/product-themes.png)

**visibility** オプションは、顧客がサイト内の **Appearance > Themes** タブを閲覧した際に、このテーマが表示されるかどうかを定義します。このオプションを **Hidden** に設定すると、テーマが表示から除外され、選択・有効化できなくなります。

![Network themes page](/img/config/product-themes-network-enabled.png)

**behavior** 選択は、ネットワーク管理者が顧客サイト作成時のテーマの状態を定義できるようにします。

**A** **vailable** 状態では、テーマが顧客に自己有効化可能として提供されます。逆に、**Not Available** 状態では、顧客がテーマを有効化できなくなります。最後に、**Force Activate** オプションはテーマの選択と有効化を強制し、サイト作成時にデフォルトとして設定します。

#### Plugins

Themesタブと同様に、Ultimate Multisiteは、ネットワーク管理者がプラグインの可視性と新しいサイト作成時の状態を顧客に定義できるようにします。

![Themes tab](/img/config/product-themes.png)

**visibility** ドロップダウンは、プラグインが顧客のサイトでプラグインメニューを通じて閲覧された際に、可視または非表示になるかを選択できます。

ネットワーク管理者は、行動ドロップダウンのオプションを使用して、プラグインの動作をさらに操作できます。

![Plugins tab](/img/config/product-plugins.png)

**Default** 選択は、顧客が選択したサイトテンプレートで定義されたプラグイン状態を尊重します。したがって、テンプレート内で有効化されたプラグインは、テンプレートが顧客のサイトにクローンされる際に有効のまま残ります。

**Force Activate** は、サイト作成時にプラグインをアクティブ状態にし、逆に **Force Inactivate** はプラグインを非アクティブにします。両方の状況で、プラグインの状態は顧客がWordPressプラグインメニューを通じて手動で変更できます。

**Force Activate & Lock** 設定は同様に機能しますが、顧客がプラグイン状態を変更できないようにします。したがって、Force Activate and Lock の設定はプラグインをアクティブ状態に強制し、顧客が非アクティブ化できないようにします。同様に、**Force Inactivate & Lock** 設定はプラグインを非アクティブ状態に強制し、ユーザーがプラグインを有効化できないようにします。

ネットワーク管理者は、プラグインとプラグイン状態がテンプレート内で影響を受ける可能性があるため、Force Activate & Lock と Force Inactivate & Lock の設定をサイトテンプレートと組み合わせて検討することを推奨します。

#### Reset Limitations

**Reset Limitations** タブは、製品に定義されたすべてのカスタム制限をリセットします。制限をリセットするには、**reset limitations** ボタンをクリックします。

![Plugins tab](/img/config/product-plugins.png)

操作を確認するには、右側の **confirm reset** トグルをアクティブにスライドさせ、**reset limitations** ボタンをクリックします。

![Reset Limitations tab](/img/config/product-reset-limitations.png)

#### Legacy Options

**Legacy Options** タブは、Ultimate Multisite 1.xで定義された特定のオプションと動作を観察します。

![Reset Limitations tab](/img/config/product-reset-limitations.png)

これらのオプションは互換性と移行の容易さのために提供され、将来のリリースで非推奨になります。

## Edit, Duplicate, or Delete Product

既存の製品は、**Ultimate Multisite > Products** に移動し、既存の製品名にカーソルを合わせることで編集、複製、または削除できます。

![Product hover actions](/img/config/product-hover-actions.png)

##
