---
title: 插件管理能力
sidebar_position: 4
_i18n_hash: ef90f5181e76f8b1a3209101eded0653
---
# Plugin Management Abilities {#plugin-management-abilities}

Gratis AI Agent v1.5.0 提供了 **7 个插件管理能力**，AI 助手可以在对话过程中调用这些能力。这些能力为通过 [Plugin Builder & Sandbox System](../../user-guide/administration/plugin-builder-and-sandbox) 安装的 WordPress 插件提供了程序化控制。

## Abilities Overview {#abilities-overview}

| Ability | Slug | Description |
|---|---|---|
| List Plugins | `list_plugins` | 返回沙盒存储中插件的列表及其状态。 |
| Get Plugin | `get_plugin` | 通过 slug 获取特定插件的元数据和源代码。 |
| Create Plugin | `create_plugin` | 根据描述生成新插件，并将其存储在沙盒中。 |
| Update Plugin | `update_plugin` | 用新版本替换插件的源代码。 |
| Delete Plugin | `delete_plugin` | 从沙盒存储中移除插件。首先会禁用插件。 |
| Install Plugin | `install_plugin` | 将沙盒插件部署到真实的 WordPress 插件目录。 |
| Activate Plugin | `activate_plugin` | 在 wp-env 沙盒环境中激活沙盒插件。 |

## Plugin Installer API {#plugin-installer-api}

插件安装器（plugin installer）负责在部署或移除插件时处理文件系统操作。关键行为包括：

- **路径验证 (Path validation)**：在任何文件写入之前，所有插件路径都会与允许的插件目录进行验证。系统会拒绝目录遍历的尝试。
- **多文件安装 (Multi-file install)**：一个插件可能包含多个文件。安装器会创建插件目录，并原子性地写入所有文件。
- **更新 (Update)**：替换现有的插件文件。在写入之前会先禁用插件，以避免出现部分状态错误。
- **按 slug 删除 (Delete by slug)**：通过 slug 定位插件目录，在所有站点上禁用插件，然后移除该目录。

### Registering a Custom Install Handler {#registering-a-custom-install-handler}

您可以使用 `gratis_ai_plugin_installer_before_install` 和 `gratis_ai_plugin_installer_after_install` action 来挂钩安装生命周期：

```php
add_action('gratis_ai_plugin_installer_before_install', function(string $slug, array $files): void {
    // $slug: 插件的目录名
    // $files: 关联数组，键为相对路径，值为文件内容
    error_log("Installing plugin: {$slug} with " . count($files) . " files.");
}, 10, 2);

add_action('gratis_ai_plugin_installer_after_install', function(string $slug, bool $success): void {
    if ($success) {
        error_log("Plugin {$slug} installed successfully.");
    }
}, 10, 2);
```

## Ecosystem Registry {#ecosystem-registry}

能力是通过 **插件生态系统注册表 (plugin ecosystem registry)** 进行注册的。该注册表将能力 slug 映射到其处理类，并将其暴露给 AI agent 的工具调度器 (tool dispatcher)。

要注册自定义的插件管理能力：

```php
add_filter('gratis_ai_plugin_abilities', function(array $abilities): array {
    $abilities['my_custom_ability'] = [
        'class'       => My_Custom_Plugin_Ability::class,
        'label'       => 'My Custom Ability',
        'description' => 'Does something useful with plugins.',
    ];
    return $abilities;
});
```

您的能力类必须实现 `Gratis_AI_Ability_Interface`：

```php
class My_Custom_Plugin_Ability implements Gratis_AI_Ability_Interface {

    public function get_slug(): string {
        return 'my_custom_ability';
    }

    public function get_schema(): array {
        return [
            'name'        => 'my_custom_ability',
            'description' => 'Does something useful with plugins.',
            'parameters'  => [
                'type'       => 'object',
                'properties' => [
                    'slug' => [
                        'type'        => 'string',
                        'description' => 'The plugin slug to operate on.',
                    ],
                ],
                'required' => ['slug'],
            ],
        ];
    }

    public function execute(array $params): array {
        $slug = sanitize_key($params['slug'] ?? '');
        // ... your implementation ...
        return ['success' => true, 'slug' => $slug];
    }
}
```

## HookScanner Integration {#hookscanner-integration}

`create_plugin` 和 `update_plugin` 能力会自动对新生成的代码运行 **HookScanner**。HookScanner 会返回插件注册的 WordPress action 和 filter hooks 列表。

要程序化地检索 HookScanner 结果：

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

HookScanner 会自动跳过 `vendor/` 和 `node_modules/` 目录。

## Async Job Architecture {#async-job-architecture}

长时间运行的插件操作（生成、安装）会作为 **异步任务 (async jobs)** 派发，并支持实时进度跟踪。AI 聊天界面会轮询进度，并将状态更新流式传输给用户：

1. **派发 (Dispatch)** — 能力创建异步任务并返回一个任务 ID。
2. **轮询 (Poll)** — Agent 每 2 秒轮询一次 `gratis_ai_job_status($job_id)`。
3. **流式传输 (Stream)** — 中间进度消息会被推送到聊天线程。
4. **完成 (Complete)** — 最终结果（成功或错误）被返回并显示。

要挂钩任务生命周期事件：

```php
add_action('gratis_ai_job_started', function(string $job_id, string $ability_slug): void {
    error_log("Job {$job_id} started for ability: {$ability_slug}");
}, 10, 2);

add_action('gratis_ai_job_completed', function(string $job_id, array $result): void {
    error_log("Job {$job_id} completed. Success: " . ($result['success'] ? 'yes' : 'no'));
}, 10, 2);
```
