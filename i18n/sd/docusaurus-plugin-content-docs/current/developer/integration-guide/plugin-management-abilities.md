---
title: پلگ اِن انتظام جون صلاحيتون
sidebar_position: 4
_i18n_hash: ef90f5181e76f8b1a3209101eded0653
---
# پلگ ان انتظام جون صلاحيتون

Gratis AI Agent v1.5.0 ۾ **پلگ ان انتظام جون 7 صلاحيتون** شامل آهن، جن کي AI مددگار ڳالهه ٻولهه دوران استعمال ڪري سگهي ٿو. اهي صلاحيتون [پلگ ان بلڊر ۽ سندباڪس سسٽم](../../user-guide/administration/plugin-builder-and-sandbox) ذريعي نصب ٿيل WordPress پلگ انز تي پروگرامي ڪنٽرول مهيا ڪن ٿيون.

## صلاحيتن جو جائزو

| صلاحيت | Slug | وضاحت |
|---|---|---|
| پلگ انز جي فهرست | `list_plugins` | سندباڪس اسٽور ۾ پلگ انز جي فهرست سندن حالت سان واپس ڪري ٿو. |
| پلگ ان حاصل ڪريو | `get_plugin` | slug ذريعي مخصوص پلگ ان لاءِ metadata ۽ source code حاصل ڪري ٿو. |
| پلگ ان ٺاهيو | `create_plugin` | وضاحت مان نئون پلگ ان ٺاهي ٿو ۽ ان کي سندباڪس ۾ محفوظ ڪري ٿو. |
| پلگ ان اپڊيٽ ڪريو | `update_plugin` | پلگ ان جو source code نئين ورزن سان مٽائي ٿو. |
| پلگ ان ختم ڪريو | `delete_plugin` | سندباڪس اسٽور مان پلگ ان هٽائي ٿو. پهريان غيرفعال ڪري ٿو. |
| پلگ ان نصب ڪريو | `install_plugin` | سندباڪس ٿيل پلگ ان کي لائيو WordPress پلگ ان ڊائريڪٽري ۾ ڊپلائي ڪري ٿو. |
| پلگ ان فعال ڪريو | `activate_plugin` | wp-env سندباڪس ماحول ۾ سندباڪس ٿيل پلگ ان کي فعال ڪري ٿو. |

## پلگ ان انسٽالر API

پلگ ان انسٽالر پلگ انز کي ڊپلائي يا هٽائڻ وقت فائل سسٽم آپريشنز سنڀالي ٿو. اهم رويا:

- **رستي جي توثيق**: ڪنهن به فائل لکڻ کان اڳ سڀني پلگ ان رستن کي اجازت ڏنل پلگ ان ڊائريڪٽري جي خلاف پرکيو ويندو آهي. ڊائريڪٽري ٽريورسل جون ڪوششون رد ڪيون وينديون آهن.
- **گهڻ-فائلي انسٽال**: پلگ ان ڪيترين فائلن تي مشتمل ٿي سگهي ٿو. انسٽالر پلگ ان ڊائريڪٽري ٺاهي ٿو ۽ سڀئي فائلون ائٽامڪ طريقي سان لکي ٿو.
- **اپڊيٽ**: موجوده پلگ ان فائلن کي مٽائي ٿو. جزوي-حالت وارن نقصن کان بچڻ لاءِ لکڻ کان اڳ پلگ ان کي غيرفعال ڪري ٿو.
- **slug ذريعي ختم ڪرڻ**: slug ذريعي پلگ ان ڊائريڪٽري ڳولي ٿو، سڀني سائيٽن تي غيرفعال ڪري ٿو، پوءِ ڊائريڪٽري هٽائي ٿو.

### ڪسٽم انسٽال هينڊلر رجسٽر ڪرڻ

توهان `gratis_ai_plugin_installer_before_install` ۽ `gratis_ai_plugin_installer_after_install` actions استعمال ڪندي انسٽال lifecycle ۾ hook ڪري سگهو ٿا:

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

## ايڪو سسٽم رجسٽري

صلاحيتون **پلگ ان ايڪو سسٽم رجسٽري** ذريعي رجسٽر ڪيون وينديون آهن. رجسٽري صلاحيتن جي slugs کي سندن handler classes سان map ڪري ٿي ۽ انهن کي AI agent جي tool dispatcher لاءِ ظاهر ڪري ٿي.

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

## HookScanner انٽيگريشن

`create_plugin` ۽ `update_plugin` صلاحيتون نئين ٺهيل code تي پاڻمرادو **HookScanner** هلائينديون آهن. HookScanner پلگ ان طرفان رجسٽر ڪيل WordPress action ۽ filter hooks جي فهرست واپس ڪري ٿو.

HookScanner نتيجا پروگرامي طريقي سان حاصل ڪرڻ لاءِ:

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

HookScanner پاڻمرادو `vendor/` ۽ `node_modules/` ڊائريڪٽريون ڇڏي ڏئي ٿو.

## اسنڪرونس Job آرڪيٽيڪچر

ڊگهي وقت وٺندڙ پلگ ان آپريشنز (generate، install) کي لائيو progress tracking سان **async jobs** طور dispatch ڪيو ويندو آهي. AI chat interface progress لاءِ poll ڪري ٿو ۽ استعمال ڪندڙ ڏانهن status updates stream ڪري ٿو:

1. **Dispatch** — صلاحيت async job ٺاهي ٿي ۽ job ID واپس ڪري ٿي.
2. **Poll** — the agent polls `gratis_ai_job_status($job_id)` every 2 seconds.
3. **Stream** — وچ وارا progress پيغام chat thread ڏانهن push ڪيا ويندا آهن.
4. **Complete** — آخري نتيجو (success يا error) واپس ڪيو ۽ ڏيکاريو ويندو آهي.

job lifecycle events ۾ hook ڪرڻ لاءِ:

```php
add_action('gratis_ai_job_started', function(string $job_id, string $ability_slug): void {
    error_log("Job {$job_id} started for ability: {$ability_slug}");
}, 10, 2);

add_action('gratis_ai_job_completed', function(string $job_id, array $result): void {
    error_log("Job {$job_id} completed. Success: " . ($result['success'] ? 'yes' : 'no'));
}, 10, 2);
```
