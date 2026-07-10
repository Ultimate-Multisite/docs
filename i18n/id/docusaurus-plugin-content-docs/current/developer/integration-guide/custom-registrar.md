---
title: Membangun Integrasi Registrar Kustom
sidebar_position: 10
_i18n_hash: ee4c4ad8a1defe5760fd09b8f173ef7d
---
# Membuat Integrasi Registrar Kustom {#building-a-custom-registrar-integration}

Addon Domain Seller menggunakan pola **Integration Registry**. Setiap registrar adalah kelas PHP yang mengimplementasikan `Domain_Selling_Capability` dan mendaftarkan dirinya melalui *action hook* `wu_domain_seller_register_capabilities`.

Panduan ini menunjukkan cara menghubungkan registrar kustom Anda.

## Antarmuka (The interface) {#the-interface}

Kelas Anda harus mengimplementasikan `WP_Ultimo\Integrations\Capabilities\Domain_Selling_Capability` dan memperluas (extend) `WP_Ultimo\Integrations\Base_Capability_Module`.

Metode yang wajib ada:

```php
namespace My\Plugin\Capabilities;

use WP_Ultimo\Integrations\Base_Capability_Module;
use WP_Ultimo\Integrations\Capabilities\Domain_Selling_Capability;

class My_Registrar_Selling extends Base_Capability_Module implements Domain_Selling_Capability {

    // --- Metode identitas wajib (dari Base_Capability_Module) ---

    public function get_capability_id(): string {
        return 'domain-selling';  // selalu 'domain-selling'
    }

    public function get_title(): string {
        return __('Domain Selling', 'my-plugin');
    }

    public function get_explainer_lines(): array {
        return [
            'will'     => [__('Aktifkan pendaftaran domain melalui My Registrar.', 'my-plugin')],
            'will_not' => [],
        ];
    }

    // --- Metode inti wajib (dari Domain_Selling_Capability) ---

    /** Mengambil semua TLD yang tersedia dan harga grosir. */
    public function sync_tlds(): array { ... }

    /** Memeriksa ketersediaan $domain_name di berbagai $tlds. */
    public function search_domains(string $domain_name, array $tlds = []): array { ... }

    /** Mendapatkan harga grosir untuk TLD selama N tahun. */
    public function get_domain_pricing(string $tld, int $years = 1): array { ... }

    /** Mendaftarkan domain. Mengembalikan ['success' => true, 'expiry_date' => '...'] jika berhasil. */
    public function register_domain(string $domain_name, array $registrant_info, int $years = 1): array { ... }

    /** Memperpanjang domain selama N tahun. */
    public function renew_domain(string $domain_name, int $years = 1): array { ... }

    /** Mendapatkan status pendaftaran, tanggal kedaluwarsa, dan nameserver. */
    public function get_domain_info(string $domain_name): array { ... }

    /** Menguji kredensial API dan konektivitas. */
    public function test_connection(): array { ... }
}
```

### Metode Opsional {#optional-methods}

Implementasikan metode ini untuk membuka fitur tambahan. Addon mendeteksi dukungan melalui `method_exists()`:

| Metode | Membuka |
|---|---|
| `supports_whois_privacy(): bool` | Opsi privasi WHOIS di pengaturan produk |
| `enable_whois_privacy(string $domain_name): array` | Mengaktifkan privasi secara otomatis saat pendaftaran |
| `get_dns_records(string $domain_name): array` | Tab tampilan DNS pelanggan |
| `add_dns_record(string $domain_name, array $record_data): array` | Pelanggan dapat menambahkan record DNS |
| `update_dns_record(string $domain, string $record_id, array $record_data): array` | Pelanggan dapat mengedit record DNS |
| `delete_dns_record(string $domain, string $record_id, array $data): array` | Pelanggan dapat menghapus record DNS |
| `update_nameservers(string $domain_name, array $nameservers): array` | Manajemen nameserver |
| `get_epp_code(string $domain_name): array` | Transfer domain (keluar) |
| `transfer_domain(string $domain, string $auth_code, array $registrant_info, array $options): array` | Transfer domain (masuk) |

### Konvensi Nilai Kembalian (Return value convention) {#return-value-convention}

