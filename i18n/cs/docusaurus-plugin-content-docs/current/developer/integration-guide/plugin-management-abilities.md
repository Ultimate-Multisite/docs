---
title: Schopnosti spravování pluginů
sidebar_position: 4
_i18n_hash: ef90f5181e76f8b1a3209101eded0653
---
# Schopnosti spravování pluginů

Gratis AI Agent v1.5.0 obsahuje **7 schopností spravování pluginů**, které si AI asistent může během konverzace vyvolat. Tyto schopnosti poskytují programátorskou kontrolu nad WordPress pluginy nainstalovanými prostřednictvím [Plugin Builder & Sandbox System](../../user-guide/administration/plugin-builder-and-sandbox).

## Přehled schopností {#abilities-overview}

| Schopnost | Slug | Popis |
|---|---|---|
| List Plugins | `list_plugins` | Vrátí seznam pluginů v sandbox obchodě se jejich stavem. |
| Get Plugin | `get_plugin` | Získá metadata a zdrojový kód pro konkrétní plugin podle slugu. |
| Create Plugin | `create_plugin` | Vytvoří nový plugin z popisu a uloží ho do sandboxu. |
| Update Plugin | `update_plugin` | Nahradí zdrojový kód pluginu novou verzí. |
| Delete Plugin | `delete_plugin` | Odstraní plugin ze sandboxu. Nejprve ho deaktivuje. |
| Install Plugin | `install_plugin` | Nasadí sandboxovaný plugin do živého adresáře pluginů WordPress. |
| Activate Plugin | `activate_plugin` | Aktivuje sandboxovaný plugin v prostředí sandbox wp-env. |

## API pro instalaci pluginů {#plugin-installer-api}

Instalátor pluginů zpracovává operace na souborovém systému při nasazování nebo odstraňování pluginů. Klíčové chování:

- **Validace cest:** Všechny cesty pluginů jsou před jakýmkoli zápisem souborů ověřeny proti povolenému adresáři pluginů. Pokusy o procházení adresářů jsou zamítnuty.
- **Instalace více souborů:** Plugin může tvořit více souborů. Instalátor vytvoří adresář pluginu a všechny soubory zapíše atomicky.
- **Aktualizace:** Nahrazuje stávající soubory pluginu. Deaktivuje plugin před zápisem, aby se předešlo chybám kvůli neúplnému stavu.
- **Odstranění podle slugu:** Najde adresář pluginu podle slugu, deaktivuje ho na všech sajtích, a poté adresář odstraní.

### Registrace vlastní handleru pro instalaci {#registering-a-custom-install-handler}

Můžete se připojit k životnímu cyklu instalace pomocí akcí `gratis_ai_plugin_installer_before_install` a `gratis_ai_plugin_installer_after_install`:

```php
add_action('gratis_ai_plugin_installer_before_install', function(string $slug, array $files): void {
    // $slug: jméno adresáře pluginu
    // $files: asociativní pole s relativní cestou => obsah souboru
    error_log("Instalace pluginu: {$slug} s " . count($files) . " soubory.");
}, 10, 2);

add_action('gratis_ai_plugin_installer_after_install', function(string $slug, bool $success): void {
    if ($success) {
        error_log("Plugin {$slug} byl úspěšně nainstalován.");
    }
}, 10, 2);
```

## Registr ekosystému {#ecosystem-registry}

Schopnosti jsou registrovány prostřednictvím **registru ekosystému pluginů**. Tento registr mapuje slugy schopností na jejich třídy handlerů a vystavuje je dispečerovi nástrojů AI agenta.

Jak zaregistrovat vlastní schopnost spravování pluginů:

```php
add_filter('gratis_ai_plugin_abilities', function(array $abilities): array {
    $abilities['my_custom_ability'] = [
        'class'       => My_Custom_Plugin_Ability::class,
        'label'       => 'Moje vlastní schopnost',
        'description' => 'Udělá něco užitečného s pluginy.',
    ];
    return $abilities;
});
```

Vaše třída schopnosti musí implementovat `Gratis_AI_Ability_Interface`:

```php
class My_Custom_Plugin_Ability implements Gratis_AI_Ability_Interface {

    public function get_slug(): string {
        return 'my_custom_ability';
    }

    public function get_schema(): array {
        return [
            'name'        => 'my_custom_ability',
            'description' => 'Udělá něco užitečného s pluginy.',
            'parameters'  => [
                'type'       => 'object',
                'properties' => [
                    'slug' => [
                        'type'        => 'string',
                        'description' => 'Slug pluginu, na který se má operace vztahovat.',
                    ],
                ],
                'required' => ['slug'],
            ],
        ];
    }

    public function execute(array $params): array {
        $slug = sanitize_key($params['slug'] ?? '');
        // ... vaše implementace ...
        return ['success' => true, 'slug' => $slug];
    }
}
```

## Integrace HookScanneru {#hookscanner-integration}

Schopnosti `create_plugin` a `update_plugin` automaticky provádějí **HookScanner** na nově vygenerovaný kód. HookScanner vrátí seznam akčních a filtračních hooků WordPress registrovaných pluginem.

Jak získat výsledky HookScanneru programátorsky:

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

HookScanner automaticky přeskočí adresáře `vendor/` a `node_modules/`.

## Architektura asynchronních úloh {#async-job-architecture}

Dlouhodobé operace s pluginy (generování, instalace) jsou odeslány jako **asynchronní úlohy** s živým sledováním pokroku. Chatovací rozhraní AI o dotazuje na pokrok a streamuje aktualizace stavu uživateli:

1. **Dispatch (Odeslání)** — schopnost vytvoří asynchronní úlohu a vrátí ID úlohy.
2. **Poll (Dotazování)** — agent dotazuje `gratis_ai_job_status($job_id)` každých 2 sekundy.
3. **Stream (Streamování)** — mezikroční zprávy o pokroku jsou posílány do vlákna chatu.
4. **Complete (Dokončení)** — je vrácen a zobrazen finální výsledek (úspěch nebo chyba).

Jak se připojit k událostem životního cyklu úloh:

```php
add_action('gratis_ai_job_started', function(string $job_id, string $ability_slug): void {
    error_log("Úloha {$job_id} zahájena pro schopnost: {$ability_slug}");
}, 10, 2);

add_action('gratis_ai_job_completed', function(string $job_id, array $result): void {
    error_log("Úloha {$job_id} dokončena. Úspěch: " . ($result['success'] ? 'ano' : 'ne'));
}, 10, 2);
```
