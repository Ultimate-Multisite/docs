---
title: ਕਸਟਮ ਰਜਿਸਟਰਾਰ ਇੰਟੀਗ੍ਰੇਸ਼ਨ ਬਣਾਉਣਾ
sidebar_position: 10
_i18n_hash: ee4c4ad8a1defe5760fd09b8f173ef7d
---
# Custom Registrar Integration ਬਣਾਉਣਾ

Domain Seller addon ਇੱਕ **Integration Registry** pattern ਦੀ ਵਰਤੋਂ ਕਰਦਾ ਹੈ। ਹਰ ਰਜਿਸਟਰਾਰ ਇੱਕ PHP class ਹੁੰਦਾ ਹੈ ਜੋ `Domain_Selling_Capability` ਨੂੰ implement ਕਰਦਾ ਹੈ ਅਤੇ `wu_domain_seller_register_capabilities` action hook ਰਾਹੀਂ ਆਪਣੇ ਆਪ ਨੂੰ register ਕਰਦਾ ਹੈ।

ਇਹ ਗਾਈਡ ਦੱਸਦੀ ਹੈ ਕਿ ਇੱਕ custom registrar ਨੂੰ ਕਿਵੇਂ ਜੋੜਨਾ ਹੈ।

## The interface

ਤੁਹਾਡਾ class `WP_Ultimo\Integrations\Capabilities\Domain_Selling_Capability` ਨੂੰ implement ਕਰਨਾ ਚਾਹੀਦਾ ਹੈ ਅਤੇ `WP_Ultimo\Integrations\Base_Capability_Module` ਨੂੰ extend ਕਰਨਾ ਚਾਹੀਦਾ ਹੈ।

Required methods:

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

### Optional methods

ਇਹਨਾਂ ਨੂੰ implement ਕਰਕੇ ਤੁਸੀਂ ਹੋਰ features unlock ਕਰ ਸਕਦੇ ਹੋ। addon `method_exists()` ਰਾਹੀਂ support detect ਕਰਦਾ ਹੈ:

| Method | Unlocks |
|---|---|
| `supports_whois_privacy(): bool` | Product settings ਵਿੱਚ WHOIS privacy option |
| `enable_whois_privacy(string $domain_name): array` | Registration 'ਤੇ auto-enable privacy |
| `get_dns_records(string $domain_name): array` | Customer DNS view tab |
| `add_dns_record(string $domain_name, array $record_data): array` | Customer DNS records add ਕਰ ਸਕਦਾ ਹੈ |
| `update_dns_record(string $domain, string $record_id, array $record_data): array` | Customer DNS records edit ਕਰ ਸਕਦਾ ਹੈ |
| `delete_dns_record(string $domain, string $record_id, array $data): array` | Customer DNS records delete ਕਰ ਸਕਦਾ ਹੈ |
| `update_nameservers(string $domain_name, array $nameservers): array` | Nameserver management |
| `get_epp_code(string $domain_name): array` | Domain transfer (outgoing) |
| `transfer_domain(string $domain, string $auth_code, array $registrant_info, array $options): array` | Domain transfer (incoming) |

### Return value convention

ਸਾਰੇ methods ਇੱਕ array return ਕਰਦੇ ਹਨ ਜਿਸ ਵਿੱਚ ਘੱਟੋ-ਘੱਟ ਇੱਕ `success` key ਹੋਵੇ:

```php
// Success
return ['success' => true, 'data' => [...]];

// Failure
return ['success' => false, 'message' => 'Human-readable error'];
```

---

## Registering your capability

ਆਪਣੇ class ਨੂੰ `wu_domain_seller_register_capabilities` action ਦੀ ਵਰਤੋਂ ਕਰਕੇ register ਕਰੋ:

```php
add_action('wu_domain_seller_register_capabilities', function(\WP_Ultimo\Integrations\Integration_Registry $registry) {
    $registry->add_capability('my-registrar', new \My\Plugin\Capabilities\My_Registrar_Selling());
});
```

