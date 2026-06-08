---
title: Site Builder Orchestration v2
sidebar_position: 4
_i18n_hash: 3a3d15844b4a0751fc59ac3a4e1fb0c0
---
# Site Builder Orchestration v2

Site Builder Orchestration v2（Gratis AI Agent v1.4.0で導入）は、ステップを追ったウェブサイト作成を可能にするエンジンです。エージェントに「レストランのウェブサイトを構築して」や「ブログ付きのポートフォリオを作成して」と依頼すると、オーケストレーターは、その高度な目標を構造化された**プラン**に分解し、それを実現するために必要なプラグインを特定し、各ステップを順番に実行し、進捗を追跡し、エラーが発生した場合でも自律的に回復します。

---

## 仕組み

### 1. プランの生成

エージェントがサイト構築の指示を受け取ると、`create_site_plan`アビリティを呼び出し、JSON形式の**サイトプラン**を生成します。このプランには以下の情報が記述されています。

- **Goal（目標）** — 完成したサイトが何をするべきか
- **Phases（フェーズ）** — 順序付けられた手順のグループ（例：_セットアップ_、_コンテンツタイプ_、_デザイン_、_コンテンツ_）
- **Steps（ステップ）** — 各フェーズ内の個別のアビリティ呼び出し
- **Plugin requirements（プラグイン要件）** — 特定のステップを実行するためにアクティブである必要があるプラグイン
- **Fallbacks（フォールバック）** — プライマリステップが失敗した場合の代替手順

**プランの例（抜粋）**

```json
{
  "plan_id": "plan_restaurant_001",
  "goal": "オンラインメニュー、予約フォーム、連絡先ページを備えたレストランのウェブサイトを構築する",
  "phases": [
    {
      "id": "setup",
      "label": "セットアップ",
      "steps": [
        { "ability": "install_ability", "params": { "slug": "gratis-ai-agent-woocommerce" } },
        { "ability": "register_post_type", "params": { "slug": "menu-item", "singular_label": "メニューアイテム", "plural_label": "メニューアイテム" } },
        { "ability": "register_taxonomy", "params": { "slug": "menu-section", "singular_label": "メニューセクション", "plural_label": "メニューセクション", "post_types": ["menu-item"] } }
      ]
    },
    {
      "id": "design",
      "label": "デザイン",
      "steps": [
        { "ability": "apply_theme_json_preset", "params": { "preset": "warm-editorial" } },
        { "ability": "inject_custom_css", "params": { "css": ".menu-item { border-radius: 8px; }", "label": "restaurant-ui" } }
      ]
    },
    {
      "id": "navigation",
      "label": "ナビゲーション",
      "steps": [
        { "ability": "create_menu", "params": { "name": "メインナビゲーション", "location": "primary" } },
        { "ability": "add_menu_item", "params": { "menu_id": "__ref:create_menu.menu_id", "type": "custom", "title": "メニュー", "url": "/menu-items/" } },
        { "ability": "add_menu_item", "params": { "menu_id": "__ref:create_menu.menu_id", "type": "custom", "title": "テーブルを予約", "url": "/book/" } }
      ]
    }
  ],
  "plugin_requirements": [
    { "slug": "contact-form-7", "reason": "予約フォームと連絡先フォームに必要" }
  ]
}
```

### 2. プラグインの検出

実行が始まる前に、オーケストレーターはプランの`plugin_requirements`をスキャンし、どのプラグインがすでにアクティブであるかを確認します。必要なプラグインが不足している場合、以下の処理を行います。

1. `recommend_plugin`を通じてレジストリを検索し、最適なプラグインを提案します。
2. エージェントに提案の確認を促します。
3. 承認された場合（または設定で自動インストールが有効な場合）にインストールをトリガーします。

プラグイン検出に失敗しても致命的な問題ではありません。オーケストレーターは影響を受けるステップを`skipped`（スキップ）としてマークし、プランの残りの部分の実行を続行します。

### 3. プランの実行

オーケストレーターは、プランIDを指定して`execute_site_plan`を呼び出します。実行は、フェーズごとに、ステップごとに進みます。

- **ステップ参照** (`__ref:`プレフィックス) — ステップは、以前のステップの出力結果を参照できます。上記の例では、`__ref:create_menu.menu_id`は、`create_menu`ステップによって返された`menu_id`に解決されます。
- **並列ステップ** — 同じフェーズ内のステップで、相互依存関係がないものは、`parallel`フラグが設定されている場合に同時に実行されます。
- **ステップのタイムアウト** — 各ステップには個別のタイムアウト（デフォルトは`Ability Timeout`設定）があります。タイムアウトしたステップは`failed`（失敗）としてマークされ、プランは続行します。

### 4. 進捗の追跡

いつでも`get_plan_progress`を呼び出して、実行状況を確認できます。

```json
{
  "plan_id": "plan_restaurant_001",
  "status": "in_progress",
  "phases_total": 4,
  "phases_complete": 2,
  "steps_total": 14,
  "steps_complete": 8,
  "steps_failed": 1,
  "steps_skipped": 0,
  "current_step": "add_menu_item",
  "elapsed_seconds": 42
}
```

