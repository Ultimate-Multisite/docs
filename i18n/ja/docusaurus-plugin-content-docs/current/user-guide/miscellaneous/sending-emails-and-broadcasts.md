---
title: メール送信とブロードキャスト
sidebar_position: 11
_i18n_hash: 2c58b558fa68e4dd6e81bec971d52536
---
# メール送信とブロードキャスト (v2)

_**重要なお知らせ：この記事はUltimate Multisiteバージョン2.xを対象としています。**_

Ultimate Multisiteには、ターゲットユーザーまたはユーザーグループにメールを送信し、管理ダッシュボードに通知を表示してアナウンスをブロードキャストする機能があります。

## ブロードキャストで顧客のダッシュボードに管理通知を追加する

Ultimate Multisiteのブロードキャスト機能を使用すると、ユーザーのサブサイト管理ダッシュボードに **管理通知** を追加できます。

システムメンテナンスや既存ユーザーへの新製品・サービスの提供などのアナウンスを行う際に非常に便利です。以下は、ユーザーのダッシュボードに表示される管理通知の例です。

![Admin notice broadcast shown on customer dashboard](/img/admin/broadcasts-list.png)

管理通知を開始するには、ネットワーク管理ダッシュボードに移動し、**Ultimate Multisite** メニューの下に **Broadcasts** オプションがあります。

![Broadcasts menu in Ultimate Multisite admin](/img/admin/broadcasts-list.png)

このページから、上部にある **Add Broadcast** ボタンをクリックします。

これにより、送信したいブロードキャストの種類を選択できる Add broadcast モーダルウィンドウが表示されます。

**Message** を選択し、**Next Step** ボタンをクリックします。

![Add broadcast modal with Message type selected](/img/admin/broadcasts-list.png)

次のウィンドウでは、**Target customer** または **Target product** を選択します。複数のユーザーまたは複数の製品を選択できます。

ユーザーアカウントまたは製品を検索するには、フィールド内にキーワードを入力します。

**Message type** フィールドで通知の色を選択できます。これにより、メッセージの緊急性が強調されます。

その後、**Next Step** をクリックします。

![Target customer and product selection for broadcast](/img/admin/broadcasts-list.png)

次のウィンドウでは、件名とブロードキャストしたい内容/メッセージを入力してメッセージを作成できます。

![Broadcast message subject and content editor](/img/admin/broadcasts-list.png)

メッセージを作成したら、**Send** ボタンをクリックします。

これで完了です。管理通知はすぐにユーザーのダッシュボードに表示されます。

## 顧客にメールを送信する

Ultimate Multisiteのブロードキャスト機能を使用すると、ユーザーにメールを送信できます。メールを特定のユーザーにのみ送信するか、サブスクライブしている製品やプランに基づいて特定のユーザーグループをターゲットにするオプションがあります。

メールブロードキャストを開始するには、ネットワーク管理ダッシュボードに移動し、Ultimate Multisite メニューの下に **Broadcast** オプションがあります。

![Broadcasts page in Ultimate Multisite admin](/img/admin/broadcasts-list.png)

このページから、上部にある **Add broadcast** ボタンをクリックします。

これにより、送信したいブロードキャストの種類を選択できる Add broadcast モーダルウィンドウが表示されます。**Email** を選択し、**Next Step** ボタンをクリックします。

![Add broadcast modal with Email type selected](/img/admin/broadcasts-list.png)

次のウィンドウでは、**Target customer** または **Target product** を選択します。複数のユーザーまたは複数の製品を選択できます。

ユーザーアカウントまたは製品を検索するには、フィールド内にキーワードを入力します。

ターゲットオーディエンスを選択したら、**Next Step** をクリックします。

![Target customer and product selection for email broadcast](/img/admin/broadcasts-list.png)

次のウィンドウでは、件名とユーザーに送信したい内容/メッセージを入力してメールを作成できます。

![Email broadcast subject and content editor](/img/admin/broadcasts-list.png)

メッセージを作成したら、**Send** ボタンをクリックします。

これで、ブロードキャスト機能を使ってエンドユーザーにメールを送信するのがどれほど簡単かが分かります。

## システムメール

Ultimate Multisite のシステムメールは、登録、支払い、ドメインマッピングなどの特定のアクション後にシステムから送信される **自動通知** です。これらのメールは Ultimate Multisite の設定から編集または変更できます。また、別の Ultimate Multisite インストールから既存の設定をリセットしてインポートできる機能も備えています。

### リセットとインポート

新しい Ultimate Multisite バージョンやアドオンは、時折新しいメールを登録します。

競合やその他の問題を防ぐために、**新しいメールテンプレートをシステムメールとして自動的に追加しません**。ただし、特定の機能の正しい動作に不可欠な場合は除きます。

ただし、スーパ管理者とエージェントはインポーター ツールを使用して新しく登録されたメールをインポートできます。このプロセスにより、新しいメールテンプレートの内容と設定を持つ新しいシステムメールが作成され、スーパ管理者は必要に応じて変更したり、そのままにしたりできます。

#### システムメールのインポート方法

Ultimate Multisite の設定ページに移動し、**メール** タブへ進みます。

![Emails tab in Ultimate Multisite settings](/img/config/settings-emails.png)

サイドバーで **カスタマイズシステムメール** ボタンをクリックします。

![Customize System Emails button on sidebar](/img/config/settings-emails.png)

システムメールページの上部に **リセット & インポート** アクションボタンが表示されます。このボタンをクリックすると、インポートとリセットのモーダルウィンドウが開きます。

![Reset and Import action button on System Emails page](/img/config/settings-emails.png)

次に、Import Emails オプションを切り替えて、インポート可能なシステムメールを確認します。

![Import Emails options showing available system emails](/img/config/settings-emails.png)

#### システムメールのリセット

別のケースでは、あるメールテンプレートに加えた変更がもう機能しなくなり、**デフォルト状態** にリセットしたいと感じることがあります。

そのような場合、2 つの選択肢があります。システムメールを単に削除して再インポートする（上記の手順を使用）方法がありますが、送信メトリクスやその他の情報が消去されるため、この方法はあまり推奨されません。

または、**リセット & インポート** ツールを使用してメールテンプレートをリセットできます。

メールテンプレートをリセットするには、上記の手順に従い Reset & Import ツールに到達したら、**Reset** オプションを切り替えて、デフォルトコンテンツにリセットしたいメールを選択します。

![Reset option to restore email templates to defaults](/img/config/settings-emails.png)
