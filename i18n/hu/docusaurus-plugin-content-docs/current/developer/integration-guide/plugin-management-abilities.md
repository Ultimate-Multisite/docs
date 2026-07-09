---
title: Plugin kezelő képességek
sidebar_position: 4
_i18n_hash: ef90f5181e76f8b1a3209101eded0653
---
# Plugin Kezelési Funkciók {#plugin-management-abilities}

A Gratis AI Agent v1.5.0 **7 plugin kezelési funkcióval** érkezik, amelyeket az AI asszisztens egy beszélgetés során hívhat elő. Ezek a funkciók programozott vezérlést biztosítanak a [Plugin Builder & Sandbox System](../../user-guide/administration/plugin-builder-and-sandbox) segítségével telepített WordPress plugin-jai felett.

## Funkciók Áttekintése {#abilities-overview}

| Funkció | Slug | Leírás |
|---|---|---|
| List Plugins | `list_plugins` | Lista küldése a sandbox tárolóban lévő plugin-ok listájáról és azok állapotáról. |
| Get Plugin | `get_plugin` | Metadata és forráskód lekérése egy adott plugin-hoz a slug alapján. |
| Create Plugin | `create_plugin` | Új plugin generálása egy leírástól, és tárolása a sandbox-ban. |
| Update Plugin | `update_plugin` | Egy plugin forráskódának lecserélése új verzióval. |
| Delete Plugin | `delete_plugin` | Plugin-eltávolítása a sandbox tárolóból. Először deaktiválja. |
| Install Plugin | `install_plugin` | Egy sandbox-ban lévő plugin telepítése a élő WordPress plugin könyvtárába. |
| Activate Plugin | `activate_plugin` | Egy sandbox-ban lévő plugin aktiválása az wp-env sandbox környezetben. |

## Plugin Telepítő API {#plugin-installer-api}

A plugin telepítő a fájlrendszer műveleteket végzi el a plugin telepítése vagy eltávolítása során. Kulcsfontosságú viselkedései:

- **Útvonal validáció**: Minden plugin útvonalat ellenőriz (validál) az engedélyezett plugin könyvtárral, mielőtt bármilyen fájlírást végrehajt. A könyvtár átjárási kísérleteket elutasítja.
- **Multi-file install**: Egy plugin több fájlból is állhat. A telepítő létrehozza a plugin könyvtárát, és atomikusan írja be az összes fájlt.
- **Update**: Felülírja az istnieją plugin fájljait. Deaktiválja a plugin-ot a írás előtt, hogy elkerülje a részleges állapot hibákat.
- **Delete by slug**: Megkeresi a plugin könyvtárát a slug alapján, deaktiválja az összes oldalon, majd törli a könyvtárat.

### Egy Saját Telepítő Kezelő Regisztrálása {#registering-a-custom-install-handler}

A `gratis_ai_plugin_installer_before_install` és `gratis_ai_plugin_installer_after_install` akciók segítségével kapcsolódhat (hook) a telepítés életciklusához:

```php
add_action('gratis_ai_plugin_installer_before_install', function(string $slug, array $files): void {
    // $slug: a plugin könyvtár neve
    // $files: asszociatív tömb a relatív útvonal => fájl tartalom
    error_log("Installing plugin: {$slug} with " . count($files) . " files.");
}, 10, 2);

add_action('gratis_ai_plugin_installer_after_install', function(string $slug, bool $success): void {
    if ($success) {
        error_log("Plugin {$slug} installed successfully.");
    }
}, 10, 2);
```

## Ecosystem Registry {#ecosystem-registry}

A funkciókat a **plugin ecosystem registry** segítségével regisztrálják. A registry mappaítja a funkció slug-jait a kezelő osztályokra, és kiadja őket az AI agent eszköz-elosztó rendszerének (tool dispatcher).

Egy saját plugin kezelési funkció regisztrálásához:

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

A funkció osztályának implementálnia kell a `Gratis_AI_Ability_Interface`-et:

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

## HookScanner Integráció {#hookscanner-integration}

A `create_plugin` és `update_plugin` funkciók automatikusan futtatják a **HookScanner**-t a recién generált kódon. A HookScanner egy listát ad vissza a plugin által regisztrált WordPress action és filter hook-okról.

A HookScanner eredményeinek programozott lekérése:

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

A HookScanner automatikusan kihagyja a `vendor/` és `node_modules/` könyvtárakat.

## Async Job Architektúra {#async-job-architecture}

A hosszú futási időt igénylő plugin műveletek (generálás, telepítés) **async job** formájában kerülnek elküldésre, és élő haladáskövetéssel rendelkeznek. Az AI chat felületének időzítővel (polling) ellenőriznie kell a haladást, és folyamatosan küldnie a státusz frissítéseit a felhasználónak:

1. **Dispatch** — a funkció létrehoz egy async job-ot, és egy job ID-t ad vissza.
2. **Poll** — az agent minden 2 másodpercre hívja meg a `gratis_ai_job_status($job_id)` függvényt.
3. **Stream** — az intermédiári haladás üzeneteit a chat szálba küldi.
4. **Complete** — a végső eredményt (sikert vagy hibát) ad vissza, és megjeleníti.

Egy job életciklus eseményekhez kapcsolódni (hook) a következőképpen:

```php
add_action('gratis_ai_job_started', function(string $job_id, string $ability_slug): void {
    error_log("Job {$job_id} started for ability: {$ability_slug}");
}, 10, 2);

add_action('gratis_ai_job_completed', function(string $job_id, array $result): void {
    error_log("Job {$job_id} completed. Success: " . ($result['success'] ? 'yes' : 'no'));
}, 10, 2);
```
