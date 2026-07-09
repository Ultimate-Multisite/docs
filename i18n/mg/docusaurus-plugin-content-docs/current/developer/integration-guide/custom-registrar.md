---
title: Fananganana fampidirana mpisoratra anarana namboarina manokana
sidebar_position: 10
_i18n_hash: ee4c4ad8a1defe5760fd09b8f173ef7d
---
# Fananganana Fampidirana Registrar Manokana

Ny Domain Seller addon dia mampiasa lamina **Integration Registry**. Ny registrar tsirairay dia class PHP izay mampihatra `Domain_Selling_Capability` ary manoratra ny tenany amin’ny alalan’ny action hook `wu_domain_seller_register_capabilities`.

Ity torolalana ity dia mampiseho ny fomba hampifandraisana registrar manokana.

## Ny interface

Ny class-nao dia tsy maintsy mampihatra `WP_Ultimo\Integrations\Capabilities\Domain_Selling_Capability` ary manitatra `WP_Ultimo\Integrations\Base_Capability_Module`.

Fomba takiana:

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

### Fomba tsy voatery

Ampiharo ireto mba hanokafana endri-javatra fanampiny. Ny addon dia mamantatra ny fanohanana amin’ny alalan’ny `method_exists()`:

| Method | Zavatra sokafany |
|---|---|
| `supports_whois_privacy(): bool` | Safidy tsiambaratelo WHOIS ao amin’ny firafitry ny vokatra |
| `enable_whois_privacy(string $domain_name): array` | Mampihetsika ho azy ny tsiambaratelo rehefa misoratra anarana |
| `get_dns_records(string $domain_name): array` | Kiheba fijery DNS ho an’ny mpanjifa |
| `add_dns_record(string $domain_name, array $record_data): array` | Afaka manampy rakitra DNS ny mpanjifa |
| `update_dns_record(string $domain, string $record_id, array $record_data): array` | Afaka manitsy rakitra DNS ny mpanjifa |
| `delete_dns_record(string $domain, string $record_id, array $data): array` | Afaka mamafa rakitra DNS ny mpanjifa |
| `update_nameservers(string $domain_name, array $nameservers): array` | Fitantanana nameserver |
| `get_epp_code(string $domain_name): array` | Famindrana domain (mivoaka) |
| `transfer_domain(string $domain, string $auth_code, array $registrant_info, array $options): array` | Famindrana domain (miditra) |

### Fomba fanao amin’ny sanda averina

Ny fomba rehetra dia mamerina array iray izay ahitana farafahakeliny key `success`:

```php
// Success
return ['success' => true, 'data' => [...]];

// Failure
return ['success' => false, 'message' => 'Human-readable error'];
```

---

## Fisoratana ny capability-nao

Soraty ny class-nao amin’ny fampiasana ny action `wu_domain_seller_register_capabilities`:

```php
add_action('wu_domain_seller_register_capabilities', function(\WP_Ultimo\Integrations\Integration_Registry $registry) {
    $registry->add_capability('my-registrar', new \My\Plugin\Capabilities\My_Registrar_Selling());
});
```

Ny argument voalohany amin’ny `add_capability()` dia ny **provider ID** — slug litera madinika ampiasaina hamantarana ny registrar-nao ao amin’ny firafitra, fandrindrana vokatra, ary fantsona log. Mampiasà zavatra tokana (ohatra, slug an’ny orinasanao).

---

## Fanampiana saha credential amin’ny wizard

Mba hahafahan’ny admins mampiditra credentials amin’ny alalan’ny setup wizard, soraty ny integration-nao:

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

Tehirizina ho network options ny credentials amin’ny fampiasana ny ID-n’ny saha ho key. Alao ao amin’ny class capability-nao izy ireo amin’ny `wu_get_setting('my_registrar_api_key')`.

---

## Hooks ho an’ny asa aorian’ny fisoratana anarana

Ampiasao ireto actions ireto hanentanana webhooks, provisioning, fampahafantarana, na fanavaozana CRM:

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

## Fandraketana log

Soraty ao amin’ny fantsona log manokana ho an’ny provider-nao amin’ny fampiasana `wu_log_add()`:

```php
wu_log_add('domain-seller-my-registrar', "Registered {$domain_name} successfully", 'info');
wu_log_add('domain-seller-my-registrar', "Registration failed: {$error}", 'error');
```

Miseho eo ambanin’ny **Fitantanana Tambajotra › Ultimate Multisite › Log › domain-seller-my-registrar** ny log.
