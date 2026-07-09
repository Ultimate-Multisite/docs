---
title: Ngawangun Integrasi Registrar Kustom
sidebar_position: 10
_i18n_hash: ee4c4ad8a1defe5760fd09b8f173ef7d
---
# Ngawangun Integrasi Registrar Kustom

Addon Domain Seller ngagunakeun pola **Integration Registry**. Unggal registrar nyaéta class PHP anu ngalaksanakeun `Domain_Selling_Capability` sarta ngadaptarkeun dirina ngaliwatan hook aksi `wu_domain_seller_register_capabilities`.

Pituduh ieu nunjukkeun kumaha nyambungkeun registrar kustom.

## Interface

Class anjeun kudu ngalaksanakeun `WP_Ultimo\Integrations\Capabilities\Domain_Selling_Capability` sarta ngalegaan `WP_Ultimo\Integrations\Base_Capability_Module`.

Métode anu diperlukeun:

```php
namespace My\Plugin\Capabilities;

use WP_Ultimo\Integrations\Base_Capability_Module;
use WP_Ultimo\Integrations\Capabilities\Domain_Selling_Capability;

class My_Registrar_Selling extends Base_Capability_Module implements Domain_Selling_Capability {

    // --- Required identity methods (from Base_Capability_Module) ---

    public function get_capability_id(): string {
        return 'domain-selling';  // always 'domain-selling'
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

    // --- Core required methods (from Domain_Selling_Capability) ---

    /** Pull all available TLDs and wholesale pricing. */
    public function sync_tlds(): array { ... }

    /** Check availability of $domain_name across $tlds. */
    public function search_domains(string $domain_name, array $tlds = []): array { ... }

    /** Get wholesale price for a TLD for N years. */
    public function get_domain_pricing(string $tld, int $years = 1): array { ... }

    /** Register a domain. Returns ['success' => true, 'expiry_date' => '...'] on success. */
    public function register_domain(string $domain_name, array $registrant_info, int $years = 1): array { ... }

    /** Renew a domain for N years. */
    public function renew_domain(string $domain_name, int $years = 1): array { ... }

    /** Get registration status, expiry date, nameservers. */
    public function get_domain_info(string $domain_name): array { ... }

    /** Test API credentials and connectivity. */
    public function test_connection(): array { ... }
}
```

### Métode opsional

Laksanakeun ieu pikeun muka fitur tambahan. Addon ngadeteksi dukungan ngaliwatan `method_exists()`:

| Method | Anu dibuka |
|---|---|
| `supports_whois_privacy(): bool` | Pilihan privasi WHOIS dina setélan produk |
| `enable_whois_privacy(string $domain_name): array` | Otomatis ngaktipkeun privasi nalika pendaptaran |
| `get_dns_records(string $domain_name): array` | Tab tampilan DNS palanggan |
| `add_dns_record(string $domain_name, array $record_data): array` | Palanggan bisa nambah rékaman DNS |
| `update_dns_record(string $domain, string $record_id, array $record_data): array` | Palanggan bisa ngédit rékaman DNS |
| `delete_dns_record(string $domain, string $record_id, array $data): array` | Palanggan bisa mupus rékaman DNS |
| `update_nameservers(string $domain_name, array $nameservers): array` | Pangaturan nameserver |
| `get_epp_code(string $domain_name): array` | Mindahkeun domain (kaluar) |
| `transfer_domain(string $domain, string $auth_code, array $registrant_info, array $options): array` | Mindahkeun domain (asup) |

### Konvénsi nilai balik

Sadaya métode mulangkeun array kalayan sahenteuna key `success`:

```php
// Success
return ['success' => true, 'data' => [...]];

// Failure
return ['success' => false, 'message' => 'Human-readable error'];
```

---

## Ngadaptarkeun capability anjeun

Daptarkeun class anjeun maké aksi `wu_domain_seller_register_capabilities`:

```php
add_action('wu_domain_seller_register_capabilities', function(\WP_Ultimo\Integrations\Integration_Registry $registry) {
    $registry->add_capability('my-registrar', new \My\Plugin\Capabilities\My_Registrar_Selling());
});
```

Argumén kahiji pikeun `add_capability()` nyaéta **ID panyadia** — slug hurup leutik anu dipaké pikeun ngaidentipikasi registrar anjeun dina setélan, konfigurasi produk, jeung saluran log. Paké anu unik (contona, slug pausahaan anjeun).

---

## Nambahkeun field kredénsial kana wizard

Pikeun ngamungkinkeun admin ngasupkeun kredénsial ngaliwatan wizard setup, daptarkeun integrasi anjeun:

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

Kredénsial disimpen minangka pilihan jaringan maké ID field salaku key. Candak éta dina class capability anjeun ku `wu_get_setting('my_registrar_api_key')`.

---

## Hooks pikeun aksi sanggeus pendaptaran

Paké aksi ieu pikeun memicu webhooks, provisioning, béwara, atawa apdet CRM:

```php
// After successful domain registration
add_action('wu_domain_registration_completed', function($payment, $registration_data, $result) {
    // $registration_data: domain_name, provider_id, years, expiry_date, customer_id
    // $result: raw registrar response
    my_crm_update_domain($registration_data['domain_name'], $registration_data['customer_id']);
}, 10, 3);

// After registration failure
add_action('wu_domain_registration_failed', function($payment, $registration_data, $error_message) {
    my_alert_team("Domain registration failed: {$registration_data['domain_name']} — {$error_message}");
}, 10, 3);

// After successful renewal
add_action('wu_domain_renewal_completed', function($payment, $renewal_data, $result) {
    // Update your billing system, send a receipt, etc.
}, 10, 3);

// After renewal failure
add_action('wu_domain_renewal_failed', function($payment, $renewal_data, $error_message) {
    // Alert, retry logic, etc.
}, 10, 3);

// After domain transfer completes
add_action('wu_domain_transfer_completed', function($domain, $transfer_data) {
    // $domain is a WP_Ultimo\Models\Domain object
}, 10, 2);

// After SES DKIM verification (if SES integration is active)
add_action('wu_domain_ses_verified', function($domain) {
    // $domain is a WP_Ultimo\Models\Domain object
});
```

---

## Ngarekam Log

Tulis kana kanal log husus panyadia anjeun nganggo `wu_log_add()`:

```php
wu_log_add('domain-seller-my-registrar', "Registered {$domain_name} successfully", 'info');
wu_log_add('domain-seller-my-registrar', "Registration failed: {$error}", 'error');
```

Log nembongan dina **Admin Jaringan › Ultimate Multisite › Log › domain-seller-my-registrar**.
