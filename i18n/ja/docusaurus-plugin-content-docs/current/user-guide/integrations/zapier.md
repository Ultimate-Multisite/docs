---
title: Zapier 統合
sidebar_position: 12
_i18n_hash: cf4bbd6dfae0fa99b3d009298cad3f19
---
# ZapierとのUltimate Multisite統合

記事の中で、[Webhooks](webhooks.md)について説明し、サードパーティアプリケーションとの統合にどのように使用できるかを説明しました。

Webhooksを使用するには、コーディングとペイロードの取得に関する高度な知識が必要であるため、少し複雑です。**Zapier**を使用すると、その問題を回避できます。

Zapierは5,000以上のアプリと統合できるため、異なるアプリケーション間の通信が容易になります。

ネットワーク上でイベントが発生したときに発火する**Triggers**（例：アカウントが作成され、account_createイベントがトリガーされる）を作成したり、外部イベントに応じてネットワーク上で**Actions**（例：Ultimate Multisiteネットワークに新しいアカウントメンバーシップを作成）を生成したりできます。

これは、**Ultimate Multisite Zapierのトリガー**とアクションが[REST API](https://developer.ultimatemultisite.com/api/docs/)によって動作しているため可能です。

## How to start

まず、Zapierのアプリ一覧でUltimate Multisiteを検索します。あるいは、[このリンク](https://zapier.com/apps/wp-ultimo/integrations)をクリックしても構いません。

ダッシュボードに移動し、左側のサイドバーにある **+** **Create Zap** ボタンを押して新しいZapを設定します。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-kyu5ufUXOv.png)

Zap作成ページにリダイレクトされます。

検索ボックスに「wp ultimo」と入力し、**Beta**バージョンオプションを選択します。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-BrOYbp7dSE.png)

アプリを選択したら、利用可能なイベントとして **New Ultimate Multisite Event** を選択します。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-srblXqJnQE.png)

次に、Zapierに**あなたのネットワーク**へのアクセス権を付与する必要があります。**Sign in**をクリックすると、**API credentials**が必要な新しいウィンドウが開きます。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-HcULsQoFpZ.png)

ネットワーク管理パネルに移動し、**Ultimate Multisite > Settings** > **API & Webhooks**に移動して、API Settingsセクションを探します。

**Enable API**オプションを選択します。これは接続を機能させるために必要です。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-l7KbeKUkPX.png)

API KeyとAPI Secretフィールドの**Copy to Clipboard**アイコンを使用して、値をコピーし、統合画面に貼り付けます。

URLフィールドには、プロトコル（HTTPまたはHTTPS）を含むネットワークの完全なURLを入力します。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-4UVPQAlzYk.png)

**Yes, Continue**ボタンをクリックして次のステップに進みます。すべてが正常に動作すれば、新しく接続されたアカウントが表示されます。**Continue**をクリックして新しいトリガーを作成します。

## How to create a new Trigger

アカウントが接続されたので、利用可能なイベントが表示されます。このチュートリアルでは **payment_received** イベントを選択します。

イベントを選択し、**continue**をクリックすると、**test step**が表示されます。

この段階で、ZapierはZapがそのイベントに対して**特定のペイロードを取得できるか**をテストします。同じタイプの将来のイベントでは、同じ構造の情報が送信されます。

このチュートリアルでは、テストは**正常に完了**し、ペイロード例情報を返しました。この例情報は、アクションを作成する際に役立ちます。トリガーは作成され、他のアプリケーションに接続できるようになりました。

## How to create Actions

アクションは、他のトリガーからの情報を使用してネットワークに新しいエントリを作成します。

**creating an action step**では、Ultimate Multisite **Beta**と**Create Items on Ultimate Multisite**オプションを選択します。

次のステップでは、**How to start**で行ったように認証を作成するか、既存の認証を選択します。このチュートリアルでは、以前に作成した認証を選択します。

### Setting up the Action

これは**アクションのメインステップ**であり、ここでは少し異なります。最初に選択する情報は**Item**です。Itemは、**Customers、Payments、Sites、Emails**など、ネットワークの**情報モデル**です。

アイテムを選択すると、フォームは選択したアイテムに必要な必須フィールドとオプションフィールドを**再配置**します。

たとえば、アイテム**Customer**を選択すると、フォームフィールドはネットワークに新しいCustomerを作成するために必要なすべての項目を表示します。

**required**とマークされたすべてのフィールドを入力し、continueをクリックすると、最後の画面に入力済みのフィールドと未入力のフィールドが表示されます。

テストが完了し成功すると、アクションは設定されます。アクションのテストでアイテムが作成されたかどうかをネットワークで確認することも重要です。
