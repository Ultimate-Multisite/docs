---
title: ഒരു കസ്റ്റം രജിസ്ട്രാർ ഇന്റഗ്രേഷൻ നിർമ്മിക്കൽ
sidebar_position: 10
_i18n_hash: ee4c4ad8a1defe5760fd09b8f173ef7d
---
# ഒരു കസ്റ്റം രജിസ്ട്രാർ ഇന്റഗ്രേഷൻ എങ്ങനെ ഉണ്ടാക്കാം

Domain Seller addon ഒരു **Integration Registry** pattern ഉപയോഗിക്കുന്നു. ഓരോ രജിസ്ട്രാറും `Domain_Selling_Capability` എന്ന PHP class-നെ നടപ്പിലാക്കുകയും `wu_domain_seller_register_capabilities` എന്ന action hook വഴി സ്വയം രജിസ്റ്റർ ചെയ്യുകയും ചെയ്യുന്ന ഒന്നാണ്.

ഒരു കസ്റ്റം രജിസ്ട്രാർ എങ്ങനെ ചേർക്കാമെന്ന് ഈ ഗൈഡ് കാണിക്കുന്നു.

## ഇന്റർഫേസ് (The interface) {#the-interface}

നിങ്ങളുടെ class-ന് `WP_Ultimo\Integrations\Capabilities\Domain_Selling_Capability` നടപ്പിലാക്കുകയും `WP_Ultimo\Integrations\Base_Capability_Module` എക്സ്റ്റൻഡ് ചെയ്യുകയും വേണം.

ആവശ്യമായ methods:

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

### ഓപ്ഷണൽ methods {#optional-methods}

കൂടുതൽ ഫീച്ചറുകൾ അൺലോക്ക് ചെയ്യാൻ ഇവ നടപ്പിലാക്കുക. `method_exists()` വഴി addon ഇതിന്റെ സപ്പോർട്ട് തിരിച്ചറിയുന്നു:

| Method | Unlocks |
|---|---|
| `supports_whois_privacy(): bool` | Product settings-ൽ WHOIS privacy ഓപ്ഷൻ |
| `enable_whois_privacy(string $domain_name): array` | രജിസ്ട്രേഷന്റെ സമയത്ത് ഓട്ടോമാറ്റിക്കായി privacy എനേബിൾ ചെയ്യുന്നു |
| `get_dns_records(string $domain_name): array` | Customer DNS view tab |
| `add_dns_record(string $domain_name, array $record_data): array` | Customer DNS records ചേർക്കാൻ കഴിയും |
| `update_dns_record(string $domain, string $record_id, array $record_data): array` | Customer DNS records എഡിറ്റ് ചെയ്യാൻ കഴിയും |
| `delete_dns_record(string $domain, string $record_id, array $data): array` | Customer DNS records ഡിലീറ്റ് ചെയ്യാൻ കഴിയും |
| `update_nameservers(string $domain_name, array $nameservers): array` | Nameserver management |
| `get_epp_code(string $domain_name): array` | Domain transfer (പുറത്തേക്ക്) |
| `transfer_domain(string $domain, string $auth_code, array $registrant_info, array $options): array` | Domain transfer (വരുന്ന വഴി) |

### Return value convention {#return-value-convention}

എല്ലാ methods-ഉം കുറഞ്ഞത് ഒരു `success` key ഉള്ള ഒരു array ആയിട്ടാണ് return ചെയ്യുന്നത്:

```php
// Success
return ['success' => true, 'data' => [...]];

// Failure
return ['success' => false, 'message' => 'Human-readable error'];
```

---

## നിങ്ങളുടെ capability രജിസ്റ്റർ ചെയ്യുന്നത് എങ്ങനെ {#registering-your-capability}

`wu_domain_seller_register_capabilities` action ഉപയോഗിച്ച് നിങ്ങളുടെ class രജിസ്റ്റർ ചെയ്യുക:

```php
add_action('wu_domain_seller_register_capabilities', function(\WP_Ultimo\Integrations\Integration_Registry $registry) {
    $registry->add_capability('my-registrar', new \My\Plugin\Capabilities\My_Registrar_Selling());
});
```

