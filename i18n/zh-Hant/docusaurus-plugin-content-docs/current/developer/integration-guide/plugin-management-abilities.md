---
title: 外掛管理能力
sidebar_position: 4
_i18n_hash: ef90f5181e76f8b1a3209101eded0653
---
# 外掛管理功能

Gratis AI Agent v1.5.0 內建了 **7 個外掛管理功能**，AI 助理可以在對話過程中呼叫這些功能。這些功能提供了對透過 [Plugin Builder & Sandbox System](../../user-guide/administration/plugin-builder-and-sandbox) 安裝的 WordPress 外掛的程式化控制能力。

## 功能總覽

| 功能 | Slug | 描述 |
|---|---|---|
| 列出外掛 | `list_plugins` | 返回沙盒商店中外掛的列表及其狀態。 |
| 取得外掛 | `get_plugin` | 根據 slug 檢索特定外掛的元資料和原始碼。 |
| 建立外掛 | `create_plugin` | 根據描述生成一個新的外掛，並將其儲存在沙盒中。 |
| 更新外掛 | `update_plugin` | 用新版本取代外掛的原始碼。 |
| 刪除外掛 | `delete_plugin` | 從沙盒商店移除外掛。會先停用外掛。 |
| 安裝外掛 | `install_plugin` | 將沙盒化的外掛部署到實際的 WordPress 外掛目錄。 |
| 啟用外掛 | `activate_plugin` | 在 wp-env 沙盒環境中啟用沙盒化的外掛。 |

## 外掛安裝程式 API

外掛安裝程式負責在部署或移除外掛時處理檔案系統操作。主要行為包括：

- **路徑驗證 (Path validation)**：在任何寫入檔案之前，都會將所有外掛路徑與允許的外掛目錄進行驗證。會拒絕目錄遍歷的嘗試。
- **多檔案安裝 (Multi-file install)**：一個外掛可能包含多個檔案。安裝程式會建立外掛目錄，並原子性地寫入所有檔案。
- **更新 (Update)**：取代現有的外掛檔案。在寫入前會先停用外掛，以避免部分狀態錯誤。
- **按 slug 刪除 (Delete by slug)**：會根據 slug 找到外掛目錄，在所有網站上進行停用，然後移除該目錄。

### 註冊自訂安裝處理器

您可以使用 `gratis_ai_plugin_installer_before_install` 和 `gratis_ai_plugin_installer_after_install` 動作 (actions) 來掛鉤安裝生命週期：

```php
add_action('gratis_ai_plugin_installer_before_install', function(string $slug, array $files): void {
    // $slug: 外掛的目錄名稱
    // $files: 關聯陣列，格式為相對路徑 => 檔案內容
    error_log("正在安裝外掛: {$slug}，包含 " . count($files) . " 個檔案。");
}, 10, 2);

add_action('gratis_ai_plugin_installer_after_install', function(string $slug, bool $success): void {
    if ($success) {
        error_log("外掛 {$slug} 安裝成功。");
    }
}, 10, 2);
```

## 生態系統註冊表 (Ecosystem Registry)

功能是透過 **外掛生態系統註冊表** 進行註冊的。該註冊表將功能 slug 對應到其處理器類別，並將其暴露給 AI 助理的工具調度器 (tool dispatcher)。

要註冊一個自訂的外掛管理功能：

```php
add_filter('gratis_ai_plugin_abilities', function(array $abilities): array {
    $abilities['my_custom_ability'] = [
        'class'       => My_Custom_Plugin_Ability::class,
        'label'       => '我的自訂功能',
        'description' => '用外掛做一些有用的事情。',
    ];
    return $abilities;
});
```

您的功能類別必須實作 `Gratis_AI_Ability_Interface`：

```php
class My_Custom_Plugin_Ability implements Gratis_AI_Ability_Interface {

    public function get_slug(): string {
        return 'my_custom_ability';
    }

    public function get_schema(): array {
        return [
            'name'        => 'my_custom_ability',
            'description' => '用外掛做一些有用的事情。',
            'parameters'  => [
                'type'       => 'object',
                'properties' => [
                    'slug' => [
                        'type'        => 'string',
                        'description' => '要操作的外掛 slug。',
                    ],
                ],
                'required' => ['slug'],
            ],
        ];
    }

    public function execute(array $params): array {
        $slug = sanitize_key($params['slug'] ?? '');
        // ... 您的實作邏輯 ...
        return ['success' => true, 'slug' => $slug];
    }
}
```

## HookScanner 整合

`create_plugin` 和 `update_plugin` 功能會自動對新生成的程式碼執行 **HookScanner** 掃描。HookScanner 會回傳外掛註冊的 WordPress 動作 (action) 和過濾器 (filter) hook 列表。

要程式化地檢索 HookScanner 的結果：

```php
$scanner = new Gratis_AI_Hook_Scanner();
$hooks   = $scanner->scan_plugin_slug('my-generated-plugin');

foreach ($hooks['actions'] as $hook) {
    echo "動作 (Action): {$hook['hook']} — 回呼 (callback): {$hook['callback']}\n";
}

foreach ($hooks['filters'] as $hook) {
    echo "過濾器 (Filter): {$hook['hook']} — 回呼 (callback): {$hook['callback']}\n";
}
```

HookScanner 會自動跳過 `vendor/` 和 `node_modules/` 目錄。

## 異步任務架構 (Async Job Architecture)

長時間運行的外掛操作（例如生成、安裝）會作為 **異步任務 (async jobs)** 派發，並提供即時進度追蹤。AI 聊天介面會輪詢 (poll) 進度，並將狀態更新串流 (stream) 給使用者：

1. **派發 (Dispatch)** — 功能會建立一個異步任務，並回傳一個任務 ID。
2. **輪詢 (Poll)** — 代理會每 2 秒輪詢 `gratis_ai_job_status($job_id)`。
3. **串流 (Stream)** — 中間的進度訊息會推送到聊天串。
4. **完成 (Complete)** — 最終結果（成功或錯誤）會被回傳並顯示。

要掛鉤任務生命週期事件：

```php
add_action('gratis_ai_job_started', function(string $job_id, string $ability_slug): void {
    error_log("任務 {$job_id} 已為功能: {$ability_slug} 開始。");
}, 10, 2);

add_action('gratis_ai_job_completed', function(string $job_id, array $result): void {
    error_log("任務 {$job_id} 已完成。成功狀態: " . ($result['success'] ? '是' : '否'));
}, 10, 2);
```
