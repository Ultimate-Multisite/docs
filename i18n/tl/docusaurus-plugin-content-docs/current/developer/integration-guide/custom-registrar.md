---
title: Pagbuo ng Pasadyang Integrasyon ng Registrar
sidebar_position: 10
_i18n_hash: ee4c4ad8a1defe5760fd09b8f173ef7d
---
# Pagbuo ng Custom na Integrasyon ng Registrar

Gumagamit ang Domain Seller addon ng pattern na **Integration Registry**. Ang bawat registrar ay isang PHP class na nagpapatupad ng `Domain_Selling_Capability` at nirerehistro ang sarili nito sa pamamagitan ng `wu_domain_seller_register_capabilities` action hook.

Ipinapakita ng gabay na ito kung paano ikonekta ang isang custom na registrar.

## Ang interface {#the-interface}

Dapat ipatupad ng iyong class ang `WP_Ultimo\Integrations\Capabilities\Domain_Selling_Capability` at palawigin ang `WP_Ultimo\Integrations\Base_Capability_Module`.

Mga kinakailangang method:

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

### Opsyonal na mga method {#optional-methods}

Ipatupad ang mga ito para ma-unlock ang karagdagang mga feature. Tinutukoy ng addon ang suporta sa pamamagitan ng `method_exists()`:

| Method | Ina-unlock |
|---|---|
| `supports_whois_privacy(): bool` | Opsyon sa WHOIS privacy sa mga setting ng produkto |
| `enable_whois_privacy(string $domain_name): array` | Awtomatikong pinapagana ang privacy sa pagpaparehistro |
| `get_dns_records(string $domain_name): array` | Tab ng view ng DNS ng customer |
| `add_dns_record(string $domain_name, array $record_data): array` | Maaaring magdagdag ang customer ng mga DNS record |
| `update_dns_record(string $domain, string $record_id, array $record_data): array` | Maaaring i-edit ng customer ang mga DNS record |
| `delete_dns_record(string $domain, string $record_id, array $data): array` | Maaaring magtanggal ang customer ng mga DNS record |
| `update_nameservers(string $domain_name, array $nameservers): array` | Pamamahala ng nameserver |
| `get_epp_code(string $domain_name): array` | Paglipat ng domain (palabas) |
| `transfer_domain(string $domain, string $auth_code, array $registrant_info, array $options): array` | Paglipat ng domain (papasok) |

### Kumbensyon sa return value {#return-value-convention}

Ang lahat ng method ay nagbabalik ng array na may hindi bababa sa isang `success` key:

```php
// Success
return ['success' => true, 'data' => [...]];

// Failure
return ['success' => false, 'message' => 'Human-readable error'];
```

---

## Pagrerehistro ng iyong capability {#registering-your-capability}

Irehistro ang iyong class gamit ang `wu_domain_seller_register_capabilities` action:

```php
add_action('wu_domain_seller_register_capabilities', function(\WP_Ultimo\Integrations\Integration_Registry $registry) {
    $registry->add_capability('my-registrar', new \My\Plugin\Capabilities\My_Registrar_Selling());
});
```

Ang unang argument sa `add_capability()` ay ang **provider ID** — isang lowercase na slug na ginagamit para tukuyin ang iyong registrar sa mga setting, configuration ng produkto, at mga log channel. Gumamit ng natatangi (hal., slug ng iyong kumpanya).

---

## Pagdaragdag ng mga field ng credential sa wizard {#adding-credential-fields-to-the-wizard}

Para payagan ang mga admin na maglagay ng mga credential sa pamamagitan ng setup wizard, irehistro ang iyong integrasyon:

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

Iniimbak ang mga credential bilang mga network option gamit ang mga field ID bilang mga key. Kunin ang mga ito sa iyong capability class gamit ang `wu_get_setting('my_registrar_api_key')`.

---

## Mga hook para sa mga aksyon pagkatapos ng pagpaparehistro {#hooks-for-post-registration-actions}

Gamitin ang mga aksyong ito para mag-trigger ng mga webhook, provisioning, notification, o update sa CRM:

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

## Pag-log {#logging}

Sumulat sa log channel na partikular sa iyong provider gamit ang `wu_log_add()`:

```php
wu_log_add('domain-seller-my-registrar', "Registered {$domain_name} successfully", 'info');
wu_log_add('domain-seller-my-registrar', "Registration failed: {$error}", 'error');
```

Lumalabas ang mga log sa ilalim ng **Network Admin › Ultimate Multisite › Mga Log › domain-seller-my-registrar**.
