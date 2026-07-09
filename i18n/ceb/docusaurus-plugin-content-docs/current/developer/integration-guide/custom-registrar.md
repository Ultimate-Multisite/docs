---
title: Paghimo og Pasadya nga Integrasyon sa Registrar
sidebar_position: 10
_i18n_hash: ee4c4ad8a1defe5760fd09b8f173ef7d
---
# Pagtukod og Custom nga Integrasyon sa Registrar

Ang Domain Seller addon naggamit og **Integration Registry** nga pattern. Ang matag registrar usa ka PHP class nga nag-implement sa `Domain_Selling_Capability` ug nagparehistro sa kaugalingon pinaagi sa `wu_domain_seller_register_capabilities` nga action hook.

Kini nga giya nagpakita kung unsaon pagkonektar sa custom nga registrar.

## Ang interface

Ang imong class kinahanglan nga mo-implement sa `WP_Ultimo\Integrations\Capabilities\Domain_Selling_Capability` ug mo-extend sa `WP_Ultimo\Integrations\Base_Capability_Module`.

Gikinahanglan nga mga method:

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

### Opsyonal nga mga method

I-implement kini aron maablihan ang dugang nga mga feature. Ang addon makamatikod sa suporta pinaagi sa `method_exists()`:

| Method | Maablihan |
|---|---|
| `supports_whois_privacy(): bool` | Opsyon sa WHOIS privacy sa mga setting sa produkto |
| `enable_whois_privacy(string $domain_name): array` | Awtomatikong mo-enable sa privacy sa panahon sa pagparehistro |
| `get_dns_records(string $domain_name): array` | Tab sa customer alang sa pagtan-aw sa DNS |
| `add_dns_record(string $domain_name, array $record_data): array` | Makadugang ang customer og DNS records |
| `update_dns_record(string $domain, string $record_id, array $record_data): array` | Maka-edit ang customer og DNS records |
| `delete_dns_record(string $domain, string $record_id, array $data): array` | Makapanas ang customer og DNS records |
| `update_nameservers(string $domain_name, array $nameservers): array` | Pagdumala sa nameserver |
| `get_epp_code(string $domain_name): array` | Pagbalhin sa domain (paingon sa gawas) |
| `transfer_domain(string $domain, string $auth_code, array $registrant_info, array $options): array` | Pagbalhin sa domain (paingon sa sulod) |

### Kombensyon sa return value

Ang tanang method mobalik og array nga adunay labing menos usa ka `success` nga key:

```php
// Success
return ['success' => true, 'data' => [...]];

// Failure
return ['success' => false, 'message' => 'Human-readable error'];
```

---

## Pagparehistro sa imong capability

Iparehistro ang imong class gamit ang `wu_domain_seller_register_capabilities` nga action:

```php
add_action('wu_domain_seller_register_capabilities', function(\WP_Ultimo\Integrations\Integration_Registry $registry) {
    $registry->add_capability('my-registrar', new \My\Plugin\Capabilities\My_Registrar_Selling());
});
```

Ang unang argumento sa `add_capability()` mao ang **provider ID** — usa ka lowercase nga slug nga gigamit aron mailhan ang imong registrar sa settings, configuration sa produkto, ug mga log channel. Gamita ang usa ka talagsaon (pananglitan, slug sa imong kompanya).

---

## Pagdugang og credential fields sa wizard

Aron tugotan ang mga admin nga mosulod og credentials pinaagi sa setup wizard, iparehistro ang imong integration:

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

Ang credentials gitipigan isip network options gamit ang field IDs isip mga key. Kuhaa kini sa imong capability class gamit ang `wu_get_setting('my_registrar_api_key')`.

---

## Mga hook para sa mga aksyon human sa pagparehistro

Gamita kini nga mga aksyon aron mag-trigger og webhooks, provisioning, notifications, o CRM updates:

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

## Pag-log

Pagsulat ngadto sa channel sa log nga espesipiko sa imong provider gamit ang `wu_log_add()`:

```php
wu_log_add('domain-seller-my-registrar', "Registered {$domain_name} successfully", 'info');
wu_log_add('domain-seller-my-registrar', "Registration failed: {$error}", 'error');
```

Ang mga log makita ubos sa **Admin sa Network › Ultimate Multisite › Mga Log › domain-seller-my-registrar**.
