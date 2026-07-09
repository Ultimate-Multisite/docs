---
title: サイトテンプレートでの自動検索と置換
sidebar_position: 8
_i18n_hash: 0842f53505d24579010d91568e06ef68
---
# サイトテンプレートでの自動検索と置換（v2） {#auto-search-and-replace-in-site-templates-v2}

_**このチュートリアルには WP UItimo バージョン 2.x が必要です。**_

Ultimate Multisite の最も強力な機能のひとつは、登録フォームに任意のテキスト、色、選択フィールドを追加できることです。そのデータを取得したら、選択されたサイトテンプレートの特定部分の内容を事前入力するために使用できます。その後、新しいサイトが公開されると、Ultimate Multisite は登録時に入力された実際の情報でプレースホルダーを置き換えます。

たとえば、プレースホルダーを使ってテンプレートサイトを作成できます。プレースホルダーは二重波括弧で囲んで追加してください - {{placeholder_name}}。

その後、そのデータを取得するために一致する登録フィールドを追加するだけです。

顧客は登録時にそのフィールドへ入力できるようになります。

Ultimate Multisite は、顧客が提供したデータでプレースホルダーを自動的に置き換えます。

## **「プレースホルダーだらけのテンプレート」問題の解決** {#solving-the-template-full-of-placeholders-problem}

これは便利ですが、見た目のよくない問題も起こります。顧客が訪問できるサイトテンプレートが、意味の分かりにくいプレースホルダーだらけになってしまうのです。

これを解決するために、プレースホルダーにダミー値を設定するオプションを用意しています。顧客がテンプレートサイトを訪問している間、それらの値を使って内容を検索し、置換します。

テンプレートのプレースホルダーエディターには、**Ultimate Multisite > Settings > Sites** に移動し、Site Template Options エリアまでスクロールして、**Edit Placeholders** リンクをクリックするとアクセスできます。

![Sites 設定ページの Site Template Options エリア](/img/config/settings-sites-templates-section.png)

これにより、プレースホルダーの内容エディターに移動します。そこでプレースホルダーとそれぞれの内容を追加できます。

![テンプレートプレースホルダーエディターの入口](/img/config/settings-sites-templates-section.png)
