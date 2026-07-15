---
title: خاس تىزىملىغۇچى بىرلەشتۈرۈشى قۇرۇش
sidebar_position: 10
_i18n_hash: ee4c4ad8a1defe5760fd09b8f173ef7d
---
# خاس تىزىملىغۇچى بىرلەشتۈرۈشى قۇرۇش

Domain Seller addon **بىرلەشتۈرۈش تىزىملىكى** ئەندىزىسىنى ئىشلىتىدۇ. ھەر بىر تىزىملىغۇچى `Domain_Selling_Capability` نى ئەمەلگە ئاشۇرىدىغان ۋە `wu_domain_seller_register_capabilities` action hook ئارقىلىق ئۆزىنى تىزىملىتىدىغان PHP class تۇر.

بۇ قوللانما خاس تىزىملىغۇچىنى قانداق ئۇلاشنى كۆرسىتىدۇ.

## Interface {#the-interface}

سىزنىڭ classىڭىز `WP_Ultimo\Integrations\Capabilities\Domain_Selling_Capability` نى ئەمەلگە ئاشۇرۇشى ۋە `WP_Ultimo\Integrations\Base_Capability_Module` دىن كېڭەيتىلىشى كېرەك.

تەلەپ قىلىنىدىغان methods:

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

### ئىختىيارىي methods {#optional-methods}

قوشۇمچە ئىقتىدارلارنى ئېچىش ئۈچۈن بۇلارنى ئەمەلگە ئاشۇرۇڭ. addon قوللاشنى `method_exists()` ئارقىلىق بايقايدۇ:

| Method | ئاچىدىغان ئىقتىدارلار |
|---|---|
| `supports_whois_privacy(): bool` | مەھسۇلات تەڭشەكلىرىدىكى WHOIS مەخپىيەتلىك تاللانمىسى |
| `enable_whois_privacy(string $domain_name): array` | تىزىملاش جەريانىدا مەخپىيەتلىكنى ئاپتوماتىك قوزغىتىدۇ |
| `get_dns_records(string $domain_name): array` | خېرىدار DNS كۆرۈش بەتكۈچى |
| `add_dns_record(string $domain_name, array $record_data): array` | خېرىدار DNS خاتىرىلىرىنى قوشالايدۇ |
| `update_dns_record(string $domain, string $record_id, array $record_data): array` | خېرىدار DNS خاتىرىلىرىنى تەھرىرلىيەلەيدۇ |
| `delete_dns_record(string $domain, string $record_id, array $data): array` | خېرىدار DNS خاتىرىلىرىنى ئۆچۈرەلەيدۇ |
| `update_nameservers(string $domain_name, array $nameservers): array` | Nameserver باشقۇرۇش |
| `get_epp_code(string $domain_name): array` | دومېن يۆتكەش (چىقىش) |
| `transfer_domain(string $domain, string $auth_code, array $registrant_info, array $options): array` | دومېن يۆتكەش (كىرىش) |

### قايتۇرۇش قىممىتى قائىدىسى {#return-value-convention}

بارلىق methods ئەڭ ئاز دېگەندە `success` ئاچقۇچى بار array قايتۇرىدۇ:

```php
// Success
return ['success' => true, 'data' => [...]];

// Failure
return ['success' => false, 'message' => 'Human-readable error'];
```

---

## قابىلىيىتىڭىزنى تىزىملاش {#registering-your-capability}

classىڭىزنى `wu_domain_seller_register_capabilities` action ئارقىلىق تىزىملاڭ:

```php
add_action('wu_domain_seller_register_capabilities', function(\WP_Ultimo\Integrations\Integration_Registry $registry) {
    $registry->add_capability('my-registrar', new \My\Plugin\Capabilities\My_Registrar_Selling());
});
```

`add_capability()` غا بېرىلىدىغان بىرىنچى argument **تەمىنلىگۈچى ID** — تەڭشەكلەر، مەھسۇلات سەپلىمىسى ۋە خاتىرە قاناللىرىدا تىزىملىغۇچىڭىزنى پەرقلەندۈرۈش ئۈچۈن ئىشلىتىلىدىغان كىچىك ھەرپلىك slug. ئۆزگىچە بىر نەرسە ئىشلىتىڭ (مەسىلەن، شىركىتىڭىزنىڭ slugى).

---

## يېتەكچىگە كىرىش ئۇچۇرلىرى fields نى قوشۇش {#adding-credential-fields-to-the-wizard}

باشقۇرغۇچىلارنىڭ سەپلەش يېتەكچىسى ئارقىلىق كىرىش ئۇچۇرلىرىنى كىرگۈزۈشىگە يول قويۇش ئۈچۈن، بىرلەشتۈرۈشىڭىزنى تىزىملاڭ:

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

كىرىش ئۇچۇرلىرى field ID لىرىنى ئاچقۇچ قىلىپ ئىشلىتىپ تور تاللانمىلىرى سۈپىتىدە ساقلىنىدۇ. ئۇلارنى قابىلىيەت classىڭىزدا `wu_get_setting('my_registrar_api_key')` بىلەن ئېلىڭ.

---

## تىزىملاشتىن كېيىنكى ھەرىكەتلەر ئۈچۈن hooks {#hooks-for-post-registration-actions}

بۇ actions نى webhooks، تەمىنلەش، ئۇقتۇرۇشلار ياكى CRM يېڭىلانمىلىرىنى قوزغىتىش ئۈچۈن ئىشلىتىڭ:

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

## خاتىرە {#logging}

`wu_log_add()` ئارقىلىق تەمىنلىگۈچىڭىزگە خاس خاتىرە قانىلىغا يېزىڭ:

```php
wu_log_add('domain-seller-my-registrar', "Registered {$domain_name} successfully", 'info');
wu_log_add('domain-seller-my-registrar', "Registration failed: {$error}", 'error');
```

خاتىرىلەر **تور باشقۇرغۇچىسى › Ultimate Multisite › خاتىرىلەر › domain-seller-my-registrar** ئاستىدا كۆرۈنىدۇ.
