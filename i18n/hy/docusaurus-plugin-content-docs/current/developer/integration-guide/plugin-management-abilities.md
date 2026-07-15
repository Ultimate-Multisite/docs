---
title: Փլագինների կառավարման հնարավորություններ
sidebar_position: 4
_i18n_hash: ef90f5181e76f8b1a3209101eded0653
---
# Պլագինների կառավարման կարողություններ

Gratis AI Agent v1.5.0-ը տրամադրվում է **պլագինների կառավարման 7 կարողություններով**, որոնք AI օգնականը կարող է կանչել զրույցի ընթացքում։ Այս կարողությունները ծրագրային վերահսկում են տրամադրում WordPress պլագինների նկատմամբ, որոնք տեղադրվել են [Պլագինների կառուցման և Sandbox համակարգի](../../user-guide/administration/plugin-builder-and-sandbox) միջոցով։

## Կարողությունների ակնարկ {#abilities-overview}

| Կարողություն | Slug | Նկարագրություն |
|---|---|---|
| Ցուցակել պլագինները | `list_plugins` | Վերադարձնում է sandbox պահոցում գտնվող պլագինների ցանկը՝ դրանց կարգավիճակով։ |
| Ստանալ պլագինը | `get_plugin` | Վերցնում է կոնկրետ պլագինի մետատվյալներն ու սկզբնական կոդը՝ ըստ slug-ի։ |
| Ստեղծել պլագին | `create_plugin` | Նկարագրությունից գեներացնում է նոր պլագին և պահում այն sandbox-ում։ |
| Թարմացնել պլագինը | `update_plugin` | Փոխարինում է պլագինի սկզբնական կոդը նոր տարբերակով։ |
| Ջնջել պլագինը | `delete_plugin` | Հեռացնում է պլագինը sandbox պահոցից։ Նախ ապաակտիվացնում է։ |
| Տեղադրել պլագինը | `install_plugin` | Տեղակայում է sandbox-ում գտնվող պլագինը կենդանի WordPress պլագինների պանակում։ |
| Ակտիվացնել պլագինը | `activate_plugin` | Ակտիվացնում է sandbox-ում գտնվող պլագինը wp-env sandbox միջավայրում։ |

## Պլագինի տեղադրիչի API {#plugin-installer-api}

Պլագինի տեղադրիչը կառավարում է ֆայլային համակարգի գործողությունները պլագիններ տեղակայելիս կամ հեռացնելիս։ Հիմնական վարքագծեր՝

- **Ուղու վավերացում**․ բոլոր պլագինների ուղիները վավերացվում են թույլատրված պլագինների պանակի նկատմամբ՝ նախքան որևէ ֆայլի գրառում։ Պանակների traversal-ի փորձերը մերժվում են։
- **Բազմաֆայլ տեղադրում**․ պլագինը կարող է բաղկացած լինել մի քանի ֆայլերից։ Տեղադրիչը ստեղծում է պլագինի պանակը և ատոմար կերպով գրում բոլոր ֆայլերը։
- **Թարմացում**․ փոխարինում է գոյություն ունեցող պլագինի ֆայլերը։ Գրելուց առաջ ապաակտիվացնում է պլագինը՝ մասնակի վիճակի սխալներից խուսափելու համար։
- **Ջնջում ըստ slug-ի**․ գտնում է պլագինի պանակը ըստ slug-ի, ապաակտիվացնում բոլոր կայքերում, ապա հեռացնում պանակը։

### Հատուկ տեղադրման մշակիչի գրանցում {#registering-a-custom-install-handler}

Դուք կարող եք միանալ տեղադրման կենսացիկլին՝ օգտագործելով `gratis_ai_plugin_installer_before_install` և `gratis_ai_plugin_installer_after_install` գործողությունները․

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

## Էկոհամակարգի ռեեստր {#ecosystem-registry}

Կարողությունները գրանցվում են **պլագինների էկոհամակարգի ռեեստրի** միջոցով։ Ռեեստրը քարտեզագրում է կարողությունների slug-երը դրանց մշակիչ դասերին և հասանելի է դարձնում դրանք AI գործակալի գործիքների dispatcher-ին։

Հատուկ պլագինի կառավարման կարողություն գրանցելու համար՝

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

Ձեր կարողության դասը պետք է իրականացնի `Gratis_AI_Ability_Interface`-ը․

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

## HookScanner ինտեգրում {#hookscanner-integration}

`create_plugin` և `update_plugin` կարողությունները ավտոմատ կերպով գործարկում են **HookScanner**-ը նոր գեներացված կոդի նկատմամբ։ HookScanner-ը վերադարձնում է WordPress գործողությունների և ֆիլտրերի hook-երի ցանկը, որոնք գրանցվել են պլագինի կողմից։

HookScanner-ի արդյունքները ծրագրային կերպով ստանալու համար՝

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

HookScanner-ը ավտոմատ կերպով բաց է թողնում `vendor/` և `node_modules/` պանակները։

## Ասինխրոն աշխատանքի ճարտարապետություն {#async-job-architecture}

Երկարատև պլագինային գործողությունները (գեներացում, տեղադրում) ուղարկվում են որպես **ասինխրոն աշխատանքներ**՝ կենդանի առաջընթացի հետևմամբ։ AI զրույցի միջերեսը հարցում է առաջընթացը և կարգավիճակի թարմացումները հոսքային կերպով փոխանցում օգտատիրոջը․

1. **Ուղարկում** — կարողությունը ստեղծում է ասինխրոն աշխատանք և վերադարձնում աշխատանքի ID։
2. **Poll** — the agent polls `gratis_ai_job_status($job_id)` every 2 seconds.
3. **Հոսք** — միջանկյալ առաջընթացի հաղորդագրությունները մղվում են զրույցի շղթա։
4. **Ավարտ** — վերջնական արդյունքը (հաջողություն կամ սխալ) վերադարձվում և ցուցադրվում է։

Աշխատանքի կենսացիկլի իրադարձություններին միանալու համար՝

```php
add_action('gratis_ai_job_started', function(string $job_id, string $ability_slug): void {
    error_log("Job {$job_id} started for ability: {$ability_slug}");
}, 10, 2);

add_action('gratis_ai_job_completed', function(string $job_id, array $result): void {
    error_log("Job {$job_id} completed. Success: " . ($result['success'] ? 'yes' : 'no'));
}, 10, 2);
```
