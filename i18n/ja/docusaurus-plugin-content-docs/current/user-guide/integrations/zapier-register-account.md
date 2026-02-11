---
title: Zapier を使ってアカウントを登録する
sidebar_position: 1
_i18n_hash: b77221f8098a0280ce78f481e328f9af
---
# イベント：Zapierでアカウントを登録する

記事 [Integrating Ultimate Multisite with Zapier](zapier.md) では、Zapier を使用してトリガーとイベントに基づいて Ultimate Multisite 内でさまざまなアクションを実行する方法について説明しました。本記事では、サードパーティアプリケーションを統合する方法を示します。Google Sheets をデータソースとして使用し、情報を Ultimate Multisite に送信してアカウントを登録します。

まず、Google Drive の下に **Google Sheet** を作成する必要があります。後でデータを簡単にマッピングできるように、各列を適切に定義してください。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-7wnYotvYtO.png)Google Sheet を作成したら、Zapier アカウントにログインして zap の作成を開始できます。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-C0khOzCSCF.png)**「App event」** の検索フィールドで **「Google Sheets」** を選択します。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-Cj2rk0zpOO.png)

次に、**「Event」** フィールドで **「New spreadsheet row」** を選択し、**「Continue」** をクリックします。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-Y6z9NX6HAn.png)次のステップでは、**Google Sheet** が保存されている **Google アカウント** を選択するよう求められます。正しい Google アカウントが指定されていることを確認してください。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-536o0FgLI1.png)

**「Set up trigger」** では、データが取得される Google スプレッドシートとワークシートを選択し、指定する必要があります。入力して **「Continue」** をクリックしてください。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-4juCX9m6M2.png)次に、**「test your trigger」** を実行して、Google Sheet が正しく接続されていることを確認します。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-E1RjprMVNM.png)テストが成功すると、スプレッドシートのいくつかの値が表示されます。**「Continue」** をクリックして進みます。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-FNVMJRdoBs.png)次のステップは、Ultimate Multisite でアカウントを作成または登録する第二のアクションを設定することです。検索フィールドで **「Ultimate Multisite(2.0.2)」** を選択します。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-bbSevglDSJ.png)

**「Event」** フィールドで **「Register an Account in Ultimate Multisite」** を選択し、**「Continue」** ボタンをクリックします。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-DZTN6Hno0w.png)**「Set up an action」** では、顧客データ、メンバーシップ、製品などのさまざまなフィールドが表示されます。Google Sheet の値をマッピングし、適切なフィールドに割り当てることができます。以下のスクリーンショットに示すように。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-c1ozo05Uam.png)値をマッピングしたら、アクションをテストできます。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-UKI9kdBjIc.png)
