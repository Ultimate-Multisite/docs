---
title: សមត្ថភាពគ្រប់គ្រងកម្មវិធីបន្ថែម
sidebar_position: 4
_i18n_hash: ef90f5181e76f8b1a3209101eded0653
---
# សមត្ថភាពគ្រប់គ្រងកម្មវិធីបន្ថែម

Gratis AI Agent v1.5.0 ភ្ជាប់មកជាមួយ **សមត្ថភាពគ្រប់គ្រងកម្មវិធីបន្ថែមចំនួន ៧** ដែលជំនួយការ AI អាចហៅប្រើក្នុងពេលសន្ទនា។ សមត្ថភាពទាំងនេះផ្តល់ការគ្រប់គ្រងតាមកម្មវិធីលើកម្មវិធីបន្ថែម WordPress ដែលបានដំឡើងតាមរយៈ [ប្រព័ន្ធបង្កើតកម្មវិធីបន្ថែម និងបរិស្ថានសាកល្បង](../../user-guide/administration/plugin-builder-and-sandbox)។

## ទិដ្ឋភាពទូទៅនៃសមត្ថភាព {#abilities-overview}

| សមត្ថភាព | Slug | ការពិពណ៌នា |
|---|---|---|
| រាយបញ្ជីកម្មវិធីបន្ថែម | `list_plugins` | បង្ហាញបញ្ជីកម្មវិធីបន្ថែមនៅក្នុងឃ្លាំងបរិស្ថានសាកល្បង ជាមួយស្ថានភាពរបស់វា។ |
| ទាញយកកម្មវិធីបន្ថែម | `get_plugin` | ទាញយកទិន្នន័យមេតា និងកូដប្រភពសម្រាប់កម្មវិធីបន្ថែមជាក់លាក់មួយតាម slug។ |
| បង្កើតកម្មវិធីបន្ថែម | `create_plugin` | បង្កើតកម្មវិធីបន្ថែមថ្មីពីការពិពណ៌នា ហើយរក្សាទុកវានៅក្នុងបរិស្ថានសាកល្បង។ |
| ធ្វើបច្ចុប្បន្នភាពកម្មវិធីបន្ថែម | `update_plugin` | ជំនួសកូដប្រភពរបស់កម្មវិធីបន្ថែមដោយកំណែថ្មី។ |
| លុបកម្មវិធីបន្ថែម | `delete_plugin` | លុបកម្មវិធីបន្ថែមចេញពីឃ្លាំងបរិស្ថានសាកល្បង។ បិទដំណើរការជាមុនសិន។ |
| ដំឡើងកម្មវិធីបន្ថែម | `install_plugin` | ដាក់ឱ្យប្រើកម្មវិធីបន្ថែមពីបរិស្ថានសាកល្បងទៅកាន់ថតកម្មវិធីបន្ថែម WordPress ផ្ទាល់។ |
| បើកដំណើរការកម្មវិធីបន្ថែម | `activate_plugin` | បើកដំណើរការកម្មវិធីបន្ថែមពីបរិស្ថានសាកល្បងក្នុងបរិស្ថាន wp-env sandbox។ |

## API សម្រាប់ដំឡើងកម្មវិធីបន្ថែម {#plugin-installer-api}

កម្មវិធីដំឡើងកម្មវិធីបន្ថែមគ្រប់គ្រងប្រតិបត្តិការប្រព័ន្ធឯកសារ នៅពេលដាក់ឱ្យប្រើ ឬលុបកម្មវិធីបន្ថែម។ ឥរិយាបថសំខាន់ៗ៖

- **ការផ្ទៀងផ្ទាត់ផ្លូវ**៖ ផ្លូវកម្មវិធីបន្ថែមទាំងអស់ត្រូវបានផ្ទៀងផ្ទាត់ជាមួយថតកម្មវិធីបន្ថែមដែលអនុញ្ញាត មុនពេលសរសេរឯកសារណាមួយ។ ការប៉ុនប៉ងឆ្លងកាត់ថតត្រូវបានបដិសេធ។
- **ការដំឡើងឯកសារច្រើន**៖ កម្មវិធីបន្ថែមមួយអាចមានឯកសារច្រើន។ កម្មវិធីដំឡើងបង្កើតថតកម្មវិធីបន្ថែម ហើយសរសេរឯកសារទាំងអស់ជាឯកតាតែមួយ។
- **ការធ្វើបច្ចុប្បន្នភាព**៖ ជំនួសឯកសារកម្មវិធីបន្ថែមដែលមានស្រាប់។ បិទដំណើរការកម្មវិធីបន្ថែមមុនពេលសរសេរ ដើម្បីជៀសវាងកំហុសស្ថានភាពមិនពេញលេញ។
- **លុបតាម slug**៖ រកទីតាំងថតកម្មវិធីបន្ថែមតាម slug បិទដំណើរការលើគេហទំព័រទាំងអស់ បន្ទាប់មកលុបថតចេញ។

