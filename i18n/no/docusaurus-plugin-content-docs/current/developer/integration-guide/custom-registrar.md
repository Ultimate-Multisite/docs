---
title: Å bygge en tilpasset registrar-integrasjon
sidebar_position: 10
_i18n_hash: ee4c4ad8a1defe5760fd09b8f173ef7d
---
# Bygge en tilpasset registrator-integrasjon {#building-a-custom-registrar-integration}

Domain Seller-tillegg bruker et **Integration Registry**-mønster. Hver registrator er en PHP-klasse som implementerer `Domain_Selling_Capability` og registrerer seg via `wu_domain_seller_register_capabilities` action hook.

Denne guiden viser hvordan du kobler til en tilpasset registrator.

## Grensesnittet {#the-interface}

Klassen din må implementere `WP_Ultimo\Integrations\Capabilities\Domain_Selling_Capability` og arve fra `WP_Ultimo\Integrations\Base_Capability_Module`.

Nødvendige metoder:

```php
namespace My\Plugin\Capabilities;

use WP_Ultimo\Integrations\Base_Capability_Module;
use WP_Ultimo\Integrations\Capabilities\Domain_Selling_Capability;

class My_Registrar_Selling extends Base_Capability_Module implements Domain_Selling_Capability {

    // --- Nødvendige identitetsmetoder (fra Base_Capability_Module) ---

    public function get_capability_id(): string {
        return 'domain-selling';  // alltid 'domain-selling'
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

    // --- Kjernemessige nødvendige metoder (fra Domain_Selling_Capability) ---

    /** Henter alle tilgjengelige TLD-er og engrospriser. */
    public function sync_tlds(): array { ... }

    /** Sjekker tilgjengeligheten av $domain_name på tvers av $tlds. */
    public function search_domains(string $domain_name, array $tlds = []): array { ... }

    /** Henter engrospris for en TLD i N år. */
    public function get_domain_pricing(string $tld, int $years = 1): array { ... }

    /** Registrerer et domene. Returnerer ['success' => true, 'expiry_date' => '...'] ved suksess. */
    public function register_domain(string $domain_name, array $registrant_info, int $years = 1): array { ... }

    /** Fornyer et domene i N år. */
    public function renew_domain(string $domain_name, int $years = 1): array { ... }

    /** Henter registreringsstatus, utløpsdato og nameservere. */
    public function get_domain_info(string $domain_name): array { ... }

    /** Tester API-legitimasjon og tilkobling. */
    public function test_connection(): array { ... }
}
```

### Valgfrie metoder {#optional-methods}

Implementer disse for å låse opp ekstra funksjonalitet. Tillegget oppdager støtte via `method_exists()`:

| Metode | Låser opp |
|---|---|
| `supports_whois_privacy(): bool` | WHOIS-personvern-alternativ i produktinnstillingene |
| `enable_whois_privacy(string $domain_name): array` | Aktiverer personvern automatisk ved registrering |
| `get_dns_records(string $domain_name): array` | Kunde-DNS-visning fane |
| `add_dns_record(string $domain_name, array $record_data): array` | Kunden kan legge til DNS-oppføringer |
| `update_dns_record(string $domain, string $record_id, array $record_data): array` | Kunden kan redigere DNS-oppføringer |
| `delete_dns_record(string $domain, string $record_id, array $data): array` | Kunden kan slette DNS-oppføringer |
| `update_nameservers(string $domain_name, array $nameservers): array` | Nameserver-administrasjon |
| `get_epp_code(string $domain_name): array` | Domeneoverføring (utgående) |
| `transfer_domain(string $domain, string $auth_code, array $registrant_info, array $options): array` | Domeneoverføring (innkommende) |

### Returverdi-konvensjon {#return-value-convention}

Alle metoder returnerer et array som minimum inneholder en `success`-nøkkel:

```php
// Suksess
return ['success' => true, 'data' => [...]];

// Feil
return ['success' => false, 'message' => 'Enkel lesbar feilmelding'];
```

---

## Registrering av funksjonaliteten din {#registering-your-capability}

Registrer klassen din ved hjelp av `wu_domain_seller_register_capabilities` action:

```php
add_action('wu_domain_seller_register_capabilities', function(\WP_Ultimo\Integrations\Integration_Registry $registry) {
    $registry->add_capability('my-registrar', new \My\Plugin\Capabilities\My_Registrar_Selling());
});
```

Det første argumentet til `add_capability()` er **provider ID** — en liten bokstav-slug som brukes til å identifisere registratoren din i innstillingene, produktkonfigurasjonen og loggkanalene. Bruk noe unikt (f.eks. sluggen til selskapet ditt).

---

## Legge til legitimasjonsfelt i assistenten {#adding-credential-fields-to-the-wizard}

For å la administratorer legge inn legitimasjon gjennom oppsett-assistenten, registrerer du integrasjonen din:

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

Legitimasjonen lagres som nettverksalternativer ved hjelp av felt-ID-ene som nøkler. Hent dem i funksjonalitetsklassen din med `wu_get_setting('my_registrar_api_key')`.

---

## Hooks for handling etter registrering {#hooks-for-post-registration-actions}

Bruk disse actionene for å utløse webhooks, provisioning, varsler eller CRM-oppdateringer:

```php
// Etter vellykket domenergistrering
add_action('wu_domain_registration_completed', function($payment, $registration_data, $result) {
    // $registration_data: domain_name, provider_id, years, expiry_date, customer_id
    // $result: rå registrator-respons
    my_crm_update_domain($registration_data['domain_name'], $registration_data['customer_id']);
}, 10, 3);

// Etter registreringsfeil
add_action('wu_domain_registration_failed', function($payment, $registration_data, $error_message) {
    my_alert_team("Domain registration failed: {$registration_data['domain_name']} — {$error_message}");
}, 10, 3);

// Etter vellykket fornyelse
add_action('wu_domain_renewal_completed', function($payment, $renewal_data, $result) {
    // Oppdater betalingssystemet ditt, send kvittering, osv.
}, 10, 3);

// Etter fornyelsesfeil
add_action('wu_domain_renewal_failed', function($payment, $renewal_data, $error_message) {
    // Varsling, retry-logikk, osv.
}, 10, 3);

// Etter domeneoverføring er fullført
add_action('wu_domain_transfer_completed', function($domain, $transfer_data) {
    // $domain er et WP_Ultimo\Models\Domain objekt
}, 10, 2);

// Etter SES DKIM-verifisering (hvis SES-integrasjon er aktiv)
add_action('wu_domain_ses_verified', function($domain) {
    // $domain er et WP_Ultimo\Models\Domain objekt
});
```

---

## Logging {#logging}

Skriv til din leverandørspesifikke loggkanal ved hjelp av `wu_log_add()`:

```php
wu_log_add('domain-seller-my-registrar', "Registered {$domain_name} successfully", 'info');
wu_log_add('domain-seller-my-registrar', "Registration failed: {$error}", 'error');
```

Loggene vises under **Network Admin › Ultimate Multisite › Logs › domain-seller-my-registrar**.
