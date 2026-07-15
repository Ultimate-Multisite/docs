---
title: Comasan Rianachd Phlugan
sidebar_position: 4
_i18n_hash: ef90f5181e76f8b1a3209101eded0653
---
# Comasan Riaghlaidh Phlugan

Tha Gratis AI Agent v1.5.0 a’ tighinn le **7 comasan riaghlaidh phlugan** as urrainn don neach-cuideachaidh AI a ghairm rè còmhraidh. Bheir na comasan seo smachd prògramaichte air plugain WordPress a chaidh a stàladh tron [t-Siostam Togail Phlugan & Bogsa-gainmhich](../../user-guide/administration/plugin-builder-and-sandbox).

## Sealladh Farsaing air Comasan {#abilities-overview}

| Comas | Slug | Tuairisgeul |
|---|---|---|
| Liostaich Plugain | `list_plugins` | Tillidh e liosta de phlugain ann an stòr a’ bhogsa-ghainmhich leis an inbhe aca. |
| Faigh Plugan | `get_plugin` | Gheibh e metadata agus còd tùsail airson plugan sònraichte a rèir slug. |
| Cruthaich Plugan | `create_plugin` | Gineas e plugan ùr bho thuairisgeul agus stòraidh e e sa bhogsa-ghainmhich. |
| Ùraich Plugan | `update_plugin` | Cuiridh e tionndadh ùr an àite còd tùsail plugain. |
| Sguab às Plugan | `delete_plugin` | Bheir e plugan air falbh bho stòr a’ bhogsa-ghainmhich. Cuiridh e dheth an toiseach. |
| Stàlaich Plugan | `install_plugin` | Cuiridh e plugan bogsa-ghainmhich gu eòlaire plugain WordPress beò. |
| Gnìomhaich Plugan | `activate_plugin` | Gnìomhaichidh e plugan bogsa-ghainmhich ann an àrainneachd bogsa-ghainmhich wp-env. |

## API Stàlaichear nam Plugan {#plugin-installer-api}

Bidh stàlaichear nam plugan a’ làimhseachadh obrachaidhean siostam-fhaidhlichean nuair a thathar a’ cur plugain an gnìomh no gan toirt air falbh. Prìomh ghiùlanan:

- **Dearbhadh slighe**: Thèid gach slighe plugain a dhearbhadh an aghaidh an eòlaire plugain cheadaichte mus dèanar sgrìobhadh faidhle sam bith. Thèid oidhirpean air siubhal eòlaire a dhiùltadh.
- **Stàladh ioma-fhaidhle**: Faodaidh plugan a bhith air a dhèanamh suas de dh’iomadh faidhle. Cruthaichidh an stàlaichear eòlaire a’ phlugain agus sgrìobhaidh e na faidhlichean uile gu h-atamach.
- **Ùrachadh**: Cuiridh e faidhlichean plugain ùra an àite feadhainn a tha ann mu thràth. Cuiridh e am plugan dheth mus sgrìobh e gus mearachdan staid phàirteach a sheachnadh.
- **Sguab às a rèir slug**: Lorgaidh e eòlaire a’ phlugain a rèir slug, cuiridh e dheth thar gach làrach, agus an uair sin bheir e air falbh an t-eòlaire.

### A’ Clàradh Làimhseachair Stàlaidh Gnàthaichte {#registering-a-custom-install-handler}

Faodaidh tu dubhadh a-steach do chuairt-bheatha an stàlaidh a’ cleachdadh nan gnìomhan `gratis_ai_plugin_installer_before_install` agus `gratis_ai_plugin_installer_after_install`:

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

## Clàr an Eag-shiostaim {#ecosystem-registry}

Tha comasan air an clàradh tron **chlàr eag-shiostaim phlugan**. Bidh an clàr a’ mapadh slugs comais gu na clasaichean-làimhseachaidh aca agus gan nochdadh do dispatcher innealan an AI agent.

Gus comas riaghlaidh phlugan gnàthaichte a chlàradh:

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

Feumaidh clas a’ chomais agad an `Gratis_AI_Ability_Interface` a chur an gnìomh:

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

## Amalachadh HookScanner {#hookscanner-integration}

Ruithidh na comasan `create_plugin` agus `update_plugin` **HookScanner** gu fèin-obrachail an aghaidh còd a chaidh a ghineadh às ùr. Tillidh HookScanner liosta de hooks gnìomh agus criathra WordPress a chaidh a chlàradh leis a’ phlugan.

Gus toraidhean HookScanner fhaighinn gu prògramaichte:

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

Leumaidh HookScanner seachad air eòlairean `vendor/` agus `node_modules/` gu fèin-obrachail.

## Ailtireachd Obair Async {#async-job-architecture}

Thèid obrachaidhean plugain fad-ruith (gineadh, stàladh) a chur air falbh mar **obraichean async** le tracadh adhartais beò. Bidh eadar-aghaidh cabadaich AI a’ polladh airson adhartas agus a’ sruthadh ùrachaidhean inbhe don chleachdaiche:

1. **Cuir air falbh** — cruthaichidh an comas obair async agus tillidh e ID obrach.
2. **Poll** — the agent polls `gratis_ai_job_status($job_id)` every 2 seconds.
3. **Sruth** — thèid teachdaireachdan adhartais eadar-mheadhanach a phutadh gu snàithlean a’ chabadaich.
4. **Crìochnaich** — thèid an toradh deireannach (soirbheachas no mearachd) a thilleadh agus a thaisbeanadh.

Gus dubhadh a-steach do thachartasan cuairt-bheatha obrach:

```php
add_action('gratis_ai_job_started', function(string $job_id, string $ability_slug): void {
    error_log("Job {$job_id} started for ability: {$ability_slug}");
}, 10, 2);

add_action('gratis_ai_job_completed', function(string $job_id, array $result): void {
    error_log("Job {$job_id} completed. Success: " . ($result['success'] ? 'yes' : 'no'));
}, 10, 2);
```
