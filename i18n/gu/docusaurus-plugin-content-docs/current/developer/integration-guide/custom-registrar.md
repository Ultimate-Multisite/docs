---
title: કસ્ટમ રજિસ્ટ્રાર એકીકરણનું નિર્માણ
sidebar_position: 10
_i18n_hash: ee4c4ad8a1defe5760fd09b8f173ef7d
---
# કસ્ટમ રજિસ્ટ્રાર ઇન્ટિગ્રેશન બનાવવું

ડોમેન સેલર એડઓન (Domain Seller addon) એક **Integration Registry** પેટર્નનો ઉપયોગ કરે છે. દરેક રજિસ્ટ્રાર એક PHP class હોય છે જે `Domain_Selling_Capability` ને implement કરે છે અને `wu_domain_seller_register_capabilities` action hook દ્વારા પોતાને રજીસ્ટર કરે છે.

આ ગાઇડમાં બતાવીશું કે કસ્ટમ રજિસ્ટ્રાર કેવી રીતે જોડવો.

## ઇન્ટરફેસ (The interface) {#the-interface}

તમારે તમારા class માં `WP_Ultimo\Integrations\Capabilities\Domain_Selling_Capability` ને implement કરવું પડશે અને `WP_Ultimo\Integrations\Base_Capability_Module` ને extend કરવું પડશે.

જરૂરી methods:

```php
namespace My\Plugin\Capabilities;

use WP_Ultimo\Integrations\Base_Capability_Module;
use WP_Ultimo\Integrations\Capabilities\Domain_Selling_Capability;

class My_Registrar_Selling extends Base_Capability_Module implements Domain_Selling_Capability {

    // --- જરૂરી identity methods (Base_Capability_Module માંથી) ---

    public function get_capability_id(): string {
        return 'domain-selling';  // હંમેશા 'domain-selling'
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

    // --- મુખ્ય જરૂરી methods (Domain_Selling_Capability માંથી) ---

    /** ઉપલબ્ધ બધા TLDs અને wholesale pricing ખેંચો. */
    public function sync_tlds(): array { ... }

    /** $domain_name ની $tlds માં ઉપલબ્ધતા તપાસો. */
    public function search_domains(string $domain_name, array $tlds = []): array { ... }

    /** N વર્ષ માટે TLD નું wholesale price મેળવો. */
    public function get_domain_pricing(string $tld, int $years = 1): array { ... }

    /** ડોમેન રજીસ્ટર કરો. સફળતા પર ['success' => true, 'expiry_date' => '...'] પરત કરે છે. */
    public function register_domain(string $domain_name, array $registrant_info, int $years = 1): array { ... }

    /** N વર્ષ માટે ડોમેન રિન્યુ કરો. */
    public function renew_domain(string $domain_name, int $years = 1): array { ... }

    /** રજીસ્ટ્રેશન સ્ટેટસ, expiry date, nameservers મેળવો. */
    public function get_domain_info(string $domain_name): array { ... }

    /** API credentials અને connectivity નું પરીક્ષણ કરો. */
    public function test_connection(): array { ... }
}
```

### વૈકલ્પિક methods (Optional methods) {#optional-methods}

વધારાની સુવિધાઓને અનલૉક કરવા માટે આને implement કરો. એડઓન `method_exists()` દ્વારા સપોર્ટ તપાસે છે:

| Method | શું અનલૉક કરે છે |
|---|---|
| `supports_whois_privacy(): bool` | પ્રોડક્ટ સેટિંગ્સમાં WHOIS privacy option |
| `enable_whois_privacy(string $domain_name): array` | રજીસ્ટ્રેશન સમયે ઓટોમેટિક privacy enable કરવું |
| `get_dns_records(string $domain_name): array` | ગ્રાહક DNS view tab |
| `add_dns_record(string $domain_name, array $record_data): array` | ગ્રાહક DNS records ઉમેરી શકે છે |
| `update_dns_record(string $domain, string $record_id, array $record_data): array` | ગ્રાહક DNS records edit કરી શકે છે |
| `delete_dns_record(string $domain, string $record_id, array $data): array` | ગ્રાહક DNS records delete કરી શકે છે |
| `update_nameservers(string $domain_name, array $nameservers): array` | Nameserver management |
| `get_epp_code(string $domain_name): array` | ડોમેન ટ્રાન્સફર (જતી રહેલું) |
| `transfer_domain(string $domain, string $auth_code, array $registrant_info, array $options): array` | ડોમેન ટ્રાન્સફર (આવતું) |

