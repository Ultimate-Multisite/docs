---
title: チェックアウトフォーム
sidebar_position: 19
_i18n_hash: 66bfff807dcb07f2c495741a4fa601b9
---
# チェックアウトフォーム

Checkout Formsは、新規顧客を獲得する際にさまざまなアプローチを試すための簡単で柔軟な方法です。  
Ultimate Multisite 2.0では、Checkout Formエディタを提供しており、必要に応じて任意の数のフォームを作成でき、さまざまなフィールドや提供される商品などを設定できます。  

この機能にアクセスするには、左側のサイドバーにあるCheckout Formsメニューに移動します。  

![Checkout Forms list](/img/config/checkout-forms-list.png)

このページでは、作成済みのすべてのチェックアウトフォームを確認できます。  

新しいフォームを作成したい場合は、ページ上部の **Add Checkout Form** をクリックしてください。  

開始点として、**single step**、**multi-step**、**blank** の3つのオプションから選択できます。次に、**Go to the Editor** をクリックします。  

![Checkout Form editor](/img/config/checkout-form-editor.png)

また、既存のフォームの下にあるオプションをクリックして編集または複製することもできます。そこでは、フォームのショートコードをコピーするオプションやフォームを削除するオプションも確認できます。  

![Checkout form hover actions](/img/config/checkout-form-hover-actions.png)

### チェックアウトフォームの編集

チェックアウトフォームはさまざまな目的で作成できます。この例では、登録フォームを作成します。  

チェックアウトフォームエディタに移動したら、フォームに名前（内部参照のみで使用）とスラッグ（ショートコード作成などに使用）を付けます。  

![Checkout Form editor](/img/config/checkout-form-editor.png)

フォームはステップとフィールドで構成されます。**Add New Checkout Step** をクリックして新しいステップを追加できます。  

![Add New Checkout Step](/img/config/checkout-form-add-step.png)

モーダルウィンドウの最初のタブで、フォームステップの内容を入力します。ID、名前、説明を設定します。これらの項目は主に内部で使用されます。  

![Checkout form step](/img/config/checkout-form-step.png)

次に、ステップの表示設定を行います。「Always show」「Only show for logged in users」「Only show for guests」のいずれかを選択できます。  

![Checkout form step](/img/config/checkout-form-step.png)

最後に、ステップのスタイルを設定します。これらは任意の項目です。  

![Checkout form step](/img/config/checkout-form-step.png)

次に、最初のステップにフィールドを追加します。**Add New Field** をクリックし、追加したいセクションのタイプを選択します。  

![Checkout form step with fields](/img/config/checkout-form-step.png)

各フィールドには入力すべきパラメータが異なります。最初の入力では「Username」フィールドを選択します。  

![Checkout form step](/img/config/checkout-form-step.png)

![Checkout form step](/img/config/checkout-form-step.png)

![Checkout form step](/img/config/checkout-form-step.png)

必要に応じてステップやフィールドを追加できます。顧客が選択できるように商品を表示するには、**Pricing Table** フィールドを使用します。クライアントにテンプレートを選択させたい場合は、**Template Selection** フィールドを追加します。その他も同様です。  

_**注意:** username、email、password、site title、site URL、order summary、payment、submit button はチェックアウトフォームを作成する際に必須フィールドです。_

チェックアウトフォームを作成中は、**Preview** ボタンを使用してクライアントがフォームをどのように見るか確認できます。また、既存ユーザーとしての表示と訪問者としての表示を切り替えることもできます。  

![Checkout Form save](/img/config/checkout-form-save.png)

最後に、**Advanced Options** で「Thank You」ページのメッセージを設定したり、コンバージョン追跡用のスニペットを追加したり、チェックアウトフォームにカスタム CSS を追加したり、特定の国に限定したりできます。  

![Checkout Form editor](/img/config/checkout-form-editor.png)

右側の列でこのオプションを切り替えて、チェックアウトフォームを手動で有効または無効にすることも、フォームを完全に削除することもできます。  

![Advanced Options](/img/config/checkout-form-advanced.png)

チェックアウトフォームを保存するのを忘れないでください！  

![Active toggle](/img/config/checkout-form-active.png)

フォームのショートコードを取得するには、**Generate Shortcode** をクリックし、モーダルウィンドウに表示された結果をコピーします。  

![Save button](/img/config/checkout-form-save.png)
