---
title: Қобилиятҳои идоракунии плагинҳо
sidebar_position: 4
_i18n_hash: ef90f5181e76f8b1a3209101eded0653
---
# Қобилиятҳои идоракунии plugin

Gratis AI Agent v1.5.0 бо **7 қобилияти идоракунии plugin** меояд, ки AI assistant метавонад онҳоро ҳангоми суҳбат фаро хонад. Ин қобилиятҳо назорати барномавиро бар WordPress plugin-ҳое, ки тавассути [Plugin Builder & Sandbox System](../../user-guide/administration/plugin-builder-and-sandbox) насб шудаанд, таъмин мекунанд.

## Шарҳи қобилиятҳо {#abilities-overview}

| Қобилият | Slug | Тавсиф |
|---|---|---|
| Рӯйхати plugin-ҳо | `list_plugins` | Рӯйхати plugin-ҳоро дар анбори sandbox бо ҳолати онҳо бармегардонад. |
| Гирифтани plugin | `get_plugin` | Метамаълумот ва коди сарчашмаи plugin-и мушаххасро аз рӯйи slug мегирад. |
| Эҷоди plugin | `create_plugin` | Аз тавсиф plugin-и нав месозад ва онро дар sandbox нигоҳ медорад. |
| Навсозии plugin | `update_plugin` | Коди сарчашмаи plugin-ро бо версияи нав иваз мекунад. |
| Ҳазфи plugin | `delete_plugin` | Plugin-ро аз анбори sandbox хориҷ мекунад. Аввал ғайрифаъол мекунад. |
| Насби plugin | `install_plugin` | Plugin-и sandbox-шударо ба директорияи зиндаи WordPress plugin ҷойгир мекунад. |
| Фаъолсозии plugin | `activate_plugin` | Plugin-и sandbox-шударо дар муҳити wp-env sandbox фаъол мекунад. |

## Plugin Installer API {#plugin-installer-api}

Насбкунандаи plugin ҳангоми ҷойгиркунӣ ё хориҷ кардани plugin-ҳо амалиёти низоми файлҳоро иҷро мекунад. Рафторҳои калидӣ:

- **Санҷиши path**: Ҳамаи path-ҳои plugin пеш аз ҳар гуна навишти файл нисбат ба директорияи иҷозатшудаи plugin санҷида мешаванд. Кӯшишҳои гузариши директория рад карда мешаванд.
- **Насби бисёрфайла**: Plugin метавонад аз якчанд файл иборат бошад. Насбкунанда директорияи plugin-ро месозад ва ҳамаи файлҳоро ба таври атомӣ менависад.
- **Навсозӣ**: Файлҳои мавҷудаи plugin-ро иваз мекунад. Пеш аз навиштан plugin-ро ғайрифаъол мекунад, то аз хатогиҳои ҳолати нопурра пешгирӣ шавад.
- **Ҳазф аз рӯйи slug**: Директорияи plugin-ро аз рӯйи slug пайдо мекунад, дар ҳамаи сайтҳо ғайрифаъол мекунад, сипас директорияро хориҷ мекунад.

### Сабти коркарди фармоишии насб {#registering-a-custom-install-handler}

Шумо метавонед бо истифода аз амалҳои `gratis_ai_plugin_installer_before_install` ва `gratis_ai_plugin_installer_after_install` ба давраи ҳаётии насб пайваст шавед:

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

## Феҳристи экосистема {#ecosystem-registry}

Қобилиятҳо тавассути **феҳристи экосистемаи plugin** сабт мешаванд. Феҳрист slug-ҳои қобилиятро ба class-ҳои коркарди онҳо харита мекунад ва онҳоро ба dispatcher-и абзорҳои AI agent пешниҳод менамояд.

Барои сабти қобилияти фармоишии идоракунии plugin:

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

Class-и қобилияти шумо бояд `Gratis_AI_Ability_Interface`-ро амалӣ кунад:

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

## Ҳамгироии HookScanner {#hookscanner-integration}

Қобилиятҳои `create_plugin` ва `update_plugin` ба таври худкор **HookScanner**-ро нисбат ба коди нав тавлидшуда иҷро мекунанд. HookScanner рӯйхати hook-ҳои action ва filter-и WordPress-ро, ки аз ҷониби plugin сабт шудаанд, бармегардонад.

Барои гирифтани натиҷаҳои HookScanner ба таври барномавӣ:

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

HookScanner директорияҳои `vendor/` ва `node_modules/`-ро ба таври худкор нодида мегирад.

## Меъмории job-ҳои async {#async-job-architecture}

Амалиёти дарозмуддати plugin (тавлид, насб) ҳамчун **job-ҳои async** бо пайгирии зиндаи пешрафт фиристода мешаванд. Интерфейси чати AI барои пешрафт polling мекунад ва навсозиҳои ҳолатро ба корбар ҷараён медиҳад:

1. **Фиристодан** — қобилият job-и async эҷод мекунад ва job ID бармегардонад.
2. **Poll** — the agent polls `gratis_ai_job_status($job_id)` every 2 seconds.
3. **Ҷараён** — паёмҳои миёнаравии пешрафт ба риштаи чат фиристода мешаванд.
4. **Анҷом** — натиҷаи ниҳоӣ (муваффақият ё хато) баргардонида ва намоиш дода мешавад.

Барои пайваст шудан ба рӯйдодҳои давраи ҳаётии job:

```php
add_action('gratis_ai_job_started', function(string $job_id, string $ability_slug): void {
    error_log("Job {$job_id} started for ability: {$ability_slug}");
}, 10, 2);

add_action('gratis_ai_job_completed', function(string $job_id, array $result): void {
    error_log("Job {$job_id} completed. Success: " . ($result['success'] ? 'yes' : 'no'));
}, 10, 2);
```
