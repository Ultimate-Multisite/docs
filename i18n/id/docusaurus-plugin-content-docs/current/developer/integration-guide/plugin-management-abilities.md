---
title: Kemampuan Manajemen Plugin
sidebar_position: 4
_i18n_hash: ef90f5181e76f8b1a3209101eded0653
---
# Kemampuan Manajemen Plugin

Gratis AI Agent v1.5.0 dilengkapi dengan **7 kemampuan manajemen plugin** yang dapat dipanggil oleh asisten AI selama percakapan. Kemampuan-kemampuan ini memberikan kontrol programatik atas plugin WordPress yang diinstal melalui [Plugin Builder & Sandbox System](../../user-guide/administration/plugin-builder-and-sandbox).

## Ikhtisar Kemampuan {#abilities-overview}

| Kemampuan | Slug | Deskripsi |
|---|---|---|
| List Plugins | `list_plugins` | Mengembalikan daftar plugin di sandbox store beserta statusnya. |
| Get Plugin | `get_plugin` | Mengambil metadata dan kode sumber untuk plugin tertentu berdasarkan slug. |
| Create Plugin | `create_plugin` | Menghasilkan plugin baru dari deskripsi dan menyimpannya di sandbox. |
| Update Plugin | `update_plugin` | Mengganti kode sumber plugin dengan versi baru. |
| Delete Plugin | `delete_plugin` | Menghapus plugin dari sandbox store. Plugin akan dinonaktifkan terlebih dahulu. |
| Install Plugin | `install_plugin` | Menerapkan plugin yang berada di sandbox ke direktori plugin WordPress yang aktif. |
| Activate Plugin | `activate_plugin` | Mengaktifkan plugin yang berada di sandbox dalam lingkungan sandbox wp-env. |

## Plugin Installer API {#plugin-installer-api}

Plugin installer menangani operasi sistem file saat menerapkan atau menghapus plugin. Perilaku utamanya meliputi:

- **Validasi Path**: Semua path plugin divalidasi terhadap direktori plugin yang diizinkan sebelum penulisan file apa pun. Upaya traversal direktori akan ditolak.
- **Instal Multi-file**: Sebuah plugin mungkin terdiri dari banyak file. Installer akan membuat direktori plugin dan menulis semua file secara atomik.
- **Pembaruan (Update)**: Mengganti file plugin yang sudah ada. Plugin akan dinonaktifkan sebelum penulisan untuk menghindari kesalahan status parsial.
- **Hapus berdasarkan slug**: Menemukan direktori plugin berdasarkan slug, menonaktifkannya di semua situs, lalu menghapus direktori tersebut.

### Mendaftarkan Handler Instalasi Kustom {#registering-a-custom-install-handler}

Anda dapat menyambungkan (hook) siklus hidup instalasi menggunakan actions `gratis_ai_plugin_installer_before_install` dan `gratis_ai_plugin_installer_after_install`:

```php
add_action('gratis_ai_plugin_installer_before_install', function(string $slug, array $files): void {
    // $slug: nama direktori plugin
    // $files: array asosiatif dari path relatif => konten file
    error_log("Menginstal plugin: {$slug} dengan " . count($files) . " file.");
}, 10, 2);

add_action('gratis_ai_plugin_installer_after_install', function(string $slug, bool $success): void {
    if ($success) {
        error_log("Plugin {$slug} berhasil diinstal.");
    }
}, 10, 2);
```

## Ecosystem Registry {#ecosystem-registry}

Kemampuan didaftarkan melalui **plugin ecosystem registry**. Registry ini memetakan slug kemampuan ke kelas handler-nya dan mengeksposnya ke tool dispatcher agen AI.

Untuk mendaftarkan kemampuan manajemen plugin kustom:

```php
add_filter('gratis_ai_plugin_abilities', function(array $abilities): array {
    $abilities['my_custom_ability'] = [
        'class'       => My_Custom_Plugin_Ability::class,
        'label'       => 'Kemampuan Kustom Saya',
        'description' => 'Melakukan sesuatu yang berguna dengan plugin.',
    ];
    return $abilities;
});
```

Kelas kemampuan Anda harus mengimplementasikan `Gratis_AI_Ability_Interface`:

```php
class My_Custom_Plugin_Ability implements Gratis_AI_Ability_Interface {

    public function get_slug(): string {
        return 'my_custom_ability';
    }

    public function get_schema(): array {
        return [
            'name'        => 'my_custom_ability',
            'description' => 'Melakukan sesuatu yang berguna dengan plugin.',
            'parameters'  => [
                'type'       => 'object',
                'properties' => [
                    'slug' => [
                        'type'        => 'string',
                        'description' => 'Slug plugin yang akan dioperasikan.',
                    ],
                ],
                'required' => ['slug'],
            ],
        ];
    }

    public function execute(array $params): array {
        $slug = sanitize_key($params['slug'] ?? '');
        // ... implementasi Anda ...
        return ['success' => true, 'slug' => $slug];
    }
}
```

## Integrasi HookScanner {#hookscanner-integration}

Kemampuan `create_plugin` dan `update_plugin` secara otomatis menjalankan **HookScanner** terhadap kode yang baru dihasilkan. HookScanner mengembalikan daftar hook action dan filter WordPress yang didaftarkan oleh plugin tersebut.

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

HookScanner secara otomatis melewati direktori `vendor/` dan `node_modules/`.

## Arsitektur Job Asinkron (Async Job) {#async-job-architecture}

Operasi plugin yang berjalan lama (menghasilkan, menginstal) dikirim sebagai **job asinkron** dengan pelacakan progres langsung. Antarmuka chat AI akan melakukan polling untuk progres dan mengirimkan pembaruan status kepada pengguna:

1. **Dispatch** — kemampuan membuat job asinkron dan mengembalikan ID job.
2. **Poll** — agen melakukan polling ke `gratis_ai_job_status($job_id)` setiap 2 detik.
3. **Stream** — pesan progres perantara didorong ke utas chat.
4. **Complete** — hasil akhir (sukses atau error) dikembalikan dan ditampilkan.

Untuk menyambungkan ke event siklus hidup job:

```php
add_action('gratis_ai_job_started', function(string $job_id, string $ability_slug): void {
    error_log("Job {$job_id} dimulai untuk kemampuan: {$ability_slug}");
}, 10, 2);

add_action('gratis_ai_job_completed', function(string $job_id, array $result): void {
    error_log("Job {$job_id} selesai. Sukses: " . ($result['success'] ? 'ya' : 'tidak'));
}, 10, 2);
```
