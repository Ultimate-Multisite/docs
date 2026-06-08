---
title: কাস্টম রেজিস্ট্রার ইন্টিগ্রেশন তৈরি করা
sidebar_position: 10
_i18n_hash: ee4c4ad8a1defe5760fd09b8f173ef7d
---
# কাস্টম রেজিস্ট্রার ইন্টিগ্রেশন তৈরি করা

Domain Seller addon একটি **Integration Registry** প্যাটার্ন ব্যবহার করে। প্রতিটি রেজিস্ট্রার একটি PHP ক্লাস যা `Domain_Selling_Capability` ইমপ্লিমেন্ট করে এবং `wu_domain_seller_register_capabilities` অ্যাকশন হুকটির মাধ্যমে নিজেকে রেজিস্টার করে।

এই গাইডটি দেখায় কিভাবে আপনি একটি কাস্টম রেজিস্ট্রার যুক্ত করতে পারেন।

## ইন্টারফেস

আপনার ক্লাসটিকে অবশ্যই `WP_Ultimo\Integrations\Capabilities\Domain_Selling_Capability` ইমপ্লিমেন্ট করতে হবে এবং `WP_Ultimo\Integrations\Base_Capability_Module` এক্সটেন্ড করতে হবে।

প্রয়োজনীয় মেথডগুলো:

```php
namespace My\Plugin\Capabilities;

use WP_Ultimo\Integrations\Base_Capability_Module;
use WP_Ultimo\Integrations\Capabilities\Domain_Selling_Capability;

class My_Registrar_Selling extends Base_Capability_Module implements Domain_Selling_Capability {

    // --- প্রয়োজনীয় আইডেন্টিটি মেথডগুলো (Base_Capability_Module থেকে) ---

    public function get_capability_id(): string {
        return 'domain-selling';  // সব সময় 'domain-selling'
    }

    public function get_title(): string {
        return __('Domain Selling', 'my-plugin');
    }

    public function get_explainer_lines(): array {
        return [
            'will'     => [__('My Registrar এর মাধ্যমে ডোমেইন রেজিস্ট্রেশন সক্ষম করুন।', 'my-plugin')],
            'will_not' => [],
        ];
    }

    // --- মূল প্রয়োজনীয় মেথডগুলো (Domain_Selling_Capability থেকে) ---

    /** সমস্ত উপলব্ধ TLD এবং পাইকারি মূল্য নিয়ে আসে। */
    public function sync_tlds(): array { ... }

    /** $tlds জুড়ে $domain_name এর প্রাপ্যতা পরীক্ষা করে। */
    public function search_domains(string $domain_name, array $tlds = []): array { ... }

    /** N বছরের জন্য একটি TLD এর পাইকারি মূল্য পায়। */
    public function get_domain_pricing(string $tld, int $years = 1): array { ... }

    /** একটি ডোমেইন রেজিস্টার করে। সফল হলে ['success' => true, 'expiry_date' => '...'] রিটার্ন করে। */
    public function register_domain(string $domain_name, array $registrant_info, int $years = 1): array { ... }

    /** N বছরের জন্য একটি ডোমেইন রিনিউ করে। */
    public function renew_domain(string $domain_name, int $years = 1): array { ... }

    /** রেজিস্ট্রেশন স্ট্যাটাস, মেয়াদ উত্তীর্ণের তারিখ, নেমসার্ভার পায়। */
    public function get_domain_info(string $domain_name): array { ... }

    /** API ক্রেডেনশিয়াল এবং কানেক্টিভিটি পরীক্ষা করে। */
    public function test_connection(): array { ... }
}
```

### ঐচ্ছিক মেথডগুলো

অতিরিক্ত ফিচার আনলক করতে এগুলো ইমপ্লিমেন্ট করুন। addonটি `method_exists()` এর মাধ্যমে সাপোর্ট সনাক্ত করে:

| মেথড | যা আনলক করে |
|---|---|
| `supports_whois_privacy(): bool` | প্রোডাক্ট সেটিংসে WHOIS privacy অপশন |
| `enable_whois_privacy(string $domain_name): array` | রেজিস্ট্রেশনের সময় স্বয়ংক্রিয়ভাবে প্রাইভেসি সক্ষম করা |
| `get_dns_records(string $domain_name): array` | কাস্টমার DNS ভিউ ট্যাব |
| `add_dns_record(string $domain_name, array $record_data): array` | কাস্টমার DNS রেকর্ড যোগ করতে পারে |
| `update_dns_record(string $domain, string $record_id, array $record_data): array` | কাস্টমার DNS রেকর্ড এডিট করতে পারে |
| `delete_dns_record(string $domain, string $record_id, array $data): array` | কাস্টমার DNS রেকর্ড মুছে ফেলতে পারে |
| `update_nameservers(string $domain_name, array $nameservers): array` | নেমসার্ভার ম্যানেজমেন্ট |
| `get_epp_code(string $domain_name): array` | ডোমেইন ট্রান্সফার (বাইরে পাঠানো) |
| `transfer_domain(string $domain, string $auth_code, array $registrant_info, array $options): array` | ডোমেইন ট্রান্সফার (ভেতরে আসা) |

