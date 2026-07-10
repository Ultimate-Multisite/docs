---
title: Могућности управљања додацима
sidebar_position: 4
_i18n_hash: ef90f5181e76f8b1a3209101eded0653
---
# Могућности управљања додацима {#plugin-management-abilities}

Gratis AI Agent v1.5.0 долази са **7 могућности управљања додацима** које AI асистент може да позове током разговора. Ове могућности пружају програмску контролу над WordPress додацима инсталираним преко [Система за прављење додатака и Sandbox](../../user-guide/administration/plugin-builder-and-sandbox).

## Преглед могућности {#abilities-overview}

| Могућност | Slug | Опис |
|---|---|---|
| Листа додатака | `list_plugins` | Враћа листу додатака у sandbox складишту са њиховим статусом. |
| Преузми додатак | `get_plugin` | Преузима метаподатке и изворни код за одређени додатак према slug-у. |
| Креирај додатак | `create_plugin` | Генерише нови додатак из описа и чува га у sandbox-у. |
| Ажурирај додатак | `update_plugin` | Замењује изворни код додатка новом верзијом. |
| Обриши додатак | `delete_plugin` | Уклања додатак из sandbox складишта. Прво га деактивира. |
| Инсталирај додатак | `install_plugin` | Поставља sandbox додатак у живи WordPress директоријум додатака. |
| Активирај додатак | `activate_plugin` | Активира sandbox додатак у wp-env sandbox окружењу. |

## API инсталатера додатака {#plugin-installer-api}

Инсталатер додатака управља операцијама над системом датотека приликом постављања или уклањања додатака. Кључна понашања:

- **Валидација путање**: Све путање додатака се валидирају у односу на дозвољени директоријум додатака пре било каквог уписа датотеке. Покушаји проласка кроз директоријуме се одбијају.
- **Инсталација више датотека**: Додатак може да се састоји од више датотека. Инсталатер креира директоријум додатка и атомски уписује све датотеке.
- **Ажурирање**: Замењује постојеће датотеке додатка. Деактивира додатак пре уписа како би се избегле грешке делимичног стања.
- **Брисање према slug-у**: Проналази директоријум додатка према slug-у, деактивира га на свим сајтовима, а затим уклања директоријум.

### Регистровање прилагођеног руковаоца инсталацијом {#registering-a-custom-install-handler}

Можете се закачити у животни циклус инсталације користећи акције `gratis_ai_plugin_installer_before_install` и `gratis_ai_plugin_installer_after_install`:

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

## Регистар екосистема {#ecosystem-registry}

Могућности се региструју преко **регистра екосистема додатака**. Регистар мапира slug-ове могућности на њихове класе руковаоце и излаже их диспечеру алата AI агента.

Да бисте регистровали прилагођену могућност управљања додацима:

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

Ваша класа могућности мора да имплементира `Gratis_AI_Ability_Interface`:

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

## Интеграција са HookScanner-ом {#hookscanner-integration}

Могућности `create_plugin` и `update_plugin` аутоматски покрећу **HookScanner** над новогенерисаним кодом. HookScanner враћа листу WordPress action и filter hook-ова које је додатак регистровао.

Да бисте програмски преузели резултате HookScanner-а:

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

HookScanner аутоматски прескаче директоријуме `vendor/` и `node_modules/`.

## Архитектура асинхроних послова {#async-job-architecture}

Дуготрајне операције над додацима (генерисање, инсталација) отпремају се као **асинхрони послови** са праћењем напретка уживо. Интерфејс AI ћаскања проверава напредак и стримује ажурирања статуса кориснику:

1. **Отпремање** — могућност креира асинхрони посао и враћа ID посла.
2. **Poll** — the agent polls `gratis_ai_job_status($job_id)` every 2 seconds.
3. **Стримовање** — посредне поруке о напретку се шаљу у нит ћаскања.
4. **Завршетак** — коначни резултат (успех или грешка) се враћа и приказује.

Да бисте се закачили у догађаје животног циклуса посла:

```php
add_action('gratis_ai_job_started', function(string $job_id, string $ability_slug): void {
    error_log("Job {$job_id} started for ability: {$ability_slug}");
}, 10, 2);

add_action('gratis_ai_job_completed', function(string $job_id, array $result): void {
    error_log("Job {$job_id} completed. Success: " . ($result['success'] ? 'yes' : 'no'));
}, 10, 2);
```
