---
title: Keupayaan Pengurusan Plugin
sidebar_position: 4
_i18n_hash: ef90f5181e76f8b1a3209101eded0653
---
# Kemampuan Pengurusan Plugin

Gratis AI Agent v1.5.0 dilengkapi dengan **7 kemampuan pengurusan plugin** yang boleh dipanggil oleh pembantu AI semasa perbualan. Kemampuan ini memberikan kawalan programatik ke atas plugin WordPress yang dipasang melalui [Plugin Builder & Sandbox System](../../user-guide/administration/plugin-builder-and-sandbox).

## Gambaran Keseluruhan Kemampuan {#abilities-overview}

| Kemampuan | Slug | Penerangan |
|---|---|---|
| List Plugins | `list_plugins` | Mengembalikan senarai plugin dalam stor sandbox berserta statusnya. |
| Get Plugin | `get_plugin` | Mengambil metadata dan kod sumber untuk plugin tertentu mengikut slug. |
| Create Plugin | `create_plugin` | Menjana plugin baharu daripada penerangan dan menyimpannya dalam sandbox. |
| Update Plugin | `update_plugin` | Menggantikan kod sumber plugin dengan versi baharu. |
| Delete Plugin | `delete_plugin` | Membuang plugin daripada stor sandbox. Ia akan dinyahaktifkan terlebih dahulu. |
| Install Plugin | `install_plugin` | Menerapkan plugin yang berada dalam sandbox ke direktori plugin WordPress yang aktif. |
| Activate Plugin | `activate_plugin` | Mengaktifkan plugin yang berada dalam sandbox dalam persekitaran sandbox wp-env. |

## API Pemasang Plugin {#plugin-installer-api}

Pemasang plugin menguruskan operasi sistem fail apabila menterapkan atau membuang plugin. Tingkah laku utama:

- **Pengesahan Laluan (Path validation)**: Semua laluan plugin disahkan terhadap direktori plugin yang dibenarkan sebelum sebarang penulisan fail. Percubaan traversal direktori akan ditolak.
- **Pemasangan Pelbagai Fail (Multi-file install)**: Sebuah plugin mungkin terdiri daripada pelbagai fail. Pemasang akan mencipta direktori plugin dan menulis semua fail secara atomik.
- **Kemas Kini (Update)**: Menggantikan fail plugin sedia ada. Ia akan menyahaktifkan plugin sebelum menulis untuk mengelakkan ralat keadaan separa.
- **Padam Mengikut Slug (Delete by slug)**: Mencari direktori plugin mengikut slug, menyahaktifkannya di semua tapak, kemudian membuang direktori tersebut.

### Mendaftarkan Pengendali Pemasangan Tersuai {#registering-a-custom-install-handler}

Anda boleh menyambung ke kitaran hayat pemasangan menggunakan tindakan `gratis_ai_plugin_installer_before_install` dan `gratis_ai_plugin_installer_after_install`:

```php
add_action('gratis_ai_plugin_installer_before_install', function(string $slug, array $files): void {
    // $slug: nama direktori plugin
    // $files: array asosiatif laluan relatif => kandungan fail
    error_log("Installing plugin: {$slug} with " . count($files) . " files.");
}, 10, 2);

add_action('gratis_ai_plugin_installer_after_install', function(string $slug, bool $success): void {
    if ($success) {
        error_log("Plugin {$slug} installed successfully.");
    }
}, 10, 2);
```

## Daftar Ekosistem {#ecosystem-registry}

Kemampuan didaftarkan melalui **daftar ekosistem plugin**. Daftar ini memetakan slug kemampuan kepada kelas pengendali mereka dan mendedahkannya kepada pengagih alat (tool dispatcher) agen AI.

Untuk mendaftarkan kemampuan pengurusan plugin tersuai:

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

Kelas kemampuan anda mesti melaksanakan `Gratis_AI_Ability_Interface`:

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

Kemampuan `create_plugin` dan `update_plugin` secara automatik menjalankan **HookScanner** ke atas kod yang baru dijana. HookScanner mengembalikan senarai hook tindakan dan penapis (action and filter hooks) WordPress yang didaftarkan oleh plugin tersebut.

Untuk mengambil hasil HookScanner secara programatik:

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

HookScanner akan melangkau direktori `vendor/` dan `node_modules/` secara automatik.

## Seni Bina Tugas Asinkron (Async Job Architecture) {#async-job-architecture}

Operasi plugin yang berjalan lama (menjana, memasang) dihantar sebagai **tugas asinkron (async jobs)** dengan penjejakan kemajuan langsung. Antaramuka sembang AI akan menyemak (poll) kemajuan dan menstrim kemas kini status kepada pengguna:

1. **Dispatch** — kemampuan mencipta tugas asinkron dan mengembalikan ID tugas.
2. **Poll** — ejen menyemak `gratis_ai_job_status($job_id)` setiap 2 saat.
3. **Stream** — mesej kemajuan pertengahan dihantar ke benang sembang.
4. **Complete** — hasil akhir (kejayaan atau ralat) dikembalikan dan dipaparkan.

Untuk menyambung ke acara kitaran hayat tugas:

```php
add_action('gratis_ai_job_started', function(string $job_id, string $ability_slug): void {
    error_log("Job {$job_id} started for ability: {$ability_slug}");
}, 10, 2);

add_action('gratis_ai_job_completed', function(string $job_id, array $result): void {
    error_log("Job {$job_id} completed. Success: " . ($result['success'] ? 'yes' : 'no'));
}, 10, 2);
```
