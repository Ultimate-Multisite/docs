---
title: دروستکردنی یەکخستنی تۆمارکەری تایبەت
sidebar_position: 10
_i18n_hash: ee4c4ad8a1defe5760fd09b8f173ef7d
---
# دروستکردنی تێکەڵکردنی تۆمارکەرێکی تایبەت

پێوەکراوی فرۆشی دۆمەین شێوازی **تۆماری تێکەڵکردن** بەکاردەهێنێت. هەر تۆمارکەرێک classـێکی PHP ـە کە `Domain_Selling_Capability` جێبەجێ دەکات و خۆی لە ڕێگەی action hook ـی `wu_domain_seller_register_capabilities` تۆمار دەکات.

ئەم ڕێبەرە پیشان دەدات چۆن تۆمارکەرێکی تایبەت پەیوەست بکەیت.

## ڕووکارەکە

class ـەکەت دەبێت `WP_Ultimo\Integrations\Capabilities\Domain_Selling_Capability` جێبەجێ بکات و `WP_Ultimo\Integrations\Base_Capability_Module` درێژ بکاتەوە.

میتۆدە پێویستەکان:

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

### میتۆدە ئارەزوومەندانەکان

ئەمە جێبەجێ بکە بۆ کردنەوەی تایبەتمەندی زیاتر. پێوەکراوەکە پشتگیری لە ڕێگەی `method_exists()` دەدۆزێتەوە:

| میتۆد | دەیکاتەوە |
|---|---|
| `supports_whois_privacy(): bool` | هەڵبژاردەی تایبەتمەندی WHOIS لە ڕێکخستنەکانی بەرهەم |
| `enable_whois_privacy(string $domain_name): array` | لە کاتی تۆمارکردندا تایبەتمەندی بە شێوەی خۆکار چالاک دەکات |
| `get_dns_records(string $domain_name): array` | تابی پیشاندانی DNS ـی کڕیار |
| `add_dns_record(string $domain_name, array $record_data): array` | کڕیار دەتوانێت تۆمارەکانی DNS زیاد بکات |
| `update_dns_record(string $domain, string $record_id, array $record_data): array` | کڕیار دەتوانێت تۆمارەکانی DNS دەستکاری بکات |
| `delete_dns_record(string $domain, string $record_id, array $data): array` | کڕیار دەتوانێت تۆمارەکانی DNS بسڕێتەوە |
| `update_nameservers(string $domain_name, array $nameservers): array` | بەڕێوەبردنی Nameserver |
| `get_epp_code(string $domain_name): array` | گواستنەوەی دۆمەین (چوونە دەرەوە) |
| `transfer_domain(string $domain, string $auth_code, array $registrant_info, array $options): array` | گواستنەوەی دۆمەین (هاتنە ژوورەوە) |

### ڕێککەوتنی نرخی گەڕاوە

هەموو میتۆدەکان array ـێک دەگەڕێننەوە کە بە کەمترینەوە key ـی `success` ـی تێدایە:

```php
// Success
return ['success' => true, 'data' => [...]];

// Failure
return ['success' => false, 'message' => 'Human-readable error'];
```

---

## تۆمارکردنی تواناییەکەت

class ـەکەت بە بەکارهێنانی کرداری `wu_domain_seller_register_capabilities` تۆمار بکە:

```php
add_action('wu_domain_seller_register_capabilities', function(\WP_Ultimo\Integrations\Integration_Registry $registry) {
    $registry->add_capability('my-registrar', new \My\Plugin\Capabilities\My_Registrar_Selling());
});
```

یەکەم argument ـی `add_capability()` بریتییە لە **provider ID** — slug ـێکی پیتی بچووک کە بۆ ناساندنی تۆمارکەرەکەت لە ڕێکخستنەکان، شێوەپێدانی بەرهەم، و کاناڵەکانی لۆگ بەکاردەهێنرێت. شتێکی تایبەت بەکاربهێنە (بۆ نموونە، slug ـی کۆمپانیاکەت).

---

## زیادکردنی خانەکانی ناسنامە بۆ wizard

بۆ ئەوەی بەڕێوەبەران بتوانن لە ڕێگەی setup wizard ناسنامەکان داخڵ بکەن، تێکەڵکردنەکەت تۆمار بکە:

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

ناسنامەکان وەک هەڵبژاردەی تۆڕ هەڵدەگیرێن بە بەکارهێنانی ID ـی خانەکان وەک key. لە class ـی تواناییەکەتدا بە `wu_get_setting('my_registrar_api_key')` وەریان بگرەوە.

---

## Hook ـەکان بۆ کردارەکانی دوای تۆمارکردن

ئەم کردارەکان بەکاربهێنە بۆ دەستپێکردنی webhook، provisioning، ئاگادارکردنەوە، یان نوێکردنەوەکانی CRM:

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

## تۆمارکردن

بۆ کەناڵی تۆماری تایبەت بە دابینکەرەکەت بە بەکارهێنانی `wu_log_add()` بنووسە:

```php
wu_log_add('domain-seller-my-registrar', "Registered {$domain_name} successfully", 'info');
wu_log_add('domain-seller-my-registrar', "Registration failed: {$error}", 'error');
```

تۆمارەکان لە ژێر **بەڕێوەبەری تۆڕ › Ultimate Multisite › تۆمارەکان › domain-seller-my-registrar** دەردەکەون.
