---
title: Kamampuhan Ngatur Plugin
sidebar_position: 4
_i18n_hash: ef90f5181e76f8b1a3209101eded0653
---
# Kamampuh Ngatur Plugin {#plugin-management-abilities}

Gratis AI Agent v1.5.0 hadir jeung **7 kamampuh ngatur plugin** anu bisa dipaké ku AI assistant salila paguneman. Kamampuh ieu nyadiakeun kadali programatik kana plugin WordPress anu dipasang ngaliwatan [Sistem Plugin Builder & Sandbox](../../user-guide/administration/plugin-builder-and-sandbox).

## Ringkesan Kamampuh {#abilities-overview}

| Kamampuh | Slug | Pedaran |
|---|---|---|
| Daptar Plugin | `list_plugins` | Mulangkeun daptar plugin dina toko sandbox jeung statusna. |
| Candak Plugin | `get_plugin` | Nyokot metadata jeung source code pikeun plugin husus dumasar slug. |
| Jieun Plugin | `create_plugin` | Ngahasilkeun plugin anyar tina pedaran sarta nyimpenana dina sandbox. |
| Apdet Plugin | `update_plugin` | Ngaganti source code plugin ku vérsi anyar. |
| Pupus Plugin | `delete_plugin` | Mupus plugin tina toko sandbox. Dinonaktipkeun heula. |
| Pasang Plugin | `install_plugin` | Masang plugin sandboxed kana diréktori plugin WordPress live. |
| Aktipkeun Plugin | `activate_plugin` | Ngaktipkeun plugin sandboxed dina lingkungan sandbox wp-env. |

## Plugin Installer API {#plugin-installer-api}

Installer plugin ngatur operasi sistem file nalika masang atawa mupus plugin. Paripolah utama:

- **Validasi path**: Sadaya path plugin divalidasi kana diréktori plugin anu diidinan saméméh aya panulisan file. Usaha directory traversal ditolak.
- **Pamasangan multi-file**: Plugin bisa diwangun ku sababaraha file. Installer nyieun diréktori plugin sarta nulis sadaya file sacara atomik.
- **Apdet**: Ngaganti file plugin anu geus aya. Ngadinonaktipkeun plugin saméméh nulis pikeun nyingkahan kasalahan kaayaan parsial.
- **Pupus dumasar slug**: Manggihan diréktori plugin dumasar slug, ngadinonaktipkeun dina sakabéh situs, tuluy mupus diréktorina.

### Ngadaptarkeun Handler Pamasangan Kustom {#registering-a-custom-install-handler}

Anjeun bisa hook kana lifecycle pamasangan maké aksi `gratis_ai_plugin_installer_before_install` jeung `gratis_ai_plugin_installer_after_install`:

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

## Ecosystem Registry {#ecosystem-registry}

Kamampuh didaptarkeun ngaliwatan **registry ékosistem plugin**. Registry nyambungkeun slug kamampuh ka kelas handler-na sarta muka éta ka dispatcher tool AI agent.

Pikeun ngadaptarkeun kamampuh ngatur plugin kustom:

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

Kelas kamampuh anjeun kudu ngalaksanakeun `Gratis_AI_Ability_Interface`:

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

## Integrasi HookScanner {#hookscanner-integration}

Kamampuh `create_plugin` jeung `update_plugin` sacara otomatis ngajalankeun **HookScanner** kana code anu kakara dihasilkeun. HookScanner mulangkeun daptar hook action jeung filter WordPress anu didaptarkeun ku plugin.

Pikeun nyokot hasil HookScanner sacara programatik:

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

HookScanner sacara otomatis ngalangkungan diréktori `vendor/` jeung `node_modules/`.

## Arsitéktur Job Async {#async-job-architecture}

Operasi plugin anu lila jalan (generate, install) dikirim salaku **job async** jeung palacak kamajuan live. Antarmuka obrolan AI nge-poll kamajuan sarta ngalirkeun apdet status ka pamaké:

1. **Kirim** — kamampuh nyieun job async sarta mulangkeun ID job.
2. **Poll** — the agent polls `gratis_ai_job_status($job_id)` every 2 seconds.
3. **Stream** — pesen kamajuan panengah dikirim ka thread obrolan.
4. **Rengse** — hasil ahir (suksés atawa kasalahan) dibalikeun sarta ditembongkeun.

Pikeun hook kana kajadian lifecycle job:

```php
add_action('gratis_ai_job_started', function(string $job_id, string $ability_slug): void {
    error_log("Job {$job_id} started for ability: {$ability_slug}");
}, 10, 2);

add_action('gratis_ai_job_completed', function(string $job_id, array $result): void {
    error_log("Job {$job_id} completed. Success: " . ($result['success'] ? 'yes' : 'no'));
}, 10, 2);
```
