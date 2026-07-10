---
title: Плагиндерди башкаруу мүмкүнчүлүктөрү
sidebar_position: 4
_i18n_hash: ef90f5181e76f8b1a3209101eded0653
---
# Плагинди башкаруу мүмкүнчүлүктөрү {#plugin-management-abilities}

Gratis AI Agent v1.5.0 сүйлөшүү учурунда AI жардамчы чакыра ала турган **плагинди башкаруунун 7 мүмкүнчүлүгү** менен келет. Бул мүмкүнчүлүктөр [Plugin Builder & Sandbox System](../../user-guide/administration/plugin-builder-and-sandbox) аркылуу орнотулган WordPress плагиндерин программалык түрдө башкарууну камсыздайт.

## Мүмкүнчүлүктөргө сереп {#abilities-overview}

| Мүмкүнчүлүк | Slug | Сүрөттөмө |
|---|---|---|
| Плагиндерди тизмелөө | `list_plugins` | Sandbox сактагычындагы плагиндердин тизмесин алардын абалы менен кайтарат. |
| Плагинди алуу | `get_plugin` | Белгилүү бир плагиндин slug боюнча метамаалыматын жана баштапкы кодун алат. |
| Плагин түзүү | `create_plugin` | Сүрөттөмөдөн жаңы плагин түзүп, аны sandbox ичинде сактайт. |
| Плагинди жаңыртуу | `update_plugin` | Плагиндин баштапкы кодун жаңы версия менен алмаштырат. |
| Плагинди өчүрүү | `delete_plugin` | Плагинди sandbox сактагычынан алып салат. Адегенде деактивациялайт. |
| Плагинди орнотуу | `install_plugin` | Sandbox ичиндеги плагинди жандуу WordPress плагиндер каталогуна жайгаштырат. |
| Плагинди активдештирүү | `activate_plugin` | wp-env sandbox чөйрөсүндө sandbox ичиндеги плагинди активдештирет. |

## Плагин орнотуучу API {#plugin-installer-api}

Плагин орнотуучу плагиндерди жайгаштырганда же алып салганда файл системасы операцияларын аткарат. Негизги жүрүм-турумдар:

- **Жолду текшерүү**: Файлга кандайдыр бир жазуу жасалардан мурун бардык плагин жолдору уруксат берилген плагин каталогуна карата текшерилет. Каталогдон чыгып кетүү аракеттери четке кагылат.
- **Көп файлдуу орнотуу**: Плагин бир нече файлдан турушу мүмкүн. Орнотуучу плагин каталогун түзүп, бардык файлдарды атомардуу түрдө жазат.
- **Жаңыртуу**: Учурдагы плагин файлдарын алмаштырат. Жарым-жартылай абал каталарын болтурбоо үчүн жазуудан мурун плагинди деактивациялайт.
- **Slug боюнча өчүрүү**: Плагин каталогун slug боюнча табат, бардык сайттарда деактивациялайт, андан кийин каталогду алып салат.

### Ыңгайлаштырылган орнотуу иштеткичин каттоо {#registering-a-custom-install-handler}

Орнотуу жашоо циклине `gratis_ai_plugin_installer_before_install` жана `gratis_ai_plugin_installer_after_install` аракеттери аркылуу кошула аласыз:

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

## Экосистема реестри {#ecosystem-registry}

Мүмкүнчүлүктөр **плагин экосистемасынын реестри** аркылуу катталат. Реестр мүмкүнчүлүк slug-дарын алардын иштетүүчү класстарына картага түшүрөт жана аларды AI агенттин курал диспетчерине жеткиликтүү кылат.

Ыңгайлаштырылган плагин башкаруу мүмкүнчүлүгүн каттоо үчүн:

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

Сиздин мүмкүнчүлүк классыңыз `Gratis_AI_Ability_Interface` ишке ашырышы керек:

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

## HookScanner интеграциясы {#hookscanner-integration}

`create_plugin` жана `update_plugin` мүмкүнчүлүктөрү жаңы түзүлгөн кодго каршы **HookScanner** автоматтык түрдө иштетет. HookScanner плагин тарабынан катталган WordPress action жана filter hook-торунун тизмесин кайтарат.

HookScanner натыйжаларын программалык түрдө алуу үчүн:

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

HookScanner `vendor/` жана `node_modules/` каталогдорун автоматтык түрдө өткөрүп жиберет.

## Асинхрондук иш архитектурасы {#async-job-architecture}

Узак убакыт иштеген плагин операциялары (түзүү, орнотуу) жандуу прогрессти көзөмөлдөө менен **асинхрондук иштер** катары жөнөтүлөт. AI чат интерфейси прогрессти сурамжылап, абал жаңыртууларын колдонуучуга агым түрүндө көрсөтөт:

1. **Жөнөтүү** — мүмкүнчүлүк асинхрондук иш түзүп, иш ID кайтарат.
2. **Poll** — the agent polls `gratis_ai_job_status($job_id)` every 2 seconds.
3. **Агым** — аралык прогресс билдирүүлөрү чат темасына жөнөтүлөт.
4. **Аяктоо** — акыркы натыйжа (ийгилик же ката) кайтарылып, көрсөтүлөт.

Иштин жашоо цикли окуяларына кошулуу үчүн:

```php
add_action('gratis_ai_job_started', function(string $job_id, string $ability_slug): void {
    error_log("Job {$job_id} started for ability: {$ability_slug}");
}, 10, 2);

add_action('gratis_ai_job_completed', function(string $job_id, array $result): void {
    error_log("Job {$job_id} completed. Success: " . ($result['success'] ? 'yes' : 'no'));
}, 10, 2);
```
