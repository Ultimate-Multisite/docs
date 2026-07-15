---
title: Àwọn Agbára Ìṣàkóso Plugin
sidebar_position: 4
_i18n_hash: ef90f5181e76f8b1a3209101eded0653
---
# Àwọn Agbára Ìṣàkóso Àfikún

Gratis AI Agent v1.5.0 wá pẹ̀lú **àwọn agbára ìṣàkóso àfikún 7** tí olùrànlọ́wọ́ AI lè pè nígbà ìjíròrò. Àwọn agbára wọ̀nyí ń pèsè ìṣàkóso pẹ̀lú eto lórí àwọn àfikún WordPress tí a fi sori ẹrọ nípasẹ̀ [Eto Kíkọ Àfikún & Sandbox](../../user-guide/administration/plugin-builder-and-sandbox).

## Akopọ̀ Àwọn Agbára {#abilities-overview}

| Agbára | Slug | Àpèjúwe |
|---|---|---|
| Ṣàtòjọ Àwọn Àfikún | `list_plugins` | Dá àtòjọ àwọn àfikún padà nínú ilé ìpamọ́ sandbox pẹ̀lú ipò wọn. |
| Gba Àfikún | `get_plugin` | Gba metadata àti kóòdù orísun fún àfikún kan pàtó nípasẹ̀ slug. |
| Ṣẹ̀dá Àfikún | `create_plugin` | Ṣe àfikún tuntun láti inú àpèjúwe kan, ó sì fi pamọ́ sínú sandbox. |
| Ṣàfikún Àfikún | `update_plugin` | Rọ́pò kóòdù orísun àfikún pẹ̀lú ẹ̀yà tuntun. |
| Pa Àfikún Rẹ́ | `delete_plugin` | Yọ àfikún kan kúrò nínú ilé ìpamọ́ sandbox. Ó kọ́kọ́ mú un kúrò ní ṣíṣiṣẹ́. |
| Fi Àfikún Sori Ẹrọ | `install_plugin` | Gbé àfikún sandbox lọ sí directory àfikún WordPress tó ń ṣiṣẹ́. |
| Mú Àfikún Ṣiṣẹ́ | `activate_plugin` | Mú àfikún sandbox ṣiṣẹ́ nínú àyíká sandbox wp-env. |

## API Olùfi Àfikún Sori Ẹrọ {#plugin-installer-api}

Olùfi àfikún sori ẹrọ ń ṣàkóso àwọn iṣẹ́ file system nígbà tí a bá ń gbé tàbí yọ àwọn àfikún kúrò. Àwọn ìhùwàsí pàtàkì:

- **Ìfọwọ́sí ipa-ọ̀nà**: Gbogbo àwọn ipa-ọ̀nà àfikún ni a ń fọwọ́sí lòdì sí directory àfikún tí a gba láàyè kí ìkọ̀wé fáìlì kankan tó ṣẹlẹ̀. A máa kọ àwọn ìgbìyànjú directory traversal.
- **Fífí sori ẹrọ fáìlì púpọ̀**: Àfikún kan lè ní ọ̀pọ̀ fáìlì. Olùfi sori ẹrọ ṣẹ̀dá directory àfikún, ó sì kọ gbogbo fáìlì ní ẹ̀kan ṣoṣo.
- **Ìmúdójúìwọ̀n**: Rọ́pò àwọn fáìlì àfikún tó wà. Ó mú àfikún kúrò ní ṣíṣiṣẹ́ kí ó tó kọ̀wé láti yàgò fún àwọn àṣìṣe ipò-apá kan.
- **Pípaarẹ́ nípasẹ̀ slug**: Wá directory àfikún nípasẹ̀ slug, ó mú un kúrò ní ṣíṣiṣẹ́ kọjá gbogbo àwọn ojúlé, lẹ́yìn náà ó yọ directory náà kúrò.

### Fífọwọ́kọ Olùmú Fífí Sori Ẹrọ Àdáni {#registering-a-custom-install-handler}

O lè so mọ́ install lifecycle nípa lílo àwọn actions `gratis_ai_plugin_installer_before_install` àti `gratis_ai_plugin_installer_after_install`:

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

## Ìforúkọsílẹ̀ Ecosystem {#ecosystem-registry}

A ń forúkọsílẹ̀ àwọn agbára nípasẹ̀ **ìforúkọsílẹ̀ ecosystem àfikún**. Ìforúkọsílẹ̀ náà so àwọn slug agbára mọ́ àwọn class handler wọn, ó sì fi wọ́n hàn sí tool dispatcher ti AI agent.

Láti forúkọsílẹ̀ agbára ìṣàkóso àfikún àdáni kan:

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

Class agbára rẹ gbọ́dọ̀ ṣe `Gratis_AI_Ability_Interface`:

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

## Ìṣepọ̀ HookScanner {#hookscanner-integration}

Àwọn agbára `create_plugin` àti `update_plugin` máa ń ṣiṣẹ́ **HookScanner** laifọwọ́yi lórí kóòdù tuntun tí a ṣẹ̀dá. HookScanner dá àtòjọ àwọn hook action àti filter WordPress tí àfikún náà forúkọsílẹ̀ padà.

Láti gba àwọn èsì HookScanner pẹ̀lú eto:

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

HookScanner máa ń fo àwọn directory `vendor/` àti `node_modules/` kọjá laifọwọ́yi.

## Ìlànà Iṣẹ́ Async {#async-job-architecture}

Àwọn iṣẹ́ àfikún tó máa ń pẹ́ (ṣẹ̀dá, fi sori ẹrọ) ni a ń rán jáde gẹ́gẹ́ bí **àwọn iṣẹ́ async** pẹ̀lú ìtọ́pa ìlọsíwájú laaye. Ojú ìbánisọ̀rọ̀ AI ń yẹ ìlọsíwájú wò léraléra, ó sì ń rán àwọn ìmúdójúìwọ̀n ipò sí oníṣe:

1. **Rán jáde** — agbára náà ṣẹ̀dá iṣẹ́ async kan, ó sì dá ID iṣẹ́ padà.
2. **Poll** — the agent polls `gratis_ai_job_status($job_id)` every 2 seconds.
3. **San jáde** — a máa ń ti àwọn ìfiranṣẹ́ ìlọsíwájú àárín sí thread ìbánisọ̀rọ̀.
4. **Parí** — a dá èsì ìkẹyìn (àṣeyọrí tàbí àṣìṣe) padà, a sì fi hàn.

Láti so mọ́ àwọn ìṣẹ̀lẹ̀ lifecycle iṣẹ́:

```php
add_action('gratis_ai_job_started', function(string $job_id, string $ability_slug): void {
    error_log("Job {$job_id} started for ability: {$ability_slug}");
}, 10, 2);

add_action('gratis_ai_job_completed', function(string $job_id, array $result): void {
    error_log("Job {$job_id} completed. Success: " . ($result['success'] ? 'yes' : 'no'));
}, 10, 2);
```
