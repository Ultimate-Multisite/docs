---
title: 税金処理
sidebar_position: 4
_i18n_hash: 8b94c58406519f9c55fe837c6addfc12
---
# 税の取り扱い

Ultimate Multisite には、コア plugin に税徴収モジュールが組み込まれています。そのため、プラン、パッケージ、サービスで売上税を徴収する必要がある場合でも、add-on をインストールせずに簡単に対応できます。

ヨーロッパに所在する会社向けに、VAT 準拠をより適切に**サポート**するためのツールと機能を追加する **add-on** を提供しています。

Ultimate Multisite は、あなたに代わって政府へ税の申告や納付を行いません。取引時に適切な税を徴収できるよう支援するだけです。**税の納付は引き続きご自身で行う必要があります。**

## 税徴収を有効にする

税徴収はデフォルトでは有効になっていません。有効にするには、**Ultimate Multisite > Settings > Taxes** に移動し、Enable Taxes 設定をオンに切り替える必要があります。

![税設定ページ上部の Enable Taxes 切り替え](/img/config/settings-taxes-enable.png)

税設定ページ全体は次のように表示されます。

![税設定の全ページ](/img/config/settings-taxes-full.png)

個別の商品ごとの税設定も確認できます。

![商品の税設定](/img/config/settings-taxes.png)

### 税抜きと税込み

デフォルトでは、すべての商品価格は税抜きです。つまり、商品の価格に税は**含まれていません**。特定の購入で顧客が税を支払うべきだと判断した場合、小計に税を**上乗せ**します。

商品の価格に税を含めたい場合は、**Inclusive Tax** 設定を有効にすることで対応できます。

![Enable Taxes 設定の下にある Inclusive Tax 切り替え行](/img/config/settings-taxes-inclusive.png)

行った変更を**保存**するのを忘れないでください。

###

## 税率を作成する

Tax Collection を有効にした後は、税率エディターを使用して特定の地域向けの税率を作成する必要があります。

Tax settings ページのサイドバーにある **Manage Tax Rates** ボタンをクリックすると、エディターにアクセスできます。

![設定ページの Tax Rates パネルにある Manage Tax Rates リンク](/img/config/settings-taxes-manage-rates.png)

税率エディターページでは、**Add new Row** ボタンをクリックして新しい Tax Rates を追加できます。

![上部に Add new Row ボタンがある税率エディターの表](/img/config/tax-rates-editor.png)

各税率には、**タイトル**（請求書で使用）を指定する必要があります。次に、この税が課される**国**（必須）、**州、**および**市区町村**（どちらも任意）を選択できます。最後に、**税率をパーセントで**追加します。

### 税カテゴリ

複数の Tax Categories を作成して、商品の種類ごとに異なる税率を追加することもできます。

**Add new Tax Category** をクリックし、カテゴリ名を入力して **Create** を押します。

![税率エディター上部の Add new Tax Category ボタン](/img/config/tax-categories-add.png)

![カテゴリ作成モーダルの Tax Category Name 入力欄](/img/config/tax-categories-create-modal.png)

カテゴリを切り替えるには、**Switch** をクリックし、新しい税を追加したいカテゴリを選択します。

![税カテゴリを切り替える Switch ドロップダウンボタン](/img/config/tax-categories-switch.png)

![利用可能なカテゴリを表示する税カテゴリ選択ドロップダウン](/img/config/tax-categories-select.png)

特定の商品に税カテゴリを設定するには、**商品編集ページ**に移動し、Taxes タブを開きます。

![税カテゴリと課税対象切り替えを含む商品の税タブ](/img/config/product-taxes.png)

同じ画面で **Is Taxable?** 切り替えをオフにすると、その商品について税を徴収しないよう Ultimate Multisite に知らせることができます。

## ヨーロッパ VAT サポート

前述のとおり、European VAT 規制により追加要件がある EU の顧客向けに add-on を用意しています。

当社の VAT ツールは、いくつかの重要な点を支援します。

  * EU VAT 税率の簡単な読み込み。

  * VAT 番号の収集と検証、および VAT 免除対象（有効な VAT 番号を持つ会社など）へのリバースチャージ。

この add-on をインストールするには、**Ultimate Multisite > Settings** に移動し、サイドバーの **Check our Add-ons** リンクをクリックします。

![Check our Add-ons リンクがある Settings ページのサイドバー](/img/config/settings-taxes-addons-link.png)

add-ons ページにリダイレクトされます。そこで **Ultimate Multisite VAT add-on** を検索してインストールできます。

<!-- スクリーンショットなし: Add-ons ページの VAT add-on タイル -->

<!-- スクリーンショットなし: VAT add-on の Install Now ダイアログ -->

次に、**Network Admin > Plugins** に移動し、その add-on をネットワーク全体で有効化します。

<!-- スクリーンショットなし: Plugins ページの VAT add-on に対する Network Activate 操作 -->

**Tax Settings タブ**に戻ると、新しいオプションが表示されます。新しい VAT ツールを有効にするには、**Enable VAT Support** オプションをオンに切り替えます。設定を**保存**するのを忘れないでください。

<!-- スクリーンショットなし: add-on 有効化後の Tax 設定にある Enable VAT Support 切り替え -->

### VAT 税率を取得する

当社の連携が追加するツールの 1 つに、EU 加盟国の税率を読み込む機能があります。これは EU VAT サポートを有効にした後、税率エディターページにアクセスすることで実行できます。

ページ下部に VAT 取得オプションが表示されます。税率タイプを選択して **Update EU VAT Rates** ボタンをクリックすると、各 EU 加盟国の税率が取得され、表に自動入力されます。その後は保存するだけです。

![税率エディター下部の Update EU VAT Rates ボタン](/img/config/tax-rates-vat-pull.png)

取得後に値を編集することもできます。必要な表の行を編集し、新しい値を保存するだけです。

### VAT 検証

VAT サポートが有効な場合、Ultimate Multisite は checkout フォームの billing address 欄の下に追加の項目を追加します。この項目は EU に所在する顧客にのみ表示されます。

<!-- スクリーンショットなし: billing address の下にあるフロントエンド checkout フォームの VAT Number 項目 -->

Ultimate Multisite はその後 VAT 番号を検証し、有効な番号として返された場合はリバースチャージの仕組みが適用され、その注文の税率は 0% に設定されます。
