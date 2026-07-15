---
title: কাস্টম ৰেজিষ্ট্ৰাৰ ইন্টিগ্ৰেচন গঢ়ি তোলা
sidebar_position: 10
_i18n_hash: ee4c4ad8a1defe5760fd09b8f173ef7d
---
# এটা কাস্টম ৰেজিষ্ট্ৰাৰ ইন্টিগ্ৰেচন নিৰ্মাণ কৰা

Domain Seller addon-এ এটা **Integration Registry** pattern ব্যৱহাৰ কৰে। প্ৰতিজন ৰেজিষ্ট্ৰাৰ এটা PHP class, যিয়ে `Domain_Selling_Capability` ইমপ্লিমেন্ট কৰে আৰু `wu_domain_seller_register_capabilities` action hookৰ জৰিয়তে নিজকে ৰেজিষ্টাৰ কৰে।

এই গাইডটোৱে দেখুৱাই যে কেনেকৈ এটা কাস্টম ৰেজিষ্ট্ৰাৰ সংযোগ কৰিব পাৰি।

## Interface (আন্তৰ্ফেশ্বন) {#the-interface}

আপোনাৰ class-এ `WP_Ultimo\Integrations\Capabilities\Domain_Selling_Capability` ইমপ্লিমেন্ট কৰিব লাগিব আৰু `WP_Ultimo\Integrations\Base_Capability_Module` extends কৰিব লাগিব।

आवश्यक পদ্ধতিসমূহ (Required methods):

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

### Optional methods (ঐচ্ছিক পদ্ধতিসমূহ) {#optional-methods}

অতিরিক্ত বৈশিষ্ট্যসমূহ (additional features) মুকলি কৰিবলৈ এইবোৰ ইমপ্লিমেন্ট কৰক। addon-এ `method_exists()` ব্যৱহাৰ কৰি সমৰ্থন (support) নিৰ্ণয় কৰে:

| Method | Unlocks (মুকলি কৰে) |
|---|---|
| `supports_whois_privacy(): bool` | Product settings-ত WHOIS privacy option |
| `enable_whois_privacy(string $domain_name): array` | Registrationৰ সময়ত স্বয়ংক্রিয়ভাৱে privacy সক্ষম কৰে |
| `get_dns_records(string $domain_name): array` | Customer DNS view tab |
| `add_dns_record(string $domain_name, array $record_data): array` | Customer-ক DNS record যোগ কৰিবলৈ দিয়ে |
| `update_dns_record(string $domain, string $record_id, array $record_data): array` | Customer-ক DNS record সম্পাদনা কৰিবলৈ দিয়ে |
| `delete_dns_record(string $domain, string $record_id, array $data): array` | Customer-ক DNS record মুচি পেলাবলৈ দিয়ে |
| `update_nameservers(string $domain_name, array $nameservers): array` | Nameserver management |
| `get_epp_code(string $domain_name): array` | Domain transfer (outgoing) |
| `transfer_domain(string $domain, string $auth_code, array $registrant_info, array $options): array` | Domain transfer (incoming) |

### Return value convention (ফলাফলৰ মানকীকৰণ) {#return-value-convention}

সকলো পদ্ধতিয়ে এটা array return কৰিব লাগিব, য'ত কমেও এটা `success` key থাকিব:

```php
// Success (সফলতা)
return ['success' => true, 'data' => [...]];

// Failure (ব্যৰ্থতা)
return ['success' => false, 'message' => 'Human-readable error'];
```

---

## Registering your capability (আপোনাৰ capability ৰেজিষ্টাৰ কৰা) {#registering-your-capability}

আপোনাৰ class-ক `wu_domain_seller_register_capabilities` action ব্যৱহাৰ কৰি ৰেজিষ্টাৰ কৰক:

```php
add_action('wu_domain_seller_register_capabilities', function(\WP_Ultimo\Integrations\Integration_Registry $registry) {
    $registry->add_capability('my-registrar', new \My\Plugin\Capabilities\My_Registrar_Selling());
});
```

