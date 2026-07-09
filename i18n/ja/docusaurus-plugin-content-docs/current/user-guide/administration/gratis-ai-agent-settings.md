---
title: Gratis AI Agent の設定
sidebar_position: 22
_i18n_hash: 06c2f7052f5b1a44d525d8446a5403a7
---
# Gratis AI Agent 設定 {#gratis-ai-agent-settings}

Gratis AI Agent の **設定 → Advanced** 画面では、バックエンド連携の管理者レベル設定を行えます。このページでは、フィードバック転送、検索プロバイダーのキー、管理対象の Superdav サービス設定、Google Calendar コントロール、TextBee SMS 設定、ネットワーク全体の機能フラグについて説明します。

## 設定へのアクセス {#accessing-settings}

1. WordPress 管理画面で、**Gratis AI Agent → 設定** に移動します。
2. **Advanced** タブをクリックします。

## フィードバック Endpoint 設定 {#feedback-endpoint-configuration}

フィードバック Endpoint は、ユーザーが低評価ボタン、自動プロンプトバナー、または `/report-issue` コマンドからフィードバックを送信するたびに、AI エージェントから POST リクエストを受け取ります。

| フィールド | 説明 |
|---|---|
| **Feedback Endpoint URL** | JSON 本文を含む HTTP POST リクエストとしてフィードバック送信を受け取る URL です。 |
| **Feedback API Key** | 各フィードバックリクエストの `Authorization` header で送信される bearer token です。Endpoint で認証が不要な場合は空欄のままにします。 |

### 想定される JSON ペイロード {#expected-json-payload}

フィードバック Endpoint は、少なくとも次のフィールドを含む JSON 本文を受け付ける必要があります。

```json
{
  "message_id": "msg_abc123",
  "conversation_id": "conv_xyz789",
  "feedback_text": "The answer was incorrect about pricing.",
  "triage_category": "factual_error"
}
```

会話の文脈によっては、ペイロードに追加フィールドが含まれる場合があります。

### `triage_category` の値 {#triagecategory-values}

AI トリアージ層は、ペイロードを転送する前に、`triage_category` に次のいずれかの値を割り当てます。

| 値 | 意味 |
|---|---|
| `factual_error` | アシスタントが事実として誤った情報を提供しました。 |
| `unhelpful_answer` | 回答は技術的には正しいものの、有用ではありませんでした。 |
| `inappropriate_content` | 回答にユーザーへ表示すべきでない内容が含まれていました。 |
| `other` | フィードバックが既知のカテゴリに一致しませんでした。 |

### 認証 {#authentication}

Endpoint で認証が必要な場合は、**Feedback API Key** フィールドに bearer token を設定します。エージェントは次を送信します。

```
Authorization: Bearer <your-api-key>
```

**Feedback API Key** フィールドが空の場合、`Authorization` header は送信されません。

### フィードバック収集の無効化 {#disabling-feedback-collection}

**Feedback Endpoint URL** と **Feedback API Key** の両方のフィールドを空欄のままにします。低評価ボタンとフィードバック UI はユーザーに表示されたままですが、送信内容は外部サービスへ転送されません。

## Brave Search API Key {#brave-search-api-key}

**Advanced** タブの **Brave Search API Key** フィールドでは、[インターネット検索](../configuration/internet-search) 機能を有効にできます。

| フィールド | 説明 |
|---|---|
| **Brave Search API Key** | Brave Search 開発者 Dashboard から取得した API キーです。AI アシスタントでインターネット検索を有効にするために必要です。 |

フィールドラベルには、Brave Search API 登録ページへのクリック可能なリンクが含まれています。インターネット検索を無効にするには空欄のままにします。

この機能のエンドユーザー向けドキュメントについては、[インターネット検索](../configuration/internet-search) を参照してください。

## 管理対象 Superdav サービス {#managed-superdav-service}

Superdav AI Agent v1.18.0 では、対応サイト向けに管理対象の Superdav サービス Endpoint と自動接続プロビジョニングが追加されました。サイトを手動設定のサービス Endpoint ではなくホスト型プロバイダーに接続する場合は、これらのコントロールを使用します。

| フィールド | 説明 |
|---|---|
| **Managed Superdav Service** | 対応サイト向けのホスト型 Superdav サービス接続を有効にします。 |
| **Provision Connection** | Endpoint と認証情報の自動プロビジョニングを開始します。サイトで管理対象プロバイダーを使用することを確認した後に使用します。 |
| **Service Endpoint / Connection Status** | プロビジョニング後の現在の Endpoint または接続状態を表示します。 |

プロビジョニング後、設定を保存し、管理対象サービスのワークフローに依存する前に接続状態を確認してください。プロビジョニングに失敗した場合は、表示された再試行ガイダンスを確認し、サイトにホスト型プロバイダーを使用する権限があることを確認します。

## Google Calendar 設定 {#google-calendar-configuration}

Superdav AI Agent v1.18.0 のカレンダー機能が有効な場合、エージェントは設定済みカレンダーとイベント詳細を読み取れます。カレンダーツールは読み取り中心で、スケジュールを考慮したリマインダー、参加者へのフォローアップ、連絡先照合に役立ちます。

