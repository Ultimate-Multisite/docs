---
title: Pluginak kudeatzeko gaitasunak
sidebar_position: 4
_i18n_hash: ef90f5181e76f8b1a3209101eded0653
---
# Pluginak kudeatzeko gaitasunak

Gratis AI Agent v1.5.0 bertsioak **pluginak kudeatzeko 7 gaitasun** dakartza, AI laguntzaileak elkarrizketa batean dei ditzakeenak. Gaitasun hauek [Plugin Builder & Sandbox System](../../user-guide/administration/plugin-builder-and-sandbox) bidez instalatutako WordPress pluginen gaineko kontrol programatikoa ematen dute.

## Gaitasunen ikuspegi orokorra

| Gaitasuna | Slug | Deskribapena |
|---|---|---|
| Zerrendatu pluginak | `list_plugins` | Sandbox biltegiko pluginen zerrenda itzultzen du, haien egoerarekin. |
| Lortu plugina | `get_plugin` | Slug bidez plugin jakin baten metadatuak eta iturburu-kodea eskuratzen ditu. |
| Sortu plugina | `create_plugin` | Deskribapen batetik plugin berri bat sortzen du eta sandboxean gordetzen du. |
| Eguneratu plugina | `update_plugin` | Plugin baten iturburu-kodea bertsio berri batekin ordezten du. |
| Ezabatu plugina | `delete_plugin` | Plugin bat sandbox biltegitik kentzen du. Lehenik desaktibatzen du. |
| Instalatu plugina | `install_plugin` | Sandboxeko plugin bat zuzeneko WordPress plugin direktoriora hedatzen du. |
| Aktibatu plugina | `activate_plugin` | Sandboxeko plugin bat aktibatzen du wp-env sandbox ingurunean. |

## Plugin Installer API

Plugin instalatzaileak fitxategi-sistemako eragiketak kudeatzen ditu pluginak hedatzean edo kentzean. Portaera nagusiak:

- **Bidearen balidazioa**: Pluginen bide guztiak baimendutako plugin direktorioaren aurka balidatzen dira fitxategiren bat idatzi aurretik. Direktorio-ibilbidea zeharkatzeko saiakerak baztertu egiten dira.
- **Fitxategi anitzeko instalazioa**: Plugin bat hainbat fitxategiz osa daiteke. Instalatzaileak plugin direktorioa sortzen du eta fitxategi guztiak atomikoki idazten ditu.
- **Eguneratzea**: Lehendik dauden plugin fitxategiak ordezten ditu. Plugina desaktibatzen du idatzi aurretik, egoera partzialeko erroreak saihesteko.
- **Ezabatzea slug bidez**: Plugin direktorioa slug bidez aurkitzen du, gune guztietan desaktibatzen du, eta ondoren direktorioa kentzen du.

### Instalazio-kudeatzaile pertsonalizatu bat erregistratzea

Instalazioaren bizi-zikloan sar zaitezke `gratis_ai_plugin_installer_before_install` eta `gratis_ai_plugin_installer_after_install` ekintzak erabiliz:

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

## Ekosistemaren erregistroa

Gaitasunak **pluginen ekosistemaren erregistroaren** bidez erregistratzen dira. Erregistroak gaitasunen slugak haien kudeatzaile-klaseekin mapatzen ditu, eta AI agentaren tresnen banatzaileari erakusten dizkio.

Pluginak kudeatzeko gaitasun pertsonalizatu bat erregistratzeko:

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

Zure gaitasun-klaseak `Gratis_AI_Ability_Interface` inplementatu behar du:

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

## HookScanner integrazioa

`create_plugin` eta `update_plugin` gaitasunek automatikoki exekutatzen dute **HookScanner** sortu berri den kodearen aurka. HookScanner-ek pluginak erregistratutako WordPress action eta filter hooken zerrenda itzultzen du.

HookScanner-en emaitzak programatikoki eskuratzeko:

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

HookScanner-ek automatikoki saltatzen ditu `vendor/` eta `node_modules/` direktorioak.

## Async lanen arkitektura

Luzaroan exekutatzen diren plugin-eragiketak (sortu, instalatu) **async lan** gisa bidaltzen dira, aurrerapenaren zuzeneko jarraipenarekin. AI txat-interfazeak aurrerapena kontsultatzen du eta egoera-eguneraketak erabiltzaileari transmititzen dizkio:

1. **Bidali** — gaitasunak async lan bat sortzen du eta lan-ID bat itzultzen du.
2. **Poll** — the agent polls `gratis_ai_job_status($job_id)` every 2 seconds.
3. **Transmititu** — bitarteko aurrerapen-mezuak txat-harira bidaltzen dira.
4. **Osatu** — azken emaitza (arrakasta edo errorea) itzultzen eta bistaratzen da.

Lanen bizi-zikloko gertaeretan sartzeko:

```php
add_action('gratis_ai_job_started', function(string $job_id, string $ability_slug): void {
    error_log("Job {$job_id} started for ability: {$ability_slug}");
}, 10, 2);

add_action('gratis_ai_job_completed', function(string $job_id, array $result): void {
    error_log("Job {$job_id} completed. Success: " . ($result['success'] ? 'yes' : 'no'));
}, 10, 2);
```