`add_capability()`-ৰ প্ৰথম argumentটো হৈছে **provider ID** — এটা lowercase slug যি settings, product configuration, আৰু log channel-ত আপোনাৰ ৰেজিষ্ট্ৰাৰক চিনাক্ত কৰিবলৈ ব্যৱহাৰ কৰা হয়। এটা অনন্য (unique) কিছু ব্যৱহাৰ কৰক (উদাহৰণস্বৰূপে, আপোনাৰ কোম্পানীৰ slug)।

---

## Adding credential fields to the wizard (wizard-ত credential field যোগ কৰা) {#adding-credential-fields-to-the-wizard}

Admin-ক setup wizard-ৰ জৰিয়তে credential প্ৰৱেশ কৰিবলৈ, আপোনাৰ ইন্টিগ্ৰেচনটো ৰেজিষ্টাৰ কৰক:

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

Credentials সমূহ field IDs-ক key হিচাপে ব্যৱহাৰ কৰি network options হিচাপে সংৰক্ষিত (stored) হয়। ইয়াক আপোনাৰ capability class-ত `wu_get_setting('my_registrar_api_key')` ব্যৱহাৰ কৰি পুনৰ লওক।

---

## Hooks for post-registration actions (প্ৰৱন্দনাৰ পিছৰ কাৰ্য্যৰ বাবে hooks) {#hooks-for-post-registration-actions}

webhook, provisioning, notification, বা CRM update ট্ৰিগাৰ কৰিবলৈ এই action সমূহ ব্যৱহাৰ কৰক:

```php
// After successful domain registration (সফল ডোমেইন ৰেজিষ্ট্ৰেচনৰ পিছত)
add_action('wu_domain_registration_completed', function($payment, $registration_data, $result) {
    // $registration_data: domain_name, provider_id, years, expiry_date, customer_id
    // $result: raw registrar response
    my_crm_update_domain($registration_data['domain_name'], $registration_data['customer_id']);
}, 10, 3);

// After registration failure (ৰেজিষ্ট্ৰেচন বিফল হোৱাৰ পিছত)
add_action('wu_domain_registration_failed', function($payment, $registration_data, $error_message) {
    my_alert_team("Domain registration failed: {$registration_data['domain_name']} — {$error_message}");
}, 10, 3);

// After successful renewal (সফল পুনৰীক্ষণৰ পিছত)
add_action('wu_domain_renewal_completed', function($payment, $renewal_data, $result) {
    // Update your billing system, send a receipt, etc.
}, 10, 3);

// After renewal failure (পুনৰীক্ষণ বিফল হোৱাৰ পিছত)
add_action('wu_domain_renewal_failed', function($payment, $renewal_data, $error_message) {
    // Alert, retry logic, etc.
}, 10, 3);

// After domain transfer completes (ডোমেইন স্থানান্তৰ সম্পন্ন হোৱাৰ পিছত)
add_action('wu_domain_transfer_completed', function($domain, $transfer_data) {
    // $domain is a WP_Ultimo\Models\Domain object
}, 10, 2);

// After SES DKIM verification (if SES integration is active) (SES DKIM verification সম্পন্ন হোৱাৰ পিছত)
add_action('wu_domain_ses_verified', function($domain) {
    // $domain is a WP_Ultimo\Models\Domain object
});
```

---

## Logging (লগিং) {#logging}

`wu_log_add()` ব্যৱহাৰ কৰি আপোনাৰ provider-specific log channel-ত লিখক:

```php
wu_log_add('domain-seller-my-registrar', "Registered {$domain_name} successfully", 'info');
wu_log_add('domain-seller-my-registrar', "Registration failed: {$error}", 'error');
```

Logs সমূহ **Network Admin › Ultimate Multisite › Logs › domain-seller-my-registrar** ত পোৱা যাব।
