---
title: サンライズファイルエラー
sidebar_position: 12
_i18n_hash: eec4276c1954a7f93d6d71ef2b15f106
---
# Sunrise File のインストールエラー

sunrise.php ファイルは、WordPress が起動時に探す特別なファイルです。WordPress が sunrise.php ファイルを検出できるようにするには、**wp-content フォルダー** 内に配置する必要があります。

Ultimate Multisite を有効化し、スクリーンショットにあるようなセットアップウィザードを実行すると、Ultimate Multisite は sunrise.php ファイルを wp-content フォルダーにコピーしようとします。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-v6hosgLWpt.png)

ほとんどの場合、ファイルのコピーに成功し、すべてが正常に動作します。しかし、何かが正しく設定されていない場合（例：フォルダーのパーミッション）、Ultimate Multisite がファイルをコピーできない状況に直面することがあります。

Ultimo が表示するエラーメッセージを読むと、ここで起きたことが正確にわかります：**Sunrise copy failed**。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-RXS5EbirfM.png)

これを修正するには、wp-ultimo プラグインフォルダー内の sunrise.php ファイルをコピーし、wp-content フォルダーに貼り付けるだけです。これを行ったら、ウィザードページをリロードし、チェックが通るはずです。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-p6hz1I9ycl.png) いずれにせよ、将来問題が発生しないように（Ultimate Multisite だけでなく、他のプラグインやテーマでも）フォルダーのパーミッションを一般的に確認することが望ましいでしょう。

WordPress の一部である **Health Check ツール**（メインサイトの **admin panel > Tools > Health Check** からアクセスできます）は、フォルダーのパーミッションが WordPress に問題を引き起こす可能性のある値に設定されているかどうかを知らせてくれます。

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-oZEKeyxo2E.png)
