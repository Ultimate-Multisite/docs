---
title: حسب ضرورت رجسٽرار انٽيگريشن ٺاهڻ
sidebar_position: 10
_i18n_hash: ee4c4ad8a1defe5760fd09b8f173ef7d
---
# ڪسٽم Registrar انٽيگريشن ٺاهڻ

Domain Seller addon هڪ **Integration Registry** نمونو استعمال ڪري ٿو. هر registrar هڪ PHP ڪلاس آهي جيڪو `Domain_Selling_Capability` لاڳو ڪري ٿو ۽ `wu_domain_seller_register_capabilities` action hook ذريعي پاڻ کي رجسٽر ڪري ٿو.

هي رهنمائي ڏيکاري ٿي ته ڪسٽم registrar کي ڪيئن ڳنڍجي.

## انٽرفيس {#the-interface}

توهان جي ڪلاس کي `WP_Ultimo\Integrations\Capabilities\Domain_Selling_Capability` لاڳو ڪرڻ ۽ `WP_Ultimo\Integrations\Base_Capability_Module` کي extend ڪرڻ لازمي آهي.

گهربل طريقا:

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

### اختياري طريقا {#optional-methods}

اضافي فيچرز کولڻ لاءِ اهي لاڳو ڪريو. addon `method_exists()` ذريعي سپورٽ سڃاڻي ٿو:

| طريقو | کولي ٿو |
|---|---|
| `supports_whois_privacy(): bool` | پيداوار جي سيٽنگن ۾ WHOIS رازداري آپشن |
| `enable_whois_privacy(string $domain_name): array` | رجسٽريشن وقت پاڻمرادو رازداري فعال ڪري ٿو |
| `get_dns_records(string $domain_name): array` | گراهڪ DNS ڏيک ٽيب |
| `add_dns_record(string $domain_name, array $record_data): array` | گراهڪ DNS ريڪارڊ شامل ڪري سگهي ٿو |
| `update_dns_record(string $domain, string $record_id, array $record_data): array` | گراهڪ DNS ريڪارڊ ايڊٽ ڪري سگهي ٿو |
| `delete_dns_record(string $domain, string $record_id, array $data): array` | گراهڪ DNS ريڪارڊ ختم ڪري سگهي ٿو |
| `update_nameservers(string $domain_name, array $nameservers): array` | Nameserver انتظام |
| `get_epp_code(string $domain_name): array` | Domain منتقلي (ٻاهر ويندڙ) |
| `transfer_domain(string $domain, string $auth_code, array $registrant_info, array $options): array` | Domain منتقلي (اندر ايندڙ) |

### واپسي قدر جو رواج {#return-value-convention}

سڀئي طريقا گهٽ ۾ گهٽ `success` key سان هڪ array واپس ڪن ٿا:

```php
// Success
return ['success' => true, 'data' => [...]];

// Failure
return ['success' => false, 'message' => 'Human-readable error'];
```

---

## پنهنجي capability رجسٽر ڪرڻ {#registering-your-capability}

`wu_domain_seller_register_capabilities` action استعمال ڪندي پنهنجي ڪلاس کي رجسٽر ڪريو:

```php
add_action('wu_domain_seller_register_capabilities', function(\WP_Ultimo\Integrations\Integration_Registry $registry) {
    $registry->add_capability('my-registrar', new \My\Plugin\Capabilities\My_Registrar_Selling());
});
```

`add_capability()` جو پهريون دليل **provider ID** آهي — هڪ ننڍن اکرن وارو slug جيڪو سيٽنگن، پيداوار جي ترتيب، ۽ لاگ چينلن ۾ توهان جي registrar کي سڃاڻڻ لاءِ استعمال ٿئي ٿو. ڪا منفرد شيءِ استعمال ڪريو (مثال طور، توهان جي ڪمپني جو slug).

---

## wizard ۾ credential fields شامل ڪرڻ {#adding-credential-fields-to-the-wizard}

ايڊمنز کي setup wizard ذريعي credentials داخل ڪرڻ ڏيڻ لاءِ، پنهنجي انٽيگريشن رجسٽر ڪريو:

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

Credentials کي field IDs کي keys طور استعمال ڪندي network options طور محفوظ ڪيو وڃي ٿو. انهن کي پنهنجي capability ڪلاس ۾ `wu_get_setting('my_registrar_api_key')` سان حاصل ڪريو.

---

## رجسٽريشن کان پوءِ جي actions لاءِ Hooks {#hooks-for-post-registration-actions}

webhooks، provisioning، notifications، يا CRM updates کي trigger ڪرڻ لاءِ اهي actions استعمال ڪريو:

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

## لاگنگ {#logging}

`wu_log_add()` استعمال ڪندي پنهنجي provider-specific لاگ چينل ۾ لکو:

```php
wu_log_add('domain-seller-my-registrar', "Registered {$domain_name} successfully", 'info');
wu_log_add('domain-seller-my-registrar', "Registration failed: {$error}", 'error');
```

لاگس **نيٽ ورڪ منتظم › Ultimate Multisite › لاگس › domain-seller-my-registrar** هيٺ ظاهر ٿين ٿا.
