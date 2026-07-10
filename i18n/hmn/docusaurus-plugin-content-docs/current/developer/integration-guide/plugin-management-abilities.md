---
title: Peev xwm tswj hwm Plugin
sidebar_position: 4
_i18n_hash: ef90f5181e76f8b1a3209101eded0653
---
# Cov Peev Xwm Tswj Plugin {#plugin-management-abilities}

Gratis AI Agent v1.5.0 los nrog **7 qhov peev xwm tswj plugin** uas tus pab AI siv tau thaum sib tham. Cov peev xwm no muab kev tswj WordPress plugins uas tau nruab los ntawm [Qhov System Tsim Plugin & Sandbox](../../user-guide/administration/plugin-builder-and-sandbox) raws li programmatic.

## Saib Tag Nrho Cov Peev Xwm {#abilities-overview}

| Peev Xwm | Slug | Kev Piav Qhia |
|---|---|---|
| Sau Cov Plugin | `list_plugins` | Xa rov qab daim ntawv teev cov plugins hauv sandbox store nrog lawv qhov xwm txheej. |
| Tau Plugin | `get_plugin` | Rub metadata thiab source code rau ib qho plugin tshwj xeeb raws slug. |
| Tsim Plugin | `create_plugin` | Tsim ib qho plugin tshiab los ntawm kev piav qhia thiab khaws nws rau hauv sandbox. |
| Hloov Kho Plugin | `update_plugin` | Hloov plugin lub source code nrog ib version tshiab. |
| Rho Tawm Plugin | `delete_plugin` | Tshem ib qho plugin tawm ntawm sandbox store. Deactivate ua ntej. |
| Nruab Plugin | `install_plugin` | Deploy ib qho sandboxed plugin mus rau live WordPress plugin directory. |
| Activate Plugin | `activate_plugin` | Activate ib qho sandboxed plugin hauv wp-env sandbox environment. |

## Plugin Installer API {#plugin-installer-api}

Tus plugin installer tswj cov haujlwm file system thaum deploy lossis tshem plugins. Cov cwj pwm tseem ceeb:

- **Kev txheeb xyuas path**: Txhua plugin paths raug txheeb xyuas nrog plugin directory uas raug tso cai ua ntej yuav sau ib qho file twg. Cov kev sim directory traversal raug tsis kam lees.
- **Nruab ntau file**: Ib qho plugin yuav muaj ntau files. Tus installer tsim plugin directory thiab sau tag nrho cov files ua atomic.
- **Hloov kho**: Hloov cov plugin files uas twb muaj lawm. Deactivate plugin ua ntej sau kom zam kev yuam kev partial-state.
- **Rho tawm raws slug**: Nrhiav plugin directory raws slug, deactivate hla txhua lub sites, ces tshem directory ntawd.

### Sau Npe Custom Install Handler {#registering-a-custom-install-handler}

Koj tuaj yeem hook rau hauv install lifecycle siv cov actions `gratis_ai_plugin_installer_before_install` thiab `gratis_ai_plugin_installer_after_install`:

```php
add_action('gratis_ai_plugin_installer_before_install', function(string $slug, array $files): void {
    // $slug: the plugin's directory name
    // $files: associative array of relative path => file content
    error_log("Installing plugin: {$slug} with " . count($files) . " files.");
}, 10, 2);

add_action('gratis_ai_plugin_installer_after_install', function(string $slug, bool $success): void {
    if ($success) {
        error_log("Plugin {$slug} installed successfully.");
    }
}, 10, 2);
```

## Ecosystem Registry {#ecosystem-registry}

Cov peev xwm raug sau npe los ntawm **plugin ecosystem registry**. Lub registry map ability slugs mus rau lawv cov handler classes thiab nthuav lawv rau AI agent lub tool dispatcher.

Yog yuav sau npe ib qho custom plugin management ability:

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

Koj ability class yuav tsum implement `Gratis_AI_Ability_Interface`:

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

Cov peev xwm `create_plugin` thiab `update_plugin` khiav **HookScanner** rau code uas nyuam qhuav tsim tawm. HookScanner xa rov qab daim ntawv teev WordPress action thiab filter hooks uas plugin tau register.

Yog xav rub HookScanner results raws li programmatic:

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

HookScanner hla `vendor/` thiab `node_modules/` directories yam automatic.

## Async Job Architecture {#async-job-architecture}

Cov haujlwm plugin uas siv sijhawm ntev (generate, install) raug dispatch ua **async jobs** nrog kev taug qab progress live. AI chat interface poll kom tau progress thiab stream status updates rau tus neeg siv:

1. **Dispatch** — qhov peev xwm tsim ib qho async job thiab xa rov qab ib job ID.
2. **Poll** — the agent polls `gratis_ai_job_status($job_id)` every 2 seconds.
3. **Stream** — cov lus progress nruab nrab raug push mus rau chat thread.
4. **Complete** — qhov txiaj ntsig kawg (success lossis error) raug xa rov qab thiab tso saib.

Yog yuav hook rau hauv job lifecycle events:

```php
add_action('gratis_ai_job_started', function(string $job_id, string $ability_slug): void {
    error_log("Job {$job_id} started for ability: {$ability_slug}");
}, 10, 2);

add_action('gratis_ai_job_completed', function(string $job_id, array $result): void {
    error_log("Job {$job_id} completed. Success: " . ($result['success'] ? 'yes' : 'no'));
}, 10, 2);
```
