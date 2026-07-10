---
title: Ngā Āheinga Whakahaere Monomai
sidebar_position: 4
_i18n_hash: ef90f5181e76f8b1a3209101eded0653
---
# Ngā Āheinga Whakahaere Monomai {#plugin-management-abilities}

Ka tukuna mai e Gratis AI Agent v1.5.0 **ngā āheinga whakahaere monomai e 7** ka taea e te kaiāwhina AI te karanga i te wā o tētahi kōrerorero. Ka whakarato ēnei āheinga i te mana hōtaka ki runga i ngā monomai WordPress kua tāutatia mā te [Pūnaha Kaihanga Monomai me te Sandbox](../../user-guide/administration/plugin-builder-and-sandbox).

## Tirohanga Whānui ki ngā Āheinga {#abilities-overview}

| Āheinga | Slug | Whakaahuatanga |
|---|---|---|
| Whakarārangi Monomai | `list_plugins` | Ka whakahoki i tētahi rārangi monomai i te toa sandbox me ō rātou tūnga. |
| Tiki Monomai | `get_plugin` | Ka tiki i ngā raraunga meta me te waehere pūtake mō tētahi monomai motuhake mā te slug. |
| Waihanga Monomai | `create_plugin` | Ka whakaputa i tētahi monomai hou mai i tētahi whakaahuatanga, ā, ka rokiroki ki te sandbox. |
| Whakahou Monomai | `update_plugin` | Ka whakakapi i te waehere pūtake o tētahi monomai ki tētahi putanga hou. |
| Muku Monomai | `delete_plugin` | Ka tango i tētahi monomai i te toa sandbox. Ka whakaweto i te tuatahi. |
| Tāuta Monomai | `install_plugin` | Ka tuku i tētahi monomai sandbox ki te whaiaronga monomai WordPress ora. |
| Whakahohe Monomai | `activate_plugin` | Ka whakahohe i tētahi monomai sandbox i roto i te taiao sandbox wp-env. |

## API Tāuta Monomai {#plugin-installer-api}

Ka whakahaere te kaiwhakatāuta monomai i ngā mahi pūnaha kōnae ina tuku, ina tango rānei i ngā monomai. Ngā whanonga matua:

- **Whakamana ara**: Ka whakamanaia ngā ara monomai katoa ki te whaiaronga monomai kua whakaaetia i mua i tētahi tuhi kōnae. Ka whakakāhoretia ngā ngana whakawhiti whaiaronga.
- **Tāutanga kōnae-maha**: Tērā pea he maha ngā kōnae o tētahi monomai. Ka waihanga te kaiwhakatāuta i te whaiaronga monomai, ā, ka tuhi i ngā kōnae katoa ā-ngota.
- **Whakahou**: Ka whakakapi i ngā kōnae monomai o nāianei. Ka whakaweto i te monomai i mua i te tuhi kia karo i ngā hapa āhua wāhanga.
- **Muku mā te slug**: Ka kimi i te whaiaronga monomai mā te slug, ka whakaweto puta noa i ngā pae katoa, kātahi ka tango i te whaiaronga.

### Rēhita i tētahi Kaiwhakahaere Tāuta Ritenga {#registering-a-custom-install-handler}

Ka taea e koe te hono ki te huringa ora tāuta mā ngā mahi `gratis_ai_plugin_installer_before_install` me `gratis_ai_plugin_installer_after_install`:

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

## Rēhita Pūnaha Rauwiringa {#ecosystem-registry}

Ka rēhitatia ngā āheinga mā te **rēhita pūnaha rauwiringa monomai**. Ka whakamahere te rēhita i ngā slug āheinga ki ō rātou akomanga kaiwhakahaere, ā, ka whakaatu i aua mea ki te kaituku utauta a te agent AI.

Hei rēhita i tētahi āheinga whakahaere monomai ritenga:

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

Me whakatinana tō akomanga āheinga i te `Gratis_AI_Ability_Interface`:

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

## Tuitui HookScanner {#hookscanner-integration}

Ka whakahaere aunoa ngā āheinga `create_plugin` me `update_plugin` i te **HookScanner** ki te waehere hou kua whakaputaina. Ka whakahoki a HookScanner i tētahi rārangi o ngā hook mahi me ngā hook tātari WordPress kua rēhitatia e te monomai.

Hei tiki ā-hōtaka i ngā hua HookScanner:

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

Ka tīpoka aunoa a HookScanner i ngā whaiaronga `vendor/` me `node_modules/`.

## Hoahoanga Mahi Tukutahi-kore {#async-job-architecture}

Ka tukuna ngā whakahaere monomai roa (whakaputa, tāuta) hei **mahi tukutahi-kore** me te aroturuki kauneke ora. Ka uiui te atanga kōrerorero AI mō te kauneke, ā, ka roma i ngā whakahōu tūnga ki te kaiwhakamahi:

1. **Tuku** — ka waihanga te āheinga i tētahi mahi tukutahi-kore, ā, ka whakahoki i tētahi ID mahi.
2. **Poll** — the agent polls `gratis_ai_job_status($job_id)` every 2 seconds.
3. **Roma** — ka panaia ngā karere kauneke takawaenga ki te aho kōrerorero.
4. **Oti** — ka whakahokia, ka whakaaturia hoki te hua whakamutunga (angitu, hapa rānei).

Hei hono ki ngā takunetanga huringa ora mahi:

```php
add_action('gratis_ai_job_started', function(string $job_id, string $ability_slug): void {
    error_log("Job {$job_id} started for ability: {$ability_slug}");
}, 10, 2);

add_action('gratis_ai_job_completed', function(string $job_id, array $result): void {
    error_log("Job {$job_id} completed. Success: " . ($result['success'] ? 'yes' : 'no'));
}, 10, 2);
```
