---
title: Awoodaha Maamulka Plugin-ka
sidebar_position: 4
_i18n_hash: ef90f5181e76f8b1a3209101eded0653
---
# Awoodaha Maamulka Fidinnada

Gratis AI Agent v1.5.0 wuxuu la yimaadaa **7 awoodood oo maamulka fidinnada ah** oo AI kaaliyuhu adeegsan karo inta lagu jiro wada hadal. Awoodahani waxay bixiyaan xakameyn barnaamijeed oo lagu maamulo fidinnada WordPress ee lagu rakibay [Nidaamka Dhisaha Fidinnada & Goobta Tijaabada](../../user-guide/administration/plugin-builder-and-sandbox).

## Dulmarka Awoodaha {#abilities-overview}

| Awood | Slug | Sharaxaad |
|---|---|---|
| Liisgaree Fidinnada | `list_plugins` | Waxay soo celisaa liis fidinno ah oo ku jira kaydka goobta tijaabada iyo xaaladdooda. |
| Hel Fidinta | `get_plugin` | Waxay soo qaadaa metadata iyo koodhka isha ee fidin gaar ah iyadoo loo eegayo slug. |
| Abuur Fidinta | `create_plugin` | Waxay abuurtaa fidin cusub iyadoo laga duulayo sharaxaad, waxayna ku kaydisaa goobta tijaabada. |
| Cusboonaysii Fidinta | `update_plugin` | Waxay koodhka isha ee fidin ku beddeshaa nooc cusub. |
| Tirtir Fidinta | `delete_plugin` | Waxay fidin ka saartaa kaydka goobta tijaabada. Marka hore way damisaa. |
| Rakib Fidinta | `install_plugin` | Waxay fidin goob tijaabo ku jirta u dirtaa galka fidinnada WordPress ee tooska ah. |
| Daar Fidinta | `activate_plugin` | Waxay fidin goob tijaabo ku jirta ka daartaa deegaanka goobta tijaabada wp-env. |

## API-ga Rakibaha Fidinta {#plugin-installer-api}

Rakibaha fidintu wuxuu maamulaa hawlgallada nidaamka faylasha marka fidinno la dirayo ama la saarayo. Hab-dhaqannada muhiimka ah:

- **Xaqiijinta dariiqa**: Dhammaan dariiqyada fidinnada waxaa laga xaqiijiyaa galka fidinnada ee la oggol yahay ka hor qorid fayl kasta. Isku dayada ka gudbidda galalka waa la diidaa.
- **Rakibid faylal badan**: Fidin waxay ka koobnaan kartaa faylal badan. Rakibuhu wuxuu abuuraa galka fidinta wuxuuna dhammaan faylasha u qoraa si atomik ah.
- **Cusboonaysiin**: Waxay beddeshaa faylasha fidinta ee jira. Waxay damisaa fidinta ka hor qorista si looga fogaado khaladaadka xaalad-qayb ahaan ah.
- **Tirtirid iyadoo slug la adeegsanayo**: Waxay heshaa galka fidinta iyadoo loo eegayo slug, waxay ka damisaa dhammaan bogagga, ka dibna waxay saartaa galka.

### Diiwaangelinta Maareeye Rakibid Gaar ah {#registering-a-custom-install-handler}

Waxaad ku xirmi kartaa meertada rakibidda adigoo adeegsanaya actions-ka `gratis_ai_plugin_installer_before_install` iyo `gratis_ai_plugin_installer_after_install`:

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

## Diiwaanka Ekosistemka {#ecosystem-registry}

Awoodaha waxaa lagu diiwaangeliyaa **diiwaanka ekosistemka fidinnada**. Diiwaanku wuxuu isku xiraa ability slugs iyo classes-kooda handler, wuxuuna u bandhigaa tool dispatcher-ka AI agent-ka.

Si aad u diiwaangeliso awood maamulka fidin oo gaar ah:

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

Class-ka awooddaada waa inuu hirgeliyaa `Gratis_AI_Ability_Interface`:

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

## Isdhexgalka HookScanner {#hookscanner-integration}

Awoodaha `create_plugin` iyo `update_plugin` waxay si toos ah **HookScanner** ugu socodsiiyaan koodhka cusub ee la abuuray. HookScanner wuxuu soo celiyaa liis action iyo filter hooks WordPress ah oo fidintu diiwaangelisay.

Si aad natiijooyinka HookScanner si barnaamijeed ugu soo qaadato:

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

HookScanner wuxuu si toos ah uga boodaa galalka `vendor/` iyo `node_modules/`.

## Qaab-dhismeedka Shaqooyinka Async {#async-job-architecture}

Hawlgallada fidinnada ee waqti dheer qaata (abuur, rakib) waxaa loo diraa sidii **shaqooyin async** oo leh la-socod horumar oo toos ah. Interface-ka wada sheekaysiga AI wuxuu weydiiyaa horumarka wuxuuna isticmaalaha u qulquliyaa cusboonaysiinta xaaladda:

1. **Dirid** — awooddu waxay abuurtaa shaqo async ah waxayna soo celisaa aqoonsiga shaqada.
2. **Poll** — the agent polls `gratis_ai_job_status($job_id)` every 2 seconds.
3. **Qulqul** — fariimaha horumarka dhexe waxaa lagu riixaa thread-ka wada sheekaysiga.
4. **Dhammaystir** — natiijada ugu dambaysa (guul ama qalad) waa la soo celiyaa oo la muujiyaa.

Si aad ugu xirmato dhacdooyinka meertada shaqada:

```php
add_action('gratis_ai_job_started', function(string $job_id, string $ability_slug): void {
    error_log("Job {$job_id} started for ability: {$ability_slug}");
}, 10, 2);

add_action('gratis_ai_job_completed', function(string $job_id, array $result): void {
    error_log("Job {$job_id} completed. Success: " . ($result['success'] ? 'yes' : 'no'));
}, 10, 2);
```
