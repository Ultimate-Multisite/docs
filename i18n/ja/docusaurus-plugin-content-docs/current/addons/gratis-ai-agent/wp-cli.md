---
title: WP-CLIリファレンス
sidebar_position: 3
_i18n_hash: 365bd4ea4c1118b4258408f43a8020fc
---
# WP-CLI リファレンス {#wp-cli-reference}

Gratis AI Agent は、`wp gratis-ai-agent` コマンドファミリーを提供します。これを使用すると、コマンドラインからエージェントのベンチマーク実行、アビリティの管理、およびエージェントステータスの照会ができます。すべてのコマンドは WP-CLI 2.0 以降が必要です。

## インストール {#installation}

WP-CLI コマンドは、プラグインが有効化されると自動的に登録されます。以下のコマンドで確認してください。

```bash
wp gratis-ai-agent --info
```

---

## `wp gratis-ai-agent benchmark` {#wp-gratis-ai-agent-benchmark}

エージェントの全アビリティを試す一連の複雑なマルチステッププロンプトである「エージェントアビリティベンチマークスイート」を実行します。これを使用して、モデルのパフォーマンスを評価したり、AIプロバイダーを比較したり、本番環境にデプロイする前にアビリティパックを検証したりできます。

### 概要 {#synopsis}

```bash
wp gratis-ai-agent benchmark [--question=<id>] [--provider=<provider>] [--model=<model>] [--output=<format>] [--save]
```

### オプション {#options}

| Option | Description |
|---|---|
| `--question=<id>` | フルスイートではなく、IDを指定して単一のベンチマーク質問を実行します |
| `--provider=<provider>` | この実行のために、設定されているAIプロバイダーを上書きします（例: `anthropic`、`openai`） |
| `--model=<model>` | この実行のために、設定されているモデルを上書きします（例: `claude-opus-4-6`、`gpt-4o`） |
| `--output=<format>` | 出力形式: `table` (デフォルト)、`json`、`csv` |
| `--save` | ベンチマーク結果をデータベースに保存し、履歴比較を可能にします |

### 例 {#examples}

現在のプロバイダーとモデルを使用して、フルベンチマークスイートを実行します。

```bash
wp gratis-ai-agent benchmark
```

単一の質問（`q-restaurant-website`）を実行し、JSON形式で出力します。

```bash
wp gratis-ai-agent benchmark --question=q-restaurant-website --output=json
```

特定のモデルで実行し、結果を保存します。

```bash
wp gratis-ai-agent benchmark --model=claude-opus-4-6 --save
```

### 出力 {#output}

ベンチマークは、以下の列を持つ質問ごとに1行を出力します。

| Column | Description |
|---|---|
| `ID` | 質問の識別子 |
| `Description` | ベンチマークシナリオの簡単な要約 |
| `Score` | 合否または数値スコア（0～100） |
| `Abilities Used` | 呼び出されたアビリティのカンマ区切りリスト |
| `Tokens` | 消費された総トークン数 |
| `Duration` | 秒単位の経過時間 |

```
ID                       Description                         Score  Abilities Used               Tokens  Duration
q-portfolio-site         Create a portfolio CPT with tags    100    register_post_type, reg...   4821    18.3s
q-restaurant-website     Build a full restaurant website     92     create_site_plan, execut...  12430   54.1s
q-dark-mode-theme        Apply a dark theme preset           100    apply_theme_json_preset      986     4.2s
...
```

### ベンチマーク質問 {#benchmark-questions}

デフォルトのスイートには以下が含まれます。

| ID | Scenario |
|---|---|
| `q-portfolio-site` | プロジェクトカテゴリのタクソノミーを持つポートフォリオCPTを作成し、ブロックパターンを登録する |
| `q-restaurant-website` | メニューCPT、予約フォーム、ナビゲーションを備えた完全なレストランウェブサイトを構築する |
| `q-dark-mode-theme` | ダークモードのデザインプリセットを適用し、ブランドカラーを注入する |
| `q-nav-builder` | ネストされたドロップダウンを持つ4項目からなるメインナビゲーションメニューを作成する |
| `q-options-roundtrip` | 一連のWordPressオプションを読み取り、変更し、復元する |
| `q-ability-install` | 説明されたユースケースに最も適切なアビリティパックを検出してインストールする |

追加の質問は、`gratis_ai_agent_benchmark_questions` フィルター経由で登録できます。

---

## `wp gratis-ai-agent abilities` {#wp-gratis-ai-agent-abilities}

