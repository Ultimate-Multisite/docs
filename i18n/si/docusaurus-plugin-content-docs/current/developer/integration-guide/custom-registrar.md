---
title: අභිරුචි ලියාපදිංචිකරු අනුකලනයක් ගොඩනැගීම
sidebar_position: 10
_i18n_hash: ee4c4ad8a1defe5760fd09b8f173ef7d
---
# අභිරුචි Registrar අනුකලනයක් තැනීම {#building-a-custom-registrar-integration}

Domain Seller ඇඩෝනය **Integration Registry** රටාවක් භාවිතා කරයි. එක් එක් registrar එක `Domain_Selling_Capability` ක්‍රියාත්මක කරන PHP class එකක් වන අතර, `wu_domain_seller_register_capabilities` action hook හරහා තමන්ම ලියාපදිංචි කරගනී.

අභිරුචි registrar එකක් සම්බන්ධ කරන ආකාරය මෙම මාර්ගෝපදේශය පෙන්වයි.

## අතුරුමුහුණත {#the-interface}

ඔබගේ class එක `WP_Ultimo\Integrations\Capabilities\Domain_Selling_Capability` ක්‍රියාත්මක කර `WP_Ultimo\Integrations\Base_Capability_Module` දිගු කළ යුතුය.

අවශ්‍ය methods:

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

### විකල්ප methods {#optional-methods}

අමතර විශේෂාංග සක්‍රීය කිරීමට මේවා ක්‍රියාත්මක කරන්න. ඇඩෝනය `method_exists()` හරහා සහාය හඳුනාගනී:

| Method | සක්‍රීය කරන දේ |
|---|---|
| `supports_whois_privacy(): bool` | නිෂ්පාදන සැකසුම් තුළ WHOIS පෞද්ගලිකත්ව විකල්පය |
| `enable_whois_privacy(string $domain_name): array` | ලියාපදිංචියේදී පෞද්ගලිකත්වය ස්වයංක්‍රීයව සක්‍රීය කරයි |
| `get_dns_records(string $domain_name): array` | පාරිභෝගික DNS දසුන් ටැබය |
| `add_dns_record(string $domain_name, array $record_data): array` | පාරිභෝගිකයාට DNS records එක් කළ හැක |
| `update_dns_record(string $domain, string $record_id, array $record_data): array` | පාරිභෝගිකයාට DNS records සංස්කරණය කළ හැක |
| `delete_dns_record(string $domain, string $record_id, array $data): array` | පාරිභෝගිකයාට DNS records මකා දැමිය හැක |
| `update_nameservers(string $domain_name, array $nameservers): array` | Nameserver කළමනාකරණය |
| `get_epp_code(string $domain_name): array` | Domain මාරු කිරීම (පිටතට යන) |
| `transfer_domain(string $domain, string $auth_code, array $registrant_info, array $options): array` | Domain මාරු කිරීම (ඇතුළට එන) |

### ආපසු ලබාදෙන අගයේ සම්මතය {#return-value-convention}

සියලු methods අවම වශයෙන් `success` key එකක් සහිත array එකක් ආපසු ලබාදෙයි:

```php
// Success
return ['success' => true, 'data' => [...]];

// Failure
return ['success' => false, 'message' => 'Human-readable error'];
```

---

## ඔබගේ capability එක ලියාපදිංචි කිරීම {#registering-your-capability}

`wu_domain_seller_register_capabilities` action භාවිතා කර ඔබගේ class එක ලියාපදිංචි කරන්න:

```php
add_action('wu_domain_seller_register_capabilities', function(\WP_Ultimo\Integrations\Integration_Registry $registry) {
    $registry->add_capability('my-registrar', new \My\Plugin\Capabilities\My_Registrar_Selling());
});
```

`add_capability()` වෙත දෙන පළමු තර්කය **provider ID** වේ — සැකසුම්, නිෂ්පාදන වින්‍යාසය, සහ ලොග් නාලිකා තුළ ඔබගේ registrar හඳුනාගැනීමට භාවිතා වන lowercase slug එකකි. අනන්‍ය දෙයක් භාවිතා කරන්න (උදා., ඔබගේ සමාගම් slug එක).

---

## Wizard එකට අක්තපත්‍ර ක්ෂේත්‍ර එකතු කිරීම {#adding-credential-fields-to-the-wizard}

Setup wizard හරහා පරිපාලකයින්ට අක්තපත්‍ර ඇතුළත් කිරීමට ඉඩ දීමට, ඔබගේ අනුකලනය ලියාපදිංචි කරන්න:

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

අක්තපත්‍ර, ක්ෂේත්‍ර IDs keys ලෙස භාවිතා කර network options ලෙස ගබඩා කරයි. ඔබගේ capability class එක තුළ ඒවා `wu_get_setting('my_registrar_api_key')` සමඟ ලබාගන්න.

---

## ලියාපදිංචියෙන් පසු ක්‍රියා සඳහා hooks {#hooks-for-post-registration-actions}

Webhooks, provisioning, දැනුම්දීම්, හෝ CRM යාවත්කාලීන කිරීම් ක්‍රියාත්මක කිරීමට මෙම actions භාවිතා කරන්න:

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

## ලොග් සටහන් කිරීම {#logging}

`wu_log_add()` භාවිතයෙන් ඔබේ සපයන්නාට අදාළ ලොග් නාලිකාවට ලියන්න:

```php
wu_log_add('domain-seller-my-registrar', "Registered {$domain_name} successfully", 'info');
wu_log_add('domain-seller-my-registrar', "Registration failed: {$error}", 'error');
```

ලොග් **ජාල පරිපාලනය › Ultimate Multisite › ලොග් › domain-seller-my-registrar** යටතේ පෙන්වයි.