WP-CLIユーザーは、以下のコマンドで進捗を監視できます。

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### 5. エラーからの回復

ステップが失敗した場合、オーケストレーターはプランに定義されている**フォールバック**ステップがあるかを確認します。

- **フォールバックあり** — フォールバックステップが直ちに試行されます。成功した場合、実行は続行します。フォールバックも失敗した場合、そのステップは`failed`としてマークされ、次のステップに進みます。
- **フォールバックなし** — そのステップは`failed`としてマークされます。重要度の低いステップはスキップされますが、重要なステップ（`required: true`でマークされたもの）は現在のフェーズを停止させ、フェーズレベルのリカバリを試みます。

エージェントは、最終的なプランサマリーで全ての失敗を報告し、回復不可能なエラーについては手動での修復手順を提案する場合があります。

---

## Site Plan Abilities（サイトプランアビリティ）

### `create_site_plan`

自然言語の目標記述から構造化されたサイトプランを生成します。

**パラメータ**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `goal` | string | Yes | 目的のウェブサイトに関する自然言語の説明 |
| `style` | string | No | ビジュアルの好み: `minimal`、`bold`、`professional`、`playful`。デフォルト: エージェントが目標に基づいて選択 |
| `plugins` | array | No | プランに含めるプラグインのスラッグ。オーケストレーターが必要なプラグインは自動的に追加します。 |
| `dry_run` | boolean | No | `true`の場合、プランJSONを保存または実行せずに返します。デフォルトは`false` |

**Returns** `{ "plan_id": "plan_restaurant_001", "phases": 4, "steps": 14, "plugin_requirements": 1 }`

---

### `execute_site_plan`

以前に生成されたサイトプランの実行を開始します。

**パラメータ**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `plan_id` | string | Yes | 実行するプランのID |
| `auto_install_plugins` | boolean | No | `true`の場合、確認なしに必要なプラグインを自動的にインストールします。デフォルトは`false` |
| `max_retries` | integer | No | 次のステップに進む前に、失敗したステップを再試行する回数。デフォルトは`1` |

**Returns** `{ "execution_id": "exec_001", "status": "started" }`

---

### `get_plan_progress`

サイトプランの現在の実行状況を返します。

**パラメータ**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `plan_id` | string | Yes | クエリするプランID |

**Returns** 上記[進捗の追跡](#4-進捗の追跡)で説明されている進捗オブジェクト。

---

### `handle_plan_error`

手動で失敗したステップを解決し、次のステップからプランの実行を再開します。自動回復が不可能で、介入したい場合に使用します。

**パラメータ**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `plan_id` | string | Yes | プランID |
| `step_id` | string | Yes | 失敗したステップのID |
| `resolution` | string | Yes | `skip`（スキップして続行）、`retry`（ステップを即座に再試行）、または`mark_done`（再実行せずに成功として扱う）のいずれか |

**Returns** `{ "success": true, "plan_id": "plan_restaurant_001", "resumed_from": "add_menu_item" }`

---

## v1とv2の比較

| Feature | v1 | v2 |
|---|---|---|
| Multi-phase plans（複数フェーズのプラン） | No | Yes |
| Step output references (`__ref:`)（ステップ出力参照） | No | Yes |
| Plugin discovery（プラグイン検出） | Manual（手動） | Automatic（自動） |
| Progress tracking API（進捗追跡API） | No | Yes |
| Error recovery（エラー回復） | Fail-and-stop（失敗したら停止） | Fallback + continue（フォールバック＋続行） |
| Parallel step execution（並列ステップ実行） | No | Yes (opt-in per phase)（フェーズごとにオプション） |
| WP-CLI plan commands（WP-CLIプランコマンド） | No | Yes |
| Benchmark integration（ベンチマーク統合） | No | Yes (`q-restaurant-website`) |

---

## WP-CLI Plan Commands（WP-CLIプランコマンド）

### `wp gratis-ai-agent plan create`

目標記述からサイトプランを生成します。

```bash
wp gratis-ai-agent plan create "Build a restaurant website with an online menu, booking form, and contact page" [--dry-run] [--output=json]
```

### `wp gratis-ai-agent plan execute`

以前に生成されたプランを実行します。

```bash
wp gratis-ai-agent plan execute plan_restaurant_001 [--auto-install-plugins]
```

### `wp gratis-ai-agent plan status`

実行中または完了したプランの現在の進捗を表示します。

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### `wp gratis-ai-agent plan list`

全てのサイトプラン（保留中、進行中、完了済み）を一覧表示します。

```bash
wp gratis-ai-agent plan list [--status=<status>] [--format=table|json|csv]
```

### `wp gratis-ai-agent plan reset`

失敗したプランを`pending`（保留中）にリセットし、最初から再実行できるようにします。

```bash
wp gratis-ai-agent plan reset plan_restaurant_001
```
