---
title: Kev tsim kev txuas nrog tus registrar raws li koj xav tau
sidebar_position: 10
_i18n_hash: ee4c4ad8a1defe5760fd09b8f173ef7d
---
# Tsim ib qho Custom Registrar Integration

Lub Domain Seller addon siv tus qauv **Integration Registry**. Txhua tus registrar yog ib chav kawm PHP uas siv `Domain_Selling_Capability` thiab sau npe nws tus kheej dhau ntawm `wu_domain_seller_register_capabilities` action hook.

Phau ntawv qhia no qhia yuav txuas ib tus registrar custom li cas.

## Lub interface

Koj chav kawm yuav tsum siv `WP_Ultimo\Integrations\Capabilities\Domain_Selling_Capability` thiab extend `WP_Ultimo\Integrations\Base_Capability_Module`.

Cov methods uas yuav tsum muaj:

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

### Cov methods xaiv tau

Siv cov no kom qhib tau cov features ntxiv. Lub addon kuaj kev txhawb nqa dhau ntawm `method_exists()`:

| Method | Qhib tau |
|---|---|
| `supports_whois_privacy(): bool` | WHOIS privacy option hauv product settings |
| `enable_whois_privacy(string $domain_name): array` | Qhib privacy cia li ua thaum registration |
| `get_dns_records(string $domain_name): array` | Customer DNS view tab |
| `add_dns_record(string $domain_name, array $record_data): array` | Customer tuaj yeem ntxiv DNS records |
| `update_dns_record(string $domain, string $record_id, array $record_data): array` | Customer tuaj yeem kho DNS records |
| `delete_dns_record(string $domain, string $record_id, array $data): array` | Customer tuaj yeem rho tawm DNS records |
| `update_nameservers(string $domain_name, array $nameservers): array` | Kev tswj nameserver |
| `get_epp_code(string $domain_name): array` | Domain transfer (tawm mus) |
| `transfer_domain(string $domain, string $auth_code, array $registrant_info, array $options): array` | Domain transfer (nkag los) |

### Kev cai rau return value

Txhua method rov qab los ua ib array uas muaj yam tsawg kawg nkaus yog tus key `success`:

```php
// Success
return ['success' => true, 'data' => [...]];

// Failure
return ['success' => false, 'message' => 'Human-readable error'];
```

---

## Sau npe koj capability

Sau npe koj chav kawm siv `wu_domain_seller_register_capabilities` action:

```php
add_action('wu_domain_seller_register_capabilities', function(\WP_Ultimo\Integrations\Integration_Registry $registry) {
    $registry->add_capability('my-registrar', new \My\Plugin\Capabilities\My_Registrar_Selling());
});
```

Thawj argument rau `add_capability()` yog **provider ID** — ib slug ntawv me uas siv los txheeb xyuas koj tus registrar hauv settings, product configuration, thiab log channels. Siv ib yam dab tsi tshwj xeeb (piv txwv li, koj company slug).

---

## Ntxiv credential fields rau hauv wizard

Kom admins nkag tau credentials dhau ntawm setup wizard, sau npe koj integration:

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

Credentials raug khaws cia ua network options siv field IDs ua keys. Mus muab lawv hauv koj chav kawm capability nrog `wu_get_setting('my_registrar_api_key')`.

---

## Hooks rau cov actions tom qab registration

Siv cov actions no los khiav webhooks, provisioning, notifications, lossis CRM updates:

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

## Kev kaw log

Sau rau hauv koj tus provider-specific log channel siv `wu_log_add()`:

```php
wu_log_add('domain-seller-my-registrar', "Registered {$domain_name} successfully", 'info');
wu_log_add('domain-seller-my-registrar', "Registration failed: {$error}", 'error');
```

Cov log tshwm nyob hauv **Network Admin › Ultimate Multisite › Cov log › domain-seller-my-registrar**.
