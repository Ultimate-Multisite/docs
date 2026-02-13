---
title: Zapier を使ってアカウントを登録する
sidebar_position: 1
_i18n_hash: b77221f8098a0280ce78f481e328f9af
---
# イベント：Zapierでアカウントを登録する

記事 [Integrating Ultimate Multisite with Zapier](zapier.md) では、Zapier を使用してトリガーとイベントに基づいて Ultimate Multisite 内でさまざまなアクションを実行する方法について説明しました。本記事では、サードパーティアプリケーションを統合する方法を示します。Google Sheets をデータソースとして使用し、情報を Ultimate Multisite に送信してアカウントを登録します。

まず、Google Drive の下に **Google Sheet** を作成する必要があります。後でデータを簡単にマッピングできるように、各列を適切に定義してください。

![Google Sheet with columns for customer data](/img/admin/webhooks-list.png)After creating a Google sheet, you can log in to your Zapier account and start creating a zap.

![Zapier dashboard to start creating a zap](/img/admin/webhooks-list.png)Under the search field for **"App event"** select **"Google Sheets"**

![Selecting Google Sheets as the app event](/img/admin/webhooks-list.png)

次に、**「Event」** フィールドで **「New spreadsheet row」** を選択し、**「Continue」** をクリックします。

![Selecting New spreadsheet row event in Zapier](/img/admin/webhooks-list.png)The next step will ask you to select a **Google Account** where the **Google Sheet** is saved. So just make sure that the right google account is specified.

![Selecting Google Account for the Google Sheet](/img/admin/webhooks-list.png)

**「Set up trigger」** では、データが取得される Google スプレッドシートとワークシートを選択し、指定する必要があります。入力して **「Continue」** をクリックしてください。

![Set up trigger with spreadsheet and worksheet selection](/img/admin/webhooks-list.png)Next is to "**test your trigger** " to make sure that your google sheet is properly connected.

![Test your trigger step in Zapier](/img/admin/webhooks-list.png)If your test is successful, you should see the result showing some values from your spreadsheets. Click "**Continue** " to proceed.

![Successful trigger test showing spreadsheet values](/img/admin/webhooks-list.png)The next step is to set up the second action that will create or register an account in Ultimate Multisite. On the search field select "**Ultimate Multisite(2.0.2)** "

![Selecting Ultimate Multisite as the action app](/img/admin/webhooks-list.png)

**「Event」** フィールドで **「Register an Account in Ultimate Multisite」** を選択し、**「Continue」** ボタンをクリックします。

![Register an Account in Ultimate Multisite action event](/img/admin/webhooks-list.png)Under "**Set up an action** ", you will see different fields available for customer data, memberships, products, etc. You can map the values under your google sheet and assign them to the proper field where they should be populated as shown in the screenshot below.

![Mapping Google Sheet values to Ultimate Multisite fields](/img/admin/webhooks-list.png)

![Testing the register account Zapier action](/img/admin/webhooks-list.png)
