---
title: Zapier経由でAccountを登録
sidebar_position: 1
_i18n_hash: f452b2407a1eee1d88505abe1cff8f9e
---
# イベント: Zapier で Account を登録する {#event-register-an-account-via-zapier}

記事 [Ultimate Multisite と Zapier の連携](zapier.md) では、トリガーやイベントに基づいて Ultimate Multisite 内でさまざまな操作を実行するために Zapier を使う方法を説明しました。この記事では、サードパーティアプリケーションを連携する方法を紹介します。データの取得元として Google スプレッドシートを使い、その情報を Ultimate Multisite に送信して Account を登録します。

Zapier に接続する前に、**Ultimate Multisite > 設定 > API と Webhooks** に移動し、API が有効になっていることを確認してください。Zapier が Ultimate Multisite の Account 認証情報を求めたら、この画面から API キーと API シークレットをコピーします。

![API キー、API シークレット、API 有効化オプションを含む API と Webhooks の設定](/img/admin/settings-api-webhooks.png)

まず、Google Drive 内に **Google スプレッドシート**を作成する必要があります。後でデータを簡単にマッピングできるように、各列を適切に定義してください。

Google スプレッドシートを作成したら、Zapier の Account にログインして zap の作成を開始できます。

**「アプリイベント」**の検索フィールドで **「Google Sheets」** を選択します。


次に、**「イベント」**フィールドで **「新しいスプレッドシート行」**を選択し、**「続行」**を押します。

次の手順では、**Google Sheet** が保存されている **Google Account** を選択するよう求められます。正しい Google Account が指定されていることを確認してください。


**「トリガーを設定」**で、データの取得元として使用する Google スプレッドシートとワークシートを選択して指定する必要があります。必要事項を入力し、**「続行」**を押してください。

次に、Google スプレッドシートが正しく接続されていることを確認するために、**「トリガーをテスト」**します。

テストが成功すると、スプレッドシートのいくつかの値を含む結果が表示されます。続行するには **「続行」**をクリックします。

次の手順では、Ultimate Multisite で Account を作成または登録する 2 つ目のアクションを設定します。検索フィールドで **「Ultimate Multisite(2.0.2)」**を選択します。


**「イベント」**フィールドで、**「Ultimate Multisite で Account を登録」**を選択し、**「続行」**ボタンをクリックします。

**「アクションを設定」**では、顧客データ、メンバーシップ、商品などに使用できるさまざまなフィールドが表示されます。下のスクリーンショットに示すように、Google スプレッドシートの値をマッピングし、入力されるべき適切なフィールドに割り当てることができます。


値をマッピングしたら、アクションをテストできます。