### ចុះឈ្មោះកម្មវិធីគ្រប់គ្រងការដំឡើងផ្ទាល់ខ្លួន {#registering-a-custom-install-handler}

អ្នកអាចភ្ជាប់ទៅក្នុងវដ្តជីវិតនៃការដំឡើង ដោយប្រើ action `gratis_ai_plugin_installer_before_install` និង `gratis_ai_plugin_installer_after_install`៖

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

## បញ្ជីចុះឈ្មោះប្រព័ន្ធអេកូឡូស៊ី {#ecosystem-registry}

សមត្ថភាពត្រូវបានចុះឈ្មោះតាមរយៈ **បញ្ជីចុះឈ្មោះប្រព័ន្ធអេកូឡូស៊ីកម្មវិធីបន្ថែម**។ បញ្ជីចុះឈ្មោះនេះផ្គូផ្គង slug របស់សមត្ថភាពទៅនឹង class គ្រប់គ្រងរបស់វា ហើយបង្ហាញវាឱ្យកម្មវិធីបញ្ជូនឧបករណ៍របស់ភ្នាក់ងារ AI។

ដើម្បីចុះឈ្មោះសមត្ថភាពគ្រប់គ្រងកម្មវិធីបន្ថែមផ្ទាល់ខ្លួន៖

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

class សមត្ថភាពរបស់អ្នកត្រូវតែអនុវត្ត `Gratis_AI_Ability_Interface`៖

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

## ការរួមបញ្ចូល HookScanner {#hookscanner-integration}

សមត្ថភាព `create_plugin` និង `update_plugin` ដំណើរការ **HookScanner** ដោយស្វ័យប្រវត្តិលើកូដដែលទើបបង្កើតថ្មី។ HookScanner ត្រឡប់បញ្ជី hook ប្រភេទ action និង filter របស់ WordPress ដែលបានចុះឈ្មោះដោយកម្មវិធីបន្ថែម។

ដើម្បីទាញយកលទ្ធផល HookScanner តាមកម្មវិធី៖

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

HookScanner រំលងថត `vendor/` និង `node_modules/` ដោយស្វ័យប្រវត្តិ។

## ស្ថាបត្យកម្មការងារ Async {#async-job-architecture}

ប្រតិបត្តិការកម្មវិធីបន្ថែមដែលចំណាយពេលយូរ (បង្កើត ដំឡើង) ត្រូវបានបញ្ជូនជា **ការងារ async** ជាមួយការតាមដានវឌ្ឍនភាពផ្ទាល់។ ចំណុចប្រទាក់ជជែក AI ស្ទង់មើលវឌ្ឍនភាព ហើយបញ្ជូនបច្ចុប្បន្នភាពស្ថានភាពទៅអ្នកប្រើ៖

1. **បញ្ជូន** — សមត្ថភាពបង្កើតការងារ async ហើយត្រឡប់ ID ការងារ។
2. **Poll** — the agent polls `gratis_ai_job_status($job_id)` every 2 seconds.
3. **បញ្ជូនបន្ត** — សារវឌ្ឍនភាពកណ្ដាលត្រូវបានផ្ញើទៅខ្សែសន្ទនា។
4. **បញ្ចប់** — លទ្ធផលចុងក្រោយ (ជោគជ័យ ឬកំហុស) ត្រូវបានត្រឡប់ និងបង្ហាញ។

ដើម្បីភ្ជាប់ទៅព្រឹត្តិការណ៍វដ្តជីវិតការងារ៖

```php
add_action('gratis_ai_job_started', function(string $job_id, string $ability_slug): void {
    error_log("Job {$job_id} started for ability: {$ability_slug}");
}, 10, 2);

add_action('gratis_ai_job_completed', function(string $job_id, array $result): void {
    error_log("Job {$job_id} completed. Success: " . ($result['success'] ? 'yes' : 'no'));
}, 10, 2);
```
