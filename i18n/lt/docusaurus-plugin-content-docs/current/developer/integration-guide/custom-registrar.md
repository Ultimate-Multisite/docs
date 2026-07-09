---
title: Pasirinktinės registratoriaus integracijos kūrimas
sidebar_position: 10
_i18n_hash: ee4c4ad8a1defe5760fd09b8f173ef7d
---
# Pasirinktinės registratoriaus integracijos kūrimas {#building-a-custom-registrar-integration}

Domain Seller priedas naudoja **Integration Registry** modelį. Kiekvienas registratorius yra PHP klasė, kuri įgyvendina `Domain_Selling_Capability` ir užregistruoja save per `wu_domain_seller_register_capabilities` veiksmo hook.

Šis vadovas parodo, kaip prijungti pasirinktinį registratorių.

## Sąsaja {#the-interface}

Jūsų klasė turi įgyvendinti `WP_Ultimo\Integrations\Capabilities\Domain_Selling_Capability` ir išplėsti `WP_Ultimo\Integrations\Base_Capability_Module`.

Privalomi metodai:

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

### Pasirenkami metodai {#optional-methods}

Įgyvendinkite juos, kad atrakintumėte papildomas funkcijas. Priedas aptinka palaikymą per `method_exists()`:

| Metodas | Atrakina |
|---|---|
| `supports_whois_privacy(): bool` | WHOIS privatumo parinktis produkto nustatymuose |
| `enable_whois_privacy(string $domain_name): array` | Automatiškai įjungia privatumą registracijos metu |
| `get_dns_records(string $domain_name): array` | Kliento DNS peržiūros skirtukas |
| `add_dns_record(string $domain_name, array $record_data): array` | Klientas gali pridėti DNS įrašus |
| `update_dns_record(string $domain, string $record_id, array $record_data): array` | Klientas gali redaguoti DNS įrašus |
| `delete_dns_record(string $domain, string $record_id, array $data): array` | Klientas gali ištrinti DNS įrašus |
| `update_nameservers(string $domain_name, array $nameservers): array` | Nameserver valdymas |
| `get_epp_code(string $domain_name): array` | Domeno perkėlimas (išeinantis) |
| `transfer_domain(string $domain, string $auth_code, array $registrant_info, array $options): array` | Domeno perkėlimas (įeinantis) |

### Grąžinamos reikšmės konvencija {#return-value-convention}

Visi metodai grąžina masyvą, kuriame bent jau yra `success` raktas:

```php
// Success
return ['success' => true, 'data' => [...]];

// Failure
return ['success' => false, 'message' => 'Human-readable error'];
```

---

## Jūsų capability registravimas {#registering-your-capability}

Užregistruokite savo klasę naudodami `wu_domain_seller_register_capabilities` veiksmą:

```php
add_action('wu_domain_seller_register_capabilities', function(\WP_Ultimo\Integrations\Integration_Registry $registry) {
    $registry->add_capability('my-registrar', new \My\Plugin\Capabilities\My_Registrar_Selling());
});
```

Pirmasis `add_capability()` argumentas yra **teikėjo ID** — mažosiomis raidėmis rašomas slug, naudojamas jūsų registratoriui identifikuoti nustatymuose, produkto konfigūracijoje ir žurnalų kanaluose. Naudokite ką nors unikalaus (pvz., savo įmonės slug).

---

## Kredencialų laukų pridėjimas į vedlį {#adding-credential-fields-to-the-wizard}

Kad administratoriai galėtų įvesti kredencialus per sąrankos vedlį, užregistruokite savo integraciją:

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

Kredencialai saugomi kaip tinklo parinktys, naudojant laukų ID kaip raktus. Gaukite juos savo capability klasėje su `wu_get_setting('my_registrar_api_key')`.

---

## Hookai veiksmams po registracijos {#hooks-for-post-registration-actions}

Naudokite šiuos veiksmus, kad paleistumėte webhooks, parengimą, pranešimus arba CRM atnaujinimus:

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

## Žurnalizavimas {#logging}

Rašykite į savo tiekėjui skirtą žurnalo kanalą naudodami `wu_log_add()`:

```php
wu_log_add('domain-seller-my-registrar', "Registered {$domain_name} successfully", 'info');
wu_log_add('domain-seller-my-registrar', "Registration failed: {$error}", 'error');
```

Žurnalai rodomi skiltyje **Tinklo administravimas › Ultimate Multisite › Žurnalai › domain-seller-my-registrar**.
