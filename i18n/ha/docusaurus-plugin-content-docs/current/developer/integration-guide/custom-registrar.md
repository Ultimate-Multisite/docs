---
title: Gina Haɗin Kai na Mai Rajista na Musamman
sidebar_position: 10
_i18n_hash: ee4c4ad8a1defe5760fd09b8f173ef7d
---
# Gina Haɗin Registrar na Musamman {#building-a-custom-registrar-integration}

Addon na Domain Seller yana amfani da tsarin **Integration Registry**. Kowane registrar aji ne na PHP da ke aiwatar da `Domain_Selling_Capability` kuma yana yin rajistar kansa ta hanyar action hook na `wu_domain_seller_register_capabilities`.

Wannan jagorar tana nuna yadda ake haɗa registrar na musamman.

## Interface ɗin {#the-interface}

Ajinku dole ne ya aiwatar da `WP_Ultimo\Integrations\Capabilities\Domain_Selling_Capability` kuma ya faɗaɗa `WP_Ultimo\Integrations\Base_Capability_Module`.

Hanyoyin da ake buƙata:

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

### Hanyoyin zaɓi {#optional-methods}

Aiwatar da waɗannan don buɗe ƙarin fasaloli. Addon ɗin yana gano tallafi ta hanyar `method_exists()`:

| Method | Abin da yake buɗewa |
|---|---|
| `supports_whois_privacy(): bool` | Zaɓin sirrin WHOIS a saitunan samfur |
| `enable_whois_privacy(string $domain_name): array` | Yana kunna sirri ta atomatik yayin rajista |
| `get_dns_records(string $domain_name): array` | Shafin kallon DNS na abokin ciniki |
| `add_dns_record(string $domain_name, array $record_data): array` | Abokin ciniki zai iya ƙara bayanan DNS |
| `update_dns_record(string $domain, string $record_id, array $record_data): array` | Abokin ciniki zai iya gyara bayanan DNS |
| `delete_dns_record(string $domain, string $record_id, array $data): array` | Abokin ciniki zai iya share bayanan DNS |
| `update_nameservers(string $domain_name, array $nameservers): array` | Gudanar da nameserver |
| `get_epp_code(string $domain_name): array` | Canja wurin domain (mai fita) |
| `transfer_domain(string $domain, string $auth_code, array $registrant_info, array $options): array` | Canja wurin domain (mai shigowa) |

### Ka’idar ƙimar da ake mayarwa {#return-value-convention}

Duk hanyoyi suna mayar da array tare da aƙalla maɓallin `success`:

```php
// Success
return ['success' => true, 'data' => [...]];

// Failure
return ['success' => false, 'message' => 'Human-readable error'];
```

---

## Yin rajistar capability ɗinku {#registering-your-capability}

Yi rajistar ajinku ta amfani da action na `wu_domain_seller_register_capabilities`:

```php
add_action('wu_domain_seller_register_capabilities', function(\WP_Ultimo\Integrations\Integration_Registry $registry) {
    $registry->add_capability('my-registrar', new \My\Plugin\Capabilities\My_Registrar_Selling());
});
```

Muhawara ta farko ga `add_capability()` ita ce **provider ID** — slug mai ƙananan haruffa da ake amfani da shi don gano registrar ɗinku a cikin saituna, daidaitawar samfur, da tashoshin log. Yi amfani da wani abu na musamman (misali, slug na kamfaninku).

---

## Ƙara filayen bayanan shaida zuwa wizard {#adding-credential-fields-to-the-wizard}

Don barin admins su shigar da bayanan shaida ta hanyar setup wizard, yi rajistar haɗinku:

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

Ana adana bayanan shaida a matsayin network options ta amfani da ID na filaye a matsayin maɓallai. Dawo da su a cikin ajin capability ɗinku da `wu_get_setting('my_registrar_api_key')`.

---

## Hooks don ayyuka bayan rajista {#hooks-for-post-registration-actions}

Yi amfani da waɗannan actions don kunna webhooks, provisioning, sanarwa, ko sabuntawar CRM:

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

## Rajistar Ayyuka {#logging}

Rubuta zuwa tashar rajistar aiki ta musamman ga mai bayarwarka ta amfani da `wu_log_add()`:

```php
wu_log_add('domain-seller-my-registrar', "Registered {$domain_name} successfully", 'info');
wu_log_add('domain-seller-my-registrar', "Registration failed: {$error}", 'error');
```

Rajistan ayyuka suna bayyana a ƙarƙashin **Mai Gudanar da Network › Ultimate Multisite › Rajistan Ayyuka › domain-seller-my-registrar**.
