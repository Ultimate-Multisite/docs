---
title: پلگ اِن انتظامي صلاحيتون
sidebar_position: 4
_i18n_hash: ef90f5181e76f8b1a3209101eded0653
---
# پلگ ان انتظام جون صلاحيتون

Gratis AI Agent v1.5.0 **7 پلگ ان انتظام صلاحيتن** سان اچي ٿو، جن کي AI اسسٽنٽ ڳالهه ٻولهه دوران سڏي سگهي ٿو. اهي صلاحيتون [پلگ ان ٺاهيندڙ ۽ سينڊباڪس نظام](../../user-guide/administration/plugin-builder-and-sandbox) ذريعي انسٽال ٿيل WordPress پلگ انز تي پروگرامياتي ڪنٽرول مهيا ڪن ٿيون.

## صلاحيتن جو جائزو {#abilities-overview}

| صلاحيت | سلگ | وضاحت |
|---|---|---|
| پلگ انز جي فهرست | `list_plugins` | سينڊباڪس اسٽور ۾ پلگ انز جي فهرست انهن جي حالت سميت واپس ڪري ٿو. |
| پلگ ان حاصل ڪريو | `get_plugin` | ڪنهن مخصوص پلگ ان لاءِ سلگ ذريعي metadata ۽ source code حاصل ڪري ٿو. |
| پلگ ان ٺاهيو | `create_plugin` | وضاحت مان نئون پلگ ان ٺاهي ٿو ۽ ان کي سينڊباڪس ۾ محفوظ ڪري ٿو. |
| پلگ ان اپڊيٽ ڪريو | `update_plugin` | پلگ ان جو source code نئين ورزن سان بدلائي ٿو. |
| پلگ ان حذف ڪريو | `delete_plugin` | سينڊباڪس اسٽور مان پلگ ان هٽائي ٿو. پهرين غير فعال ڪري ٿو. |
| پلگ ان انسٽال ڪريو | `install_plugin` | سينڊباڪس ٿيل پلگ ان کي live WordPress پلگ ان directory ۾ deploy ڪري ٿو. |
| پلگ ان فعال ڪريو | `activate_plugin` | wp-env سينڊباڪس ماحول ۾ سينڊباڪس ٿيل پلگ ان فعال ڪري ٿو. |

## پلگ ان انسٽالر API {#plugin-installer-api}

پلگ ان انسٽالر پلگ انز کي deploy ڪرڻ يا هٽائڻ وقت file system operations سنڀالي ٿو. اهم رويا:

- **Path validation**: ڪنهن به file write کان اڳ سڀ پلگ ان paths اجازت ڏنل پلگ ان directory جي خلاف validate ڪيا وڃن ٿا. Directory traversal جون ڪوششون رد ڪيون وڃن ٿيون.
- **Multi-file install**: هڪ پلگ ان ڪيترين فائلن تي مشتمل ٿي سگهي ٿو. انسٽالر پلگ ان directory ٺاهي ٿو ۽ سڀ فائلون atomically لکي ٿو.
- **Update**: موجوده پلگ ان فائلن کي بدلائي ٿو. partial-state errors کان بچڻ لاءِ لکڻ کان اڳ پلگ ان کي غير فعال ڪري ٿو.
- **Delete by slug**: سلگ ذريعي پلگ ان directory ڳولي ٿو، سڀني سائيٽن تي غير فعال ڪري ٿو، پوءِ directory هٽائي ٿو.

### ڪسٽم Install Handler رجسٽر ڪرڻ {#registering-a-custom-install-handler}

توهان `gratis_ai_plugin_installer_before_install` ۽ `gratis_ai_plugin_installer_after_install` actions استعمال ڪندي install lifecycle ۾ hook ڪري سگهو ٿا:

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

صلاحيتون **پلگ ان ecosystem registry** ذريعي رجسٽر ٿين ٿيون. registry صلاحيتن جي سلگز کي انهن جي handler classes سان map ڪري ٿي ۽ انهن کي AI agent جي tool dispatcher ڏانهن ظاهر ڪري ٿي.

ڪسٽم پلگ ان انتظام صلاحيت رجسٽر ڪرڻ لاءِ:

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

توهان جي صلاحيت class کي `Gratis_AI_Ability_Interface` implement ڪرڻ لازمي آهي:

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

`create_plugin` ۽ `update_plugin` صلاحيتون نئين ٺاهيل code تي پاڻمرادو **HookScanner** هلائين ٿيون. HookScanner پلگ ان طرفان رجسٽر ڪيل WordPress action ۽ filter hooks جي فهرست واپس ڪري ٿو.

HookScanner نتيجا پروگرامياتي طور حاصل ڪرڻ لاءِ:

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

HookScanner پاڻمرادو `vendor/` ۽ `node_modules/` directories کي ڇڏي ٿو.

## Async Job Architecture {#async-job-architecture}

ڊگهي وقت وٺندڙ پلگ ان operations (generate، install) کي live progress tracking سان **غير هم وقت نوڪرين** طور dispatch ڪيو وڃي ٿو. AI chat interface progress لاءِ poll ڪري ٿو ۽ user ڏانهن status updates stream ڪري ٿو:

1. **Dispatch** — صلاحيت هڪ غير هم وقت نوڪري ٺاهي ٿي ۽ job ID واپس ڪري ٿي.
2. **Poll** — the agent polls `gratis_ai_job_status($job_id)` every 2 seconds.
3. **Stream** — وچ وارا progress messages chat thread ڏانهن push ڪيا وڃن ٿا.
4. **Complete** — آخري نتيجو (success يا error) واپس ڪيو وڃي ٿو ۽ ڏيکاريو وڃي ٿو.

job lifecycle events ۾ hook ڪرڻ لاءِ:

```php
add_action('gratis_ai_job_started', function(string $job_id, string $ability_slug): void {
    error_log("Job {$job_id} started for ability: {$ability_slug}");
}, 10, 2);

add_action('gratis_ai_job_completed', function(string $job_id, array $result): void {
    error_log("Job {$job_id} completed. Success: " . ($result['success'] ? 'yes' : 'no'));
}, 10, 2);
```
