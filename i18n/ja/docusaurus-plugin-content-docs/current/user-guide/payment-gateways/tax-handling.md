---
title: 税金の取り扱い
sidebar_position: 4
_i18n_hash: 087a366fc43cafff9e887f68e71e23fe
---
# 税金処理

Ultimate Multisiteには、コアプラグインに組み込まれた税金徴収モジュールがあり、プラン、パッケージ、サービスに対して売上税を徴収する必要がある場合、追加のアドオンをインストールせずに簡単に行うことができます。

ヨーロッパに拠点を置く企業向けに、**add-on**があり、VATコンプライアンスをよりよく**サポート**するツールと機能を追加します。

Ultimate Multisiteは、政府に代わって税金を申告したり納付したりしません。取引時に適切な税金を徴収するのをサポートするだけです。**あなた自身で税金を納付する必要があります。**

## 税金徴収の有効化

税金徴収はデフォルトで有効になっていません。これを有効にするには、**Ultimate Multisite > Settings > Taxes**に移動し、Enable Taxes設定を有効にするトグルを切り替えます。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-ICSEhm7yhk.png)

### 税抜き vs. 税込

デフォルトでは、すべての製品価格は税抜きです。つまり、税金は製品価格に**含まれていません**。顧客が特定の購入に対して税金を支払う必要があると判断した場合、税金を小計の**上に**追加します。

製品価格に税金を含めたい場合は、**Inclusive Tax**設定を有効にすることで実現できます。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-xiiaIXYI2c.png)

**保存**を忘れないでください。

### 

## 税率の作成

税金徴収を有効にした後、税率エディタを使用して特定の場所の税率を作成する必要があります。

税設定ページのサイドバーにある**Manage Tax Rates**ボタンをクリックすると、エディタにアクセスできます。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-UZb6g2rvrs.png)

税率エディタページで、**Add new Row**ボタンをクリックして新しい税率を追加できます。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-ZyJCSI6zLZ.png)

各税率に**title**（請求書で使用）を付ける必要があります。次に、**country**（必須）、**state**、**city**（どちらも任意）を選択し、この税が課税される場所を指定します。最後に、**tax rate in percents**（税率をパーセントで）を追加します。

### 税カテゴリ

複数のTax Categoriesを作成して、異なる種類の製品に対して異なる税率を設定することもできます。

**Add new Tax Category**をクリックし、カテゴリ名を入力して**Create**を押します。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-73biI4o8lj.png)

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-YhH2hLLvEC.png)

カテゴリを閲覧するには、**Switch**をクリックし、新しい税を追加したいカテゴリを選択します。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-xjghTq6ta4.png)

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-E5YLXeIsWH.png)

特定の製品の税カテゴリを設定するには、**Product edit page**に移動し、Taxesタブを開きます。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-vkh5NXKplU.png)

同じ画面で、**Is Taxable?**トグルをオフにすると、Ultimate Multisiteにその製品に対して税金を徴収しないように指示できます。

## 欧州VATサポート

前述のように、EUの顧客向けに、欧州のVAT規制により追加の要件がある場合に備えてアドオンを提供しています。

当社のVATツールは、以下の重要な点をサポートします：

  * EU VAT率の簡単な読み込み;

  * VAT番号の収集と検証、およびVAT免税事業者（有効なVAT番号を持つ企業など）への逆課税;

そのアドオンをインストールするには、**Ultimate Multisite > Settings**に移動し、サイドバーの**Check our Add-ons**リンクをクリックします。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-AsMyAH5HKC.png)

アドオンページにリダイレクトされます。そこで、**Ultimate Multisite VAT add-on**を検索してインストールできます。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-AQ6gWfdY5G.png)

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-iz8uncHiYa.png)

次に、**Network Admin > Plugins**に移動し、アドオンをネットワーク全体で有効化します。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-PkWGMWlgVu.png)

**Tax Settings tab**に戻ると、新しいオプションが表示されます。**Enable VAT Support**オプションをトグルして新しいVATツールを有効にします。**保存**を忘れないでください！

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-Gn1SspQZ0S.png)

### VAT税率の取得

当社の統合で追加されるツールの1つは、EU加盟国の税率を読み込む機能です。これは、EU VATサポートを有効にした後、税率エディタページを訪問することで実行できます。

ページの下部にVATプルオプションが表示されます。レートタイプを選択し、**Update EU VAT Rates**ボタンをクリックすると、各EU加盟国の税率でテーブルが自動的に埋められます。その後、保存するだけです。

### ![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-jZKEqPBX5E.png)

プル後に値を編集することもできます。行を編集し、新しい値を保存するだけです。

### VAT検証

VATサポートが有効になると、Ultimate Multisiteはチェックアウトフォームに追加フィールドを追加し、請求先住所フィールドの下に表示します。このフィールドはEUに所在する顧客にのみ表示されます。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-ITUbFOIM4r.png)

Ultimate MultisiteはVAT番号を検証し、有効であれば逆課税メカニズムが適用され、注文の税率が0％に設定されます。
