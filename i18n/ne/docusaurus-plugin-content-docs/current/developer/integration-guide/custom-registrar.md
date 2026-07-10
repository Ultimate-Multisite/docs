---
title: Custom Registrar एकीकरण निर्माण गर्दै
sidebar_position: 10
_i18n_hash: ee4c4ad8a1defe5760fd09b8f173ef7d
---
# अनुकूल Registrar Integration निर्माण गर्दै {#building-a-custom-registrar-integration}

Domain Seller addon ले **Integration Registry** ढाँचा प्रयोग गर्छ। प्रत्येक registrar एउटा PHP class हो जसले `Domain_Selling_Capability` implement गर्छ र `wu_domain_seller_register_capabilities` action hook मार्फत आफूलाई register गर्छ।

यो मार्गदर्शिकाले अनुकूल registrar कसरी जोड्ने भनेर देखाउँछ।

## Interface {#the-interface}

तपाईंको class ले `WP_Ultimo\Integrations\Capabilities\Domain_Selling_Capability` implement गर्नुपर्छ र `WP_Ultimo\Integrations\Base_Capability_Module` extend गर्नुपर्छ।

आवश्यक methods:

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

### वैकल्पिक methods {#optional-methods}

थप सुविधाहरू खोल्न यी implement गर्नुहोस्। addon ले `method_exists()` मार्फत support पत्ता लगाउँछ:

| Method | खोल्ने सुविधा |
|---|---|
| `supports_whois_privacy(): bool` | product settings मा WHOIS privacy विकल्प |
| `enable_whois_privacy(string $domain_name): array` | registration गर्दा privacy स्वतः enable गर्छ |
| `get_dns_records(string $domain_name): array` | ग्राहक DNS view tab |
| `add_dns_record(string $domain_name, array $record_data): array` | ग्राहकले DNS records थप्न सक्छ |
| `update_dns_record(string $domain, string $record_id, array $record_data): array` | ग्राहकले DNS records सम्पादन गर्न सक्छ |
| `delete_dns_record(string $domain, string $record_id, array $data): array` | ग्राहकले DNS records मेटाउन सक्छ |
| `update_nameservers(string $domain_name, array $nameservers): array` | Nameserver व्यवस्थापन |
| `get_epp_code(string $domain_name): array` | Domain transfer (बाहिर जाने) |
| `transfer_domain(string $domain, string $auth_code, array $registrant_info, array $options): array` | Domain transfer (भित्र आउने) |

### Return value convention {#return-value-convention}

सबै methods ले कम्तीमा `success` key भएको array return गर्छन्:

```php
// Success
return ['success' => true, 'data' => [...]];

// Failure
return ['success' => false, 'message' => 'Human-readable error'];
```

---

## आफ्नो capability register गर्दै {#registering-your-capability}

`wu_domain_seller_register_capabilities` action प्रयोग गरेर आफ्नो class register गर्नुहोस्:

```php
add_action('wu_domain_seller_register_capabilities', function(\WP_Ultimo\Integrations\Integration_Registry $registry) {
    $registry->add_capability('my-registrar', new \My\Plugin\Capabilities\My_Registrar_Selling());
});
```

`add_capability()` को पहिलो argument **provider ID** हो — settings, product configuration, र log channels मा तपाईंको registrar पहिचान गर्न प्रयोग हुने lowercase slug। केही अद्वितीय प्रयोग गर्नुहोस् (जस्तै, तपाईंको company slug)।

---

## Wizard मा credential fields थप्दै {#adding-credential-fields-to-the-wizard}

admins लाई setup wizard मार्फत credentials प्रविष्ट गर्न दिन, आफ्नो integration register गर्नुहोस्:

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

Credentials field IDs लाई keys का रूपमा प्रयोग गरेर network options को रूपमा भण्डारण गरिन्छन्। आफ्नो capability class मा तिनलाई `wu_get_setting('my_registrar_api_key')` बाट retrieve गर्नुहोस्।

---

## Registration-पछिका actions का लागि hooks {#hooks-for-post-registration-actions}

webhooks, provisioning, notifications, वा CRM updates trigger गर्न यी actions प्रयोग गर्नुहोस्:

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

## लगिङ {#logging}

`wu_log_add()` प्रयोग गरेर आफ्नो प्रदायक-विशिष्ट लग च्यानलमा लेख्नुहोस्:

```php
wu_log_add('domain-seller-my-registrar', "Registered {$domain_name} successfully", 'info');
wu_log_add('domain-seller-my-registrar', "Registration failed: {$error}", 'error');
```

लगहरू **नेटवर्क एड्मिन › Ultimate Multisite › लगहरू › domain-seller-my-registrar** अन्तर्गत देखिन्छन्।
