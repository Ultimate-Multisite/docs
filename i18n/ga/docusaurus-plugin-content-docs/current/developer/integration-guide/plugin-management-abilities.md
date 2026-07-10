---
title: Cumais Bhainistíochta Breiseán
sidebar_position: 4
_i18n_hash: ef90f5181e76f8b1a3209101eded0653
---
# Cumais Bhainistíochta Breiseán {#plugin-management-abilities}

Tagann Gratis AI Agent v1.5.0 le **7 gcumas bainistíochta breiseán** ar féidir leis an gcúntóir IS iad a agairt le linn comhrá. Soláthraíonn na cumais seo rialú ríomhchláraithe ar bhreiseáin WordPress atá suiteáilte tríd an [Córas Tógálaí Breiseán & Bosca Gainimh](../../user-guide/administration/plugin-builder-and-sandbox).

## Forbhreathnú ar Chumais {#abilities-overview}

| Cumas | Slug | Cur síos |
|---|---|---|
| Liostaigh Breiseáin | `list_plugins` | Filleann sé liosta de bhreiseáin sa stór bosca gainimh lena stádas. |
| Faigh Breiseán | `get_plugin` | Aisghabhann sé meiteashonraí agus cód foinse do bhreiseán sonrach de réir slug. |
| Cruthaigh Breiseán | `create_plugin` | Gineann sé breiseán nua ó chur síos agus stórálann sé é sa bhosca gainimh. |
| Nuashonraigh Breiseán | `update_plugin` | Cuireann sé leagan nua in ionad chód foinse breiseáin. |
| Scrios Breiseán | `delete_plugin` | Baintear breiseán den stór bosca gainimh. Díghníomhachtaítear ar dtús é. |
| Suiteáil Breiseán | `install_plugin` | Imscarann sé breiseán bosca gainimh chuig eolaire breiseán beo WordPress. |
| Gníomhachtaigh Breiseán | `activate_plugin` | Gníomhachtaíonn sé breiseán bosca gainimh i dtimpeallacht bosca gainimh wp-env. |

## API Suiteálaí Breiseán {#plugin-installer-api}

Láimhseálann an suiteálaí breiseán oibríochtaí córais comhad agus breiseáin á n-imscaradh nó á mbaint. Príomhiompraíochtaí:

- **Bailíochtú conaire**: Déantar gach conair bhreiseáin a bhailíochtú i gcoinne an eolaire bhreiseán cheadaithe sula scríobhtar aon chomhad. Diúltaítear d’iarrachtaí trasnaithe eolaire.
- **Suiteáil ilchomhad**: D’fhéadfadh breiseán a bheith comhdhéanta de chomhaid iolracha. Cruthaíonn an suiteálaí eolaire an bhreiseáin agus scríobhann sé na comhaid uile go hatamach.
- **Nuashonrú**: Cuireann sé comhaid nua in ionad chomhaid reatha an bhreiseáin. Díghníomhachtaítear an breiseán roimh scríobh chun earráidí páirtstaide a sheachaint.
- **Scriosadh de réir slug**: Aimsíonn sé eolaire an bhreiseáin de réir slug, díghníomhachtaíonn sé ar fud na suíomhanna uile é, ansin baintear an t-eolaire.

### Láimhseálaí Suiteála Saincheaptha a Chlárú {#registering-a-custom-install-handler}

Is féidir leat dul isteach i saolré na suiteála trí úsáid a bhaint as na gníomhartha `gratis_ai_plugin_installer_before_install` agus `gratis_ai_plugin_installer_after_install`:

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

## Clárlann Éiceachórais {#ecosystem-registry}

Cláraítear cumais tríd an **gclárlann éiceachórais breiseán**. Mapálann an chlárlann slugaí cumais chuig a ranganna láimhseálaí agus nochtann sí iad do sheoltóir uirlisí an ghníomhaire IS.

Chun cumas bainistíochta breiseán saincheaptha a chlárú:

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

Ní mór do do rang cumais an `Gratis_AI_Ability_Interface` a chur i bhfeidhm:

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

## Comhtháthú HookScanner {#hookscanner-integration}

Ritheann na cumais `create_plugin` agus `update_plugin` **HookScanner** go huathoibríoch i gcoinne cód nua-ghinte. Filleann HookScanner liosta de chrúcaí gnímh agus scagaire WordPress atá cláraithe ag an mbreiseán.

Chun torthaí HookScanner a aisghabháil go ríomhchláraithe:

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

Scipeálann HookScanner eolairí `vendor/` agus `node_modules/` go huathoibríoch.

## Ailtireacht Jabanna Asioncronacha {#async-job-architecture}

Seoltar oibríochtaí breiseán fadtréimhseacha (giniúint, suiteáil) mar **jabanna asioncronacha** le rianú dul chun cinn beo. Déanann comhéadan comhrá IS vótaíocht ar dhul chun cinn agus sruthaíonn sé nuashonruithe stádais chuig an úsáideoir:

1. **Seoladh** — cruthaíonn an cumas jab asioncronach agus filleann sé ID jab.
2. **Poll** — the agent polls `gratis_ai_job_status($job_id)` every 2 seconds.
3. **Sruth** — brúitear teachtaireachtaí idirmheánacha dul chun cinn chuig snáithe an chomhrá.
4. **Críochnú** — filleann an toradh deiridh (rath nó earráid) agus taispeántar é.

Chun dul isteach in imeachtaí shaolré jab:

```php
add_action('gratis_ai_job_started', function(string $job_id, string $ability_slug): void {
    error_log("Job {$job_id} started for ability: {$ability_slug}");
}, 10, 2);

add_action('gratis_ai_job_completed', function(string $job_id, array $result): void {
    error_log("Job {$job_id} completed. Success: " . ($result['success'] ? 'yes' : 'no'));
}, 10, 2);
```
