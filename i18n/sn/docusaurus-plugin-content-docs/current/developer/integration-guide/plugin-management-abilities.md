---
title: Kugona Kutarisira maPlugin
sidebar_position: 4
_i18n_hash: ef90f5181e76f8b1a3209101eded0653
---
# Zvikwanisiro zveKutarisira Mawedzero

Gratis AI Agent v1.5.0 inouya ne **zvikwanisiro 7 zvekutarisira mawedzero** izvo mubatsiri weAI anogona kushandisa panguva yehurukuro. Zvikwanisiro izvi zvinopa kudzora kwechirongwa pamusoro pemaWordPress wedzero akaiswa kuburikidza ne [Sisitimu yeKuvaka Mawedzero neSandbox](../../user-guide/administration/plugin-builder-and-sandbox).

## Pfupiso yeZvikwanisiro

| Chikwanisiro | Slug | Tsananguro |
|---|---|---|
| Nyora Mawedzero | `list_plugins` | Inodzosa rondedzero yemawedzero ari mudura re sandbox pamwe nechimiro chawo. |
| Tora Wedzero | `get_plugin` | Inotora metadata nekodhi yemabviro yewedzero yakati ne slug. |
| Gadzira Wedzero | `create_plugin` | Inogadzira wedzero itsva kubva mutsananguro uye inoichengeta mu sandbox. |
| Gadzirisa Wedzero | `update_plugin` | Inotsiva kodhi yemabviro yewedzero neshanduro itsva. |
| Dzima Wedzero | `delete_plugin` | Inobvisa wedzero kubva mudura re sandbox. Inotanga yaimisa kushanda. |
| Isa Wedzero | `install_plugin` | Inotumira wedzero iri mu sandbox kudhairekitori remawedzero eWordPress ari kushanda. |
| Shandisa Wedzero | `activate_plugin` | Inoshandisa wedzero iri mu sandbox munharaunda ye wp-env sandbox. |

## Plugin Installer API

Muisi wema wedzero unobata mabasa efaira system paunenge uchitumira kana kubvisa mawedzero. Maitiro akakosha:

- **Kusimbisa nzira**: Nzira dzese dzemawedzero dzinosimbiswa dzichienzaniswa nedhairekitori remawedzero rinobvumidzwa pamberi pekunyora faira chero ripi zvaro. Kuedza kupinda mumadhairekitori asingabvumidzwi kunorambwa.
- **Kuisa mafaera mazhinji**: Wedzero inogona kuva nemafaera akawanda. Muisi anogadzira dhairekitori rewedzero uye anonyora mafaera ese nenzira imwe yakabatana.
- **Kugadzirisa**: Inotsiva mafaera aripo ewedzero. Inomisa wedzero kushanda isati yanyora kuti idzivise zvikanganiso zvechimiro chisina kukwana.
- **Kudzima ne slug**: Inotsvaga dhairekitori rewedzero ne slug, inomisa kushanda pamasaiti ese, yobva yabvisa dhairekitori.

### Kunyoresa Mubati Wekuisa Wakagadziridzwa

Unogona kubatanidza muhupenyu hwekuisa uchishandisa zviito zve `gratis_ai_plugin_installer_before_install` ne `gratis_ai_plugin_installer_after_install`:

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

## Rejista yeEcosystem

Zvikwanisiro zvinonyoreswa kuburikidza ne **rejista yeecosystem yemawedzero**. Rejista inobatanidza ma slug ezvikwanisiro nemakirasi awo evabati uye inozviratidza kune mutumi wezvishandiso wemumiriri weAI.

Kunyoresa chikwanisiro chakagadziridzwa chekutarisa mawedzero:

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

Kirasi yechikwanisiro chako inofanira kushandisa `Gratis_AI_Ability_Interface`:

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

## Kubatanidzwa kweHookScanner

Zvikwanisiro zve `create_plugin` ne `update_plugin` zvinomhanyisa otomatiki **HookScanner** pakodhi ichangobva kugadzirwa. HookScanner inodzosa rondedzero yema hook eWordPress action nefilter akanyoreswa newedzero.

Kuti utore zvabuda zveHookScanner nechirongwa:

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

HookScanner inodarika madhairekitori e `vendor/` ne `node_modules/` otomatiki.

## Chimiro cheAsync Job

Mabasa emawedzero anotora nguva refu (kugadzira, kuisa) anotumirwa se **async jobs** ane kutevera kufambira mberi kuri kurarama. Chiso chehurukuro yeAI chinobvunza kufambira mberi uye chinoyerera zvigadziriso zvechimiro kumushandisi:

1. **Tumira** — chikwanisiro chinogadzira async job uye chinodzosa job ID.
2. **Poll** — the agent polls `gratis_ai_job_status($job_id)` every 2 seconds.
3. **Yerera** — mameseji epakati ekufambira mberi anosundidzirwa kuthread yehurukuro.
4. **Pedzisa** — mhedziso yekupedzisira (kubudirira kana kukanganisa) inodzoserwa uye inoratidzwa.

Kuti ubatanidze muzviitiko zvehupenyu hwejob:

```php
add_action('gratis_ai_job_started', function(string $job_id, string $ability_slug): void {
    error_log("Job {$job_id} started for ability: {$ability_slug}");
}, 10, 2);

add_action('gratis_ai_job_completed', function(string $job_id, array $result): void {
    error_log("Job {$job_id} completed. Success: " . ($result['success'] ? 'yes' : 'no'));
}, 10, 2);
```
