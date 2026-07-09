---
title: Izdelava integracije z registrarjem po meri
sidebar_position: 10
_i18n_hash: ee4c4ad8a1defe5760fd09b8f173ef7d
---
# Gradnja integracije registrarja po meri {#building-a-custom-registrar-integration}

Dodatek Domain Seller uporablja vzorec **Integration Registry**. Vsak registrar je PHP razred, ki implementira `Domain_Selling_Capability` in se registrira prek action hooka `wu_domain_seller_register_capabilities`.

Ta vodnik prikazuje, kako povezati registrarja po meri.

## Vmesnik {#the-interface}

Vaš razred mora implementirati `WP_Ultimo\Integrations\Capabilities\Domain_Selling_Capability` in razširiti `WP_Ultimo\Integrations\Base_Capability_Module`.

Zahtevane metode:

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

### Izbirne metode {#optional-methods}

Implementirajte jih, da odklenete dodatne funkcije. Dodatek zazna podporo prek `method_exists()`:

| Metoda | Odklepa |
|---|---|
| `supports_whois_privacy(): bool` | Možnost zasebnosti WHOIS v nastavitvah izdelka |
| `enable_whois_privacy(string $domain_name): array` | Samodejno omogoči zasebnost ob registraciji |
| `get_dns_records(string $domain_name): array` | Zavihek za prikaz DNS za stranko |
| `add_dns_record(string $domain_name, array $record_data): array` | Stranka lahko doda zapise DNS |
| `update_dns_record(string $domain, string $record_id, array $record_data): array` | Stranka lahko ureja zapise DNS |
| `delete_dns_record(string $domain, string $record_id, array $data): array` | Stranka lahko izbriše zapise DNS |
| `update_nameservers(string $domain_name, array $nameservers): array` | Upravljanje nameserverjev |
| `get_epp_code(string $domain_name): array` | Prenos domene (odhodni) |
| `transfer_domain(string $domain, string $auth_code, array $registrant_info, array $options): array` | Prenos domene (dohodni) |

### Konvencija vrnjene vrednosti {#return-value-convention}

Vse metode vrnejo polje z najmanj ključem `success`:

```php
// Success
return ['success' => true, 'data' => [...]];

// Failure
return ['success' => false, 'message' => 'Human-readable error'];
```

---

## Registracija vaše zmožnosti {#registering-your-capability}

Registrirajte svoj razred z actionom `wu_domain_seller_register_capabilities`:

```php
add_action('wu_domain_seller_register_capabilities', function(\WP_Ultimo\Integrations\Integration_Registry $registry) {
    $registry->add_capability('my-registrar', new \My\Plugin\Capabilities\My_Registrar_Selling());
});
```

Prvi argument za `add_capability()` je **ID ponudnika** — slug z malimi črkami, ki se uporablja za identifikacijo vašega registrarja v nastavitvah, konfiguraciji izdelka in dnevniških kanalih. Uporabite nekaj edinstvenega (npr. slug vašega podjetja).

---

## Dodajanje polj za poverilnice v čarovnika {#adding-credential-fields-to-the-wizard}

Da lahko skrbniki vnesejo poverilnice prek čarovnika za nastavitev, registrirajte svojo integracijo:

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

Poverilnice so shranjene kot omrežne možnosti z ID-ji polj kot ključi. Pridobite jih v svojem razredu zmožnosti z `wu_get_setting('my_registrar_api_key')`.

---

## Hooki za dejanja po registraciji {#hooks-for-post-registration-actions}

Uporabite te actione za sprožitev webhookov, zagotavljanja, obvestil ali posodobitev CRM:

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

## Dnevniki {#logging}

Pišite v dnevniški kanal, specifičen za vašega ponudnika, z uporabo `wu_log_add()`:

```php
wu_log_add('domain-seller-my-registrar', "Registered {$domain_name} successfully", 'info');
wu_log_add('domain-seller-my-registrar', "Registration failed: {$error}", 'error');
```

Dnevniki se prikažejo pod **Omrežni skrbnik › Ultimate Multisite › Dnevniki › domain-seller-my-registrar**.