| フィールド | 説明 |
|---|---|
| **Google Calendar Credentials** | カレンダーデータの読み取りに必要な認証情報またはトークン接続を保存します。 |
| **Calendar Selection** | エージェントが確認できる設定済みカレンダーを制限します。 |
| **Calendar Connection Status** | 現在の認証情報でカレンダーとイベントを読み取れるかどうかを確認します。 |

カレンダー認証情報は、エージェントに必要なカレンダーのみに制限してください。状態が期限切れトークンを示す場合は、再接続するか認証情報をローテーションします。

## TextBee SMS 通知 {#textbee-sms-notifications}

Superdav AI Agent v1.18.0 では、設定済み通知ワークフロー用の SMS プロバイダーとして TextBee が追加されました。SMS 通知は、機密性の高いメッセージやユーザー向けメッセージの場合、人による承認ゲートと組み合わせる必要があります。

| フィールド | 説明 |
|---|---|
| **TextBee API Key** | TextBee SMS プロバイダーへのリクエストを認証します。 |
| **TextBee Device / Sender** | プロバイダーが必要とする場合、送信メッセージに使用する TextBee の送信元またはデバイスを選択します。 |
| **SMS Notifications Enabled** | 承認済みワークフローによるテキストメッセージ通知の送信を許可します。SMS 送信を防ぐには無効のままにします。 |

テストメッセージは管理者が所有する番号にのみ送信し、スケジュール済みリマインダーや参加者向けリマインダーを有効にする前に、承認ゲートの動作を確認してください。

## 機能フラグ {#feature-flags}

v1.9.0 でも導入された **設定 → Feature Flags** タブには、任意機能の切り替えスイッチがあります。各フラグはネットワーク全体で有効または無効になります。現時点ではサイトごとの上書きはありません。

### 機能フラグへのアクセス {#accessing-feature-flags}

1. WordPress 管理画面で、**Gratis AI Agent → 設定** に移動します。
2. **Feature Flags** タブをクリックします。

### アクセス制御フラグ {#access-control-flags}

| フラグ | デフォルト | 説明 |
|---|---|---|
| **管理者に制限** | オフ | 有効にすると、`administrator` ロールのユーザーだけが AI Agent チャットパネルを開けます。他のすべてのロールには、代わりに「管理者に連絡してください」というメッセージが表示されます。 |
| **Network 管理者に制限** | オフ | マルチサイトネットワークで有効にすると、Super Admin だけがエージェントを使用できます。個別サイトの管理者はブロックされます。両方が有効な場合は、「管理者に制限」より優先されます。 |
| **Subscriber アクセスを許可** | オフ | 有効にすると、`subscriber` ロールのユーザーがチャットインターフェースを使用できますが、読み取り専用の機能に制限されます（投稿作成や設定変更はできません）。 |
| **非メンバーに対して無効化** | オフ | Ultimate Multisite のメンバーシップ状態と連携します。有効にすると、有効なメンバーシップがないサイトではチャットが非表示になります。 |

### ブランディングフラグ {#branding-flags}

| フラグ | デフォルト | 説明 |
|---|---|---|
| **「Powered by Gratis AI Agent」フッターを非表示** | オフ | チャットウィジェットの下部に表示されるブランディング帰属行を削除します。ホワイトラベル導入に推奨されます。 |
| **カスタムエージェント名** | *(空白)* | チャットヘッダーと管理メニューのデフォルトの「Gratis AI Agent」ラベルを、独自の製品名に置き換えます。デフォルトを使用する場合は空白のままにします。 |
| **エージェント選択を非表示** | オフ | 有効にすると、ユーザーは5つの組み込みエージェントを切り替えられません。現在のエージェントは、設定 → 一般でデフォルトとして構成されているものに固定されます。 |
| **サイトアイコンをチャットアバターとして使用** | オフ | チャットウィジェットヘッダーのデフォルト AI アイコンを、WordPress サイトアイコン（外観 → カスタマイズ → サイト基本情報で設定）に置き換えます。 |

### 自動化安全フラグ {#automation-safety-flags}

Superdav AI Agent v1.18.0 では、より安全な自動化実行のために、人による承認ゲートとリマインダー記録が導入されています。これらの制御は、インストール済みパッケージに応じて、機能フラグまたは高度な自動化設定に表示される場合があります。

| フラグ | デフォルト | 説明 |
|---|---|---|
| **人による承認を必須にする** | オンを推奨 | 承認済みユーザーが提案された操作を確認して承認するまで、機密性の高い自動化を一時停止します。 |
| **リマインダーの重複排除** | オン | 送信済みリマインダーを記録し、再試行やスケジュール実行で重複通知が送信されないようにします。 |
| **カレンダーツールを有効化** | 設定されるまでオフ | エージェントが設定済みの Google カレンダーとイベントを読み取れるようにします。 |
| **SMS 通知を有効化** | 設定されるまでオフ | 認証情報が保存された後、承認済みワークフローが TextBee SMS 通知を送信できるようにします。 |

### 変更の適用 {#applying-changes}

任意のフラグを切り替えた後、**設定を保存**をクリックします。変更はすぐに反映されます。キャッシュのフラッシュや plugin の再有効化は不要です。
