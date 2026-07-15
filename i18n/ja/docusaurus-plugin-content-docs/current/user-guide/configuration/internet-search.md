---
title: インターネット検索
sidebar_position: 26
_i18n_hash: e0c88931760a1b490767e39aad86c70f
---
# インターネット検索

Gratis AI Agent v1.5.0 には、会話中にAIアシスタントがウェブから最新情報を取得できる**インターネット検索**機能が追加されました。この機能は、[Brave Search API](https://brave.com/search/api/) または [Tavily API](https://tavily.com/) によって実現されています。

## 仕組み {#how-it-works}

インターネット検索を有効にすると、アシスタントは、質問が最新情報や外部情報（例：最近のニュース、リアルタイムの価格、モデルの学習が終了した後に変更された可能性のあるドキュメントなど）を必要とすると判断した場合、設定された検索プロバイダーに自動的にクエリを送信できます。

取得された結果はリアルタイムで返され、アシスタントが応答を生成する前にそのコンテキストに組み込まれます。アシスタントは、検索結果を利用して質問に回答したかどうかを明示します。

## インターネット検索の有効化 {#enabling-internet-search}

インターネット検索を利用するには、選択した検索プロバイダーからAPIキーが必要です。設定手順は以下の通りです。

1. **Gratis AI Agent → Settings → Advanced** に移動します。
2. **Internet Search Provider** のドロップダウンから、**Brave Search** または **Tavily** を選択します。
3. 対応するフィールドにAPIキーを入力します。各フィールドの隣にサインアップリンクが表示されます。
4. **Save Settings** をクリックします。

キーを保存すると、インターネット検索機能が自動的にアシスタントで利用可能になります。

## Brave Search {#brave-search}

### Brave Search APIキーの取得方法 {#obtaining-a-brave-search-api-key}

1. [Brave Search APIページ](https://brave.com/search/api/) にアクセスします。
2. プランにサインアップします。月間のリクエスト制限付きで無料枠が利用できます。
3. Brave Search開発者ダッシュボードからAPIキーをコピーします。
4. Gratis AI Agentの設定にある **Brave Search API Key** フィールドに貼り付けます。

### 利用制限 {#usage-limits}

利用料金は、実行されたクエリ数に基づいてBrave Searchによって請求されます。検索をトリガーするAIの応答1回が1クエリとしてカウントされます。予期せぬ請求を避けるため、[Brave Search開発者ダッシュボード](https://brave.com/search/api/) で利用状況を監視してください。

## Tavily {#tavily}

Superdav AI Agent v1.10.0 には、よりリッチな検索結果と高度なリサーチ機能を提供する代替のインターネット検索プロバイダーとして **Tavily** が追加されました。

### Tavily APIキーの取得方法 {#obtaining-a-tavily-api-key}

1. [Tavily APIページ](https://tavily.com/) にアクセスします。
2. アカウントにサインアップします。月間のリクエスト制限付きで無料枠が利用できます。
3. TavilyダッシュボードからAPIキーをコピーします。
4. Gratis AI Agentの設定にある **Tavily API Key** フィールドに貼り付けます。

### 利用制限 {#usage-limits-1}

利用料金は、実行されたAPIコール数に基づいてTavilyによって請求されます。検索をトリガーするAIの応答1回が1コールとしてカウントされます。予期せぬ請求を避けるため、[Tavilyダッシュボード](https://tavily.com/) で利用状況を監視してください。

## インターネット検索の無効化 {#disabling-internet-search}

アクティブな検索プロバイダーのフィールドからAPIキーを削除し、保存します。インターネット検索機能はアシスタントから提供されなくなります。

:::note
インターネット検索は、アシスタントが回答を生成する前に検索結果を待つ必要があるため、応答に遅延（レイテンシ）を追加します。時間的な制約が厳しいユースケースでは、リアルタイム検索が必要かどうか、またはアシスタントの組み込み知識で十分かどうかを検討してください。
:::
