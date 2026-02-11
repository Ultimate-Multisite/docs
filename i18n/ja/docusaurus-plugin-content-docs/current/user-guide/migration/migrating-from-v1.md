---
title: V1からの移行
sidebar_position: 17
_i18n_hash: ab3379eeae93ce385ad01c599fc181cb
---
# V1からの移行

## Ultimate Multisiteは、元々の1.xシリーズから2.xシリーズへ移行しました。

Ultimate Multisite バージョン 2.0 以降はコードベースが完全に書き直されており、旧バージョンと新バージョンの間で共有されるものはほとんどありません。そのため、1.x から 2.x へアップグレードする際は、データを新バージョンが理解できる形式に移行する必要があります。

幸いなことに、Ultimate Multisite 2.0+ には、コアに組み込まれた **マイグレーター** があり、旧バージョンのデータを検出して新しい形式に変換できます。このマイグレーションは、バージョン 2.0+ の **Setup Wizard** 実行中に行われます。

このレッスンでは、マイグレーターの動作、失敗時の対処方法、およびプロセス中に発生する可能性のある問題のトラブルシューティングについて説明します。

_**重要: バージョン 1.x から 2.0 へアップグレードを開始する前に、サイトデータベースのバックアップを作成してください**_

## First steps

最初のステップは、プラグインの .zip ファイルをダウンロードし、ネットワーク管理ダッシュボードにバージョン 2.0 をインストールすることです。

バージョン 2.0 を [インストールして有効化](../getting-started/installing-ultimate-multisite.md) すると、システムは自動的にマルチサイトがレガシーバージョンで動作していることを検出し、プラグインページの上部にこのメッセージが表示されます。

_**注意:** マルチサイトに Ultimate Multisite 1.x がインストールされている場合、ダウンロードしたバージョンに置き換えるオプションがあります。**Replace current with uploaded** をクリックしてください。_

![プラグインページの上部に表示されるメッセージ：Ultimate Multisite バージョン 2.0 へのアップデートありがとうございます。下にあるリンクからバージョンアップグレーダーにアクセスできます。その後、更新が必要なアドオンのリストが表示されます。](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-4E9kAFlcb5.png)

準備ができたら、**Visit the Installer to finish the upgrade** と書かれたボタンをクリックしてください。

![赤枠で囲まれたボタン：インストーラーを訪問してアップグレードを完了する](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-BnJrjt7Drw.png)

その後、インストールウィザードページに移動し、いくつかの歓迎メッセージが表示されます。**Get Started** をクリックして次のページに進むだけです。

![Setup Wizard の歓迎ページ。右下に赤枠で囲まれた Get Started ボタン。](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-1dvRbsEnrN.png)

**Get Started** をクリックすると、Pre-install Checks_._ にリダイレクトされます。ここではシステム情報と WordPress のインストール状況が表示され、**Ultimate Multisite の要件**を満たしているかどうかが確認できます。

![Pre-install Checks ページ。インストールが Ultimate Multisite の要件を満たしていることを確認するメッセージが表示されます。右下に赤枠で囲まれた Go to the next step ボタン。](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-i0SwDNkaEO.png)

次のステップは、Ultimate Multisite のライセンスキーを入力してプラグインを有効化することです。これにより、アドオンを含むすべての機能がサイトで利用可能になります。

![ライセンス有効化ページ。サポートに含まれる内容と含まれない内容が一覧表示されます。下部にプラグインのライセンスを入力するボックスがあります。右下に赤枠で囲まれた Agree and activate ボタン。](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-QAwmR9oLQL.png)

キーを入力したら、**Agree & Activate** をクリックしてください。

ライセンスの有効化後、次のページで **Install** をクリックして実際のインストールを開始できます。これにより、バージョン 2.0 が機能するために必要なファイルとデータベースが自動的に作成されます。

![インストールページ。Ultimate Multisite が機能するために更新される内容が表示されます。右下に赤枠で囲まれた Install ボタン。](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-FCyBH12y4d.png)

## Now, the migration

マイグレーターには、マルチサイト全体をチェックして、Ultimate Multisite のデータが問題なく移行できることを確認する組み込みの安全機能があります。**Run Check** ボタンをクリックしてプロセスを開始してください。

![Migration ページ。v1 のすべてのデータが変換可能かどうかを確認するチェックを実行します。右下に赤枠で囲まれた Run check ボタン。](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-vXLXFLjogz.png)

チェックを実行した後、結果は **エラー付き** と **エラーなし** のいずれかになります。

### With Error

エラーメッセージが表示された場合は、サポートチームに連絡してエラーの修正を依頼してください。チケットを作成する際は、**エラーログを提供**してください。ログをダウンロードするか、**contact our support team** と書かれたリンクをクリックできます。右側にヘルプウィジェットが開き、事前に入力されたフィールドにエラーログが記載されます。

_**システムがエラーを検出したため、バージョン 2.0 への移行を進めることはできません。エラーが修正されるまで、ネットワークを継続するにはバージョン 1.x にロールバックしてください。**_

### Without Error

システムがエラーを検出しない場合は、成功メッセージと下部に **Migrate** ボタンが表示され、移行を進めることができます。このページでは、進行前にデータベースのバックアップを作成するように促されます。バックアップがある場合は **Migrate** をクリックしてください。

![Migration ページ。成功メッセージとバックアップ作成の推奨が表示されます。](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-T5ELIgTX5a.png)

![右下に赤枠で囲まれた Migrate ボタン。](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-Y2AfV93rpf.png)

これだけで完了です！

ウィザード設定を続けてロゴやネットワーク上のその他の項目を更新するか、Ultimate Multisite バージョン 2.0 のメニューと新しいインターフェースを探索するかを選択できます。ぜひお楽しみください。
