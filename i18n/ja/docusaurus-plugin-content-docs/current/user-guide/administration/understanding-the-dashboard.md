---
title: ダッシュボードの理解
sidebar_position: 7
_i18n_hash: 4869a2f03eb529c49c821a22eb6b9647
---
# Ultimate Multisite ダッシュボードの理解

Ultimate Multisite のより高度な設定オプションや運用面に没頭する前に、ダッシュボードを見てみましょう。

多くの WordPress プラグインと同様に、Ultimate Multisite は **Ultimate Multisite** というネットワークレベルのメニュー項目を作成し、その下に複数のサブメニュー項目を配置します。

## ネットワークダッシュボードウィジェット

Ultimate Multisite はネットワークレベルのダッシュボードにいくつかの便利なウィジェットを挿入します。このダッシュボードは **My Sites → Network Admin → Dashboard** を辿ることで見つけることができます。ウィジェットはネットワーク管理者が情報や一般的な操作に簡単にアクセスできるように設計されています。

![Network Dashboard with Ultimate Multisite widgets](/img/admin/network-dashboard-full.png)

### First Steps

![First Steps widget](/img/admin/network-dashboard-first-steps.png)

このウィジェットは Ultimate Multisite の新規インストール時に表示され、ネットワーク管理者に支払方法の設定やテストアカウントの作成など、追加のタスクを完了するよう促します。

### Summary

![Summary widget](/img/admin/network-dashboard-summary.png)

Summary ウィジェットは、当日のサインアップ数とその収益を報告します。MRR（Monthly Recurring Revenue）は、収益を生むメンバーシップを持つ顧客全体の予測総額を示します。

### Activity Stream

![Activity Stream widget](/img/admin/network-dashboard-activity-stream.png)

このウィジェットは Ultimate Multisite 全体のイベントを報告します。イベントにはサインアップ、キャンセル、サイト作成、削除、その他の活動が含まれます。

詳細な説明については、ドキュメントの Events セクションをご参照ください。

### Right Now

![Right Now widget](/img/admin/network-dashboard-right-now.png)

このユーティリティウィジェットは、ネットワーク内のユーザーとサイトの簡潔な概要を表示します。

上部の便利なショートカットにより、ワンクリックで新しいサイトやユーザーを作成できます。

### News and Discussions

![News and Discussions widget](/img/admin/network-dashboard-news.png)

このウィジェットは最新の Ultimate Multisite ニュースを取得して表示します。更新、重大なバグ、セキュリティ修正に関する情報を得るために、このウィジェットを注視してください。

## Ultimate Multisite ダッシュボード

ネットワークレベルのダッシュボードがネットワーク全体の包括的情報を提示するのに対し、Ultimate Multisite ダッシュボード（Ultimate Multisite メニューのトップレベルに位置）はサービスに関する情報を提示します。

![Ultimate Multisite Dashboard](/img/admin/um-dashboard-top.png)

### Monthly Recurring Revenue Growth

MRR（Monthly Recurring Revenue）チャートは、12か月のカレンダー期間にわたる収益の月別内訳を表示します。

![MRR Growth chart](/img/admin/um-dashboard-mrr.png)

新規収益は青で追跡され、キャンセルは赤で反映されます。

### Date-range Support

顧客数や活動量に応じて統計が圧倒的になることがあります。ダッシュボードに組み込まれた日付範囲サポートにより、ネットワーク管理者は必要な情報と期間だけに集中できます。

![Date range selector and stats](/img/admin/um-dashboard-date-range.png)

日付範囲は、以下のウィジェットが表示する情報の期間を制御します。収益、新規メンバーシップ、国別サインアップ、フォーム別サインアップ、最も訪問されたサイトなどが含まれます。

![Dashboard statistics widgets](/img/admin/um-dashboard-stats.png)

:::tip
**Most Visited Sites** ウィジェットを機能させるには、**Ultimate Multisite → Settings → Sites → Enable Visits Limitation and Counting** で訪問カウントを有効にしてください。
:::
