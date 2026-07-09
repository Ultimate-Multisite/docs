---
title: Mbangun Integrasi Registrar Kustom
sidebar_position: 10
_i18n_hash: ee4c4ad8a1defe5760fd09b8f173ef7d
---
# Mbangun Integrasi Registrar Kustom {#building-a-custom-registrar-integration}

Addon Domain Seller nggunakake pola **Integration Registry**. Saben registrar yaiku kelas PHP sing ngetrapake `Domain_Selling_Capability` lan ndhaptar awake dhewe liwat hook tumindak `wu_domain_seller_register_capabilities`.

Pandhuan iki nuduhake carane nyambungake registrar kustom.

## Antarmuka {#the-interface}

Kelas sampeyan kudu ngetrapake `WP_Ultimo\Integrations\Capabilities\Domain_Selling_Capability` lan ngembangake `WP_Ultimo\Integrations\Base_Capability_Module`.

Metode sing dibutuhake:

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

### Metode opsional {#optional-methods}

Terapake iki kanggo mbukak fitur tambahan. Addon ndeteksi dhukungan liwat `method_exists()`:

| Metode | Mbukak |
|---|---|
| `supports_whois_privacy(): bool` | Opsi privasi WHOIS ing setelan produk |
| `enable_whois_privacy(string $domain_name): array` | Ngaktifake privasi otomatis nalika registrasi |
| `get_dns_records(string $domain_name): array` | Tab tampilan DNS pelanggan |
| `add_dns_record(string $domain_name, array $record_data): array` | Pelanggan bisa nambah cathetan DNS |
| `update_dns_record(string $domain, string $record_id, array $record_data): array` | Pelanggan bisa nyunting cathetan DNS |
| `delete_dns_record(string $domain, string $record_id, array $data): array` | Pelanggan bisa mbusak cathetan DNS |
| `update_nameservers(string $domain_name, array $nameservers): array` | Pangaturan nameserver |
| `get_epp_code(string $domain_name): array` | Transfer domain (metu) |
| `transfer_domain(string $domain, string $auth_code, array $registrant_info, array $options): array` | Transfer domain (mlebu) |

### Konvensi nilai bali {#return-value-convention}

Kabeh metode mbalekake array kanthi paling ora ana kunci `success`:

```php
// Success
return ['success' => true, 'data' => [...]];

// Failure
return ['success' => false, 'message' => 'Human-readable error'];
```

---

## Ndhaptar capability sampeyan {#registering-your-capability}

Dhaptar kelas sampeyan nganggo tumindak `wu_domain_seller_register_capabilities`:

```php
add_action('wu_domain_seller_register_capabilities', function(\WP_Ultimo\Integrations\Integration_Registry $registry) {
    $registry->add_capability('my-registrar', new \My\Plugin\Capabilities\My_Registrar_Selling());
});
```

Argumen kapisan kanggo `add_capability()` yaiku **provider ID** — slug huruf cilik sing digunakake kanggo ngenali registrar sampeyan ing setelan, konfigurasi produk, lan saluran log. Gunakake sing unik (umpamane, slug perusahaan sampeyan).

---

## Nambah kolom kredensial menyang wizard {#adding-credential-fields-to-the-wizard}

Supaya admin bisa ngetik kredensial liwat wizard persiyapan, dhaptar integrasi sampeyan:

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

Kredensial disimpen minangka opsi jaringan nganggo ID kolom minangka kunci. Jupuk ing kelas capability sampeyan nganggo `wu_get_setting('my_registrar_api_key')`.

---

## Hook kanggo tumindak sawise registrasi {#hooks-for-post-registration-actions}

Gunakake tumindak iki kanggo micu webhook, provisioning, kabar, utawa nganyari CRM:

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

## Panyathetan Log {#logging}

Tulis menyang saluran log khusus panyedhiya sampeyan nganggo `wu_log_add()`:

```php
wu_log_add('domain-seller-my-registrar', "Registered {$domain_name} successfully", 'info');
wu_log_add('domain-seller-my-registrar', "Registration failed: {$error}", 'error');
```

Log katon ing ngisor **Admin Jaringan › Ultimate Multisite › Log › domain-seller-my-registrar**.