Semua metode mengembalikan array dengan kunci `success` minimal:

```php
// Sukses
return ['success' => true, 'data' => [...]];

// Gagal
return ['success' => false, 'message' => 'Pesan error yang mudah dibaca'];
```

---

## Mendaftarkan Kemampuan Anda (Registering your capability) {#registering-your-capability}

Daftarkan kelas Anda menggunakan *action* `wu_domain_seller_register_capabilities`:

```php
add_action('wu_domain_seller_register_capabilities', function(\WP_Ultimo\Integrations\Integration_Registry $registry) {
    $registry->add_capability('my-registrar', new \My\Plugin\Capabilities\My_Registrar_Selling());
});
```

Argumen pertama pada `add_capability()` adalah **provider ID** — *slug* huruf kecil yang digunakan untuk mengidentifikasi registrar Anda di pengaturan, konfigurasi produk, dan saluran log. Gunakan sesuatu yang unik (misalnya, *slug* perusahaan Anda).

---

## Menambahkan Bidang Kredensial ke Wizard {#adding-credential-fields-to-the-wizard}

Untuk memungkinkan admin memasukkan kredensial melalui *setup wizard*, daftarkan integrasi Anda:

```php
add_action('wu_domain_seller_register_integrations', function(\WP_Ultimo\Integrations\Integration_Registry $registry) {
    $registry->add_integration('my-registrar', [
        'name'   => __('My Registrar', 'my-plugin'),
        'fields' => [
            [
                'id'    => 'my_registrar_api_key',
                'label' => __('API Key', 'my-plugin'),
                'type'  => 'text',
            ],
            [
                'id'    => 'my_registrar_api_secret',
                'label' => __('API Secret', 'my-plugin'),
                'type'  => 'password',
            ],
        ],
    ]);
});
```

Kredensial disimpan sebagai *network options* menggunakan ID bidang sebagai kuncinya. Ambil kredensial tersebut di kelas kemampuan Anda dengan `wu_get_setting('my_registrar_api_key')`.

---

## Hooks untuk Aksi Pasca-Pendaftaran {#hooks-for-post-registration-actions}

Gunakan *action* ini untuk memicu *webhook*, *provisioning*, notifikasi, atau pembaruan CRM:

```php
// Setelah pendaftaran domain berhasil
add_action('wu_domain_registration_completed', function($payment, $registration_data, $result) {
    // $registration_data: domain_name, provider_id, years, expiry_date, customer_id
    // $result: respons registrar mentah
    my_crm_update_domain($registration_data['domain_name'], $registration_data['customer_id']);
}, 10, 3);

// Setelah pendaftaran gagal
add_action('wu_domain_registration_failed', function($payment, $registration_data, $error_message) {
    my_alert_team("Pendaftaran domain gagal: {$registration_data['domain_name']} — {$error_message}");
}, 10, 3);

// Setelah perpanjangan berhasil
add_action('wu_domain_renewal_completed', function($payment, $renewal_data, $result) {
    // Perbarui sistem penagihan Anda, kirim tanda terima, dll.
}, 10, 3);

// Setelah perpanjangan gagal
add_action('wu_domain_renewal_failed', function($payment, $renewal_data, $error_message) {
    // Beri peringatan, logika coba ulang, dll.
}, 10, 3);

// Setelah transfer domain selesai
add_action('wu_domain_transfer_completed', function($domain, $transfer_data) {
    // $domain adalah objek WP_Ultimo\Models\Domain
}, 10, 2);

// Setelah verifikasi SES DKIM (jika integrasi SES aktif)
add_action('wu_domain_ses_verified', function($domain) {
    // $domain adalah objek WP_Ultimo\Models\Domain
});
```

---

## Pencatatan (Logging) {#logging}

Tulis ke saluran log spesifik provider Anda menggunakan `wu_log_add()`:

```php
wu_log_add('domain-seller-my-registrar', "Berhasil mendaftarkan {$domain_name}", 'info');
wu_log_add('domain-seller-my-registrar', "Pendaftaran gagal: {$error}", 'error');
```

Log akan muncul di **Network Admin › Ultimate Multisite › Logs › domain-seller-my-registrar**.
