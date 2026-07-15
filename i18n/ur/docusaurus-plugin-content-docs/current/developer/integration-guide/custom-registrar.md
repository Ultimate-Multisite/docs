---
title: ایک کسٹم رجسٹرار انٹیگریشن بنانا
sidebar_position: 10
_i18n_hash: ee4c4ad8a1defe5760fd09b8f173ef7d
---
# ایک کسٹم رجسٹرار انٹیگریشن بنانا

Domain Seller addon ایک **Integration Registry** پیٹرن استعمال کرتا ہے۔ ہر رجسٹرار ایک PHP کلاس ہوتی ہے جو `Domain_Selling_Capability` کو نافذ (implement) کرتی ہے اور `wu_domain_seller_register_capabilities` action hook کے ذریعے خود کو رجسٹر کرتی ہے۔

یہ گائیڈ بتاتی ہے کہ ایک کسٹم رجسٹرار کو کیسے جوڑنا ہے۔

## انٹرفیس (The interface) {#the-interface}

آپ کی کلاس کو `WP_Ultimo\Integrations\Capabilities\Domain_Selling_Capability` کو نافذ کرنا چاہیے اور `WP_Ultimo\Integrations\Base_Capability_Module` کو extend کرنا چاہیے۔

ضروری طریقے (Required methods):

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

### اختیاری طریقے (Optional methods) {#optional-methods}

اضافی خصوصیات کو فعال کرنے کے لیے ان کو نافذ کریں۔ addon `method_exists()` کے ذریعے سپورٹ کا پتہ لگاتا ہے:

| Method | Unlocks |
|---|---|
| `supports_whois_privacy(): bool` | WHOIS privacy option in product settings |
| `enable_whois_privacy(string $domain_name): array` | Auto-enables privacy at registration |
| `get_dns_records(string $domain_name): array` | Customer DNS view tab |
| `add_dns_record(string $domain_name, array $record_data): array` | Customer can add DNS records |
| `update_dns_record(string $domain, string $record_id, array $record_data): array` | Customer can edit DNS records |
| `delete_dns_record(string $domain, string $record_id, array $data): array` | Customer can delete DNS records |
| `update_nameservers(string $domain_name, array $nameservers): array` | Nameserver management |
| `get_epp_code(string $domain_name): array` | Domain transfer (outgoing) |
| `transfer_domain(string $domain, string $auth_code, array $registrant_info, array $options): array` | Domain transfer (incoming) |

### ریٹرن ویلیو کنونشن (Return value convention) {#return-value-convention}

تمام طریقے ایک ایسا array ریٹرن کرتے ہیں جس میں کم از کم ایک `success` key ہو:

```php
// کامیابی (Success)
return ['success' => true, 'data' => [...]];

// ناکامی (Failure)
return ['success' => false, 'message' => 'Human-readable error'];
```

---

## اپنی کیپیبلٹی کو رجسٹر کرنا (Registering your capability) {#registering-your-capability}

اپنی کلاس کو `wu_domain_seller_register_capabilities` action کا استعمال کرتے ہوئے رجسٹر کریں:

```php
add_action('wu_domain_seller_register_capabilities', function(\WP_Ultimo\Integrations\Integration_Registry $registry) {
    $registry->add_capability('my-registrar', new \My\Plugin\Capabilities\My_Registrar_Selling());
});
```

`add_capability()` کا پہلا argument **provider ID** ہوتا ہے — یہ ایک lowercase slug ہے جو سیٹنگز، پروڈکٹ کنفیگریشن، اور لاگ چینلز میں آپ کے رجسٹرار کی شناخت کے لیے استعمال ہوتا ہے۔ کوئی منفرد چیز استعمال کریں (مثلاً، آپ کی کمپنی کا slug)۔

---

## ویزرڈ میں کریڈینشیل فیلڈز شامل کرنا (Adding credential fields to the wizard) {#adding-credential-fields-to-the-wizard}

ایڈمنز کو سیٹ اپ ویزرڈ کے ذریعے کریڈینشیلز داخل کرنے کی اجازت دینے کے لیے، اپنی انٹیگریشن کو رجسٹر کریں:

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

کریڈینشیلز کو فیلڈ IDs کو keys کے طور پر استعمال کرتے ہوئے نیٹ ورک آپشنز کے طور پر محفوظ کیا جاتا ہے۔ انہیں اپنی کیپیبلٹی کلاس میں `wu_get_setting('my_registrar_api_key')` کے ذریعے حاصل کریں۔

---

## پوسٹ-رجسٹریشن ایکشنز کے لیے Hooks (Hooks for post-registration actions) {#hooks-for-post-registration-actions}

webhooks، provisioning، نوٹیفیکیشنز، یا CRM اپڈیٹس کو ٹرگر کرنے کے لیے ان actions کا استعمال کریں:

```php
// کامیاب ڈومین رجسٹریشن کے بعد
add_action('wu_domain_registration_completed', function($payment, $registration_data, $result) {
    // $registration_data: domain_name, provider_id, years, expiry_date, customer_id
    // $result: raw registrar response
    my_crm_update_domain($registration_data['domain_name'], $registration_data['customer_id']);
}, 10, 3);

// رجسٹریشن کی ناکامی کے بعد
add_action('wu_domain_registration_failed', function($payment, $registration_data, $error_message) {
    my_alert_team("Domain registration failed: {$registration_data['domain_name']} — {$error_message}");
}, 10, 3);

// کامیاب رینیوَل کے بعد
add_action('wu_domain_renewal_completed', function($payment, $renewal_data, $result) {
    // اپنے بلنگ سسٹم کو اپ ڈیٹ کریں، رسید بھیجیں، وغیرہ۔
}, 10, 3);

// رینیوَل کی ناکامی کے بعد
add_action('wu_domain_renewal_failed', function($payment, $renewal_data, $error_message) {
    // الرٹ، دوبارہ کوشش کا logic، وغیرہ۔
}, 10, 3);

// ڈومین ٹرانسفر مکمل ہونے کے بعد
add_action('wu_domain_transfer_completed', function($domain, $transfer_data) {
    // $domain ایک WP_Ultimo\Models\Domain object ہے
}, 10, 2);

// SES DKIM verification کے بعد (اگر SES integration فعال ہے)
add_action('wu_domain_ses_verified', function($domain) {
    // $domain ایک WP_Ultimo\Models\Domain object ہے
});
```

---

## لاگنگ (Logging) {#logging}

`wu_log_add()` کا استعمال کرتے ہوئے اپنے provider-specific log channel میں لکھیں:

```php
wu_log_add('domain-seller-my-registrar', "Registered {$domain_name} successfully", 'info');
wu_log_add('domain-seller-my-registrar', "Registration failed: {$error}", 'error');
```

لاگز **Network Admin › Ultimate Multisite › Logs › domain-seller-my-registrar** کے تحت نظر آئیں گے۔
