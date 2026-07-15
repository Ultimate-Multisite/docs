---
title: ការរួមបញ្ចូលអ្នកចុះបញ្ជីផ្ទាល់ខ្លួន
sidebar_position: 10
_i18n_hash: ee4c4ad8a1defe5760fd09b8f173ef7d
---
# ការបង្កើតការរួមបញ្ចូលអ្នកចុះបញ្ជីផ្ទាល់ខ្លួន

addon Domain Seller ប្រើលំនាំ **Integration Registry**។ អ្នកចុះបញ្ជីនីមួយៗគឺជា PHP class ដែលអនុវត្ត `Domain_Selling_Capability` ហើយចុះបញ្ជីខ្លួនតាមរយៈ action hook `wu_domain_seller_register_capabilities`។

មគ្គុទ្ទេសក៍នេះបង្ហាញពីរបៀបភ្ជាប់អ្នកចុះបញ្ជីផ្ទាល់ខ្លួន។

## ចំណុចប្រទាក់ {#the-interface}

class របស់អ្នកត្រូវតែអនុវត្ត `WP_Ultimo\Integrations\Capabilities\Domain_Selling_Capability` និងពង្រីក `WP_Ultimo\Integrations\Base_Capability_Module`។

វិធីសាស្ត្រដែលត្រូវការ៖

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

### វិធីសាស្ត្រជាជម្រើស {#optional-methods}

អនុវត្តវាដើម្បីបើកមុខងារបន្ថែម។ addon រកឃើញការគាំទ្រតាមរយៈ `method_exists()`៖

| វិធីសាស្ត្រ | បើកមុខងារ |
|---|---|
| `supports_whois_privacy(): bool` | ជម្រើសឯកជនភាព WHOIS ក្នុងការកំណត់ផលិតផល |
| `enable_whois_privacy(string $domain_name): array` | បើកឯកជនភាពដោយស្វ័យប្រវត្តិនៅពេលចុះបញ្ជី |
| `get_dns_records(string $domain_name): array` | ផ្ទាំងមើល DNS របស់អតិថិជន |
| `add_dns_record(string $domain_name, array $record_data): array` | អតិថិជនអាចបន្ថែមកំណត់ត្រា DNS |
| `update_dns_record(string $domain, string $record_id, array $record_data): array` | អតិថិជនអាចកែសម្រួលកំណត់ត្រា DNS |
| `delete_dns_record(string $domain, string $record_id, array $data): array` | អតិថិជនអាចលុបកំណត់ត្រា DNS |
| `update_nameservers(string $domain_name, array $nameservers): array` | ការគ្រប់គ្រង Nameserver |
| `get_epp_code(string $domain_name): array` | ការផ្ទេរដែន (ចេញ) |
| `transfer_domain(string $domain, string $auth_code, array $registrant_info, array $options): array` | ការផ្ទេរដែន (ចូល) |

### របៀបតម្លៃត្រឡប់ {#return-value-convention}

វិធីសាស្ត្រទាំងអស់ត្រឡប់ array ដែលមានយ៉ាងហោចណាស់ key `success`៖

```php
// Success
return ['success' => true, 'data' => [...]];

// Failure
return ['success' => false, 'message' => 'Human-readable error'];
```

---

## ការចុះបញ្ជីសមត្ថភាពរបស់អ្នក {#registering-your-capability}

ចុះបញ្ជី class របស់អ្នកដោយប្រើ action `wu_domain_seller_register_capabilities`៖

```php
add_action('wu_domain_seller_register_capabilities', function(\WP_Ultimo\Integrations\Integration_Registry $registry) {
    $registry->add_capability('my-registrar', new \My\Plugin\Capabilities\My_Registrar_Selling());
});
```

អាគុយម៉ង់ទីមួយទៅ `add_capability()` គឺជា **provider ID** — slug អក្សរតូចដែលប្រើដើម្បីសម្គាល់អ្នកចុះបញ្ជីរបស់អ្នកក្នុងការកំណត់ ការកំណត់រចនាសម្ព័ន្ធផលិតផល និងឆានែលកំណត់ហេតុ។ ប្រើអ្វីមួយដែលមានតែមួយគត់ (ឧទាហរណ៍ slug របស់ក្រុមហ៊ុនអ្នក)។

---

## ការបន្ថែមវាលព័ត៌មានសម្ងាត់ទៅ wizard {#adding-credential-fields-to-the-wizard}

ដើម្បីឱ្យអ្នកគ្រប់គ្រងបញ្ចូលព័ត៌មានសម្ងាត់តាមរយៈ setup wizard សូមចុះបញ្ជីការរួមបញ្ចូលរបស់អ្នក៖

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

ព័ត៌មានសម្ងាត់ត្រូវបានរក្សាទុកជាជម្រើសបណ្ដាញ ដោយប្រើ field IDs ជា keys។ ទាញយកវានៅក្នុង capability class របស់អ្នកដោយប្រើ `wu_get_setting('my_registrar_api_key')`។

---

## Hooks សម្រាប់សកម្មភាពក្រោយការចុះបញ្ជី {#hooks-for-post-registration-actions}

ប្រើ actions ទាំងនេះដើម្បីចាប់ផ្តើម webhooks, provisioning, ការជូនដំណឹង ឬការធ្វើបច្ចុប្បន្នភាព CRM៖

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

## កំណត់ហេតុ {#logging}

សរសេរទៅកាន់ឆានែលកំណត់ហេតុជាក់លាក់របស់អ្នកផ្តល់សេវា ដោយប្រើ `wu_log_add()`៖

```php
wu_log_add('domain-seller-my-registrar', "Registered {$domain_name} successfully", 'info');
wu_log_add('domain-seller-my-registrar', "Registration failed: {$error}", 'error');
```

កំណត់ហេតុបង្ហាញនៅក្រោម **អ្នកគ្រប់គ្រងបណ្តាញ › Ultimate Multisite › កំណត់ហេតុ › domain-seller-my-registrar**។
