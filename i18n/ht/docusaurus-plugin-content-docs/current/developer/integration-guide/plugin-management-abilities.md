---
title: Kapasite pou jere ekstansyon
sidebar_position: 4
_i18n_hash: ef90f5181e76f8b1a3209101eded0653
---
# Kapasite Jesyon Plugin

Gratis AI Agent v1.5.0 vini ak **7 kapasite jesyon plugin** ke asistan AI a ka envoke pandan yon konvèsasyon. Kapasite sa yo bay kontwòl pwogramatik sou plugin WordPress ki enstale atravè [Sistèm Plugin Builder & Sandbox](../../user-guide/administration/plugin-builder-and-sandbox).

## Apèsi sou Kapasite yo

| Kapasite | Slug | Deskripsyon |
|---|---|---|
| Lis Plugin yo | `list_plugins` | Retounen yon lis plugin nan depo sandbox la ansanm ak estati yo. |
| Jwenn Plugin | `get_plugin` | Rekipere metadata ak kòd sous pou yon plugin espesifik dapre slug. |
| Kreye Plugin | `create_plugin` | Jenere yon nouvo plugin apati yon deskripsyon epi estoke li nan sandbox la. |
| Mete Plugin ajou | `update_plugin` | Ranplase kòd sous yon plugin ak yon nouvo vèsyon. |
| Efase Plugin | `delete_plugin` | Retire yon plugin nan depo sandbox la. Dezaktive li anvan. |
| Enstale Plugin | `install_plugin` | Deplwaye yon plugin ki nan sandbox nan repètwa plugin WordPress vivan an. |
| Aktive Plugin | `activate_plugin` | Aktive yon plugin ki nan sandbox nan anviwònman sandbox wp-env la. |

## API Enstalatè Plugin

Enstalatè plugin nan jere operasyon sistèm fichye lè l ap deplwaye oswa retire plugin yo. Konpòtman kle yo:

- **Validasyon chemen**: Tout chemen plugin yo valide kont repètwa plugin ki otorize a anvan nenpòt ekriti fichye. Tantativ travèse repètwa yo rejte.
- **Enstalasyon plizyè fichye**: Yon plugin ka gen plizyè fichye. Enstalatè a kreye repètwa plugin nan epi ekri tout fichye yo atomikman.
- **Mizajou**: Ranplase fichye plugin ki deja egziste yo. Dezaktive plugin nan anvan ekriti pou evite erè eta pasyèl.
- **Efase dapre slug**: Lokalize repètwa plugin nan dapre slug, dezaktive li atravè tout sit yo, apre sa retire repètwa a.

### Anrejistre yon Custom Install Handler

Ou ka branche nan sik lavi enstalasyon an lè w itilize aksyon `gratis_ai_plugin_installer_before_install` ak `gratis_ai_plugin_installer_after_install` yo:

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

## Rejis Ekosistèm

Kapasite yo anrejistre atravè **rejis ekosistèm plugin** nan. Rejis la matche slug kapasite yo ak klas handler yo epi ekspoze yo bay dispatchè zouti AI agent lan.

Pou anrejistre yon kapasite jesyon plugin koutim:

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

Klas kapasite ou a dwe aplike `Gratis_AI_Ability_Interface`:

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

## Entegrasyon HookScanner

Kapasite `create_plugin` ak `update_plugin` yo otomatikman kouri **HookScanner** sou kòd ki fèk jenere a. HookScanner retounen yon lis hook aksyon ak filtè WordPress plugin nan anrejistre.

Pou rekipere rezilta HookScanner yo pwogramatikman:

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

HookScanner sote repètwa `vendor/` ak `node_modules/` yo otomatikman.

## Achitekti Travay Async

Operasyon plugin ki pran tan (jenere, enstale) yo voye kòm **travay async** ak swivi pwogrè an dirèk. Entèfas chat AI a fè sondaj pou pwogrè epi li difize mizajou estati bay itilizatè a:

1. **Voye** — kapasite a kreye yon travay async epi retounen yon ID travay.
2. **Poll** — the agent polls `gratis_ai_job_status($job_id)` every 2 seconds.
3. **Difize** — mesaj pwogrè entèmedyè yo pouse nan fil chat la.
4. **Fini** — rezilta final la (siksè oswa erè) retounen epi parèt.

Pou branche nan evènman sik lavi travay yo:

```php
add_action('gratis_ai_job_started', function(string $job_id, string $ability_slug): void {
    error_log("Job {$job_id} started for ability: {$ability_slug}");
}, 10, 2);

add_action('gratis_ai_job_completed', function(string $job_id, array $result): void {
    error_log("Job {$job_id} completed. Success: " . ($result['success'] ? 'yes' : 'no'));
}, 10, 2);
```
