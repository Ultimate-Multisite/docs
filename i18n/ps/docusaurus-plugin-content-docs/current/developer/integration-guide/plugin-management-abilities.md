---
title: د پلگین مدیریت وړتیاوې
sidebar_position: 4
_i18n_hash: ef90f5181e76f8b1a3209101eded0653
---
# د پلګین مدیریت وړتیاوې

Gratis AI Agent v1.5.0 له **۷ د پلګین مدیریت وړتیاوو** سره راځي چې AI مرستیال یې د خبرو اترو پر مهال رابللی شي. دا وړتیاوې د هغو WordPress پلګینونو پر سر پروګرامي کنټرول برابروي چې د [پلګین جوړوونکي او Sandbox سیسټم](../../user-guide/administration/plugin-builder-and-sandbox) له لارې نصب شوي وي.

## د وړتیاوو لنډیز {#abilities-overview}

| وړتیا | سلاګ | تفصیل |
|---|---|---|
| پلګینونه لېست کړئ | `list_plugins` | د sandbox زېرمه کې د پلګینونو لېست د هغوی له حالت سره راګرځوي. |
| پلګین ترلاسه کړئ | `get_plugin` | د سلاګ له مخې د ځانګړي پلګین metadata او سرچینه کوډ ترلاسه کوي. |
| پلګین جوړ کړئ | `create_plugin` | له تفصیل څخه نوی پلګین جوړوي او په sandbox کې یې ساتي. |
| پلګین تازه کړئ | `update_plugin` | د پلګین سرچینه کوډ له نوې نسخې سره بدلوي. |
| پلګین ړنګ کړئ | `delete_plugin` | پلګین د sandbox زېرمه څخه لرې کوي. لومړی یې غیرفعالوي. |
| پلګین نصب کړئ | `install_plugin` | sandbox شوی پلګین د ژوندۍ WordPress پلګین ډایرکټرۍ ته ځای پر ځای کوي. |
| پلګین فعال کړئ | `activate_plugin` | په wp-env sandbox چاپېریال کې sandbox شوی پلګین فعالوي. |

## د پلګین نصبوونکي API {#plugin-installer-api}

د پلګین نصبوونکی د فایل سیسټم عملیات اداره کوي کله چې پلګینونه ځای پر ځای یا لرې کېږي. مهم چلندونه:

- **د لارې اعتبارسنجونه**: د هر فایل لیکلو مخکې ټولې پلګین لارې د اجازه ورکړل شوې پلګین ډایرکټرۍ پر وړاندې اعتبارسنجېږي. د ډایرکټرۍ تېرېدنې هڅې رد کېږي.
- **څو-فایلي نصب**: یو پلګین ښايي له څو فایلونو جوړ وي. نصبوونکی د پلګین ډایرکټري جوړوي او ټول فایلونه په اټومي ډول لیکي.
- **تازه کول**: شته پلګین فایلونه بدلوي. د لیکلو مخکې پلګین غیرفعالوي، څو د نیمګړي حالت تېروتنو مخه ونیول شي.
- **د سلاګ له مخې ړنګول**: د سلاګ له مخې د پلګین ډایرکټري پیدا کوي، په ټولو سایټونو کې یې غیرفعالوي، بیا ډایرکټري لرې کوي.

### د دودیز نصب سمبالوونکي ثبتول {#registering-a-custom-install-handler}

تاسو کولی شئ د `gratis_ai_plugin_installer_before_install` او `gratis_ai_plugin_installer_after_install` actions په کارولو د نصب د ژوند-پړاو سره ونښلئ:

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

## د ایکوسیستم ثبت‌کتاب {#ecosystem-registry}

وړتیاوې د **پلګین ایکوسیستم ثبت‌کتاب** له لارې ثبتېږي. ثبت‌کتاب د وړتیاوو سلاګونه د هغوی handler classes ته نښلوي او د AI agent د وسیلو dispatcher ته یې ښکاره کوي.

د دودیزې پلګین مدیریت وړتیا ثبتولو لپاره:

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

ستاسو د وړتیا class باید `Gratis_AI_Ability_Interface` پلي کړي:

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

## HookScanner ادغام {#hookscanner-integration}

د `create_plugin` او `update_plugin` وړتیاوې په اوتومات ډول **HookScanner** پر نوي جوړ شوي کوډ چلوي. HookScanner د WordPress action او filter hooks لېست راګرځوي چې د پلګین له خوا ثبت شوي وي.

د HookScanner پایلې په پروګرامي ډول ترلاسه کولو لپاره:

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

HookScanner په اوتومات ډول `vendor/` او `node_modules/` ډایرکټرۍ پرېږدي.

## د ناهممهاله دندې جوړښت {#async-job-architecture}

اوږد-مهاله پلګین عملیات (جوړول، نصب) د **ناهممهاله دندو** په توګه لېږل کېږي، له ژوندۍ پرمختګ څارنې سره. د AI chat انٹرفېس د پرمختګ لپاره پوښتنې کوي او کارن ته د حالت تازه‌معلومات بهوي:

1. **لېږل** — وړتیا یوه ناهممهاله دنده جوړوي او د دندې ID راګرځوي.
2. **Poll** — the agent polls `gratis_ai_job_status($job_id)` every 2 seconds.
3. **بهول** — منځني پرمختګ پیغامونه د chat تار ته ټېل وهل کېږي.
4. **بشپړول** — وروستۍ پایله (بریا یا تېروتنه) راګرځول کېږي او ښودل کېږي.

د دندې د ژوند-پړاو پېښو سره د نښلولو لپاره:

```php
add_action('gratis_ai_job_started', function(string $job_id, string $ability_slug): void {
    error_log("Job {$job_id} started for ability: {$ability_slug}");
}, 10, 2);

add_action('gratis_ai_job_completed', function(string $job_id, array $result): void {
    error_log("Job {$job_id} completed. Success: " . ($result['success'] ? 'yes' : 'no'));
}, 10, 2);
```
