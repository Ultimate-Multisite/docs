---
title: Уместэнні кіравання плагінамі
sidebar_position: 4
_i18n_hash: ef90f5181e76f8b1a3209101eded0653
---
# Управленне плагінамі

Gratis AI Agent v1.5.0 пастаўляецца з **7 функцыяналаў па кіраванні плагінамі**, якія асістэнт AI можа выкарыстоўваць падчас размовы. Гэтыя функцыяляў дадаюць праграмнае кіраванне плагінамі WordPress, якія ўстаноўлены праз [Plugin Builder & Sandbox System](../../user-guide/administration/plugin-builder-and-sandbox).

## Агляд функцыяналаў {#abilities-overview}

| Функцыянал | Slug | Апісан |
|---|---|---|
| List Plugins | `list_plugins` | Паказвае спіс плагінаў у сандбокс-магазине з іх статусам. |
| Get Plugin | `get_plugin` | Апрацоўвае метаданыя і выкідковы код для канкрэтнага плагіна па slug. |
| Create Plugin | `create_plugin` | Гэнэруевывае новы плагін па апісанні і захоўвае яго ў сандбокс. |
| Update Plugin | `update_plugin` | Замяняе выкідковы код плагіна на новую версію. |
| Delete Plugin | `delete_plugin` | Вынасіць плагін з сандбокс-магазина. Сперш ад актывуе. |
| Install Plugin | `install_plugin` | Размяшчае сандбокс-плагін у практычным каталогу плагінаў WordPress. |
| Activate Plugin | `activate_plugin` | Актывуе сандбокс-плагін у асяроддзі сандбокса wp-env. |

## API для ўстаноўкі плагінаў {#plugin-installer-api}

Устаноўнік плагінаў адпрацоўвае працэсы з файловой сістэмай пры размяшчэнні або выдаленні плагінаў. Асноўныя правілы працы:

- **Валідацыя шляху**: Усе шляхі плагінаў валідуюцца адносна дазволенага каталогу плагінаў да любыга zapісу файла. Папыткі траверсацыі каталога адхіляюцца.
- **Устаноўка некалькіх файлаў**: Плагін можа складацца з некалькіх файлаў. Устаноўнік стварае каталог плагіна і zapісвае ўсе файлы аткатнымі (атамарна).
- **Абнаўленне**: Замяняе існуючыя файлы плагіна. Ад актывуе плагін, перш чым zapісаць, каб пазбегнуць памылак непаўторнага стану.
- **Выдаленне па slug**: Вызначае каталог плагіна па slug, ад актывуе на ўсіх сайтах, а потым выдаляе каталог.

### Рэгістрацыя карыстальнікага handler-а ўстаноўкі {#registering-a-custom-install-handler}

Вы можаце падключыцца да цыкла жыцця ўстаноўкі, выкарыстоўваючы дзеянні `gratis_ai_plugin_installer_before_install` і `gratis_ai_plugin_installer_after_install`:

```php
add_action('gratis_ai_plugin_installer_before_install', function(string $slug, array $files): void {
    // $slug: назва каталогу плагіна
    // $files: асоцыватарны масив адноснага шляху => вміст файла
    error_log("Устаноўка плагіна: {$slug} з " . count($files) . " файламі.");
}, 10, 2);

add_action('gratis_ai_plugin_installer_after_install', function(string $slug, bool $success): void {
    if ($success) {
        error_log("Плагін {$slug} паспяхова ўстаноўлены.");
    }
}, 10, 2);
```

## Рэгістрацыя экасістэмы {#ecosystem-registry}

Функцыяналіў рэгіструецца праз **рэгістр экасістэмы плагінаў**. Рэгістр спалучае slugs функцыяналаў з іх класамі-апрацоўнікамі і прадастаўляе іх диспатчэру інструментаў агента AI.

Каб рэгіструваць карыстальнікавы функцыянал па кіраванні плагінамі:

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

Ваш клас функцыяналу павінен рэалізаваць `Gratis_AI_Ability_Interface`:

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

## Інтеграцыя HookScanner {#hookscanner-integration}

Функцыяналіў `create_plugin` і `update_plugin` аўтаматычна праходзяць **HookScanner** па нова згэнэным каду. HookScanner паказвае спіс дзеянняў і фільтраў WordPress, якія рэгіструе плагін.

Каб праграмачна атрымаць вынікі HookScanner:

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

HookScanner аўтаматычна ігнаруе каталогі `vendor/` і `node_modules/`.

## Архітэктура асінхроннай працы {#async-job-architecture}

Доўгапраходныя працэсы з плагінамі (гэнэрацыя, ўстаноўка) адпраўляюцца як **асінхронныя працы** з праглядам прагрэсу ў рэжыме рэальнага часу. Інтерфейс чату AI праходзіць па тэставанні прагрэсу і перадае абнаўленні статусу карытарю:

1. **Dispatch** — функцыянал стварае асінхронную працу і павяртае ID працы.
2. **Poll** — агент праходзіць па `gratis_ai_job_status($job_id)` кожныя 2 секунды.
3. **Stream** — паміжкрэневыя паведамленні пра прагрэс перадаюцца ў тэдчат.
4. **Complete** — павяртаецца і адлюстроўваецца канчатковы вынік (успіх або памылка).

Каб падключыцца да падзей цыклу жыцця працы:

```php
add_action('gratis_ai_job_started', function(string $job_id, string $ability_slug): void {
    error_log("Праца {$job_id} пачата для функцыяналу: {$ability_slug}");
}, 10, 2);

add_action('gratis_ai_job_completed', function(string $job_id, array $result): void {
    error_log("Праца {$job_id} завершана. Успіх: " . ($result['success'] ? 'так' : 'ня'));
}, 10, 2);
```
