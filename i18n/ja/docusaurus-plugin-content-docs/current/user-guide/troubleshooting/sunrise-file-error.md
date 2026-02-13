---
title: サンライズファイルエラー
sidebar_position: 12
_i18n_hash: eec4276c1954a7f93d6d71ef2b15f106
---
# Sunrise File のインストールエラー

sunrise.php ファイルは、WordPress が起動時に探す特別なファイルです。WordPress が sunrise.php ファイルを検出できるようにするには、**wp-content フォルダー** 内に配置する必要があります。

Ultimate Multisite を有効化し、スクリーンショットにあるようなセットアップウィザードを実行すると、Ultimate Multisite は sunrise.php ファイルを wp-content フォルダーにコピーしようとします。

<!-- Screenshot unavailable: Setup wizard page showing sunrise.php installation step -->

ほとんどの場合、ファイルのコピーに成功し、すべてが正常に動作します。しかし、何かが正しく設定されていない場合（例：フォルダーのパーミッション）、Ultimate Multisite がファイルをコピーできない状況に直面することがあります。

Ultimo が表示するエラーメッセージを読むと、ここで起きたことが正確にわかります：**Sunrise copy failed**。

<!-- Screenshot unavailable: Error message showing Sunrise copy failed -->

これを修正するには、wp-ultimo プラグインフォルダー内の sunrise.php ファイルをコピーし、wp-content フォルダーに貼り付けるだけです。これを行ったら、ウィザードページをリロードし、チェックが通るはずです。

<!-- Screenshot unavailable: File manager showing sunrise.php inside wp-ultimo plugin folder --> In any case, this might warrant a general check of your folder permissions to avoid having problems in the future (not only with Ultimate Multisite but with other plugins and themes as well).

WordPress の一部である **Health Check ツール**（メインサイトの **admin panel > Tools > Health Check** からアクセスできます）は、フォルダーのパーミッションが WordPress に問題を引き起こす可能性のある値に設定されているかどうかを知らせてくれます。

<!-- Screenshot unavailable: WordPress Health Check tool showing folder permissions status -->
