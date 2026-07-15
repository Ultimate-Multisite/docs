---
title: Membina Integrasi Pendaftar Tersuai
sidebar_position: 10
_i18n_hash: ee4c4ad8a1defe5760fd09b8f173ef7d
---
# Membina Integrasi Registrar Tersuai

Addon Domain Seller menggunakan corak **Integration Registry**. Setiap registrar adalah kelas PHP yang melaksanakan `Domain_Selling_Capability` dan mendaftarkan dirinya melalui *action hook* `wu_domain_seller_register_capabilities`.

Panduan ini menunjukkan cara menyambungkan registrar tersuai anda.

## Antaramuka (The interface) {#the-interface}

Kelas anda mesti melaksanakan `WP_Ultimo\Integrations\Capabilities\Domain_Selling_Capability` dan memperluaskan (extend) `WP_Ultimo\Integrations\Base_Capability_Module`.

Kaedah yang diperlukan:

```php
namespace My\Plugin\Capabilities;

use WP_Ultimo\Integrations\Base_Capability_Module;
use WP_Ultimo\Integrations\Capabilities\Domain_Selling_Capability;

class My_Registrar_Selling extends Base_Capability_Module implements Domain_Selling_Capability {

    // --- Kaedah identiti yang diperlukan (dari Base_Capability_Module) ---

    public function get_capability_id(): string {
        return 'domain-selling';  // sentiasa 'domain-selling'
    }

    public function get_title(): string {
        return __('Domain Selling', 'my-plugin');
    }

    public function get_explainer_lines(): array {
        return [
            'will'     => [__('Enable domain registration via My Registrar.', 'my-plugin')],
            'will_not' => [],
        ];
    }

    // --- Kaedah teras yang diperlukan (dari Domain_Selling_Capability) ---

    /** Ambil semua TLD yang tersedia dan harga borong. */
    public function sync_tlds(): array { ... }

    /** Semak ketersediaan $domain_name merentasi $tlds. */
    public function search_domains(string $domain_name, array $tlds = []): array { ... }

    /** Dapatkan harga borong untuk TLD bagi N tahun. */
    public function get_domain_pricing(string $tld, int $years = 1): array { ... }

    /** Daftar domain. Pulangkan ['success' => true, 'expiry_date' => '...'] jika berjaya. */
    public function register_domain(string $domain_name, array $registrant_info, int $years = 1): array { ... }

    /** Baharu domain untuk N tahun. */
    public function renew_domain(string $domain_name, int $years = 1): array { ... }

    /** Dapatkan status pendaftaran, tarikh luput, nameservers. */
    public function get_domain_info(string $domain_name): array { ... }

    /** Uji kelayakan API dan sambungan. */
    public function test_connection(): array { ... }
}
```

### Kaedah Pilihan (Optional methods) {#optional-methods}

Laksanakan kaedah ini untuk membuka ciri tambahan. Addon mengesan sokongan melalui `method_exists()`:

| Kaedah | Membuka |
|---|---|
| `supports_whois_privacy(): bool` | Pilihan privasi WHOIS dalam tetapan produk |
| `enable_whois_privacy(string $domain_name): array` | Mengaktifkan privasi secara automatik semasa pendaftaran |
| `get_dns_records(string $domain_name): array` | Tab paparan DNS pelanggan |
| `add_dns_record(string $domain_name, array $record_data): array` | Pelanggan boleh menambah rekod DNS |
| `update_dns_record(string $domain, string $record_id, array $record_data): array` | Pelanggan boleh menyunting rekod DNS |
| `delete_dns_record(string $domain, string $record_id, array $data): array` | Pelanggan boleh memadam rekod DNS |
| `update_nameservers(string $domain_name, array $nameservers): array` | Pengurusan nameserver |
| `get_epp_code(string $domain_name): array` | Pemindahan domain (keluar) |
| `transfer_domain(string $domain, string $auth_code, array $registrant_info, array $options): array` | Pemindahan domain (masuk) |

### Konvensyen Nilai Pulangan (Return value convention) {#return-value-convention}

Semua kaedah memulangkan array dengan sekurang-kurangnya kunci `success`:

```php
// Berjaya
return ['success' => true, 'data' => [...]];

// Gagal
return ['success' => false, 'message' => 'Ralat yang boleh dibaca oleh manusia'];
```

---

## Mendaftarkan keupayaan anda (Registering your capability) {#registering-your-capability}

Daftarkan kelas anda menggunakan *action* `wu_domain_seller_register_capabilities`:

```php
add_action('wu_domain_seller_register_capabilities', function(\WP_Ultimo\Integrations\Integration_Registry $registry) {
    $registry->add_capability('my-registrar', new \My\Plugin\Capabilities\My_Registrar_Selling());
});
```

Hujah pertama kepada `add_capability()` ialah **provider ID** — slug huruf kecil yang digunakan untuk mengenal pasti registrar anda dalam tetapan, konfigurasi produk, dan saluran log. Gunakan sesuatu yang unik (contohnya, slug syarikat anda).

---

## Menambah medan kelayakan ke wizard (Adding credential fields to the wizard) {#adding-credential-fields-to-the-wizard}

Untuk membenarkan admin memasukkan kelayakan melalui wizard persediaan, daftarkan integrasi anda:

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

Kelayakan disimpan sebagai *network options* menggunakan ID medan sebagai kunci. Dapatkan ia dalam kelas keupayaan anda dengan `wu_get_setting('my_registrar_api_key')`.

---

## Hooks untuk tindakan pasca-pendaftaran (Hooks for post-registration actions) {#hooks-for-post-registration-actions}

Gunakan *action* ini untuk mencetuskan *webhook*, penyediaan (provisioning), pemberitahuan, atau kemas kini CRM:

```php
// Selepas pendaftaran domain berjaya
add_action('wu_domain_registration_completed', function($payment, $registration_data, $result) {
    // $registration_data: domain_name, provider_id, years, expiry_date, customer_id
    // $result: respons registrar mentah
    my_crm_update_domain($registration_data['domain_name'], $registration_data['customer_id']);
}, 10, 3);

// Selepas kegagalan pendaftaran
add_action('wu_domain_registration_failed', function($payment, $registration_data, $error_message) {
    my_alert_team("Domain registration failed: {$registration_data['domain_name']} — {$error_message}");
}, 10, 3);

// Selepas pembaharuan berjaya
add_action('wu_domain_renewal_completed', function($payment, $renewal_data, $result) {
    // Kemas kini sistem bil anda, hantar resit, dsb.
}, 10, 3);

// Selepas kegagalan pembaharuan
add_action('wu_domain_renewal_failed', function($payment, $renewal_data, $error_message) {
    // Beri amaran, logik cuba semula, dsb.
}, 10, 3);

// Selepas pemindahan domain selesai
add_action('wu_domain_transfer_completed', function($domain, $transfer_data) {
    // $domain ialah objek WP_Ultimo\Models\Domain
}, 10, 2);

// Selepas pengesahan SES DKIM (jika integrasi SES aktif)
add_action('wu_domain_ses_verified', function($domain) {
    // $domain ialah objek WP_Ultimo\Models\Domain
});
```

---

## Logging {#logging}

Tulis ke saluran log khusus provider anda menggunakan `wu_log_add()`:

```php
wu_log_add('domain-seller-my-registrar', "Registered {$domain_name} successfully", 'info');
wu_log_add('domain-seller-my-registrar', "Registration failed: {$error}", 'error');
```

Log muncul di bawah **Network Admin › Ultimate Multisite › Logs › domain-seller-my-registrar**.
