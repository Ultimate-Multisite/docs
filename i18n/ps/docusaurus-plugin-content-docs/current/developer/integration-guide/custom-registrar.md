---
title: د دودیز راجسترار ادغام جوړول
sidebar_position: 10
_i18n_hash: ee4c4ad8a1defe5760fd09b8f173ef7d
---
# د دودیز راجسترار ادغام جوړول

د ډومېن پلورونکي اضافي برخه د **ادغام ثبت‌لړ** بڼه کاروي. هر راجسترار د PHP یو کلاس دی چې `Domain_Selling_Capability` پلي کوي او ځان د `wu_domain_seller_register_capabilities` د عمل hook له لارې ثبتوي.

دا لارښود ښيي چې څنګه یو دودیز راجسترار ونښلوئ.

## انترفېس {#the-interface}

ستاسو کلاس باید `WP_Ultimo\Integrations\Capabilities\Domain_Selling_Capability` پلي کړي او `WP_Ultimo\Integrations\Base_Capability_Module` وغځوي.

اړین مېتودونه:

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

### اختیاري مېتودونه {#optional-methods}

دا پلي کړئ څو اضافي ځانګړتیاوې فعالې شي. اضافي برخه د `method_exists()` له لارې ملاتړ پېژني:

| مېتود | فعالوي |
|---|---|
| `supports_whois_privacy(): bool` | د محصول په امستنو کې د WHOIS محرمیت غوراوی |
| `enable_whois_privacy(string $domain_name): array` | د ثبت پر مهال محرمیت په اوتومات ډول فعالوي |
| `get_dns_records(string $domain_name): array` | د پېرودونکي د DNS کتنې ټب |
| `add_dns_record(string $domain_name, array $record_data): array` | پېرودونکی کولای شي د DNS ریکارډونه زیات کړي |
| `update_dns_record(string $domain, string $record_id, array $record_data): array` | پېرودونکی کولای شي د DNS ریکارډونه سم کړي |
| `delete_dns_record(string $domain, string $record_id, array $data): array` | پېرودونکی کولای شي د DNS ریکارډونه ړنګ کړي |
| `update_nameservers(string $domain_name, array $nameservers): array` | د نوم‌سرور مدیریت |
| `get_epp_code(string $domain_name): array` | د ډومېن لېږد (بهر ته) |
| `transfer_domain(string $domain, string $auth_code, array $registrant_info, array $options): array` | د ډومېن لېږد (دننه ته) |

### د راستنېدونکي ارزښت دود {#return-value-convention}

ټول مېتودونه لږ تر لږه د `success` کیلي لرونکی یو ارې راستنوي:

```php
// Success
return ['success' => true, 'data' => [...]];

// Failure
return ['success' => false, 'message' => 'Human-readable error'];
```

---

## ستاسو د وړتیا ثبتول {#registering-your-capability}

خپل کلاس د `wu_domain_seller_register_capabilities` عمل په کارولو ثبت کړئ:

```php
add_action('wu_domain_seller_register_capabilities', function(\WP_Ultimo\Integrations\Integration_Registry $registry) {
    $registry->add_capability('my-registrar', new \My\Plugin\Capabilities\My_Registrar_Selling());
});
```

`add_capability()` ته لومړی آرګومېنټ د **وړاندې کوونکي پېژند** دی — یو ټیټ‌تورو slug چې ستاسو راجسترار په امستنو، د محصول په جوړښت، او د لاګ په چینلونو کې پېژني. یو ځانګړی شی وکاروئ (لکه ستاسو د شرکت slug).

---

## جادوګر ته د اعتبارپاڼو ساحې زیاتول {#adding-credential-fields-to-the-wizard}

د دې لپاره چې اډمینان د جوړونې جادوګر له لارې اعتبارپاڼې دننه کړي، خپل ادغام ثبت کړئ:

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

اعتبارپاڼې د ساحې ID ګانې د کیلیو په توګه کارولو سره د شبکې د غوراویو په توګه ساتل کېږي. په خپل وړتیا کلاس کې یې د `wu_get_setting('my_registrar_api_key')` په وسیله ترلاسه کړئ.

---

## د ثبت وروسته کړنو لپاره hook ګانې {#hooks-for-post-registration-actions}

دا کړنې د webhooks، چمتو کولو، خبرتیاوو، یا CRM تازه‌کولو د پیلولو لپاره وکاروئ:

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

## لاګ ثبتول {#logging}

د `wu_log_add()` په کارولو سره خپل د برابرونکي-ځانګړي لاګ چینل ته ولیکئ:

```php
wu_log_add('domain-seller-my-registrar', "Registered {$domain_name} successfully", 'info');
wu_log_add('domain-seller-my-registrar', "Registration failed: {$error}", 'error');
```

لاګونه د **د شبکې مدیر › Ultimate Multisite › لاګونه › domain-seller-my-registrar** لاندې ښکاري.