### return value convention {#return-value-convention}

બધા methods એક array return કરે છે જેમાં ઓછામાં ઓછા `success` key હોય છે:

```php
// સફળતા (Success)
return ['success' => true, 'data' => [...]];

// નિષ્ફળતા (Failure)
return ['success' => false, 'message' => 'Human-readable error'];
```

---

## તમારી capability રજીસ્ટર કરવી (Registering your capability) {#registering-your-capability}

તમારા class ને `wu_domain_seller_register_capabilities` action નો ઉપયોગ કરીને રજીસ્ટર કરો:

```php
add_action('wu_domain_seller_register_capabilities', function(\WP_Ultimo\Integrations\Integration_Registry $registry) {
    $registry->add_capability('my-registrar', new \My\Plugin\Capabilities\My_Registrar_Selling());
});
```

`add_capability()` નો પહેલો argument **provider ID** છે — આ એક lowercase slug છે જેનો ઉપયોગ સેટિંગ્સ, પ્રોડક્ટ કન્ફિગરેશન અને log channels માં તમારા રજિસ્ટ્રારને ઓળખવા માટે થાય છે. કંઈક યુનિક (દા.ત., તમારી કંપનીનો slug) નો ઉપયોગ કરો.

---

## wizard માં credential fields ઉમેરવા (Adding credential fields to the wizard) {#adding-credential-fields-to-the-wizard}

એડમિનને સેટઅપ wizard દ્વારા credentials દાખલ કરવા દેવા માટે, તમારું ઇન્ટિગ્રેશન રજીસ્ટર કરો:

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

Credentials ને field IDs ને keys તરીકે વાપરતા network options તરીકે સ્ટોર કરવામાં આવે છે. તેમને તમારી capability class માં `wu_get_setting('my_registrar_api_key')` સાથે મેળવો.

---

## post-registration actions માટે hooks (Hooks for post-registration actions) {#hooks-for-post-registration-actions}

webhooks, provisioning, notifications, અથવા CRM updates ટ્રિગર કરવા માટે આ actions નો ઉપયોગ કરો:

```php
// સફળ ડોમેન રજીસ્ટ્રેશન પછી
add_action('wu_domain_registration_completed', function($payment, $registration_data, $result) {
    // $registration_data: domain_name, provider_id, years, expiry_date, customer_id
    // $result: raw registrar response
    my_crm_update_domain($registration_data['domain_name'], $registration_data['customer_id']);
}, 10, 3);

// રજીસ્ટ્રેશન નિષ્ફળ જાય પછી
add_action('wu_domain_registration_failed', function($payment, $registration_data, $error_message) {
    my_alert_team("Domain registration failed: {$registration_data['domain_name']} — {$error_message}");
}, 10, 3);

// સફળ રિન્યુઅલ પછી
add_action('wu_domain_renewal_completed', function($payment, $renewal_data, $result) {
    // તમારા બિલિંગ સિસ્ટમને અપડેટ કરો, રસીદ મોકલો, વગેરે.
}, 10, 3);

// રિન્યુઅલ નિષ્ફળ જાય પછી
add_action('wu_domain_renewal_failed', function($payment, $renewal_data, $error_message) {
    // એલર્ટ કરો, retry logic, વગેરે.
}, 10, 3);

// ડોમેન ટ્રાન્સફર પૂર્ણ થયા પછી
add_action('wu_domain_transfer_completed', function($domain, $transfer_data) {
    // $domain એ એક WP_Ultimo\Models\Domain object છે
}, 10, 2);

// SES DKIM verification પછી (જો SES integration active હોય)
add_action('wu_domain_ses_verified', function($domain) {
    // $domain એ એક WP_Ultimo\Models\Domain object છે
});
```

---

## લોગિંગ (Logging) {#logging}

`wu_log_add()` નો ઉપયોગ કરીને તમારા provider-specific log channel માં લખો:

```php
wu_log_add('domain-seller-my-registrar', "Registered {$domain_name} successfully", 'info');
wu_log_add('domain-seller-my-registrar', "Registration failed: {$error}", 'error');
```

Logs **Network Admin › Ultimate Multisite › Logs › domain-seller-my-registrar** હેઠળ દેખાશે.
