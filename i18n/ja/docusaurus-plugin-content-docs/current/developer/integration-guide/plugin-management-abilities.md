---
title: プラグイン管理機能
sidebar_position: 4
_i18n_hash: ef90f5181e76f8b1a3209101eded0653
---
# プラグイン管理機能

Gratis AI Agent v1.5.0 には、会話中にAIアシスタントが呼び出すことができる**7つのプラグイン管理機能**が搭載されています。これらの機能は、[Plugin Builder & Sandbox System](../../user-guide/administration/plugin-builder-and-sandbox) を通じてインストールされたWordPressプラグインに対して、プログラムによる制御を提供します。

## 機能の概要 {#abilities-overview}

| 機能 | Slug | 説明 |
|---|---|---|
| プラグイン一覧の取得 | `list_plugins` | サンドボックスストア内のプラグインとそのステータスを一覧で返します。 |
| プラグインの取得 | `get_plugin` | スラッグを指定して、特定のプラグインのメタデータとソースコードを取得します。 |
| プラグインの作成 | `create_plugin` | 説明文から新しいプラグインを生成し、サンドボックスに保存します。 |
| プラグインの更新 | `update_plugin` | プラグインのソースコードを新しいバージョンに置き換えます。 |
| プラグインの削除 | `delete_plugin` | プラグインをサンドボックスストアから削除します。最初に非アクティブ化します。 |
| プラグインのインストール | `install_plugin` | サンドボックス化されたプラグインを実際のWordPressプラグインディレクトリにデプロイします。 |
| プラグインのアクティベート | `activate_plugin` | サンドボックス化されたプラグインを wp-env サンドボックス環境でアクティブ化します。 |

## プラグインインストーラー API {#plugin-installer-api}

プラグインインストーラーは、プラグインのデプロイや削除を行う際にファイルシステム操作を処理します。主な動作は以下の通りです。

- **パスの検証**: ファイル書き込みを行う前に、すべてのプラグインパスが許可されたプラグインディレクトリに対して検証されます。ディレクトリトラバーサル（不正なディレクトリ移動）の試みは拒否されます。
- **複数ファイルでのインストール**: プラグインは複数のファイルで構成される場合があります。インストーラーはプラグインディレクトリを作成し、すべてのファイルをアトミック（不可分）に書き込みます。
- **更新**: 既存のプラグインファイルを置き換えます。部分的な状態エラーを防ぐため、書き込み前にプラグインを非アクティブ化します。
- **スラッグによる削除**: スラッグに基づいてプラグインディレクトリを特定し、すべてのサイトで非アクティブ化した後、ディレクトリを削除します。

### カスタムインストールハンドラーの登録 {#registering-a-custom-install-handler}

`gratis_ai_plugin_installer_before_install` および `gratis_ai_plugin_installer_after_install` アクションを使用して、インストールライフサイクルにフックできます。

```php
add_action('gratis_ai_plugin_installer_before_install', function(string $slug, array $files): void {
    // $slug: プラグインのディレクトリ名
    // $files: 相対パス => ファイル内容 の連想配列
    error_log("Installing plugin: {$slug} with " . count($files) . " files.");
}, 10, 2);

add_action('gratis_ai_plugin_installer_after_install', function(string $slug, bool $success): void {
    if ($success) {
        error_log("Plugin {$slug} installed successfully.");
    }
}, 10, 2);
```

## エコシステムレジストリ {#ecosystem-registry}

機能は**プラグインエコシステムレジストリ**を通じて登録されます。このレジストリは、機能のスラッグを対応するハンドラークラスにマッピングし、AIエージェントのツールディスパッチャーに公開します。

カスタムのプラグイン管理機能を登録するには、以下のようにします。

```php
add_filter('gratis_ai_plugin_abilities', function(array $abilities): array {
    $abilities['my_custom_ability'] = [
        'class'       => My_Custom_Plugin_Ability::class,
        'label'       => 'My Custom Ability',
        'description' => 'プラグインを使って何か便利なことをします。',
    ];
    return $abilities;
});
```

作成した機能クラスは、`Gratis_AI_Ability_Interface` を実装する必要があります。

```php
class My_Custom_Plugin_Ability implements Gratis_AI_Ability_Interface {

    public function get_slug(): string {
        return 'my_custom_ability';
    }

    public function get_schema(): array {
        return [
            'name'        => 'my_custom_ability',
            'description' => 'プラグインを使って何か便利なことをします。',
            'parameters'  => [
                'type'       => 'object',
                'properties' => [
                    'slug' => [
                        'type'        => 'string',
                        'description' => '操作対象のプラグインのスラッグ。',
                    ],
                ],
                'required' => ['slug'],
            ],
        ];
    }

    public function execute(array $params): array {
        $slug = sanitize_key($params['slug'] ?? '');
        // ... 実装ロジック ...
        return ['success' => true, 'slug' => $slug];
    }
}
```

## HookScanner 統合 {#hookscanner-integration}

`create_plugin` および `update_plugin` 機能では、新しく生成されたコードに対して自動的に**HookScanner**が実行されます。HookScannerは、プラグインによって登録されたWordPressのアクションおよびフィルターフックのリストを返します。

HookScannerの結果をプログラムで取得するには、以下のようにします。

```php
$scanner = new Gratis_AI_Hook_Scanner();
$hooks   = $scanner->scan_plugin_slug('my-generated-plugin');

foreach ($hooks['actions'] as $hook) {
    echo "Action: {$hook['hook']} — callback: {$hook['callback']}\n";
}

foreach ($hooks['filters'] as $hook) {
    echo "Filter: {$hook['hook']} — callback: {$hook['callback']}\n";
}
```

HookScannerは、`vendor/` および `node_modules/` ディレクトリは自動的にスキップします。

## 非同期ジョブアーキテクチャ {#async-job-architecture}

実行に時間がかかるプラグイン操作（生成、インストールなど）は、ライブの進捗追跡機能を持つ**非同期ジョブ**としてディスパッチされます。AIチャットインターフェースは進捗をポーリングし、ステータス更新をユーザーにストリーミングします。

1. **ディスパッチ** — 機能が非同期ジョブを作成し、ジョブIDを返します。
2. **ポーリング** — エージェントは2秒ごとに `gratis_ai_job_status($job_id)` をポーリングします。
3. **ストリーミング** — 中間的な進捗メッセージがチャットスレッドにプッシュされます。
4. **完了** — 最終結果（成功またはエラー）が返され、表示されます。

ジョブライフサイクルイベントにフックするには、以下のようにします。

```php
add_action('gratis_ai_job_started', function(string $job_id, string $ability_slug): void {
    error_log("Job {$job_id} started for ability: {$ability_slug}");
}, 10, 2);

add_action('gratis_ai_job_completed', function(string $job_id, array $result): void {
    error_log("Job {$job_id} completed. Success: " . ($result['success'] ? 'yes' : 'no'));
}, 10, 2);
```
