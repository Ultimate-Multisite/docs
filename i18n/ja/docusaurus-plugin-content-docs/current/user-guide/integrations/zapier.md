---
title: Zapier 連携
sidebar_position: 12
_i18n_hash: 7f23136e0e69417e244a9930f9620e95
---
# Ultimate Multisite と Zapier の連携

別の記事では、[Webhooks](webhooks.md) と、それを 3rd party アプリケーションとの連携に使う方法について説明しました。

webhooks の使用は、コーディングや payload の取得に関する高度な知識が必要なため、少し複雑です。**Zapier** を使うと、その手間を回避できます。

Zapier は 5000 以上のアプリと連携しており、異なるアプリケーション間の通信を簡単にします。

ネットワーク上でイベントが発生したときに実行される **Triggers** を作成したり（例: アカウントが作成され、account_create イベントがトリガーされる）、外部イベントに反応してネットワーク上で **Actions** を生成したりできます（例: Ultimate Multisite ネットワークに新しいアカウントの membership を作成する）。

これは、**Ultimate Multisite Zapier の triggers** と actions が [REST API](https://developer.ultimatemultisite.com/api/docs/) によって動作しているため可能です。

## 始め方 {#how-to-start}

まず、Zapier のアプリ一覧で Ultimate Multisite を検索します。別の方法として、[このリンク](https://zapier.com/apps/wp-ultimo/integrations) をクリックすることもできます。

Dashboard に移動し、左サイドバーの **+** **Create Zap** ボタンを押して、新しい Zap を設定します。

![Create Zap ボタンがある Zapier Dashboard](/img/admin/webhooks-list.png)

Zap 作成ページにリダイレクトされます。

検索ボックスに「wp ultimo」と入力します。クリックして **Beta** バージョンのオプションを選択します。

![Zapier アプリ一覧で WP Ultimo を検索](/img/admin/webhooks-list.png)

アプリを選択したら、利用可能なイベント **New Ultimate Multisite Event** を選択します。

![New Ultimate Multisite Event trigger を選択](/img/admin/webhooks-list.png)

次に、Zapier に **あなたのネットワーク** へのアクセスを許可する必要があります。**Sign in** をクリックすると、**API credentials** を求める新しいウィンドウが開きます。

![API credentials 用の Zapier Sign in プロンプト](/img/admin/webhooks-list.png)

ネットワーク管理パネルに移動し、**Ultimate Multisite > Settings** > **API & Webhooks** に進み、API Settings セクションを探します。

この接続を機能させるために必要なので、**Enable API** オプションを選択します。

![API Settings と Enable API オプションがある API and Webhooks 設定](/img/admin/settings-api-webhooks.png)

API Key と API Secret フィールドの **Copy to Clipboard** アイコンを使用し、その値を連携画面に貼り付けます。

URL フィールドには、プロトコル（HTTP または HTTPS）を含むネットワークの完全な URL を入力します。

![API Key、Secret、URL フィールドがある Zapier 連携画面](/img/admin/webhooks-list.png)

**Yes, Continue** ボタンをクリックして次の手順へ進みます。すべて正常に動作すれば、新しく接続されたアカウントが表示されます。**Continue** をクリックして新しい trigger を作成します。

## 新しい Trigger の作成方法 {#how-to-create-a-new-trigger}

アカウントが接続されたので、利用可能なイベントを確認できます。このチュートリアルでは **payment_received** イベントを選択します。

![Zapier trigger で payment_received イベントを選択](/img/admin/webhooks-list.png)

イベントを選択して **continue** をクリックすると、**test step** が表示されます。

![trigger 用の Zapier test step](/img/admin/webhooks-list.png)

この段階で、Zapier は Zap が **そのイベントに対応する特定の payload を取得できるか** をテストします。同じ種類の今後のイベントでは、この同じ構造の情報が送信されます。

![payload とともに Zapier trigger のテストが正常に完了](/img/admin/webhooks-list.png)

このチュートリアルでは、テストは **正常に完了** し、payload のサンプル情報が返されました。このサンプル情報は、actions を作成するときの参考になります。これで trigger が作成され、他のアプリケーションに接続できる状態になりました。

## Actions の作成方法 {#how-to-create-actions}

Actions は、他の triggers からの情報を使用して、ネットワークに新しい項目を作成します。

**action 作成手順** では、Ultimate Multisite **Beta** と **Create Items on Ultimate Multisite** のオプションを選択します。

![Create Items on Ultimate Multisite で action を作成](/img/admin/webhooks-list.png)

次の手順では、**始め方** で行ったように認証を作成するか、作成済みの認証を選択します。このチュートリアルでは、以前に作成した同じ認証を選択します。

![Zapier action 用の認証を選択](/img/admin/webhooks-list.png)

### Action の設定 {#setting-up-the-action}

これは **action の主要な手順** で、ここでは少し内容が異なります。最初に選択する情報は **Item** です。Item は、**Customers、Payments、Sites、Emails** など、ネットワークの **情報モデル** です。

![Zapier action 用の Item タイプを選択](/img/admin/webhooks-list.png)

item を選択すると、フォームは選択した item に必要なフィールドと任意のフィールドを表示するように **再配置** されます。

たとえば、item **Customer** を選択すると、ネットワークに新しい Customer を作成するために入力が必要なものがフォームフィールドにすべて表示されます。

![Zapier action 設定の Customer item フィールド](/img/admin/webhooks-list.png)

**required** としてマークされたすべてのフィールドに入力して continue をクリックすると、最後の画面に、入力済みのフィールドと未入力のまま残されたフィールドが表示されます。

![入力済みおよび未入力フィールドを示す Zapier action テスト](/img/admin/webhooks-list.png)

テストが完了して成功すると、action の設定は完了です。また、action のテストで item が作成されたかどうかをネットワーク上で確認することも重要です。