`add_capability()` ਦਾ ਪਹਿਲਾ argument **provider ID** ਹੁੰਦਾ ਹੈ — ਇਹ ਇੱਕ lowercase slug ਹੈ ਜਿਸਦੀ ਵਰਤੋਂ settings, product configuration, ਅਤੇ log channels ਵਿੱਚ ਆਪਣੇ registrar ਨੂੰ identify ਕਰਨ ਲਈ ਕੀਤੀ ਜਾਂਦੀ ਹੈ। ਕੁਝ unique ਵਰਤੋ (ਜਿਵੇਂ ਕਿ ਤੁਹਾਡੀ ਕੰਪਨੀ ਦਾ slug)।

---

## Wizard ਵਿੱਚ credential fields ਜੋੜਨਾ

Admins ਨੂੰ setup wizard ਰਾਹੀਂ credentials enter ਕਰਨ ਦੇਣ ਲਈ, ਆਪਣੀ integration register ਕਰੋ:

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

Credentials ਨੂੰ field IDs ਨੂੰ keys ਵਜੋਂ network options ਵਜੋਂ store ਕੀਤਾ ਜਾਂਦਾ ਹੈ। ਇਹਨਾਂ ਨੂੰ ਆਪਣੀ capability class ਵਿੱਚ `wu_get_setting('my_registrar_api_key')` ਨਾਲ retrieve ਕਰੋ।

---

## Post-registration actions ਲਈ Hooks

webhooks, provisioning, notifications, ਜਾਂ CRM updates trigger ਕਰਨ ਲਈ ਇਨ੍ਹਾਂ actions ਦੀ ਵਰਤੋਂ ਕਰੋ:

```php
// ਸਫਲ domain registration ਤੋਂ ਬਾਅਦ
add_action('wu_domain_registration_completed', function($payment, $registration_data, $result) {
    // $registration_data: domain_name, provider_id, years, expiry_date, customer_id
    // $result: raw registrar response
    my_crm_update_domain($registration_data['domain_name'], $registration_data['customer_id']);
}, 10, 3);

// registration failure ਤੋਂ ਬਾਅਦ
add_action('wu_domain_registration_failed', function($payment, $registration_data, $error_message) {
    my_alert_team("Domain registration failed: {$registration_data['domain_name']} — {$error_message}");
}, 10, 3);

// ਸਫਲ renewal ਤੋਂ ਬਾਅਦ
add_action('wu_domain_renewal_completed', function($payment, $renewal_data, $result) {
    // ਆਪਣੇ billing system ਨੂੰ update ਕਰੋ, receipt ਭੇਜੋ, ਆਦਿ।
}, 10, 3);

// renewal failure ਤੋਂ ਬਾਅਦ
add_action('wu_domain_renewal_failed', function($payment, $renewal_data, $error_message) {
    // Alert, retry logic, ਆਦਿ।
}, 10, 3);

// domain transfer complete ਹੋਣ ਤੋਂ ਬਾਅਦ
add_action('wu_domain_transfer_completed', function($domain, $transfer_data) {
    // $domain ਇੱਕ WP_Ultimo\Models\Domain object ਹੈ
}, 10, 2);

// SES DKIM verification ਤੋਂ ਬਾਅਦ (ਜੇ SES integration active ਹੈ)
add_action('wu_domain_ses_verified', function($domain) {
    // $domain ਇੱਕ WP_Ultimo\Models\Domain object ਹੈ
});
```

---

## Logging

`wu_log_add()` ਦੀ ਵਰਤੋਂ ਕਰਕੇ ਆਪਣੇ provider-specific log channel ਵਿੱਚ ਲਿਖੋ:

```php
wu_log_add('domain-seller-my-registrar', "Registered {$domain_name} successfully", 'info');
wu_log_add('domain-seller-my-registrar', "Registration failed: {$error}", 'error');
```

Logs **Network Admin › Ultimate Multisite › Logs › domain-seller-my-registrar** ਹੇਠਾਂ ਦਿਖਾਈ ਦੇਣਗੇ।
