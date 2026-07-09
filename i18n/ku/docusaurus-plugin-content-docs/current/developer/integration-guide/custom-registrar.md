---
title: Avakirina Entegrasyoneke Registrar a Taybet
sidebar_position: 10
_i18n_hash: ee4c4ad8a1defe5760fd09b8f173ef7d
---
# Avakirina entegrasyona tomarkarekî taybet {#building-a-custom-registrar-integration}

Pêveka Domain Seller şêwaza **Integration Registry** bi kar tîne. Her tomarkar class-eke PHP ye ku `Domain_Selling_Capability` pêk tîne û xwe bi rêya hook-a kiryarê `wu_domain_seller_register_capabilities` tomar dike.

Ev rêber nîşan dide ka çawa tomarkarekî taybet girê bidî.

## Rûkar {#the-interface}

Class-a te divê `WP_Ultimo\Integrations\Capabilities\Domain_Selling_Capability` pêk bîne û `WP_Ultimo\Integrations\Base_Capability_Module` dirêj bike.

Rêbazên pêwîst:

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

### Rêbazên vebijarkî {#optional-methods}

Van pêk bîne da ku taybetmendiyên zêde vebin. Pêvek bi `method_exists()` piştgiriyê nas dike:

| Rêbaz | Tiştên ku vedike |
|---|---|
| `supports_whois_privacy(): bool` | Vebijarka taybetiya WHOIS di mîhengên berhemê de |
| `enable_whois_privacy(string $domain_name): array` | Di dema tomarkirinê de taybetiyê bixweber çalak dike |
| `get_dns_records(string $domain_name): array` | Taba dîtina DNS ya mişterî |
| `add_dns_record(string $domain_name, array $record_data): array` | Mişterî dikare tomarên DNS zêde bike |
| `update_dns_record(string $domain, string $record_id, array $record_data): array` | Mişterî dikare tomarên DNS biguherîne |
| `delete_dns_record(string $domain, string $record_id, array $data): array` | Mişterî dikare tomarên DNS jê bibe |
| `update_nameservers(string $domain_name, array $nameservers): array` | Rêvebirina nameserveran |
| `get_epp_code(string $domain_name): array` | Veguhestina domainê (derketî) |
| `transfer_domain(string $domain, string $auth_code, array $registrant_info, array $options): array` | Veguhestina domainê (hatinî) |

### Peymana nirxa vegerandinê {#return-value-convention}

Hemû rêbaz arrayekê vedigerînin ku herî kêm mifteya `success` tê de hebe:

```php
// Success
return ['success' => true, 'data' => [...]];

// Failure
return ['success' => false, 'message' => 'Human-readable error'];
```

---

## Tomarkirina şiyana xwe {#registering-your-capability}

Class-a xwe bi kiryara `wu_domain_seller_register_capabilities` tomar bike:

```php
add_action('wu_domain_seller_register_capabilities', function(\WP_Ultimo\Integrations\Integration_Registry $registry) {
    $registry->add_capability('my-registrar', new \My\Plugin\Capabilities\My_Registrar_Selling());
});
```

Argûmana yekem a `add_capability()` **provider ID** ye — slug-ek bi tîpên biçûk ku ji bo nasandina tomarkarê te di mîhengan, veavakirina berhemê û kanalên logê de tê bikaranîn. Tiştekî yekta bi kar bîne (mînak, slug-a şirketa xwe).

---

## Zêdekirina qadên agahiyên pejirandinê li wizardê {#adding-credential-fields-to-the-wizard}

Ji bo ku rêveber karibin agahiyên pejirandinê bi rêya wizard-a sazkarinê têxin, entegrasyona xwe tomar bike:

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

Agahiyên pejirandinê wekî vebijarkên torê bi ID-yên qadan wekî mifte tên hilanîn. Wan di class-a şiyana xwe de bi `wu_get_setting('my_registrar_api_key')` bistîne.

---

## Hook ji bo kiryarên piştî-tomarkirinê {#hooks-for-post-registration-actions}

Van kiryaran bi kar bîne da ku webhook, amade-kirin, agahdarkirin, an nûvekirinên CRMê bidî destpêkirin:

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

## Tomarkirin {#logging}

Bi karanîna `wu_log_add()` li kanala tomarê ya taybet a dabînkerê xwe binivîse:

```php
wu_log_add('domain-seller-my-registrar', "Registered {$domain_name} successfully", 'info');
wu_log_add('domain-seller-my-registrar', "Registration failed: {$error}", 'error');
```

Tomar li bin **Rêveberiya Torê › Ultimate Multisite › Tomar › domain-seller-my-registrar** xuya dibin.