`add_capability()`-യുടെ ആദ്യ ആർഗ്യുമെന്റ് ആണ് **provider ID** — ഇത് ഒരു lowercase slug ആണ്. ഇത് നിങ്ങളുടെ രജിസ്ട്രാറിനെ settings, product configuration, കൂടാതെ log channels എന്നിവയിൽ തിരിച്ചറിയാൻ ഉപയോഗിക്കുന്നു. മറ്റൊരാൾ ഉപയോഗിക്കാത്ത ഒന്ന് ഉപയോഗിക്കുക (ഉദാഹരണത്തിന്, നിങ്ങളുടെ കമ്പനിയുടെ slug).

---

## wizard-ൽ credential field-കൾ ചേർക്കൽ {#adding-credential-fields-to-the-wizard}

അഡ്മിന് setup wizard വഴി credentials നൽകാൻ കഴിയണമെങ്കിൽ, നിങ്ങളുടെ ഇന്റഗ്രേഷൻ രജിസ്റ്റർ ചെയ്യുക:

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

Credentials field ID-കളെ keys ആയി ഉപയോഗിച്ച് network options ആയി സ്റ്റോർ ചെയ്യും. നിങ്ങളുടെ capability class-ൽ ഇത് `wu_get_setting('my_registrar_api_key')` ഉപയോഗിച്ച് വീണ്ടെടുക്കുക.

---

## post-registration actions-നുള്ള hooks {#hooks-for-post-registration-actions}

webhooks, provisioning, notifications, അല്ലെങ്കിൽ CRM updates എന്നിവ ട്രിigger ചെയ്യാൻ ഈ actions ഉപയോഗിക്കുക:

```php
// വിജയകരമായ domain രജിസ്ട്രേഷന് ശേഷം
add_action('wu_domain_registration_completed', function($payment, $registration_data, $result) {
    // $registration_data: domain_name, provider_id, years, expiry_date, customer_id
    // $result: raw registrar response
    my_crm_update_domain($registration_data['domain_name'], $registration_data['customer_id']);
}, 10, 3);

// രജിസ്ട്രേഷൻ പരാജയപ്പെട്ട ശേഷം
add_action('wu_domain_registration_failed', function($payment, $registration_data, $error_message) {
    my_alert_team("Domain registration failed: {$registration_data['domain_name']} — {$error_message}");
}, 10, 3);

// വിജയകരമായ renewal-ന് ശേഷം
add_action('wu_domain_renewal_completed', function($payment, $renewal_data, $result) {
    // നിങ്ങളുടെ ബില്ലിംഗ് സിസ്റ്റം അപ്ഡേറ്റ് ചെയ്യുക, ഒരു രസീത് അയക്കുക, തുടങ്ങിയവ.
}, 10, 3);

// renewal പരാജയപ്പെട്ട ശേഷം
add_action('wu_domain_renewal_failed', function($payment, $renewal_data, $error_message) {
    // Alert, retry logic, തുടങ്ങിയവ.
}, 10, 3);

// domain transfer പൂർത്തിയാകുമ്പോൾ
add_action('wu_domain_transfer_completed', function($domain, $transfer_data) {
    // $domain എന്നത് ഒരു WP_Ultimo\Models\Domain object ആണ്
}, 10, 2);

// SES DKIM verification-ന് ശേഷം (SES integration active ആണെങ്കിൽ)
add_action('wu_domain_ses_verified', function($domain) {
    // $domain എന്നത് ഒരു WP_Ultimo\Models\Domain object ആണ്
});
```

---

## Logging {#logging}

`wu_log_add()` ഉപയോഗിച്ച് നിങ്ങളുടെ provider-specific log channel-ൽ എഴുതുക:

```php
wu_log_add('domain-seller-my-registrar', "Registered {$domain_name} successfully", 'info');
wu_log_add('domain-seller-my-registrar', "Registration failed: {$error}", 'error');
```

Logs **Network Admin › Ultimate Multisite › Logs › domain-seller-my-registrar** എന്നതിൽ കാണാം.
