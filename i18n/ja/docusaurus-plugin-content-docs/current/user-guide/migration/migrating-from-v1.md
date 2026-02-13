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

<!-- Screenshot unavailable: Plugin page showing option to replace v1 with uploaded v2 version -->

準備ができたら、**Visit the Installer to finish the upgrade** と書かれたボタンをクリックしてください。

<!-- Screenshot unavailable: Message on the top of the plugins page about updating to v2.0, with list of add-ons that need updating -->

その後、インストールウィザードページに移動し、いくつかの歓迎メッセージが表示されます。**Get Started** をクリックして次のページに進むだけです。

<!-- Screenshot unavailable: Button saying Visit the Installer to finish the upgrade -->

**Get Started** をクリックすると、Pre-install Checks_._ にリダイレクトされます。ここではシステム情報と WordPress のインストール状況が表示され、**Ultimate Multisite の要件**を満たしているかどうかが確認できます。

<!-- Screenshot unavailable: Setup Wizard welcoming page with Get Started button -->

次のステップは、Ultimate Multisite のライセンスキーを入力してプラグインを有効化することです。これにより、アドオンを含むすべての機能がサイトで利用可能になります。

<!-- Screenshot unavailable: Pre-install Checks page showing system requirements confirmation -->

キーを入力したら、**Agree & Activate** をクリックしてください。

ライセンスの有効化後、次のページで **Install** をクリックして実際のインストールを開始できます。これにより、バージョン 2.0 が機能するために必要なファイルとデータベースが自動的に作成されます。

<!-- Screenshot unavailable: License activation page with license key input and Agree and Activate button -->

## Now, the migration

マイグレーターには、マルチサイト全体をチェックして、Ultimate Multisite のデータが問題なく移行できることを確認する組み込みの安全機能があります。**Run Check** ボタンをクリックしてプロセスを開始してください。

<!-- Screenshot unavailable: Installation page showing what will be updated with Install button -->

チェックを実行した後、結果は **エラー付き** と **エラーなし** のいずれかになります。

### With Error

エラーメッセージが表示された場合は、サポートチームに連絡してエラーの修正を依頼してください。チケットを作成する際は、**エラーログを提供**してください。ログをダウンロードするか、**contact our support team** と書かれたリンクをクリックできます。右側にヘルプウィジェットが開き、事前に入力されたフィールドにエラーログが記載されます。

_**システムがエラーを検出したため、バージョン 2.0 への移行を進めることはできません。エラーが修正されるまで、ネットワークを継続するにはバージョン 1.x にロールバックしてください。**_

### Without Error

システムがエラーを検出しない場合は、成功メッセージと下部に **Migrate** ボタンが表示され、移行を進めることができます。このページでは、進行前にデータベースのバックアップを作成するように促されます。バックアップがある場合は **Migrate** をクリックしてください。

<!-- Screenshot unavailable: Migration page with Run Check button to verify data can be converted -->

<!-- Screenshot unavailable: Migration page showing success message and backup recommendation -->

これだけで完了です！

ウィザード設定を続けてロゴやネットワーク上のその他の項目を更新するか、Ultimate Multisite バージョン 2.0 のメニューと新しいインターフェースを探索するかを選択できます。ぜひお楽しみください。
