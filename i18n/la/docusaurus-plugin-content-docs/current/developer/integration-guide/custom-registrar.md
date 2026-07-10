---
title: Aedificatio Integrationis Registrarii Consuetudinariae
sidebar_position: 10
_i18n_hash: ee4c4ad8a1defe5760fd09b8f173ef7d
---
# Aedificatio Integrationis Registratoris Consuetudinariae {#building-a-custom-registrar-integration}

Additamentum Venditoris Dominiorum utitur forma **Registri Integrationum**. Unusquisque registrator est classis PHP quae `Domain_Selling_Capability` implet et se ipsam per hamum actionis `wu_domain_seller_register_capabilities` registrat.

Hic dux ostendit quomodo registratorem consuetudinarium conectere possis.

## Interfacies {#the-interface}

Classis tua `WP_Ultimo\Integrations\Capabilities\Domain_Selling_Capability` implere et `WP_Ultimo\Integrations\Base_Capability_Module` extendere debet.

Methodi requisitae:

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

### Methodi optionales {#optional-methods}

Has imple ut proprietates additas reseres. Additamentum subsidium per `method_exists()` detegit:

| Methodus | Reserat |
|---|---|
| `supports_whois_privacy(): bool` | Optio secreti WHOIS in configurationibus producti |
| `enable_whois_privacy(string $domain_name): array` | Secretum in registratione automatice activat |
| `get_dns_records(string $domain_name): array` | Tabula conspectus DNS emptoris |
| `add_dns_record(string $domain_name, array $record_data): array` | Emptor inscriptiones DNS addere potest |
| `update_dns_record(string $domain, string $record_id, array $record_data): array` | Emptor inscriptiones DNS recensere potest |
| `delete_dns_record(string $domain, string $record_id, array $data): array` | Emptor inscriptiones DNS delere potest |
| `update_nameservers(string $domain_name, array $nameservers): array` | Administratio nameserver |
| `get_epp_code(string $domain_name): array` | Translatio dominii (exiens) |
| `transfer_domain(string $domain, string $auth_code, array $registrant_info, array $options): array` | Translatio dominii (iniens) |

### Conventio valoris redditi {#return-value-convention}

Omnes methodi indicem reddunt qui saltem clavem `success` continet:

```php
// Success
return ['success' => true, 'data' => [...]];

// Failure
return ['success' => false, 'message' => 'Human-readable error'];
```

---

## Facultatem tuam registrare {#registering-your-capability}

Classim tuam registra actione `wu_domain_seller_register_capabilities` utens:

```php
add_action('wu_domain_seller_register_capabilities', function(\WP_Ultimo\Integrations\Integration_Registry $registry) {
    $registry->add_capability('my-registrar', new \My\Plugin\Capabilities\My_Registrar_Selling());
});
```

Primum argumentum ad `add_capability()` est **ID praebitoris** — slug litteris minusculis scriptus quo registrator tuus in configurationibus, configuratione producti, et canalibus actorum identificatur. Utere aliquo unico (exempli gratia, slug societatis tuae).

---

## Campis credentialium ad magum additis {#adding-credential-fields-to-the-wizard}

Ut administratores credentialia per magum configurationis inserere possint, integrationem tuam registra:

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

Credentialia servantur ut optiones retiaculi, IDs camporum pro clavibus adhibitis. Ea in classe facultatis tuae recupera cum `wu_get_setting('my_registrar_api_key')`.

---

## Hami pro actionibus post-registrationem {#hooks-for-post-registration-actions}

Utere his actionibus ut webhooks, apparatum, notificationes, aut renovationes CRM excites:

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

## Actorum conscriptio {#logging}

Scribe in canalem actorum provisori tuo proprium per `wu_log_add()`:

```php
wu_log_add('domain-seller-my-registrar', "Registered {$domain_name} successfully", 'info');
wu_log_add('domain-seller-my-registrar', "Registration failed: {$error}", 'error');
```

Acta apparent sub **Administratio Retiaria › Ultimate Multisite › Acta › domain-seller-my-registrar**.
