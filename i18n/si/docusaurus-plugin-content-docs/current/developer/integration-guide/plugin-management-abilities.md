---
title: ප්ලගින කළමනාකරණ හැකියාවන්
sidebar_position: 4
_i18n_hash: ef90f5181e76f8b1a3209101eded0653
---
# ප්ලගින කළමනාකරණ හැකියාවන්

Gratis AI Agent v1.5.0 සමඟ **ප්ලගින කළමනාකරණ හැකියාවන් 7ක්** ලැබේ. සංවාදයක් අතරතුර AI සහායකයාට ඒවා කැඳවිය හැක. මෙම හැකියාවන් [ප්ලගින සාදකය සහ Sandbox පද්ධතිය](../../user-guide/administration/plugin-builder-and-sandbox) හරහා ස්ථාපනය කළ WordPress ප්ලගින සඳහා ක්‍රමලේඛනමය පාලනය සපයයි.

## හැකියාවන් සාරාංශය {#abilities-overview}

| හැකියාව | Slug | විස්තරය |
|---|---|---|
| ප්ලගින ලැයිස්තුගත කරන්න | `list_plugins` | sandbox ගබඩාවේ ඇති ප්ලගින ලැයිස්තුවක් ඒවායේ තත්ත්වය සමඟ ලබා දෙයි. |
| ප්ලගිනය ලබා ගන්න | `get_plugin` | slug අනුව නිශ්චිත ප්ලගිනයක metadata සහ source code ලබා ගනී. |
| ප්ලගිනය සාදන්න | `create_plugin` | විස්තරයකින් නව ප්ලගිනයක් ජනනය කර එය sandbox තුළ ගබඩා කරයි. |
| ප්ලගිනය යාවත්කාලීන කරන්න | `update_plugin` | ප්ලගිනයක source code නව අනුවාදයකින් ප්‍රතිස්ථාපනය කරයි. |
| ප්ලගිනය මකන්න | `delete_plugin` | sandbox ගබඩාවෙන් ප්ලගිනයක් ඉවත් කරයි. පළමුව අක්‍රීය කරයි. |
| ප්ලගිනය ස්ථාපනය කරන්න | `install_plugin` | sandbox කළ ප්ලගිනයක් සජීවී WordPress ප්ලගින නාමාවලියට යොදවයි. |
| ප්ලගිනය සක්‍රීය කරන්න | `activate_plugin` | wp-env sandbox පරිසරය තුළ sandbox කළ ප්ලගිනයක් සක්‍රීය කරයි. |

## ප්ලගින ස්ථාපක API {#plugin-installer-api}

ප්ලගින යොදවීමේදී හෝ ඉවත් කිරීමේදී ප්ලගින ස්ථාපකය ගොනු පද්ධති ක්‍රියාකාරකම් හසුරුවයි. ප්‍රධාන හැසිරීම්:

- **මාර්ග වලංගුකරණය**: ගොනුවක් ලිවීමට පෙර සියලුම ප්ලගින මාර්ග අවසර ලත් ප්ලගින නාමාවලියට එරෙහිව වලංගු කරයි. නාමාවලි හරහා ගමන් කිරීමට උත්සාහ කිරීම ප්‍රතික්ෂේප කරයි.
- **බහු-ගොනු ස්ථාපනය**: ප්ලගිනයක් ගොනු කිහිපයකින් සමන්විත විය හැක. ස්ථාපකය ප්ලගින නාමාවලිය සාදා සියලුම ගොනු atomic ලෙස ලියයි.
- **යාවත්කාලීන කිරීම**: පවතින ප්ලගින ගොනු ප්‍රතිස්ථාපනය කරයි. අර්ධ-තත්ත්ව දෝෂ වළක්වා ගැනීමට ලිවීමට පෙර ප්ලගිනය අක්‍රීය කරයි.
- **slug අනුව මැකීම**: slug අනුව ප්ලගින නාමාවලිය සොයා, සියලුම අඩවි හරහා අක්‍රීය කර, පසුව නාමාවලිය ඉවත් කරයි.

### අභිරුචි ස්ථාපන හසුරුවනයක් ලියාපදිංචි කිරීම {#registering-a-custom-install-handler}

`gratis_ai_plugin_installer_before_install` සහ `gratis_ai_plugin_installer_after_install` actions භාවිතයෙන් ස්ථාපන ජීවනචක්‍රයට hook කළ හැක:

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

## පරිසර පද්ධති රෙජිස්ට්‍රිය {#ecosystem-registry}

හැකියාවන් **ප්ලගින පරිසර පද්ධති රෙජිස්ට්‍රිය** හරහා ලියාපදිංචි වේ. රෙජිස්ට්‍රිය හැකියාවන්ගේ slugs ඒවායේ handler classes වෙත සිතියම් කර, AI agent ගේ tool dispatcher වෙත ඒවා නිරාවරණය කරයි.

අභිරුචි ප්ලගින කළමනාකරණ හැකියාවක් ලියාපදිංචි කිරීමට:

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

ඔබේ හැකියා class එක `Gratis_AI_Ability_Interface` ක්‍රියාත්මක කළ යුතුය:

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

## HookScanner ඒකාබද්ධ කිරීම {#hookscanner-integration}

`create_plugin` සහ `update_plugin` හැකියාවන් අලුතින් ජනනය කළ code සඳහා ස්වයංක්‍රීයව **HookScanner** ධාවනය කරයි. HookScanner ප්ලගිනය ලියාපදිංචි කළ WordPress action සහ filter hooks ලැයිස්තුවක් ලබා දෙයි.

HookScanner ප්‍රතිඵල ක්‍රමලේඛනමය ලෙස ලබා ගැනීමට:

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

HookScanner `vendor/` සහ `node_modules/` නාමාවලි ස්වයංක්‍රීයව මඟ හරියි.

## අසමකාලීන කාර්ය ව්‍යුහය {#async-job-architecture}

දිගු වේලාවක් ගතවන ප්ලගින ක්‍රියාකාරකම් (ජනනය, ස්ථාපනය) සජීවී ප්‍රගති අනුගමනය සමඟ **අසමකාලීන කාර්ය** ලෙස යවයි. AI chat අතුරුමුහුණත ප්‍රගතිය සඳහා poll කර, තත්ත්ව යාවත්කාලීන පරිශීලකයා වෙත stream කරයි:

1. **යැවීම** — හැකියාව අසමකාලීන කාර්යයක් සාදා job ID එකක් ලබා දෙයි.
2. **Poll** — the agent polls `gratis_ai_job_status($job_id)` every 2 seconds.
3. **Stream** — අතරමැදි ප්‍රගති පණිවිඩ chat thread වෙත push කරයි.
4. **සම්පූර්ණ කිරීම** — අවසාන ප්‍රතිඵලය (සාර්ථකත්වය හෝ දෝෂය) ආපසු ලබා දී පෙන්වයි.

කාර්ය ජීවනචක්‍ර සිදුවීම්වලට hook කිරීමට:

```php
add_action('gratis_ai_job_started', function(string $job_id, string $ability_slug): void {
    error_log("Job {$job_id} started for ability: {$ability_slug}");
}, 10, 2);

add_action('gratis_ai_job_completed', function(string $job_id, array $result): void {
    error_log("Job {$job_id} completed. Success: " . ($result['success'] ? 'yes' : 'no'));
}, 10, 2);
```
