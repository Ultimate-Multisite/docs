---
title: Плагиндерді басқару мүмкіндіктері
sidebar_position: 4
_i18n_hash: ef90f5181e76f8b1a3209101eded0653
---
# Plugin басқару қабілеттері

Gratis AI Agent v1.5.0 нұсқасында AI көмекшісі әңгіме барысында шақыра алатын **7 plugin басқару қабілеті** бар. Бұл қабілеттер [Plugin Builder & Sandbox System](../../user-guide/administration/plugin-builder-and-sandbox) арқылы орнатылған WordPress plugin-дерін бағдарламалық түрде басқаруды қамтамасыз етеді.

## Қабілеттерге шолу {#abilities-overview}

| Қабілет | Slug | Сипаттама |
|---|---|---|
| Plugin-дерді тізімдеу | `list_plugins` | Sandbox қоймасындағы plugin-дер тізімін олардың күйімен бірге қайтарады. |
| Plugin алу | `get_plugin` | Белгілі бір plugin үшін slug бойынша метадеректер мен бастапқы кодты алады. |
| Plugin жасау | `create_plugin` | Сипаттама негізінде жаңа plugin жасайды және оны sandbox ішінде сақтайды. |
| Plugin жаңарту | `update_plugin` | Plugin-нің бастапқы кодын жаңа нұсқамен ауыстырады. |
| Plugin жою | `delete_plugin` | Plugin-ді sandbox қоймасынан алып тастайды. Алдымен өшіреді. |
| Plugin орнату | `install_plugin` | Sandbox-тағы plugin-ді тірі WordPress plugin каталогына орналастырады. |
| Plugin белсендіру | `activate_plugin` | Sandbox-тағы plugin-ді wp-env sandbox ортасында белсендіреді. |

## Plugin Installer API {#plugin-installer-api}

Plugin орнатқышы plugin-дерді орналастыру немесе алып тастау кезінде файлдық жүйе операцияларын өңдейді. Негізгі әрекеттері:

- **Жолды тексеру**: Кез келген файл жазбас бұрын барлық plugin жолдары рұқсат етілген plugin каталогымен салыстырылып тексеріледі. Каталогтан тыс өту әрекеттері қабылданбайды.
- **Көп файлды орнату**: Plugin бірнеше файлдан тұруы мүмкін. Орнатқыш plugin каталогын жасап, барлық файлдарды атомарлы түрде жазады.
- **Жаңарту**: Бар plugin файлдарын ауыстырады. Жартылай күй қателерін болдырмау үшін жазбас бұрын plugin-ді өшіреді.
- **Slug бойынша жою**: Plugin каталогын slug бойынша табады, барлық сайттар бойынша өшіреді, содан кейін каталогты алып тастайды.

### Таңдамалы орнату өңдегішін тіркеу {#registering-a-custom-install-handler}

Орнату өмірлік цикліне `gratis_ai_plugin_installer_before_install` және `gratis_ai_plugin_installer_after_install` әрекеттері арқылы қосыла аласыз:

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

## Экожүйе тізілімі {#ecosystem-registry}

Қабілеттер **plugin экожүйе тізілімі** арқылы тіркеледі. Тізілім қабілет slug-тарын олардың өңдегіш кластарына сәйкестендіріп, оларды AI агентінің құрал диспетчеріне ұсынады.

Таңдамалы plugin басқару қабілетін тіркеу үшін:

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

Сіздің қабілет класыңыз `Gratis_AI_Ability_Interface` интерфейсін іске асыруы керек:

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

`create_plugin` және `update_plugin` қабілеттері жаңадан жасалған кодқа **HookScanner** құралын автоматты түрде іске қосады. HookScanner plugin тіркеген WordPress action және filter hook-тарының тізімін қайтарады.

HookScanner нәтижелерін бағдарламалық түрде алу үшін:

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

HookScanner `vendor/` және `node_modules/` каталогтарын автоматты түрде өткізіп жібереді.

## Асинхронды тапсырма архитектурасы {#async-job-architecture}

Ұзақ орындалатын plugin операциялары (жасау, орнату) тірі прогресс бақылауымен **асинхронды тапсырмалар** ретінде жіберіледі. AI чат интерфейсі прогресті сұрап отырады және күй жаңартуларын пайдаланушыға ағын түрінде жеткізеді:

1. **Жіберу** — қабілет асинхронды тапсырма жасап, тапсырма ID-ін қайтарады.
2. **Poll** — the agent polls `gratis_ai_job_status($job_id)` every 2 seconds.
3. **Ағын** — аралық прогресс хабарлары чат тармағына жіберіледі.
4. **Аяқтау** — соңғы нәтиже (сәттілік немесе қате) қайтарылады және көрсетіледі.

Тапсырма өмірлік циклі оқиғаларына қосылу үшін:

```php
add_action('gratis_ai_job_started', function(string $job_id, string $ability_slug): void {
    error_log("Job {$job_id} started for ability: {$ability_slug}");
}, 10, 2);

add_action('gratis_ai_job_completed', function(string $job_id, array $result): void {
    error_log("Job {$job_id} completed. Success: " . ($result['success'] ? 'yes' : 'no'));
}, 10, 2);
```
