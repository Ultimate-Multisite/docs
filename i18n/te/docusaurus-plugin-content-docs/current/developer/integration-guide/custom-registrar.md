---
title: కస్టమ్ రిజిస్ట్రార్ ఇంటిగ్రేషన్‌ను నిర్మించడం
sidebar_position: 10
_i18n_hash: ee4c4ad8a1defe5760fd09b8f173ef7d
---
# కస్టమ్ రిజిస్ట్రార్ ఇంటిగ్రేషన్‌ను నిర్మించడం

Domain Seller addon అనేది ఒక **Integration Registry** పద్ధతిని ఉపయోగిస్తుంది. ప్రతి రిజిస్ట్రార్ అనేది `Domain_Selling_Capability` ను అమలు చేసే ఒక PHP class. ఇది `wu_domain_seller_register_capabilities` అనే action hook ద్వారా తనను తాను రిజిస్టర్ చేసుకుంటుంది.

కస్టమ్ రిజిస్ట్రార్‌ను ఎలా కనెక్ట్ చేయాలో ఈ గైడ్ వివరిస్తుంది.

## ఇంటర్‌ఫేస్ (The interface)

మీ class తప్పనిసరిగా `WP_Ultimo\Integrations\Capabilities\Domain_Selling_Capability` ను అమలు చేయాలి మరియు `WP_Ultimo\Integrations\Base_Capability_Module` ను extend చేయాలి.

అవసరమైన methods:

```php
namespace My\Plugin\Capabilities;

use WP_Ultimo\Integrations\Base_Capability_Module;
use WP_Ultimo\Integrations\Capabilities\Domain_Selling_Capability;

class My_Registrar_Selling extends Base_Capability_Module implements Domain_Selling_Capability {

    // --- అవసరమైన identity methods (Base_Capability_Module నుండి) ---

    public function get_capability_id(): string {
        return 'domain-selling';  // ఎప్పుడూ 'domain-selling' మాత్రమే
    }

    public function get_title(): string {
        return __('Domain Selling', 'my-plugin');
    }

    public function get_explainer_lines(): array {
        return [
            'will'     => [__('My Registrar ద్వారా డొమైన్ రిజిస్ట్రేషన్ ఎనేబుల్ చేయబడుతుంది.', 'my-plugin')],
            'will_not' => [],
        ];
    }

    // --- ప్రధాన అవసరమైన methods (Domain_Selling_Capability నుండి) ---

    /** అందుబాటులో ఉన్న అన్ని TLDలు మరియు హోల్‌సేల్ ధరలను సింక్ చేయండి. */
    public function sync_tlds(): array { ... }

    /** $domain_name లభ్యతను $tlds అంతటా తనిఖీ చేయండి. */
    public function search_domains(string $domain_name, array $tlds = []): array { ... }

    /** N సంవత్సరాల కోసం TLDకి హోల్‌సేల్ ధరను పొందండి. */
    public function get_domain_pricing(string $tld, int $years = 1): array { ... }

    /** డొమైన్‌ను రిజిస్టర్ చేయండి. విజయం అయితే ['success' => true, 'expiry_date' => '...'] ను తిరిగి ఇస్తుంది. */
    public function register_domain(string $domain_name, array $registrant_info, int $years = 1): array { ... }

    /** డొమైన్‌ను N సంవత్సరాల కోసం రిన్యూవల్ చేయండి. */
    public function renew_domain(string $domain_name, int $years = 1): array { ... }

    /** రిజిస్ట్రేషన్ స్టేటస్, expiry date, nameservers పొందండి. */
    public function get_domain_info(string $domain_name): array { ... }

    /** API credentials మరియు కనెక్టివిటీని పరీక్షించండి. */
    public function test_connection(): array { ... }
}
```

### ఐచ్ఛిక methods (Optional methods)

అదనపు ఫీచర్‌లను అన్‌లాక్ చేయడానికి వీటిని అమలు చేయండి. addon, `method_exists()` ద్వారా సపోర్ట్‌ను గుర్తిస్తుంది:

| Method | అన్‌లాక్ చేస్తుంది |
|---|---|
| `supports_whois_privacy(): bool` | ఉత్పత్తి సెట్టింగ్‌లలో WHOIS privacy option |
| `enable_whois_privacy(string $domain_name): array` | రిజిస్ట్రేషన్‌లో ఆటోమేటిక్‌గా privacy ఎనేబుల్ చేయడం |
| `get_dns_records(string $domain_name): array` | కస్టమర్ DNS view tab |
| `add_dns_record(string $domain_name, array $record_data): array` | కస్టమర్ DNS records జోడించగలరు |
| `update_dns_record(string $domain, string $record_id, array $record_data): array` | కస్టమర్ DNS records ఎడిట్ చేయగలరు |
| `delete_dns_record(string $domain, string $record_id, array $data): array` | కస్టమర్ DNS records తొలగించగలరు |
| `update_nameservers(string $domain_name, array $nameservers): array` | Nameserver నిర్వహణ |
| `get_epp_code(string $domain_name): array` | డొమైన్ ట్రాన్స్‌ఫర్ (బయటికి) |
| `transfer_domain(string $domain, string $auth_code, array $registrant_info, array $options): array` | డొమైన్ ట్రాన్స్‌ఫర్ (లోపలికి) |

