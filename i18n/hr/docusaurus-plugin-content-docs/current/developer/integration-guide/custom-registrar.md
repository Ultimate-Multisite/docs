---
title: Izrada prilagođene integracije registrara
sidebar_position: 10
_i18n_hash: ee4c4ad8a1defe5760fd09b8f173ef7d
---
# Izrada prilagođene integracije registrara

Domain Seller addon koristi obrazac **Integration Registry**. Svaki registrar je PHP klasa koja implementira `Domain_Selling_Capability` i registrira se putem action hooka `wu_domain_seller_register_capabilities`.

Ovaj vodič pokazuje kako povezati prilagođenog registrara.

## Sučelje {#the-interface}

Vaša klasa mora implementirati `WP_Ultimo\Integrations\Capabilities\Domain_Selling_Capability` i proširiti `WP_Ultimo\Integrations\Base_Capability_Module`.

Obavezne metode:

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

### Neobavezne metode {#optional-methods}

Implementirajte ih za otključavanje dodatnih značajki. Addon otkriva podršku putem `method_exists()`:

| Metoda | Otključava |
|---|---|
| `supports_whois_privacy(): bool` | WHOIS opcija privatnosti u postavkama proizvoda |
| `enable_whois_privacy(string $domain_name): array` | Automatski omogućuje privatnost pri registraciji |
| `get_dns_records(string $domain_name): array` | Kartica prikaza DNS-a za korisnika |
| `add_dns_record(string $domain_name, array $record_data): array` | Korisnik može dodavati DNS zapise |
| `update_dns_record(string $domain, string $record_id, array $record_data): array` | Korisnik može uređivati DNS zapise |
| `delete_dns_record(string $domain, string $record_id, array $data): array` | Korisnik može brisati DNS zapise |
| `update_nameservers(string $domain_name, array $nameservers): array` | Upravljanje nameserverima |
| `get_epp_code(string $domain_name): array` | Prijenos domene (odlazni) |
| `transfer_domain(string $domain, string $auth_code, array $registrant_info, array $options): array` | Prijenos domene (dolazni) |

### Konvencija povratne vrijednosti {#return-value-convention}

Sve metode vraćaju niz s najmanje ključem `success`:

```php
// Success
return ['success' => true, 'data' => [...]];

// Failure
return ['success' => false, 'message' => 'Human-readable error'];
```

---

## Registracija vaše capability {#registering-your-capability}

Registrirajte svoju klasu koristeći action `wu_domain_seller_register_capabilities`:

```php
add_action('wu_domain_seller_register_capabilities', function(\WP_Ultimo\Integrations\Integration_Registry $registry) {
    $registry->add_capability('my-registrar', new \My\Plugin\Capabilities\My_Registrar_Selling());
});
```

Prvi argument za `add_capability()` je **ID pružatelja** — slug malim slovima koji se koristi za identifikaciju vašeg registrara u postavkama, konfiguraciji proizvoda i kanalima zapisa. Upotrijebite nešto jedinstveno (npr. slug vaše tvrtke).

---

## Dodavanje polja vjerodajnica u čarobnjak {#adding-credential-fields-to-the-wizard}

Kako biste administratorima omogućili unos vjerodajnica putem čarobnjaka za postavljanje, registrirajte svoju integraciju:

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

Vjerodajnice se pohranjuju kao mrežne opcije koristeći ID-jeve polja kao ključeve. Dohvatite ih u svojoj capability klasi s `wu_get_setting('my_registrar_api_key')`.

---

## Hookovi za radnje nakon registracije {#hooks-for-post-registration-actions}

Koristite ove radnje za pokretanje webhookova, provisioninga, obavijesti ili CRM ažuriranja:

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

## Zapisivanje {#logging}

Pišite u kanal zapisnika specifičan za svog pružatelja koristeći `wu_log_add()`:

```php
wu_log_add('domain-seller-my-registrar', "Registered {$domain_name} successfully", 'info');
wu_log_add('domain-seller-my-registrar', "Registration failed: {$error}", 'error');
```

Zapisnici se pojavljuju pod **Administracija mreže › Ultimate Multisite › Zapisnici › domain-seller-my-registrar**.
