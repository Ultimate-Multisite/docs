---
title: Opbygning af en brugerdefineret registrar-integration
sidebar_position: 10
_i18n_hash: ee4c4ad8a1defe5760fd09b8f173ef7d
---
# Opbygning af en brugerdefineret registrar-integration

Domain Seller addon bruger et **Integration Registry**-mønster. Hver registrar er en PHP-klasse, der implementerer `Domain_Selling_Capability` og registrerer sig selv via action hooket `wu_domain_seller_register_capabilities`.

Denne guide viser, hvordan du tilslutter en brugerdefineret registrar.

## Interfacet {#the-interface}

Din klasse skal implementere `WP_Ultimo\Integrations\Capabilities\Domain_Selling_Capability` og udvide `WP_Ultimo\Integrations\Base_Capability_Module`.

Påkrævede metoder:

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

### Valgfri metoder {#optional-methods}

Implementér disse for at låse op for yderligere funktioner. Addon'et registrerer understøttelse via `method_exists()`:

| Metode | Låser op for |
|---|---|
| `supports_whois_privacy(): bool` | WHOIS-privatlivsindstilling i produktindstillinger |
| `enable_whois_privacy(string $domain_name): array` | Aktiverer automatisk privatliv ved registrering |
| `get_dns_records(string $domain_name): array` | Kundens DNS-visningsfane |
| `add_dns_record(string $domain_name, array $record_data): array` | Kunden kan tilføje DNS-poster |
| `update_dns_record(string $domain, string $record_id, array $record_data): array` | Kunden kan redigere DNS-poster |
| `delete_dns_record(string $domain, string $record_id, array $data): array` | Kunden kan slette DNS-poster |
| `update_nameservers(string $domain_name, array $nameservers): array` | Håndtering af navneservere |
| `get_epp_code(string $domain_name): array` | Domæneoverførsel (udgående) |
| `transfer_domain(string $domain, string $auth_code, array $registrant_info, array $options): array` | Domæneoverførsel (indgående) |

### Konvention for returværdi {#return-value-convention}

Alle metoder returnerer et array med mindst en `success`-nøgle:

```php
// Success
return ['success' => true, 'data' => [...]];

// Failure
return ['success' => false, 'message' => 'Human-readable error'];
```

---

## Registrering af din capability {#registering-your-capability}

Registrér din klasse ved hjælp af actionen `wu_domain_seller_register_capabilities`:

```php
add_action('wu_domain_seller_register_capabilities', function(\WP_Ultimo\Integrations\Integration_Registry $registry) {
    $registry->add_capability('my-registrar', new \My\Plugin\Capabilities\My_Registrar_Selling());
});
```

Det første argument til `add_capability()` er **provider ID** — en slug med små bogstaver, der bruges til at identificere din registrar i indstillinger, produktkonfiguration og logkanaler. Brug noget unikt (f.eks. din virksomheds slug).

---

## Tilføjelse af credential-felter til wizarden {#adding-credential-fields-to-the-wizard}

For at lade admins indtaste credentials via setup wizarden skal du registrere din integration:

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

Credentials gemmes som netværksindstillinger med felt-ID'erne som nøgler. Hent dem i din capability-klasse med `wu_get_setting('my_registrar_api_key')`.

---

## Hooks til handlinger efter registrering {#hooks-for-post-registration-actions}

Brug disse actions til at udløse webhooks, provisionering, notifikationer eller CRM-opdateringer:

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

## Logning {#logging}

Skriv til din udbyderspecifikke logkanal med `wu_log_add()`:

```php
wu_log_add('domain-seller-my-registrar', "Registered {$domain_name} successfully", 'info');
wu_log_add('domain-seller-my-registrar', "Registration failed: {$error}", 'error');
```

Logs vises under **Network Admin › Ultimate Multisite › Logs › domain-seller-my-registrar**.
