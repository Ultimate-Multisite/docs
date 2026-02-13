---
title: ウェブフック
sidebar_position: 15
_i18n_hash: 31948dc4c1b47114e296e95813b25348
---
# Webhooks（v2）の最初の見方

_**注意：この機能または記事は上級者向けです。**_

**webhook** は、Ultimate Multisite のようなアプリやソフトウェアが他のアプリケーションにリアルタイム情報を提供する方法です。webhook は、発生した瞬間にデータやペイロードを他のアプリケーションに送信し、つまり **すぐにデータを取得できる** ことを意味します。

イベントがトリガーされるたびに、Ultimate Multisite から別の CRM やシステムへ特定のデータを統合または転送する必要がある場合に便利です。例えば、新しいユーザーアカウントが作成されるたびに、ユーザーの名前とメールアドレスをメールリストに送信する必要があります。

## webhook の作成方法

webhook を作成するには、ネットワーク管理ダッシュボードに移動します。**Ultimate Multisite > Webhooks > Add New Webhook** をクリックします。

![Webhooks list page with Add New Webhook button](/img/admin/webhooks-list.png)

新しい webhook を作成すると、**Name、URL、Event** などの情報を入力するよう求められます。webhook の名前は好きなものを使用できます。最も重要なフィールドは URL と Event です。

![New webhook form with Name, URL, and Event fields](/img/admin/webhooks-list.png)

URL は、Ultimate Multisite が **payload またはデータ** を送信する **エンドポイントまたは宛先** です。これはデータを受信するアプリケーションです。

Zapier は、サードパーティアプリケーションとの統合を容易にするためにユーザーが最もよく使用するソリューションです。Zapier のようなプラットフォームがない場合、データをキャッチして処理するカスタム関数を手動で作成する必要があります。**Ultimate Multisite webhook を Zapier で使用する方法** に関する記事を参照してください。

この記事では、webhook の仕組みと Ultimate Multisite で利用可能なイベントの基本概念を見ていきます。私たちは [requestbin.com](https://requestbin.com/) というサードパーティサイトを使用します。このサイトは、コードを書かずにエンドポイントを作成し、ペイロードをキャッチできます。 _**免責事項：このサイトはデータが受信されたことを示すだけです。**_ ペイロードに対して処理やその他のアクションは行われません。

[requestbin.com](https://requestbin.com/) にアクセスし、Create Request Bin をクリックします。

![RequestBin website Create Request Bin button](/img/admin/webhooks-list.png)

そのボタンをクリックすると、既にアカウントをお持ちの場合はログイン、持っていない場合はサインアップを求められます。既にアカウントをお持ちの場合は、すぐにダッシュボードに移動します。ダッシュボードでは、Ultimate Multisite の webhook を作成する際に使用できるエンドポイントまたは URL がすぐに表示されます。

![RequestBin dashboard showing the endpoint URL](/img/admin/webhooks-list.png)

URL をコピーして Ultimate Multisite に戻ります。URL フィールドにエンドポイントを貼り付け、ドロップダウンからイベントを選択します。この例では、**Payment Received** を選択します。

このイベントは、ユーザーが支払いを行うたびにトリガーされます。利用可能なすべてのイベント、その説明、ペイロードはページの下部に一覧表示されています。**Add New Webhook** ボタンをクリックして webhook を保存します。

![Webhook configured with Payment Received event](/img/admin/webhooks-list.png)

作成した webhook が機能しているか確認するために、テストイベントをエンドポイントに送信できます。作成した webhook の下にある **Send Test Event** をクリックします。

![Send Test Event option under the webhook](/img/admin/webhooks-list.png)

テストが成功したことを示す確認ウィンドウが表示されます。

![Webhook test event successful confirmation](/img/admin/webhooks-list.png)

次に _Requestbin_ サイトに戻ると、ペイロードが受信され、テストデータが含まれていることが確認できます。

![RequestBin showing received webhook payload data](/img/admin/webhooks-list.png)

これが webhook とエンドポイントの動作原理です。カスタムエンドポイントを作成する場合は、Ultimate Multisite から受信したデータを処理するカスタム関数を作成する必要があります。