### రిటర్న్ విలువ కన్వెన్షన్ (Return value convention)

అన్ని methods కనీసం `success` key తో ఒక array ను తిరిగి ఇస్తాయి:

```php
// విజయం (Success)
return ['success' => true, 'data' => [...]];

// విఫలం (Failure)
return ['success' => false, 'message' => 'మానవచదవగలిగే లోపం'];
```

---

## మీ capability ను రిజిస్టర్ చేయడం (Registering your capability)

మీ class ను `wu_domain_seller_register_capabilities` action ఉపయోగించి రిజిస్టర్ చేయండి:

```php
add_action('wu_domain_seller_register_capabilities', function(\WP_Ultimo\Integrations\Integration_Registry $registry) {
    $registry->add_capability('my-registrar', new \My\Plugin\Capabilities\My_Registrar_Selling());
});
```

`add_capability()` కు మొదటి argument అనేది **provider ID** — ఇది settings, product configuration, మరియు log channels లో మీ రిజిస్ట్రార్‌ను గుర్తించడానికి ఉపయోగించే lowercase slug. ప్రత్యేకమైనదాన్ని ఉపయోగించండి (ఉదాహరణకు, మీ కంపెనీ slug).

---

## విజర్డ్‌కు credential fields జోడించడం (Adding credential fields to the wizard)

అడ్మిన్‌లు సెటప్ విజర్డ్ ద్వారా credentials ఎంటర్ చేయడానికి, మీ ఇంటిగ్రేషన్‌ను రిజిస్టర్ చేయండి:

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

Credentials లను field IDs ను keys గా ఉపయోగించి network options గా స్టోర్ చేస్తారు. వీటిని మీ capability class లో `wu_get_setting('my_registrar_api_key')` తో తిరిగి పొందవచ్చు.

---

## పోస్ట్-రిజిస్ట్రేషన్ చర్యల కోసం hooks (Hooks for post-registration actions)

webhooks, provisioning, నోటిఫికేషన్లు, లేదా CRM అప్‌డేట్‌లను ట్రిగ్గర్ చేయడానికి ఈ actions లను ఉపయోగించండి:

```php
// డొమైన్ రిజిస్ట్రేషన్ విజయవంతం అయిన తర్వాత
add_action('wu_domain_registration_completed', function($payment, $registration_data, $result) {
    // $registration_data: domain_name, provider_id, years, expiry_date, customer_id
    // $result: raw registrar response
    my_crm_update_domain($registration_data['domain_name'], $registration_data['customer_id']);
}, 10, 3);

// రిజిస్ట్రేషన్ విఫలమైన తర్వాత
add_action('wu_domain_registration_failed', function($payment, $registration_data, $error_message) {
    my_alert_team("Domain registration failed: {$registration_data['domain_name']} — {$error_message}");
}, 10, 3);

// రిన్యూవల్ విజయవంతం అయిన తర్వాత
add_action('wu_domain_renewal_completed', function($payment, $renewal_data, $result) {
    // మీ బిల్లింగ్ సిస్టమ్‌ను అప్‌డేట్ చేయండి, రసీదు పంపండి, మొదలైనవి.
}, 10, 3);

// రిన్యూవల్ విఫలమైన తర్వాత
add_action('wu_domain_renewal_failed', function($payment, $renewal_data, $error_message) {
    // అలర్ట్, retry logic, మొదలైనవి.
}, 10, 3);

// డొమైన్ ట్రాన్స్‌ఫర్ పూర్తయిన తర్వాత
add_action('wu_domain_transfer_completed', function($domain, $transfer_data) {
    // $domain అనేది ఒక WP_Ultimo\Models\Domain object
}, 10, 2);

// SES DKIM verification పూర్తయిన తర్వాత (SES integration active అయితే)
add_action('wu_domain_ses_verified', function($domain) {
    // $domain అనేది ఒక WP_Ultimo\Models\Domain object
});
```

---

## లాగింగ్ (Logging)

`wu_log_add()` ఉపయోగించి మీ provider-specific log channel లో రాయండి:

```php
wu_log_add('domain-seller-my-registrar', "Registered {$domain_name} successfully", 'info');
wu_log_add('domain-seller-my-registrar', "Registration failed: {$error}", 'error');
```

Logs లు **Network Admin › Ultimate Multisite › Logs › domain-seller-my-registrar** కింద కనిపిస్తాయి.