### রিটার্ন ভ্যালু কনভেনশন

সব মেথডই একটি অ্যারে রিটার্ন করে, যাতে কমপক্ষে একটি `success` কী থাকে:

```php
// সফল হলে
return ['success' => true, 'data' => [...]];

// ব্যর্থ হলে
return ['success' => false, 'message' => 'মানুষের বোঝার মতো ত্রুটি'];
```

---

## আপনার ক্যাপাবিলিটি রেজিস্টার করা

`wu_domain_seller_register_capabilities` অ্যাকশন ব্যবহার করে আপনার ক্লাসটি রেজিস্টার করুন:

```php
add_action('wu_domain_seller_register_capabilities', function(\WP_Ultimo\Integrations\Integration_Registry $registry) {
    $registry->add_capability('my-registrar', new \My\Plugin\Capabilities\My_Registrar_Selling());
});
```

`add_capability()` এর প্রথম আর্গুমেন্টটি হলো **provider ID** — এটি একটি ছোট হাতের স্ল্যাগ যা সেটিং, প্রোডাক্ট কনফিগারেশন এবং লগ চ্যানেলে আপনার রেজিস্ট্রারকে শনাক্ত করতে ব্যবহৃত হয়। একটি অনন্য কিছু ব্যবহার করুন (যেমন, আপনার কোম্পানির স্ল্যাগ)।

---

## উইজার্ডে ক্রেডেনশিয়াল ফিল্ড যোগ করা

অ্যাডমিনদের সেটআপ উইজার্ডের মাধ্যমে ক্রেডেনশিয়াল প্রবেশ করাতে দিতে, আপনার ইন্টিগ্রেশনটি রেজিস্টার করুন:

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

ক্রেডেনশিয়ালগুলো ফিল্ড আইডিগুলোকে কী (key) হিসেবে ব্যবহার করে নেটওয়ার্ক অপশন হিসেবে সংরক্ষণ করা হয়। এগুলো আপনি আপনার ক্যাপাবিলিটি ক্লাসে `wu_get_setting('my_registrar_api_key')` ব্যবহার করে পুনরুদ্ধার করতে পারেন।

---

## পোস্ট-রেজিস্ট্রেশন অ্যাকশনের জন্য হুকস

ওয়েবহুক ট্রিগার করতে, প্রভিশনিং করতে, নোটিফিকেশন দিতে বা CRM আপডেট করতে এই অ্যাকশনগুলো ব্যবহার করুন:

```php
// সফল ডোমেইন রেজিস্ট্রেশনের পরে
add_action('wu_domain_registration_completed', function($payment, $registration_data, $result) {
    // $registration_data: domain_name, provider_id, years, expiry_date, customer_id
    // $result: raw registrar response
    my_crm_update_domain($registration_data['domain_name'], $registration_data['customer_id']);
}, 10, 3);

// রেজিস্ট্রেশন ব্যর্থ হলে
add_action('wu_domain_registration_failed', function($payment, $registration_data, $error_message) {
    my_alert_team("Domain registration failed: {$registration_data['domain_name']} — {$error_message}");
}, 10, 3);

// সফল রিনিউ করার পরে
add_action('wu_domain_renewal_completed', function($payment, $renewal_data, $result) {
    // আপনার বিলিং সিস্টেম আপডেট করুন, রসিদ পাঠান, ইত্যাদি।
}, 10, 3);

// রিনিউয়াল ব্যর্থ হলে
add_action('wu_domain_renewal_failed', function($payment, $renewal_data, $error_message) {
    // অ্যালার্ট, রিট্রাই লজিক, ইত্যাদি।
}, 10, 3);

// ডোমেইন ট্রান্সফার সম্পন্ন হওয়ার পরে
add_action('wu_domain_transfer_completed', function($domain, $transfer_data) {
    // $domain হলো একটি WP_Ultimo\Models\Domain object
}, 10, 2);

// SES DKIM ভেরিফিকেশন সম্পন্ন হওয়ার পরে (যদি SES ইন্টিগ্রেশন সক্রিয় থাকে)
add_action('wu_domain_ses_verified', function($domain) {
    // $domain হলো একটি WP_Ultimo\Models\Domain object
});
```

---

## লগিং

`wu_log_add()` ব্যবহার করে আপনার প্রোভাইডার-নির্দিষ্ট লগ চ্যানেলে লিখুন:

```php
wu_log_add('domain-seller-my-registrar', "{$domain_name} সফলভাবে রেজিস্টার হয়েছে", 'info');
wu_log_add('domain-seller-my-registrar', "রেজিস্ট্রেশন ব্যর্থ হয়েছে: {$error}", 'error');
```

লগগুলো **Network Admin › Ultimate Multisite › Logs › domain-seller-my-registrar** এর অধীনে দেখা যাবে।
