---
title: Kapabilitas Pangelolaan Plugin
sidebar_position: 4
_i18n_hash: ef90f5181e76f8b1a3209101eded0653
---
# Kabisan Manajemen Plugin {#plugin-management-abilities}

Gratis AI Agent v1.5.0 teka karo **7 kabisan manajemen plugin** sing bisa diundang dening asisten AI sajrone pacelathon. Kabisan iki nyedhiyakake kontrol programatik marang plugin WordPress sing dipasang liwat [Sistem Plugin Builder & Sandbox](../../user-guide/administration/plugin-builder-and-sandbox).

## Ringkesan Kabisan {#abilities-overview}

| Kabisan | Slug | Katrangan |
|---|---|---|
| Dhaptar Plugin | `list_plugins` | Mbalekake dhaptar plugin ing panyimpenan sandbox bebarengan karo statuse. |
| Entuk Plugin | `get_plugin` | Njupuk metadata lan source code kanggo plugin tartamtu miturut slug. |
| Gawe Plugin | `create_plugin` | Ngasilake plugin anyar saka katrangan lan nyimpen ing sandbox. |
| Nganyari Plugin | `update_plugin` | Ngganti source code plugin nganggo versi anyar. |
| Busak Plugin | `delete_plugin` | Mbusak plugin saka panyimpenan sandbox. Mateni dhisik. |
| Pasang Plugin | `install_plugin` | Nyebarake plugin sandbox menyang direktori plugin WordPress urip. |
| Aktifake Plugin | `activate_plugin` | Ngaktifake plugin sandbox ing lingkungan sandbox wp-env. |

## API Pemasang Plugin {#plugin-installer-api}

Pemasang plugin nangani operasi sistem berkas nalika nyebarake utawa mbusak plugin. Prilaku utama:

- **Validasi path**: Kabeh path plugin divalidasi marang direktori plugin sing diidinake sadurunge ana panulisan berkas apa wae. Upaya traversal direktori ditolak.
- **Pemasangan multi-berkas**: Plugin bisa dumadi saka pirang-pirang berkas. Pemasang nggawe direktori plugin lan nulis kabeh berkas kanthi atomik.
- **Nganyari**: Ngganti berkas plugin sing wis ana. Mateni plugin sadurunge nulis kanggo ngindhari kasalahan kahanan parsial.
- **Busak miturut slug**: Nemokake direktori plugin miturut slug, mateni ing kabeh situs, banjur mbusak direktori kasebut.

### Ndhaptar Handler Pemasangan Kustom {#registering-a-custom-install-handler}

Sampeyan bisa nyambung menyang siklus urip pemasangan nganggo aksi `gratis_ai_plugin_installer_before_install` lan `gratis_ai_plugin_installer_after_install`:

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

## Registry Ekosistem {#ecosystem-registry}

Kabisan didhaptar liwat **registry ekosistem plugin**. Registry iki memetakake slug kabisan menyang kelas handler lan mbukak kanggo tool dispatcher kagungane agen AI.

Kanggo ndhaptar kabisan manajemen plugin kustom:

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

Kelas kabisan sampeyan kudu ngetrapake `Gratis_AI_Ability_Interface`:

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

Kabisan `create_plugin` lan `update_plugin` kanthi otomatis mbukak **HookScanner** marang kode sing mentas digawe. HookScanner mbalekake dhaptar hook aksi lan filter WordPress sing didhaptar dening plugin.

Kanggo njupuk asil HookScanner kanthi programatik:

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

HookScanner kanthi otomatis ngliwati direktori `vendor/` lan `node_modules/`.

## Arsitektur Job Async {#async-job-architecture}

Operasi plugin sing mlaku suwe (ngasilake, masang) dikirim minangka **job async** kanthi pelacakan kemajuan langsung. Antarmuka chat AI polling kemajuan lan ngirim update status kanthi stream marang pangguna:

1. **Kirim** — kabisan nggawe job async lan mbalekake ID job.
2. **Poll** — the agent polls `gratis_ai_job_status($job_id)` every 2 seconds.
3. **Stream** — pesen kemajuan sementara didorong menyang thread chat.
4. **Rampung** — asil pungkasan (sukses utawa kasalahan) dibalekake lan ditampilake.

Kanggo nyambung menyang acara siklus urip job:

```php
add_action('gratis_ai_job_started', function(string $job_id, string $ability_slug): void {
    error_log("Job {$job_id} started for ability: {$ability_slug}");
}, 10, 2);

add_action('gratis_ai_job_completed', function(string $job_id, array $result): void {
    error_log("Job {$job_id} completed. Success: " . ($result['success'] ? 'yes' : 'no'));
}, 10, 2);
```
