---
title: Galluoedd Rheoli Ategion
sidebar_position: 4
_i18n_hash: ef90f5181e76f8b1a3209101eded0653
---
# Galluoedd Rheoli Plugin

Mae Gratis AI Agent v1.5.0 yn dod â **7 gallu rheoli plugin** y gall y cynorthwyydd AI eu galw yn ystod sgwrs. Mae’r galluoedd hyn yn darparu rheolaeth raglennol dros plugins WordPress sydd wedi’u gosod drwy’r [Plugin Builder & Sandbox System](../../user-guide/administration/plugin-builder-and-sandbox).

## Trosolwg o’r Galluoedd

| Gallu | Slug | Disgrifiad |
|---|---|---|
| Rhestru Plugins | `list_plugins` | Yn dychwelyd rhestr o plugins yn y storfa sandbox gyda’u statws. |
| Cael Plugin | `get_plugin` | Yn adalw metadata a chod ffynhonnell ar gyfer plugin penodol yn ôl slug. |
| Creu Plugin | `create_plugin` | Yn cynhyrchu plugin newydd o ddisgrifiad ac yn ei storio yn y sandbox. |
| Diweddaru Plugin | `update_plugin` | Yn disodli cod ffynhonnell plugin â fersiwn newydd. |
| Dileu Plugin | `delete_plugin` | Yn tynnu plugin o’r storfa sandbox. Yn ei ddadactifadu yn gyntaf. |
| Gosod Plugin | `install_plugin` | Yn defnyddio plugin sandboxed i gyfeiriadur plugin byw WordPress. |
| Actifadu Plugin | `activate_plugin` | Yn actifadu plugin sandboxed yn amgylchedd sandbox wp-env. |

## Plugin Installer API

Mae’r gosodwr plugin yn trin gweithrediadau’r system ffeiliau wrth ddefnyddio neu dynnu plugins. Ymddygiadau allweddol:

- **Dilysu llwybr**: Caiff pob llwybr plugin ei ddilysu yn erbyn y cyfeiriadur plugin a ganiateir cyn unrhyw ysgrifennu ffeil. Gwrthodir ymdrechion i groesi cyfeiriaduron.
- **Gosod aml-ffeil**: Gall plugin gynnwys sawl ffeil. Mae’r gosodwr yn creu cyfeiriadur y plugin ac yn ysgrifennu’r holl ffeiliau’n atomig.
- **Diweddaru**: Yn disodli ffeiliau plugin presennol. Yn dadactifadu’r plugin cyn ysgrifennu er mwyn osgoi gwallau cyflwr rhannol.
- **Dileu yn ôl slug**: Yn lleoli cyfeiriadur y plugin yn ôl slug, yn dadactifadu ar draws pob safle, ac yna’n tynnu’r cyfeiriadur.

### Cofrestru Triniwr Gosod Personol

Gallwch fachu i gylchred oes y gosodiad gan ddefnyddio’r gweithredoedd `gratis_ai_plugin_installer_before_install` a `gratis_ai_plugin_installer_after_install`:

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

## Cofrestrfa Ecosystem

Caiff galluoedd eu cofrestru drwy’r **gofrestrfa ecosystem plugin**. Mae’r gofrestrfa yn mapio slugs galluoedd i’w dosbarthiadau triniwr ac yn eu hamlygu i ddosbarthwr offer yr asiant AI.

I gofrestru gallu rheoli plugin personol:

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

Rhaid i’ch dosbarth gallu weithredu’r `Gratis_AI_Ability_Interface`:

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

## Integreiddio HookScanner

Mae’r galluoedd `create_plugin` a `update_plugin` yn rhedeg **HookScanner** yn awtomatig yn erbyn cod sydd newydd ei gynhyrchu. Mae HookScanner yn dychwelyd rhestr o fachau gweithredu a hidlo WordPress sydd wedi’u cofrestru gan y plugin.

I adalw canlyniadau HookScanner yn rhaglenadwy:

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

Mae HookScanner yn hepgor cyfeiriaduron `vendor/` a `node_modules/` yn awtomatig.

## Pensaernïaeth Swyddi Async

Anfonir gweithrediadau plugin hir eu hoes (cynhyrchu, gosod) fel **swyddi async** gyda thracio cynnydd byw. Mae rhyngwyneb sgwrs AI yn holi am gynnydd ac yn ffrydio diweddariadau statws i’r defnyddiwr:

1. **Anfon** — mae’r gallu yn creu swydd async ac yn dychwelyd ID swydd.
2. **Poll** — the agent polls `gratis_ai_job_status($job_id)` every 2 seconds.
3. **Ffrydio** — caiff negeseuon cynnydd canolradd eu gwthio i’r edefyn sgwrs.
4. **Cwblhau** — caiff y canlyniad terfynol (llwyddiant neu wall) ei ddychwelyd a’i arddangos.

I fachu i ddigwyddiadau cylchred oes swydd:

```php
add_action('gratis_ai_job_started', function(string $job_id, string $ability_slug): void {
    error_log("Job {$job_id} started for ability: {$ability_slug}");
}, 10, 2);

add_action('gratis_ai_job_completed', function(string $job_id, array $result): void {
    error_log("Job {$job_id} completed. Success: " . ($result['success'] ? 'yes' : 'no'));
}, 10, 2);
```