インストールされているアビリティとアビリティパックを管理します。

### `wp gratis-ai-agent abilities list` {#wp-gratis-ai-agent-abilities-list}

登録されているすべてのアビリティ、そのソース（コアまたはパック）、および現在のステータスを一覧表示します。

```bash
wp gratis-ai-agent abilities list [--format=<format>]
```

**オプション**

| Option | Description |
|---|---|
| `--format=<format>` | 出力形式: `table` (デフォルト)、`json`、`csv` |

**出力例**

```
Ability                   Source                          Status
register_post_type        gratis-ai-agent (core)          active
list_post_types           gratis-ai-agent (core)          active
delete_post_type          gratis-ai-agent (core)          active
register_taxonomy         gratis-ai-agent (core)          active
inject_custom_css         gratis-ai-agent (core)          active
apply_theme_json_preset   gratis-ai-agent (core)          active
create_product            gratis-ai-agent-woocommerce     active
```

---

### `wp gratis-ai-agent abilities install` {#wp-gratis-ai-agent-abilities-install}

レジストリからアビリティパックをダウンロードして有効化します。

```bash
wp gratis-ai-agent abilities install <slug>
```

**引数**

| Argument | Description |
|---|---|
| `<slug>` | アビリティパックのプラグインスラッグ。例: `gratis-ai-agent-woocommerce` |

**例**

```bash
wp gratis-ai-agent abilities install gratis-ai-agent-woocommerce
Success: Installed gratis-ai-agent-woocommerce. Added 3 abilities: create_product, update_pricing, manage_inventory.
```

---

### `wp gratis-ai-agent abilities disable` {#wp-gratis-ai-agent-abilities-disable}

パックを削除することなく、特定の機能を無効化します。特定のサイトでエージェントの適用範囲を制限したい場合に便利です。

```bash
wp gratis-ai-agent abilities disable <ability>
```

**例**

```bash
wp gratis-ai-agent abilities disable delete_post_type
Success: Ability 'delete_post_type' disabled.
```

---

### `wp gratis-ai-agent abilities enable` {#wp-gratis-ai-agent-abilities-enable}

以前無効化されたアビリティを再度有効化します。

```bash
wp gratis-ai-agent abilities enable <ability>
```

---

## `wp gratis-ai-agent status` {#wp-gratis-ai-agent-status}

現在のエージェント設定と接続ステータスを表示します。

```bash
wp gratis-ai-agent status
```

**出力例**

```
Plugin Version:    1.4.0
AI Provider:       Anthropic
Model:             claude-sonnet-4-6
Provider Status:   Connected
Abilities Loaded:  24
Benchmark Results: 3 saved runs (last: 2026-04-15)
Options Blocklist: 18 entries
```

---

## `wp gratis-ai-agent logs` {#wp-gratis-ai-agent-logs}

デバッグログから最近のエージェントアクティビティを表示します。

```bash
wp gratis-ai-agent logs [--last=<n>] [--level=<level>] [--ability=<ability>]
```

**オプション**

| Option | Description |
|---|---|
| `--last=<n>` | 最後のN件のログエントリを表示します。デフォルトは `50` |
| `--level=<level>` | レベルでフィルタリングします: `info`、`warning`、`error` |
| `--ability=<ability>` | アビリティ名でフィルタリングします |

**例**

```bash
wp gratis-ai-agent logs --last=20 --level=error
```

---

## `wp gratis-ai-agent reset` {#wp-gratis-ai-agent-reset}

エージェントの状態をリセットします。注入されたCSSをクリアし、エージェントが登録したCPTとタクソノミーを削除し、グローバルスタイルをリセットし、エージェントのオプションキャッシュを空にします。プラグインやその設定を削除するわけではありません。

```bash
wp gratis-ai-agent reset [--yes]
```

確認プロンプトをスキップするには `--yes` を追加します。

```bash
wp gratis-ai-agent reset --yes
Success: Agent state reset. Cleared: 2 post types, 1 taxonomy, custom CSS, global styles overrides.
```

---

## 終了コード {#exit-codes}

すべてのコマンドは成功時に `0` で終了します。非ゼロの終了コードの意味は以下の通りです。

| Code | Meaning |
|---|---|
| `1` | 一般的なエラー（エラーメッセージを参照） |
| `2` | プロバイダー接続の失敗 |
| `3` | アビリティが見つかりません |
| `4` | ベンチマーク質問が見つかりません |
