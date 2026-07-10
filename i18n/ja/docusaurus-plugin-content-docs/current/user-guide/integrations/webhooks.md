---
title: ウェブフック
sidebar_position: 15
_i18n_hash: f8456622538d07af8f5aa36c1ec19249
---
# Webhooks (v2) の概要 {#a-first-look-on-webhooks-v2}

_**注意: この機能または記事は上級ユーザー向けです。**_

**webhook** は、Ultimate Multisite のようなアプリやソフトウェアが、他のアプリケーションへリアルタイムの情報を提供する方法です。webhook は、発生したタイミングで他のアプリケーションへデータやペイロードを届けるため、**データを即座に取得できます。**

これは、イベントがトリガーされるたびに、Ultimate Multisite から別の CRM やシステムへ特定のデータを連携または渡す必要がある場合に便利です。たとえば、新しいユーザー Account が作成されるたびに、ユーザーの名前とメールアドレスをメーリングリストへ送信する必要がある場合です。

## webhook の作成方法 {#how-to-create-a-webhook}

webhook を作成するには、ネットワーク管理者 Dashboard に移動します。**Ultimate Multisite > Webhooks > 新しい Webhook を追加** をクリックします。

![Add New Webhook ボタンがある空の Webhooks 一覧ページ](/img/admin/webhooks-list-empty.png)

その後、webhook 設定を編集できます。

![名前、イベント、URL フィールドがある Add New Webhook フォーム](/img/admin/webhook-add-modal.png)

新しい webhook を作成するときは、**名前、URL、** および **イベント** などの情報を求められます。webhook には任意の名前を使用できます。最も重要なフィールドは URL とイベントです。

![URL フィールドとペイロードのプレビューを表示する webhook 編集インターフェース](/img/admin/webhook-url-field.png)

URL は、Ultimate Multisite が **ペイロードまたはデータ** を送信する **エンドポイントまたは送信先** です。これはデータを受け取るアプリケーションです。

Zapier は、ユーザーが 3rd party アプリケーションとの連携を簡単にするために使う、最も一般的なソリューションです。Zapier のようなプラットフォームがない場合は、データを受け取り処理するカスタム関数を手動で作成する必要があります。**Ultimate Multisite webhook を Zapier と一緒に使用する方法** については、この記事を参照してください。

この記事では、webhook がどのように動作するかの基本概念と、Ultimate Multisite で利用できるイベントを見ていきます。[requestbin.com](https://requestbin.com/) という 3rd party サイトを使用します。このサイトを使うと、コーディングなしでエンドポイントを作成し、ペイロードを受け取ることができます。_**免責事項: これはデータが受信されたことを表示するだけです。**_ ペイロードに対する処理や何らかのアクションは行われません。

[requestbin.com](https://requestbin.com/) に移動し、Create Request Bin をクリックします。

そのボタンをクリックすると、すでに Account を持っている場合はログイン、持っていない場合はサインアップを求められます。すでに Account がある場合は、その Dashboard に直接移動します。その Dashboard では、Ultimate Multisite webhook の作成に使用できるエンドポイントまたは URL がすぐに表示されます。

URL をコピーして、Ultimate Multisite に戻ります。エンドポイントを URL フィールドに入力し、ドロップダウンからイベントを選択します。この例では、**Payment Received** を選択します。

このイベントは、ユーザーが支払いを行うたびにトリガーされます。利用可能なすべてのイベント、その説明、ペイロードはページ下部に一覧表示されています。webhook を保存するには、**Add New Webhook** ボタンをクリックします。

![Payment Received が選択された webhook イベントのドロップダウン](/img/admin/webhook-event-picker.png)

作成した webhook が動作しているか確認するために、テストイベントをエンドポイントへ送信できるようになりました。作成した webhook の下にある **Send Test Event** をクリックして実行できます。

![設定済みの webhook 1 件と Send Test アクションを表示する Webhooks 一覧](/img/admin/webhooks-list-populated.png)

これにより、テストが成功したことを示す確認ウィンドウが表示されます。

![テストペイロード送信後の webhook テストイベント結果](/img/admin/webhook-test-result.png)

ここで _Requestbin_ サイトに戻ると、いくつかのテストデータを含むペイロードが受信されたことを確認できます。

これが webhook とエンドポイントの動作に関する基本原則です。カスタムエンドポイントを作成する場合は、Ultimate Multisite から受け取るデータを処理するためのカスタム関数を作成する必要があります。
