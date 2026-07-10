---
title: Možnosti správy pluginov
sidebar_position: 4
_i18n_hash: ef90f5181e76f8b1a3209101eded0653
---
# Schopnosti správy pluginov {#plugin-management-abilities}

Gratis AI Agent v1.5.0 sa dodáva so **7 schopnosťami správy pluginov**, ktoré môže AI asistent vyvolať počas konverzácie. Tieto schopnosti poskytujú programové ovládanie WordPress pluginov nainštalovaných cez [Plugin Builder & Sandbox System](../../user-guide/administration/plugin-builder-and-sandbox).

## Prehľad schopností {#abilities-overview}

| Schopnosť | Slug | Popis |
|---|---|---|
| Zoznam pluginov | `list_plugins` | Vráti zoznam pluginov v úložisku sandboxu s ich stavom. |
| Získať plugin | `get_plugin` | Načíta metadáta a zdrojový kód pre konkrétny plugin podľa slugu. |
| Vytvoriť plugin | `create_plugin` | Vygeneruje nový plugin z popisu a uloží ho do sandboxu. |
| Aktualizovať plugin | `update_plugin` | Nahradí zdrojový kód pluginu novou verziou. |
| Odstrániť plugin | `delete_plugin` | Odstráni plugin z úložiska sandboxu. Najprv ho deaktivuje. |
| Nainštalovať plugin | `install_plugin` | Nasadí plugin zo sandboxu do živého adresára WordPress pluginov. |
| Aktivovať plugin | `activate_plugin` | Aktivuje plugin zo sandboxu v sandbox prostredí wp-env. |

## API inštalátora pluginov {#plugin-installer-api}

Inštalátor pluginov spracováva operácie so súborovým systémom pri nasadzovaní alebo odstraňovaní pluginov. Kľúčové správanie:

- **Overenie cesty**: Všetky cesty pluginov sa pred akýmkoľvek zápisom súboru overujú voči povolenému adresáru pluginov. Pokusy o prechádzanie adresármi sú odmietnuté.
- **Inštalácia viacerých súborov**: Plugin môže pozostávať z viacerých súborov. Inštalátor vytvorí adresár pluginu a zapíše všetky súbory atomicky.
- **Aktualizácia**: Nahradí existujúce súbory pluginu. Pred zápisom plugin deaktivuje, aby sa predišlo chybám čiastočného stavu.
- **Odstránenie podľa slugu**: Vyhľadá adresár pluginu podľa slugu, deaktivuje ho na všetkých stránkach a potom odstráni adresár.

### Registrácia vlastného obslužného mechanizmu inštalácie {#registering-a-custom-install-handler}

Do životného cyklu inštalácie sa môžete napojiť pomocou akcií `gratis_ai_plugin_installer_before_install` a `gratis_ai_plugin_installer_after_install`:

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

## Register ekosystému {#ecosystem-registry}

Schopnosti sa registrujú cez **register ekosystému pluginov**. Register mapuje slugy schopností na ich obslužné triedy a sprístupňuje ich dispečerovi nástrojov AI agenta.

Na registráciu vlastnej schopnosti správy pluginov:

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

Vaša trieda schopnosti musí implementovať `Gratis_AI_Ability_Interface`:

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

## Integrácia HookScanner {#hookscanner-integration}

Schopnosti `create_plugin` a `update_plugin` automaticky spúšťajú **HookScanner** nad novo vygenerovaným kódom. HookScanner vracia zoznam WordPress action a filter hookov registrovaných pluginom.

Na programové získanie výsledkov HookScanner:

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

HookScanner automaticky preskakuje adresáre `vendor/` a `node_modules/`.

## Architektúra asynchrónnych úloh {#async-job-architecture}

Dlhšie trvajúce operácie s pluginmi (generovanie, inštalácia) sa odosielajú ako **asynchrónne úlohy** so živým sledovaním priebehu. Rozhranie AI chatu sa dopytuje na priebeh a streamuje aktualizácie stavu používateľovi:

1. **Odoslanie** — schopnosť vytvorí asynchrónnu úlohu a vráti ID úlohy.
2. **Poll** — the agent polls `gratis_ai_job_status($job_id)` every 2 seconds.
3. **Streamovanie** — priebežné správy o postupe sa odosielajú do vlákna chatu.
4. **Dokončenie** — konečný výsledok (úspech alebo chyba) sa vráti a zobrazí.

Na napojenie sa na udalosti životného cyklu úlohy:

```php
add_action('gratis_ai_job_started', function(string $job_id, string $ability_slug): void {
    error_log("Job {$job_id} started for ability: {$ability_slug}");
}, 10, 2);

add_action('gratis_ai_job_completed', function(string $job_id, array $result): void {
    error_log("Job {$job_id} completed. Success: " . ($result['success'] ? 'yes' : 'no'));
}, 10, 2);
```
